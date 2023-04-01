import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardCharacter from "../characters/Card";
import FilterChar from "./FilterChar";
import axios from "axios";

function Favorites() {
  // const { favorites } = useSelector((state) => state);
  const [favorites, setFavorites] = useState([]);

  function handleCardDelete(id) {
    // Elimina la card con el ID proporcionado de la lista de cards
    setFavorites(favorites.filter((card) => card.id !== id));
  }
  function handleCardGender(data) {
    // Elimina la card con el ID proporcionado de la lista de cards
    setFavorites(data);
  }

  const handleClick = async (e) => {
    // dispatch(filterFavorite(e.target.value));

    const resp = await axios(
      `http://localhost:3001/rickandmorty/fav?gender=${e.target.value}`
    );
    handleCardGender(resp.data);
  };

  useEffect(() => {
    return async function () {
      const result = await axios("http://localhost:3001/rickandmorty/fav");
      const characters = result.data;
      setFavorites(characters);
    };
  }, []);

  return (
    <div>
      <div className="row">
        <div className="fixed-bottom" style={{ marginLeft: "30%" }}>
          <select
            name=""
            id=""
            onChange={handleClick}
            className="col-6"
            style={{ width: "200px" }}
          >
            <option value="All-Fav" defaultValue="Order By">
              All Fav
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="unknown">Unknown</option>
            <option value="Genderless">Genderless</option>
          </select>

          <select
            name=""
            id=""
            className="col-6 ms-2"
            style={{ width: "200px" }}
          >
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
          </select>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "end",
          justifyContent: "space-between",
        }}
      >
        {favorites.length ? (
          favorites.map((e) => (
            <CardCharacter
              id={e.id}
              key={e.id}
              name={e.name}
              image={e.image}
              species={e.species}
              origin={e.origin}
              gender={e.gender}
              status={e.status}
              estoy={true}
              onCardDelete={() => handleCardDelete(e.id)}
            />
          ))
        ) : (
          <p
            className="text-danger fs-2 fw-bold p-4"
            style={{
              margin: "100px auto",
              border: "1px solid rgb(150,0,0)",
              background: "rgb(250,250,250, .2)",
            }}
          >
            No hay Favs de este genero
          </p>
        )}
      </div>
    </div>
  );
}

export default Favorites;
