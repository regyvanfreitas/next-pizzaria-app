"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, CreditCard } from "lucide-react";
import { useCartStore } from "@/hooks/use-cart";
import { motion } from "framer-motion";

interface CartSummaryProps {
  className?: string;
  showCheckoutButton?: boolean;
  onCheckout?: () => void;
}

export function CartSummary({
  className,
  showCheckoutButton = true,
  onCheckout,
}: CartSummaryProps) {
  const { items, getTotalPrice, getTotalItems } = useCartStore();

  const totalPrice = getTotalPrice();
  const totalItems = getTotalItems();
  const deliveryFee = 8.9;
  const minimumOrder = 25.0;
  const finalTotal =
    totalPrice + (totalPrice >= minimumOrder ? deliveryFee : 0);
  const isMinimumMet = totalPrice >= minimumOrder;

  const formatPrice = (price: number) => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  if (items.length === 0) {
    return (
      <Card className={className}>
        <CardContent className="p-6 text-center">
          <div className="flex flex-col items-center space-y-4">
            <div className="p-4 rounded-full bg-muted">
              <ShoppingCart className="h-8 w-8 text-muted-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Carrinho vazio</h3>
              <p className="text-sm text-muted-foreground">
                Adicione algumas pizzas deliciosas!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Resumo do Pedido</span>
            <Badge variant="secondary">
              {totalItems} {totalItems === 1 ? "item" : "itens"}
            </Badge>
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="space-y-2">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span className="truncate mr-2">
                  {item.quantity}x {item.pizza.name} ({item.size})
                </span>
                <span className="font-medium shrink-0">
                  {formatPrice(item.totalPrice)}
                </span>
              </div>
            ))}
          </div>

          <Separator />

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>{formatPrice(totalPrice)}</span>
            </div>

            <div className="flex justify-between text-sm">
              <span>Taxa de entrega</span>
              <span>
                {isMinimumMet ? (
                  formatPrice(deliveryFee)
                ) : (
                  <span className="text-muted-foreground">
                    Pedido mínimo: {formatPrice(minimumOrder)}
                  </span>
                )}
              </span>
            </div>

            {!isMinimumMet && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="p-3 bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg"
              >
                <p className="text-sm text-amber-800 dark:text-amber-200">
                  Adicione mais {formatPrice(minimumOrder - totalPrice)} para
                  atingir o pedido mínimo
                </p>
              </motion.div>
            )}

            <Separator />

            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span className="text-lg">
                {isMinimumMet
                  ? formatPrice(finalTotal)
                  : formatPrice(totalPrice)}
              </span>
            </div>
          </div>

          <div className="p-3 bg-muted/50 rounded-lg">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Tempo estimado:</span>
              <span className="font-medium">30-45 min</span>
            </div>
          </div>
        </CardContent>

        {showCheckoutButton && (
          <CardFooter className="pt-0">
            <Button
              className="w-full cursor-pointer"
              size="lg"
              disabled={!isMinimumMet}
              onClick={onCheckout}
            >
              <CreditCard className="h-4 w-4 mr-2" />
              {isMinimumMet
                ? "Finalizar Pedido"
                : `Pedido mínimo ${formatPrice(minimumOrder)}`}
            </Button>
          </CardFooter>
        )}
      </Card>
    </motion.div>
  );
}
