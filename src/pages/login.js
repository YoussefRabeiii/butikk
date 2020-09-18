import React, { useState } from "react";

import { auth } from "../firebase";
import { Link, useHistory } from "react-router-dom";

import "../styles/pages/login.css";
const Login = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => history.push("/"))
      .catch((err) => alert(err.message));
  };

  const signUp = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // console.log("🔑", auth); // For Debugging

        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <h1 className="logo login__logo">Butikk</h1>
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="styledBtn login__signIn"
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the Butikk Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>

        <button className="styledBtn login__signUp" onClick={signUp}>
          Create Your Butikk Account
        </button>
      </div>
    </div>
  );
};

export default Login;
