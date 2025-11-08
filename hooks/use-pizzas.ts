"use client";

import { useQuery } from "@tanstack/react-query";
import { Pizza, FilterOptions } from "@/types";
import { mockPizzas } from "@/lib/mock-data";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchPizzas = async (): Promise<Pizza[]> => {
  await delay(800);
  return mockPizzas;
};

const fetchPizzaById = async (id: string): Promise<Pizza | null> => {
  await delay(500);
  return mockPizzas.find((pizza) => pizza.id === id) || null;
};

export function usePizzas(filters?: FilterOptions) {
  return useQuery({
    queryKey: ["pizzas", filters],
    queryFn: fetchPizzas,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
}

export function usePizza(id: string) {
  return useQuery({
    queryKey: ["pizza", id],
    queryFn: () => fetchPizzaById(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
}

export function useFeaturedPizzas(limit = 6) {
  return useQuery({
    queryKey: ["pizzas", "featured", limit],
    queryFn: async () => {
      const pizzas = await fetchPizzas();
      const featured = pizzas
        .sort((a, b) => {
          if (a.category === "especial" && b.category !== "especial") return -1;
          if (b.category === "especial" && a.category !== "especial") return 1;
          return 0;
        })
        .slice(0, limit);

      return featured;
    },
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
}

export function usePizzasByCategory(category: string) {
  return useQuery({
    queryKey: ["pizzas", "category", category],
    queryFn: async () => {
      const pizzas = await fetchPizzas();
      return pizzas.filter((pizza) => pizza.category === category);
    },
    enabled: !!category,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
}
