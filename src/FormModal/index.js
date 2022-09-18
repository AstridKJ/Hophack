import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormModal({formOpen, formClose}) {
    return (<Modal show={formOpen} onHide={formClose}
        size="lg">
        <Modal.Header closeButton>
        <Modal.Title>Add your study preferences</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
                type="email"
                placeholder="jhopkins@jhu.edu"
                autoFocus
            />
            </Form.Group>
            <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
            >
            <Form.Label>Study Habits</Form.Label>
            <Form.Control as="textarea" rows={3} />
            </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={formClose}>
            Close
        </Button>
        <Button variant="primary" onClick={formClose}>
            Save Changes
        </Button>
        </Modal.Footer>
      </Modal>
    )
}
export default FormModal