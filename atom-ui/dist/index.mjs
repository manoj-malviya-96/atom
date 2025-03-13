// src/components/text/hero.tsx
import { jsx } from "react/jsx-runtime";
var HeroText = ({ style = "primary", children }) => {
  return /* @__PURE__ */ jsx("h1", { className: `text-7xl font-bold uppercase text-${style}`, children });
};
export {
  HeroText
};
