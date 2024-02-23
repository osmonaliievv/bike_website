import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const { authWithGoogle, register } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    try {
      await register(email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
      setEmail("");
      setPassword("");
    }
  };
  return (
    <div className="container">
      {error && <div className="error">{error}</div>}
      <h2 className="title">Sign Up</h2>
      <input
        className="input"
        type="text"
        placeholder="Email Address"
        value={email}
        autoComplete="new-email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="input"
        type="password"
        placeholder="Password"
        value={password}
        autoComplete="new-password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="button" onClick={handleSubmit}>
        Sign Up
      </button>
      <button className="button" onClick={authWithGoogle}>
        Continue with Google
      </button>
      <label className="checkbox">
        <input type="checkbox" />
        Remember me
      </label>
    </div>
  );
};

export default Auth;
