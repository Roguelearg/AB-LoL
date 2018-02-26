import React from 'react';
import Cards from '../../components/Cards/Cards';
import './ChooseChampionLayout.css';

const ChooseChampionLayout = ({patch}) => {
  return (
    <div className="ofh">
      <div className="bcr">
        <h1 className="ft nmt cw">Choose a Champion</h1>
        <input type="text" className="ff" placeholder="Search for a champion"/>
      </div>
      <Cards patch={patch}/>
    </div>
  );
}

export default ChooseChampionLayout;
