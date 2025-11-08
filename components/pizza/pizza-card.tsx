"use client";

import Image from "next/image";
import { Pizza, PizzaSize } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ShoppingCart, Star } from "lucide-react";
import { useCartStore } from "@/hooks/use-cart";
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

interface PizzaCardProps {
  pizza: Pizza;
  className?: string;
}

const sizeLabels = {
  pequena: "P",
  media: "M",
  grande: "G",
  familia: "F",
};

const sizeDescriptions = {
  pequena: "Pequena (1-2 pessoas)",
  media: "Média (2-3 pessoas)",
  grande: "Grande (3-4 pessoas)",
  familia: "Família (4-6 pessoas)",
};

const sizeMultipliers = {
  pequena: 0.8,
  media: 1.0,
  grande: 1.3,
  familia: 1.6,
};

export function PizzaCard({ pizza, className }: PizzaCardProps) {
  const [selectedSize, setSelectedSize] = useState<PizzaSize>("media");
  const [isLoading, setIsLoading] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = async () => {
    setIsLoading(true);

    try {
      addItem(pizza, selectedSize);
      toast.success(
        `${pizza.name} (${sizeLabels[selectedSize]}) adicionado ao carrinho!`
      );
    } catch (error) {
      toast.error("Erro ao adicionar item ao carrinho");
    } finally {
      setIsLoading(false);
    }
  };

  const formatPrice = (price: number) => {
    const finalPrice = price * sizeMultipliers[selectedSize];
    return finalPrice.toLocaleString("pt-BR", {
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
        <CardHeader className="p-0">
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={pizza.image}
              alt={pizza.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            />
            <div className="absolute top-3 left-3">
              <Badge className={getCategoryColor(pizza.category)}>
                {pizza.category === "tradicional" && "Tradicional"}
                {pizza.category === "especial" && "Especial"}
                {pizza.category === "vegana" && "Vegana"}
              </Badge>
            </div>
            {!pizza.available && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <Badge variant="secondary">Indisponível</Badge>
              </div>
            )}
          </div>
        </CardHeader>

        <CardContent className="p-4 flex-1 flex flex-col">
          <CardTitle className="text-lg mb-2 line-clamp-1">
            {pizza.name}
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
            {pizza.description}
          </CardDescription>

          <div className="mb-4">
            <p className="text-xs text-muted-foreground mb-1">Ingredientes:</p>
            <p className="text-xs line-clamp-2">
              {pizza.ingredients.join(", ")}
            </p>
          </div>

          <div className="mb-4">
            <p className="text-sm font-medium mb-2">Tamanho:</p>
            <div className="flex gap-2">
              {(Object.keys(sizeLabels) as PizzaSize[]).map((size) => (
                <Button
                  key={size}
                  variant={selectedSize === size ? "default" : "outline"}
                  size="sm"
                  className="h-8 w-8 p-0 cursor-pointer"
                  onClick={() => setSelectedSize(size)}
                  title={sizeDescriptions[size]}
                >
                  {sizeLabels[size]}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">
              {formatPrice(pizza.price)}
            </span>
            <div className="flex items-center text-xs text-muted-foreground">
              <Star className="h-3 w-3 fill-current text-yellow-400 mr-1" />
              4.8
            </div>
          </div>

          <Button
            onClick={handleAddToCart}
            disabled={!pizza.available || isLoading}
            size="sm"
            className="shrink-0 cursor-pointer"
          >
            {isLoading ? (
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-background border-r-transparent" />
            ) : (
              <>
                <ShoppingCart className="h-4 w-4 mr-1" />
                Adicionar
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export function PizzaCardSkeleton() {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <Skeleton className="aspect-video w-full" />
      </CardHeader>
      <CardContent className="p-4">
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-full mb-1" />
        <Skeleton className="h-4 w-2/3 mb-4" />
        <Skeleton className="h-4 w-1/2 mb-2" />
        <Skeleton className="h-4 w-full mb-4" />
        <div className="flex gap-2 mb-4">
          <Skeleton className="h-8 w-8" />
          <Skeleton className="h-8 w-8" />
          <Skeleton className="h-8 w-8" />
          <Skeleton className="h-8 w-8" />
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Skeleton className="h-8 w-20" />
        <Skeleton className="h-9 w-24" />
      </CardFooter>
    </Card>
  );
}
