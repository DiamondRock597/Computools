import {GET_DATA, ADD_FAV} from '../types';

export const getData = () => {
  return function (dispatch) {
    fetch(
      'http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c',
    )
      .then((responce) => responce.json())
      .then((data) => {
        dispatch({type: GET_DATA, payload: data.results});
      })
      .catch((e) => console.log(e));
  };
};

export const addFavourite = (id) => {
  return {
    type: ADD_FAV,
    payload: id,
  };
};
