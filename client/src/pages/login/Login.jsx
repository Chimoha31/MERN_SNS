import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">MERN SNS</h3>
          <span className="loginDesc">RealTime SNS</span>
        </div>
        {/* Login Form */}
        <div className="loginRight">
          <div className="loginBox">
            <p className="loginMsg">Login here</p>
            <input type="text" className="loginInput" placeholder="Email" />
            <input type="text" className="loginInput" placeholder="Password" />
            <button className="loginButton">Login</button>
            <span className="loginForgot">Forgot your password ?</span>
            <button className="loginResisterButton">
              Create account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
