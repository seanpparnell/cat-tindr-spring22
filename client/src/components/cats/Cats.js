import CatList from './CatList';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import CatForm from './CatForm';

const Cats = () => {
  const [adding, setAdd] = useState(false)

  return (
    <>
      <p onClick={() => setAdd(true)}>+</p>
      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <CatForm 
          setAdd={setAdd}
          />
        </Modal.Body>
      </Modal>
      <CatList />
    </>
  )
}

export default Cats;