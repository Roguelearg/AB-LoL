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
    fetch(`https://ab-lol-php.herokuapp.com/API/get_static_champions.php`)
      .then(response => response.json())
      .then(data => {
        return this.setState({champions: Object.values(data.data)})
      });

    // fetch(`https://ddragon.leagueoflegends.com/cdn/${this.state.patch}/data/en_US/champion.json`)
    //   .then(response => response.json())
    //   .then(data => {
    //     return this.setState({champions: Object.values(data.data)})
    //   });
  }

  makeCards = () => {
    let vue = [];
    // console.log(this.state.champions);
    this.state.champions.forEach(champion => {
      // console.log(champion);
      vue.push(<Card key={champion.id} name={champion.name} id={champion.key} patch={this.state.patch}/>);
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
