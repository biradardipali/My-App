import React, { Component } from 'react';
import Navigation from '../../components/NavigationBar'
import Carousel1 from 'nuka-carousel';
import Carousel from 'react-bootstrap/Carousel';
import { Card } from 'react-bootstrap';
import img1 from '../../images/9.png';
import img2 from '../../images/8.jpg';
import img3 from '../../images/7.jpg';

export default class About extends React.Component {
  state = {
    slideIndex: 0
  };

  render() {
    return (
      <div>
        <Navigation />
        <div className="contanier" >
          <div class="" >
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img1}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img2}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img3}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>

        <div className="row col-sm-12" style={{ 'margin-top': '20px', 'margin-left': '0' }}>
          <div className="col-sm-6">
            <Card>
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This card has even longer content than the first to
                  show that equal height action.
                </Card.Text>
                <Card.Text>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-6">
            <Card>
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This card has even longer content than the first to
                  show that equal height action.
      </Card.Text>
                <Card.Text>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className="row col-sm-12" style={{ 'margin-top': '20px', 'margin-left': '0' ,'padding-bottom':'50px'}}>
          <div className="col-sm-3">
            <Card bg="info" text="white" style={{ width: '18rem' }}>
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Info Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-3">
            <Card bg="info" text="white" style={{ width: '18rem' }}>
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Info Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-3">
            <Card bg="info" text="white" style={{ width: '18rem' }}>
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Info Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-3">
            <Card bg="info" text="white" style={{ width: '18rem' }}>
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Info Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>

      </div>

    );
  }
}