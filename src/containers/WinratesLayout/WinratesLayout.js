import React from 'react';
import Table from '../../components/Table/Table';
import './WinratesLayout.css';

const WinratesLayout = () => {
  return (
    <div className="ofh">
      <h1 className="ft nmt bcr cw">Winrates</h1>
      <div className="tables">
        <Table className="best" name="Best"/>
        <Table className="worst" name="Worst"/>
      </div>
    </div>
  );
}

export default WinratesLayout;
