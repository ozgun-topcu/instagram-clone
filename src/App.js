import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { lazy, Suspense } from "react";
import useAuthListener from "./hooks/use-auth-listener";
import UserContext from "./context/UserContext";
//import Login from "./pages/Login";
//import SignUp from "./pages/SignUp";
//import NotFound from "./pages/NotFound";


const Login = lazy(()=> import("./pages/Login"));
const SignUp = lazy(()=> import("./pages/SignUp"));
const NotFound = lazy(() =>import("./pages/NotFound"));
const Dashboard = lazy(() =>import("./pages/Dashboard"));


const App = () => {

    const {user} = useAuthListener();

  return (
    <UserContext.Provider value={user}>
      <Suspense fallback={<p>loading...</p>}>
        <Routes>

          <Route path={ROUTES.LOGIN} element={<Login />} /> 
          <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
              

        </Routes>
      </Suspense>
      </UserContext.Provider>

  );
}

export default App;

