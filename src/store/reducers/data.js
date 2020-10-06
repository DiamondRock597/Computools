import {GET_DATA, ADD_FAV} from '../types';

const initialState = {
  films: [],
  favouriteFilms: [],
};

export const data = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        films: action.payload.map((item) =>  ({...item, favourite: false}))
      };
      
    case ADD_FAV:
      const favFilms = state.films.map((film) => {
        if (film.id === action.payload) {
          film.favourite = !film.favourite;
        }
        return film;
      });

      return {
        films: [...favFilms],
        favouriteFilms: favFilms.filter((film) => film.favourite),
      };
    default:
      return state;
  }
};
