import { Modal, Button, Card, Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CatConsumer } from '../../providers/CatProvider';

const CatShow = ({ id, name, breed, registry, avatar, deleteCat }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Card style={{ width: '14rem' }}>
        <Card.Img variant="top" src={avatar} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Button 
            variant="primary" 
            onClick={() => setShow(true)}
          >
            Show
          </Button>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row md={2}>
              <Col>
                <h1>{name}</h1>
                <h4>Breed: {breed}</h4>
                <h4>Registry: {registry}</h4>
                <Link 
                  to={`/cats/${id}/edit`}
                  state={{ id: id, name: name, breed: breed, registry: registry, avatar: avatar }}
                >
                  <Button>Edit</Button>
                </Link>
                <Button
                  onClick={() => deleteCat(id)}
                >
                  Delete
                </Button>
                <Link to={`/cats/${id}/notes`}>
                  Notes
                </Link>
              </Col>
              <Col>
                <img src={avatar} alt='cat' width='100%' />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  )
}

const ConnectedCatShow = (props) => (
  <CatConsumer>
    { value => <CatShow {...value} {...props} />}
  </CatConsumer>
)

export default ConnectedCatShow;