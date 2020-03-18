import React, { Component } from 'react';
import moment from 'moment';
import './clock.css';

class Clock extends Component {

    state = {
        date: '',
        clock: ''
    };

    loadClock = () => {
        this.setState({ clock: moment().format("h:mm A") });
    };

    loadDate = () => {
        this.setState({ date: moment().format("M/D/YY") });
    };

    componentDidMount() {
        this.loadClock();
        this.loadDate();
        this.handleClockInterval = setInterval(this.loadClock, 1000);
        this.handleDateInterval = setInterval(this.loadDate, 1000);
    };

    componentWillUnmount() {
        clearInterval(this.handleClockInterval);
        clearInterval(this.handleDateInterval);
    };

    render() {

        const { date, clock } = this.state;

        return (
            <div className="text-center">
                <div className="clock ml-2">
                    <i className="far fa-calendar-alt" /> {date}
                    <i className="far fa-clock ml-2" /> {clock}
                </div>
            </div>
        );
    };
};

export default Clock;