import React from "react";
import { getChar } from "../../../redux/actions";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import random from "../../../helpers/randomId";

function SearchChar() {
  const dispatch = useDispatch();
  const [id, setId] = useState(null);
  let num;

  const modificarNum = (e) => {
    num = e.target.value;
  };

  const modificarId = () => {
    setId(num);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(getChar(id));
        setId(null);
      }}
      className="d-flex ms-4"
    >
      <input
        type="search"
        className="input-group-text me-3"
        style={{ width: "25rem" }}
        onChange={modificarNum}
        placeholder="Buscar personaje por id ..."
      />

      <button
        type="submit"
        onClick={modificarId}
        className="
        btn btn-outline-danger me-1 text-white"
      >
        Agregar
      </button>
      <button
        type="button"
        onClick={() => dispatch(getChar(random()))}
        className="btn btn-outline-danger text-white"
      >
        Random
      </button>
    </form>
  );
}

export default SearchChar;
