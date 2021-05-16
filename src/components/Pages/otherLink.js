import React from "react";
import { Card, Container } from "react-bootstrap";

const otherLink = () => {
  return (
    <div>
      <Container>
        <h2>Important Resources</h2>
        <br />

        <Card>
          <br />
          <h2>Helpful Websites</h2>
          <Card.Body>
            <Card.Title>Aarogya Setu</Card.Title>
            We recommend using Aarogya Setu app to fight against COVID19. Please
            download and share this -{" "}
            <Card.Link href="https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu" target="_blank">
              Android
            </Card.Link>
            <Card.Link href="https://apps.apple.com/in/app/aarogyasetu/id1505825357" target="_blank">
              IOS
            </Card.Link>
          </Card.Body>

          <Card.Body>
            <Card.Title>Pune Corporation</Card.Title>
            You can seek help and information from Pune Corporation website -{" "}
            <Card.Link href="https://www.pmc.gov.in/en/corona-vishanu " target="_blank">
              Visit
            </Card.Link>
          </Card.Body>

          <Card.Body>
            <Card.Title>Vaccine Registration</Card.Title>
            For vaccine registration visit this -{" "}
            <Card.Link href="https://www.cowin.gov.in/home" target="_blank">Visit</Card.Link>
          </Card.Body>
        </Card>
        <br />
        <br />
        <br />
        <Card>
          <br />
          <h2>Helpline Numbers</h2>
          <Card.Body>PMC CONTROL ROOM: 020-2550-2110</Card.Body>
          <Card.Body> PUNE ZP CONTROL ROOM: 020-2613-8082/83</Card.Body>
          <Card.Body>STAMBH COVID HELPLINE: 9834705397/9897365868</Card.Body>
          <Card.Body>STATE REMDESIVIR SUPPLIES HELPLINE: 022-2659-2364</Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default otherLink;
