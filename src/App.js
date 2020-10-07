import React from 'react';
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Nav from "./components/nav/Nav";
import HomePage from "./pages/HomePage";
import TripPage from "./pages/TripPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NewTripPage from "./pages/NewTripPage";
import PledgePage from "./pages/PledgePage";

import EditTripPage from './pages/EditTripPage';

export default function App(){
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/trip/:id/edit">
            <EditTripPage />
          </Route>
          <Route path="/trip/:id">
            <TripPage />
          </Route>
          <Route path="/login/">
            <LoginPage />
          </Route>
          <Route path="/users/">
            <RegisterPage />
          </Route>
          <Route path="/trips/">
            <NewTripPage />
          </Route>
          <Route path="/pledges/">
            <PledgePage />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
