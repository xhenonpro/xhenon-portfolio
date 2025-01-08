import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Card from "@/components/card";
import HomePage from "@/components/homePage";

export default function Home() {
  return (
    <div>
      <main className="container mx-auto p-4">
      <Hero />
       <About />
      <Projects />
      <Footer />
      </main>
    </div>
  );
}
