import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ErrorBoundary } from "react-error-boundary";
import SeoHead from "./components/seoHead.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary
      fallback={
        <div className="bg-red-400 text-center">Something went wrong</div>
      }
    >
      <>
        <SeoHead />
        <App />
      </>
    </ErrorBoundary>
  </StrictMode>,
);
