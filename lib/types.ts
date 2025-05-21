export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  image: string;
  isNewDrop: boolean;
  isLimited: boolean;
  isFeatured: boolean;
}

export interface UpcomingDrop {
  id: string;
  name: string;
  brand: string;
  image: string;
  releaseDate: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  role: string;
  content: string;
  rating: number;
}

export type Category = 'all' | 'yeezy' | 'nike' | 'adidas' | 'new-drops';