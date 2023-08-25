import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";




function App() {


  const [isLoggedin, setLoggedIn] = useState(false);

  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col">
      <NavBar isLoggedIn={isLoggedin} setLoggedIn= {setLoggedIn}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />}/>
        <Route path="/signup" element={<Signup setLoggedIn={setLoggedIn}/>}/>
        <Route path="/dashboard" element={
          <PrivateRoute isLoggedIn= {isLoggedin}>
            <Dashboard/>
          </PrivateRoute>
        }/>
      </Routes>
    </div>
  );
}

export default App;
