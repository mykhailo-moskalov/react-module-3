import axios from "axios";
import { useEffect, useState } from "react";

export default function EffectAsyncAwait() {
  const [count, setCount] = useState(1);
  const [person, setPerson] = useState(null);

  useEffect(() => {
    async function fetchCharacter(): Promise<void> {
      console.log("Effect ran!");
      const response = await axios.get(
        `https://swapi.info/api/people/${count}`
      );
      setPerson(response.data);
    }
    fetchCharacter();
  }, [count]);

  console.log("App rendered!");

  return (
    <>
      <h2>Character №{count}</h2>
      <button onClick={() => setCount(count + 1)}>Get next character</button>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  );
}
