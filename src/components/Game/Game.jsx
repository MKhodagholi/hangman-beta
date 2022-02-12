import React from "react";

const shapes = (
  <svg height="250px" width="200px" className="fiqure-container">
    {/* <!-- root --> */}
    <line x1="40" y1="20" x2="120" y2="20" />
    <line x1="120" y1="20" x2="120" y2="60" />
    <line x1="40" y1="20" x2="40" y2="240" />
    <line x1="0" y1="240" x2="80" y2="240" />

    {/* <!-- head --> */}
    <circle cx="120" cy="80" r="20" className="fiqure-part" />

    {/* <!-- body --> */}
    <line x1="120" y1="100" x2="120" y2="160" className="fiqure-part" />

    {/* <!-- left hand --> */}
    <line x1="120" y1="130" x2="140" y2="110" className="fiqure-part" />

    {/* <!-- right hand --> */}
    <line x1="120" y1="130" x2="100" y2="110" className="fiqure-part" />

    {/* <!-- right leg --> */}
    <line x1="120" y1="160" x2="140" y2="180" className="fiqure-part" />

    {/* <!-- left leg --> */}
    <line x1="120" y1="160" x2="100" y2="180" className="fiqure-part" />
  </svg>
);

const Game = () => {
  return (
    <>
      {shapes}
      <div className="word" id="word"></div>

      <div className="wrong-letters-container" id="wrong-letters-container">
        <p>حروف اشتباه</p>
        <div className="wrong-letters" id="wrong-letters"></div>
      </div>

      <div className="popup-container" id="popup-container">
        <div className="popup">
          <h2 id="final-message">You Win!</h2>
          <button id="play-again">بازی مجدد</button>
        </div>
      </div>

      <div className="notification-container" id="notification-container">
        You have already entered this letter
      </div>
    </>
  );
};

export default Game;
