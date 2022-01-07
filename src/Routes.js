import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Chat from "./pages/Chat/Chat";
import Modification from "./pages/Modification/Modification";
import Profile from "./pages/Profile/Profile";
import Post from "./pages/Post/Post";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/chat" component={Chat} />
          <Route exact path="/modification" component={Modification} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/post" component={Post} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;