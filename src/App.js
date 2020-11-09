import React from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import Weather from "./components/Weather";
import ForecastContainer from "./components/forecast/ForecastContainer";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <Container style={{ minHeight: "70vh" }} className="p-3">
        <div className="row align-items-center">
        <Search />
        <div className="row">
          <Weather />
        </div>
        <ForecastContainer />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default App;
