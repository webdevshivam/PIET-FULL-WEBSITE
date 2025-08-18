import { Link } from "wouter";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

type SocialLinkProps = {
  icon: string;
  href: string;
  label: string;
};

const SocialLink = ({ icon, href, label }: SocialLinkProps) => (
  <a
    href={href}
    aria-label={label}
    className="text-white hover:text-accent transition"
  >
    <i className={icon}></i>
  </a>
);

type FooterLinkProps = {
  href: string;
  label: string;
};

const FooterLink = ({ href, label }: FooterLinkProps) => (
  <li>
    <Link href={href}>
      <a className="hover:text-accent transition">{label}</a>
    </Link>
  </li>
);

type ContactItemProps = {
  icon: string;
  children: React.ReactNode;
};

const ContactItem = ({ icon, children }: ContactItemProps) => (
  <li className="flex items-start">
    <i className={`${icon} mt-1 mr-3`}></i>
    <span>{children}</span>
  </li>
);

export default function Footer() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Thank you for subscribing!",
      description: "You have been added to our newsletter list.",
    });
    setEmail("");
  };

  const socialLinks: SocialLinkProps[] = [
    { icon: "fab fa-facebook-f", href: "#", label: "Facebook" },
    { icon: "fab fa-twitter", href: "#", label: "Twitter" },
    { icon: "fab fa-instagram", href: "#", label: "Instagram" },
    { icon: "fab fa-linkedin-in", href: "#", label: "LinkedIn" },
    { icon: "fab fa-youtube", href: "#", label: "YouTube" },
  ];

  const quickLinks: FooterLinkProps[] = [
    { href: "/about", label: "About Us" },
    { href: "/admission-fees", label: "Admission & Fees" },
    { href: "/placement", label: "Placements" },
    { href: "/gallery", label: "Gallery" },
    { href: "/hostel-facilities", label: "Hostel Facilities" },
    { href: "/facilities", label: "Facilities" },
    { href: "/complaints", label: "Complaints" },
  ];

  const programLinks: FooterLinkProps[] = [
    { href: "/computer-science", label: "Computer Science & Engineering" },
    { href: "/ai-data-science", label: "AI & Data Science" },
    { href: "/iot", label: "Internet of Things" },
    { href: "/applied-science", label: "Applied Sciences" },
    { href: "/naac", label: "NAAC Accreditation" },
    { href: "/aishe", label: "AISHE" },
    { href: "/iso-certificate", label: "ISO Certificate" },
  ];

  const complianceLinks: FooterLinkProps[] = [
    { href: "/about", label: "About" },
    { href: "/mandatory-disclosure", label: "Mandatory Disclosure" },
    { href: "/grievance-submission", label: "Grievance Submission" },
    { href: "/campus-life", label: "Campus Life @ PIET" },
    { href: "/green-campus", label: "Green Campus" },
    { href: "/study-in-india", label: "Study In India" },
    { href: "/aicte-feedback", label: "AICTE Feedback Facility" },
    { href: "/ugc-compliances", label: "UGC Compliances" },
    { href: "/internal-complaints-committee", label: "Internal Complaints Committee" },
    { href: "/student-grievances", label: "Redress of Grievances of Students" },
    { href: "/public-self-disclosure", label: "Public Self-Disclosure" },
    { href: "/fee-refund-policy", label: "Fee Refund Policy" },
    { href: "/public-information-officer", label: "Central Public Information Officer" },
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Column 1 */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1589330694653-ded6df03f754?ixlib=rb-4.0.3&auto=format&fit=crop&w=180&h=80&q=80"
              alt="Poornima Institute Logo"
              className="h-16 mb-6"
            />
            <p className="mb-6 opacity-80">
              Poornima Institute of Engineering & Technology is committed to
              providing quality education and creating skilled professionals for
              a better tomorrow.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <SocialLink key={index} {...link} />
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <FooterLink key={index} {...link} />
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-6">Programs</h3>
            <ul className="space-y-3">
              {programLinks.map((link, index) => (
                <FooterLink key={index} {...link} />
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-6">Compliance & Policies</h3>
            <ul className="space-y-3 text-sm">
              {complianceLinks.map((link, index) => (
                <FooterLink key={index} {...link} />
              ))}
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-6">
              Contact Information
            </h3>
            <ul className="space-y-4">
              <ContactItem icon="fas fa-map-marker-alt">
                Poornima Institute of Engineering and Technology, ISI 2, RIICO
                Institutional Area Sitapura, Jaipur (Rajasthan)- 302022
              </ContactItem>
              <ContactItem icon="fas fa-phone-alt">+91-141-4071500</ContactItem>
              <ContactItem icon="fas fa-envelope">
                pietjaipur@rtu.ac.in principal.piet@poornima.org
                iqac.piet@poornima.org
              </ContactItem>
              <ContactItem icon="fas fa-globe">piet.poornima.org</ContactItem>
            </ul>

            <div className="mt-6">
              <h4 className="font-heading font-semibold mb-4">Newsletter</h4>
              <form className="flex" onSubmit={handleNewsletterSubmit}>
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-l-md focus:outline-none text-neutral-800 w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="bg-secondary hover:bg-secondary-dark text-white px-4 py-2 rounded-r-md transition duration-300"
                  aria-label="Subscribe to newsletter"
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white border-opacity-20">
        <div className="container mx-auto py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start">
            <p>
              &copy; 2025 Poornima Institute of Engineering & Technology. All
              Rights Reserved.
            </p>
            <div className="mt-3 p-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg border border-accent/30 backdrop-blur-sm">
              <div className="flex items-center justify-start mb-2">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-accent to-secondary rounded-full flex items-center justify-center">
                    <i className="fas fa-code text-white text-sm"></i>
                  </div>
                  <div className="bg-gradient-to-r from-accent via-secondary to-purple-500 bg-clip-text text-transparent font-bold text-lg">
                    PIET WEBTEAM
                  </div>
                </div>
              </div>
              <div className="text-white/90 text-sm flex items-center">
                <span className="mr-2">✨ Crafted with</span>
                <span className="text-red-400 mx-1 animate-pulse">❤️</span>
                <span>& dedication</span>
              </div>
              <div className="mt-2 flex flex-wrap items-center text-sm">
                <div className="flex items-center mr-4 mb-1">
                  <i className="fab fa-dev text-accent mr-1"></i>
                  <span className="text-white/80 font-medium">
                    Shivam Kushwah
                  </span>
                </div>
                <div className="flex items-center">
                  <i className="fab fa-dev text-secondary mr-1"></i>
                  <span className="text-white/80 font-medium">
                    Shivendram Pratap Singh Ranawat
                  </span>
                </div>
              </div>
              <div className="mt-2 text-xs text-white/60 italic">
                "Building digital excellence for PIET community"
              </div>
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="hover:text-accent transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
