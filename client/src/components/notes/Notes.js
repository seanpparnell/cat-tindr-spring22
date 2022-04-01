import NoteList from './NoteList';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import NoteForm from './NoteForm';

const Notes = () => {
  const [adding, setAdd] = useState(false);

  return(
    <>
      <Button onClick={() => setAdd(true)}>
        +
      </Button>
      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <NoteForm 
            setAdd={setAdd}
          />
        </Modal.Body>
      </Modal>
      <h1>All Notes</h1>
      <NoteList />
    </>
  )
}

export default Notes;