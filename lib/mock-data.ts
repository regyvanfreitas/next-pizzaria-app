import { Pizza, PizzaSizeOption } from "@/types";

export const pizzaSizes: PizzaSizeOption[] = [
  { size: "pequena", price: 1.0, serves: "1-2 pessoas" },
  { size: "media", price: 1.2, serves: "2-3 pessoas" },
  { size: "grande", price: 1.5, serves: "3-4 pessoas" },
  { size: "familia", price: 1.8, serves: "4-6 pessoas" },
];

export const mockPizzas: Pizza[] = [
  {
    id: "1",
    name: "Margherita",
    description:
      "Molho de tomate, mozzarella de búfala, manjericão fresco e azeite extra virgem",
    price: 32.9,
    image:
      "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&h=300&fit=crop",
    category: "tradicional",
    ingredients: [
      "Molho de tomate",
      "Mozzarella de búfala",
      "Manjericão",
      "Azeite",
    ],
    available: true,
  },
  {
    id: "2",
    name: "Pepperoni",
    description: "Molho de tomate, mozzarella, pepperoni italiano e orégano",
    price: 38.9,
    image:
      "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop",
    category: "tradicional",
    ingredients: ["Molho de tomate", "Mozzarella", "Pepperoni", "Orégano"],
    available: true,
  },
  {
    id: "3",
    name: "Quattro Formaggi",
    description: "Molho branco, mozzarella, gorgonzola, parmesão e provolone",
    price: 42.9,
    image:
      "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=400&h=300&fit=crop&auto=format",
    category: "especial",
    ingredients: [
      "Molho branco",
      "Mozzarella",
      "Gorgonzola",
      "Parmesão",
      "Provolone",
    ],
    available: true,
  },
  {
    id: "4",
    name: "Calabresa",
    description:
      "Molho de tomate, mozzarella, calabresa artesanal, cebola e azeitonas",
    price: 35.9,
    image:
      "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&h=300&fit=crop",
    category: "tradicional",
    ingredients: [
      "Molho de tomate",
      "Mozzarella",
      "Calabresa",
      "Cebola",
      "Azeitonas",
    ],
    available: true,
  },
  {
    id: "5",
    name: "Vegetariana",
    description:
      "Molho de tomate, mozzarella vegana, abobrinha, berinjela, pimentão e rúcula",
    price: 36.9,
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop",
    category: "vegana",
    ingredients: [
      "Molho de tomate",
      "Mozzarella vegana",
      "Abobrinha",
      "Berinjela",
      "Pimentão",
      "Rúcula",
    ],
    available: true,
  },
  {
    id: "6",
    name: "Prosciutto e Rúcula",
    description:
      "Molho branco, mozzarella de búfala, prosciutto di Parma, rúcula e tomate cereja",
    price: 48.9,
    image:
      "https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?w=400&h=300&fit=crop",
    category: "especial",
    ingredients: [
      "Molho branco",
      "Mozzarella de búfala",
      "Prosciutto",
      "Rúcula",
      "Tomate cereja",
    ],
    available: true,
  },
  {
    id: "7",
    name: "Napolitana",
    description:
      "Molho de tomate, mozzarella, tomate, manjericão, alho e azeite",
    price: 34.9,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",
    category: "tradicional",
    ingredients: [
      "Molho de tomate",
      "Mozzarella",
      "Tomate",
      "Manjericão",
      "Alho",
      "Azeite",
    ],
    available: true,
  },
  {
    id: "8",
    name: "Funghi",
    description:
      "Molho branco, mozzarella, cogumelos frescos, trufa e salsinha",
    price: 44.9,
    image:
      "https://images.unsplash.com/photo-1544982503-9f984c14501a?w=400&h=300&fit=crop",
    category: "especial",
    ingredients: [
      "Molho branco",
      "Mozzarella",
      "Cogumelos",
      "Trufa",
      "Salsinha",
    ],
    available: true,
  },
  {
    id: "9",
    name: "Vegana Supreme",
    description:
      "Molho de tomate, queijo vegano, cogumelos, pimentão, cebola roxa e azeitonas",
    price: 39.9,
    image:
      "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=400&h=300&fit=crop",
    category: "vegana",
    ingredients: [
      "Molho de tomate",
      "Queijo vegano",
      "Cogumelos",
      "Pimentão",
      "Cebola roxa",
      "Azeitonas",
    ],
    available: true,
  },
  {
    id: "10",
    name: "Diavola",
    description:
      "Molho de tomate, mozzarella, salame picante, pimenta calabresa e mel",
    price: 41.9,
    image:
      "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop&auto=format",
    category: "especial",
    ingredients: [
      "Molho de tomate",
      "Mozzarella",
      "Salame picante",
      "Pimenta calabresa",
      "Mel",
    ],
    available: true,
  },
  {
    id: "11",
    name: "Portuguesa",
    description:
      "Molho de tomate, mozzarella, presunto, ovos, cebola, azeitonas e ervilha",
    price: 37.9,
    image:
      "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&h=300&fit=crop",
    category: "tradicional",
    ingredients: [
      "Molho de tomate",
      "Mozzarella",
      "Presunto",
      "Ovos",
      "Cebola",
      "Azeitonas",
      "Ervilha",
    ],
    available: true,
  },
  {
    id: "12",
    name: "Margherita Vegana",
    description:
      "Molho de tomate, queijo vegano, manjericão fresco e azeite de ervas",
    price: 33.9,
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop",
    category: "vegana",
    ingredients: [
      "Molho de tomate",
      "Queijo vegano",
      "Manjericão",
      "Azeite de ervas",
    ],
    available: true,
  },
];
