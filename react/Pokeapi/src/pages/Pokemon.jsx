import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Pokemon() {
  const [pokemon, setPokemon] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((res) => setPokemon(res))
      .catch((err) => console.log(err));
  }, [id]);

  if (!pokemon) {
    return <h1>No hay pokemon para mostrar</h1>;
  }

  return (
    <div className="min-h-screen bg-gray-800 flex flex-col items-center justify-center px-4 lg:px-8">
      <div className="flex items-center border border-gray-600 rounded-lg p-2">
        <img
          className="w-50 lg:w-60"
          src={pokemon?.sprites?.front_default}
          alt={pokemon?.name}
        />
        <div className="flex flex-col items-center justify-center gap-8 ">
          <h2 className="text-4xl lg:text-5xl  text-white font-bold">{pokemon?.name}</h2>
          <div className="flex gap-4">
            <div className="flex flex-col items-start justify-center gap-2">
              <p className="text-md lg:text-xl text-gray-400">Height: {pokemon?.height}</p>
              <p className="text-md lg:text-xl text-gray-400">Weight: {pokemon?.weight}</p>
            </div>
            <div className="flex flex-col items-start justify-center gap-2">
              <p className="text-md lg:text-xl text-gray-400">
                Types:{" "}
                {pokemon?.types?.length === 1
                  ? pokemon?.types?.[0]?.type?.name
                  : pokemon?.types?.[0]?.type?.name +
                    ", " +
                    pokemon?.types?.[1]?.type?.name}
              </p>
              <p className="text-md lg:text-xl text-gray-400">
                Species: {pokemon?.species?.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Pokemon };
