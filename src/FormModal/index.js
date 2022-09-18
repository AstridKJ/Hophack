import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function FormModal({formOpen, formClose}) {
    const [date, setDate] = useState(new Date());
  
    console.log("DATE", date);

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
            <Form.Group>
                <Form.Label style={{width:"100%"}}>Preferred Time</Form.Label>
                <Form.Select aria-label="Default select example" style={{width:'30%', display:'inline-block'}}>
                    <option disabled selected>Available Times</option>
                    <option value="Morn">9am - 12pm</option>
                    <option value="Noon">12pm - 3pm</option>
                    <option value="Afternoon">3pm - 6pm</option>
                    <option value="Evening">6pm - 9pm</option>
                </Form.Select>
                <Form.Control
                    style={{width:'68%', marginLeft:'10px', marginBottom:'20px', display:'inline-block'}}
                    type="date"
                    name="duedate"
                    placeholder="Due date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
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