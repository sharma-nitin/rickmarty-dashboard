import React from 'react'
import CartoonItem from './Cartoon-item'
import { Container, Row, Col } from 'reactstrap';

const Cartoonlist = (props) => {

    const items = props.shows.map((item) =>
        <Col xs="6" sm="6" md="3"><CartoonItem item={item} /></Col>
    );

    return (
        <Container>
            <Row>
                {items}
            </Row>
        </Container>
    )

}

export default Cartoonlist
