import React, { useEffect } from "react";

import SignUpFormInput from "../container/sign-up-form-input/sign-up-form-input";
import "./register.style.scss";

import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { register } from "../../../redux/features/authSlice";

const Register = () => {
  const { loading, error } = useSelector((state) => ({ ...state.auth }));
  const dispatch = useDispatch();
  const navigate = useHistory();

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const handleSubmit = (data) => {
    dispatch(register({ data, navigate, toast }));
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-title">Sign Up</div>
        <div className="login-form-input">
          <SignUpFormInput onFormSubmit={handleSubmit} isLoading={loading} />
        </div>
        <div className="login-link">
          <Link to="/login">
            <p>Already have an account ? Sign In</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
