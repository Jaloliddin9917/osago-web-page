import React from "react";
import { Link } from "react-router-dom";
import SignInFormInput from "../container/sign-in-form-input/sign-in-form-input";
import "./login.style.scss";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-title">Sign In</div>
        <div className="login-form-input">
          <SignInFormInput />
        </div>
        <div className="login-link">
          <Link to="/register">
            <p>Don't have an account ? Sign Up</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
