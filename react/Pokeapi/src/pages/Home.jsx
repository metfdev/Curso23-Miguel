import { useState, useEffect } from "react";

function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [link, setLink] = useState("https://pokeapi.co/api/v2/pokemon");
  const [pages, setPages] = useState(1);

  useEffect(() => {
    fetch(link)
      .then((res) => res.json())
      .then((res) => setPokemons(res))
      .catch((err) => console.log(err));
  }, [link]);


  const updateState= (pageNumber, newLink) =>{
    setPages(pageNumber);
    setLink(newLink)
    window.scrollTo({top: 0 , behavior: "smooth"});
  }

  return (
    <div>
      <h1 className="font-bold text-4xl">Pokemons</h1>
      <input type="text" name="search" id="search" />
      <div className="grid grid-cols-4 gap-4">
        {pokemons?.results?.map((pokemons, index) => (
          <div key={index} className="border p-4 border-gray-200 rounded shadow ">
            <h2>{pokemons.name}</h2>
          </div>
        ))}
      </div>
    <div className="flex justify-center items-center gap-6">
      <button disabled={!pokemons?.previous} onClick={() => updateState(pages -1, pokemons.previous)}>Prev</button>
      <p>{pages}</p>
      <button disabled={!pokemons?.next} onClick={() => updateState(pages + 1, pokemons.next)}>Next</button>
    </div>
    </div>
  );
}

export { Home };
