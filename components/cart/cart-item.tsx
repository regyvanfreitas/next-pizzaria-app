"use client";

import Image from "next/image";
import { CartItem as CartItemType } from "@/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCartStore } from "@/hooks/use-cart";
import { motion } from "framer-motion";

interface CartItemProps {
  item: CartItemType;
  className?: string;
}

const sizeLabels = {
  pequena: "Pequena",
  media: "Média",
  grande: "Grande",
  familia: "Família",
};

export function CartItem({ item, className }: CartItemProps) {
  const { updateQuantity, removeItem } = useCartStore();

  const handleIncrement = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleRemove = () => {
    removeItem(item.id);
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      tradicional:
        "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
      especial:
        "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
      vegana:
        "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    };
    return colors[category as keyof typeof colors] || colors.tradicional;
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.2 }}
      className={className}
    >
      <Card className="overflow-hidden">
        <CardContent className="p-4">
          <div className="flex gap-4">
            <div className="relative w-20 h-20 shrink-0 rounded-lg overflow-hidden">
              <Image
                src={item.pizza.image}
                alt={item.pizza.name}
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm truncate">
                    {item.pizza.name}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge
                      className={getCategoryColor(item.pizza.category)}
                      variant="secondary"
                    >
                      {sizeLabels[item.size]}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {item.pizza.category === "tradicional" && "Tradicional"}
                      {item.pizza.category === "especial" && "Especial"}
                      {item.pizza.category === "vegana" && "Vegana"}
                    </span>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 text-muted-foreground hover:text-destructive cursor-pointer"
                  onClick={handleRemove}
                >
                  <Trash2 className="h-4 w-4" />
                  <span className="sr-only">Remover item</span>
                </Button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 w-8 p-0 cursor-pointer"
                    onClick={handleDecrement}
                    disabled={item.quantity <= 1}
                  >
                    <Minus className="h-3 w-3" />
                    <span className="sr-only">Diminuir quantidade</span>
                  </Button>

                  <span className="font-medium text-sm min-w-[2ch] text-center">
                    {item.quantity}
                  </span>

                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 w-8 p-0 cursor-pointer"
                    onClick={handleIncrement}
                  >
                    <Plus className="h-3 w-3" />
                    <span className="sr-only">Aumentar quantidade</span>
                  </Button>
                </div>

                <div className="text-right">
                  <div className="font-semibold text-sm">
                    {formatPrice(item.totalPrice)}
                  </div>
                  {item.quantity > 1 && (
                    <div className="text-xs text-muted-foreground">
                      {formatPrice(item.totalPrice / item.quantity)} cada
                    </div>
                  )}
                </div>
              </div>

              {item.observations && (
                <div className="mt-2 p-2 bg-muted/50 rounded text-xs">
                  <span className="font-medium">Observações: </span>
                  {item.observations}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
