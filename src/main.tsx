
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  // Make sure 'index.css' exists in the same directory or update the path accordingly
  import "./index.css";

  createRoot(document.getElementById("root")!).render(<App />);
  