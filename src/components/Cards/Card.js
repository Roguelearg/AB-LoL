import React from 'react';
import './Card.css';

const Card = () => {
  return (
    <div className="test">
      <img className="charImage" alt='A Changer'  src={`http://ddragon.leagueoflegends.com/cdn/8.3.1/img/champion/Warwick.png`} />
      <h3 className="charname">Warwick</h3>
      <p className="winrates">53%</p>
    </div>
  );
}

export default Card;
