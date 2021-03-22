import React from "react";
//Global
import GlobalStyle from "./components/GlobalStyle";

//Import pages
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import MyWork from "./pages/MyWork";
import Nav from "./components/Nav";
//Router
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutMe />
        </Route>
        <Route path="/work">
          <MyWork />
        </Route>
        <Route path="/contact">
          <ContactMe />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
