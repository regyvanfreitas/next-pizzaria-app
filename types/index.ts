export interface Pizza {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: PizzaCategory;
  ingredients: string[];
  size?: PizzaSize;
  available: boolean;
}

export type PizzaCategory = "tradicional" | "especial" | "vegana";

export type PizzaSize = "pequena" | "media" | "grande" | "familia";

export interface PizzaSizeOption {
  size: PizzaSize;
  price: number;
  serves: string;
}

export interface CartItem {
  id: string;
  pizza: Pizza;
  quantity: number;
  size: PizzaSize;
  totalPrice: number;
  observations?: string;
}

export interface Cart {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

export interface Customer {
  id?: string;
  name: string;
  email: string;
  phone: string;
  address: Address;
}

export interface Address {
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  zipCode: string;
  state: string;
}

export interface Order {
  id: string;
  customer: Customer;
  items: CartItem[];
  totalPrice: number;
  status: OrderStatus;
  paymentMethod: PaymentMethod;
  createdAt: Date;
  estimatedDelivery?: Date;
  deliveryFee?: number;
}

export type OrderStatus =
  | "pending"
  | "confirmed"
  | "preparing"
  | "baking"
  | "ready"
  | "delivering"
  | "delivered"
  | "cancelled";

export type PaymentMethod = "pix" | "credit" | "debit" | "cash";

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  };
}

export interface FilterOptions {
  category?: PizzaCategory;
  search?: string;
  priceRange?: {
    min: number;
    max: number;
  };
  available?: boolean;
}

export interface Theme {
  mode: "light" | "dark";
}
