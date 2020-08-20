import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { DropdownButton,Dropdown } from 'react-bootstrap';
import TimePicker from 'react-time-picker';
import { Activity } from '../types';


export class AddModal extends React.Component<{show: boolean, toggleModal?, dummyMethod?},
    {name:string,description:string,ddTitle:string,startTime:string,endTime:string, day: string }>{
    constructor(props){
        super(props)

        this.state={
            name:" ",
            description:" ",
            ddTitle: "Please select a day.",
            day: "",
            startTime:"10:00" ,
            endTime:"10:00"
        }
    }

    startTimeChange = (e) =>{
        this.setState({
            startTime: e
        })
    }

    endTimeChange=(e)=>{
        this.setState({
            endTime: e
        })
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

    dayChange= (e)=>{
        this.setState({
            day: e.target.value
        })
    }

    returnValues = () => {
        var element= (document.getElementById('workToggle') as HTMLFormElement);
        var isChecked = element.checked;

        let activity: Activity = {
            name: this.state.name || null,
            day: this.state.day || null,
            description: this.state.description || null,
            time_start: this.state.startTime || null,
            time_end: this.state.endTime || null,
            work: isChecked || false,
        };
        this.props.dummyMethod(activity);
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
                                <select name="dayOfWeek" onChange={this.dayChange}>
                                    <option value="Sun">Sunday</option>
                                    <option value="Mon">Monday</option>
                                    <option value="Tues">Tuesday</option>
                                    <option value="Wed">Wednesday</option>
                                    <option value="Thurs">Thursday</option>
                                    <option value="Fri">Friday</option>
                                    <option value="Sat">Saturday</option>
                                </select>
                                <br/>
                                <label>Starting time:</label><br/>
                                <TimePicker
                                    onChange={this.startTimeChange}
                                    value={this.state.startTime}
                                    disableClock={true}
                                /> <br/>
                                <label>Ending time:</label> <br/>
                                <TimePicker
                                    onChange={this.endTimeChange}
                                    value={this.state.endTime}
                                    disableClock={true}
                                /> <br/>
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
