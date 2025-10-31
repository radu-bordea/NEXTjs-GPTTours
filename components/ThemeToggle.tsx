"use client";
import { useState, useLayoutEffect } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const themes = {
  winter: "winter",
  dracula: "dracula",
};

const ThemeToggle = () => {
  // null = we haven't loaded from localStorage yet
  const [theme, setTheme] = useState(null);

  // useLayoutEffect runs earlier in the paint cycle than useEffect
  useLayoutEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const initialTheme = storedTheme && Object.values(themes).includes(storedTheme)
      ? storedTheme
      : themes.winter;

    document.documentElement.setAttribute("data-theme", initialTheme);
    setTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme =
      theme === themes.winter ? themes.dracula : themes.winter;

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  // while theme is null, avoid rendering the (wrong) icon
  if (theme === null) {
    return null;
  }

  return (
    <button onClick={toggleTheme} className="btn btn-sm btn-outline">
      {theme === themes.winter ? (
        <BsMoonFill className="h-4 w-4" />
      ) : (
        <BsSunFill className="h-4 w-4" />
      )}
    </button>
  );
};

export default ThemeToggle;
