import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./views/Home/Home";
import About from "./views/About/About";
import Podcast from "./views/Podcast/Podcast";
import Shop from "./views/Shop/Shop";
import Contact from "./views/Contact/Contact";
import MenuBarHTML from "./component/Navbar/Navbar-html";

import Login from './OLD/Login';
import PrivateRoute from "./OLD/PrivateRoute";

const Admin = () => (
  <div>
    <h2>Welcome admin!</h2>
  </div>
);

export default function App() {
  return (
    <div className="dark">
      <MenuBarHTML />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/shop"><Shop /></Route>
        <Route path="/contact"><Contact /></Route>
        <Route path="/podcast"><Podcast /></Route>

        <Route path="/login"><Login /></Route>
        <PrivateRoute path="/admin" component={Admin} />
      </Switch>
    </div>
  );
}
