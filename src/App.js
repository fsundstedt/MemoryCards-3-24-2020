import React, {Component} from 'react';
import MemoryCard from './components/MemoryCard';
import './App.css';

function generateDeck() {
  const symbols = [`∆`,` ß`, `£`, `§`,`•`, `$`, `+`, `ø`];
  let deck = [];

  for (let i = 0; i < 16; i++) {
    deck.push({isFlipped: false, symbol:symbols[i % 8]})
  }

  shuffle(deck);
}

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}

class App extends Component {
  constructor() {
    super();
    this.state = { deck: [], pickedCards: [] };
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Memory Game</h1>
          <h3 className="Subtitle">Match cards to win</h3>
        </header>
        <div>
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
        </div>
        <div>
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
        </div>
        <div>
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
        </div>
        <div>
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
        </div>
      </div>
    );
  }
}

generateDeck();

export default App;
