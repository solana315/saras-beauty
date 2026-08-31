import React, { useState } from "react";
import { COLORS } from "../constants/colors";
import CartIndicator from "./CartIndicator";

export default function ProductCard({ product, onAdd }) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setAdded(true);
    setCount((current) => current + 1);
    onAdd(product);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="col-12 col-md-4">
      <div
        className="position-relative overflow-hidden rounded-1"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span
          className="position-absolute top-0 start-0 m-3 px-2 py-1"
          style={{
            background: COLORS.cream,
            color: COLORS.ink,
            fontSize: ".68rem",
            letterSpacing: ".08em",
            zIndex: 2,
          }}
        >
          {product.badge}
        </span>

        <button
          className="position-absolute top-0 end-0 m-2 rounded-circle border-0 d-flex align-items-center justify-content-center"
          style={{ width: 34, height: 34, background: COLORS.cream, zIndex: 2 }}
          aria-label="Guardar nos favoritos"
        >
          ♡
        </button>

        <img
          src={product.img}
          alt={product.name}
          className="w-100"
          style={{
            aspectRatio: "1 / 1",
            objectFit: "cover",
            display: "block",
            transform: hovered ? "scale(1.04)" : "scale(1)",
            transition: "transform .5s ease",
          }}
        />

        <button
          onClick={handleAdd}
          className="position-absolute start-0 end-0 bottom-0 border-0 text-center w-100 py-2"
          style={{
            background: COLORS.ink,
            color: COLORS.cream,
            fontSize: ".8rem",
            letterSpacing: ".08em",
            transform: hovered ? "translateY(0)" : "translateY(100%)",
            transition: "transform .3s ease",
          }}
        >
          {added ? "ADICIONADO ✓" : "ADICIONAR AO SACO"}
        </button>
      </div>

      <CartIndicator count={count} />

      <div className="d-flex justify-content-between align-items-start mt-3">
        <div>
          <div
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.25rem",
              color: COLORS.ink,
            }}
          >
            {product.name}
          </div>
          <div className="small" style={{ color: COLORS.muted }}>
            {product.category}
          </div>
        </div>
        <div style={{ fontWeight: 500, color: COLORS.ink }}>{product.price}</div>
      </div>

      <button
        onClick={handleAdd}
        className="w-100 mt-2 py-2 bg-transparent"
        style={{
          border: `1px solid ${COLORS.ink}`,
          color: added ? COLORS.cream : COLORS.ink,
          background: added ? COLORS.ink : "transparent",
          fontSize: ".8rem",
          letterSpacing: ".06em",
          transition: "background .2s, color .2s",
        }}
      >
        {added ? "ADICIONADO ✓" : "ADICIONAR AO SACO"}
      </button>
    </div>
  );
}
