import React, { useEffect } from "react";
import Counter from "./Counter";
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "./redux/ducks/user";

export default function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const user = useSelector((state) => state.user.user);
  console.log(user);

  const count = useSelector((state) => state.counter.count); //Why do I keep getting TypeError: Cannot read property 'count' of undefined????

  const voters = ["Liz Aston", "Molly", "Bertie", "Winston"]

  return (
    <div className="App">
      {user && <h1> Hello, {user.firstName} </h1>}
      <h1>Redux made easy</h1>
      <h2> Total votes: {count}</h2>
      {voters.map((voter) => (
        <Counter name={voter} />
      ))}
    </div>
  );
}
