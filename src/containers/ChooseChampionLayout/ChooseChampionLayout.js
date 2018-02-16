import React from 'react';
import Cards from '../../components/Cards/Cards';
import './ChooseChampionLayout.css';

const ChooseChampionLayout = () => {
  return (
    <div className="ofh">
      <h2 className="ff cw">Choose a Champion</h2>
      <input type="text" className="ff"/>
      <Cards />
    </div>
  );
}

export default ChooseChampionLayout;
