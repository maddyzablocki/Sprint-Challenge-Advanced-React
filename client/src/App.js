import React from 'react';
import axios from 'axios';
import Players from './components/Players';
import NavBar from './components/Nav'; 

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: [],
    };
    //so this renders only once, instead of using arrow functions, where it would render everytime
    this.getPlayer = this.getPlayer.bind(this);
  }

  componentDidMount() {
    this.getPlayer()
  }

  getPlayer() {
    axios.get(`http://localhost:5000/api/players`)
    .then(res =>
      this.setState({
        players: res.data
      }))
      .catch(err => console.log(err))
  }

  renderPlayers

  render(){
    console.log(this.state)

    return(
      <div className="app">
        <NavBar />
        <div className="players-container">
          {this.state.players.map(player =>
            <Players name={player.name} country={player.country} id={player.id} searches={player.searches}/> 
          )}
        </div>
      </div>
    )
  }
}

export default App;
