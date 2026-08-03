import abacaxiImg from '../assets/abacaxi.jpeg'; // Ajuste a extensão se for .png ou .jpeg
import ninhoImg from '../assets/ninho.jpeg';
import ninhoChocoImg from '../assets/ninho_com_chocolate.jpeg';
import prestigioImg from '../assets/prestigio.jpeg';

export const STORE_CONFIG = {
  nome: "NEXUS CAKE LAB",
  slogan: "CONFEITARIA ARTESANAL DE ALTA PRECISÃO",
  telefoneWhatsApp: "5535988919468",
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
    nome: 'Bolo de Abacaxi', 
    preco: 60.00, 
    desc: 'Massa aveludada ultra macia, recheada com creme suave e pedaços frescos de abacaxi.', 
    img: abacaxiImg 
  },
  { 
    id: 2, 
    categoria: "BOLOS INTEIROS", 
    tag: "SUCESSO DE VENDAS", 
    nome: 'Bolo de Ninho', 
    preco: 65.00, 
    desc: 'Massa de baunilha, com irresistível brigadeiro cremoso de Leite Ninho.', 
    img: ninhomImg 
  },
  { 
    id: 3, 
    categoria: "BOLOS INTEIROS", 
    tag: "PREMIUM", 
    nome: 'Ninho com Chocolate', 
    preco: 70.00, 
    desc: 'Massa de chocolate nobre, intercalada com brigadeiro tradicional e brigadeiro de Ninho.', 
    img: ninhoChocoImg 
  },
  { 
    id: 4, 
    categoria: "BOLOS INTEIROS", 
    tag: "CLÁSSICO", 
    nome: 'Bolo Prestígio', 
    preco: 65.00, 
    desc: 'Massa de chocolate com recheio cremoso de coco (beijinho) e cobertura de chocolate.', 
    img: prestigioImg 
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