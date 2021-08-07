import React, { useState } from 'react';
import './App.css';
import AddTodo from './AddTodo';
import List from './List';

function App() {
  const [todos, setTodos] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  }
  const handleAddTodo = (event) => {
    event.preventDefault();
    todos.push(userInput);
    setTodos(todos);
    setUserInput('');
  }
  return (
    <div className="App">
      <header className='App-header'>
        <AddTodo
          handleUserInput={handleUserInput}
          handleAddTodo={handleAddTodo}
          userInput={userInput}
        />
        <List todos={todos} />
      </header>
    </div>
  );
}

export default App;
