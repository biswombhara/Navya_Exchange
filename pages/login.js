// pages/login.js
import { useRouter } from 'next/router';
import { useState } from 'react';
import Login from '../Components/Login';

function login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Simulate login authentication
    const user = await authenticateUser(username, password); // Your auth logic

    if (user) {
      // Redirect to the homepage after successful login
      router.push('/');
    } else {
      // Display an error message
      console.error('Login failed');
    }
  };

  return (
    <Login/>
  );
}

export default login;