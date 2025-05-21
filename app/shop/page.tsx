import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CategoryFilter } from "@/components/shop/CategoryFilter";
import { ProductGrid } from "@/components/shop/ProductGrid";
import { Container } from "@/components/ui/container";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      <Header />
      <div className="pt-32 pb-20">
        <Container>
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Shop Collection</h1>
            <p className="text-gray-400 max-w-2xl">
              Browse our curated collection of premium sneakers and streetwear. From iconic classics to the latest drops.
            </p>
          </div>
          
          <CategoryFilter />
          <ProductGrid />
        </Container>
      </div>
      <Footer />
    </main>
  );
}