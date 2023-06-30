import { combineReducers } from "redux";

const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case "TOGGLE_FAVORITE":
      const existingIndex = state.findIndex((fav) => fav.id === action.character.id);
      if (existingIndex !== -1) {
        return state.filter((fav) => fav.id !== action.character.id);
      } else {
        return [...state, action.character];
      }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  favorites: favoritesReducer,
});

export default rootReducer;