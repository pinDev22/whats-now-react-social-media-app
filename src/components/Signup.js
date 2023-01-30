import React, { useState } from 'react';
import AuthService from '../services/AuthService';


function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  //signup user
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await AuthService.signup({username, email, password});
    console.log(response.status);

    try {
      const response = await AuthService.signup({username, email, password});
      if (response.status === 200) {
        // Success message
        alert('User created successfully');
      } else {
        // Error message
        alert('An error occurred while creating the user');
      }
    } catch (error) {
      // Error message
      alert('An error occurred while creating the user');
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Sign Up</h1>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="form-control"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignUp;
