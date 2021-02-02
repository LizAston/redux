import React from "react";
import Counter from "./Counter";
import './App.css';
import { useSelector } from "react-redux";

export default function App() {
  const count = useSelector((state) => state.counter.count);

  const voters = ["Liz Aston", "Molly", "Bertie", "Winston"]

  return (
    <div className="App">
      <h1>Redux made easy</h1>
      <h2> Total votes: {count}</h2>
      {voters.map((voter) => (
        <Counter name={voter} />
      ))}
    </div>
  );
}
