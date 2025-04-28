import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Validation from './LoginValidation.js';
import axios from 'axios';

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const router = useRouter();
const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if (errors.email === '' && errors.password === '') {
      axios
        .post('http://localhost:8081/login', values)
        .then((res) => {
          if (res.data === 'Success') {
            router.push('/');
          } else {
            alert('No record existed');
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Sign-In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              onChange={handleInput}
              className="form-control rounded-0"
            />
            {errors.email && <span className="text-danger">{errors.email}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={handleInput}
              className="form-control rounded-0"
            />
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-success w-100 rounded-0"
          >
            <strong>Log in </strong>
          </button>
          <p>You are agree to aour terms and policies</p>
          <Link href="/signup" className="btn btn-default border w-100 rounded-0 bg-light text-decoration-none">
            Create Account
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;