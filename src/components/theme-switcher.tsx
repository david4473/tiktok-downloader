"use client";

import { useState, useEffect } from "react";
import { Check, Moon, Sun, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";

const themes = [
  { name: "Pink", value: "pink", lightValue: "pink", darkValue: "pink-dark" },
  { name: "Blue", value: "blue", lightValue: "blue", darkValue: "blue-dark" },
  {
    name: "Green",
    value: "green",
    lightValue: "green",
    darkValue: "green-dark",
  },
  {
    name: "Purple",
    value: "purple",
    lightValue: "purple",
    darkValue: "purple-dark",
  },
  {
    name: "Orange",
    value: "orange",
    lightValue: "orange",
    darkValue: "orange-dark",
  },
];

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [currentColorTheme, setCurrentColorTheme] = useState<string>("pink");

  // Determine the current color theme (without light/dark suffix)
  useEffect(() => {
    if (!mounted) return;

    // Extract base theme name (remove -dark suffix if present)
    let baseTheme = theme || "pink";
    if (baseTheme.endsWith("-dark")) {
      baseTheme = baseTheme.replace("-dark", "");
    }

    setCurrentColorTheme(baseTheme);
  }, [theme, resolvedTheme, mounted]);

  // Handle theme changes
  const handleThemeChange = (themeValue: string) => {
    const isDark = resolvedTheme === "dark";
    const selectedTheme = themes.find((t) => t.value === themeValue);

    if (selectedTheme) {
      setTheme(isDark ? selectedTheme.darkValue : selectedTheme.lightValue);
    }
  };

  // Toggle between light and dark mode while preserving color theme
  const toggleMode = () => {
    const isDark = resolvedTheme === "dark";
    const selectedTheme =
      themes.find((t) => t.value === currentColorTheme) || themes[0];

    setTheme(isDark ? selectedTheme.lightValue : selectedTheme.darkValue);
  };

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" size="icon" onClick={toggleMode}>
        {isDark ? (
          <Moon className="h-[1.2rem] w-[1.2rem]" />
        ) : (
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        )}
        <span className="sr-only">Toggle dark mode</span>
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Palette className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Change color theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {themes.map((t) => (
            <DropdownMenuItem
              key={t.value}
              onClick={() => handleThemeChange(t.value)}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <div
                  className={`h-4 w-4 rounded-full ${getThemeColor(t.value)}`}
                  aria-hidden="true"
                />
                {t.name}
              </div>
              {currentColorTheme === t.value && <Check className="h-4 w-4" />}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

function getThemeColor(theme: string) {
  switch (theme) {
    case "pink":
      return "bg-pink-500";
    case "blue":
      return "bg-blue-500";
    case "green":
      return "bg-green-500";
    case "purple":
      return "bg-purple-500";
    case "orange":
      return "bg-orange-500";
    default:
      return "bg-gray-500";
  }
}
