import React, { useState } from "react";

const PersonList = ({ persons }) => {
  return (
    <>
      {persons.map((person) => (
        <p key={person.name}>{person.name}</p>
      ))}
    </>
  );
};

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addNewName = (event) => {
    event.preventDefault();
    setPersons(persons.concat({ name: newName }));
  };

  const hamdleNameChange = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewName}>
        <div>
          name: <input value={newName} onChange={hamdleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <div>debug: {newName}</div>
      <h2>Numbers</h2>
      <PersonList persons={persons} />
    </div>
  );
};

export default App;
