import nextPlugin from "@next/eslint-plugin-next";
import { baseConfig } from "./base.mjs";

export const nextConfig = [
  ...baseConfig,
  {
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },
];

export default nextConfig;
