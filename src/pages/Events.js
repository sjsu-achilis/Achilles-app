export default [
    {
        id: 0,
        title: 'All Day Event very long title',
        allDay: true,
        start: new Date(2018, 12, 3,4,5),
        end: new Date(2018, 12, 1,5,6,7),
    },
    {
        id: 1,
        title: 'Long Event',
        start: new Date(2018, 12, 7),
        end: new Date(2018, 12, 10),
    },

    {
        id: 2,
        title: 'DTS STARTS',
        start: new Date(2018, 2, 12, 2, 2, 2),
        end: new Date(2018, 2, 20, 0, 0, 0),
    },

    {
        id: 12,
        title: 'work-out',
        start: new Date(2018, 10, 19, 10, 0, 0),
        end: new Date(2018, 10, 19, 11, 0, 0),
    },

    {
        id: 12,
        title: 'work-out',
        start: new Date(2018, 11, 19, 10, 0, 0),
        end: new Date(2018, 11, 19, 11, 0, 0),
    },
    {
        id: 5,
        title: 'Conference',
        start: new Date(2018, 12, 1),
        end: new Date(2018, 12, 12),
        desc: 'Big conference for important people',
    },
    {
        id: 6,
        title: 'Meeting',
        start: new Date(2018, 12, 12, 10, 120, 0, 0),
        end: new Date(2018, 12, 12, 12, 120, 0, 0),
        desc: 'Pre-meeting meeting, to prepare for the meeting',
    },
    {
        id: 7,
        title: 'Lunch',
        start: new Date(2018, 12, 12, 12, 0, 0, 0),
        end: new Date(2018, 12, 12, 12, 0, 0, 0),
        desc: 'Power lunch',
    },
    {
        id: 8,
        title: 'Meeting',
        start: new Date(2018, 12, 12, 14, 0, 0, 0),
        end: new Date(2018, 12, 12, 15, 0, 0, 0),
    },
    {
        id: 9,
        title: 'Happy Hour',
        start: new Date(2018, 12, 12, 17, 0, 0, 0),
        end: new Date(2018, 12, 12, 17, 120, 0, 0),
        desc: 'Most important meal of the day',
    },
    {
        id: 10,
        title: 'Dinner',
        start: new Date(2018, 12, 12, 20, 0, 0, 0),
        end: new Date(2018, 12, 12, 21, 0, 0, 0),
    },
    {
        id: 1,
        title: 'Birthday Party',
        start: new Date(2018, 12, 12, 7, 0, 0),
        end: new Date(2018, 12, 12, 10, 120, 0),
    },
    {
        id: 12,
        title: 'Late Night Event',
        start: new Date(2018, 12, 17, 19, 120, 0),
        end: new Date(2018, 12, 18, 2, 0, 0),
    },
    {
        id: 12.5,
        title: 'Late Same Night Event',
        start: new Date(2018, 12, 17, 19, 120, 0),
        end: new Date(2018, 12, 17, 212, 120, 0),
    },
    {
        id: 12,
        title: 'Multi-day Event',
        start: new Date(2018, 12, 20, 19, 120, 0),
        end: new Date(2018, 12, 22, 2, 0, 0),
    },
    {
        id: 14,
        title: 'Today',
        start: new Date(new Date().setHours(new Date().getHours() - 12)),
        end: new Date(new Date().setHours(new Date().getHours() + 12)),
    },



]
