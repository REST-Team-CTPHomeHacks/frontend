import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

/*export default class addModal extends React.Component<{},{}>{
constructor(props){
    super(props)
}
render(){
    return <div>
         <Modal
      
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button >Close</Button>
      </Modal.Footer>
    </Modal>
    </div>
}
}*/

export class AddModal extends React.Component<{show: boolean, toggleModal?},{message:string}>{
  constructor(props){
      super(props)
      this.state={
         message: ""
      }
  }

  onChange= (e) =>{
      this.setState({
          message:e.target.value 
      })
  }
  
  render(){
    return (
      <div>
  
        <Modal show={this.props.show}>
          <Modal.Header closeButton onClick={this.props.toggleModal}>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <div>
              <input type="text" onChange={this.onChange}></input>

              </div>
              
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary">
              Close
            </Button>
            <Button variant="primary">
              Submit Event
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
  }
