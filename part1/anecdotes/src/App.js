import React, { useState } from "react";

const Anecdote = ({ text, voteCount }) => {
  return (
    <>
      <p>{text}</p>
      <p>Has {voteCount} votes.</p>
    </>
  );
};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const [selected, setSelected] = useState(0);
  const [count, setCount] = useState(Array(anecdotes.length).fill(0));

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };

  const randIndex = getRandomInt(0, anecdotes.length);

  const setRandAnecdote = () => setSelected(randIndex);

  const upvote = () =>
    setCount(
      count
        .slice(0, selected)
        .concat(count[selected] + 1, count.slice(selected + 1))
    );

  return (
    <div>
      <Anecdote text={anecdotes[selected]} voteCount={count[selected]} />
      <div>
        <Button onClick={setRandAnecdote} text="next anecdote" />
        <Button onClick={upvote} text="upvote" />
      </div>
      <p>Anecdote with the most votes is</p>
      <Anecdote
        text={anecdotes[count.indexOf(Math.max(...count)) || 0]}
        voteCount={Math.max(...count)}
      />
    </div>
  );
};

export default App;
