import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative">
      {/* <Loader /> */}
      <Navbar />
      <Hero />
    </main>
  );
}
