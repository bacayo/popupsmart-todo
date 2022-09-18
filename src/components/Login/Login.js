import React, { useState } from 'react';

import './Login.css';

const Login = () => {
  const [user, setUser] = useState('');

  const handleUser = (event) => {
    event.preventDefault();
    localStorage.setItem('username', user);
  };

  return (
    <div className="username">
      <form name="newform">
        <label htmlFor="newitem">Username</label>
        <input
          value={user}
          type={'text'}
          name="newitem"
          className="username-input"
          onChange={(e) => setUser(e.target.value)}
        />
        <button onClick={handleUser} type="submit">
          Add username
        </button>
      </form>
    </div>
  );
};

export default Login;
