import { useEffect, useState } from "react";

// Creates a card for the game
export function PokeCard({ name, BASEURL, onClick, url }) {
  const [imgURL, setImgURL] = useState("");

  // Fetches the image URL for the Pokemon
  useEffect(() => {
    async function getPokemon() {
      // Was using name but some pokemon names don't have an endpoint
      // URL is a URL to the information about the pokemon but doesn't contain sprites
      // URL contains the pokemons number and we extract that from the url string
      // to get the pokemon entry with sprites
      const response = await fetch(`${BASEURL}pokemon/${url.split("/")[6]}`, {
        mode: "cors",
      });
      const data = await response.json();
      setImgURL(data.sprites.front_default);
    }

    getPokemon();
  }, [url, BASEURL]);

  return (
    <div className="card" onClick={() => onClick(name)}>
      <img src={imgURL} alt={name} />
      <p>{name.toUpperCase()}</p>
    </div>
  );
}
