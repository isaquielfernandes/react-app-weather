import React from 'react';
import {Form, Col} from 'react-bootstrap';

const SearchForm = ({params, onParamChange}) => (
    <Form className="mb-4">
        <Form.Row className="align-items-end">
            <Form.Group as={Col}>
                <Form.Label>Location</Form.Label>
                <Form.Control onChange={onParamChange} value={params.location} name="location" type="text"/>
            </Form.Group>
            <Form.Group as={Col} sx="auto" className="ml-2">
                <Form.Check onChange={onParamChange} value={params.full_time} name="full_time" id="full_time" type="checkbox" className="mb-2" label="Ony Full Time" />
            </Form.Group>
        </Form.Row>
    </Form>
);

export default SearchForm;