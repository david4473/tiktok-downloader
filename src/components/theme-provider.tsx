"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      themes={[
        "light",
        "dark",
        "pink",
        "pink-dark",
        "blue",
        "blue-dark",
        "green",
        "green-dark",
        "purple",
        "purple-dark",
        "orange",
        "orange-dark",
      ]}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
