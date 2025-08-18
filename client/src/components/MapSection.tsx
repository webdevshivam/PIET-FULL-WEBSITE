export default function MapSection() {
  return (
    <section className="h-96 relative">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.086384088622!2d75.8507272!3d26.7687386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc91e898380fd%3A0xeee859ae1f1b64b0!2sPoornima%20Institute%20of%20Engineering%20and%20Technology%20-%20PIET%20%7C%20Top%20Engineering%20College%20in%20Jaipur%20%7C%20NAAC%20A%20Accredited!5e1!3m2!1sen!2sin!4v1754731404489!5m2!1sen!2sin" 
      width="100%" 
      height="300" 
      style={{ border: 0 }} 
      allowfullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">
      </iframe>
      <div className="absolute bottom-4 right-4">
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=Poornima+Institute+of+Engineering+and+Technology,+Jaipur"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent text-white px-4 py-2 rounded shadow hover:bg-accent-dark"
        >
          Get Directions
        </a>
      </div>
    </section>
  );
}