import React from 'react';
import logo from './logo.svg';
import './App.css';
import { title } from 'process';

type Item = {
  id: number
  title: string
}

function Child() {
  return(
    <p>hogehoge</p>
  )
}

function App() {
  const items: Item[] = [
    {
      id:1,
      title: "ビャッコーギャモン"
    },{
      id:2,
      title: "Element Zero"
    }
  ]

  return (
    <div className="App">
      <ul>
        { items.map((item: Item) => (<li key={item.id}>{item.title}</li>))}
      </ul>
      <Child/>
    </div>
  );
}

export default App;
