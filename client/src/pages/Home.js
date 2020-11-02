import React from 'react';
import {Modal,Button, Form, FormControl} from 'react-bootstrap';
import RegisterModal from '../components/RegisterModal';




class Home extends React.Component {
    state={
        show: false,
        
        
    }
    handleClose=()=> {
        
        this.setState({
            
            show: false
        })
    }
    handleShow=() => {
        
        this.setState({
           
            show: true
        })
    }


    render() {
    
        return (
      <div>
   
      <Button variant="primary" onClick={this.handleShow}>
        Login
      </Button>
      
    
    
      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="col-12">
              <Form.Label>Username</Form.Label>
              <FormControl 
               aria-label="Default"
               aria-describedby="inputGroup-sizing-default"
               />
            </Form.Group>
            <Form.Group className="col-12">
              <Form.Label>Password</Form.Label>
              <FormControl 
               aria-label="Default"
               aria-describedby="inputGroup-sizing-default"
               />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleClose}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
      <RegisterModal/>
    </div>

    

        )
    }
}

export default Home;