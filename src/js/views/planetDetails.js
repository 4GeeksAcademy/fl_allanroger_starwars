// planetDetails.js
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';

const PlanetDetails = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    if (!store.planetsDetails[id]) {
      actions.fetchPlanetDetails(id);
    }
  }, [id, actions, store.planetsDetails]);

  const details = store.planetsDetails[id];

  return (
    <div className="planet-details">
      {details ? (
        <div>
          <h2>{details.name}</h2>
          <p>Climate: {details.climate}</p>
          <p>Terrain: {details.terrain}</p>
          <p>Population: {details.population}</p>
          {/* Outros detalhes do planeta */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PlanetDetails;
