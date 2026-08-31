import React from "react";
import { COLORS } from "../constants/colors";

export default function CartIndicator({ count }) {
  if (count <= 0) return null;

  return (
    <div className="text-end mb-3 small" style={{ color: COLORS.muted }}>
      Saco: {count} {count === 1 ? "artigo" : "artigos"}
    </div>
  );
}
