import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchCharacters } from '../../redux';
import CharacterCard from '../character-card';

const CharactersContainer = ({ characters, fetchCharacters }) => {
  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  return (
    <div>
      <div>
        {characters &&
          characters &&
          characters.map((character) => (
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

const mapStateToProps = (state) => {
  return {
    characters: state.characterState.characters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCharacters: () => dispatch(fetchCharacters()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharactersContainer);
