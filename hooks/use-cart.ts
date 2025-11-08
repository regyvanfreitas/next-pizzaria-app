"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Cart, CartItem, Pizza, PizzaSize } from "@/types";

interface CartStore extends Cart {
  addItem: (pizza: Pizza, size: PizzaSize, quantity?: number) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      totalItems: 0,
      totalPrice: 0,

      addItem: (pizza: Pizza, size: PizzaSize, quantity = 1) => {
        const state = get();
        const existingItemIndex = state.items.findIndex(
          (item) => item.pizza.id === pizza.id && item.size === size
        );

        const sizeMultiplier = getSizeMultiplier(size);
        const itemPrice = pizza.price * sizeMultiplier;

        if (existingItemIndex > -1) {
          // Update existing item
          const newItems = [...state.items];
          newItems[existingItemIndex].quantity += quantity;
          newItems[existingItemIndex].totalPrice =
            newItems[existingItemIndex].quantity * itemPrice;

          set({
            items: newItems,
            totalItems: state.getTotalItems(),
            totalPrice: state.getTotalPrice(),
          });
        } else {
          // Add new item
          const newItem: CartItem = {
            id: `${pizza.id}-${size}-${Date.now()}`,
            pizza,
            quantity,
            size,
            totalPrice: itemPrice * quantity,
          };

          set({
            items: [...state.items, newItem],
            totalItems: state.getTotalItems(),
            totalPrice: state.getTotalPrice(),
          });
        }
      },

      removeItem: (itemId: string) => {
        const state = get();
        const newItems = state.items.filter((item) => item.id !== itemId);

        set({
          items: newItems,
          totalItems: state.getTotalItems(),
          totalPrice: state.getTotalPrice(),
        });
      },

      updateQuantity: (itemId: string, quantity: number) => {
        const state = get();

        if (quantity <= 0) {
          state.removeItem(itemId);
          return;
        }

        const newItems = state.items.map((item) => {
          if (item.id === itemId) {
            const sizeMultiplier = getSizeMultiplier(item.size);
            const itemPrice = item.pizza.price * sizeMultiplier;

            return {
              ...item,
              quantity,
              totalPrice: itemPrice * quantity,
            };
          }
          return item;
        });

        set({
          items: newItems,
          totalItems: state.getTotalItems(),
          totalPrice: state.getTotalPrice(),
        });
      },

      clearCart: () => {
        set({
          items: [],
          totalItems: 0,
          totalPrice: 0,
        });
      },

      getTotalPrice: () => {
        const state = get();
        return state.items.reduce((total, item) => total + item.totalPrice, 0);
      },

      getTotalItems: () => {
        const state = get();
        return state.items.reduce((total, item) => total + item.quantity, 0);
      },
    }),
    {
      name: "bella-napoli-cart",
    }
  )
);

// Helper function to calculate price multiplier based on size
function getSizeMultiplier(size: PizzaSize): number {
  const multipliers = {
    pequena: 0.8,
    media: 1.0,
    grande: 1.3,
    familia: 1.6,
  };

  return multipliers[size] || 1.0;
}
