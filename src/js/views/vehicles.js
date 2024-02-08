
// vehicles.js
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Vehicle = ({ vehicle }) => {
  const { actions } = useContext(Context); // Use o contexto para acessar as ações

  const handleAddFavorite = () => {
    actions.addFavorite(vehicle.name); // Chame a ação para adicionar aos favoritos
  };
  return (
    <div className="card fixed-size-card d-inline-block" style={{ width: '18rem' }}>
      <img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`} className="card-img-top" alt="Vehicle" />
      <div className="card-body">
        <h5 className="card-title">{vehicle.name}</h5>
        <Link to={`/vehicles/${vehicle.uid}`} className="btn btn-secondary">Learn more</Link>
        <button onClick={handleAddFavorite} className="btn btn-warning ms-2">
          🖤
        </button>
      </div>
    </div>
  );
};

export default Vehicle;
