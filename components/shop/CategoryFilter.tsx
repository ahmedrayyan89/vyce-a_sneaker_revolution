"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Category } from "@/lib/types";

export function CategoryFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const currentCategory = searchParams.get("category") as Category || "all";
  
  const [selectedCategory, setSelectedCategory] = useState<Category>(currentCategory);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    setSelectedCategory(currentCategory);
  }, [currentCategory]);

  const handleCategoryChange = (category: Category) => {
    setSelectedCategory(category);
    
    if (category === "all") {
      // Remove the category param if "all" is selected
      const params = new URLSearchParams(searchParams.toString());
      params.delete("category");
      router.push(`${pathname}?${params.toString()}`);
    } else {
      router.push(`${pathname}?${createQueryString("category", category)}`);
    }
  };

  const categories = [
    { id: "all", label: "All Products" },
    { id: "yeezy", label: "Yeezy" },
    { id: "nike", label: "Nike" },
    { id: "adidas", label: "Adidas" },
    { id: "new-drops", label: "New Drops" }
  ];

  return (
    <div className="mb-8 overflow-x-auto pb-2">
      <div className="flex space-x-2 min-w-max">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id as Category)}
            className={`relative px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
              selectedCategory === category.id
                ? "text-white"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
          >
            {selectedCategory === category.id && (
              <motion.span
                layoutId="activeCategoryIndicator"
                className="absolute inset-0 bg-red-600 rounded-md z-0"
                transition={{ duration: 0.2 }}
              />
            )}
            <span className="relative z-10">{category.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}