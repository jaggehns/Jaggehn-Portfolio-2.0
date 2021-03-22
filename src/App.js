import React from "react";
//Global
import GlobalStyle from "./components/GlobalStyle";

//Import pages
import AboutMe from "./pages/AboutMe";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutMe />
    </div>
  );
}

export default App;
