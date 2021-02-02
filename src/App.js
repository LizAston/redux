import React from "react";
import Counter from "./Counter";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <h1>Redux made easy</h1>
      <h2> The count: </h2>
      <Counter />
    </div>
  );
}
