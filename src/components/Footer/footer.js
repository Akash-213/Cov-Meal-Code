import React from "react";
import { Alert, Container } from "react-bootstrap";

import "./footer.css";

const footer = () => {
  return (
    <div className="footer">
      {" "}
      <br />
      <h3>Disclaimer</h3>
      <Container>
        <Alert variant="warning">
          {" "}
          We are working dedicatedly to connect you with the Kitchen/Tiffin
          services which provide good quality food . However we want
          beneficiaries to use their discretion and verify the quality of food
          with the service providers.
        </Alert>{" "}
        <Alert variant="primary">
          {" "}
          This portal has been made as a project by Engineering students as a
          help to people affected with the Covid-19 virus.
        </Alert>{" "}
        <br />
        <p></p>
      </Container>
    </div>
  );
};

export default footer;
