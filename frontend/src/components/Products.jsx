const images = import.meta.glob(
  "../assets/products/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

export const PRODUCTS = Object.entries(images).map(([path, img], index) => ({
  id: index + 1,
  badge: "ESSENCIAL",
  name: path
    .split("/")
    .pop()
    .split(".")[0],
  category: "Beleza",
  price: "26,50 €",
  img,
}));

export const FILTERS = ["TODOS", "PELE", "OLHOS", "LÁBIOS"];