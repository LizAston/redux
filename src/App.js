import React, { useState } from "react";
import Counter from "./Counter";
import './App.css';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>Redux made easy</h1>
      <h2> The count: {count} </h2>
      <Counter count = {count} setCount = {setCount}/>
    </div>
  );
}
