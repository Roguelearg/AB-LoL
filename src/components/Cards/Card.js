import React from 'react';
import './Card.css';

const Card = ({name, id, patch}) => {
  return (
    <div className="test">
      <img className="charImage" alt='A Changer'  src={`http://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${id}.png`} />
      <h3 className="charname">{name}</h3>
      <p className="winrates">53%</p>
    </div>
  );
}

export default Card;
