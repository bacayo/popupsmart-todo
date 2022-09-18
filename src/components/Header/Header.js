import React from 'react';
import './Header.css';

export const Header = () => {
  const name = localStorage.getItem('username');

  return (
    <div>
      <h1>
        Todo List
        <span>Get things done, one item at a time.</span>
      </h1>
      <p>Hello {name} here is your tasks</p>
    </div>
  );
};
