export interface Cake {
  id: string;
  name: string;
  description: string;
  price: number;
  discountedPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  bestseller?: boolean;
  trending?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface CartItem extends Cake {
  quantity: number;
}