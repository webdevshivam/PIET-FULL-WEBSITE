
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator
} from './ui/breadcrumb';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { AccessibilityFeatures } from './AccessibilityFeatures';
import { useToast } from '../hooks/use-toast';
import { uploadImageToCloudinarySecure } from '../lib/cloudinary';

const ComplaintsRegistration = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    studentId: '',
    email: '',
    phone: '',
    department: '',
    batch: '',
    complaintCategory: '',
    subject: '',
    description: '',
    urgency: '',
    attachment: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAttachmentChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      attachment: file
    }));
  };

  const uploadAttachment = async (file) => {
    if (!file) return null;
    
    try {
      console.log('Uploading attachment to Cloudinary...');
      const attachmentUrl = await uploadImageToCloudinarySecure(file);
      
      if (attachmentUrl) {
        console.log('Attachment uploaded successfully:', attachmentUrl);
        return attachmentUrl;
      } else {
        throw new Error('Failed to upload attachment to Cloudinary');
      }
    } catch (error) {
      console.error('Attachment upload failed:', error);
      toast({
        title: "Upload Error",
        description: "Failed to upload attachment. Please try again.",
        variant: "destructive",
      });
    }
    return null;
  };

  const validateForm = () => {
    const errors = [];
    
    if (!formData.fullName.trim()) errors.push("Full name is required");
    if (!formData.studentId.trim()) errors.push("Student/Employee ID is required");
    if (!formData.email.trim()) errors.push("Email is required");
    if (!formData.phone.trim()) errors.push("Phone number is required");
    if (!formData.department) errors.push("Department is required");
    if (!formData.batch) errors.push("Batch/Year is required");
    if (!formData.complaintCategory) errors.push("Complaint category is required");
    if (!formData.subject.trim()) errors.push("Subject is required");
    if (!formData.description.trim()) errors.push("Description is required");
    if (!formData.urgency) errors.push("Urgency level is required");
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      errors.push("Please enter a valid email address");
    }
    
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      toast({
        title: "Validation Error",
        description: validationErrors.join(", "),
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Upload attachment first if exists
      let attachmentUrl = null;
      if (formData.attachment) {
        attachmentUrl = await uploadAttachment(formData.attachment);
      }

      // Prepare data according to schema
      const complaintData = {
        fullName: formData.fullName.trim(),
        studentId: formData.studentId.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim(),
        department: formData.department,
        batch: formData.batch,
        complaintCategory: formData.complaintCategory,
        subject: formData.subject.trim(),
        description: formData.description.trim(),
        urgency: formData.urgency,
        ...(attachmentUrl && { attachmentUrl })
      };

      console.log('Sending complaint data:', complaintData);

      const response = await fetch('/api/complaint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(complaintData),
      });

      console.log('Response status:', response.status);
      
      const responseText = await response.text();
      console.log('Response text:', responseText);
      
      if (response.ok) {
        let result;
        try {
          result = JSON.parse(responseText);
        } catch (parseError) {
          result = { message: 'Complaint submitted successfully' };
        }
        
        toast({
          title: "Success!",
          description: "Your complaint has been submitted successfully! We will review it shortly.",
        });
        
        // Reset form
        setFormData({
          fullName: '',
          studentId: '',
          email: '',
          phone: '',
          department: '',
          batch: '',
          complaintCategory: '',
          subject: '',
          description: '',
          urgency: '',
          attachment: null
        });
        
        // Reset file input
        const fileInput = document.getElementById('attachment') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
        
      } else {
        let errorMessage = 'Complaint submission failed';
        try {
          const errorData = JSON.parse(responseText);
          errorMessage = errorData.message || errorData.error || 'Invalid data - please check all required fields';
        } catch (parseError) {
          errorMessage = responseText || 'Complaint submission failed';
        }
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error('Complaint submission error:', error);
      toast({
        title: "Submission Error",
        description: error.message || "Failed to submit complaint. Please check all fields and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <AccessibilityFeatures />
      <Header />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/complaints">Complaints</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Submit Complaint</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
            <i className="fas fa-clipboard-list text-white text-2xl"></i>
          </div>
          <h1 className="text-4xl font-bold text-primary mb-4">Submit a Complaint</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your voice matters. Help us improve by sharing your concerns, suggestions, or reporting any issues. 
            All complaints are handled with complete confidentiality and reviewed promptly.
          </p>
        </div>

        {/* Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center border-l-4 border-l-primary">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <i className="fas fa-shield-alt text-primary text-xl"></i>
              </div>
              <CardTitle className="text-lg">Confidential</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Your identity and complaint details are kept strictly confidential</p>
            </CardContent>
          </Card>

          <Card className="text-center border-l-4 border-l-secondary">
            <CardHeader>
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <i className="fas fa-clock text-secondary text-xl"></i>
              </div>
              <CardTitle className="text-lg">Quick Response</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">We aim to respond to all complaints within 48-72 hours</p>
            </CardContent>
          </Card>

          <Card className="text-center border-l-4 border-l-accent">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <i className="fas fa-check-circle text-accent text-xl"></i>
              </div>
              <CardTitle className="text-lg">Fair Resolution</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">All complaints are investigated fairly and appropriate action is taken</p>
            </CardContent>
          </Card>
        </div>

        {/* Complaint Form */}
        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardHeader className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-t-lg">
            <CardTitle className="text-2xl text-center flex items-center justify-center">
              <i className="fas fa-edit mr-3"></i>
              Complaint Registration Form
            </CardTitle>
            <CardDescription className="text-center text-primary-light">
              Please provide detailed information about your complaint
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-sm font-medium">Full Name *</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="studentId" className="text-sm font-medium">Student/Employee ID *</Label>
                  <Input
                    id="studentId"
                    name="studentId"
                    type="text"
                    required
                    value={formData.studentId}
                    onChange={handleInputChange}
                    placeholder="Enter your ID number"
                    className="h-11"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="h-11"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="department" className="text-sm font-medium">Department *</Label>
                  <Select name="department" onValueChange={(value) => setFormData(prev => ({...prev, department: value}))}>
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Select your department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="computer-science">Computer Science Engineering</SelectItem>
                      <SelectItem value="applied-sciences">Applied Sciences</SelectItem>
                      <SelectItem value="artificial-intelligence">AI & Data Science</SelectItem>
                      <SelectItem value="iot">Internet of Things</SelectItem>
                      <SelectItem value="administration">Administration</SelectItem>
                      <SelectItem value="library">Library</SelectItem>
                      <SelectItem value="hostel">Hostel</SelectItem>
                      <SelectItem value="transport">Transport</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="batch" className="text-sm font-medium">Batch/Year *</Label>
                  <Select name="batch" onValueChange={(value) => setFormData(prev => ({...prev, batch: value}))}>
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Select your batch" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2025">2025</SelectItem>
                      <SelectItem value="2024">2024</SelectItem>
                      <SelectItem value="2023">2023</SelectItem>
                      <SelectItem value="2022">2022</SelectItem>
                      <SelectItem value="2021">2021</SelectItem>
                      <SelectItem value="faculty">Faculty</SelectItem>
                      <SelectItem value="staff">Staff</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Complaint Details */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-primary mb-4">Complaint Details</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <Label htmlFor="complaintCategory" className="text-sm font-medium">Complaint Category *</Label>
                    <Select name="complaintCategory" onValueChange={(value) => setFormData(prev => ({...prev, complaintCategory: value}))}>
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder="Select complaint category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="academic">Academic Issues</SelectItem>
                        <SelectItem value="infrastructure">Infrastructure</SelectItem>
                        <SelectItem value="harassment">Harassment/Discrimination</SelectItem>
                        <SelectItem value="administration">Administrative Issues</SelectItem>
                        <SelectItem value="facilities">Facilities (Library, Lab, etc.)</SelectItem>
                        <SelectItem value="hostel">Hostel Related</SelectItem>
                        <SelectItem value="transport">Transport</SelectItem>
                        <SelectItem value="fee">Fee Related</SelectItem>
                        <SelectItem value="examination">Examination</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="urgency" className="text-sm font-medium">Urgency Level *</Label>
                    <Select name="urgency" onValueChange={(value) => setFormData(prev => ({...prev, urgency: value}))}>
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder="Select urgency level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="critical">Critical</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <Label htmlFor="subject" className="text-sm font-medium">Subject/Title *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Brief title describing your complaint"
                    className="h-11"
                  />
                </div>

                <div className="space-y-2 mb-6">
                  <Label htmlFor="description" className="text-sm font-medium">Detailed Description *</Label>
                  <Textarea
                    id="description"
                    name="description"
                    required
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Please provide detailed information about your complaint, including dates, locations, and any relevant circumstances..."
                    className="min-h-[150px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="attachment" className="text-sm font-medium">Supporting Documents (Optional)</Label>
                  <Input
                    id="attachment"
                    type="file"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    onChange={handleAttachmentChange}
                    className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary-dark h-11"
                  />
                  <p className="text-xs text-gray-500">Accepted formats: PDF, DOC, DOCX, JPG, PNG (Max size: 5MB)</p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-6 border-t">
                <Button type="submit" disabled={isSubmitting} className="px-12 py-3 text-lg bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary">
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane mr-2"></i>
                      Submit Complaint
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Additional Information */}
        <div className="mt-12 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-center text-primary mb-6">What Happens Next?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">1</span>
              </div>
              <h4 className="font-semibold mb-2">Acknowledgment</h4>
              <p className="text-sm text-gray-600">You'll receive an acknowledgment email with your complaint ID</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">2</span>
              </div>
              <h4 className="font-semibold mb-2">Review</h4>
              <p className="text-sm text-gray-600">Our team will review your complaint and may contact you for clarification</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">3</span>
              </div>
              <h4 className="font-semibold mb-2">Investigation</h4>
              <p className="text-sm text-gray-600">We'll investigate the matter thoroughly and fairly</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">4</span>
              </div>
              <h4 className="font-semibold mb-2">Resolution</h4>
              <p className="text-sm text-gray-600">You'll be informed of the outcome and any actions taken</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ComplaintsRegistration;
