import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

// props => define interfaces
// by exporting from a parent I don't have to create a new one
// in this example in List.tsx and AddToList.tsx
export interface IState {
  people: {
    name: string
    born: number
    url: string
    note?: string // ? means optional
  }[]
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Steve McQueen",
      url: "https://m.media-amazon.com/images/M/MV5BMTQ3Mjk2MTU1MV5BMl5BanBnXkFtZTcwMTA5MTkzNA@@._V1_UY264_CR19,0,178,264_AL_.jpg",
      born: 1930,
      note: "racer and actor"
    }
  ])

  // we need setPeople to manipulate and mutate by appending to the person-object
  // we nedd prople (the current people list) so that we can push into the current component
  return (
    <div className="App">
      <h1>Some Cool People</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
