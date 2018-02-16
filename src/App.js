import React, { Component } from 'react';
import ChooseChampionLayout from './containers/ChooseChampionLayout/ChooseChampionLayout';
import WinratesLayout from './containers/WinratesLayout/WinratesLayout';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="fullContent">
        <div className="contenu">
          <header>
            <h1 className="title cw ft">ARAM Build</h1>
            <nav className="menu ff">
              <a className="cw" href=''>Home</a>
              <a className="cw" href=''>Winrates</a>
            </nav>
          </header>
          <ChooseChampionLayout />
          <WinratesLayout />
          <footer>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
