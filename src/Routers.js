import React from "react";
// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// pages:
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Error from "./routes/Error";

// navbar
import Navbar from "./components/Navbar";

const ReactRouter = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouter;
