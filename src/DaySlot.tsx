import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

export class DaySlot extends React.Component {
   
      
    render(){
        return <div>
   

           {/*The gist of things is that we want to use a card to display each day.
            The card can be split into a header and body section*/ }

            <Card style= {{backgroundColor: "green", width: '18rem' }}
            className="mb-2">
                  {/*Header should always contain the day*/}

             <Card.Header>Monday</Card.Header>
             <Card.Body>This is some text within a card body.
             {/* Body should contain a little message depending on the work/leisure ratio. 
             Should also show the exact hours spent on work and leisure
             We also want to add the collapse in this card body if possible. */}
             </Card.Body>
           </Card>
            
          
            <Button>Hello World!</Button>
        </div>
    }
}
//export default DaySlot;