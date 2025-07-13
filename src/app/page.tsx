import Cursor from "@/components/Cursor";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import MagnetButton from "@/components/MagnetButton";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative  cursor-none">
      <Loader />
      <Cursor />
      <Navbar />
      <Hero />
      <div className="h-screen w-screen flex items-center justify-center">
        <MagnetButton />
      </div>
    </main>
  );
}
