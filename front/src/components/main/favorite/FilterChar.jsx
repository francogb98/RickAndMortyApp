import axios from "axios";
import { useDispatch } from "react-redux";
import { filterFavorite, orderCards } from "../../../redux/actions";

function FilterChar(props) {
  const dispatch = useDispatch();

  const handleClick = async (e) => {
    // dispatch(filterFavorite(e.target.value));

    const resp = await axios(
      `http://localhost:3001/rickandmorty/fav?gender=${e.target.value}`
    );
    console.log(props.onCardGender);
  };
  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
  };

  return (
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
        onChange={handleOrder}
        className="col-6 ms-2"
        style={{ width: "200px" }}
      >
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>
      </select>
    </div>
  );
}

export default FilterChar;
