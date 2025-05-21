import  Hero  from "@/components/sections/Hero";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { UpcomingDropsSection } from "@/components/sections/UpcomingDropsSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <FeaturedProducts />
      <UpcomingDropsSection />
      <Testimonials />
      <Footer />
    </main>
  );
}