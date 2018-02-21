import React, {Component} from 'react';
import Card from './Card';
import './Cards.css';

// const test = () => {
//   fetch('http://localhost:3000/ab-lol-php/index.php')
//     .then(response => response.json())
//     .then(console.log);
//     console.log('test');
// }
class Cards extends Component {

  constructor({patch}) {
    super();
    this.state = {
      champions: [],
      patch: patch
    }
  }

  componentDidMount() {
    this.getNames();
  }

  getNames = () => {
    fetch(`https://ddragon.leagueoflegends.com/cdn/${this.state.patch}/data/en_US/champion.json`)
      .then(response => response.json())
      .then(data => {
        return this.setState({champions: Object.values(data.data)})
      });
  }

  makeCards = () => {
    let vue = [];
    this.state.champions.forEach(champion => {
      vue.push(<Card key={champion.key} name={champion.name} id={champion.id} patch={this.state.patch}/>);
    })
    return vue;
  }


  render() {
    return (
      <div className="cards">
        {
        this.makeCards().map(card => {
          return card;
        })
      }
      </div>
    );
  }
}

export default Cards;
