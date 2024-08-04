import About from "@/components/About";
import BackToTop from "@/components/BackToTop";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Turmas from "@/components/Turmas";
import Why from "@/components/Why";

export default function Home() {
  return (
    <main className="max-w-[1920px] bg-white mx-auto relative overflow-hidden">
      <Header />
      <Hero />
      <Turmas />
      <About />
      <Why />
      <Cta />
      <Footer />
      <BackToTop />
      {/* 
        <div className="h-[4000px]"></div>
      */}
    </main>
  );
}
