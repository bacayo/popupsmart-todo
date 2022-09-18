import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewTodoAsync } from '../../api';

import './TextInput.css';

const TextInput = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const addNewTodo = (event) => {
    event.preventDefault();

    if (todo.length < 3) {
      alert('Task cannot be less than 3 letter or empty');
    } else {
      dispatch(addNewTodoAsync({ content: todo }));
      setTodo('');
    }
  };

  return (
    <form onSubmit={addNewTodo} name="newform">
      <label htmlFor="newitem">Add to the todo list</label>
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type={'text'}
        name="newitem"
        id="newitem"
      />
      <button type="submit">Add item</button>
    </form>
  );
};

export default TextInput;
