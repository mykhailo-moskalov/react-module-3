import { useState, useEffect } from "react";

export default function App() {
  const [clicks, setClicks] = useState(() => {
    const savedClicks = localStorage.getItem("saved-clicks");

    if (savedClicks !== null) {
      try {
        const parsed = JSON.parse(savedClicks);
        return typeof parsed === "number" ? parsed : 0;
      } catch {
        return 0;
      }
    }

    return 0;
  });

  useEffect(() => {
    localStorage.setItem("saved-clicks", JSON.stringify(clicks));
  }, [clicks]);

  return (
    <div>
      <button onClick={() => setClicks(clicks + 1)}>
        You clicked {clicks} times
      </button>
      <br />
      <br />
      <button onClick={() => setClicks(0)}>Reset</button>
    </div>
  );
}
