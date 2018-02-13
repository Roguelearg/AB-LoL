import React, { Component } from 'react';
import ChooseChampionLayout from './containers/ChooseChampionLayout/ChooseChampionLayout';
import WinratesLayout from './containers/WinratesLayout/WinratesLayout';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>

        </header>
        <ChooseChampionLayout />
        <WinratesLayout />
        <footer>

        </footer>
      </div>
    );
  }
}

export default App;
