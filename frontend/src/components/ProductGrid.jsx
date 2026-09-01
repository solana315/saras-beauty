import ProductCard from "./ProductCard";

export default function ProductGrid({ products, onAdd }) {
  return (
    <div className="row g-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onAdd={onAdd} />
      ))}
    </div>
  );
}
