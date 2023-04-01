import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDetail } from "../../../redux/actions";

import style from "./detail.module.css";

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetail(id));
  }, []);
  const character = useSelector((state) => state.detail);
  const { origin } = character;

  return (
    <section className="container">
      <div className="row ms-5">
        <div
          className="col-6 text-danger rounded"
          //   style={{ background: "rgb(0,0,250,.1)" }}
        >
          <label className="text-white fs-5">Nombre:</label>
          <p className="fs-3 fw-bold text-primary">{character.name}</p>

          <label className="text-white fs-5">Status:</label>
          <p className="fs-4 fw-bold">{character.status}</p>
          <label className="text-white fs-5">Gender:</label>
          <p className="fs-4 fw-bold">{character.gender}</p>
          <label className="text-white fs-5">Species:</label>
          <p className="fs-4 fw-bold">{character.species}</p>
          {origin ? (
            <div>
              <label className="text-white fs-5">Origin:</label>
              <p className="fs-4 fw-bold">{origin.name}</p>
            </div>
          ) : null}
        </div>
        <div className="col-6 d-flex justify-content-center">
          <img
            src={character.image}
            alt={character.name}
            className="img rounded"
          />
        </div>
      </div>

      <nav
        className="row"
        style={{ margin: "30px 50px", width: "fit-content" }}
      >
        <button
          onClick={() => navigate("/Home")}
          className="btn btn-lg btn-outline-danger text-white fs-3"
        >
          Back To Home
        </button>
      </nav>
    </section>
  );
}

export default Detail;
