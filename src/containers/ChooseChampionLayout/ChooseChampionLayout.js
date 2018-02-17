import React from 'react';
import Cards from '../../components/Cards/Cards';
import './ChooseChampionLayout.css';

const ChooseChampionLayout = () => {
  return (
    <div className="ofh">
      <div className="pl2">
        <h2 className="ft cw">Choose a Champion</h2>
        <input type="text" className="ff"/>
      </div>
      <Cards />
    </div>
  );
}

export default ChooseChampionLayout;
