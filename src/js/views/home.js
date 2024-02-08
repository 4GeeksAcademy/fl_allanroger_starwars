// home.js
import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import Planet from "./planets";
import Character from "./characters";
import Vehicle from "./vehicles";
import { Context } from "../store/appContext";



export const Home = () => {
  // Usando o contexto para acessar o estado global e as ações
  const { store, actions } = useContext(Context);

  // Buscando dados da API quando o componente é montado
  console.log(store.characters)

  return (
    <div className="text-center m-5">

      <h1 style={{ color: '#ECCB05', textAlign: 'left' }}>Characters</h1>
      <div className="scrolling-container">
        <div className="scrolling-container d-flex flex-row flex-nowrap overflow-auto">
          {store.characters.map((character, index) => {
            return (
              <div key={index}>
                <Character character={character} />
              </div>
            )
          })}
        </div>
      </div>

      <h1 className="mt-4" style={{ color: '#ECCB05', textAlign: 'left' }}>Planets</h1>
      <div className="scrolling-container">
        <div className="scrolling-container d-flex flex-row flex-nowrap overflow-auto">
          {store.planets.map((planet, index) => {
            return (
              <div key={index}>
                <Planet planet={planet} />
              </div>
            )
          })}
        </div>
      </div>

      <h1 className="mt-4" style={{ color: '#ECCB05', textAlign: 'left' }}>Vehicles</h1>
      <div className="scrolling-container">
        <div className="scrolling-container d-flex flex-row flex-nowrap overflow-auto">
          {store.vehicles.map((vehicle, index) => {
            return (
              <div key={index}>
                <Vehicle vehicle={vehicle} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};
