export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  diet: DietType[];
  category: ProductCategoryType;
  img: IProductImage;
}

export interface IProductImage {
  src: string;
  alt: string;
}

export type ProductCategoryType = "salade" | "boisson" | "dessert";

export type DietType =
  | "végan"
  | "végétarien"
  | "sans porc"
  | "sans gluten"
  | "pâtes"
  | "produits de la mer";

export const PRODUCTS: IProduct[] = [
  {
    id: 1,
    name: "Salade Caprese",
    price: 11,
    description: "Tomates, mozza, basilic, asperges, jambon cru",
    diet: ["sans gluten"],
    category: "salade",
    img: {
      src: "/assets/salades/caprese.jpg",
      alt: "Salade Caprese",
    },
  },
  {
    id: 2,
    name: "Salade Sicilienne",
    price: 12,
    description: "Aubergines, tomates, oignons, thym, olives, câpres",
    diet: ["sans porc", "végétarien", "végan", "sans gluten"],
    category: "salade",
    img: {
      src: "/assets/salades/sicilienne.jpg",
      alt: "Salade Sicilienneing",
    },
  },
  {
    id: 3,
    name: "Salade Romaine",
    price: 11,
    description: "Thon, olives, oeufs, dés de fêta, batavia",
    diet: ["sans porc", "végétarien", "végan", "sans gluten"],
    category: "salade",
    img: {
      src: "/assets/salades/romaine.jpeg",
      alt: "Salade Romaine",
    },
  },
  {
    id: 4,
    name: "Salade Mediterraneo",
    price: 15,
    description: "Pouple, oignons rouges, pomme de terre",
    diet: ["sans gluten"],
    category: "salade",
    img: {
      src: "/assets/salades/mediterraneo.jpg",
      alt: "Salade Romaine",
    },
  },
  {
    id: 5,
    name: "Salade Palermo",
    price: 14,
    description: "Orange, citron, basilic, oignons rouge, croutons, saumon",
    diet: ["sans porc"],
    category: "salade",
    img: {
      src: "/assets/salades/palermo.jpg",
      alt: "Salade Romaine",
    },
  },
  {
    id: 6,
    name: "Salade Toscane",
    price: 13,
    description: "Concombres, farfalles, tomates, oignons, basilic",
    diet: ["sans porc", "végétarien", "végan"],
    category: "salade",
    img: {
      src: "/assets/salades/toscane.jpg",
      alt: "Salade Romaine",
    },
  },
  {
    id: 7,
    name: "Salade Florenze",
    price: 12,
    description: "Courgette, parmesan, crème fraiche, spaghettis",
    diet: ["sans porc", "végétarien"],
    category: "salade",
    img: {
      src: "/assets/salades/florenze.jpeg",
      alt: "Salade Romaine",
    },
  },
  {
    id: 8,
    name: "Tiramisù",
    price: 9,
    description: "Mascarpone, café, cacao, génoise, sucre",
    diet: ["sans porc", "végétarien", "végan"],
    category: "dessert",
    img: {
      src: "/assets/desserts/tiramisu.jpg",
      alt: "Salade Romaine",
    },
  },
  {
    id: 9,
    name: "Panna Cotta",
    price: 9,
    description: "Crème, lait, sucre, fruits rouges",
    diet: ["sans gluten"],
    category: "dessert",
    img: {
      src: "/assets/desserts/panna-cotta.jpg",
      alt: "Salade Romaine",
    },
  },
  {
    id: 10,
    name: "Citronnade maison",
    price: 3,
    description: "Citrons frais, limonade bio",
    diet: [],
    category: "boisson",
    img: {
      src: "/assets/boissons/citronnade.jpg",
      alt: "Salade Romaine",
    },
  },
  {
    id: 11,
    name: "Coca cola",
    price: 2.5,
    description: "Canette 33cl, original ou zero",
    diet: [],
    category: "boisson",
    img: {
      src: "/assets/boissons/coca.jpg",
      alt: "Salade Romaine",
    },
  },
];
