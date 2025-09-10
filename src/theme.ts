export function localStorageThemeToggle(theme: string) {
  localStorage.setItem("theme", theme);
}

export function deployThemeToggle() {
  const savedTheme = localStorage.getItem("theme");
  const theme = savedTheme === "theme-dark" ? "theme-dark" : "theme-light";
  document.body.classList.remove("theme-dark", "theme-light");
  document.body.classList.add(theme);
}

export function themeToggleClick(setTheme: (theme: string) => void): void {
  if (document.body.classList.contains("theme-dark")) {
    document.body.classList.replace("theme-dark", "theme-light");
    localStorageThemeToggle("theme-light");
    setTheme("theme-light");
  } else {
    document.body.classList.replace("theme-light", "theme-dark");
    localStorageThemeToggle("theme-dark");
    setTheme("theme-dark");
  }
}
