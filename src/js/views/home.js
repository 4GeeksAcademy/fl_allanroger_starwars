// home.js
import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Planet from "./planets";
import Characters from "./characters";
import ScrollToTop from "../component/scrollToTop";
import Vehicle from "./vehicles";

export const Home = () => (
	<div className="text-center m-5">
    <div>
      <h1 style={{ color: '#ECCB05', textAlign: 'left' }}>Characters</h1>
      <div className="scrolling-container">
        <div>
          <Characters
            title="Character 1"
            text="Another character description goes here."
            // onLike={() => handleLike({ title: 'Character 1' })}
          />
          <Characters
            title="Character 2"
            text="Another character description goes here."
            // onLike={() => handleLike({ title: 'Character 2' })}
          />
          <Characters
            title="Character 3"
            text="Another character description goes here."
            // onLike={() => handleLike({ title: 'Character 3' })}
          />
               <Characters
            title="Character 1"
            text="Another character description goes here."
            // onLike={() => handleLike({ title: 'Character 1' })}
          />
          <Characters
            title="Character 2"
            text="Another character description goes here."
            // onLike={() => handleLike({ title: 'Character 2' })}
          />
        </div>
        </div>
      </div>
      <div>
      <h1 className="mt-4" style={{ color: '#ECCB05', textAlign: 'left' }}>Planets</h1>
      <div className="scrolling-container">
        <div>
          <Planet
            title="Planet 1"
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
          <Planet
            title="Planet 2"
            text="Another planet description goes here."
          />
          <Planet
            title="Planet 3"
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
          <Planet
            title="Planet 4"
            text="Another planet description goes here."
          />
          <Planet
            title="Planet 5"
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
        </div>
        <div>
      <h1 className="mt-4" style={{ color: '#ECCB05', textAlign: 'left' }}>Vehicle</h1>
      <div className="scrolling-container">
        <div>
          <Vehicle
            title="Planet 1"
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
          <Vehicle
            title="Planet 2"
            text="Another planet description goes here."
          />
          <Vehicle
            title="Planet 3"
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
);
