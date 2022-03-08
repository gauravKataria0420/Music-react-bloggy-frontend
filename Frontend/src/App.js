import React from "react";
import Topbar from "./components/Topbar/topbar";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Home from "./pages/home/home";
import Single from "./pages/home/single/single";
import Write from "./pages/home/write/write";
import Setting from "./pages/setting/setting";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const user = true;
  return (
    <Router>
      <Topbar user={user} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/setting">{user ? <Setting /> : <Register />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
