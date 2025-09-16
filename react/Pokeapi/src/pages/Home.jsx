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
        {
          pokemons?.results?.map(
            (pokemons, index) => (
              <div key={index} className="border p-4">
                <p>{pokemons.name}</p>
              </div>
            )
          )
        }
      </div>
    </div>
  );
}

export { Home };
