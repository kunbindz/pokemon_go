import React, { useState } from "react";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import MyBag from "./components/MyBag";
import Pokemon from "./components/Pokemon";
import PokemonList from "./components/PokemonList";
import Header from "./components/until/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path={"/"} component={PokemonList} exact />
        <Route path={"/pokemon/:pokemon"} component={Pokemon} exact />
        <Route path={"/mybag"} component={MyBag} exact />
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
