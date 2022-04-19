import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FirebaseContext from "./context/FirebaseContext";
import {firebase, FieldValue} from "./libraries/firebase";
import "./styles/index.css";
 
ReactDOM.render(
  <FirebaseContext.Provider value = {{firebase, FieldValue}}> 
     <App /> 
  </FirebaseContext.Provider>
    , document.getElementById('root')
);


reportWebVitals();
