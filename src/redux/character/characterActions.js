import axios from 'axios';

import {
  FETCH_CHARACTERS_REQUEST,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAILURE,
} from './characterTypes';

export const fetchCharacters = () => {
  return (dispatch) => {
    dispatch(fetchCharactersRequest());

    axios
      .get('https://rickandmortyapi.com/api/character')
      .then((response) => {
        const characters = response.data.results;

        dispatch(fetchCharactersSuccess(characters));
      })
      .catch((error) => {
        dispatch(fetchCharactersFailure(error.message));
      });
  };
};

export const fetchCharactersRequest = () => {
  return {
    type: FETCH_CHARACTERS_REQUEST,
  };
};

export const fetchCharactersSuccess = (characters) => {
  return {
    type: FETCH_CHARACTERS_SUCCESS,
    payload: characters,
  };
};

export const fetchCharactersFailure = (error) => {
  return {
    type: FETCH_CHARACTERS_FAILURE,
    payload: error,
  };
};
