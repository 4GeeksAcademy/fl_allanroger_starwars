// planets.js
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const handleError = (e) => {
  e.target.src = 'https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357';
};

const Planet = ({ planet }) => {
  const { actions } = useContext(Context); // Use o contexto para acessar as ações

  const handleAddFavorite = () => {
    actions.addFavorite(planet.name); // Chame a ação para adicionar aos favoritos
  };

  return (
    <div className="card fixed-size-card d-inline-block" style={{ width: '18rem' }}>
      <img
        src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
        onError={handleError} // Usando o evento onError para tratar o erro
        className="card-img-top" alt="Planet"
      />
      <div className="card-body">
        <h5 className="card-title">{planet.name}</h5>
        <Link to={`/planets/${planet.uid}`} className="btn btn-secondary">Learn more</Link>
        <button onClick={handleAddFavorite} className="btn btn-warning ms-2">
          🖤
        </button>
      </div>
    </div>
  );
};

export default Planet;
