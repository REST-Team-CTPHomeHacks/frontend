import * as React from 'react';
import { DaySlot } from './DaySlot'
import { AddModal } from './AddModal'
import { Button } from 'react-bootstrap'
import { Activity } from '../types'
import axios from 'axios'

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
        let newDate = new Date("08-20-2020")
        let newActivity : Activity = {
            date: newDate,
            name: name,
            description: desc,
            time_start: "05:20:30",
            time_end: "08:20:20",
            work: check
        }

        axios.post('http://localhost:1337/push_activity', newActivity)
        .then(() => {
            console.log('worked')
        })
    }

    componentDidMount() {
        let date = new Date();

        let month = date.getMonth()+1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth();
        let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
        let year = date.getFullYear();

        axios.get(`http://localhost:1337/activities/${month + "-" + day + "-" + year}`)
        .then(res => {
            console.log(res)
        })

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