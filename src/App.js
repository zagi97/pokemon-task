import React, { useContext } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import PokemonScreen from "./components/PokemonScreen";
import LoginContext from "./context/login-context";
import { useGlobalContext } from "./utilities/useGlobalContext";

function App() {
  const { isLoggedIn } = useGlobalContext();
  //const ctx = useContext(LoginContext);
  return (
    <React.Fragment>
      <main>
        {!isLoggedIn && <Login />}
        {isLoggedIn && <PokemonScreen />}
      </main>
    </React.Fragment>
  );
}

export default App;
