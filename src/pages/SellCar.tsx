
import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Card } from '../components/ui/card';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import ImageUpload from '../components/sell-car/ImageUpload';
import CarDetailsForm from '../components/sell-car/CarDetailsForm';
import LoginRequiredView from '../components/sell-car/LoginRequiredView';
import SuccessView from '../components/sell-car/SuccessView';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../integrations/supabase/client';
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '../components/ui/alert-dialog';
import ReCAPTCHA from 'react-google-recaptcha';
import { Checkbox } from '../components/ui/checkbox';
import TermsModal from '../components/TermsModal';

const SellCar = () => {
  const { user, loading } = useAuth();
  const [images, setImages] = useState<File[]>([]);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    make: '',
    model: '',
    year: '',
    price: '',
    mileage: '',
    engine_capacity: '',
    seats: '',
    doors: '',
    color: '',
    type: '',
    fuel: '',
    engine: '',
    transmission: '',
    telephone: '',
    description: ''
  });

  const uploadImageToSupabase = async (file: File): Promise<string> => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `car-images/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('car-images')
      .upload(filePath, file);

    if (uploadError) {
      throw uploadError;
    }

    const { data } = supabase.storage
      .from('car-images')
      .getPublicUrl(filePath);

    return data.publicUrl;
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      const totalImages = images.length + selectedFiles.length;
      
      if (totalImages > 10) {
        alert('Maximum 10 images allowed');
        return;
      }
      
      setImages(prev => [...prev, ...selectedFiles]);
      
      // Create URLs for preview
      selectedFiles.forEach(file => {
        const url = URL.createObjectURL(file);
        setImageUrls(prev => [...prev, url]);
      });
    }
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
    setImageUrls(prev => prev.filter((_, i) => i !== index));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Special handling for telephone number
    if (name === 'telephone') {
      // Only allow numbers and limit to 8 digits
      const numericValue = value.replace(/\D/g, '').slice(0, 8);
      setForm({ ...form, [name]: numericValue });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (images.length === 0) {
      alert('Please upload at least one image');
      return;
    }
    
    // Validate telephone number
    if (form.telephone && form.telephone.length !== 8) {
      alert('Telephone number must be exactly 8 digits');
      return;
    }

    if (!user) {
      alert('Please log in to sell your car');
      return;
    }

    if (!recaptchaValue) {
      alert('Please complete the reCAPTCHA verification');
      return;
    }

    if (!termsAccepted) {
      alert('Please accept the Terms and Conditions to continue');
      return;
    }
    
    // Show confirmation dialog first
    setShowConfirmDialog(true);
  };

  const handleConfirmSubmit = async () => {
    setShowConfirmDialog(false);
    setIsSubmitting(true);
    
    try {
      // Verify reCAPTCHA first
      const { data: recaptchaData, error: recaptchaError } = await supabase.functions.invoke('verify-recaptcha', {
        body: { recaptchaResponse: recaptchaValue },
      });

      if (recaptchaError || !recaptchaData?.success) {
        throw new Error('reCAPTCHA verification failed. Please try again.');
      }
      // Upload images to Supabase Storage
      const uploadedImageUrls = await Promise.all(
        images.map(file => uploadImageToSupabase(file))
      );
      
      // Insert car data into Supabase with upload = false by default
      const { data, error } = await supabase
        .from('cars')
        .insert([
          {
            user_id: user.id,
            make: form.make,
            model: form.model,
            year: parseInt(form.year),
            price: parseInt(form.price),
            mileage: form.mileage,
            color: form.color,
            fuel: form.fuel,
            transmission: form.transmission,
            seats: parseInt(form.seats) || 5,
            engine_capacity: parseInt(form.engine_capacity) || null,
            doors: parseInt(form.doors) || null,
            telephone: form.telephone,
            description: form.description,
            images: uploadedImageUrls,
            upload: false, // Set to false by default, admin will approve
          }
        ])
        .select();

      if (error) {
        throw error;
      }

      console.log('Car listing created successfully:', data);

      // Send notification email to admin
      try {
        const { data: profile } = await supabase
          .from('profiles')
          .select('email')
          .eq('id', user.id)
          .single();

        await supabase.functions.invoke('send-car-notification', {
          body: {
            carDetails: {
              make: form.make,
              model: form.model,
              year: parseInt(form.year),
              price: parseInt(form.price),
            },
            sellerEmail: profile?.email || user.email,
          },
        });
      } catch (emailError) {
        console.error('Error sending notification email:', emailError);
        // Don't fail the whole process if email fails
      }

      setSubmitSuccess(true);
      
      // Redirect to home page after 3 seconds
      setTimeout(() => {
        navigate('/');
      }, 3000);
      
    } catch (error) {
      console.error('Error submitting car:', error);
      alert('Error submitting car listing. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
        <Header />
        <div className="flex items-center justify-center pt-24">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600 mx-auto"></div>
            <p className="mt-2 text-gray-600">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
        <Header />
        <div className="pt-24">
          <LoginRequiredView />
        </div>
      </div>
    );
  }

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
        <Header />
        <div className="pt-24">
          <SuccessView />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      <Header />
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="p-8 shadow-2xl border-red-200 bg-white/90 backdrop-blur-sm">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-red-600 mb-2">Sell Your Car</h1>
              <p className="text-gray-600">List your vehicle on Mauritius' most trusted marketplace</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <ImageUpload
                images={images}
                imageUrls={imageUrls}
                onImageUpload={handleImageUpload}
                onRemoveImage={removeImage}
              />

              <CarDetailsForm
                form={form}
                handleChange={handleChange}
              />

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Describe your car's condition, features, and any additional information..."
                  rows={4}
                  className="border-red-200 focus:border-red-500 focus:ring-red-500"
                />
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start space-x-3 p-4 border border-red-200 rounded-lg bg-red-50">
                <Checkbox 
                  id="terms"
                  checked={termsAccepted}
                  onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
                  className="mt-1"
                />
                <Label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer">
                  I am agreeable to the{' '}
                  <button
                    type="button"
                    onClick={() => setShowTermsModal(true)}
                    className="text-red-600 hover:text-red-700 underline font-medium"
                  >
                    Terms and Conditions
                  </button>
                  {' '}of Carsrus Ltd (Include Privacy policy)
                </Label>
              </div>

              {/* reCAPTCHA */}
              <div className="flex justify-center">
                <ReCAPTCHA
                  sitekey="6LeHpqUrAAAAAIdpQlqpLsXPDpPJQ8fNjfKBKiF8"
                  onChange={setRecaptchaValue}
                  onExpired={() => setRecaptchaValue(null)}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || !recaptchaValue || !termsAccepted}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg font-semibold disabled:opacity-50"
              >
                {isSubmitting ? 'Listing Your Car...' : 'List My Car'}
              </Button>
            </form>
          </Card>
        </div>
      </div>

      {/* Confirmation Dialog */}
      <AlertDialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <AlertDialogContent className="max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle>Car Listing Submission</AlertDialogTitle>
            <AlertDialogDescription className="text-sm leading-relaxed">
              Thank you for uploading your car on CarsRus. Your car will be posted on the page once approved by the Administrator. If the buyer of your car require lease/loan facilities please contact Mr Raj on 55033736 (Whatsapp available as well).
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={handleConfirmSubmit} className="bg-red-600 hover:bg-red-700">
              OK
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Terms and Conditions Modal */}
      <TermsModal 
        open={showTermsModal} 
        onClose={() => setShowTermsModal(false)} 
      />
    </div>
  );
};

export default SellCar;
