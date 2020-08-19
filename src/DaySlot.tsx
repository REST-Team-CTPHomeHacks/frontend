import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import {Example} from './AddModal';
import {Activity} from '../types';

type DayState = {
   collapseToggled:boolean,
   showModal:boolean,
   collapseContent:string
}
export class DaySlot extends React.Component<{},DayState> {
    constructor(props){
     super(props)
     this.state= {
        collapseToggled:false,
        showModal:false,
        collapseContent: " asdf " 
     }
    }
    toggler(){
        if (this.state.collapseToggled){
          this.setState({
              collapseToggled:false
          })
        }
        else
         this.setState({
             collapseToggled:true
         })

    }
    modalTest(text:string){
       alert(text)
       this.eventsTextUpdater(text)
    }
    eventsTextUpdater(willAppend:string){  
        alert("Updating")
        this.setState({ 
            collapseContent: this.state.collapseContent +"<br/>"+ willAppend
        })
    }
    render(){
       
  
        return <div>
       
           {/*The gist of things is that we want to use a card to display each day.
            The card can be split into a header and body section*/ }

            <Card style= {{backgroundColor: "green", width: '24rem' }}
            className="mb-2">
                  {/*Header should always contain the day*/}

             <Card.Header>Monday</Card.Header>
             <Card.Body>This is some text within a card body.
             {/* Body should contain a little message depending on the work/leisure ratio. 
             Should also show the exact hours spent on work and leisure
             We also want to add the collapse in this card body if possible. */}
            <Example modalReturn={this.modalTest.bind(this)} ></Example>
            <Collapse in={this.state.collapseToggled}>
             
         <div id="example-collapse-text">
        
              <hr/>
             {this.state.collapseContent}
          </div>
         </Collapse>
        </Card.Body>
            
        <Card.Footer>  <Button
          onClick={() => this.toggler()}
          aria-controls="example-collapse-text"
          aria-expanded={this.state.collapseToggled}
        >
          click
        </Button></Card.Footer>
           
           </Card>
          <Card>Here's another card for testing.</Card>  
          
            
        </div>
    }
}

//export default DaySlot;