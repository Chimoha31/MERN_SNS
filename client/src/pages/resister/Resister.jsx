import React, { useRef } from "react";
import "./Resister.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Resister = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordConfirmation = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // passwordとconfirm passwordが合っているかの確認
    if (password.current.value !== passwordConfirmation.current.value) {
      passwordConfirmation.current.setCustomValidity("Incorrect password");
    } else {
      try {
        const user = {
          username: username.current.value,
          email: email.current.value,
          password: password.current.value,
        };
        // Resister APIを叩く
        await axios.post(`/auth/resister`, user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="resister">
      <div className="resisterWrapper">
        <div className="resisterLeft">
          <h3 className="resisterLogo">MERN SNS</h3>
          <span className="resisterDesc">RealTime SNS</span>
        </div>
        {/* Resister Form */}
        <div className="resisterRight">
          <form className="resisterBox" onSubmit={(e) => handleSubmit(e)}>
            <p className="resisterMsg">Resister here</p>
            <input
              type="text"
              className="resisterInput"
              placeholder="Username"
              ref={username}
            />
            <input
              type="email"
              className="resisterInput"
              placeholder="Email"
              required
              ref={email}
            />
            <input
              type="password"
              className="resisterInput"
              placeholder="Password"
              required
              minLength="3"
              ref={password}
            />
            <input
              type="password"
              className="resisterInput"
              placeholder="Confirm Password"
              required
              minLength="3"
              ref={passwordConfirmation}
            />
            <button className="resisterButton" type="submit">
              Sign Up
            </button>
            {/* <span className="resisterForgot">You already have an account ?</span> */}
            <button className="loginResisterButton">Login here</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Resister;
