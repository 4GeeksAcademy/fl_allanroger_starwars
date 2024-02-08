// // planetDetails.js
// import React, { useContext, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { Context } from '../store/appContext';

// const PlanetDetails = () => {
//   const { id } = useParams();
//   const { store, actions } = useContext(Context);

//   useEffect(() => {
//     if (!store.planetsDetails[id]) {
//       actions.fetchPlanetDetails(id);
//     }
//   }, [id, actions, store.planetsDetails]);

//   const details = store.planetsDetails[id];

//   return (
//     <div className="planet-details">
//       {details ? (
//         <div>
//           <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="Planet" />
//           <h2>{details.name}</h2>
//           <p>Climate: {details.climate}</p>
//           <p>Terrain: {details.terrain}</p>
//           <p>Population: {details.population}</p>
//           {/* Outros detalhes do planeta */}
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default PlanetDetails;
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';

const PlanetDetails = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  const [isLoading, setIsLoading] = useState(true); // Adiciona um estado para controlar o loading

  const handleError = (e) => {
    e.target.src = 'https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357';
  };

  useEffect(() => {
    // Verifica se os detalhes do planeta já estão carregados no store
    if (!store.planetsDetails[id]) {
      actions.fetchPlanetDetails(id);
    }
    const timer = setTimeout(() => {
      setIsLoading(false); // Após 1 segundos, altera o estado para remover o loading
    }, 1000);

    return () => clearTimeout(timer); // Limpa o timer se o componente for desmontado
  }, [id, actions, store.planetsDetails]);

  const details = store.planetsDetails[id];

  // Se isLoading for verdadeiro, mostra a tela de loading, senão, mostra os detalhes
  return (
    <div className="planet-details">
      {isLoading ? (
        // Exibe a mensagem de Loading
        <div className="text-center">
          <img src="https://th.bing.com/th/id/OIG3.YFqmwdWYWCwFZ8om_A40?w=1024&h=1024&rs=1&pid=ImgDetMain" className="rounded-circle" alt="Loading" width={'500px'} />
          <p>Loading...</p>
        </div>
      ) : details ? (
        // Exibe os detalhes do planeta
        <div className='m-5'>
            <img 
            src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
            onError={handleError} // Usando o evento onError para tratar o erro
            alt="Planet"
          />
          {/* <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="Planet" /> */}
          <div className='p-2 mt-2 bg-light'>
          <h2>{details.name}</h2>
          <h6>Climate: {details.climate}</h6>
          <h6>Terrain: {details.terrain}</h6>
          <h6>Population: {details.population}</h6>
          {/* Outros detalhes do planeta */}
        </div>
        </div>
      ) : (
        // Caso não encontre os detalhes, mostra uma mensagem
        <p>Planet not found.</p>
      )}
    </div>
  );
};

export default PlanetDetails;
