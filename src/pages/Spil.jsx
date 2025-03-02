import React from "react";
import "../css/spil.css";

const Spil = () => {
  return (
    <div className="spilContainer">
      <div className="infoGame">
        <div className="infoContent">
          <h2 className="center-heading-text h-1 m-t-4">Spil</h2>
          <p className="pera">
            Spiller handler om at lære og prøve HTX-sukkertoppen på en sjov
            måde, hvor du kan prøve forskellige minigames, der hjælper dig med
            fag som f.eks. dansk, matematik osv. Du kan gå igennem hele skolen,
            prøve ting og lede efter det, du vil finde.
          </p>
        </div>
      </div>

      <div className="map">
        <img
          src="imgs/sukkertroppen1.png"
          alt="Kort over spillet"
          className="mapImage"
        />
      </div>

      <div className="game">
        <div className="gameC">
          <p className="heading-2 ">Kom i gang!</p>
          <a
            href="https://www.roblox.com/home"
            className="btn-text spil"
            target="_blank"
          >
            Spil det hurtigt som muligt
          </a>
        </div>
      </div>
    </div>
  );
};

export default Spil;
