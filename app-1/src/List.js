import React from 'react';
import './App.css';
import Todo from './Todo';

function List(props) {
    const { todos } = props;

    const todoItems = todos.map(todo => {
        return <Todo todo={todo} />;
    });
    return (
        <div>
            <h1>{todoItems} </h1>
        </div>
    )
}

export default List;