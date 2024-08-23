import type { ICard } from "@api_types/card.types";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("app")!);
const card: ICard = {
  id: 1,
  name: "Test",
  description: "Test",
  rarity: "Common",
  type: "Creature",
  attack: 1,
  defense: 1,
  image: "https://i.imgur.com/p0o6v7l.png",
};

root.render(
  <div>
    <p>Hello world !</p>
    <pre>{JSON.stringify(card, null, 2)}</pre>
  </div>,
);
