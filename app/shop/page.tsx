// import { Header } from "@/components/layout/Header";
// import { Footer } from "@/components/layout/Footer";
// import { CategoryFilter } from "@/components/shop/CategoryFilter";
// import { ProductGrid } from "@/components/shop/ProductGrid";
// import { Container } from "@/components/ui/container";

// export default function ShopPage() {
//   return (
//     <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
//       <Header />
//       <div className="pt-32 pb-20">
//         <Container>
//           <div className="mb-10">
//             <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Shop Collection</h1>
//             <p className="text-gray-400 max-w-2xl">
//               Browse our curated collection of premium sneakers and streetwear. From iconic classics to the latest drops.
//             </p>
//           </div>
          
//           <CategoryFilter />
//           <ProductGrid />
//         </Container>
//       </div>
//       <Footer />
//     </main>
//   );
// }
// import { Header } from "@/components/layout/Header";
// import { Footer } from "@/components/layout/Footer";
// import { ProductGrid } from "@/components/shop/ProductGrid";
// import { Container } from "@/components/ui/container";
// import { Suspense } from "react";
// import  CategoryFilter  from "@/components/shop/CategoryFilter";

// // Dynamically import CategoryFilter so it renders on client
// const CategoryFilter = dynamic(() => import("@/components/shop/CategoryFilter"), {
//   ssr: false,
// });

// export default function ShopPage() {
//   return (
//     <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
//       <Header />
//       <div className="pt-32 pb-20">
//         <Container>
//           <div className="mb-10">
//             <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Shop Collection</h1>
//             <p className="text-gray-400 max-w-2xl">
//               Browse our curated collection of premium sneakers and streetwear. From iconic classics to the latest drops.
//             </p>
//           </div>

//           <Suspense fallback={<div className="text-white">Loading filters...</div>}>
//             <CategoryFilter />
//           </Suspense>

//           <ProductGrid />
//         </Container>
//       </div>
//       <Footer />
//     </main>
//   );
// } 


// import { Header } from "@/components/layout/Header";
// import { Footer } from "@/components/layout/Footer";
// import { ProductGrid } from "@/components/shop/ProductGrid";
// import { Container } from "@/components/ui/container";
// import { Suspense } from "react";
// import { CategoryFilter} from "@/components/shop/CategoryFilter";

// export default function ShopPage() {
//   return (
//     <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
//       <Header />
//       <div className="pt-32 pb-20">
//         <Container>
//           <div className="mb-10">
//             <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Shop Collection</h1>
//             <p className="text-gray-400 max-w-2xl">
//               Browse our curated collection of premium sneakers and streetwear. From iconic classics to the latest drops.
//             </p>
//           </div>

//           <Suspense fallback={<div className="text-white">Loading filters...</div>}>
//             <CategoryFilter />
//           </Suspense>

//           <ProductGrid />
//         </Container>
//       </div>
//       <Footer />
//     </main>
//   );
// }
// import { Header } from "@/components/layout/Header";
// import { Footer } from "@/components/layout/Footer";
// import { ProductGrid } from "@/components/shop/ProductGrid";
// import { Container } from "@/components/ui/container";
// import { Suspense, use } from "react";
// import dynamic from "next/dynamic";

// // ✅ Dynamically import as default import, since it's a Client Component with useSearchParams
// const CategoryFilter = dynamic(() => import("@/components/shop/CategoryFilter"), {
//   ssr: false,
// });

// export default function ShopPage() {
//   return (
//     <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
//       <Header />
//       <div className="pt-32 pb-20">
//         <Container>
//           <div className="mb-10">
//             <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Shop Collection</h1>
//             <p className="text-gray-400 max-w-2xl">
//               Browse our curated collection of premium sneakers and streetwear. From iconic classics to the latest drops.
//             </p>
//           </div>

//           {/* ✅ Wrap dynamically loaded Client Component in Suspense */}
//           <Suspense fallback={<div className="text-white">Loading filters...</div>}>
//             <CategoryFilter />
//           </Suspense>

//           <ProductGrid />
//         </Container>
//       </div>
//       <Footer />
//     </main>
//   );
// }

// import { Header } from "@/components/layout/Header";
// import { Footer } from "@/components/layout/Footer";
// import { ProductGrid } from "@/components/shop/ProductGrid";
// import { Container } from "@/components/ui/container";
// import CategoryFilterWrapper from "@/components/shop/CategoryFilterWrapper"; // ✅ Import wrapper

// export default function ShopPage() {
//   return (
//     <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
//       <Header />
//       <div className="pt-32 pb-20">
//         <Container>
//           <div className="mb-10">
//             <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Shop Collection</h1>
//             <p className="text-gray-400 max-w-2xl">
//               Browse our curated collection of premium sneakers and streetwear. From iconic classics to the latest drops.
//             </p>
//           </div>

//           <CategoryFilterWrapper /> {/* ✅ This works without dynamic import or SSR error */}

//           <ProductGrid />
//         </Container>
//       </div>
//       <Footer />
//     </main>
//   );
// }
export const dynamic = 'force-dynamic'; // ✅ Add this at the very top

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductGrid } from "@/components/shop/ProductGrid";
import { Container } from "@/components/ui/container";
import CategoryFilterWrapper from "@/components/shop/CategoryFilterWrapper";
import { Suspense } from "react"; // ✅ Required

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

          {/* ✅ Suspense wrapper added here */}
          <Suspense fallback={<div className="text-white">Loading filters...</div>}>
            <CategoryFilterWrapper />
          </Suspense>

          <ProductGrid />
        </Container>
      </div>
      <Footer />
    </main>
  );
}


