import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NoteConsumer } from "../../providers/NoteProvider";
import { Row, Col, Modal, Button } from 'react-bootstrap';
import Moment from 'react-moment';

const NoteList = ({ notes, getAllNotes, deleteNote }) => {
  const { catId } = useParams()
  const [show, setShow] = useState(false);

  useEffect( () => {
    getAllNotes(catId)
  }, [])

  return (
    <>
      { notes.map( n => 
        <Row>
          <Col>
            {n.subject}
          </Col>
          <Col>
            {n.body.substring(0, 20)}
          </Col>
          <Col>
            <p onClick={() => setShow(true)}>eye</p>
            <Modal show={show} onHide={() => setShow(false)}>
              <Modal.Header closeButton>
              </Modal.Header>
              <Modal.Body>
                <h1>Note Show</h1>
                <p>
                  Date: &nbsp;
                  <Moment format="M/DD/YY">
                    {n.note_date}
                  </Moment> 
                </p>
                <p>
                  Time: &nbsp; 
                  <Moment format="h:mm a">
                    {n.note_time}
                  </Moment> 
                </p>
                <p>
                  Subject: {n.subject}
                </p>
                <p>
                  Notes: {n.body}
                </p>
                <Button>Edit</Button>
                <Button onClick={() => {
                  deleteNote(catId, n.id)
                  setShow(false)
                }}>
                  Delete
                </Button>
              </Modal.Body>
            </Modal>
          </Col>
          <hr />
        </Row> 
      )}
    </>
  )
}

const ConnectedNoteList = (props) => (
  <NoteConsumer>
    { value => <NoteList {...props} {...value} />}
  </NoteConsumer>
)

export default ConnectedNoteList;