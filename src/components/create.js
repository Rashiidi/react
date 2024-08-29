
import Form from 'react-bootstrap/Form';

function TextControlsExample() {
  return (
    <Form>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control type="Title" placeholder="Enter The Title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Author</Form.Label>
        <Form.Control type="" placeholder="Enter Author's name" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Body</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <button type="submit">Save Blog</button>

    </Form>
  );
}

export default TextControlsExample;