import React from "react";
// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// pages:
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Error from "./routes/Error";
import PrivacyPolicy from "./routes/PrivacyPolicy";
import Disclaimer from "./routes/Disclaimer";

// navbar
import Navbar from "./components/Navbar";
// footer
import Footer from "./components/Footer";

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
        <Route path="/disclaimer">
          <Disclaimer />
        </Route>
        <Route path="/privacypolicy">
          <PrivacyPolicy />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default ReactRouter;
