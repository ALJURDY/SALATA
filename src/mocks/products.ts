import { IIngredient, INGREDIENTS } from "./ingredients";

export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  diet: DietType[];
  category?: ProductCategoryType;
  img: IProductImage;
  extras?: IIngredient[];
}

export interface IProductImage {
  src: string;
  alt: string;
}

export interface ICategory {
  name: string;
  icone: string;
}

export type ProductCategoryType = "salades" | "boissons" | "desserts";

export type DietType =
  | "végan"
  | "végétarien"
  | "sans porc"
  | "sans gluten"
  | "pâtes"
  | "produits de la mer";

export const CATEGORY: ICategory[] = [
  {
    name: "tout",
    icone: "🟡",

  },

  {
    name: "salades",
    icone: "🥗",

  },

  {
    name: "desserts",
    icone: "🍰",

  },

  {
    name: "boissons",
    icone: "🍷",

  },

]

export const PRODUCTS: IProduct[] = [
  {
    id: 1,
    name: "Salade Caprese",
    price: 11,
    description: "Tomates, mozza, basilic, asperges, jambon cru",
    diet: ["sans gluten"],
    category: "salades",
    img: {
      src: "/assets/salades/caprese.jpg",
      alt: "Salade Caprese",
    },
    extras: INGREDIENTS,
  },
  {
    id: 2,
    name: "Salade Sicilienne",
    price: 12,
    description: "Aubergines, tomates, oignons, thym, olives, câpres",
    diet: ["sans porc", "végétarien", "végan", "sans gluten"],
    category: "salades",
    img: {
      src: "/assets/salades/sicilienne.jpg",
      alt: "Salade Sicilienneing",
    },
    extras: INGREDIENTS,
  },
  {
    id: 3,
    name: "Salade Romaine",
    price: 11,
    description: "Thon, olives, oeufs, dés de fêta, batavia",
    diet: ["sans porc", "végétarien", "végan", "sans gluten", "produits de la mer"],
    category: "salades",
    img: {
      src: "/assets/salades/romaine.jpeg",
      alt: "Salade Romaine",
    },
    extras: INGREDIENTS,
  },
  {
    id: 4,
    name: "Salade Mediterraneo",
    price: 15,
    description: "Pouple, oignons rouges, pomme de terre",
    diet: ["sans gluten", "produits de la mer"],
    category: "salades",
    img: {
      src: "/assets/salades/mediterraneo.jpg",
      alt: "Salade Mediterraneo",
    },
    extras: INGREDIENTS,
  },
  {
    id: 5,
    name: "Salade Palermo",
    price: 14,
    description: "Orange, citron, basilic, oignons rouge, croutons, saumon",
    diet: ["sans porc", "produits de la mer"],
    category: "salades",
    img: {
      src: "/assets/salades/palermo.jpg",
      alt: "Salade Palermo",
    },
    extras: INGREDIENTS,
  },
  {
    id: 6,
    name: "Salade Toscane",
    price: 13,
    description: "Concombres, farfalles, tomates, oignons, basilic",
    diet: ["sans porc", "végétarien", "végan", "pâtes"],
    category: "salades",
    img: {
      src: "/assets/salades/toscane.jpg",
      alt: "Salade Toscane",
    },
    extras: INGREDIENTS,
  },
  {
    id: 7,
    name: "Salade Florenze",
    price: 12,
    description: "Courgette, parmesan, crème fraiche, spaghettis",
    diet: ["sans porc", "végétarien", "pâtes"],
    category: "salades",
    img: {
      src: "/assets/salades/florenze.jpeg",
      alt: "Salade Florenze",
    },
    extras: INGREDIENTS,
  },
  {
    id: 8,
    name: "Salade Crémonaise",
    price: 11,
    description: "Tartine, pignons, avocat, oeuf, huile d'olive",
    diet: ["sans porc", "végétarien"],
    category: "salades",
    img: {
      src: "/assets/salades/cremonaise.jpg",
      alt: "Salade Crémonaise",
    },
    extras: INGREDIENTS,
  },
  {
    id: 9,
    name: "Salade Ferrareze",
    price: 13,
    description: "Féta, frisée, tomates cerise, ananas, olive noires, huile d'olive",
    diet: ["sans porc", "végétarien", "sans gluten"],
    category: "salades",
    img: {
      src: "/assets/salades/ferrareze.jpg",
      alt: "Salade Ferrareze",
    },
    extras: INGREDIENTS,
  },
  {
    id: 10,
    name: "Salade Milanaise",
    price: 12,
    description: "Concombre, carottes, tomates, quinoa, brocolis, poivron, fenouil",
    diet: ["sans gluten", "sans porc", "végétarien", "végan"],
    category: "salades",
    img: {
      src: "/assets/salades/milanaise.jpg",
      alt: "Salade Milanaise",
    },
    extras: INGREDIENTS,
  },
  {
    id: 11,
    name: "Salade de Pise",
    price: 12,
    description: "Vermicelles de riz, crevette, poivron, graines de sésame",
    diet: ["sans porc", "végétarien", "produits de la mer"],
    category: "salades",
    img: {
      src: "/assets/salades/pise.jpg",
      alt: "Salade de Pise",
    },
    extras: INGREDIENTS,
  },
  {
    id: 12,
    name: "Salade Ravenne",
    price: 13,
    description: "Mâche, avocat, olive noire, mozzarella, tomate",
    diet: ["sans porc", "végétarien"],
    category: "salades",
    img: {
      src: "/assets/salades/ravenne.jpg",
      alt: "Salade Ravenne",
    },
    extras: INGREDIENTS,
  },

  {
    id: 13,
    name: "Salade Siennaise",
    price: 11,
    description: "Mâche, fraise, zest de citron, concombre, tomate cerise, noix de cajou",
    diet: ["sans gluten"],
    category: "salades",
    img: {
      src: "/assets/salades/siennaise.jpg",
      alt: "Salade Siennaise",
    },
    extras: INGREDIENTS,
  },
  {
    id: 14,
    name: "Salade Trévise",
    price: 13,
    description: "Burrata, tomate, pesto, roquette",
    diet: ["sans porc", "végétarien"],
    category: "salades",
    img: {
      src: "/assets/salades/trevise.jpg",
      alt: "Salade Trévise",
    },
    extras: INGREDIENTS,
  },
  {
    id: 15,
    name: "Salade César",
    price: 11,
    description: "Poulet, parmesan, crouton, frisée, sauce césar",
    diet: ["sans porc"],
    category: "salades",
    img: {
      src: "/assets/salades/cesar.jpg",
      alt: "Salade César",
    },
    extras: INGREDIENTS,
  },
  {
    id: 16,
    name: "Salade Veronaise",
    price: 12,
    description: "Tomates, mozza, basilic, asperges, jambon cru",
    diet: ["sans gluten"],
    category: "salades",
    img: {
      src: "/assets/salades/veronaise.jpg",
      alt: "Salade Veronaise",
    },
    extras: INGREDIENTS,
  },
  {
    id: 17,
    name: "Tiramisù",
    price: 9,
    description: "Mascarpone, café, cacao, génoise, sucre",
    diet: ["sans porc", "végétarien", "végan"],
    category: "desserts",
    img: {
      src: "/assets/desserts/tiramisu.jpg",
      alt: "Tiramisù",
    },
  },
  {
    id: 18,
    name: "Panna Cotta",
    price: 9,
    description: "Crème, lait, sucre, fruits rouges",
    diet: ["sans gluten"],
    category: "desserts",
    img: {
      src: "/assets/desserts/panna-cotta.jpg",
      alt: "Panna Cotta",
    },
  },
  {
    id: 19,
    name: "Cannoli à l'orange",
    price: 9,
    description: "Ricotta, orange, sucre, fruit confit",
    diet: ["sans porc", "végétarien"],
    category: "desserts",
    img: {
      src: "/assets/desserts/cannoli.jpg",
      alt: "Cannoli à l'orange",
    },
  },

  {
    id: 20,
    name: "Cassata à l'italienne",
    price: 9,
    description: "Oeuf, mascarpone, sucre, fruit confit",
    diet: ["sans gluten", "sans porc", "végétarien"],
    category: "desserts",
    img: {
      src: "/assets/desserts/cassata.jpg",
      alt: "Panna Cotta",
    },
  },
  {
    id: 21,
    name: "Panettone",
    price: 9,
    description: "Crème, lait, sucre, fruits rouges",
    diet: ["sans porc", "végétarien"],
    category: "desserts",
    img: {
      src: "/assets/desserts/panettone.jpg",
      alt: "Panettone",
    },
  },

  {
    id: 22,
    name: "Crème dessert au café",
    price: 9,
    description: "Maïzena, oeuf, lait, sucre, café espresso",
    diet: ["sans porc", "végétarien"],
    category: "desserts",
    img: {
      src: "/assets/desserts/creme-dessert.jpg",
      alt: "Crème dessert au café",
    },
  },

  {
    id: 23,
    name: "Glace à l’italienne",
    price: 9,
    description: "Mascarpone, lait, sucre, vanille, oeuf",
    diet: ["sans porc", "végétarien"],
    category: "desserts",
    img: {
      src: "/assets/desserts/glace-italienne.jpg",
      alt: "Glace à l’italienne",
    },
  },

  {
    id: 24,
    name: "Citronnade maison",
    price: 3,
    description: "Citrons frais, limonade bio",
    diet: [],
    category: "boissons",
    img: {
      src: "/assets/boissons/citronnade.jpg",
      alt: "Citronnade maison",
    },
  },
  {
    id: 25,
    name: "Coca cola",
    price: 2.5,
    description: "Canette 33cl, original ou zero",
    diet: [],
    category: "boissons",
    img: {
      src: "/assets/boissons/coca.jpg",
      alt: "Coca cola",
    },
  },

  {
    id: 26,
    name: "Evian",
    price: 2,
    description: "Evian 33cl",
    diet: [],
    category: "boissons",
    img: {
      src: "/assets/boissons/evian.jpg",
      alt: "Evian",
    },
  },

  {
    id: 27,
    name: "Jus de Légumes",
    price: 3.5,
    description: "Fraichement pressé",
    diet: [],
    category: "boissons",
    img: {
      src: "/assets/boissons/legumes.jpg",
      alt: "Jus de Légumes",
    },
  },

  {
    id: 28,
    name: "Limonade Citron",
    price: 2,
    description: "Bouteille 25cl, Fait maison",
    diet: [],
    category: "boissons",
    img: {
      src: "/assets/boissons/limonade-citron.jpg",
      alt: "Limonade Citron",
    },
  },

  {
    id: 29,
    name: "Limonade Fraise",
    price: 2,
    description: "Bouteille 25cl, Faite maison",
    diet: [],
    category: "boissons",
    img: {
      src: "/assets/boissons/limonade-fraise.jpg",
      alt: "Limonade Fraise",
    },
  },

  {
    id: 30,
    name: "Orangina",
    price: 2,
    description: "Bouteille 25cl",
    diet: [],
    category: "boissons",
    img: {
      src: "/assets/boissons/orangina.jpg",
      alt: "Orangina",
    },
  },

  {
    id: 21,
    name: "San Pellegrino",
    price: 2.5,
    description: "San Pellegrino 50cl",
    diet: [],
    category: "boissons",
    img: {
      src: "/assets/boissons/san-pellegrino.jpg",
      alt: "San Pellegrino",
    },
  },
];
