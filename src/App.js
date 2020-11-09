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
    <div style={{ minHeight: "100vh" }}>
      <NavBar />
      <Container style={{ minHeight: "60vh" }}>
        <Search />
        <Weather />
        <ForecastContainer />
      </Container>
      <Footer />
    </div>
  );
};

export default App;
