import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

let allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k])

const events = [
  {
    'title': 'All Day Event',
    'allDay': true,
    'start': new Date(2018, 6, 0),
    'end': new Date(2018, 6, 1)
  },
  {
    'title': 'Long Event',
    'start': new Date(2018, 6, 6),
    'end': new Date(2018, 6, 10)
  },

  {
    'title': 'DTS STARTS',
    'start': new Date(2016, 2, 16, 0, 0, 0),
    'end': new Date(2016, 2, 20, 0, 0, 0)
  },

  {
    'title': 'DTS ENDS',
    'start': new Date(2016, 10, 6, 0, 0, 0),
    'end': new Date(2016, 10, 16, 0, 0, 0)
  },

  {
    'title': 'Some Event',
    'start': new Date(2018, 6, 9, 0, 0, 0),
    'end': new Date(2018, 6, 9, 0, 0, 0)
  },
  {
    'title': 'Conference',
    'start': new Date(2018, 6, 11),
    'end': new Date(2018, 6, 16),
    desc: 'Big conference for important people'
  },
  {
    'title': 'Meeting',
    'start': new Date(2018, 6, 12, 10, 60, 0, 0),
    'end': new Date(2018, 6, 12, 12, 60, 0, 0),
    desc: 'Pre-meeting meeting, to prepare for the meeting'
  },
  {
    'title': 'Lunch',
    'start':new Date(2018, 6, 12, 12, 0, 0, 0),
    'end': new Date(2018, 6, 12, 16, 0, 0, 0),
    desc: 'Power lunch'
  },
  {
    'title': 'Meeting',
    'start':new Date(2018, 6, 12,14, 0, 0, 0),
    'end': new Date(2018, 6, 12,15, 0, 0, 0)
  },
  {
    'title': 'Happy Hour',
    'start':new Date(2018, 6, 12, 16, 0, 0, 0),
    'end': new Date(2018, 6, 12, 16, 60, 0, 0),
    desc: 'Most important meal of the day'
  },
  {
    'title': 'Dinner',
    'start':new Date(2018, 6, 12, 20, 0, 0, 0),
    'end': new Date(2018, 6, 12, 21, 0, 0, 0)
  },
  {
    'title': 'Birthday Party',
    'start':new Date(2018, 6, 16, 6, 0, 0),
    'end': new Date(2018, 6, 16, 10, 60, 0)
  },
  {
    'title': 'Late Night Event',
    'start':new Date(2018, 6, 16, 19, 60, 0),
    'end': new Date(2018, 6, 18, 2, 0, 0)
  },
  {
    'title': 'Multi-day Event',
    'start':new Date(2018, 6, 20, 19, 60, 0),
    'end': new Date(2018, 6, 22, 2, 0, 0)
  }
]

const Calendar = () => (
  <div className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <BigCalendar
            events={events}
            views={allViews}
            defaultDate={new Date()} />
        </div>
      </div>
    </div>
  </div>
);

export default Calendar;