import Link from "next/link";
import {
  Pizza,
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
];

const quickLinks = [
  { name: "Menu", href: "/menu" },
  { name: "Sobre Nós", href: "/about" },
  { name: "Contato", href: "/contact" },
  { name: "Política de Privacidade", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex items-center justify-center h-8 w-8 bg-red-600 rounded-full">
                <Pizza className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-none">
                  Bella Napoli
                </span>
                <span className="text-xs text-muted-foreground leading-none">
                  Pizzaria Autêntica
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Desde 1985 servindo as melhores pizzas da cidade com ingredientes
              frescos e receitas tradicionais italianas.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-muted-foreground shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Rua das Pizzas, 123
                  <br />
                  Centro, São Paulo - SP
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-muted-foreground shrink-0" />
                <span className="text-sm text-muted-foreground">
                  (11) 1234-5678
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-muted-foreground shrink-0" />
                <span className="text-sm text-muted-foreground">
                  contato@bellanapoli.com.br
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-foreground mb-3">Siga-nos</h3>
              <div className="flex space-x-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      className="flex items-center justify-center h-9 w-9 rounded-full bg-muted hover:bg-red-600 hover:text-white transition-colors duration-200"
                    >
                      <Icon className="h-4 w-4" />
                      <span className="sr-only">{social.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">Horário</h3>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>Segunda - Quinta: 18h - 23h</p>
                <p>Sexta - Domingo: 18h - 00h</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 Bella Napoli. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Desenvolvido com ❤️ para amantes de pizza
          </p>
        </div>
      </div>
    </footer>
  );
}
