import React from 'react';

import './App.css';
import { TodoCard } from './components/TodoCard/TodoCard';
import { Header } from './components/Header/Header';
import TextInput from './components/TextInput/TextInput';
import Login from './components/Login/Login';

const App = () => {
  return (
    <>
      <Login />
      <div className="container">
        <Header />
        <TodoCard />
        <TextInput />
      </div>
    </>
  );
};

export default App;
