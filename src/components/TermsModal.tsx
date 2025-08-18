import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from './ui/dialog';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';

interface TermsModalProps {
  open: boolean;
  onClose: () => void;
}

const TermsModal: React.FC<TermsModalProps> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-red-600">Terms and Conditions</DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-sm">
            <section>
              <h3 className="font-semibold text-base mb-2">1. Introduction</h3>
              <p>Welcome to Carsrus Ltd. By accessing or using our website carsrus.mu, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, you should not use our website. Please also review our Privacy Policy, which forms part of these Terms and Conditions.</p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">2. Definitions</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>"We", "Us", "Our" refers to Carsrus Ltd, the car dealership operating this website.</li>
                <li>"You", "Your" refers to the user, visitor, or customer of this website.</li>
                <li>"Website" refers to carsrus.mu.</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">3. Services Provided</h3>
              <p className="mb-2">The content on carsrus.mu is provided for general information purposes only and is not intended as advice on which you should rely. You should obtain professional or specialist advice before taking, or refraining from, any action based on the information available on our website. The publication of any material on the website should not be interpreted as a warranty or guarantee of the quality or availability of any services.</p>
              <p className="mb-2">Some of the content, including vehicle advertisements and related materials, may be provided by third parties. We do not verify the accuracy or completeness of such information, and you rely on it at your own risk.</p>
              <p className="mb-2">If you wish to purchase any vehicle, product, or service advertised on the website, it is solely your responsibility to verify all details, including price, quality, condition, and provenance, through your own inspections and inquiries. We accept no liability for any information featured on the website, and we do not undertake to review or verify such information.</p>
              <p className="mb-2">carsrus.mu may occasionally contain technical errors or typographical mistakes. While we make reasonable efforts to update the information, we make no representations, warranties, or guarantees, whether express or implied, regarding its accuracy, completeness, or timeliness.</p>
              <p className="mb-2">We accept no responsibility for any loss or damage arising from your use of or reliance on the content provided on the website. We reserve the right to refuse to publish, classify, edit, or remove any advertisement at our sole discretion to comply with these Terms and any applicable laws or regulations.</p>
              <p>Carsrus Ltd provides an online platform to list vehicles for sale, connect buyers and sellers, and offer related services such as financing and trade-in evaluations. We are not a broker or retailer and do not own the vehicles listed on our website. We are not a party to any transaction between buyers and sellers.</p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">4. Registration</h3>
              <p className="mb-2">To use certain services on our website, you may be required to register and create an Account (Free of charge for individual private sellers only). You may choose, or be assigned, a user identification code and password.</p>
              <p className="mb-2">You are fully responsible for all activities conducted through your Account, including but not limited to posting vehicle, product, or service advertisements.</p>
              <p className="mb-2">You agree that all information you provide during registration will be truthful, accurate, and complete. Any personal data you provide during registration will be processed in accordance with our Privacy Policy.</p>
              <p>To access certain features, you may be required to create an account by providing accurate, current, and complete information. You are responsible for maintaining the confidentiality of your login credentials and all activities under your account.</p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">5. Vehicle Listings & Adverts</h3>
              <p className="mb-2">When posting an advert, you agree that:</p>
              <ul className="list-disc list-inside space-y-1 mb-2">
                <li>You have the legal right to sell the vehicle.</li>
                <li>All information is accurate and not misleading.</li>
                <li>Photographs meet quality standards and do not infringe on third-party rights.</li>
                <li>You are solely responsible for your advert content.</li>
              </ul>
              <p>Adverts may be published for a specified period and renewed according to our guidelines. We reserve the right to refuse, edit, or remove any advert that violates these Terms.</p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">6. Fees and Payments</h3>
              <p>Certain services may incur fees, which will be disclosed prior to posting. All fees are payable in advance and are non-refundable unless stated otherwise.</p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">7. Prohibited Uses</h3>
              <p>You agree not to use the website for unlawful purposes, transmit harmful code, post fraudulent information, harvest personal data without consent, or engage in activities that could harm the platform.</p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">8. Personal Data in Adverts</h3>
              <p>By submitting an advert, you consent to the publication of your personal data (including name, contact details, and vehicle details) on the website, making it visible to the public worldwide. This information may also be shared with third parties such as potential buyers, insurance providers, and finance companies for purposes related to your advert.</p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">9. Third-Party Links</h3>
              <p>Our website may contain links to third-party websites or services. We are not responsible for their content, policies, or practices.</p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">10. Intellectual Property</h3>
              <p>All website content is the property of Carsrus Ltd or its licensors and is protected by copyright and trademark laws. You may not copy, reproduce, or distribute content without prior written consent.</p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">11. Limitation of Liability</h3>
              <p>We are not liable for any direct, indirect, or consequential damages arising from your use of the website or reliance on its content. All services are provided 'as is' without warranties of any kind.</p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">12. Termination</h3>
              <p>We reserve the right to suspend or terminate your access to the website at our discretion if you violate these Terms.</p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">13. Governing Law</h3>
              <p>These Terms are governed by the laws of Mauritius, and any disputes shall be subject to the exclusive jurisdiction of the courts of Mauritius.</p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">14. Contact Us</h3>
              <p>Carsrus Ltd<br />Email: carsrus88@outlook.com<br />Phone: 55033736</p>
            </section>

            <section>
              <h3 className="font-semibold text-xl mb-4 text-red-600">Privacy Policy</h3>
              
              <h4 className="font-semibold text-base mb-2">1. Introduction</h4>
              <p className="mb-4">Carsrus Ltd is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share your personal data when you use our website carsrus.mu.</p>

              <h4 className="font-semibold text-base mb-2">2. Information We Collect</h4>
              <p className="mb-2">We may collect:</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Personal Information: Name, email, phone number, address.</li>
                <li>Vehicle Information: Details of vehicles you list for sale.</li>
                <li>Technical Data: IP address, browser type, usage data.</li>
                <li>Transaction Data: Payment and service usage history.</li>
              </ul>

              <h4 className="font-semibold text-base mb-2">3. How We Collect Information</h4>
              <p className="mb-4">We collect information when you register, submit an advert, request a quote, subscribe to newsletters, or interact with our services.</p>

              <h4 className="font-semibold text-base mb-2">4. How We Use Your Information</h4>
              <p className="mb-2">We use your information to:</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Facilitate vehicle listings and transactions.</li>
                <li>Display seller contact information publicly in adverts.</li>
                <li>Share with relevant third parties such as buyers, insurance companies, and finance providers.</li>
                <li>Provide customer support and respond to inquiries.</li>
                <li>Send updates, offers, and service-related communications.</li>
              </ul>

              <h4 className="font-semibold text-base mb-2">5. Sharing Your Information</h4>
              <p className="mb-2">We may share your personal data with:</p>
              <ul className="list-disc list-inside space-y-1 mb-2">
                <li>Potential buyers accessing your advert.</li>
                <li>Insurance and finance partners when you request related services.</li>
                <li>Service providers assisting in website operations.</li>
              </ul>
              <p className="mb-4">We do not sell your personal data to unrelated third parties.</p>

              <h4 className="font-semibold text-base mb-2">6. Cookies</h4>
              <p className="mb-4">We use cookies to improve user experience, remember preferences, and analyse site traffic. You can disable cookies in your browser settings, but this may affect functionality.</p>

              <h4 className="font-semibold text-base mb-2">7. Data Security</h4>
              <p className="mb-4">We implement reasonable security measures to protect your personal data, but cannot guarantee 100% security.</p>

              <h4 className="font-semibold text-base mb-2">8. Your Rights</h4>
              <p className="mb-4">You have the right to access, correct, or delete your personal data, and to opt-out of marketing communications by contacting us.</p>

              <h4 className="font-semibold text-base mb-2">9. Data Breach Notification</h4>
              <p className="mb-4">In the event of a data breach affecting your personal information, we will notify you within 7 business days via email.</p>

              <h4 className="font-semibold text-base mb-2">10. Changes to This Policy</h4>
              <p className="mb-4">We may update this Privacy Policy from time to time. Any changes will be posted on our website with a revised 'Last Updated' date.</p>

              <h4 className="font-semibold text-base mb-2">11. Contact Us</h4>
              <p>Carsrus Ltd<br />Email: carsrus88@outlook.com<br />Phone: 55033736</p>
            </section>
          </div>
        </ScrollArea>

        <DialogFooter className="gap-2">
          <Button variant="outline" onClick={onClose}>Close</Button>
          <Button onClick={onClose} className="bg-red-600 hover:bg-red-700">OK</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TermsModal;