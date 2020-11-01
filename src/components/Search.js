import React from "react";
import { useDispatch } from "react-redux";
import {
  Card,
  Form,
  InputGroup,
  Button,
  Row,
  Col
} from "react-bootstrap";
import { fetchWeatherFromApi } from "../store/actions/forecastActions";
//import { Link } from "react-router-dom";

const Search = () => {
  const dispatch = useDispatch();
 
  /*const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (!searchTerm) {
      return;
    }
    
  }, [searchTerm]);*/

  const getWeatherByCityName = (e) => {
    e.preventDefault();
    const { city } = e.target.elements;
    const cityValue = city.value;
  
    if(cityValue){
      dispatch(fetchWeatherFromApi(cityValue));
    }
  };

  return (
    <Row className="pt-5 mt-3">
      <Col md={{ span: 6, offset: 3 }}>
        <Card.Title className="my-2">
           <h3 data-v-3724b8e4="" className="text-center pt-2">
             Forecast
           </h3>
        </Card.Title>
        <Card.Body className="p-0">
          <Form onSubmit={getWeatherByCityName}>
            <Form.Group>
              <InputGroup className="mb-3">
                <Form.Control
                  type="text"
                  name="city"
                  placeholder="Search by City Name"
                  autoFocus
                />
                <InputGroup.Append>
                  <Button variant="outline-secondary" type="submit">
                    Search
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Form.Group>
          </Form>
        </Card.Body>
      </Col>
    </Row>
  );
};

export default Search;
