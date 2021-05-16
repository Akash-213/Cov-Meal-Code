import React from "react";
import { Card, Button, Container, Row } from "react-bootstrap";
import "./utils.css";

const orgdetails = [
  {
    image: "/static/images/covidaid.png",
    title: "Covid Aid Resources",
    text:
      " This Organization provides leads Regarding oxygen , Remedivisir and beds availability",
    visitlink:
      "https://www.instagram.com/covidaidresources/?igshid=1iwxcanyee40n",

    image2: "/static/images/stambhorg.png",
    title2: "The Stambh Organization",
    text2: "This Organizations is for Plasma Donors and Receivers ",
    visitlink2:
      "https://instagram.com/thestambh_organization?igshid=1mbxp3r8j4e6z",
  },
  {
    image: "/static/images/plasmainfoindia.png",
    title: "Plasma Info India",
    text: "This organization mainly provides oxygen and plasma leads ",
    visitlink: "https://instagram.com/plasmainfoindia?igshid=1t0ct9n9axa1k",

    image2: "/static/images/theuncutteam.png",
    title2: "theuncutteam",
    text2: "This organization provides covid resource database",
    visitlink2: "https://www.instagram.com/theuncutteam/?igshid=102vo0yt6v6ft",
  },
  {
    image: "/static/images/kshushiyaanfoundation.png",
    title: "Khushiyaan Foundation",
    text: " This is an NGO providing free Oxygen and Ration Seva",
    visitlink: "https://instagram.com/khushiyaanorg?igshid=mj73h0gnwf98",

    image2: "/static/images/helpingwings.png",
    title2: "Helping Wings",
    text2:
      "This is charity foundation providing important leads of covid resources ",
    visitlink2:
      "https://www.instagram.com/helpingwings_2021/?igshid=ljko12pgfpx6",
  },
];

const organizations = orgdetails.map((singleorg) => {
  return (
    <div className="allcards">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={singleorg.image} />
        <Card.Body>
          <Card.Title>{singleorg.title}</Card.Title>
          <Card.Text>{singleorg.text}</Card.Text>
          <Button variant="primary" href={singleorg.visitlink} target="_blank">
            Visit source
          </Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={singleorg.image2} />
        <Card.Body>
          <Card.Title>{singleorg.title2}</Card.Title>
          <Card.Text>{singleorg.text2}</Card.Text>
          <Button variant="primary" href={singleorg.visitlink2} target="_blank">
            Visit source
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
});

const Utils = () => {
  return (
    <div>
      <Container>
        <Row>{organizations}</Row>
      </Container>
    </div>
  );
};

export default Utils;
