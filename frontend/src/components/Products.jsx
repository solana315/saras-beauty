import { useState } from "react";

// Apanha imagens dentro das subpastas de products
const images = import.meta.glob(
  "../assets/products/**/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const categoryMap = {
  pele: "SKIN",
  olhos: "EYES",
  labios: "LIPS",
  maquilhagem: "MAKE UP",
  cabelo: "HAIR",
};

const getProductPrice = (category, name) => {
  const base = {
    SKIN: 24,
    EYES: 19,
    LIPS: 16,
    "MAKE UP": 22,
    HAIR: 28,
  };

  const extra = {
    "Base": 5,
    "Bronzer": 4,
    "Concealer": 3,
    "Eye": 2,
    "EyeBrow": 3,
    "Eyeliner": 2,
    "Highlighter": 4,
    "Gloss": 2,
    "Lip": 3,
    "Mask": 5,
    "Oil": 6,
    "Serum": 7,
    "Shampoo": 4,
    "Conditioner": 4,
    "Cream": 5,
    "Gel": 4,
    "Powder": 5,
  };

  const categoryPrice = base[category] ?? 20;
  const match = Object.entries(extra).find(([key]) => name.toLowerCase().includes(key.toLowerCase()));
  const extraValue = match ? match[1] : 0;

  return `${(categoryPrice + extraValue).toFixed(2).replace(".", ",")} €`;
};

export const PRODUCTS = Object.entries(images)
  .map(([path, img], index) => {
    const parts = path.split("/");
    const folder = parts[parts.length - 2];
    const fileName = parts.pop().split(".")[0];

    const category = categoryMap[folder];

    // Ignora imagens que não estejam numa pasta de produtos válida
    if (!category) return null;

    return {
      id: index + 1,
      badge: "ESSENCIAL",
      name: fileName,
      category,
      price: getProductPrice(category, fileName),
      img,
    };
  })
  .filter(Boolean);

export const FILTERS = [
  "ALL",
  "SKIN",
  "EYES",
  "LIPS",
  "MAKE UP",
  "HAIR",
];

export default function Products() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredProducts =
    activeFilter === "ALL"
      ? PRODUCTS
      : PRODUCTS.filter((product) => product.category === activeFilter);

  return (
    <div>
      <div className="flex gap-3 justify-center py-6">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-2 rounded-full border text-sm font-medium transition-colors ${
              activeFilter === filter
                ? "bg-black text-white border-black"
                : "bg-transparent text-neutral-800 border-neutral-300 hover:border-neutral-400"
            }`}
          >
            {filter === "ALL" ? "ALL" : filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <img src={product.img} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
