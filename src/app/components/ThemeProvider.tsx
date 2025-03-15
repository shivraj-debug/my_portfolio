"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []); // ✅ Runs only once on mount

  if (!mounted) return null; // Avoid hydration mismatch

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className=" pl-2 w-12 h-12 bg-blue-400  rounded-full"
    >
      {theme === "dark" ? <Sun className="w-8 h-8"/> : <Moon className="w-8 h-8 text-white"/>}
    </button>
  );
}
