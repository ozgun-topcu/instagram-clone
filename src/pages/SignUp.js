
import React from 'react'
import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import FirebaseContext from '../context/FirebaseContext';
import image from "../images/users/image.jpg";
import image2 from "../images/users/image2.jpg";
import * as ROUTES from "../constants/routes";
import doesUserNameExist from '../services/doesUserNameExist';

const SignUp = () => {
  const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);

  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [emailAdress, setEmailAdress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const isInvalid = password === "" || emailAdress === "";

  const signUpHandler = async (event) => {
    event.preventDefault(); 

    const userNameExists = await doesUserNameExist(userName);

    if(!userNameExists.length){
      try {
        const createdUserResult = await firebase  
          .auth()
          .createUserWithEmailAndPassword(emailAdress, password)

        await createdUserResult.user.updateProfile({
          displayName: userName,

        });

        await firebase.firestore().collection("users").add({
          userId: createdUserResult.user.uid,
          userName: userName.toLowerCase(),
          fullName,
          emailAdress: emailAdress.toLowerCase(),
          following: [],
          dateCreated: Date.now()
        });

        navigate.push(ROUTES.DASHBOARD);
      } catch (error) {
        setFullName("");
        setEmailAdress("");
        setPassword("");
        setError(error.message);

        
      }
    } else {
      setError("This username is already exist.")

    }


  };

  useEffect(() => {
    document.title = "SignUp-Instagram";
  }, []);



  return (

    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <p>are you there</p>

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

          <form onSubmit={signUpHandler} method="POST">

            <input
              aria-label='enter your username'
              type="text"
              placeholder="username"
              className='text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border 
                  border-gray-primary rounded mb-2'
              onChange={(event) => setUserName(event.target.value)}
              value={userName}
            />

            <input
              aria-label='enter your fullname'
              type="text"
              placeholder="full name"
              className='text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border 
                  border-gray-primary rounded mb-2'
              onChange={(event) => setFullName(event.target.value)}
              value={fullName}
            />

            <input
              aria-label='enter your email adress'
              type="text"
              placeholder="Email adress"
              className='text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border 
                  border-gray-primary rounded mb-2'
              onChange={(event) => setEmailAdress(event.target.value)}
              value={emailAdress}
            />

            <input
              aria-label='enter your email password'
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
            > Sign Up </button>

          </form>

        </div>

        <div className='flex justify-center items-center flex-col w-full 
          bg-white p-4 border border-gray-primary' >
          <p className='text-sm'>
            Have an account? {``}
            <Link to="/Login" className='font-bold text-blue-medium'>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>

  )
}




export default SignUp;