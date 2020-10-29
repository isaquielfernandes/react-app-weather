import React from "react"
//import { useSelector, useDispatch} from 'react-redux'
import "./App.css";
import { Container } from "react-bootstrap"
import NavBar from "./components/NavBar"
import Search from "./components/Search"
import Weather from "./components/Weather"
import ForecastContainer from './components/forecast/ForecastContainer'


const App = () => {

  return (
    <>
      <NavBar />
      <Container className="p-4">
        <div className="row">
          <div className="col-md-4">
            <Search />
            <Weather />
          </div>
          <div className="col-md-8">
            <ForecastContainer />
          </div>
        </div>
      </Container>
    </>
  );
};

export default App;
