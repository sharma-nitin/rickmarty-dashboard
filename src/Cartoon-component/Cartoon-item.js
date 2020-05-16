import React from 'react';
import '../themes/CartoonCharacters.css';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Container, Row, Col
} from 'reactstrap';

const CartoonItem = (props) => {

  const date = new Date(props.item.created);
  const yearCreated = date.getFullYear() - new Date().getFullYear();
  return (
    <div>
      <Card className="margin-bottom">
        <CardImg src={props.item.image} alt="character image" />
        <CardBody className="card-container">
          <CardTitle className="card-title">
            {props.item.name}
          </CardTitle>

          <CardSubtitle className="card-subtitle">
            Id: {props.item.id} - created {yearCreated} years ago
            </CardSubtitle>
        </CardBody>
        <Container className="card-container">
          <Row>
            <Col className="card-subtitle">STATUS</Col>
            <Col className="card-value">{props.item.status}</Col>
          </Row>
          <Row>
            <Col className="card-subtitle">SPECIES</Col>
            <Col className="card-value">{props.item.species}</Col>
          </Row>
          <Row>
            <Col className="card-subtitle">GENDER</Col>
            <Col className="card-value">{props.item.gender}</Col>
          </Row>
          <Row>
            <Col className="card-subtitle">ORIGIN</Col>
            <Col className="card-value">{props.item.origin.name}</Col>
          </Row>
          <Row>
            <Col className="card-subtitle">LAST LOCATION</Col>
            <Col className="card-value">{props.item.location.name}</Col>
          </Row>
        </Container>
      </Card>
    </div>
  );

};

export default CartoonItem;