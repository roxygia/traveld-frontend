import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Nav from "./components/nav/Nav";
import HomePage from "./pages/HomePage";
import TripPage from "./pages/TripPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import "./App.css";

export default function App(){
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/trip/:id">
            <TripPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/users">
            <RegisterPage />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
