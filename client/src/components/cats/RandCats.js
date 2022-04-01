import { useEffect } from 'react';
import { CatConsumer } from '../../providers/CatProvider';
import { Card, Button } from 'react-bootstrap';

const RandCats = ({ randCat, randomCats }) => {

  useEffect( () => {
    randomCats()
  }, [])

  return (
    <>
      <h1>Random Cats</h1>
      { randCat ?
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={randCat.avatar} />
          <Card.Body>
            <Card.Title>{randCat.name}</Card.Title>
            <Button variant="primary" onClick={() => randomCats()}> next </Button>
          </Card.Body>
        </Card>
      : 'No Cat'}
    </>
  )
}

const ConnectedRandCats = (props) => (
  <CatConsumer>
    { value => <RandCats {...value} {...props} />}
  </CatConsumer>
)

export default ConnectedRandCats;