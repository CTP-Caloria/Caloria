import React from 'react';
//import {Redirect } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

class ModalComponent extends React.Component {
    state = {
        show: false
    }

    handleClose = () => {
        this.setState({
            show: false
        })
    }
    handleShow = () => {
        this.setState({
            show: true
        })
    }

    render() {
        return (
            <>
                <Button variant="primary" onClick={this.handleShow}> modal
                    
                    </Button>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{this.props.body}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                            </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>

        )
    }
}
export default ModalComponent;