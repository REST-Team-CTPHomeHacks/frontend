import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { DropdownButton,Dropdown } from 'react-bootstrap';
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

export class AddModal extends React.Component<{show: boolean, toggleModal?,dummymethod?},{name:string,description:string,ddTitle:string}>{
  constructor(props){
      super(props)
      this.state={
        name:" ",
        description:" ",
        ddTitle: "Please select a day."
      }
  }

  descChange= (e) =>{
    this.setState({
        description:e.target.value 
    })
}
nameChange= (e)=>{
    this.setState({
        name:e.target.value
    })
}
returnValues=()=>{
    var element= (document.getElementById('workToggle') as HTMLFormElement);
        var isChecked = element.checked;
        if (isChecked){
            alert("Checked")
        }
        alert(this.state.name + this.state.description)
        this.props.dummymethod(this.state.name,this.state.description,isChecked)
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
              <form>
              <label>Please select a day:</label><br/>
              <select>
                <option value="Mon">Monday</option>
                <option value="Tues">Tuesday</option>
                <option value="Wed">Wednesday</option>
                <option value="Thurs">Thursday</option>
                <option value="Fri">Friday</option>
                <option value="Sat">Saturday</option>
                <option value="Sun">Sunday</option>
              </select><br/>
              <label>Name:</label><br/>
              <input type="text" name="name" onChange={this.nameChange}></input><br/>
              <label>Description:</label><br/>
              <input type="text" name="description" onChange={this.descChange}></input><br/>
              <label>Work:</label>
              <input type="checkbox" id="workToggle" name="workToggle"></input>
             
              </form>
              </div>
              
          </Modal.Body>
          <Modal.Footer>
           
            <Button variant="primary" onClick={this.returnValues}>
              Submit Activity
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
  }
