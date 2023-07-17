import React, {useCallback, useState} from 'react';
import './App.css';
import Child from './components/child';
import { title } from 'process';

type Item = {
  id: number
  title: string
}

function App() {
  const [count, setCount] = useState<number>(3)

  const items: Item[] = [
    {
      id:1,
      title: "ビャッコーギャモン"
    },{
      id:2,
      title: "Element Zero"
    }
  ]

  const countUp = useCallback(() => {
    setCount((prev) => prev + 1)
  }, [] )

  return (
    <div className="App">
      <ul>
        { items.map((item: Item) => (<li key={item.id}>{item.title}</li>)) }
      </ul>
      <Child message='aaaaa'/>
      <Child message='bbbbb'/>
      <span>{count}</span>
      <button onClick={countUp}>Click!</button>
    </div>
  );
}

export default App;
