import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";
import styled from "styled-components";

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div className="login">
      <div className="loginwrapper">
        <h1 className="logtitle">SING IN</h1>
        <form className="loginform">
          <input
            className="logininput"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="logininput"
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="logbutton"
            onClick={handleClick}
            disabled={isFetching}
          >
            LOGIN
          </button>
          {error && <Error>Something went wrong...</Error>}
          <Link to="/password" className="link">
            DO NOT YOU REMEMBER THE PASSWORD?
          </Link>
          <Link to="/register" className="link">
            CREATE A NEW ACCOUNT
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
