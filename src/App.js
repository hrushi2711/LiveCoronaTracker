import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Nav from "./Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
