"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}


// // "use client"; // Ensure this runs only on the client

// // import { useEffect, useState } from "react";

// // export  function ThemeProvider({ children }: { children: React.ReactNode }) {
// //   const [theme, setTheme] = useState<string | null>(null);

// //   useEffect(() => {
// //     // Get stored theme from localStorage or default to "light"
// //     const storedTheme = localStorage.getItem("theme") || "light";

// //     // Apply theme to <html> tag
// //     document.documentElement.className = storedTheme;
// //     document.documentElement.style.colorScheme = storedTheme;
    
// //     setTheme(storedTheme);
// //   }, []);

// //   if (theme === null) {
// //     return null; // Prevent rendering until theme is set
// //   }

// //   return <>{children}</>;
// // }
