import Form from 'react-bootstrap/Form';
    import Button from 'react-bootstrap/Button';
    import {useState} from 'react';
    import axios from "axios";
    import {ToastContainer, toast } from "react-toastify";
    import "react-toastify/dist/ReactToastify.css";

    
    const Create = () => {

      const [data, setData] = useState({
        title: "",
        author: "",
        body: ""
      })

      const handleChange =(e) =>{
        const {name, value} = e.target;
        setData((prev) => {
          return {...prev, [name]: value}
        })
      }

      const handleSubmit =(e)=>{
        e.preventDefault()
        axios.post('http://localhost:4000/blogs', data)
        .then(res => {
  
          toast.success('new blog added successfully', {
            position:toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
          })
        })
        .catch(err => {
          toast.error('An error occured while adding the blog', {
            position:toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
          })
        })
      }
      





      return (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title:</Form.Label>
            <Form.Control type="text" name="title" onChange={handleChange} placeholder="Enter the title" />
            </Form.Group>
              
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Author:</Form.Label>
            <Form.Control type="text" name="author" onChange={handleChange} placeholder="Enter author's name" />
          </Form.Group>
              
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Body</Form.Label>
             <Form.Control as="textarea" name="body" onChange={handleChange} rows={3} />
            </Form.Group>
              
        <Button id='save-btn' type='submit' variant="primary">save blog</Button>{' '}

        <ToastContainer />
        <p>{data.title}</p>
        <p>{data.author}</p>
        <p>{data.body}</p>

        </Form>
        
          
      );
    }
    
    export default Create;