import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FirebaseContext from "./context/FirebaseContext";
import {firebase, FieldValue} from "./libraries/firebase";
import "./styles/index.css";
 
ReactDOM.render(
  <BrowserRouter>
  <FirebaseContext.Provider value = {{firebase, FieldValue}}> 
     <App /> 
  </FirebaseContext.Provider>
  </BrowserRouter>
    , document.getElementById('root')
);


reportWebVitals();
