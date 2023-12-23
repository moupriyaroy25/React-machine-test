import React, {useState} from 'react'
import { useForm, Controller } from 'react-hook-form';
import { Form, Row, Col, Button,Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./Mediaform.css"

const Videomediaform = () => {

    const { control, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const onSubmit = async (data) => {
    
    setIsSubmitting(true);
    setShowModal(true);
    await new Promise(resolve => setTimeout(resolve, 1000)); 
    setIsSubmitting(false);

    
    navigate('');
    setTimeout(() => {
      setShowModal(false);
      navigate('/createads');
    }, 600);
  };

  const handleClose = () => setShowModal(false);


  return (
    <Form onSubmit={handleSubmit(onSubmit)} className='my-form'>
    <Form.Group>
        <Form.Label as="h2">Create Text & Media</Form.Label>
      </Form.Group>
      <Row>
        <Col>
          <Form.Group controlId="heading01">
            <Form.Label>Heading 01</Form.Label>
            <Form.Control type="text" placeholder="Description 01" name="description01" />
          </Form.Group>
          <Form.Group controlId="heading02">
            <Form.Label>Heading 02</Form.Label>
            <Form.Control type="text" placeholder="Description 02" name="description02" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="description01">
            <Form.Label>Description 01</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Enter Description 01" name="description01" />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group controlId="landscapeImage">
            <Form.Label>Landscape Marketing Image</Form.Label>
            <Form.Control type="file" name="landscapeImage" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="portraitImage">
            <Form.Label>Portrait Marketing Image</Form.Label>
            <Form.Control type="file" name="portraitImage" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="squareImage">
            <Form.Label>Square Marketing Image</Form.Label>
            <Form.Control type="file" name="squareImage" />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group controlId="videoUrl">
            <Form.Label>Video URL</Form.Label>
            <Form.Control type="text" placeholder="Enter Video URL" name="videoUrl" />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group controlId="businessName">
            <Form.Label>Business Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Business Name" name="businessName" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="buttonLabel">
            <Form.Label>Button Label</Form.Label>
            <Form.Control as="select" name="buttonLabel">
              <option>Option 1</option>
              <option>Option 2</option>
              {/* Add more options as needed */}
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group controlId="websiteUrl">
            <Form.Label>Website URL</Form.Label>
            <Form.Control type="text" placeholder="Enter Website URL" name="websiteUrl" />
          </Form.Group>
        </Col>
      </Row>

      <Row className='button-container'>
        <Col>
          <Button variant="secondary" onClick={() => navigate(-1)}>Back</Button>
        </Col>
        <Col>
          <Button variant="primary" type="submit" disabled={isSubmitting}>Submit</Button>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Submitting...</Modal.Title>
        </Modal.Header>
        <Modal.Body>Ad submitted ✅</Modal.Body>
      </Modal>
    </Form>
  );
};

export default Videomediaform