import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./main.css";
import { ListingProvider } from "./context/listingContext.jsx";
import { LanguageProvider } from "./hooks/useLanguage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <ListingProvider>
        <App />
      </ListingProvider>
    </LanguageProvider>
  </StrictMode>,
);
