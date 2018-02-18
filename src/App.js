import React, { Component } from 'react';
import ChooseChampionLayout from './containers/ChooseChampionLayout/ChooseChampionLayout';
import WinratesLayout from './containers/WinratesLayout/WinratesLayout';
import './App.css';

class App extends Component {

  constructor() {
      super();
      this.state = {
        header: ''
      };
  }

  scrollEventListener = () => {
    window.scrollY > 0 ? this.setState({header: 'active'}) : this.setState({header: ''})
  }

   componentDidMount() {
     window.addEventListener('scroll', this.scrollEventListener);
  }

  render() {
    // console.log('test', this.state.header);
    return (
      <div className="fullContent">
        <div className="contenu">
          <header className={`${this.state.header}`}>
            <h1 className="title cw ft pl2">ARAM Build</h1>
            <nav className="menu ff">
              <a className="cw" href=''>Home</a>
              <a className="cw" href=''>Winrates</a>
            </nav>
          </header>
          <div className="content">
            <ChooseChampionLayout />
            <WinratesLayout />
          </div>
          <footer>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
