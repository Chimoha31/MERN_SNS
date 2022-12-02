import React, { useRef } from "react";
import "./Login.css";

const Login = () => {
  const email = useRef();
  const password = useRef();
  console.log(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email.current.value)
    console.log(password.current.value)

  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">MERN SNS</h3>
          <span className="loginDesc">RealTime SNS</span>
        </div>
        {/* Login Form */}
        <div className="loginRight">
          <form className="loginBox" onSubmit={(e) => handleSubmit(e)}>
            <p className="loginMsg">Login here</p>
            <input
              type="email"
              className="loginInput"
              placeholder="Email"
              required
              ref={email}
            />
            <input
              type="password"
              className="loginInput"
              placeholder="Password"
              required
              minLength="3"
              ref={password}
            />
            <button className="loginButton">Login</button>
            <span className="loginForgot">Forgot your password ?</span>
            <button className="loginResisterButton">Create account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
