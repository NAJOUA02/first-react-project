
import './App.css';
import { Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import image1 from'./pictures/image1.jpeg';
import image2 from'./pictures/image2.jpeg';
import image3 from'./pictures/image3.jpeg';
import CardGroup from 'react-bootstrap/CardGroup';

function App() {
  const style={color:"black",background:"green"}
  const style1={color:"white",fontSize: "30px", textAlign: "center",background:"black"}

  const handleClick = () => {
    alert('Bienvennue chez React js!');
  };

  return (
    <Fragment>
  
      <Navbar className="bg-body-tertiary justify-content-between">
      <Form inline>
        <InputGroup>
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </Form>
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
          
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
    </Navbar><br></br><br></br>

      <center>     

      <CardGroup>
      <Card>
        <Card.Body>
        <Card.Header style={style1} >Documentation React</Card.Header>
          <Card.Title>Définition React</Card.Title>
          <Card.Text>
          React.js est une bibliothèque JavaScript populaire et open-source,
          utilisée principalement pour construire des interfaces utilisateur interactives et réactives.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Body>
        <Card.Header style={style1} >Documentation React</Card.Header>
          <Card.Title>Historique de React</Card.Title>
          <Card.Text>
          2013 : Création et open-source par Facebook.
          2015 : Lancement de React Native.
          2017 : Introduction des React Hooks.
         2022 : React 18 avec le Concurrent Mode.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Body>
        <Card.Header style={style1} >Documentation React</Card.Header>
          <Card.Title>Les Avantages de React</Card.Title>
          <Card.Text>
          Composants réutilisables, Performance avec Virtual DOM, Rendu côté serveur (SSR),Flux de données unidirectionnel.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        </Card.Footer>
      </Card>
    </CardGroup>

      <Button variant="primary" onClick={handleClick} style={style} >Primary</Button>
      </center><br></br>
      <Container>
      <Row>
        <Col xs={6} md={4}>
        <img src={image1}  />
        </Col>
        <Col xs={6} md={4}>
        <img src={image2}  />
        </Col>
        <Col xs={6} md={4}>
        <img src={image3} />
        </Col>
      </Row>
    </Container>
           </Fragment>
  );
}

export default App;
