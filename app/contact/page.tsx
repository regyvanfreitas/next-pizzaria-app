"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    toast.success(
      "Mensagem enviada com sucesso! Entraremos em contato em breve."
    );
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-red-600 hover:bg-red-700 mb-4">
            📞 Fale Conosco
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Entre em Contato
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Estamos sempre prontos para atender você! Entre em contato conosco
            para dúvidas, sugestões ou para fazer seu pedido.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-red-600" />
                  Endereço
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-medium">Bella Napoli Pizzaria</p>
                <p className="text-muted-foreground">
                  Rua das Pizzas, 123
                  <br />
                  Centro - São Paulo, SP
                  <br />
                  CEP: 01234-567
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-red-600" />
                  Telefone
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-medium">(11) 1234-5678</p>
                <p className="text-sm text-muted-foreground">
                  Pedidos e informações
                </p>
                <p className="font-medium">(11) 9876-5432</p>
                <p className="text-sm text-muted-foreground">
                  WhatsApp (apenas texto)
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-red-600" />
                  E-mail
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-medium">contato@bellanapoli.com.br</p>
                <p className="text-sm text-muted-foreground">
                  Para dúvidas e sugestões
                </p>
                <p className="font-medium">pedidos@bellanapoli.com.br</p>
                <p className="text-sm text-muted-foreground">
                  Para pedidos especiais
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-red-600" />
                  Horário de Funcionamento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span>Segunda - Quinta:</span>
                  <span className="font-medium">18h - 23h</span>
                </div>
                <div className="flex justify-between">
                  <span>Sexta - Sábado:</span>
                  <span className="font-medium">18h - 00h</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo:</span>
                  <span className="font-medium">18h - 22h</span>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  * Delivery disponível em todos os horários
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-red-600" />
                  Envie sua Mensagem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Seu nome completo"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(11) 99999-9999"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem *</Label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Digite sua mensagem, dúvida ou sugestão..."
                      rows={6}
                      className="w-full px-3 py-2 border border-input bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none rounded-md"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full cursor-pointer"
                  >
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Siga-nos nas Redes Sociais</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Fique por dentro das novidades, promoções e conteúdo exclusivo!
              </p>

              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 cursor-pointer"
                >
                  <Instagram className="h-5 w-5 mr-2" />
                  Instagram
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 cursor-pointer"
                >
                  <Facebook className="h-5 w-5 mr-2" />
                  Facebook
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 cursor-pointer"
                >
                  <Twitter className="h-5 w-5 mr-2" />
                  Twitter
                </Button>
              </div>

              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="text-sm font-medium mb-2">📱 Dica:</p>
                <p className="text-sm text-muted-foreground">
                  Siga nosso Instagram @bellanapoli_oficial para ver fotos das
                  nossas pizzas fresquinhas e ficar sabendo das promoções em
                  primeira mão!
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Localização</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-gradient-to-br from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📍</div>
                  <p className="font-semibold">Mapa Interativo</p>
                  <p className="text-sm text-muted-foreground">
                    Rua das Pizzas, 123 - Centro, SP
                  </p>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <Button variant="outline" className="w-full cursor-pointer">
                  Ver no Google Maps
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  Estacionamento gratuito disponível
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
