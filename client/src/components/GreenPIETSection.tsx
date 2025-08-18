
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function GreenPIETSection() {
  useEffect(() => {
    // Load Vimeo player script
    const script = document.createElement('script');
    script.src = 'https://player.vimeo.com/api/player.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script if component unmounts
      const existingScript = document.querySelector('script[src="https://player.vimeo.com/api/player.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-green-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-emerald-200/30 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-300/20 rounded-full blur-lg"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-0 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-green-800 mb-4">
            GREEN PIET
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-green-700 max-w-3xl mx-auto">
            Discover our commitment to environmental sustainability and green initiatives
            that make PIET an eco-friendly campus for future generations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-green-100">
            <div className="relative" style={{ padding: "56.25% 0 0 0", position: "relative" }}>
              <iframe 
                src="https://player.vimeo.com/video/1106655883?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&controls=0&dnt=1" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} 
                title="Green Campus"
                className="rounded-t-2xl"
              />
            </div>
            
            {/* Video overlay info */}
            <div className="absolute top-4 left-4 bg-green-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full z-10">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold">GREEN CAMPUS</span>
              </div>
            </div>
          </div>

          {/* Additional info cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: "fas fa-leaf",
                title: "Sustainable Campus",
                description: "Eco-friendly infrastructure and green building practices"
              },
              {
                icon: "fas fa-recycle",
                title: "Waste Management",
                description: "Comprehensive recycling and waste reduction programs"
              },
              {
                icon: "fas fa-solar-panel",
                title: "Renewable Energy",
                description: "Solar power and energy-efficient systems across campus"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 hover:border-green-200"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <i className={`${item.icon} text-green-600 text-xl`}></i>
                </div>
                <h3 className="text-lg font-bold text-green-800 mb-2">{item.title}</h3>
                <p className="text-green-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
