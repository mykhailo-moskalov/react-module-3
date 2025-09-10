import type { ReactNode } from "react";
import { themeToggleClick } from "../../theme";
import css from "./ThemeToggle.module.css";

interface IThemeToggle {
  id: string;
  href: ReactNode;
  setTheme: (theme: string) => void;
}

export default function ThemeToggle({ id, href, setTheme }: IThemeToggle) {
  return (
    <button
      className={css.button}
      type="button"
      id={id}
      onClick={() => themeToggleClick(setTheme)}
    >
      {href}
    </button>
  );
}
