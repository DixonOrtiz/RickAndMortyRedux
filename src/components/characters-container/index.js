import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchCharacters } from '../../redux';
import CharacterCard from '../character-card';

const CharactersContainer = () => {
  const dispatch = useDispatch();
  const characterState = useSelector((state) => state.characterState);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

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

export default CharactersContainer;
