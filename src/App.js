import React from "react";
import './App.css';
import Signup from "./component/Signup";
import Menu from "./component/Menu";
import Login from "./component/Login";
import Button from "./component/Button";


 import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <Menu />
    <Login />
    <Signup />

    </>
  );
}

export default App;
