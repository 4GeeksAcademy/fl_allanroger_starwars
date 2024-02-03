// import React from "react";
// import { Link } from "react-router-dom";
// // import "../../styles/navbar.css"

// const logostar = "https://cdn.discordapp.com/attachments/1200818313421398017/1200875065810620416/allanrogerhaze_create_a_black_and_yellow_logo_star_wars_4geeks__6f696a13-da2a-4efd-a691-181876575c94.png?ex=65c7c50e&is=65b5500e&hm=2a9b47ca289520324c0cab3d2fa8ab8f0c54f7babffbc2607cab668579616b36&";

// export const Navbar = () => {
// 	return (
// 		<nav className="navbar navbar-light bg-light mb-3 bg-black">
// 			<Link to="/" className="ms-4">
// 				<img src={logostar} alt="logo" width={"180px"} height={"180px"}/>
// 			</Link>
// 			<div className="dropdown me-4">
// 				<button className="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
// 					Favorites
// 				</button>
// 				<ul className="dropdown-menu" >
// 					<li><a className="dropdown-item" href="#">Action</a></li>
// 					<li><a className="dropdown-item" href="#">Another action</a></li>
// 					<li><a className="dropdown-item" href="#">Something else here</a></li>
// 				</ul>
// 			</div>
// 		</nav>
// 	);
// };
/// navbar.js
import React from "react";
import { Link } from "react-router-dom";
// import "../../styles/navbar.css";

const logostar = "https://cdn.discordapp.com/attachments/1200818313421398017/1200875065810620416/allanrogerhaze_create_a_black_and_yellow_logo_star_wars_4geeks__6f696a13-da2a-4efd-a691-181876575c94.png?ex=65c7c50e&is=65b5500e&hm=2a9b47ca289520324c0cab3d2fa8ab8f0c54f7babffbc2607cab668579616b36&";

export const Navbar = ({ favorites, onRemoveFavorite }) => {
  return (
    <nav className="navbar navbar-light bg-light mb-3 bg-black">
      <Link to="/" className="ms-4">
        <img src={logostar} alt="logo" width={"180px"} height={"180px"} />
      </Link>
      <div className="dropdown me-4">
        <button
          className="btn btn-warning dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favorites
        </button>
        <ul className="dropdown-menu">
          {favorites && favorites.map((favorite) => (
            <li key={favorite.title}>
              {favorite.title}{" "}
              <button
                type="button"
                className="btn btn-link text-danger"
                onClick={() => onRemoveFavorite(favorite.title)}
              >
                🗑️ Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;