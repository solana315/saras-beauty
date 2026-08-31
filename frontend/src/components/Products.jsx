import mask from "../assets/mask.jpg";
import maquilhagemLabios from "../assets/maquilhagemLabios.jpg";
import paleta1 from "../assets/paleta1.jpg";
import balsamolabial from "../assets/balsamolabial.jpg";

export const PRODUCTS = [
  {
    id: 1,
    badge: "MAIS AMADO",
    name: "Óleo ritual",
    category: "Pele · 30 ml",
    price: "24,00 €",
    img: maquilhagemLabios,
  },
  {
    id: 2,
    badge: "NOVO",
    name: "Paleta Terra",
    category: "Olhos · 8 tons",
    price: "28,00 €",
    img: mask,
  },
  {
    id: 3,
    badge: "ESSENCIAL",
    name: "Creme ritual",
    category: "Pele · 50 ml",
    price: "26,50 €",
    img: paleta1,
  },
    {
    id: 4,
    badge: "ESSENCIAL",
    name: "Creme ritual",
    category: "Pele · 50 ml",
    price: "26,50 €",
    img: balsamolabial,
  },
];

export const FILTERS = ["TODOS", "PELE", "OLHOS", "LÁBIOS"];

