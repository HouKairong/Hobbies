import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

class RootErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      errorMessage: error?.message || "Nieznany błąd aplikacji",
    };
  }

  componentDidCatch(error) {
    console.error("RootErrorBoundary:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#120c1f",
            color: "#f4f5ff",
            padding: "24px",
            fontFamily: "Segoe UI, sans-serif",
          }}
        >
          <div style={{ maxWidth: "760px", textAlign: "left" }}>
            <h2 style={{ marginTop: 0 }}>Aplikacja napotkała błąd</h2>
            <p style={{ opacity: 0.9 }}>
              Odśwież stronę. Jeśli błąd wraca, podeślij ten komunikat:
            </p>
            <pre
              style={{
                whiteSpace: "pre-wrap",
                background: "rgba(0,0,0,0.35)",
                border: "1px solid rgba(255,255,255,0.22)",
                borderRadius: "10px",
                padding: "12px",
              }}
            >
              {this.state.errorMessage}
            </pre>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RootErrorBoundary>
      <HashRouter>
        <App />
      </HashRouter>
    </RootErrorBoundary>
  </StrictMode>,
);
