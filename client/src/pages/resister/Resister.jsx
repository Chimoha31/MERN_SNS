import React from "react";
import "./Resister.css";

const Resister = () => {
  return (
    <div className="resister">
      <div className="resisterWrapper">
        <div className="resisterLeft">
          <h3 className="resisterLogo">MERN SNS</h3>
          <span className="resisterDesc">RealTime SNS</span>
        </div>
        {/* Resister Form */}
        <div className="resisterRight">
          <div className="resisterBox">
            <p className="resisterMsg">Resister here</p>
            <input type="text" className="resisterInput" placeholder="Username" />
            <input type="text" className="resisterInput" placeholder="Email" />
            <input type="text" className="resisterInput" placeholder="Password" />
            <input type="text" className="resisterInput" placeholder="Confirm Password" />
            <button className="resisterButton">Sign Up</button>
            {/* <span className="resisterForgot">You already have an account ?</span> */}
            <button className="loginResisterButton">Login here</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resister;
