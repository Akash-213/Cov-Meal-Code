import React from "react";
import { Card } from "react-bootstrap";
import "../../styles/developer.css";

const Developer = () => {
  return (
    <div className="allcards">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="static/images/akashimage2.png" />
        <Card.Body>
          <Card.Title>Akash Kulkarni</Card.Title>
        </Card.Body>

        <Card.Body>
          <a href="https://github.com/Akash-213" target="_blank" rel="noreferrer">
            <i className="fab fa-github-square  fa-2x"></i>{" "}
          </a>
          <a href="https://www.linkedin.com/in/akash213kulkarni/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin  fa-2x"></i>{" "}
          </a>
          <a href="https://twitter.com/213Akash" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter-square fa-2x"></i>{" "}
          </a>
          <a href="https://www.instagram.com/akas_h213/" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram-square  fa-2x"></i>{" "}
          </a>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="static/images/pratham.jpg" />
        <Card.Body>
          <Card.Title>Pratham More</Card.Title>
        </Card.Body>

        <Card.Body>
          <a href="https://github.com/PRATHAM2002-DS" target="_blank" rel="noreferrer">
            <i className="fab fa-github-square  fa-2x"></i>{" "}
          </a>
          <a href="https://www.linkedin.com/in/pratham-more-7688571b5" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin  fa-2x"></i>{" "}
          </a>

          <a href="https://www.instagram.com/prathammore20/" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram-square  fa-2x"></i>{" "}
          </a>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="static/images/vedimage.jpeg" />
        <Card.Body>
          <Card.Title>Vedant Bothikar</Card.Title>
        </Card.Body>

        <Card.Body>
          <a href="https://twitter.com/VedantBothikar" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter-square fa-2x"></i>{" "}
          </a>
          <a href="https://github.com/master30112001" target="_blank" rel="noreferrer">
            <i className="fab fa-github-square  fa-2x"></i>{" "}
          </a>
          <a href="https://www.linkedin.com/in/vedant-bothikar-979752197/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin  fa-2x"></i>{" "}
          </a>

          <a href="https://www.instagram.com/_ved_ant__/" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram-square  fa-2x"></i>{" "}
          </a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Developer;
