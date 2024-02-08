// export default Navbar;
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const logostar = "https://cdn.discordapp.com/attachments/1200818313421398017/1200875065810620416/allanrogerhaze_create_a_black_and_yellow_logo_star_wars_4geeks__6f696a13-da2a-4efd-a691-181876575c94.png?ex=65c7c50e&is=65b5500e&hm=2a9b47ca289520324c0cab3d2fa8ab8f0c54f7babffbc2607cab668579616b36&";

export const Navbar = () => {
  const { store, actions } = useContext(Context); // Use useContext para acessar o store e actions

  return (
    <nav className="navbar navbar-light sticky-top bg-light mb-3 bg-black">
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
          Favorites ({store.favorites.length})
        </button>
        <ul className="dropdown-menu">
          {store.favorites.length > 0 ? (
            store.favorites.map((favorite, index) => (
              <li key={index}>
                {favorite}{" "}
                <button
                  type="button"
                  className="btn btn-link text-danger"
                  onClick={() => actions.removeFavorite(favorite)} // Use a função removeFavorite para remover um favorito
                >
                  🗑️
                </button>
              </li>
            ))
          ) : (
            <li>No favorites added</li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
