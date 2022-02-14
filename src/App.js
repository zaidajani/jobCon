import "./App.css";
import "bulma/css/bulma.min.css";

import React from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Cards />
      </div>
    </>
  );
}

export default App;
