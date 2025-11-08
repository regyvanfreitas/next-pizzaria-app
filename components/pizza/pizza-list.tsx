"use client";

import { Pizza, PizzaCategory, FilterOptions } from "@/types";
import { PizzaCard, PizzaCardSkeleton } from "./pizza-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PizzaListProps {
  pizzas: Pizza[];
  isLoading?: boolean;
  className?: string;
}

const categories = [
  { key: null, label: "Todas", count: 0 },
  { key: "tradicional" as PizzaCategory, label: "Tradicionais", count: 0 },
  { key: "especial" as PizzaCategory, label: "Especiais", count: 0 },
  { key: "vegana" as PizzaCategory, label: "Veganas", count: 0 },
];

export function PizzaList({
  pizzas,
  isLoading = false,
  className,
}: PizzaListProps) {
  const [filters, setFilters] = useState<FilterOptions>({});
  const [searchTerm, setSearchTerm] = useState("");

  const categoriesWithCounts = useMemo(() => {
    const counts = pizzas.reduce((acc, pizza) => {
      acc[pizza.category] = (acc[pizza.category] || 0) + 1;
      acc.total = (acc.total || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return categories.map((cat) => ({
      ...cat,
      count: cat.key ? counts[cat.key] || 0 : counts.total || 0,
    }));
  }, [pizzas]);

  const filteredPizzas = useMemo(() => {
    return pizzas.filter((pizza) => {
      if (filters.category && pizza.category !== filters.category) {
        return false;
      }

      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        return (
          pizza.name.toLowerCase().includes(searchLower) ||
          pizza.description.toLowerCase().includes(searchLower) ||
          pizza.ingredients.some((ingredient) =>
            ingredient.toLowerCase().includes(searchLower)
          )
        );
      }

      if (
        filters.available !== undefined &&
        pizza.available !== filters.available
      ) {
        return false;
      }

      return true;
    });
  }, [pizzas, filters, searchTerm]);

  const handleCategoryChange = (category: PizzaCategory | null) => {
    setFilters((prev) => ({
      ...prev,
      category: category || undefined,
    }));
  };

  const clearFilters = () => {
    setFilters({});
    setSearchTerm("");
  };

  if (isLoading) {
    return (
      <div className={className}>
        <div className="space-y-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <div className="h-10 bg-muted rounded-md animate-pulse" />
              </div>
            </div>
            <div className="h-10 w-24 bg-muted rounded-md animate-pulse" />
          </div>
          <div className="flex flex-wrap gap-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="h-8 w-20 bg-muted rounded-full animate-pulse"
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <PizzaCardSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="space-y-6 mb-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar pizzas, ingredientes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          {(searchTerm || filters.category) && (
            <Button
              variant="outline"
              onClick={clearFilters}
              className="shrink-0 cursor-pointer"
            >
              <Filter className="h-4 w-4 mr-2" />
              Limpar
            </Button>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {categoriesWithCounts.map((category) => (
            <Badge
              key={category.key || "all"}
              variant={
                (category.key === null && !filters.category) ||
                filters.category === category.key
                  ? "default"
                  : "secondary"
              }
              className="cursor-pointer hover:bg-primary/80 transition-colors px-3 py-1"
              onClick={() => handleCategoryChange(category.key)}
            >
              {category.label} ({category.count})
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {filteredPizzas.length}{" "}
            {filteredPizzas.length === 1
              ? "pizza encontrada"
              : "pizzas encontradas"}
          </p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {filteredPizzas.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🍕</div>
            <h3 className="text-lg font-semibold mb-2">
              Nenhuma pizza encontrada
            </h3>
            <p className="text-muted-foreground mb-4">
              Tente ajustar seus filtros ou buscar por outros termos.
            </p>
            {(searchTerm || filters.category) && (
              <Button
                variant="outline"
                onClick={clearFilters}
                className="cursor-pointer"
              >
                Limpar filtros
              </Button>
            )}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredPizzas.map((pizza, index) => (
              <motion.div
                key={pizza.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <PizzaCard pizza={pizza} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
