import React from 'react';
import Cards from '../../components/Cards/Cards';
import './ChooseChampionLayout.css';

const ChooseChampionLayout = () => {
  return (
    <div className="ofh">
      <div className="bcr">
        <h1 className="ft cw nmt">Choose a Champion</h1>
        <input type="text" className="ff"/>
      </div>
      <Cards />
    </div>
  );
}

export default ChooseChampionLayout;
