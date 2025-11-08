"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ShoppingCart, X, Trash2 } from "lucide-react";
import { useCartStore } from "@/hooks/use-cart";
import { CartItem } from "./cart-item";
import { CartSummary } from "./cart-summary";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface CartDrawerProps {
  children?: React.ReactNode;
}

export function CartDrawer({ children }: CartDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { items, getTotalItems, clearCart } = useCartStore();
  const router = useRouter();

  const totalItems = getTotalItems();

  const handleCheckout = () => {
    setIsOpen(false);
    router.push("/cart");
  };

  const handleClearCart = () => {
    clearCart();
  };

  const defaultTrigger = (
    <Button
      variant="ghost"
      size="sm"
      className="h-9 w-9 p-0 relative cursor-pointer"
    >
      <ShoppingCart className="h-4 w-4" />
      {totalItems > 0 && (
        <Badge
          variant="destructive"
          className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs"
        >
          {totalItems > 99 ? "99+" : totalItems}
        </Badge>
      )}
      <span className="sr-only">
        Carrinho ({totalItems} {totalItems === 1 ? "item" : "itens"})
      </span>
    </Button>
  );

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>{children || defaultTrigger}</SheetTrigger>

      <SheetContent className="w-full sm:max-w-lg flex flex-col h-full [&>button]:hidden">
        <SheetHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div>
              <SheetTitle className="flex items-center gap-2">
                <ShoppingCart className="h-5 w-5" />
                Seu Carrinho
              </SheetTitle>
              <SheetDescription>
                {totalItems === 0
                  ? "Nenhum item adicionado"
                  : `${totalItems} ${
                      totalItems === 1 ? "item" : "itens"
                    } no seu carrinho`}
              </SheetDescription>
            </div>

            <div className="flex items-center gap-1">
              {totalItems > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleClearCart}
                  className="text-muted-foreground hover:text-destructive cursor-pointer h-8 w-8 p-0"
                  title="Limpar carrinho"
                >
                  <Trash2 className="h-4 w-4" />
                  <span className="sr-only">Limpar carrinho</span>
                </Button>
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground cursor-pointer h-8 w-8 p-0"
                title="Fechar carrinho"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Fechar carrinho</span>
              </Button>
            </div>
          </div>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="text-6xl">🛒</div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Carrinho vazio</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Que tal adicionar algumas pizzas deliciosas?
                </p>
                <Button
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer"
                >
                  Ver cardápio
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto">
            <div className="space-y-6 pb-6 px-4">
              <div className="space-y-4">
                <AnimatePresence>
                  {items.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </AnimatePresence>
              </div>

              <div className="pt-4 border-t">
                <CartSummary
                  showCheckoutButton={true}
                  onCheckout={handleCheckout}
                />
              </div>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
