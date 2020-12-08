import React from "react";
import fbLogo from "../img/fb-logo.png";
import "../styles/Login.css";
import { auth, provider } from "../firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

const Login = () => {
  const [state, dispatch] = useStateValue();
  const signIn = (e) => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);

        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img src={fbLogo} />
        <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" />
      </div>
      <button type="submit" onClick={(e) => signIn(e)}>
        Sign In
      </button>
    </div>
  );
};

export default Login;
