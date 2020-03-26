import React, {Component} from 'react';

import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm'

class App extends Component {
  state = {
      players: [
          {
              name: "Jo",
              score: 0,
              id: 1
          },
          {
              name: "Be",
              score: 0,
              id: 2
      
          },
          {
              name: "Gin",
              score: 0,
              id: 3
      
          },
          {
              name: "James",
              score: 0,
              id: 4
          }  
      ]
  }

  getHighScore = () => {
    const scores = this.state.players.map( p => p.score );
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    } 
    return null;
  }

  handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
        score: prevState.players[index].score += delta

    }));
  }

  handleRemovePlayer = (id) => {
      this.setState( prevState => {
          return {
            player: prevState.players.filter(p => p.id !==id)
          };
        })
  }

  //Player id Counter
  prevPlayerId = 4;

  handleAddPlayer = (name) => {
      this.setState(prevState => {
          return {
            players: [
                ...prevState.players,
                {
                    name,
                    score: 0,
                    id: this.prevPlayerId += 1,
                }
            ]
        }
      })

  }

  render() {
    const highScore = this.getHighScore();

      return (
          <div className="scoreBoard">
          <Header
            //   title="Scoreboard"
              players={this.state.players}
          />
  
          {this.state.players.map((player, index) =>
              <Player
                  name={player.name}
                  id={player.id}
                  index={index}
                  key={player.id.toString()}
                  removePlayer={this.handleRemovePlayer}
                  score={player.score}
                  changeScore={this.handleScoreChange}
                  isHighScore={highScore === player.score}  // is a player's 'score' prop equal to the high score?

              />
          )}
          <AddPlayerForm
          addPlayer={this.handleAddPlayer}/>
      </div>
      );
  }
}

export default App;
