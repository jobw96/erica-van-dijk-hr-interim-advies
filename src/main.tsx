import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// CRITICAL: Force scroll to top IMMEDIATELY before React even renders
// This prevents any flash of the page at a wrong scroll position
if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
}
window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
document.documentElement.scrollTop = 0;
document.body.scrollTop = 0;

createRoot(document.getElementById("root")!).render(<App />);
