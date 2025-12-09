import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ClickSpark from "./components/ClickSpark.tsx";
import { ThemeProvider } from "./components/theme-providers.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClickSpark
      sparkColor="#fff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={200}
    >
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ClickSpark>
  </StrictMode>
);
