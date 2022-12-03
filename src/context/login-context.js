import React, { useEffect, useState } from "react";

export const GlobalContext = React.createContext();

const LoginContext = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  /*  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  }; */

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };
  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        /* onLogout: logoutHandler, */
        onLogin: loginHandler,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default LoginContext;
