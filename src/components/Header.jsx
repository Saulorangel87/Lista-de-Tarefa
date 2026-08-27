import { useState, useEffect } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <header className={styles.header}>
      <h1>Lista de Tarefas</h1>
      <button
        className={styles.toggleDark}
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
    </header>
  );
}