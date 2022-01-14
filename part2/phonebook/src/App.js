import React, { useState, useEffect } from "react";
import axios from "axios";

const PersonList = ({ persons }) => {
  return (
    <>
      {persons.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ))}
    </>
  );
};

const PersonForm = ({
  addNewName,
  newName,
  handleNameChange,
  newNumber,
  handleNewNumber,
}) => {
  return (
    <form onSubmit={addNewName}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNewNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

const Filter = ({ filterName, handleFilterName }) => {
  return (
    <div>
      filter shown with <input value={filterName} onChange={handleFilterName} />
    </div>
  );
};

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

  const addNewName = (event) => {
    event.preventDefault();
    if (persons.map((person) => person.name).includes(newName)) {
      return alert(`${newName} already added in phonebook`);
    }
    setPersons(persons.concat({ name: newName, number: newNumber }));
  };

  const hamdleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterName = (event) => {
    setFilterName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterName={filterName} handleFilterName={handleFilterName} />
      <h2>Add a new</h2>
      <PersonForm
        addNewName={addNewName}
        newName={newName}
        handleNameChange={hamdleNameChange}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber}
      />
      <h2>Numbers</h2>
      <PersonList
        persons={persons.filter((el) =>
          el.name.toLowerCase().includes(filterName.toLowerCase())
        )}
      />
    </div>
  );
};

export default App;
