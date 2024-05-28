import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

// Styles
import "reset.css";
import "./styles.scss";

// Components
import Header from "./layout/Header/Header";
import Home from "./layout/Home/Home";
import Work from "./layout/Work/Work";
import Contact from "./layout/Contact/Contact";
import Footer from "./layout/Footer/Footer";

function App() {
  return (
    <div>
      <div id="style-1" className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
