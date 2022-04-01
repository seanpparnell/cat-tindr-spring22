import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { NoteConsumer } from '../../providers/NoteProvider';
import { useParams } from 'react-router-dom';

const NoteForm = ({ setAdd, addNote, id, subject, body, note_date, note_time, setEdit, updateNote }) => {
  const [note, setNote] = useState({ subject: '', body: '', note_date: '', note_time: '' })

  const { catId } = useParams()

  useEffect( () => {
    if (id) {
      setNote({ subject, body, note_date, note_time })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateNote(catId, id, note)
      setEdit(false)
    } else {
      addNote(catId, note)
      setAdd(false)
    }
    setNote({ subject: '', body: '', note_date: '', note_time: '' })
  }

  return(
    <>
      <h1>{id ? 'Update' : 'Create'} Note</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control 
            type="date"
            name='note_date'
            value={note.note_date}
            onChange={(e) => setNote({...note, note_date: e.target.value})}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Time</Form.Label>
          <Form.Control 
            type="time"
            name='note_time'
            value={note.note_time}
            onChange={(e) => setNote({...note, note_time: e.target.value})}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Subject</Form.Label>
          <Form.Select 
            name='subject'
            value={note.subject}
            onChange={(e) => setNote({...note, subject: e.target.value})}
            required
          >
            <option>Select one...</option>
            <option value="Tech">Tech</option>
            <option value="Issue">Issue</option>
            <option value="Info">Info</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Notes</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3} 
            name='body'
            value={note.body}
            onChange={(e) => setNote({...note, body: e.target.value})}
            required
            placeholder='Type Your Message...'
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

const ConnectedNoteForm = (props) => (
  <NoteConsumer>
    { value => <NoteForm {...props} {...value} />}
  </NoteConsumer>
)

export default ConnectedNoteForm;