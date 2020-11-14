import React from 'react';
import { Form, Col } from "react-bootstrap";

export default function SearchForm({params, onParamChange}) {
    return (
      <Form className="mb-4">
          <Form.Row>
              <Form.Group as={Col}>
                    <Form.Label>Description</Form.Label>
                    <Form.Control onChange={onParamChange} value={params.description} name="description"/>
              </Form.Group>
              <Form.Group as={Col}>
                    <Form.Label>Location</Form.Label>
                    <Form.Control onChange={onParamChange} value={params.location} name="location"/>
              </Form.Group>
              <Form.Group as={Col} xs="auto" className="ml-2" >
                    <Form.Check onChange={onParamChange} value={params.full_time} name="full_time" id="full-time"
                    label="only Full time" type="checkbox"/>
              </Form.Group>
          </Form.Row>
      </Form>
    )
}
