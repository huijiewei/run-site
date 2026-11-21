import type { OxfmtConfig } from "oxfmt";
import { oxfmtConfig } from "@resolid/config/oxfmt";

export default oxfmtConfig({
  sortTailwindcss: {
    stylesheet: "./src/styles/global.css",
    preserveWhitespace: true,
  },
  astro: true,
}) as OxfmtConfig;
