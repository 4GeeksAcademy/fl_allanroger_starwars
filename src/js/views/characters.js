import React, { useContext } from "react"; // Importe useContext
import { Context } from "../store/appContext"; // Importe Context
import { Link } from "react-router-dom";

const Character = ({ character }) => {
  const { actions } = useContext(Context); // Use o contexto para acessar as ações

  const handleAddFavorite = () => {
    actions.addFavorite(character.name); // Chame a ação para adicionar aos favoritos
  };

  return (
    <div className="card fixed-size-card d-inline-block" style={{ width: '18rem' }}>
      <img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} className="card-img-top" alt="Character" />
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
        <Link to={`/characters/${character.uid}`} className="btn btn-secondary">
          Learn More
        </Link>
        {/* Botão Like */}
        <button onClick={handleAddFavorite} className="btn btn-warning ms-2">
          🖤
        </button>
      </div>
    </div>
  );
};

export default Character;
