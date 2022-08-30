import React from "react";
import classes from "./Base.module.css";

import graditent from "../../assets/images/bg-main-desktop.png";
import Form from "../Form/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image, Row, Col } from "react-bootstrap";
import CardLayout from "../Card/CardLayout";

const styles = {
  img: {
    paddingLeft: 0,
    paddingRight: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  row: {
    marginLeft: 0,
    marginRight: 0,
  },
  col: {
    paddingLeft: 0,
    paddingRight: 0,
  },
};

const Base = () => {
  return (
    <React.Fragment>
      <Row style={styles.row}>
        <Col style={styles.col} lg="4">
          <Image
            className={classes.img}
            src={graditent}
            alt="Desktop-Side-Background"
            fluid
            style={styles.img}
          />
        </Col>
        <Col xs lg="2">
          <CardLayout />
        </Col>
        <Col className={classes.form} lg="5">
          <Form />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Base;
