import { useState } from "react";
//import LoginContext from "../../context/login-context";
//import { useGlobalContext } from "../utils/useGlobalContext";
const Login = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  // const [usernameIsValid, setUsernameIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);

    setFormIsValid(
      event.target.value.includes("@") && enteredPassword.trim().length > 4
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      enteredUsername.includes("@") && event.target.value.trim().length > 4
    );
  };

  /*  const validateUsernameHandler = () => {
    setUsernameIsValid(enteredUsername.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 4);
  }; */

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredUsername, enteredPassword);
  };

  return (
    <form onSubmit={submitHandler}>
      <h1>Login form</h1>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="username"
          id="username"
          value={enteredUsername}
          onChange={usernameChangeHandler}
          /*  onBlur={validateUsernameHandler} */
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={enteredPassword}
          onChange={passwordChangeHandler}
          /*  onBlur={validatePasswordHandler} */
        />
      </div>
      <div>
        <button type="submit" disabled={!formIsValid}>
          Login
        </button>
      </div>
    </form>
  );
};

export default Login;
