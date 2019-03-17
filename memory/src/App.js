import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the cards json array
  state = {
    friends,
    clickedFriendIds: [],
    score: 0,
    goal: 10,
    status: ""
  };

  //shuffle the freinds cards in the browser when clicked
  shuffleScoreCard = id => {
    let clickedFriendIds = this.state.clickedFriendIds;

    if(clickedFriendIds.includes(id)){
      this.setState({ clickedFriendIds: [], score: 0, status:  "Game Over! You lost. Click to play again!" });
      return;
    }else{
      clickedFriendIds.push(id)

      if(clickedFriendIds.length === 8){
        this.setState({score: 8, status: "You Won! Click to play again!", clickedFriendIds: []});
        console.log('You Win. Stay Sharp, Pal!');
        return;
      }

      this.setState({ friends, clickedFriendIds, score: clickedFriendIds.length, status: " " });

      for (let i = friends.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [friends[i], friends[j]] = [friends[j], friends[i]];
      }
    }
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <h1 className="App-title">Test your Memory</h1>
        <p className="App-intro">
          Try not to click the same image twice!
        </p>
      </header>
      <Score total={this.state.score}
              goal={10}
              status={this.state.status}
      />
      <Wrapper>
        {this.state.friends.map(friend => (
          <FriendCard
            shuffleScoreCard={this.shuffleScoreCard}
            // removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            // occupation={friend.occupation}
            // location={friend.location}
          />
        ))}
      </Wrapper>
      <footer>
      <p>Designed and built by Matthew Urian. Check out the
      code in my<a href="https://github.com/popcopy/MemoryGame" target="_blank" rel="noopener noreferrer"> GitHub</a>.</p>
    </footer>
    </div>
    );
  }
}

export default App;
