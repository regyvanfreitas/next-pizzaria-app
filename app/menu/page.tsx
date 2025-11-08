"use client";

import { PizzaList } from "@/components/pizza/pizza-list";
import { usePizzas } from "@/hooks/use-pizzas";
import { motion } from "framer-motion";

export default function MenuPage() {
  const { data: pizzas = [], isLoading } = usePizzas();

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Nosso Cardápio
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra nossa seleção completa de pizzas artesanais, feitas com
            ingredientes frescos e receitas tradicionais da Itália.
          </p>
        </motion.div>

        <PizzaList pizzas={pizzas} isLoading={isLoading} />
      </div>
    </div>
  );
}
