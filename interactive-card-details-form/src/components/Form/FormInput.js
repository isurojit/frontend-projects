import React from "react";
import classes from "./FormInput.module.css";
import { Button, Form, Row, Col } from "react-bootstrap";

const FormInput = () => {
  return (
    <Form style={{ width: "65%" }}>
      <Form.Group className="mb-3" controlId="cardHolderName">
        <Form.Label>CARDHOLDER NAME</Form.Label>
        <Form.Control type="text" placeholder="e.g. Jane Appleseed" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="cardNumber">
        <Form.Label>CARD NUMBER</Form.Label>
        <Form.Control type="text" placeholder="e.g. 1234 5678 9123 0000" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="cardValidity">
          <Form.Label>EXP.DATE (MM/YY)</Form.Label>
          <Row>
            <Col>
              <Form.Control type="text" placeholder="MM" maxLength={2} />
            </Col>
            <Col>
              <Form.Control type="text" placeholder="YY" maxLength={2} />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group as={Col} controlId="cvc">
          <Form.Label>CVC</Form.Label>
          <Form.Control type="text" placeholder="e.g. 123" maxLength={3} />
        </Form.Group>
      </Row>

      <div className="d-grid gap-2">
        <Button size="lg" variant="dark" type="submit">
          Confirm
        </Button>
      </div>
    </Form>
  );
};

export default FormInput;
