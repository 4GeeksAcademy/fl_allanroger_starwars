// // home.js
// import React from "react";
// import rigoImage from "../../img/rigo-baby.jpg";
// import "../../styles/home.css";
// import Planet from "./planets";
// import Characters from "./characters";
// import ScrollToTop from "../component/scrollToTop";
// import Vehicle from "./vehicles";

// export const Home = () => (
// 	<div className="text-center m-5">
//     <div>
//       <h1 style={{ color: '#ECCB05', textAlign: 'left' }}>Characters</h1>
//       <div className="scrolling-container">
//         <div>
//           <Characters
//             title="Character 1"
//             text="Another character description goes here."
//             // onLike={() => handleLike({ title: 'Character 1' })}
//           />
//           <Characters
//             title="Character 2"
//             text="Another character description goes here."
//             // onLike={() => handleLike({ title: 'Character 2' })}
//           />
//           <Characters
//             title="Character 3"
//             text="Another character description goes here."
//             // onLike={() => handleLike({ title: 'Character 3' })}
//           />
//                <Characters
//             title="Character 1"
//             text="Another character description goes here."
//             // onLike={() => handleLike({ title: 'Character 1' })}
//           />
//           <Characters
//             title="Character 2"
//             text="Another character description goes here."
//             // onLike={() => handleLike({ title: 'Character 2' })}
//           />
//         </div>
//         </div>
//       </div>
//       <div>
//       <Planet planet={umPlaneta} />
//       <h1 className="mt-4" style={{ color: '#ECCB05', textAlign: 'left' }}>Planets</h1>
//       <div className="scrolling-container">
//         <div>
//           <Planet
//             title="Planet 1"
//             text="Some quick example text to build on the card title and make up the bulk of the card's content."
//           />
//           <Planet
//             title="Planet 2"
//             text="Another planet description goes here."
//           />
//           <Planet
//             title="Planet 3"
//             text="Some quick example text to build on the card title and make up the bulk of the card's content."
//           />
//           <Planet
//             title="Planet 4"
//             text="Another planet description goes here."
//           />
//           <Planet
//             title="Planet 5"
//             text="Some quick example text to build on the card title and make up the bulk of the card's content."
//           />
//         </div>
//         <div>
//       <h1 className="mt-4" style={{ color: '#ECCB05', textAlign: 'left' }}>Vehicle</h1>
//       <div className="scrolling-container">
//         <div>
//           <Vehicle
//             title="Planet 1"
//             text="Some quick example text to build on the card title and make up the bulk of the card's content."
//           />
//           <Vehicle
//             title="Planet 2"
//             text="Another planet description goes here."
//           />
//           <Vehicle
//             title="Planet 3"
//             text="Some quick example text to build on the card title and make up the bulk of the card's content."
//           />
//         </div>
//         </div>
//         </div>
//         </div>
//         </div>
//         </div>
// );
// home.js
import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import Planet from "./planets";
import Character from "./characters";
import Vehicle from "./vehicles";
import { Context } from "../store/appContext";
// Importe Link de react-router-dom no início do arquivo
import { Link } from "react-router-dom";


export const Home = () => {
  // Usando o contexto para acessar o estado global e as ações
  const { store, actions } = useContext(Context);

  // Buscando dados da API quando o componente é montado
  useEffect(() => {
    actions.fetchPlanets();
    console.log(store.planets);
    actions.fetchCharacters();
    actions.fetchVehicles();
  }, [actions]);

  return (
    <div className="text-center m-5">
      
      <h1 style={{ color: '#ECCB05', textAlign: 'left' }}>Characters</h1>
      <div className="scrolling-container">
      <div className="scrolling-container d-flex flex-row flex-nowrap overflow-auto">
      {store.characters && store.characters.map((character, index) => (
          <Character key={index} character={character.properties} />
        ))}
        </div>
      </div>

      <h1 className="mt-4" style={{ color: '#ECCB05', textAlign: 'left' }}>Planets</h1>
      <div className="scrolling-container">
      <div className="scrolling-container d-flex flex-row flex-nowrap overflow-auto">
      {store.planets && store.planets.map((planet, index) => (
    <Planet key={index} planet={planet.properties} />
))}
</div>
      </div>

      <h1 className="mt-4" style={{ color: '#ECCB05', textAlign: 'left' }}>Vehicles</h1>
      <div className="scrolling-container">
      <div className="scrolling-container d-flex flex-row flex-nowrap overflow-auto">
        {store.vehicles && store.vehicles.map((vehicle, index) => (
          <Vehicle key={index} vehicle={vehicle.properties} />
        ))}
        </div>
      </div>
    </div>
  );
};
