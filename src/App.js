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
      <Container className="p-4">
        <Search />
        <div className="row">
          <div className="col-md-4">
            <Weather />
          </div>
        </div>
        <ForecastContainer />
      </Container>
    </>
  );
};

export default App;
