import React from 'react'
import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import FirebaseContext from '../context/FirebaseContext';
import image from "../images/users/image.jpg";
import image2 from "../images/users/image2.jpg";
import * as ROUTES from "../constants/routes";

const Login = () => {
  const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);
  const [emailAdress, setEmailAdress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const isInvalid = password === "" || emailAdress === "";

  const loginHandler = async (event) => { 
    
    event.preventDefault();

    try {
      await firebase.auth().signInWithEmailAndPassword(emailAdress, password);
      navigate(ROUTES.DASHBOARD, { replace: true });
    } catch (error) {
      setEmailAdress("");
      setPassword("");
      setError(error.message);
      
    }


  };

  useEffect(() => {
    document.title = "Login-Instagram";
  }, []);



  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">

      <div className='flex w-3/5'>
        <img src={image2} alt="Instagram" className="max-w-full p-3" />
      </div>

      <div className='flex flex-col w-2/5'>
        <div className='flex flex-col items-center bg-white p-4 border
        border-gray-primary mb-4'>
          <h1 className='flex justify-center w-full'>
            <img src={image} className="mt-2 w-6/12 mb-4" />
          </h1>

          {error && <p className='mb-4 text-xs text-red-primary'>{error}</p>}

          <form onSubmit={loginHandler} method="POST">
            < input
              aria-label='enter your email adress'
              type="text"
              placeholder="Email adress"
              className='text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border 
              border-gray-primary rounded mb-2'
              onChange={(event) => setEmailAdress(event.target.value)}
              value={emailAdress}
            />

            <input
              aria-label='enter your password'
              type="text"
              placeholder="Password"
              className='text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border 
              border-gray-primary rounded mb-2'
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
            <button
              disabled={isInvalid}
              type="submit"
              className={`bg-blue-500 text-white w-full rounded  h-8 font-bold ${isInvalid && "opacity-50"}`}
            > Login </button>

          </form>

        </div>

        <div className='flex justify-center items-center flex-col w-full 
      bg-white p-4 border border-gray-primary' >
          <p className='text-sm'>
            Don't have an account? {``}
            <Link  to ="/SignUp" className='font-bold text-blue-medium'>
              Sign Up
            </Link>  
          </p>
        </div>
      </div>
    </div>

  )
}

export default Login;