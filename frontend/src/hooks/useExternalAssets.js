import { useEffect } from "react";

// Loads Bootstrap (utility classes only, no custom stylesheet) and the two
// display/body fonts used in the reference design.
export function useExternalAssets() {
  useEffect(() => {
    const bootstrap = document.createElement("link");
    bootstrap.rel = "stylesheet";
    bootstrap.href =
      "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css";
    document.head.appendChild(bootstrap);

    const fonts = document.createElement("link");
    fonts.rel = "stylesheet";
    fonts.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;1,500&family=Jost:wght@400;500;600&display=swap";
    document.head.appendChild(fonts);

    return () => {
      document.head.removeChild(bootstrap);
      document.head.removeChild(fonts);
    };
  }, []);
}
