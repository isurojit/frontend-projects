import React from "react";

import cardLogo from "../../assets/images/card-logo.svg";
import cardFrontImage from "../../assets/images/bg-card-front.png";
import cardBackImage from "../../assets/images/bg-card-back.png";
import { Image } from "react-bootstrap";
import classes from "./CardLayout.module.css";

const Card = () => {
  return (
    <React.Fragment>
      <div className={classes.card}>
        <div className={classes.logo}>
          <Image src={cardLogo} alt="Card Logo Image" fluid />
        </div>
        <div className={classes.front}>
          <Image src={cardFrontImage} alt="Card Fornt Image" fluid />
          <div className={classes.frontCardInfo}>
            <h3>
              1234&nbsp;&nbsp;5678&nbsp;&nbsp;&nbsp;9123&nbsp;&nbsp;&nbsp;0000
            </h3>
            <div className={classes.frontCardInfoName}>
              <p>JHON DOE</p>
              <p>09/00</p>
            </div>
          </div>
        </div>
        <div className={classes.back}>
          <Image src={cardBackImage} alt="Card Back Image" fluid />
          <p>123</p>
        </div>
      </div>
      <div className="cardInfo"></div>
    </React.Fragment>
  );
};

export default Card;
