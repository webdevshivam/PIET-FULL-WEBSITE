import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

const contactSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  phoneNumber: z.string().min(10, 'Phone number should be at least 10 digits'),
  subject: z.string().min(1, 'Please select a subject'),
  message: z.string().min(10, 'Message should be at least 10 characters')
});

type ContactFormData = z.infer<typeof contactSchema>;

type ContactInfoItemProps = {
  icon: string;
  title: string;
  children: React.ReactNode;
};

const ContactInfoItem = ({ icon, title, children }: ContactInfoItemProps) => (
  <div className="flex items-start">
    <div className="bg-primary text-white p-3 rounded-full mr-4">
      <i className={icon}></i>
    </div>
    <div>
      <h3 className="font-heading font-semibold text-primary mb-1">{title}</h3>
      {children}
    </div>
  </div>
);

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormData) => {
      return apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon!",
      });
      reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive"
      });
    }
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <section className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">Get in Touch</h2>
            <p className="text-neutral-600 mb-8">
              We're here to answer any questions you may have about our programs, admissions process, or campus facilities.
            </p>
            
            <div className="space-y-6">
              <ContactInfoItem icon="fas fa-map-marker-alt" title="Address">
                <p className="text-neutral-600">ISI-2, RIICO Institutional Area, Sitapura, Jaipur, Rajasthan 302022</p>
              </ContactInfoItem>
              
              <ContactInfoItem icon="fas fa-phone-alt" title="Phone">
                <p className="text-neutral-600">+91-141-4071500</p>
                <p className="text-neutral-600">+91-141-4071555</p>
              </ContactInfoItem>
              
              <ContactInfoItem icon="fas fa-envelope" title="Email">
                <p className="text-neutral-600">info@poornima.org</p>
                <p className="text-neutral-600">admissions@poornima.org</p>
              </ContactInfoItem>
              
              <ContactInfoItem icon="fas fa-clock" title="Office Hours">
                <p className="text-neutral-600">Monday - Saturday: 9:00 AM - 5:00 PM</p>
                <p className="text-neutral-600">Sunday: Closed</p>
              </ContactInfoItem>
            </div>
            
            <div className="mt-8">
              <h3 className="font-heading font-semibold text-primary mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" aria-label="Facebook" className="bg-primary hover:bg-primary-light text-white w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" aria-label="Twitter" className="bg-primary hover:bg-primary-light text-white w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" aria-label="Instagram" className="bg-primary hover:bg-primary-light text-white w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" aria-label="LinkedIn" className="bg-primary hover:bg-primary-light text-white w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" aria-label="YouTube" className="bg-primary hover:bg-primary-light text-white w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="font-heading font-bold text-2xl text-primary mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="fullName" className="block text-neutral-700 font-medium mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="fullName" 
                      {...register('fullName')}
                      className={`w-full px-4 py-3 border ${errors.fullName ? 'border-red-500' : 'border-neutral-300'} rounded-md focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-20 outline-none transition`}
                    />
                    {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-neutral-700 font-medium mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      {...register('email')}
                      className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-neutral-300'} rounded-md focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-20 outline-none transition`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="phoneNumber" className="block text-neutral-700 font-medium mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phoneNumber" 
                      {...register('phoneNumber')}
                      className={`w-full px-4 py-3 border ${errors.phoneNumber ? 'border-red-500' : 'border-neutral-300'} rounded-md focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-20 outline-none transition`}
                    />
                    {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-neutral-700 font-medium mb-2">Subject</label>
                    <select 
                      id="subject" 
                      {...register('subject')}
                      className={`w-full px-4 py-3 border ${errors.subject ? 'border-red-500' : 'border-neutral-300'} rounded-md focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-20 outline-none transition`}
                    >
                      <option value="">Select a subject</option>
                      <option value="admission">Admission Inquiry</option>
                      <option value="programs">Program Information</option>
                      <option value="placement">Placement Related</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-neutral-700 font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    {...register('message')}
                    className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-neutral-300'} rounded-md focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-20 outline-none transition`}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>
                
                <button 
                  type="submit" 
                  className="bg-primary hover:bg-primary-light text-white font-semibold px-8 py-3 rounded-md transition duration-300 flex items-center"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? (
                    <>
                      <span className="mr-2">Sending...</span>
                      <i className="fas fa-spinner fa-spin"></i>
                    </>
                  ) : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
