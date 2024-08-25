import { createRoot } from "react-dom/client";
import { AppRouterProvider } from "./router.jsx";

const root = createRoot(document.getElementById("app")!);

root.render(
  <AppRouterProvider />,
);
