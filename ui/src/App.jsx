import { useState } from "react";
import "./App.css";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function App() {
  const [formState, setFormState] = useState({});

  const handleFormChange = ({ target }) => {
    const { id, value } = target;
    setFormState((formState) => setFormState({ ...formState, [id]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(
      "https://www.greatfrontend.com/api/questions/contact-form",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formState),
      }
    );

    const data = await res.json();
    console.log(data);
  };

  return (
    <Container>
      <Card style={{ width: "40rem" }}>
        <Card.Body>
          <Row className="justify-content-md-center">
            <Col md="6">
              <h2 className="mb-4">User Registration</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    onChange={handleFormChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={handleFormChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    type="textareas"
                    placeholder="Message"
                    onChange={handleFormChange}
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Send
                </Button>
              </Form>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;
