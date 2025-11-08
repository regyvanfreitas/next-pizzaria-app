"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  Star,
  ChefHat,
  Heart,
  ArrowRight,
  Phone,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";
import { mockPizzas } from "@/lib/mock-data";

export default function Home() {
  const featuredPizzas = mockPizzas.slice(0, 3);

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 dark:from-orange-950/20 dark:via-red-950/20 dark:to-yellow-950/20 py-20 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <div className="text-8xl mb-6">🍕</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Bella Napoli
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Sabores autênticos da Itália com ingredientes frescos e receitas
            tradicionais de família
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild size="lg" className="text-lg px-8 cursor-pointer">
              <Link href="/menu">
                Ver Cardápio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 cursor-pointer"
            >
              <Phone className="mr-2 h-5 w-5" />
              (11) 99999-9999
            </Button>
          </div>

          <div className="flex justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Entrega 30-45min</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>4.8 (1.2k avaliações)</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Vila Madalena, SP</span>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nossos Destaques
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça nossas pizzas mais pedidas, feitas com muito amor e
              ingredientes selecionados
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredPizzas.map((pizza, index) => (
              <motion.div
                key={pizza.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                  <CardHeader className="p-0">
                    <div className="relative aspect-video overflow-hidden rounded-t-lg">
                      <Image
                        src={pizza.image}
                        alt={pizza.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-orange-500 hover:bg-orange-600">
                          Destaque
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="mb-2">{pizza.name}</CardTitle>
                    <CardDescription className="mb-4 line-clamp-2">
                      {pizza.description}
                    </CardDescription>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-primary">
                        R$ {pizza.price.toFixed(2).replace(".", ",")}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-muted-foreground">
                          4.9
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="cursor-pointer"
            >
              <Link href="/menu">
                Ver Cardápio Completo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-6xl mb-6">👨‍🍳</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Tradição Italiana Desde 1985
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Fundada pela família Rossini, a Bella Napoli traz para São Paulo
                o sabor autêntico das pizzas napolitanas, preparadas com
                técnicas tradicionais e ingredientes importados diretamente da
                Itália.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <ChefHat className="h-5 w-5 text-primary" />
                  <span>
                    Masseiros certificados pela Associazione Verace Pizza
                    Napoletana
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="h-5 w-5 text-primary" />
                  <span>Ingredientes frescos selecionados diariamente</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Massa fermentada por 48 horas</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="bg-background rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    38+
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Anos de tradição
                  </p>
                </div>
                <div className="bg-background rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    50k+
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Clientes satisfeitos
                  </p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-background rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24</div>
                  <p className="text-sm text-muted-foreground">
                    Sabores únicos
                  </p>
                </div>
                <div className="bg-background rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    4.8⭐
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Avaliação média
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para uma experiência única?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Faça seu pedido agora e receba em casa quentinha e deliciosa!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-lg px-8 cursor-pointer"
            >
              <Link href="/menu">
                Pedir Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-transparent border-white text-white hover:bg-white hover:text-orange-500 cursor-pointer"
            >
              <Link href="/contact">Fale Conosco</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
