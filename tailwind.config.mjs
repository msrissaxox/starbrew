/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customGreen: "#d6ddc7",
        buttonGreen: "#b9bfac",
        backgroundGreen: "#32472f",
        backgroundButton: "#1d261c",
        offWhite: "#FFFAF1",
      },
      fontFamily: {
        sans: ["Nunito Sans", "ui-sans-serif", "system-ui"],
        inconsolata: ["Inconsolata", "monospace"],
      },
    },
  },
  plugins: [],
};
