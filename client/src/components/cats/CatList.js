import { Container, Row, Col } from 'react-bootstrap';
import CatShow from './CatShow';
import { CatConsumer } from '../../providers/CatProvider';
import { useEffect } from 'react';

const CatList = ({ cats, getAllCats }) => {
  
  useEffect( () => {
    getAllCats()
  }, [])

  return ( 
    <>
      <h1>My Cats</h1>
      <Container>
        <Row md={4}>
          { cats.map( c => 
            <Col>
              <CatShow 
                key={c.id}
                {...c}
              />  
            </Col>
          )}
        </Row>
      </Container>
    </>
  )
}

const ConnectedCatList = (props) => (
  <CatConsumer>
    { value => <CatList {...value} {...props} /> }
  </CatConsumer>
)

export default ConnectedCatList;