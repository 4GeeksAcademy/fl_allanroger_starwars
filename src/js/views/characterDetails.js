import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';

const CharacterDetails = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    if (!store.charactersDetails[id]) {
      actions.fetchCharacterDetails(id);
    }
  }, [id, actions, store.charactersDetails]);

  const details = store.charactersDetails[id];

  return (
    <div className="character-details">
      {details ? (
        <div>
          <h2>{details.name}</h2>
          <p>Gender: {details.gender}</p>
          <p>Birth Year: {details.birth_year}</p>
          <p>Eye Color: {details.eye_color}</p>
          {/* Outros detalhes do personagem */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CharacterDetails;
