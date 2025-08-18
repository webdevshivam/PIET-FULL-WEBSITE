import { useState, useEffect } from 'react';

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-3 rounded bg-primary text-white shadow-lg transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      aria-label="Back to top"
    >
      <i className="fas fa-arrow-up text-xl"></i>
    </button>
  );
};

export const ChatbotUI = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-8 left-8 z-50">
      {/* Chatbot Button */}
      <button
        onClick={toggleChat}
        className="p-4 rounded-full bg-secondary text-white shadow-lg hover:bg-secondary-light transition-all duration-300"
        aria-label="Open chat assistant"
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-comments'} text-xl`}></i>
      </button>

      {/* Chatbot Window */}
      <div
        className={`absolute bottom-16 left-0 w-80 bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
          }`}
      >
        {/* Chatbot Header */}
        <div className="bg-primary text-white p-3">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-2">
              <i className="fas fa-robot text-primary"></i>
            </div>
            <div>
              <h3 className="font-medium">PIET Assistant</h3>
              <p className="text-xs opacity-80">Online | Ask me anything</p>
            </div>
          </div>
        </div>

        {/* Chatbot Messages */}
        <div className="h-64 p-3 overflow-y-auto bg-neutral-50">
          <div className="mb-3">
            <div className="bg-primary text-white p-2 rounded-lg rounded-tl-none inline-block max-w-xs">
              <p className="text-sm">Hello! How can I assist you with information about Poornima Institute?</p>
            </div>
            <p className="text-xs text-neutral-500 mt-1">Bot • 11:30 AM</p>
          </div>

          {/* Sample Interaction */}
          <div className="mb-3 text-right">
            <div className="bg-neutral-200 p-2 rounded-lg rounded-tr-none inline-block max-w-xs">
              <p className="text-sm">When does the new semester start?</p>
            </div>
            <p className="text-xs text-neutral-500 mt-1">You • 11:31 AM</p>
          </div>

          <div className="mb-3">
            <div className="bg-primary text-white p-2 rounded-lg rounded-tl-none inline-block max-w-xs">
              <p className="text-sm">The new semester begins on July 15, 2025. Registration opens June 1st!</p>
            </div>
            <p className="text-xs text-neutral-500 mt-1">Bot • 11:31 AM</p>
          </div>
        </div>

        {/* Chatbot Input */}
        <div className="p-3 border-t">
          <div className="flex">
            <input
              type="text"
              placeholder="Type your question..."
              className="flex-1 p-2 border rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button className="bg-primary text-white p-2 rounded-r-md hover:bg-primary-light transition-colors">
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
          <p className="text-xs mt-1 text-neutral-500">Note: This is a demo interface only</p>
        </div>
      </div>
    </div>
  );
};

export const FontSizeAdjuster = () => {
  const [fontSizeLevel, setFontSizeLevel] = useState(1); // 0: Small, 1: Normal, 2: Large

  const adjustFontSize = (level: number) => {
    setFontSizeLevel(level);
    document.documentElement.style.fontSize = ['90%', '100%', '115%'][level];
  };

  return (
    <div className="fixed top-24 right-4 z-40 bg-white rounded-lg shadow-md p-2 flex flex-col items-center">
      <span className="text-xs mb-1 font-medium text-neutral-700">Text</span>
      <div className="flex flex-col gap-1">
        <button
          onClick={() => adjustFontSize(0)}
          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${fontSizeLevel === 0 ? 'bg-primary text-white' : 'bg-neutral-200 text-neutral-700'}`}
          aria-label="Small text"
        >
          A
        </button>
        <button
          onClick={() => adjustFontSize(1)}
          className={`w-6 h-6 rounded-full flex items-center justify-center text-sm ${fontSizeLevel === 1 ? 'bg-primary text-white' : 'bg-neutral-200 text-neutral-700'}`}
          aria-label="Normal text"
        >
          A
        </button>
        <button
          onClick={() => adjustFontSize(2)}
          className={`w-6 h-6 rounded-full flex items-center justify-center text-base ${fontSizeLevel === 2 ? 'bg-primary text-white' : 'bg-neutral-200 text-neutral-700'}`}
          aria-label="Large text"
        >
          A
        </button>
      </div>
    </div>
  );
};

export const ContactButtons = () => {
  return (
    <div className="fixed top-1/3 right-0 z-50 flex flex-col items-end space-y-2">
      {/* Call Button */}
      <a
        href="tel:+919001893262"
        className="btn btn-primary bg-secondary text-white shadow-lg h-32 w-10 flex flex-col items-center justify-center transform rotate-180 origin-center"
        style={{ writingMode: 'vertical-rl' }}
        aria-label="Call us"
      >
        <i className="fas fa-phone mb-1"></i>
        <span className="text-xs font-semibold">Call Now</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/+919001893262"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary  text-white shadow-lg h-32 w-10 flex flex-col items-center justify-center transform rotate-180 origin-center"
        style={{ writingMode: 'vertical-rl' }}
        aria-label="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp mb-1"></i>
        <span className="text-xs font-semibold">WhatsApp</span>
      </a>

    </div>
  );
};



export const AccessibilityFeatures = () => {
  return (
    <>
      {/* Skip to content link for keyboard users */}
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>

      <BackToTop />
      <ChatbotUI />
      <FontSizeAdjuster />
      <ContactButtons />
    </>
  );
};