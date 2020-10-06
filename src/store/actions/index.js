import {GET_DATA, ADD_FAV} from '../types';

export const getData = () => async (dispatch) => {
  try {
    const responce = await fetch('http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c');
    const data = await responce.json();
    dispatch({type: GET_DATA, payload: data.results});
  } catch (error) {
    console.log(error);
  }
};

export const addFavourite = (id) => ({type: ADD_FAV, payload: id});
