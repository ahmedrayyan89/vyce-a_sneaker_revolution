"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Heart } from "lucide-react";
import { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div 
      className="group relative bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden border border-gray-800"
      variants={cardVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badge for New Drops */}
      {product.isNewDrop && (
        <div className="absolute top-3 left-3 z-10 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
          New Drop
        </div>
      )}
      
      {/* Badge for Limited Edition */}
      {product.isLimited && (
        <div className="absolute top-3 right-3 z-10 bg-amber-600 text-white text-xs font-semibold px-2 py-1 rounded">
          Limited
        </div>
      )}

      {/* Product Image with Zoom Effect */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className={`object-cover transition-transform duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Quick Actions */}
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex space-x-2">
            <button className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-md text-sm flex items-center justify-center transition-colors duration-200">
              <ShoppingBag className="h-4 w-4 mr-1" />
              Add to Cart
            </button>
            <button 
              className={`p-2 rounded-md transition-colors duration-200 ${
                isFavorite 
                  ? "bg-white text-red-500" 
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
              onClick={(e) => {
                e.preventDefault();
                setIsFavorite(!isFavorite);
              }}
            >
              <Heart className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <Link href={`/shop/${product.id}`} className="block">
            <h3 className="font-semibold text-white group-hover:text-red-400 transition-colors">
              {product.name}
            </h3>
          </Link>
        </div>
        <p className="text-sm text-gray-400 mb-2">{product.brand}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-white">${product.price}</span>
        </div>
      </div>
    </motion.div>
  );
}