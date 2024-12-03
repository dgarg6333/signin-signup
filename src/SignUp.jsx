import React, { useState } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom'; 
import './App.css'; 

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === 'name') {
      setName(value);
    } else if (id === 'email') {
      setEmail(value);
    } else if (id === 'password') {
      setPassword(value);
    } else if (id === 'confirm-password') {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    //sign-up logic, API 
  };

  return (
    <Router>
      <div className='min-h-screen flex items-center justify-center bg-gray-100'>
        <div className='flex p-6 max-w-md w-full mx-auto flex-col gap-5 bg-white shadow-md rounded-lg'>
          <h2 className='text-2xl font-bold text-center'>Sign Up</h2>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <label className='block text-sm font-medium text-gray-700' htmlFor='name'>
                Your Name
              </label>
              <input
                type='text'
                placeholder='John Doe'
                id='name'
                className='mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-600'
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700' htmlFor='email'>
                Your Email
              </label>
              <input
                type='email'
                placeholder='name@company.com'
                id='email'
                className='mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-600'
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700' htmlFor='password'>
                Your Password
              </label>
              <input
                type='password'
                placeholder='***********'
                id='password'
                className='mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-600'
                onChange={handleChange}
                required
              />
            </div>
            <button
              className={`mt-4 px-4 py-2 text-white rounded-md ${loading ? 'bg-gray-400' : 'bg-purple-600 hover:bg-purple-700'}`}
              type='submit'
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className='animate-spin mr-2'>&#9696;</span>
                  Loading...
                </>
              ) : (
                'Sign Up'
              )}
            </button>
            <div className='flex gap-2 text-sm mt-5 justify-center'>
              <span>Already have an account?</span>
              <Link to='/sign-in' className='text-blue-500 hover:underline'>
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Router>
  );
};

export default SignUp;