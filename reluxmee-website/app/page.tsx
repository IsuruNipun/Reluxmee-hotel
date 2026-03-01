import Hero from "../components/Hero";
import QuickInfo from "../components/QuickInfo";
import About from "../components/About";
import FeaturedRooms from "../components/FeaturedRooms";
import Rooftop from "../components/Rooftop";
import Location from "../components/Location";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <QuickInfo />
      <About />
      <FeaturedRooms />
      <Rooftop />
      <Location />
      <CTA />
      <Footer />
    </main>
  );
}
