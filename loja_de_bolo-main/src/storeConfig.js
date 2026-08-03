import imgBolos from './assets/abacaxi.jpeg';
import imgNinhocomchocolate from './assets/ninho com chocolate.jpeg';
import imgninho from './assets/ninho.jpeg';
import imgprostigio from './assets/prostígio.jpeg';

export const STORE_INFO = {
  name: "NS DOCES",
  subtitle: "CONFEITARIA ARTESANAL DE ALTA PRECISÃO",
  info: "Minas Gerais, Brasil • TER A SÁB • 09H ÀS 18H",
  socialProof: "+1.400 clientes satisfeitos este mês. Peça o seu antes que acabe!",
  instagram: "@nsdoces",
  whatsappNumber: "5535988919468"
};

export const CATEGORIES = [
  'TODOS',
  'DESTAQUES',
  'BOLOS INTEIROS',
  'FATIAS & SOBREMESAS',
  'BEBIDAS'
];

export const PRODUCTS = [
  {
    id: 1,
    name: 'Bolo de abacaxi',
    category: 'BOLOS INTEIROS',
    tag: 'MAIS VENDIDO 🔥',
    scarcity: 'Apenas 3 unidades para hoje!',
    description: 'Massa aveludada ultra macia, recheada com cream cheese suave e toque sutil de baunilha de Madagascar. Derrete na boca.',
    price: 10.00,
    image: imgBolos
  },
    {
    id: 2,
    name: 'Bolo de Ninho com Chocolate',
    category: 'BOLOS INTEIROS',
    tag: 'MAIS VENDIDO 🔥',
    scarcity: 'Apenas 3 unidades para hoje!',
    description: 'Massa aveludada ultra macia, recheada com cream cheese suave e toque sutil de baunilha de Madagascar. Derrete na boca.',
    price: 10.00,
    image: imgNinhocomchocolate
  },
    {
    id: 3,
    name: 'Bolo de Ninho',
    category: 'BOLOS INTEIROS',
    tag: 'MAIS VENDIDO 🔥',
    scarcity: 'Apenas 3 unidades para hoje!',
    description: 'Massa aveludada ultra macia, recheada com cream cheese suave e toque sutil de baunilha de Madagascar. Derrete na boca.',
    price: 10.00,
    image: imgninho
  },
    {
    id: 4,
    name: 'Bolo de Prostígio',
    category: 'BOLOS INTEIROS',
    tag: 'MAIS VENDIDO 🔥',
    scarcity: 'Apenas 3 unidades para hoje!',
    description: 'Massa aveludada ultra macia, recheada com cream cheese suave e toque sutil de baunilha de Madagascar. Derrete na boca.',
    price: 10.00,
    image: imgprostigio
  },
];