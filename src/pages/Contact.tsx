
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you within 24 hours.');
    console.log('Contact form submitted:', form);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about buying or selling a car? We're here to help you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-effect rounded-3xl p-8">
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-gray-600">+230 5503 3736</p>
                    <p className="text-sm text-gray-500">Monday - Saturday, 8:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-gray-600">carsrus88@outlook.com</p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Address</h3>
                    <p className="text-gray-600">CarsRus Ltd</p>
                    <p className="text-gray-600">Royal Road, St Pierre</p>
                    <p className="text-gray-600">Mauritius</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Business Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 8:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="glass-effect rounded-3xl p-8">
              <h2 className="text-2xl font-bold mb-6">Our Services</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-2xl mb-2">🚗</div>
                  <div className="font-semibold">Car Sales</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-2xl mb-2">💰</div>
                  <div className="font-semibold">Car Purchase</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-2xl mb-2">🔧</div>
                  <div className="font-semibold">Inspection</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-2xl mb-2">📋</div>
                  <div className="font-semibold">Documentation</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-effect rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <MessageCircle className="w-6 h-6 mr-2 text-blue-600" />
              Send us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+230 5123 4567"
                    className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="buying">Buying a Car</option>
                  <option value="selling">Selling a Car</option>
                  <option value="financing">Car Financing</option>
                  <option value="inspection">Vehicle Inspection</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us how we can help you..."
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Send className="inline w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-16 glass-effect rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-6">Find Us</h2>
          <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <MapPin className="w-12 h-12 mx-auto mb-2" />
              <p>Interactive map would be integrated here</p>
              <p className="text-sm">Royal Road, St Pierre, Mauritius</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
