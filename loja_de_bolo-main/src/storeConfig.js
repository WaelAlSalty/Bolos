export const STORE_CONFIG = {
  nome: "NEXUS CAKE LAB",
  slogan: "CONFEITARIA ARTESANAL DE ALTA PRECISÃO",
  telefoneWhatsApp: "5535988919468", // Altere para o número da cliente
  instagram: "@nexus.cakelab",
  horario: "TER A SÁB • 09H ÀS 18H",
  bairro: "Minas Gerais, Brasil",
  regras: [
    "Encomendas de bolos inteiros com antecedência mínima de 24h.",
    "Fatias e sobremesas prontas para envio imediato.",
    "Entregas via carrier credenciado ou retirada presencial.",
    "Garantia de frescor absoluto em todas as produções."
  ]
};

export const CATEGORIAS = ["TODOS", "DESTAQUES", "BOLOS INTEIROS", "FATIAS & SOBREMESAS", "BEBIDAS"];

export const BOLOS = [
  { 
    id: 1, 
    categoria: "BOLOS INTEIROS", 
    tag: "MAIS VENDIDO", 
    nome: 'Brigadeiro', 
    preco: 10.00, 
    desc: 'Massa aveludada ultra macia, recheada com cream cheese suave e toque sutil de baunilha de Madagascar.', 
    img: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=800&q=80' 
  },
  { 
    id: 2, 
    categoria: "BOLOS INTEIROS", 
    tag: "SUCESSO DE VENDAS", 
    nome: 'Bolo de Ninho', 
    preco: 10.00, 
    desc: 'Massa de baunilha, com irresistível brigadeiro de Ninho.', 
    img: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?w=800&q=80' 
  },
  { 
    id: 3, 
    categoria: "BOLOS INTEIROS", 
    tag: "PREMIUM 70%", 
    nome: 'Ninho com chocolate', 
    preco: 10.00, 
    desc: 'Massa de chocolate, com brigadeiro de chocolate e brigadeiro de Ninho.', 
    img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80' 
  },
  { 
    id: 4, 
    categoria: "BOLOS INTEIROS", 
    tag: "CLÁSSICO REVISITADO", 
    nome: 'Bolo de Prosígio', 
    preco: 10.00, 
    desc: 'Massa de baunilha e chocolate, brigadeiro de côco e brigadeiro de chocolate.', 
    img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80' 
  },
  { 
    id: 5, 
    categoria: "FATIAS & SOBREMESAS", 
    tag: "EDIÇÃO LIMITADA", 
    nome: 'Slice Pistache Suíço', 
    preco: 22.00, 
    desc: 'Fatia individual com massa leve de pistache, brigaderia artesanal de chocolate branco e pedaços de pistache.', 
    img: 'https://images.unsplash.com/photo-1534432182912-63854915957b?w=800&q=80' 
  },
  { 
    id: 6, 
    categoria: "FATIAS & SOBREMESAS", 
    tag: "PRONTA ENTREGA", 
    nome: 'Pote Gourmet Brownie & Ninho', 
    preco: 18.00, 
    desc: 'Camadas generosas de brownie bem molhadinho alternadas com creme de Ninho cremoso.', 
    img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80' 
  },
  { 
    id: 7, 
    categoria: "BEBIDAS", 
    tag: "REFRESCANTE", 
    nome: 'Cold Brew Vanilla Caramel 350ml', 
    preco: 14.00, 
    desc: 'Café de grãos selecionados extraído a frio por 18h, harmonizado com xarope artesanal de baunilha.', 
    img: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=800&q=80' 
  },
  { 
    id: 8, 
    categoria: "BEBIDAS", 
    tag: "ARTESANAL", 
    nome: 'Soda Italiana Frutas Vermelhas', 
    preco: 12.00, 
    desc: 'Bebida gaseificada natural com infusão de frutas vermelhas e xarope artesanal.', 
    img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&q=80' 
  }
];
