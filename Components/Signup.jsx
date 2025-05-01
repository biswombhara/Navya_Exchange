import React from 'react'
import Link from 'next/link';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import Validation from './SignupValidation';
import axios from 'axios';
import { TOKEN_ICO_Context } from '../context/index';
import toast from "react-hot-toast";


function Signup() {
  const { updateUser } = useContext(TOKEN_ICO_Context);
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    password: ''
  });

  const router = useRouter();

  const notifySuccess = (msg) => toast.success(msg, { duration: 2000 });
  const notifyError = (msg) => toast.error(msg, { duration: 2000 });

  const [errors, setErrors] = React.useState({});

  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if (errors.name === "" && errors.email === "" && errors.password === "") {
      axios.post('http://localhost:8081/signup', values)
        .then(res => {
          updateUser(values.name);
          notifySuccess("Signup Successfull");
          router.push('/');
        })
        .catch(err => notifyError(err));
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <div className='bg-white p-3 rounded'>
        <h2 className='text-dark'>Sign-Up</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="email"><strong>Name</strong></label>
            <input type="text" placeholder='Enter Name' name='name' onChange={handleInput} className='form-control rounded-0' />
            {errors.name && <span className='text-danger'>{errors.name}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor="email"><strong>Email</strong></label>
            <input type="email" placeholder='Enter Email' name='email' onChange={handleInput} className='form-control rounded-0' />
            {errors.email && <span className='text-danger'>{errors.email}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor="password"><strong>Password</strong></label>
            <input type="password" placeholder='Enter Password' name='password' onChange={handleInput} className='form-control rounded-0' />
            {errors.password && <span className='text-danger'>{errors.password}</span>}
          </div>
          <button type='submit' className='btn btn-success w-100 rounded-0'><strong>Sign up </strong></button>
          <p>You are agree to our terms and policies</p>
          <Link href='/login' className='btn btn-default border w-100 rounded-0 bg-light text-decoration-none'>Login</Link>
        </form>
      </div>
    </div>
  )
}

export default Signup
