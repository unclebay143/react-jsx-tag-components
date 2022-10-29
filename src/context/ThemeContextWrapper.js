import { useState, useEffect } from "react";
import ThemeContext from "./ThemeContext";
const ThemeContextWrapper = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    const changeCurrentTheme = (newTheme) => {
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    useEffect(() => {
        theme === "light" ? document.body.classList.remove("dark") : document.body.classList.add("dark");
    }, [theme]);

    return <ThemeContext.Provider value={{ currentTheme: theme, changeCurrentTheme }}>{children}</ThemeContext.Provider>
};

export default ThemeContextWrapper;
