import { useState } from "react";
import Cadastro from "./Components/Cadastro";
import Login from "./Components/Login";
import Teste from "./Components/Teste";
import './App.css';
//import './index.css'

export default function () {
  const [route, setRoute] = useState("login")

  return <>
    {route == "login" ? <Login setRoute={setRoute} /> : ""}
    {route == "cadastro" ? <Cadastro setRoute={setRoute} /> : ""}
    {route == "teste" ? <Teste setRoute={setRoute}/> : ""}
  </>
}