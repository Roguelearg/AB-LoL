import React from 'react';
import Table from '../../components/Table/Table';
import './WinratesLayout.css';

const WinratesLayout = () => {
  return (
    <div className="ofh">
      <h1 className="ft nmt bcr">Winrates</h1>
      <div className="tables">
        <Table className="best"/>
        <Table className="worst"/>
      </div>
    </div>
  );
}

export default WinratesLayout;
