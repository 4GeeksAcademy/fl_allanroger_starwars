
import React from "react";
import { Link } from "react-router-dom"; // Importe Link do react-router-dom

const logostar = "https://cdn.discordapp.com/attachments/1200818313421398017/1200875065810620416/allanrogerhaze_create_a_black_and_yellow_logo_star_wars_4geeks__6f696a13-da2a-4efd-a691-181876575c94.png?ex=65c7c50e&is=65b5500e&hm=2a9b47ca289520324c0cab3d2fa8ab8f0c54f7babffbc2607cab668579616b36&";

const Character = ({ character }) => {
  // if (!character || !character.properties) return null; // Validação para garantir que os dados existam
console.log(character)
  return (
    <div className="card fixed-size-card d-inline-block" style={{ width: '18rem' }}>
      <img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} className="card-img-top" alt="Character" />
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
        <Link to={`/characters/${character.uid}`} className="btn btn-primary">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Character;
