import React from "react";
import { useDispatch } from "react-redux";
import { deleteChar } from "../../../redux/actions";

function DeleteChar({ id }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    const resp = confirm(
      `¿Seguro que desea eliminar el personaje con el id ${id}?`
    );
    if (resp) return dispatch(deleteChar(id));
  };

  return (
    <button
      className="btn btn-light btn-outline-warning d-flex "
      style={{
        height: "fit-content",
        width: "fit-content",
        alignItems: "center",
      }}
      onClick={handleDelete}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"></path>
      </svg>
    </button>
  );
}

export default DeleteChar;
