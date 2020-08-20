import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import {AddModal} from './AddModal';
import {Activity} from '../types';

type DayState = {
    collapseToggled:boolean,
    collapseContent:string
}
export class DaySlot extends React.Component<{ activities: Activity[], dayName: string, dayNum: string },DayState> {
    constructor(props){
        super(props)
        this.state= {
            collapseToggled:false,
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
    render(){
        return <div>
            {/*The gist of things is that we want to use a card to display each day.
            The card can be split into a header and body section*/ }
            <Card style= {{backgroundColor: "green", width: '36rem' }} className="mb-2">
                {/*Header should always contain the day*/}
                <Card.Header>{this.props.dayNum}</Card.Header>
                <Card.Body>
                    <p>Events:</p>
                    {/* Body should contain a little message depending on the work/leisure ratio.
                      Should also show the exact hours spent on work and leisure
                      We also want to add the collapse in this card body if possible. */}
                    <Collapse in={this.state.collapseToggled}>
                        <div id="example-collapse-text">
                            {this.props.activities.map((activity) =>
                                <div>
                                    <hr />
                                    <p>
                                        {activity.name}
                                        <span className="float-right">{activity.work ? "work" : "leisure"}</span>
                                    </p>
                                </div>
                            )}
                        </div>
                    </Collapse>
                </Card.Body>
                <Card.Footer>
                    <Button
                        onClick={() => this.toggler()}
                        aria-controls="example-collapse-text"
                        aria-expanded={this.state.collapseToggled}
                    >
                        click
                    </Button>
                </Card.Footer>
            </Card>
        </div>
    }
}
