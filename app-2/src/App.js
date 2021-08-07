import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import ListItem from './ListItem';

function App() {
  const [pokieArray, setPokieArray] = useState([]);
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=10').then(response => {
      setPokieArray(response.data.results);
    }).catch(error => { });
  }, [pokieArray]);
  return (
    <div className="App">
      <header className="App-header">
        <ListItem
          pokieArray={pokieArray}
        />
      </header>
    </div>
  );
}

export default App;
