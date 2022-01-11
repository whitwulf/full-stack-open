import React, { useState } from "react";

const Title = () => <h1>Give Feedback</h1>;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ stats }) => {
  const total = stats.good + stats.neutral + stats.bad;

  if (total) {
    return (
      <table>
        <tbody>
          <StatisticLine text="Good" value={stats.good} />
          <StatisticLine text="Neutral" value={stats.neutral} />
          <StatisticLine text="Bad" value={stats.bad} />
          <StatisticLine text="All" value={total} />
          <StatisticLine
            text="Average"
            value={((stats.good / total) * 100).toFixed(2) + "%"}
          />
        </tbody>
      </table>
    );
  }

  return <p>No Feedback Given</p>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incGood = () => setGood(good + 1);
  const incNeutral = () => setNeutral(neutral + 1);
  const incBad = () => setBad(bad + 1);

  return (
    <div>
      <Title />
      <div>
        <Button onClick={incGood} text="Good" />
        <Button onClick={incNeutral} text="Neutral" />
        <Button onClick={incBad} text="Bad" />
      </div>
      <Statistics stats={{ good: good, neutral: neutral, bad: bad }} />
    </div>
  );
};

export default App;
