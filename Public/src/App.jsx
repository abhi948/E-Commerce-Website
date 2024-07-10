import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom'
import Signup from "./components/Signup";
import Home from './Pages/Home';
import Categories from "./Pages/Categories";
import Contactus from "./Pages/Contactus"
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {

  const [authUser,setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home/>} />

          <Route path="/Category"  element={authUser ?<Categories/>: <Navigate to="/signup" />}/>
          
          <Route path="/contact" element={<Contactus />} />

          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Toaster/>
      </div>
    </>
  );
}

export default App;
