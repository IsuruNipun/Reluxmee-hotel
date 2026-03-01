export default function HeroSection() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/your-rooftop-photo.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-4">Reluxmee Hotel</h1>
        <p className="text-xl mb-6">
          Modern Comfort in the Heart of Anuradhapura
        </p>
        <a
          href="https://www.booking.com/Share-QyHTWC"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-600 hover:bg-yellow-700 px-6 py-3 rounded-lg font-semibold"
        >
          Book Now
        </a>
      </div>
    </section>
  );
}
