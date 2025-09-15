import { useState, useEffect } from "react";

function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [link, setLink] = useState("https://pokeapi.co/api/v2/pokemon");

  useEffect(() => {
    fetch(link)
      .then((res) => res.json())
      .then((res) => setPokemons(res))
      .catch((err) => console.log(err));
  }, [link]);

  return (
    <div>
      <h1 className="font-bold text-4xl">Pokemons</h1>
      <input type="text" name="search" id="search" />
      <div className="grid grid-cols-4 gap-4">
        {pokemons.map((pokemons) => (
          <div key={pokemons.id}>
            <p>{pokemons.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export { Home };
