// src/components/text/hero.tsx
import { jsx } from "react/jsx-runtime";
var HeroText = ({ style = "primary", children }) => {
  return /* @__PURE__ */ jsx("h1", { className: `text-info font-bold uppercase text-7xl`, children });
};
export {
  HeroText
};
