import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function PokemonList(props) {
  const [pokieArray, setPokieArray] = useState([]);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then((response) => {
        setPokieArray(response.data.results);
      })
      .catch((error) => {});
  }, [pokieArray]);
  const pokemonList = pokieArray.map((pokie, index) => {
    return (
      <li key={index}>
            <Link key={pokie.url} to={ `/pokemon/${pokie.name}`}> <span>{pokie.name}</span> </Link>
      </li>
    );
  });
  return (
    <div>
      <ul>{pokemonList}</ul>
    </div>
  );
}

export default PokemonList;
