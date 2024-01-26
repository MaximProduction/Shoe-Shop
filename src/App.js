import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import LinksTo from "./Components/LinksTo/Links";
import icon from "./Components/Header/HeaderImgs/Icon.png";

import NavBar from "./Components/NavBar/NavBar.jsx";
import Footer from "./Components/Footer/Footer";
import LineWrapper from "./Components/LineWrapper/LineWrapper";
function App() {
  return (
    <div className="main">
      <div className="app-container">
        <Header />

        <LinksTo />
        <NavBar />
        <Footer />
      </div>
    </div>
  );
}

export default App;
