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

const initialState = {
  characters: [],
  favorites: [],
  allCharacters: [],
  detail: {},
  isFav: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHAR:
      return {
        ...state,
        characters: [...state.characters, action.payload],
      };
    case DELETE_CHAR:
      const deleteChar = state.characters.filter(
        (char) => char.id !== action.payload
      );

      return {
        ...state,
        characters: [...deleteChar],
      };

    case CARD_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };

    case ADD_FAV:
      return {
        ...state,

        favorites: [...state.allCharacters, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };
    case DEL_FAV:
      const deleteFav = state.allCharacters.filter(
        (favorite) => favorite.id !== action.id
      );
      return {
        ...state,
        allCharacters: [...deleteFav],
        favorites: [...deleteFav],
      };
    case FILTER_FAV:
      let characterFilter;
      action.payload === "All-Fav"
        ? (characterFilter = state.allCharacters)
        : (characterFilter = state.allCharacters.filter(
            (char) => char.gender === action.payload
          ));

      return {
        ...state,
        favorites: characterFilter,
      };

    case ORDER:
      return {
        ...state,
        favorites:
          action.payload === "Ascendente"
            ? state.favorites.sort((a, b) => a.id - b.id)
            : state.favorites.sort((a, b) => b.id - a.id),
      };

    case PUT_FAV:
      return {
        ...state,
        isFav: action.payload,
      };

    default:
      return { ...state };
      break;
  }
}
