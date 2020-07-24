import axios from 'axios';

import {
  FETCH_CHARACTERS_REQUEST,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAILURE,
} from './characterTypes';

/**
 * @function fetchCharacters
 * @description faction creator that performs a get request to a Rick and Morty api
 * @return  { fetchCharactersSuccess(characters) }
 */
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

/**
 * @function fetchCharactersRequest
 * @description action creator standard
 * @return  {     
              type: FETCH_CHARACTERS_REQUEST,
            }
 */
export const fetchCharactersRequest = () => {
  return {
    type: FETCH_CHARACTERS_REQUEST,
  };
};

/**
 * @function fetchCharactersSuccess
 * @description action creator standard
 * @param  { array[object] characters }
 * @return  {
              type: FETCH_CHARACTERS_SUCCESS,
              payload: characters,
            }
*/
export const fetchCharactersSuccess = (characters) => {
  return {
    type: FETCH_CHARACTERS_SUCCESS,
    payload: characters,
  };
};

/**
 * @function fetchCharactersRequest
 * @description action creator standard
 * @param  { error }
 * @return  {
              type: FETCH_CHARACTERS_FAILURE,
              payload: error,
}
*/
export const fetchCharactersFailure = (error) => {
  return {
    type: FETCH_CHARACTERS_FAILURE,
    payload: error,
  };
};
