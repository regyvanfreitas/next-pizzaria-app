import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Award, Users, Clock } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-red-600 hover:bg-red-700 mb-4">
            🍕 Desde 1985
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Nossa História
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A Bella Napoli nasceu do sonho de trazer a autêntica culinária
            italiana para o Brasil, mantendo vivas as tradições e o amor pela
            boa comida.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Uma Paixão Familiar</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Em 1985, Giuseppe Rossi chegou ao Brasil trazendo consigo não
                apenas o sonho de uma vida melhor, mas também as preciosas
                receitas de sua nonna, passadas de geração em geração na pequena
                cidade de Napoli.
              </p>
              <p>
                Com as próprias mãos e muito amor, Giuseppe abriu a primeira
                Bella Napoli em uma pequena casa no centro de São Paulo. O que
                começou como um sonho familiar se transformou na pizzaria mais
                querida da cidade.
              </p>
              <p>
                Hoje, quase 40 anos depois, continuamos fiéis às nossas origens:
                ingredientes frescos, receitas tradicionais e o carinho de
                sempre em cada pizza que servimos.
              </p>
            </div>
          </div>

          <div className="aspect-video bg-gradient-to-br from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 rounded-2xl flex items-center justify-center">
            <div className="text-8xl">👨‍🍳</div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            {
              icon: <Clock className="h-8 w-8 text-red-600" />,
              number: "38+",
              label: "Anos de História",
            },
            {
              icon: <Users className="h-8 w-8 text-red-600" />,
              number: "50K+",
              label: "Clientes Satisfeitos",
            },
            {
              icon: <Award className="h-8 w-8 text-red-600" />,
              number: "15+",
              label: "Prêmios Recebidos",
            },
            {
              icon: <Star className="h-8 w-8 text-red-600" />,
              number: "4.9",
              label: "Avaliação Média",
            },
          ].map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nossos Valores</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              O que nos move todos os dias na busca pela pizza perfeita
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🌿",
                title: "Ingredientes Naturais",
                description:
                  "Selecionamos cuidadosamente cada ingrediente, priorizando produtos frescos, naturais e de fornecedores locais que compartilham nossos valores de qualidade.",
              },
              {
                icon: "❤️",
                title: "Paixão pela Tradição",
                description:
                  "Cada pizza é preparada seguindo as receitas originais da família Rossi, mantendo vivo o sabor autêntico da culinária italiana tradicional.",
              },
              {
                icon: "👨‍👩‍👧‍👦",
                title: "Ambiente Familiar",
                description:
                  "Acreditamos que a melhor comida é compartilhada em família. Nossa pizzaria é um lugar onde todos se sentem em casa, acolhidos e bem-vindos.",
              },
            ].map((value, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-4">Nosso Time</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Conheça as pessoas apaixonadas que tornam a Bella Napoli especial
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Giuseppe Rossi",
                role: "Fundador & Chef Principal",
                description:
                  "O coração da Bella Napoli. Giuseppe trouxe as receitas de família diretamente de Napoli.",
              },
              {
                name: "Maria Rossi",
                role: "Gerente Geral",
                description:
                  "Filha de Giuseppe, Maria cuida para que cada cliente se sinta especial e bem atendido.",
              },
              {
                name: "Antonio Silva",
                role: "Chef Pizzaiolo",
                description:
                  "Discípulo de Giuseppe há 15 anos, Antonio domina a arte da pizza napolitana autêntica.",
              },
            ].map((member, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                    👨‍🍳
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-red-600 font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="bg-muted/30">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Nossa Missão</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              "Levar o sabor autêntico da Itália para cada mesa brasileira,
              criando momentos especiais através da comida feita com amor,
              tradição e os melhores ingredientes. Queremos que cada cliente se
              sinta parte da nossa família."
            </p>
            <div className="mt-8 text-2xl">🍕❤️🇮🇹</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
