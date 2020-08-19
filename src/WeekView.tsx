import * as React from 'react';
import { DaySlot } from './DaySlot'
import { AddModal } from './AddModal'
import { Button } from 'react-bootstrap'
import { Activity } from '../types'

enum Day {
    Su,
    Mo,
    Tu,
    We,
    Th,
    Fr,
    Sa,
}

export class WeekView extends React.Component<{initialActivities: Activity[]}, {activities: Activity[], showModal: boolean}> {
    constructor(props) {
        super(props)

        this.state = {
            showModal: false,
            activities: props.initialActivities
        }

        this.toggleModal = this.toggleModal.bind(this)
    }

    toggleModal() {
        this.setState({
            showModal: this.state.showModal ? false : true
        })
    }
    dummyMethod(name:string,desc:string,check:boolean){
            if(check){
                alert(name+" "+desc)
            }
    }
    render() {
        return (
            <div>

                <Button onClick={this.toggleModal}>Hi</Button>

                {
                    this.state.activities.map((activity, i) => (
                        <DaySlot/>
                        //<DaySlot prop={activity, Day.i}/>
                    ))
                }

                <AddModal show={this.state.showModal} dummymethod={this.dummyMethod.bind(this)} toggleModal={this.toggleModal}/>
            </div>
        )
    }
}