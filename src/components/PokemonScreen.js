import { useFetch } from "../utilities/useFetch";
import PokemonList from "./PokemonList";
import { useGlobalContext } from "../utilities/useGlobalContext";

const pokemonUrl = "https://pokeapi.co/api/v2/pokemon";

const PokemonScreen = () => {
  const { onLogout } = useGlobalContext();
  const { pokemonData, isLoading } = useFetch(pokemonUrl);
  console.log(pokemonData);
  const checkIfLoading = () => {
    if (isLoading) {
      return (
        // <PacmanLoader
        //   color="yellow"
        //   size="50"
        //   style={{ position: "fixed", top: "50%", left: "50%" }}
        // />
        <h1
          style={{ color: "dark", display: "flex", justifyContent: "center" }}
        >
          ...loading
        </h1>
      );
    }
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          paddingTop: "20px",
        }}
      >
        <PokemonList props={pokemonData} />
      </div>
    );
  };
  return (
    <>
      <div style={{ backgroundColor: "green", minHeight: "100vh" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h2>Pokemon task</h2>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", paddingTop: 20 }}
        >
          <button
            style={{ width: "20%", borderRadius: 100 }}
            onChange={checkIfLoading()}
          >
            Fetch Characters
          </button>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h4>{pokemonData.count}</h4>
        </div>
        <button onClick={onLogout}>Log Out</button>
      </div>
    </>
  );
};

export default PokemonScreen;
