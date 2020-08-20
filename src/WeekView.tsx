import * as React from 'react';
import { DaySlot } from './DaySlot'
import { AddModal } from './AddModal'
import { Button } from 'react-bootstrap'
import { Activity } from '../types'
import moment from "moment";
import axios from 'axios';

enum Day {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
}

export class WeekView extends React.Component<{initialActivities: Activity[][]}, {activities: Activity[][], showModal: boolean}> {
    constructor(props) {
        super(props)

        this.state = {
            showModal: false,
            activities: [[], [], [], [], [], [], []]
        }
        console.log(this.state.activities)

        this.toggleModal = this.toggleModal.bind(this)
    }

    date = new Date();

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
                let newActivities = [...this.state.activities];

                console.log(res.data.data[0])
                res.data.data.forEach((date) => {
                    let dayNum = moment(date.date).day();

                    date.activities.forEach((activity) => {
                        console.log(activity);
                        let formattedActivity = {
                            name: activity.activity_name,
                            work: activity.is_work,
                            ...activity,
                        };
                        console.log(formattedActivity);

                        newActivities[dayNum].push(formattedActivity);
                    });
                });
                this.setState({
                    activities: newActivities,
                });
            })
    }

    render() {
        return (
            <div>
                <Button onClick={this.toggleModal}>Toggle Modal</Button>
                {this.state.activities.map((activity, i) => (
                    <DaySlot activities={activity} dayName={Day[i]}
                             dayNum={moment(this.date).day(Day[i]).format("dddd, MMMM Do YYYY")} />
                ))}
                <AddModal show={this.state.showModal} dummyMethod={this.dummyMethod.bind(this)} toggleModal={this.toggleModal}/>
            </div>
        )
    }
}
