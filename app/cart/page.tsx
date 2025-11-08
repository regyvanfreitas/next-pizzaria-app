"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CartItem } from "@/components/cart/cart-item";
import { CartSummary } from "@/components/cart/cart-summary";
import { ArrowLeft, Trash2 } from "lucide-react";
import { useCartStore } from "@/hooks/use-cart";
import { motion, AnimatePresence } from "framer-motion";

export default function CartPage() {
  const { items, clearCart, getTotalItems } = useCartStore();
  const totalItems = getTotalItems();

  const handleCheckout = () => {
    alert(
      "Checkout em desenvolvimento! Em breve você poderá finalizar seu pedido."
    );
  };

  const handleClearCart = () => {
    if (confirm("Tem certeza que deseja limpar todo o carrinho?")) {
      clearCart();
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="flex flex-col space-y-4 sm:hidden">
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="cursor-pointer"
              >
                <Link href="/menu">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar
                </Link>
              </Button>
              {items.length > 0 && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleClearCart}
                  className="text-muted-foreground hover:text-destructive cursor-pointer"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </div>
            <div>
              <h1 className="text-2xl font-bold">Seu Carrinho</h1>
              <p className="text-sm text-muted-foreground">
                {totalItems === 0
                  ? "Nenhum item no carrinho"
                  : `${totalItems} ${
                      totalItems === 1 ? "item" : "itens"
                    } no carrinho`}
              </p>
            </div>
          </div>

          <div className="hidden sm:flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="cursor-pointer"
              >
                <Link href="/menu">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar ao Menu
                </Link>
              </Button>
              <div>
                <h1 className="text-3xl font-bold">Seu Carrinho</h1>
                <p className="text-muted-foreground">
                  {totalItems === 0
                    ? "Nenhum item no carrinho"
                    : `${totalItems} ${
                        totalItems === 1 ? "item" : "itens"
                      } no carrinho`}
                </p>
              </div>
            </div>

            {items.length > 0 && (
              <Button
                variant="outline"
                onClick={handleClearCart}
                className="text-muted-foreground hover:text-destructive cursor-pointer"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Limpar Carrinho
              </Button>
            )}
          </div>
        </div>

        {items.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="text-8xl mb-6">🛒</div>
            <h2 className="text-2xl font-semibold mb-4">
              Seu carrinho está vazio
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Que tal dar uma olhada no nosso cardápio e escolher algumas pizzas
              deliciosas?
            </p>
            <Button asChild size="lg" className="cursor-pointer">
              <Link href="/menu">Ver Cardápio</Link>
            </Button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <AnimatePresence>
                {items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </AnimatePresence>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <CartSummary
                  showCheckoutButton={true}
                  onCheckout={handleCheckout}
                />

                <div className="mt-4">
                  <Button
                    variant="outline"
                    className="w-full cursor-pointer"
                    asChild
                  >
                    <Link href="/menu">Continuar Comprando</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
