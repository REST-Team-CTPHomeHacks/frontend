import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

export class DaySlot extends React.Component {
   
      
    render(){
        return <div>
   



            <Card style= {{backgroundColor: "green", width: '18rem' }}
            className="mb-2">
             <Card.Header>Monday</Card.Header>
             <Card.Body>This is some text within a card body.
            
             </Card.Body>
           </Card>
            
          
            <Button>Hello World!</Button>
        </div>
    }
}
//export default DaySlot;