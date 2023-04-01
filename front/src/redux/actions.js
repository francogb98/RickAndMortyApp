import {
  GET_CHAR,
  ADD_FAV,
  DEL_FAV,
  CARD_DETAIL,
  FILTER_FAV,
  ORDER,
  DELETE_CHAR,
  PUT_FAV,
} from "./actions-type";
import axios from "axios";
export function getChar(id) {
  return async (dispatch) => {
    const resp = await axios(`http://localhost:3001/rickandmorty/detail/${id}`);

    return dispatch({
      type: GET_CHAR,
      payload: resp.data,
    });
  };
}
export function deleteChar(id) {
  return (dispatch) => {
    return dispatch({
      type: DELETE_CHAR,
      payload: id,
    });
  };
}

export function getDetail(id) {
  return async (dispatch) => {
    const resp = await axios(`https://rickandmortyapi.com/api/character/${id}`);

    return dispatch({
      type: CARD_DETAIL,
      payload: resp.data,
    });
  };
}

export function addFavorites(favorite) {
  axios.post("http://localhost:3001/rickandmorty/fav", favorite);

  return async (dispatch) => {
    return dispatch({
      type: ADD_FAV,
      payload: favorite,
    });
  };
}
export function deleteFavorite(id) {
  return (dispatch) => {
    return dispatch({
      type: DEL_FAV,
      id,
    });
  };
}
export function filterFavorite(gender) {
  return async (dispatch) => {
    const resp = await axios(
      `http://localhost:3001/rickandmorty/fav?gender=${gender}`
    );

    return dispatch({
      type: FILTER_FAV,
      payload: resp.data,
    });
  };
}
export function orderCards(id) {
  return {
    type: ORDER,
    payload: id,
  };
}
export function putFav(status) {
  return {
    type: PUT_FAV,
    payload: status,
  };
}
