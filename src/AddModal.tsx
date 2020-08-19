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
export class Example extends React.Component<{modalReturn?},{setShow:boolean,message:string}>{
    constructor(props){
        super(props)
        this.state={
           setShow:false,
           message:" "
        }
    }
    togglevisibility(){
        this.setState({
            setShow: !this.state.setShow
        }
        )
    }
    onChange= (e) =>{
        this.setState({
            message:e.target.value 
        })
    }
    ret = () =>{
        this.togglevisibility()
        this.props.modalReturn(this.state.message)
       
    }
  
  render(){
    return (
      <div>
        <Button variant="primary" onClick={()=>this.togglevisibility()}>
          Launch demo modal
        </Button>
  
        <Modal show={this.state.setShow} onHide={()=>this.togglevisibility()}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <div>
              <input type="text" onChange={this.onChange}></input>

              </div>
              
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={()=>this.togglevisibility()}>
              Close
            </Button>
            <Button variant="primary" onClick={this.ret}>
              Submit Event
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
  }
