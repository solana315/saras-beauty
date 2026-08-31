import React, { useState } from "react";
import { COLORS } from "./constants/colors";
import { PRODUCTS } from "./components/Products";
import { useExternalAssets } from "./hooks/useExternalAssets";
import HeroStore from "./components/HeroStore";
import CartIndicator from "./components/CartIndicator";
import ProductGrid from "./components/ProductGrid";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";

export default function SarasBeautyStore() {
  useExternalAssets();

  const [activeFilter, setActiveFilter] = useState("TODOS");
  const [cartCount, setCartCount] = useState(0);

  const filtered =
    activeFilter === "TODOS"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category.toUpperCase().startsWith(activeFilter));

  return (
    <div
      style={{ background: COLORS.cream, minHeight: "100vh", fontFamily: "'Jost', sans-serif" }}
    >
      <Topbar />
      <div className="container py-5">
        <HeroStore activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        <CartIndicator count={cartCount} />
        <ProductGrid products={filtered} onAdd={() => setCartCount((c) => c + 1)} />
      </div>
      <Footer />
    </div>
  );
}
