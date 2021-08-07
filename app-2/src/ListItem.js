import React from 'react';

function ListItem(props) {
    const { pokieArray } = props;
    const pokemonList = pokieArray.map((pokie, index) => {
        return (
            <li key={index}>
                <span>{pokie.name}</span>
            </li>
        );
    })
  return (
      <div>
          <ul>
              {pokemonList}
          </ul>
    </div>
  );
}

export default ListItem;