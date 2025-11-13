import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full hover:bg-indigo-100 dark:hover:bg-gray-700 transition"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="text-yellow-400 w-6 h-6" />
      ) : (
        <Moon className="text-indigo-600 w-6 h-6" />
      )}
    </button>
  );
};

export default ThemeToggle;
