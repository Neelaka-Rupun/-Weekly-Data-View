import React from "react";
import "./App.css";
import Header from "./app/pages/Header/header";
import Body from "./app/pages/Body/body";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <br />
        <Body />
      </header>
    </div>
  );
}

export default App;
