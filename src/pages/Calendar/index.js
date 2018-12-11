import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import events from '../../pages/Events'
import dates from '../../pages/dates'

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

let allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k])

class Calendar extends Component {
    constructor(props) {
        super(props);

        this.state = {events: events,startTime:'',endTime:'',eventname:''};
        this.handleClick = this.handleClick.bind(this);


    }
    componentWillMount() {

    }

    handleClick(event) {
       console.log(this.state.startTime.split('-')[2].split('T')[1],this.state.endTime.split('-')[0],this.state.endTime.split('-')[1]);
       var newevent=
           {
               id: 24   ,
               title: this.state.eventname,
               start: new Date(this.state.startTime.split('-')[0], this.state.startTime.split('-')[1]-1, this.state.startTime.split('-')[2].split('T')[0], this.state.startTime.split('-')[2].split('T')[1].split(':')[0], this.state.startTime.split('-')[2].split('T')[1].split(':')[1]),
               end: new Date(this.state.endTime.split('-')[0], this.state.endTime.split('-')[1]-1, this.state.endTime.split('-')[2].split('T')[0], this.state.endTime.split('-')[2].split('T')[1].split(':')[0], this.state.endTime.split('-')[2].split('T')[1].split(':')[1]),
           }
      var newevents=this.state.events;

            newevents.push(newevent);
        console.log(newevent,newevents)
this.setState({events:newevents})

    }

    render() {
        return (
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className='card'>
                                <div className="row">
                                    <div className="col-md-1"></div>
                                    <div className="col-md-9">
                                        <h4 style={{color: 'red'}}>Create an event :</h4>
                                        <br></br>

                                        Event Name
                                        <input  onChange={ e => this.setState({ eventname : e.target.value }) } type="text"/>
                                        <br></br>
                                        <br></br>
                                        <b>StartTime</b>
                                        <input   onChange={ e => this.setState({ startTime : e.target.value }) } type="datetime-local" name="bdaytime"/>
                                        <b style={{marginLeft: 10}}> EndTime</b>
                                        <input  onChange={ e => this.setState({ endTime : e.target.value }) }  type="datetime-local" name="bdaytime"/>

                                        <button onClick={this.handleClick} type="submit"
                                                className="btn btn-info btn-fill pull-right">Create Event
                                        </button>

                                        <br></br>
                                        <br></br>
                                        <br></br>
                                    </div>
                                </div>
                            </div>
                            {this.state.events.length}
                            <BigCalendar
                                events={this.state.events}
                                views={allViews}
                                defaultView='week'
                                defaultDate={new Date()}
                                step={60}
                                showMultiDayTimes


                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calendar;