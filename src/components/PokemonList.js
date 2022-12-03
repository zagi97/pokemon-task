import Pokemon from "./Pokemon";
import "../App.css";

const PokemonList = (data) => {
  console.log(data.props.results);
  return (
    <div>
      {data.props.results?.map((pokemon) => (
        <Pokemon
          key={pokemon.name}
          name={pokemon.name}
          url={pokemon.url}
        ></Pokemon>
      ))}
    </div>
  );
};

export default PokemonList;
