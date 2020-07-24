import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchCharacters } from '../../redux';
import CharacterCard from '../character-card';

/**
 * @function  Component->CharactersContainer
 * @description  component that returns different views based on the current state of a get request
 * @param  { props->(reduxState characterState, actionCreator fetchCharacters) }
 * @return  { JSX }
 */
const CharactersContainer = ({ characterState, fetchCharacters }) => {
  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  return characterState.loading ? (
    <h2>Loading</h2>
  ) : characterState.error ? (
    <h2>{characterState.error}</h2>
  ) : (
    <div>
      <div>
        {characterState.characters &&
          characterState.characters &&
          characterState.characters.map((character) => (
            <CharacterCard
              key={character.id}
              name={character.name}
              status={character.status}
              species={character.species}
              image={character.image}
            />
          ))}
      </div>
    </div>
  );
};

//
//Function that allows to pass as props a section of the global state to the component
//
const mapStateToProps = (state) => {
  return {
    characterState: state.characterState,
  };
};

//
//Function that allows to dispatch a change to the state by means of an action creator
//
const mapDispatchToProps = (dispatch) => {
  return {
    fetchCharacters: () => dispatch(fetchCharacters()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharactersContainer);
