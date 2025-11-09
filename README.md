# 🍕 Bella Napoli - Pizzaria Autêntica

<div align="center">
  <img src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=200&h=200&fit=crop&auto=format" alt="Bella Napoli Logo" width="200"/>
</div>

<div align="center">

[![Deploy](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://pizzaria-app-rf.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-16.0.1-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

**[🚀 Ver Demonstração](https://pizzaria-app-rf.vercel.app/)**

</div>

## 📋 Sobre o Projeto

Bella Napoli é uma aplicação moderna de pizzaria desenvolvida com **Next.js 14+** e **TypeScript**, oferecendo uma experiência completa de pedidos online com interface responsiva e intuitiva. O projeto simula um sistema real de delivery de pizzas com carrinho de compras, catálogo de produtos e páginas institucionais.

### ✨ Principais Características

- 🎨 **Design Moderno**: Interface elegante com Tailwind CSS e componentes shadcn/ui
- 📱 **Totalmente Responsivo**: Otimizado para desktop, tablet e mobile
- 🛒 **Carrinho Inteligente**: Sistema de carrinho com persistência local
- 🍕 **Catálogo Dinâmico**: 12 pizzas com diferentes categorias e tamanhos
- 🌙 **Modo Escuro/Claro**: Alternância de temas com next-themes
- ⚡ **Performance**: App Router do Next.js 14 com Turbopack
- 🎭 **Animações Suaves**: Framer Motion para transições elegantes

## 🛠️ Tecnologias Utilizadas

### Frontend

- **[Next.js 16.0.1](https://nextjs.org/)** - Framework React com App Router
- **[TypeScript](https://typescriptlang.org/)** - Tipagem estática
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário
- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes reutilizáveis
- **[Framer Motion](https://framer.com/motion/)** - Animações e transições
- **[Lucide React](https://lucide.dev/)** - Ícones modernos

### Estado e Dados

- **[Zustand](https://zustand-demo.pmnd.rs/)** - Gerenciamento de estado
- **[React Query](https://tanstack.com/query/latest)** - Cache e sincronização
- **Mock Data** - Dados simulados para demonstração

### Ferramentas

- **[Vercel](https://vercel.com/)** - Deploy e hospedagem
- **[ESLint](https://eslint.org/)** - Linting de código
- **[Git](https://git-scm.com/)** - Controle de versão

## 🚀 Funcionalidades

### 🏠 Página Inicial

- Hero section com call-to-action
- Pizzas em destaque
- Seção sobre a pizzaria
- Estatísticas e diferenciais
- Design atrativo e conversivo

### 📋 Cardápio

- 12 pizzas com imagens reais
- Filtros por categoria (Tradicional, Especial, Vegana)
- Busca por nome
- Seleção de tamanhos (P, M, G, F)
- Tooltips informativos
- Preços dinâmicos por tamanho

### 🛒 Carrinho de Compras

- Adicionar/remover itens
- Controle de quantidade
- Cálculo automático de totais
- Persistência entre sessões
- Drawer lateral responsivo
- Validação de pedido mínimo

### 📱 Interface Responsiva

- Layout otimizado para mobile
- Navigation drawer para telas pequenas
- Componentes adaptáveis
- Touch-friendly na mobile

### 🎨 Experiência do Usuário

- Animações fluidas
- Feedback visual em ações
- Loading states
- Toast notifications
- Modo escuro/claro
- Acessibilidade (ARIA labels)

## 📦 Estrutura do Projeto

```
next-pizzaria-app/
├── app/                    # App Router (Next.js 14+)
│   ├── (pages)/           # Páginas da aplicação
│   ├── globals.css        # Estilos globais
│   └── layout.tsx         # Layout principal
├── components/            # Componentes React
│   ├── ui/               # Componentes base (shadcn/ui)
│   ├── layout/           # Componentes de layout
│   ├── pizza/            # Componentes relacionados a pizzas
│   └── cart/             # Componentes do carrinho
├── hooks/                # Custom hooks
├── lib/                  # Utilitários e configurações
├── types/                # Definições TypeScript
└── public/               # Arquivos estáticos
```

## 🎯 Como Executar

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Instalação e Execução

1. **Clone o repositório**

```bash
git clone https://github.com/regyvanfreitas/next-pizzaria-app.git
cd next-pizzaria-app
```

2. **Instale as dependências**

```bash
npm install
# ou
yarn install
```

3. **Execute o ambiente de desenvolvimento**

```bash
npm run dev
# ou
yarn dev
```

4. **Acesse a aplicação**

```
http://localhost:3000
```

### Comandos Disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Cria build de produção
npm run start    # Inicia servidor de produção
npm run lint     # Executa verificação de código
```

## 🌟 Destaques Técnicos

### Performance

- **Next.js App Router** com renderização otimizada
- **Turbopack** para desenvolvimento mais rápido
- **Lazy loading** de componentes
- **Otimização de imagens** com next/image

### Estado e Persistência

- **Zustand** para estado global simples e eficiente
- **LocalStorage** para persistência do carrinho
- **React Query** para cache inteligente

### Responsividade

- **Mobile-first** design approach
- **Breakpoints personalizados** com Tailwind
- **Touch gestures** otimizados
- **Progressive enhancement**

### Acessibilidade

- **ARIA labels** em componentes interativos
- **Keyboard navigation** completa
- **Screen reader** friendly
- **Color contrast** adequado

## 🎨 Design System

### Cores

- **Primary**: Orange/Red gradient
- **Secondary**: Muted grays
- **Success**: Green shades
- **Destructive**: Red shades

### Componentes

- Baseados no **shadcn/ui**
- **Consistent spacing** com Tailwind
- **Reusable patterns**
- **Dark/Light theme** support

## 📊 Demonstração Online

🔗 **[https://pizzaria-app-rf.vercel.app/](https://pizzaria-app-rf.vercel.app/)**

### Páginas Disponíveis

- **Home** (`/`) - Página inicial com hero e destaques
- **Cardápio** (`/menu`) - Catálogo completo de pizzas
- **Carrinho** (`/cart`) - Revisão e finalização do pedido
- **Sobre** (`/about`) - História da pizzaria
- **Contato** (`/contact`) - Formulário e informações

## 👨‍💻 Desenvolvedor

<div align="center">
  
**Desenvolvido por [Regivan Freitas](https://github.com/regyvanfreitas)**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/regyvanfreitas)

</div>

