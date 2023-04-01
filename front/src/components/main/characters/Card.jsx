import React from "react";
import { Link } from "react-router-dom";
import style from "./css/card.module.css";
import AddFavorite from "./AddFavorite";
import DeleteChar from "./DeleteChar";
import { useLocation } from "react-router-dom";

function CardCharacter(props) {
  const location = useLocation();
  const name = props.name.split(" ");

  return (
    <div
      className="d-flex text-white me-5 ms-5 mb-5 rounded"
      style={{ height: "200px", borderRadius: "10px 10px 10px 10px" }}
      key={props.id}
    >
      <Link to={`/detail/${props.id}`}>
        <div className={style.imageContainer}>
          <img
            src={props.image}
            style={{
              height: "200px",
              borderRadius: "7px 2px 2px 7px",
            }}
            alt={props.name}
          />
          <p className={style.imageText}>Click para mas info...</p>
        </div>
      </Link>

      <div
        className="d-flex flex-column rounded row"
        style={{
          width: "300px",
          backgroundColor: "rgb(0,0,250, 0.1)",
          justifyContent: "center",
        }}
      >
        <div className="col-10" style={{ marginBottom: "-15px", padding: "0" }}>
          <div
            className="d-flex justify-content-end"
            style={{ marginBottom: "6px" }}
          ></div>
          <p htmlFor="" className="fw-bold fs-4 ms-3">
            Name:
            <span className="text-danger fs-4 fw-bold ms-3">
              {name.length > 1 ? name[0] : name}
            </span>
          </p>

          <p htmlFor="" className="fw-bold fs-4 ms-3">
            Id:
            <span className="text-danger ms-3">{props.id}</span>
          </p>
          <p htmlFor="" className="fw-bold fs-4 ms-3">
            Status:
            <span className="text-danger ms-3">{props.status}</span>
          </p>
          <p htmlFor="" className="fw-bold fs-4 ms-3">
            Gender:
            <span className="text-danger fs-4 fw-bold ms-3">
              {props.gender}
            </span>
          </p>
        </div>
        <div
          className="col-2 d-flex flex-column"
          style={{
            height: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <AddFavorite props={props} />

          {/* button de eliminar */}
          <DeleteChar id={props.id} />
        </div>
      </div>
    </div>
  );
}

export default CardCharacter;
