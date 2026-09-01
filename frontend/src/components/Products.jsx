
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
      price: "26,50 €",
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
