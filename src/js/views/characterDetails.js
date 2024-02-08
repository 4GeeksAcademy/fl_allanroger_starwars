// export default CharacterDetails;
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';

const CharacterDetails = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!store.charactersDetails[id]) {
      actions.fetchCharacterDetails(id);
    }

    const timer = setTimeout(() => {
      setIsLoading(false); // Após 1 segundos, altera o estado para remover o loading
    }, 1000);

    return () => clearTimeout(timer); // Limpa o timer se o componente for desmontado
  }, [id, actions, store.charactersDetails]);

  const details = store.charactersDetails[id];

  // Se isLoading for verdadeiro, mostra a tela de loading, senão, mostra os detalhes
  return (
    <div className="character-details">
      {isLoading ? (
        // Exibe a mensagem de Loading
        <div className="text-center">
          <img src="https://th.bing.com/th/id/OIG1.ojYAZWYau4UedYz.NEoa?w=1024&h=1024&rs=1&pid=ImgDetMain" className="rounded-circle" alt="Loading" width={'500px'} />
          <p>Loading...</p>
        </div>
      ) : details ? (
        // Exibe os detalhes do personagem
        <div className='m-5'>
          <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="Character" />
          <div className='p-2 mt-2 bg-light'>
            <h2>{details.name}</h2>
            <h6>Gender: {details.gender}</h6>
            <h6>Birth Year: {details.birth_year}</h6>
            <h6>Eye Color: {details.eye_color}</h6>
            {/* Outros detalhes do personagem */}
          </div>
        </div>
      ) : (
        // Caso não encontre os detalhes, mostra uma mensagem
        <p>Character not found.</p>
      )}
    </div>
  );
};

export default CharacterDetails;
