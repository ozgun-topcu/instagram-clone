import React from 'react'
import { useContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import FirebaseContext from '../context/FirebaseContext';
import image from "../images/users/image.jpg";
import image2 from "../images/users/image2.jpg";

const Login = () => {
  const history = useNavigate();
  const { firebase } = useContext(FirebaseContext);
  const [emailAdress, setEmailAdress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const isInvalid = password === "" || emailAdress === "";

  const loginHandler = () => { };

  useEffect(() => {
    document.title = "Login-Instagram";
  }, []);


  
  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <div className='flex w-3/5'>
        <img src={image2} alt="Instagram" className="max-w-full" />
      </div>

      <div className='flex flex-col w-2/5'>
        <h1 className='flex justify-center w-full'>
          <img src={image} className="mt-2 w-6/12 mb-4" />
        </h1>
        {error && <p className='mb-4 text-xs text-red-primary'>{error}</p>}
        <form onSubmit={loginHandler} method="POST">
          <input
            aria-label='enter your email adress'
            type="text"
            placeholder="Email adress"
            className='text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border 
              border-gray-primary rounded mb-2'
            onChange={(event) => setEmailAdress(event.target.value)}
          />

          <input
            aria-label='enter your email password'
            type="text"
            placeholder="Password"
            className='text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border 
              border-gray-primary rounded mb-2'
            onChange={(event) => setPassword(event.target.value)}
          />
        </form>

      </div>

    </div>

  )
}

export default Login;