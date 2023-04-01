import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorites, deleteFavorite } from "../../../redux/actions";
// import { putFav } from "../../../redux/actions";
import axios from "axios";

function addFavorite({ props }) {
  const [isFav, setIsFav] = useState(false);
  const { favorites } = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleFavorite = async () => {
    if (isFav === true) {
      setIsFav(false);
      dispatch(deleteFavorite(props.id));
      await axios
        .delete(`http://localhost:3001/rickandmorty/fav/${props.id}`)
        .then(() => {
          // Aquí llamas a la función de eliminación pasada como prop desde el componente padre
          if (props.onCardDelete) props.onCardDelete();
        });
    } else {
      setIsFav(true);
      const fav = await axios(
        `http://localhost:3001/rickandmorty/fav?id=${props.id}`
      );
      if (fav.data.length === 1) {
        return alert(
          `El personaje con el id ${props.id} ya se encuentra en tus favs`
        );
      }
      dispatch(addFavorites(props));
    }
  };

  useEffect(() => {
    const { estoy, ...rest } = props;
    if (estoy) setIsFav(estoy);

    favorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [favorites]);

  return (
    <div>
      {isFav ? (
        <button
          onClick={handleFavorite}
          className="btn btn-outline-danger btn-light"
        >
          <span className=""> ❤️</span>
        </button>
      ) : (
        <button
          onClick={handleFavorite}
          className="btn btn-outline-danger btn-light "
          style={{ width: "50px", height: "40px" }}
        >
          <span className=""> ♡</span>
        </button>
      )}
    </div>
  );
}

export default addFavorite;
