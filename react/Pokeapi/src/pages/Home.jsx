import { useState, useEffect, useRef } from "react";
import { Link  } from "react-router-dom";

function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [link, setLink] = useState("https://pokeapi.co/api/v2/pokemon");
  const [pages, setPages] = useState(1);
  const input = useRef(null);

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

  const getPokemonID = (pokemon) => {
    const id = pokemon.url.split("/");
    return id[6];
  }

  const SearchPokemon = () =>{
    window.location.href = `/pokemon/${input.current.value.toLowerCase()}`
  }

  if(!pokemons || pokemons ==[]){
    return("cargando...");
  }

  return (
    <div className="bg-gray-800 p-4 md:p-8 min-h-screen flex flex-col items-center gap-12 ">
      <h1 className="font-bold text-4xl text-white">Pokemons</h1>
      <div className="flex justify-center items-center gap-2">
        <input ref={input} className="border px-2 py-1 border-white rounded-2xl" type="text" name="search" id="search" />
        <button onClick={SearchPokemon} className="cursor-pointer">🔎</button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {pokemons?.results?.map((pokemon, index) => (
          <div key={index} className="border p-4 border-gray-300/50 rounded shadow  flex flex-col justify-center items-center text-white lg:hover:scale-105 lg:hover:shadow-2xl ">
            <Link to={`/pokemon/${getPokemonID(pokemon)}`}>
            <img className="w-40" src= {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonID(pokemon)}.png`} alt={pokemon.name} />
            <h2>{pokemon.name}</h2>
            </Link>
          </div>
        ))}
      </div>
    <div className="flex justify-center items-center gap-6">
      <button className="bg-white rounded-xl text-gray-800 cursor-pointer px-4 py-2 disabled:bg-gray-600  " disabled={!pokemons?.previous} onClick={() => updateState(pages -1, pokemons.previous)}>Prev</button>
      <p className="text-white">{pages}</p>
      <button className="bg-white rounded-xl text-gray-800 cursor-pointer px-4 py-2 disabled:bg-gray-600  " disabled={!pokemons?.next} onClick={() => updateState(pages + 1, pokemons.next)}>Next</button>
    </div>
    </div>
  );
}

export { Home };
