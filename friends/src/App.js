import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Logout from "./components/Logout";
import FriendsList from "./components/FriendsList";
import FriendDetails from "./components/FriendDetails";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <PrivateRoute path="/friends/:id" component={FriendDetails} />
          <PrivateRoute path="/friends" component={FriendsList} />
          <PrivateRoute path="/logout" component={Logout} />
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Login} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
