import React from "react";
//Global
import GlobalStyle from "./components/GlobalStyle";

//Import pages
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AboutMe />
    </div>
  );
}

export default App;
