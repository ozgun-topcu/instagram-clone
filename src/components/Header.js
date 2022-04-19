import { useContext } from 'react';
import FirebaseContext from '../context/FirebaseContext';
import UserContext from '../context/UserContext';
import * as ROUTES from "../constants/routes";
import { Link } from "react-router-dom";
import image from "../images/users/image.jpg";
import image2 from "../images/users/image2.jpg";
import useAuthListener from '../hooks/use-auth-listener';


const Header = () => {
  const { firebase } = useContext(FirebaseContext);
  //const { user } = useContext(UserContext);
  const { user } = useAuthListener();

  return (
    <header className='h-16 bg-white border-b border-gray-500 mb-8'>
      <div className='container mx-auto max-w-screen-lg h-full'>
        <div className='flex justify-between h-full'>
          <div className='text-gray-500 text-center flex items-center 
          align-items cursor-pointer' >
            <p>hello there</p>
            <h1 className='flex justify-center w-full'>
              <Link to={ROUTES.DASHBOARD}>
                <img src={image} alt="instagram logo will come here" className="mt-2 w-10" />
              </Link>
            </h1>
          </div>

          <div className='text-gray-500 text-center flex items-center align-items'>
            {user ?
              <>

                <Link to={ROUTES.DASHBOARD} >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6" fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </Link>

                <button
                  type="button"
                  title="sign out"
                  onClick={() => firebase.auth().signOut()}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      firebase.auth().signOut();
                    }
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                </button>

                <div className='flex items-center cursor-pointer' >
                  <Link to={`/p/:${user.displayName}`} >
                    <img
                      className='rounded-full h-8 w-8 flex'
                      src=""
                    />
                  </Link>
                </div>
              </>

              : (
                <>
                  <Link to={ROUTES.LOGIN}>
                    <button className="bg-blue font-bold
                  text-sm rounded h-8 m-5" >Login</button>
                  </Link>

                  <Link to={ROUTES.SIGN_UP} >
                    <button className='font-bold text-sm rounded text-bleue-500'>Sign up</button>
                  </Link>

                </>
              )}
          </div>
        </div>


      </div>




    </header>
  )
}

export default Header;

// svg's used in this component are taken from heroicons.com
// user.displayName çalışmadı, kontrol edilecek. 