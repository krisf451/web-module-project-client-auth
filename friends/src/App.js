import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Logout from "./components/Logout";
import FriendsList from "./components/FriendsList";
import FriendDetails from "./components/FriendDetails";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/friends/:id">
            <FriendDetails />
          </Route>
          <Route path="/friends">
            <FriendsList />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
