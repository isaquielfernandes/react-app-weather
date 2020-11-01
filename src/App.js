import React from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import Weather from "./components/Weather";
import ForecastContainer from "./components/forecast/ForecastContainer";

const App = () => {
  return (
    <>
      <NavBar />
      <Container className="p-4 mb-3">
        <Search />
        <div className="row">
          <Weather />
        </div>
        <ForecastContainer />
      </Container>
    </>
  );
};

export default App;
