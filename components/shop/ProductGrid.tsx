"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { ProductCard } from "@/components/shop/ProductCard";
import { products } from "@/lib/data";
import { Product, Category } from "@/lib/types";

export function ProductGrid() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") as Category;

  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  useEffect(() => {
    if (!categoryParam || categoryParam === "all") {
      setFilteredProducts(products);
    } else if (categoryParam === "new-drops") {
      setFilteredProducts(products.filter(product => product.isNewDrop));
    } else {
      setFilteredProducts(products.filter(product => product.category === categoryParam));
    }
  }, [categoryParam]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <div className="col-span-full text-center py-10">
          <p className="text-gray-400">No products found for this category.</p>
        </div>
      )}
    </motion.div>
  );
}