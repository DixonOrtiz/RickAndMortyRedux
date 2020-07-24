import React from 'react';
import './styles.css';

/**
 * @function Component->CharacterCard
 * @description simple component that displays data on a yellow card
 * @param  { props->(name, status, species, image) }
 * @return  { JSX }
 */
const CharacterCard = ({ name, status, species, image }) => {
  return (
    <div className="card">
      <img src={image} alt={name + '-image'} width="200" height="200" />
      <div>
        <h1>{name}</h1>
        <h2>{status}</h2>
        <h3>{species}</h3>
      </div>
    </div>
  );
};

export default CharacterCard;
