import type { Config } from "tailwindcss";

export default {
  content: ["./{pages,layouts,components,src}/**/*.{html,js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        script: ["Pacifico", "cursive"],
        body: ["Alegreya", "serif"],
      },
      colors: {
        iris: "#f2ebfb",
        ink: "#000814",
        petal: "#ec4899",
        lilac: "#e2d6f8",
        periwinkle: "#cad8ff",
        cream: "#fff9f2",
      },
      boxShadow: {
        glow: "0 18px 50px rgba(0, 8, 20, 0.14)",
        card: "0 8px 22px rgba(0, 8, 20, 0.08)",
      },
    },
  },
  plugins: [],
} satisfies Config;
