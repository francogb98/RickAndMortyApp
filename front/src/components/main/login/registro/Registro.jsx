import React, { useEffect, useState } from "react";
import style from "../form/Form.module.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Registro() {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState(null);
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();
  const [redirect, setRedirect] = useState(false);

  if (redirect) {
    navigate("/");
  }

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  useEffect(() => {
    if (!userData.username || !userData.password || !userData.password2) {
      setMsg("Todos los campos son obligatorios");
      setErrors(true);
      return;
    }
    if (userData.password !== userData.password2) {
      setMsg("Las contraseñas no coincien");
      setErrors(true);
      return;
    }
    setMsg("");
    setErrors(false);
  }, [userData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (errors === false) {
      console.log("estoy aqui");
      const resp = await axios.post(
        `http://localhost:3001/rickandmorty/login`,
        userData
      );
      setMsg("Usuario creado con exito, Redireccionando...");

      const timer = setTimeout(() => {
        setUserData({ username: "", password: "", password2: "" });
        setRedirect(true);
      }, 2000);
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
          Registro De Usuario
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
        <label htmlFor="username">Email</label>
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
        <label htmlFor="password">Repetir Password</label>
        <input
          type="password"
          name="password2"
          value={userData.password2}
          onChange={handleInputChange}
        />

        <div className="row">
          {errors ? (
            <p
              style={{
                color: "red",
                fontWeight: "bold",
                fontSize: "15px",
                width: "fit-content",
                background: "rgb(250,250,250, .5)",
                border: "2px solid red",
                margin: "10px 33px 8px 33px",
              }}
            >
              {msg}
            </p>
          ) : null}
        </div>
        <div className="row">
          <button
            type="submit"
            className="col-6 btn btn-primary btn-outline-danger text-dark fw-bold "
            style={{ marginLeft: "33px" }}
          >
            Registrar
          </button>
          <button
            type="button"
            className="col-6 btn btn-secondary btn-outline-light text-dark fw-bold"
            style={{ marginRight: "33px" }}
            onClick={() => navigate("/")}
          >
            Inicio
          </button>
        </div>
        <div className="row">
          {errors === false && msg ? (
            <p
              style={{
                color: "green",
                fontWeight: "bold",
                fontSize: "15px",
                width: "fit-content",
                background: "rgb(250,250,250, .5)",
                border: "2px solid green",
                margin: "0px 33px 8px 33px",
              }}
            >
              {msg}
            </p>
          ) : null}
        </div>
      </form>
    </>
  );
}

export default Registro;
