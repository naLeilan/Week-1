import { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";

const DarkMode = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <MdDarkMode onClick={toggleTheme} className="darkmode" />
    </div>
  );
};

export default DarkMode;
