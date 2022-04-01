import NoteForm from './NoteForm';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const NoteEdit = ({ id, subject, body, note_date, note_time }) => {
  const [editing, setEdit] = useState(false);
  
  return (
    <>
      <Button onClick={() => setEdit(true)}>
        Edit
      </Button>
      <Modal show={editing} onHide={() => setEdit(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <NoteForm
            id={id}
            subject={subject}
            body={body}
            note_date={note_date}
            note_time={note_time}
            setEdit={setEdit}
          />
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default NoteEdit;