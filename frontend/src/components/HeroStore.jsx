import React from "react";
import { COLORS } from "../constants/colors";
import { FILTERS } from "./Products";

export default function HeroStore({ activeFilter, onFilterChange }) {
  return (
    <div
      className="row align-items-end mb-5 pb-4"
      style={{ borderBottom: "1px solid #00000022" }}
    >
      <div className="col-lg-7">
        <div
          className="mb-2"
          style={{
            color: COLORS.terracotta,
            fontSize: ".78rem",
            letterSpacing: ".12em",
            fontWeight: 600,
          }}
        >
          SARAS BEAUTY · STORE
        </div>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "3.6rem",
            lineHeight: 1.05,
            color: COLORS.ink,
          }}
        >
          Escolhe o teu{" "}
          <em style={{ color: COLORS.terracotta, fontStyle: "italic" }}>ritual.</em>
        </h1>
      </div>

      <div className="col-lg-5">
        <p className="mb-4" style={{ color: COLORS.muted }}>
          Uma seleção de essenciais para preparar, realçar e cuidar — com espaço para a tua
          maneira de fazer.
        </p>
        <div className="d-flex gap-2 flex-wrap">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => onFilterChange(f)}
              className="rounded-pill px-3 py-2"
              style={{
                fontSize: ".85rem",
                border: `1px solid ${COLORS.ink}`,
                background: activeFilter === f ? COLORS.ink : "transparent",
                color: activeFilter === f ? COLORS.cream : COLORS.ink,
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
