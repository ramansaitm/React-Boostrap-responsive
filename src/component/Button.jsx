import React from "react";

import { Spinner } from "react-bootstrap";
const Button = (props) => {
  return (
      <>
      <Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
      </Spinner>
      
      </>
  );
};

Button.propTypes = {};

export default Button;
