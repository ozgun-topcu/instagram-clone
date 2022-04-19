import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {lazy, Suspense} from "react";
import Login from "./pages/Login"; 

//import * as ROUTES from "./constants/routes";
//const login = lazy(()=> import("./pages/Login")); lazy fonksiyonu çalışmadı!!
// path ={ROUTES.} ataması çalışmadı.!!!


const App= () => { 
  return (
    <Router>
      <Suspense fallback ={<p>loading...</p>}>
      <Routes>
        <Route path="/" element = {<Login /> } />
      </Routes>
      </Suspense>
    </Router>
   
  );
}

export default App;


/* "build:css": "postcss src/styles/tailwind.css -o src/styles/app.css",
    "watch:css": "postcss src/styles/tailwind.css -o src/styles/app.css --watch",
    "react-scripts:start": "react-scripts:start", */
