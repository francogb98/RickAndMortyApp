import React from "react";
import { Route, Routes } from "react-router-dom";

import Favorites from "./favorite/Favorites";
import About from "./about/About";
import Characters from "./characters/CardsContainer";
import Detail from "./Detail/Detail";
import Login from "./login/Login";
import Registro from "./login/registro/Registro";

function Main() {
  return (
    <Routes>
      <Route exact path="/" element={<Login></Login>}></Route>
      <Route exact path="/registrar" element={<Registro></Registro>}></Route>
      <Route path="/home" element={<Characters />}></Route>
      <Route path="/favorites" element={<Favorites />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/detail/:id" element={<Detail />}></Route>
    </Routes>
  );
}

export default Main;
