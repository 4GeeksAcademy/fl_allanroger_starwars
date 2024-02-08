import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';

const VehicleDetails = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  const [isLoading, setIsLoading] = useState(true); // Adiciona um estado para controlar o loading

  useEffect(() => {
    if (!store.vehiclesDetails[id]) {
      actions.fetchVehicleDetails(id);
    }
    const timer = setTimeout(() => {
      setIsLoading(false); // Após 1 segundos, altera o estado para remover o loading
    }, 1000);

    return () => clearTimeout(timer); // Limpa o timer se o componente for desmontado
  }, [id, actions, store.vehiclesDetails]);

  const details = store.vehiclesDetails[id];

  // Se isLoading for verdadeiro, mostra a tela de loading, senão, mostra os detalhes
  return (
    <div className="vehicle-details">
      {isLoading ? (
        // Exibe a imagem e a mensagem de Loading
        <div className="text-center">
          <img src="https://th.bing.com/th/id/OIG1.zgNoVxSIVkS7.7uDxLgi?w=1024&h=1024&rs=1&pid=ImgDetMain" className="rounded-circle" alt="Loading" width={'500px'} />
          <p>Loading...</p>
        </div>
      ) : details ? (
        // Exibe os detalhes do veículo
        <div className='m-5'>
          <img src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`} alt="Vehicle" />
          <div className='p-2 mt-2 bg-light'>
          <h2>{details.name}</h2>
          <h6>Model: {details.model}</h6>
          <h6>Manufacturer: {details.manufacturer}</h6>
          <h6>Cost in Credits: {details.cost_in_credits}</h6>
          {/* Outros detalhes do veículo */}
        </div>
        </div>
      ) : (
        // Caso não encontre os detalhes, mostra uma mensagem
        <p>Vehicle not found.</p>
      )}
    </div>
  );
};

export default VehicleDetails;
