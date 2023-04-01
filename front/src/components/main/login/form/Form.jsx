import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Registro from "../registro/Registro";
import style from "./Form.module.css";
import axios from "axios";

export default function Form({ login, errors }) {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [msg, setMsg] = useState("");

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  useEffect(() => {
    setUserData({
      username: "",
      password: "",
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios(
        `http://localhost:3001/rickandmorty/login?email=${userData.username}&password=${userData.password}`
      );
      const { access } = resp.data;
      if (access === true) {
        setMsg("");
        setError(false);
        navigate("/home");
      }
    } catch (error) {
      setMsg(error.response.data.msg);
      setError(true);
    }
  };

  return (
    <>
      <div className="row mb-5">
        <h1
          style={{
            width: "fit-content",
            height: "fit-content",
            color: "white",
            fontWeight: "bold",
            margin: "0 auto",
          }}
        >
          Inicio de Sesion
        </h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className={`d-flex flex-column bg-dark text-white fw-bold rounded  ${style.body}`}
        style={{
          width: "240px",
          height: "350px",
          margin: "0 auto",
          marginTop: "0px",
        }}
      >
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          autoComplete="off"
          value={userData.username}
          onChange={handleInputChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          autoComplete="off"
          value={userData.password}
          onChange={handleInputChange}
        />
        {error && (
          <p
            style={{
              background: "rgb(250,250,250,0.8)",
              border: "2px solid red",
              color: "black",
              margin: "210px 18px 0px 18px",
              padding: "5px",
              position: "absolute",
            }}
          >
            {msg}
          </p>
        )}
        <button
          type="submit"
          className="btn btn-danger btn-outline-primary text-light fw-bold mt-3"
          style={{ marginLeft: "21px" }}
        >
          Login
        </button>
        <Link
          className="text-light"
          style={{
            marginTop: "80px",
            marginLeft: "21px",
          }}
          to="/registrar"
        >
          ¿No tienes una cuenta? Registrate
        </Link>
      </form>
    </>
  );
}
