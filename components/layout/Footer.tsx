import Link from "next/link";
import { Mail, Instagram, Twitter, Youtube, MapPin, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-black/95 text-white/90 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-6">VYCE</h2>
            <p className="text-gray-400 mb-6">
              Premium sneakers and streetwear for those who define the culture.
              Exclusive drops, limited editions, and timeless classics.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/shop" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Shop All
                </Link>
              </li>
              <li>
                <Link 
                  href="/shop?category=new-drops" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  New Drops
                </Link>
              </li>
              <li>
                <Link 
                  href="/shop?category=yeezy" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Yeezy Collection
                </Link>
              </li>
              <li>
                <Link 
                  href="/shop?category=limited" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Limited Editions
                </Link>
              </li>
              <li>
                <Link 
                  href="/upcoming" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Upcoming Releases
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link 
                  href="/about#careers" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact & Support</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 text-red-500" />
                <span className="text-gray-400">
                  123 Sneaker St, Los Angeles, CA 90210
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-red-500" />
                <span className="text-gray-400">+1 (323) 555-VYCE</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-red-500" />
                <span className="text-gray-400">info@vycebrand.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-lg font-semibold mb-4">Join the VYCE Family</h3>
          <p className="text-gray-400 mb-4">
            Subscribe to get special offers, free giveaways, and early access to drops.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md">
            <Input
              type="email"
              placeholder="Your email"
              className="bg-gray-800 border-gray-700 focus:border-red-500 text-white"
            />
            <Button className="bg-red-600 hover:bg-red-700">Subscribe</Button>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} VYCE. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/faq" className="text-gray-500 hover:text-white text-sm">
              FAQ
            </Link>
            <Link href="/shipping" className="text-gray-500 hover:text-white text-sm">
              Shipping
            </Link>
            <Link href="/returns" className="text-gray-500 hover:text-white text-sm">
              Returns
            </Link>
            <Link href="/contact" className="text-gray-500 hover:text-white text-sm">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}