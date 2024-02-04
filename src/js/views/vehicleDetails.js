import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';

const VehicleDetails = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    if (!store.vehiclesDetails[id]) {
      actions.fetchVehicleDetails(id);
    }
  }, [id, actions, store.vehiclesDetails]);

  const details = store.vehiclesDetails[id];

  return (
    <div className="vehicle-details">
      {details ? (
        <div>
          <h2>{details.name}</h2>
          <p>Model: {details.model}</p>
          <p>Manufacturer: {details.manufacturer}</p>
          <p>Cost in Credits: {details.cost_in_credits}</p>
          {/* Outros detalhes do veículo */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default VehicleDetails;
