import {act} from 'react-test-renderer';
import {GET_DATA, ADD_FAV} from '../types';

const initialState = {
  films: [],
  favouriteFilms: [],
};

export const data = (state = initialState, action) => {
  const newFav = state.films.filter((item) => item.id === action.payload);
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        films: action.payload,
      };
    case ADD_FAV:
      return {
        ...state,
        favouriteFilms: [...state.favouriteFilms, ...newFav],
      };
    default:
      return state;
  }
};
