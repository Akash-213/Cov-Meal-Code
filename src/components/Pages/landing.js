import React from "react";
import {
  Container,
  Jumbotron,
  Card,
  Button,
  Alert,
} from "react-bootstrap";
import "../../styles/landing.css";
import { withRouter } from "react-router-dom";

const Landing = (props) => {
  const { history } = props;
  return (
    <div>
      <div>
        <Jumbotron fluid>
          <Container>
            <h1>CovMeal</h1>
            <i>
              <p>Always Providing a Helping Hand</p>
            </i>
          </Container>
        </Jumbotron>
      </div>

      <div>
        <Container>
          <div>
            <h2>Our Motto</h2>
            <p>
              In this crucial time of Pandemic, we are trying to help the people
              under home isolation to forget all worries , concentrate on their
              health and get food just at one Phone call.
            </p>
            <p>
              We are connecting you with Kitchen-Tiffin services by providing you with
              contact details.
            </p>

          </div>
          <br />
          <h2>Features</h2>
          <div className="onecard">
            <Card>
              <Card.Header>Tiffins</Card.Header>
              <Card.Body>
                <Card.Title>How do we provide Tiffins ?</Card.Title>
                <Card.Text>
                  Our portal provides you easy access to food service providers
                  in just few clicks. You will find information related to all
                  the food service providers in the Tiffins section.
                </Card.Text>
                <Card.Title>About Hygiene </Card.Title>
                <Card.Text></Card.Text>
                <Alert variant="warning">
                  {" "}
                  We are trying our best to connect you with the food service
                  providers with good quality food but the quality and the
                  delivery is the sole responsibility of the service provider.
                </Alert>

                <Button
                  variant="primary"
                  onClick={() => history.push("/partnerList")}
                >
                  Get me a Tiffin
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="onecard">
            <Card>
              <Card.Header>Registering as a Provider</Card.Header>
              <Card.Body>
                <Card.Title>Join CovMeal </Card.Title>
                <Card.Text>
                  Please connect with us. We are onto something impactful here.
                  We want the Kitchen/Tiffin services to join our social cause
                  by registring with us.
                </Card.Text>

                <Button
                  variant="primary"
                  onClick={() => history.push("/partnerForm")}
                >
                  Register Yourself
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="onecard">
            <Card>
              <Card.Header>Organizations of Help</Card.Header>
              <Card.Body>
                <Card.Text>
                  Our portal is connecting you with various organizations which
                  are trying their level best to provide verified leads on
                  oxygen, beds and remdesivir availability.
                </Card.Text>

                <Button
                  variant="primary"
                  onClick={() => history.push("/utils")}
                >
                  Connect for help{" "}
                </Button>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default withRouter(Landing);
