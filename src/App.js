import React from "react";
import GLobalStyle from "./components/GlobalStyle";
//Global
import GlobalStyle from "./components/GlobalStyle";

//Import pages
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <div className="App">
      <GLobalStyle />
      <AboutMe />
    </div>
  );
}

export default App;
