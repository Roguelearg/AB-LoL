import React, { Component } from 'react';
import ChooseChampionLayout from './containers/ChooseChampionLayout/ChooseChampionLayout';
import WinratesLayout from './containers/WinratesLayout/WinratesLayout';
// import './App.css';
import './test.scss';

class App extends Component {

  constructor() {
      super();
      this.state = {
        header: '',
        patch: '8.3.1'
      };
  }

  scrollEventListener = () => {
    window.scrollY > 0 ? this.setState({header: 'active'}) : this.setState({header: ''})
  }

   componentDidMount() {
     window.addEventListener('scroll', this.scrollEventListener);
  }

  render() {
    return (
      <div className="fullContent">
        <header className={`${this.state.header}`}>
          <h1 className="title cw ft pl2">ARAM Builds</h1>
          <nav className="menu ff">
            <a className="cw" href=''>Champions</a>
            <a className="cw" href=''>Winrates</a>
          </nav>
          <p className="patch cw">Patch 8.3</p>
        </header>
        <div className="container">
          <div className="content">
            <div className="desc">
              <p className="cw"> Welcome to ARAM Builds </p>
              <p className="cw"> This web site provides you access to most used ARAM builds by
                League of Legends players
              </p>
            </div>
            <ChooseChampionLayout patch={this.state.patch}/>
            <WinratesLayout />
          </div>
        </div>
        <footer>
        </footer>
      </div>
    );
  }
}

export default App;
