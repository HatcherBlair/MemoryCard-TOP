import { useEffect, useState } from "react";

// Creates a card for the game
export function PokeCard({ name, BASEURL, onClick }) {
  const [imgURL, setImgURL] = useState("");

  // Fetches the image URL for the Pokemon
  useEffect(() => {
    async function getPokemon() {
      const response = await fetch(`${BASEURL}pokemon/${name}`, {
        mode: "cors",
      });
      const data = await response.json();
      setImgURL(data.sprites.front_default);
    }

    getPokemon();
  }, [name, BASEURL]);

  return (
    <div className="card" onClick={() => onClick(name)}>
      <img src={imgURL} alt={name} />
      <p>{name.toUpperCase()}</p>
    </div>
  );
}
