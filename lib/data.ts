import { Product, UpcomingDrop, Testimonial } from "./types";

export const products: Product[] = [
  {
    id: "1",
    name: "Yeezy Boost 350 V2 Beluga",
    brand: "Yeezy",
    category: "yeezy",
    price: 320,
    image: "https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=1600",
    isNewDrop: false,
    isLimited: true,
    isFeatured: true,
  },
  {
    id: "2",
    name: "Nike Air Jordan 1 Retro High OG",
    brand: "Nike",
    category: "nike",
    price: 180,
    image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1600",
    isNewDrop: false,
    isLimited: false,
    isFeatured: true,
  },
  {
    id: "3",
    name: "Adidas Ultraboost 22",
    brand: "Adidas",
    category: "adidas",
    price: 190,
    image: "https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=1600",
    isNewDrop: true,
    isLimited: false,
    isFeatured: true,
  },
  {
    id: "4",
    name: "Yeezy 700 V3 Azael",
    brand: "Yeezy",
    category: "yeezy",
    price: 280,
    image: "https://images.pexels.com/photos/1124466/pexels-photo-1124466.jpeg?auto=compress&cs=tinysrgb&w=1600",
    isNewDrop: false,
    isLimited: true,
    isFeatured: false,
  },
  {
    id: "5",
    name: "Nike Dunk Low Retro",
    brand: "Nike",
    category: "nike",
    price: 120,
    image: "https://images.pexels.com/photos/1895019/pexels-photo-1895019.jpeg?auto=compress&cs=tinysrgb&w=1600",
    isNewDrop: true,
    isLimited: false,
    isFeatured: true,
  },
  {
    id: "6",
    name: "Adidas Forum Low",
    brand: "Adidas",
    category: "adidas",
    price: 100,
    image: "https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg?auto=compress&cs=tinysrgb&w=1600",
    isNewDrop: false,
    isLimited: false,
    isFeatured: false,
  },
  {
    id: "7",
    name: "Yeezy Foam Runner Sand",
    brand: "Yeezy",
    category: "yeezy",
    price: 220,
    image: "https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=1600",
    isNewDrop: true,
    isLimited: true,
    isFeatured: true,
  },
  {
    id: "8",
    name: "Nike Air Force 1 '07",
    brand: "Nike",
    category: "nike",
    price: 110,
    image: "https://images.pexels.com/photos/2561585/pexels-photo-2561585.jpeg?auto=compress&cs=tinysrgb&w=1600",
    isNewDrop: false,
    isLimited: false,
    isFeatured: false,
  }
];

export const upcomingDrops: UpcomingDrop[] = [
  {
    id: "1",
    name: "Yeezy 450 Cloud White",
    brand: "Yeezy",
    image: "https://images.pexels.com/photos/2421374/pexels-photo-2421374.jpeg?auto=compress&cs=tinysrgb&w=1600",
    releaseDate: "2025-06-15T09:00:00.000Z",
    description: "The revolutionary Yeezy 450 in a clean Cloud White colorway, featuring a unique sock-like upper and an integrated lacing system.",
  },
  {
    id: "2",
    name: "Nike SB Dunk Low 'Street Hawker'",
    brand: "Nike",
    image: "https://images.pexels.com/photos/1102777/pexels-photo-1102777.jpeg?auto=compress&cs=tinysrgb&w=1600",
    releaseDate: "2025-05-28T09:00:00.000Z",
    description: "Inspired by Chinese street food culture, these Dunks feature unique details and materials reflecting six regional cuisines.",
  },
  {
    id: "3",
    name: "Adidas 4D Fusio",
    brand: "Adidas",
    image: "https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg?auto=compress&cs=tinysrgb&w=1600",
    releaseDate: "2025-07-01T09:00:00.000Z",
    description: "Featuring a digitally printed 4D midsole for precise cushioning and a Primeknit upper for adaptive support and ultralight comfort.",
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Marcus Thompson",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1600",
    role: "Sneaker Collector",
    content: "VYCE has become my go-to for limited releases. Their authentication process is top-notch and I've never had to worry about fakes.",
    rating: 5
  },
  {
    id: "2",
    name: "Alicia Wang",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    role: "Streetwear Enthusiast",
    content: "The exclusive drops they get are insane! I managed to grab the last Travis Scott collab through their early access program.",
    rating: 5
  },
  {
    id: "3",
    name: "Jamal Curtis",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
    role: "Fashion Blogger",
    content: "Not only do they have the best selection, but their customer service is unmatched. Quick shipping and they even threw in some free laces!",
    rating: 4
  }
];