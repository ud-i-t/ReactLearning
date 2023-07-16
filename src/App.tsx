import React from 'react';
import './App.css';
import Child from './components/child';
import { title } from 'process';

type Item = {
  id: number
  title: string
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
      <Child message='aaaaa'/>
      <Child message='bbbbb'/>
    </div>
  );
}

export default App;
