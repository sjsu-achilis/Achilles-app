import React, {Component} from 'react';
import ChartistGraph from 'react-chartist';
import Chartist from 'chartist';
import RTChart from 'react-rt-chart';
import {Line} from 'react-chartjs-2';

import {database} from '../../firebase/firebase';
import Selectv from "./Selectv";
import InputRange from 'react-input-range';

import { DateRange } from 'react-date-range';
import 'react-input-range/lib/css/index.css';

import moment from 'moment'


const initialState = {
    data2:{},
    data3:{},
    data4:{},
    data5:{},
    data6:{},
    data7:{},
    data8:{},
    data9:{},
    data10:{},

    labels: [],
    labels2: [],
   data:[],
    datasets: [
        {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
      data3:{},      backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: []
        }
    ],
    value: { min: 2, max: 10 },
    value5: {
        min: 3,
        max: 10,
    },
    maxValue:'',
    startTime:'',
    endTime:'',

    selectedOption: null,

    options: [/*{value: "2134225533", label: "Jason Smith"},
{value: "1342252213", label: "Rita Munez"},
{value: "1673662323", label: "Roger Cage"},
{value: "9978656676", label: "Laurine Little"},
{value: "1414252511", label: "Mac Mason"}*/]
};

class SalesChart extends Component {
    constructor(props) {
        super(props);
        var dates = ['Dates', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'];
        var sample = ['sample1', 30, 200, 100, 400, 150, 250];


        this.handleSelect=this.handleSelect.bind(this);
        this.changerange=this.changerange.bind(this)
        this.handleselectChange=this.handleselectChange.bind(this);

        this.state={
            data2:{},
            data3:{},
            data4:{},
            data5:{},
            data6:{},
            data7:{},
            data8:{},
            data9:{},
            data10:{},
            forecastdata:{},

            labels: [],
            labels2: [],
            data:[],
            datasets: [
                {
                    label: 'My First dataset',
                    fill: false,
                    lineTension: 0.1,
                    data3:{},      backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: []
                }
            ],
            value: { min: 2, max: 10 },
            value5: {
                min: 3,
                max: 10,
            },
            maxValue:'',
            startTime:'',
            endTime:'',
            startTime2:'',
            endTime2:'',

            selectedOption: null,

            options: [/*{value: "2134225533", label: "Jason Smith"},
{value: "1342252213", label: "Rita Munez"},
{value: "1673662323", label: "Roger Cage"},
{value: "9978656676", label: "Laurine Little"},
{value: "1414252511", label: "Mac Mason"}*/]
        };
    }

    handleselectChange = (selectedOption) => {
    this.setState({selectedOption:selectedOption})

        fetch("http://ec2-54-201-123-10.us-west-2.compute.amazonaws.com:5000/get_forecast?userid="+this.state.selectedOption.value+"&start_date=05-08-2016")
            .then(response => {
                return response.json();

            })
            .then(d => {
                console.log(d)
                var forecast=[];
                d.forecast.forEach(function(ath){
                    forecast.push( ath);

                })
                var list2=[];
                for(var i=10;i<31;i++)
                {
                    list2.push('08-'+i+'-2016')
                }
                //console.log(athe)
                this.setState({
                    forecastdata:{
                        labels:list2,

                        datasets: [
                            {
                                label: 'Forecasted ACWR for the next 21 days',
                                fill: false,
                                lineTension: 0.1,
                                backgroundColor: 'brown',
                                borderColor: 'black',
                                borderCapStyle: 'butt',
                                borderDash: [],
                                borderDashOffset: 0.0,
                                borderJoinStyle: 'miter',
                                pointBorderColor: 'rgba(75,192,192,1)',
                                pointBackgroundColor: '#fff',
                                pointBorderWidth: 1,
                                pointHoverRadius: 5,
                                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                                pointHoverBorderColor: 'rgba(220,220,220,1)',
                                pointHoverBorderWidth: 2,
                                pointRadius: 1,
                                pointHitRadius: 10,
                                data: forecast
                            }
                        ]
                    }})

            })

        var startTime=this.state.startTime2;
    var endTime=this.state.endTime2;

        if(startTime && endTime && startTime !== endTime )
            fetch("http://ec2-54-201-123-10.us-west-2.compute.amazonaws.com:5000/get_session_info?userid="+this.state.selectedOption.value+"&start_date="+startTime+"&end_date="+endTime)
                .then(response => {
                    return response.json();
                })
                .then(d => {
                    console.log(d)
                    var list = [];
                    var data=[];
                    var atl=[];
                    var ctl=[];
                    var ewma=[];
                    var acwr=[];
                    var tcb=[];
                    for (var i = 0; i < d.session_info.length; i++) {
                        list.push(d.session_info[i].date);
                        data.push(d.session_info[i].rpe)

                        atl.push(d.session_info[i].atl)
                        ctl.push(d.session_info[i].ctl)
                        ewma.push(d.session_info[i].ewma)
                        acwr.push(d.session_info[i].acwr)
                        tcb.push(d.session_info[i].tsb)
                    }
                    var datasets= [
                        {
                            label: 'rating of perceived exertion ',
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: 'orange',
                            borderColor: 'orange',
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: 'rgba(75,192,192,1)',
                            pointBackgroundColor: '#fff',
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                            pointHoverBorderColor: 'rgba(220,220,220,1)',
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: data
                        },
                        {
                            label: 'Chronic Training Load ',
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: 'red',
                            borderColor: 'red',
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: 'rgba(75,192,192,1)',
                            pointBackgroundColor: '#fff',
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                            pointHoverBorderColor: 'rgba(220,220,220,1)',
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: ctl
                        },
                        {
                            label: 'Acute Training Load ',
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: 'rgba(75,192,192,0.4)',
                            borderColor: 'rgba(75,192,192,1)',
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: 'rgba(75,192,192,1)',
                            pointBackgroundColor: '#fff',
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                            pointHoverBorderColor: 'rgba(220,220,220,1)',
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: atl
                        },

                        {
                            label: 'Exponentially Weighted Moving Average ',
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: 'green',
                            borderColor: 'green',
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: 'rgba(75,192,192,1)',
                            pointBackgroundColor: '#fff',
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                            pointHoverBorderColor: 'rgba(220,220,220,1)',
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: ewma
                        }
                    ]

                    var tempdata=this.state;
                    tempdata.labels=list;
                    tempdata.labels2=list;
                    tempdata.datasets=[]
                    tempdata.datasets=
                        [ {
                            label: 'Exponentially Weighted Moving Average ',
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: 'green',
                            borderColor: 'green',
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: 'rgba(75,192,192,1)',
                            pointBackgroundColor: '#fff',
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                            pointHoverBorderColor: 'rgba(220,220,220,1)',
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: acwr
                        }
                        ];


                    var tempdata=this.state;
                    tempdata.labels=list;
                    tempdata.labels2=list;
                    tempdata.datasets=[]
                    tempdata.datasets=
                        [ {
                            label: 'Exponentially Weighted Moving Average ',
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: 'green',
                            borderColor: 'green',
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: 'rgba(75,192,192,1)',
                            pointBackgroundColor: '#fff',
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                            pointHoverBorderColor: 'rgba(220,220,220,1)',
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: acwr
                        }
                        ];
                    this.setState({value:{min:(d.session_info.length-1)/2,max:(d.session_info.length+1)/2},maxValue:d.session_info.length,labels:list,lables2:list,datasets:datasets,



                        data3:{
                            labels:list,

                            datasets: [
                                {
                                    label: 'acwr',
                                    fill: false,
                                    lineTension: 0.1,
                                    backgroundColor: 'brown',
                                    borderColor: 'black',
                                    borderCapStyle: 'butt',
                                    borderDash: [],
                                    borderDashOffset: 0.0,
                                    borderJoinStyle: 'miter',
                                    pointBorderColor: 'rgba(75,192,192,1)',
                                    pointBackgroundColor: '#fff',
                                    pointBorderWidth: 1,
                                    pointHoverRadius: 5,
                                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                                    pointHoverBorderWidth: 2,
                                    pointRadius: 1,
                                    pointHitRadius: 10,
                                    data: tcb
                                }
                            ]
                        },

                        data2:{
                            labels:list,

                            datasets: [
                                {
                                    label: 'acwr',
                                    fill: false,
                                    lineTension: 0.1,
                                    backgroundColor: 'brown',
                                    borderColor: 'black',
                                    borderCapStyle: 'butt',
                                    borderDash: [],
                                    borderDashOffset: 0.0,
                                    borderJoinStyle: 'miter',
                                    pointBorderColor: 'rgba(75,192,192,1)',
                                    pointBackgroundColor: '#fff',
                                    pointBorderWidth: 1,
                                    pointHoverRadius: 5,
                                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                                    pointHoverBorderWidth: 2,
                                    pointRadius: 1,
                                    pointHitRadius: 10,
                                    data: acwr
                                }
                            ]
                        }})

                    d.session_info.forEach(function (ans) {
                        fetch("http://ec2-54-201-123-10.us-west-2.compute.amazonaws.com:5000/get_session_questions")
                            .then(response => {
                                return response.json();
                            })
                            .then(e => {
                                console.log(e)
                                e.questions.forEach(function (que) {
                                    ans.answers.forEach(function (an){
                                        if(an.q_id===que.q_id)
                                        {
                                            an.qstn=que.qstn
                                        }
                                    })

                                })

                            })

                        /* var athe=[];
                         d.atheletes.forEach(function(ath){
                             athe.push( { value: ath.name, label:ath.name });

                         })*/

                    })
                    var question1=[];
                    var question2=[];
                    var question3=[];
                    var question4=[];
                    var question5=[];
                    var question6=[];
                    var question7=[];

                    d.session_info.forEach(function (ans){
                        ans.answers.forEach(function (an){
                            if(an.q_id===0)
                                question1.push(an.val)
                            if(an.q_id===1)
                                question2.push(an.val)
                            if(an.q_id===2)
                                question3.push(an.val)
                            if(an.q_id===3)
                                question4.push(an.val)
                            if(an.q_id===4)
                                question5.push(an.val)
                            if(an.q_id===5)
                                question6.push(an.val)
                            if(an.q_id===6)
                                question7.push(an.val)


                        })

                    });

                    this.setState(
                        {data4:{
                                labels:list,

                                datasets: [
                                    {
                                        label: 'Mood',
                                        fill: false,
                                        lineTension: 0.1,
                                        backgroundColor: 'brown',
                                        borderColor: 'black',
                                        borderCapStyle: 'butt',
                                        borderDash: [],
                                        borderDashOffset: 0.0,
                                        borderJoinStyle: 'miter',
                                        pointBorderColor: 'rgba(75,192,192,1)',
                                        pointBackgroundColor: '#fff',
                                        pointBorderWidth: 1,
                                        pointHoverRadius: 5,
                                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                                        pointHoverBorderWidth: 2,
                                        pointRadius: 1,
                                        pointHitRadius: 10,
                                        data: question1
                                    }
                                ]
                            },
                            data5:{
                                labels:list,

                                datasets: [
                                    {
                                        label: 'Energy Level',
                                        fill: false,
                                        lineTension: 0.1,
                                        backgroundColor: 'brown',
                                        borderColor: 'black',
                                        borderCapStyle: 'butt',
                                        borderDash: [],
                                        borderDashOffset: 0.0,
                                        borderJoinStyle: 'miter',
                                        pointBorderColor: 'rgba(75,192,192,1)',
                                        pointBackgroundColor: '#fff',
                                        pointBorderWidth: 1,
                                        pointHoverRadius: 5,
                                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                                        pointHoverBorderWidth: 2,
                                        pointRadius: 1,
                                        pointHitRadius: 10,
                                        data: question2
                                    }
                                ]
                            },
                            data6:{
                                labels:list,

                                datasets: [
                                    {
                                        label: 'Sleep quality',
                                        fill: false,
                                        lineTension: 0.1,
                                        backgroundColor: 'brown',
                                        borderColor: 'black',
                                        borderCapStyle: 'butt',
                                        borderDash: [],
                                        borderDashOffset: 0.0,
                                        borderJoinStyle: 'miter',
                                        pointBorderColor: 'rgba(75,192,192,1)',
                                        pointBackgroundColor: '#fff',
                                        pointBorderWidth: 1,
                                        pointHoverRadius: 5,
                                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                                        pointHoverBorderWidth: 2,
                                        pointRadius: 1,
                                        pointHitRadius: 10,
                                        data: question3
                                    }
                                ]
                            },
                            data7:{
                                labels:list,

                                datasets: [
                                    {
                                        label: 'Sleep duration',
                                        fill: false,
                                        lineTension: 0.1,
                                        backgroundColor: 'brown',
                                        borderColor: 'black',
                                        borderCapStyle: 'butt',
                                        borderDash: [],
                                        borderDashOffset: 0.0,
                                        borderJoinStyle: 'miter',
                                        pointBorderColor: 'rgba(75,192,192,1)',
                                        pointBackgroundColor: '#fff',
                                        pointBorderWidth: 1,
                                        pointHoverRadius: 5,
                                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                                        pointHoverBorderWidth: 2,
                                        pointRadius: 1,
                                        pointHitRadius: 10,
                                        data: question4
                                    }
                                ]
                            },
                            data8:{
                                labels:list,

                                datasets: [
                                    {
                                        label: 'Stress level',
                                        fill: false,
                                        lineTension: 0.1,
                                        backgroundColor: 'brown',
                                        borderColor: 'black',
                                        borderCapStyle: 'butt',
                                        borderDash: [],
                                        borderDashOffset: 0.0,
                                        borderJoinStyle: 'miter',
                                        pointBorderColor: 'rgba(75,192,192,1)',
                                        pointBackgroundColor: '#fff',
                                        pointBorderWidth: 1,
                                        pointHoverRadius: 5,
                                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                                        pointHoverBorderWidth: 2,
                                        pointRadius: 1,
                                        pointHitRadius: 10,
                                        data: question5
                                    }
                                ]
                            },
                            data9:{
                                labels:list,

                                datasets: [
                                    {
                                        label: 'Muscle Prep',
                                        fill: false,
                                        lineTension: 0.1,
                                        backgroundColor: 'brown',
                                        borderColor: 'black',
                                        borderCapStyle: 'butt',
                                        borderDash: [],
                                        borderDashOffset: 0.0,
                                        borderJoinStyle: 'miter',
                                        pointBorderColor: 'rgba(75,192,192,1)',
                                        pointBackgroundColor: '#fff',
                                        pointBorderWidth: 1,
                                        pointHoverRadius: 5,
                                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                                        pointHoverBorderWidth: 2,
                                        pointRadius: 1,
                                        pointHitRadius: 10,
                                        data: question6
                                    }
                                ]
                            },
                            data10:{
                                labels:list,

                                datasets: [
                                    {
                                        label: 'Session Rating',
                                        fill: false,
                                        lineTension: 0.1,
                                        backgroundColor: 'brown',
                                        borderColor: 'black',
                                        borderCapStyle: 'butt',
                                        borderDash: [],
                                        borderDashOffset: 0.0,
                                        borderJoinStyle: 'miter',
                                        pointBorderColor: 'rgba(75,192,192,1)',
                                        pointBackgroundColor: '#fff',
                                        pointBorderWidth: 1,
                                        pointHoverRadius: 5,
                                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                                        pointHoverBorderWidth: 2,
                                        pointRadius: 1,
                                        pointHitRadius: 10,
                                        data: question7
                                    }
                                ]
                            }})







                })

    }

    changerange(value){

        this.setState({value5:value})
        var startTime=this.state.lables2[value.min-1]
        var endTime=this.state.lables2[value.max-1]

        if(startTime && endTime && startTime !== endTime )
            fetch("http://ec2-54-201-123-10.us-west-2.compute.amazonaws.com:5000/get_session_info?userid="+this.state.selectedOption.value+"&start_date="+startTime+"&end_date="+endTime)
                .then(response => {
                    return response.json();
                })
                .then(d => {
                    console.log(d)
                    var list = [];
                    var data=[];
                    var atl=[];
                    var ctl=[];
                    var ewma=[];
                    var acwr=[];
                    var tcb=[];
                    for (var i = 0; i < d.session_info.length; i++) {
                        list.push(d.session_info[i].date);
                        data.push(d.session_info[i].rpe)

                        atl.push(d.session_info[i].atl)
                        ctl.push(d.session_info[i].ctl)
                        ewma.push(d.session_info[i].ewma)
                        acwr.push(d.session_info[i].acwr)
                        tcb.push(d.session_info[i].tsb)
                    }
                    var datasets= [
                        {
                            label: 'rating of perceived exertion ',
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: 'orange',
                            borderColor: 'orange',
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: 'rgba(75,192,192,1)',
                            pointBackgroundColor: '#fff',
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                            pointHoverBorderColor: 'rgba(220,220,220,1)',
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: data
                        },
                        {
                            label: 'Chronic Training Load ',
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: 'red',
                            borderColor: 'red',
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: 'rgba(75,192,192,1)',
                            pointBackgroundColor: '#fff',
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                            pointHoverBorderColor: 'rgba(220,220,220,1)',
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: ctl
                        },
                        {
                            label: 'Acute Training Load ',
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: 'rgba(75,192,192,0.4)',
                            borderColor: 'rgba(75,192,192,1)',
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: 'rgba(75,192,192,1)',
                            pointBackgroundColor: '#fff',
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                            pointHoverBorderColor: 'rgba(220,220,220,1)',
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: atl
                        }
                        ,
                        {
                            label: 'Exponentially Weighted Moving Average ',
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: 'green',
                            borderColor: 'green',
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: 'rgba(75,192,192,1)',
                            pointBackgroundColor: '#fff',
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                            pointHoverBorderColor: 'rgba(220,220,220,1)',
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: ewma
                        }
                    ]



                    const tempdata = {
                        labels:list,

                        datasets: [
                            {
                                label: 'acwr',
                                fill: false,
                                lineTension: 0.1,
                                backgroundColor: 'brown',
                                borderColor: 'black',
                                borderCapStyle: 'butt',
                                borderDash: [],
                                borderDashOffset: 0.0,
                                borderJoinStyle: 'miter',
                                pointBorderColor: 'rgba(75,192,192,1)',
                                pointBackgroundColor: '#fff',
                                pointBorderWidth: 1,
                                pointHoverRadius: 5,
                                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                                pointHoverBorderColor: 'rgba(220,220,220,1)',
                                pointHoverBorderWidth: 2,
                                pointRadius: 1,
                                pointHitRadius: 10,
                                data: acwr
                            }
                        ]
                    };
                    console.log('temp is',this.state.data2);
                    this.setState({labels:list,datasets:datasets})

                    this.setState({
                        data3:{
                            labels:list,

                            datasets: [
                                {
                                    label: 'acwr',
                                    fill: false,
                                    lineTension: 0.1,
                                    backgroundColor: 'brown',
                                    borderColor: 'black',
                                    borderCapStyle: 'butt',
                                    borderDash: [],
                                    borderDashOffset: 0.0,
                                    borderJoinStyle: 'miter',
                                    pointBorderColor: 'rgba(75,192,192,1)',
                                    pointBackgroundColor: '#fff',
                                    pointBorderWidth: 1,
                                    pointHoverRadius: 5,
                                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                                    pointHoverBorderWidth: 2,
                                    pointRadius: 1,
                                    pointHitRadius: 10,
                                    data: tcb
                                }
                            ]
                        },


                        data2:{
                            labels:list,

                            datasets: [
                                {
                                    label: 'acwr',
                                    fill: false,
                                    lineTension: 0.1,
                                    backgroundColor: 'brown',
                                    borderColor: 'black',
                                    borderCapStyle: 'butt',
                                    borderDash: [],
                                    borderDashOffset: 0.0,
                                    borderJoinStyle: 'miter',
                                    pointBorderColor: 'rgba(75,192,192,1)',
                                    pointBackgroundColor: '#fff',
                                    pointBorderWidth: 1,
                                    pointHoverRadius: 5,
                                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                                    pointHoverBorderWidth: 2,
                                    pointRadius: 1,
                                    pointHitRadius: 10,
                                    data: acwr
                                }
                            ]
                        }})

                    d.session_info.forEach(function (ans) {
                        fetch("http://ec2-54-201-123-10.us-west-2.compute.amazonaws.com:5000/get_session_questions")
                            .then(response => {
                                return response.json();
                            })
                            .then(e => {
                                console.log(e)
                                e.questions.forEach(function (que) {
                                    ans.answers.forEach(function (an){
                                        if(an.q_id===que.q_id)
                                        {
                                            an.qstn=que.qstn
                                        }
                                    })

                                })

                            })

                        /* var athe=[];
                         d.atheletes.forEach(function(ath){
                             athe.push( { value: ath.name, label:ath.name });

                         })*/

                    })
                    console.log(d)



                    d.session_info.forEach(function (ans) {
                        fetch("http://ec2-54-201-123-10.us-west-2.compute.amazonaws.com:5000/get_session_questions")
                            .then(response => {
                                return response.json();
                            })
                            .then(e => {
                                console.log(e)
                                e.questions.forEach(function (que) {
                                    ans.answers.forEach(function (an){
                                        if(an.q_id===que.q_id)
                                        {
                                            an.qstn=que.qstn
                                        }
                                    })

                                })

                            })

                        /* var athe=[];
                         d.atheletes.forEach(function(ath){
                             athe.push( { value: ath.name, label:ath.name });

                         })*/

                    })
                    var question1=[];
                    var question2=[];
                    var question3=[];
                    var question4=[];
                    var question5=[];
                    var question6=[];
                    var question7=[];

                    d.session_info.forEach(function (ans){
                        ans.answers.forEach(function (an){
                            if(an.q_id===0)
                                question1.push(an.val)
                            if(an.q_id===1)
                                question2.push(an.val)
                            if(an.q_id===2)
                                question3.push(an.val)
                            if(an.q_id===3)
                                question4.push(an.val)
                            if(an.q_id===4)
                                question5.push(an.val)
                            if(an.q_id===5)
                                question6.push(an.val)
                            if(an.q_id===6)
                                question7.push(an.val)


                        })

                    });

                    this.setState(
                        {data4:{
                                labels:list,

                                datasets: [
                                    {
                                        label: 'Mood',
                                        fill: false,
                                        lineTension: 0.1,
                                        backgroundColor: 'brown',
                                        borderColor: 'black',
                                        borderCapStyle: 'butt',
                                        borderDash: [],
                                        borderDashOffset: 0.0,
                                        borderJoinStyle: 'miter',
                                        pointBorderColor: 'rgba(75,192,192,1)',
                                        pointBackgroundColor: '#fff',
                                        pointBorderWidth: 1,
                                        pointHoverRadius: 5,
                                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                                        pointHoverBorderWidth: 2,
                                        pointRadius: 1,
                                        pointHitRadius: 10,
                                        data: question1
                                    }
                                ]
                            },
                            data5:{
                                labels:list,

                                datasets: [
                                    {
                                        label: 'Energy Level',
                                        fill: false,
                                        lineTension: 0.1,
                                        backgroundColor: 'brown',
                                        borderColor: 'black',
                                        borderCapStyle: 'butt',
                                        borderDash: [],
                                        borderDashOffset: 0.0,
                                        borderJoinStyle: 'miter',
                                        pointBorderColor: 'rgba(75,192,192,1)',
                                        pointBackgroundColor: '#fff',
                                        pointBorderWidth: 1,
                                        pointHoverRadius: 5,
                                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                                        pointHoverBorderWidth: 2,
                                        pointRadius: 1,
                                        pointHitRadius: 10,
                                        data: question2
                                    }
                                ]
                            },
                            data6:{
                                labels:list,

                                datasets: [
                                    {
                                        label: 'Sleep quality',
                                        fill: false,
                                        lineTension: 0.1,
                                        backgroundColor: 'brown',
                                        borderColor: 'black',
                                        borderCapStyle: 'butt',
                                        borderDash: [],
                                        borderDashOffset: 0.0,
                                        borderJoinStyle: 'miter',
                                        pointBorderColor: 'rgba(75,192,192,1)',
                                        pointBackgroundColor: '#fff',
                                        pointBorderWidth: 1,
                                        pointHoverRadius: 5,
                                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                                        pointHoverBorderWidth: 2,
                                        pointRadius: 1,
                                        pointHitRadius: 10,
                                        data: question3
                                    }
                                ]
                            },
                            data7:{
                                labels:list,

                                datasets: [
                                    {
                                        label: 'Sleep duration',
                                        fill: false,
                                        lineTension: 0.1,
                                        backgroundColor: 'brown',
                                        borderColor: 'black',
                                        borderCapStyle: 'butt',
                                        borderDash: [],
                                        borderDashOffset: 0.0,
                                        borderJoinStyle: 'miter',
                                        pointBorderColor: 'rgba(75,192,192,1)',
                                        pointBackgroundColor: '#fff',
                                        pointBorderWidth: 1,
                                        pointHoverRadius: 5,
                                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                                        pointHoverBorderWidth: 2,
                                        pointRadius: 1,
                                        pointHitRadius: 10,
                                        data: question4
                                    }
                                ]
                            },
                            data8:{
                                labels:list,

                                datasets: [
                                    {
                                        label: 'Stress level',
                                        fill: false,
                                        lineTension: 0.1,
                                        backgroundColor: 'brown',
                                        borderColor: 'black',
                                        borderCapStyle: 'butt',
                                        borderDash: [],
                                        borderDashOffset: 0.0,
                                        borderJoinStyle: 'miter',
                                        pointBorderColor: 'rgba(75,192,192,1)',
                                        pointBackgroundColor: '#fff',
                                        pointBorderWidth: 1,
                                        pointHoverRadius: 5,
                                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                                        pointHoverBorderWidth: 2,
                                        pointRadius: 1,
                                        pointHitRadius: 10,
                                        data: question5
                                    }
                                ]
                            },
                            data9:{
                                labels:list,

                                datasets: [
                                    {
                                        label: 'Muscle Prep',
                                        fill: false,
                                        lineTension: 0.1,
                                        backgroundColor: 'brown',
                                        borderColor: 'black',
                                        borderCapStyle: 'butt',
                                        borderDash: [],
                                        borderDashOffset: 0.0,
                                        borderJoinStyle: 'miter',
                                        pointBorderColor: 'rgba(75,192,192,1)',
                                        pointBackgroundColor: '#fff',
                                        pointBorderWidth: 1,
                                        pointHoverRadius: 5,
                                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                                        pointHoverBorderWidth: 2,
                                        pointRadius: 1,
                                        pointHitRadius: 10,
                                        data: question6
                                    }
                                ]
                            },
                            data10:{
                                labels:list,

                                datasets: [
                                    {
                                        label: 'Session Rating',
                                        fill: false,
                                        lineTension: 0.1,
                                        backgroundColor: 'brown',
                                        borderColor: 'black',
                                        borderCapStyle: 'butt',
                                        borderDash: [],
                                        borderDashOffset: 0.0,
                                        borderJoinStyle: 'miter',
                                        pointBorderColor: 'rgba(75,192,192,1)',
                                        pointBackgroundColor: '#fff',
                                        pointBorderWidth: 1,
                                        pointHoverRadius: 5,
                                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                                        pointHoverBorderWidth: 2,
                                        pointRadius: 1,
                                        pointHitRadius: 10,
                                        data: question7
                                    }
                                ]
                            }})









                })


    }
    handleSelect(range){
      //  console.log(range.startTime)
        if(moment(range.startDate).format('YYYY').toString()==='2018') {
            var startTime = moment(range.startDate).format('MM-DD') + '-2015';

        }
        else
            var startTime = moment(range.startDate).format('MM-DD') + '-2016';


        if(moment(range.endDate).format('YYYY').toString()==='2018') {
            var endTime = moment(range.endDate).format('MM-DD') + '-2015';

        }

        else
        {
            var endTime = moment(range.endDate).format('MM-DD') + '-2016';
        }

console.log(startTime,endTime);

        if(startTime && endTime && startTime !== endTime )
this.setState({startTime2:startTime,endTime2:endTime})


console.log(startTime,endTime)

if(startTime && endTime && startTime !== endTime )
        fetch("http://ec2-54-201-123-10.us-west-2.compute.amazonaws.com:5000/get_session_info?userid="+this.state.selectedOption.value+"&start_date="+startTime+"&end_date="+endTime)
            .then(response => {
                return response.json();
            })
            .then(d => {
                console.log(d)
                var list = [];
                var data=[];
                var atl=[];
                var ctl=[];
                var ewma=[];
                var acwr=[];
                var tcb=[];
                for (var i = 0; i < d.session_info.length; i++) {
                    list.push(d.session_info[i].date);
                    data.push(d.session_info[i].rpe)

                    atl.push(d.session_info[i].atl)
                    ctl.push(d.session_info[i].ctl)
                    ewma.push(d.session_info[i].ewma)
                    acwr.push(d.session_info[i].acwr)
                    tcb.push(d.session_info[i].tsb)
                }
                var datasets= [
                    {
                        label: 'rating of perceived exertion ',
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: 'orange',
                        borderColor: 'orange',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: data
                    },
                    {
                        label: 'Chronic Training Load ',
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: 'red',
                        borderColor: 'red',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: ctl
                    },
                    {
                        label: 'Acute Training Load ',
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        borderColor: 'rgba(75,192,192,1)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: atl
                    },

                    {
                        label: 'Exponentially Weighted Moving Average ',
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: 'green',
                        borderColor: 'green',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: ewma
                    }
                ]

                var tempdata=this.state;
                tempdata.labels=list;
                tempdata.labels2=list;
                tempdata.datasets=[]
                tempdata.datasets=
               [ {
                    label: 'Exponentially Weighted Moving Average ',
                        fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'green',
                    borderColor: 'green',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: acwr
                }
            ];


                var tempdata=this.state;
                tempdata.labels=list;
                tempdata.labels2=list;
                tempdata.datasets=[]
                tempdata.datasets=
                    [ {
                        label: 'Exponentially Weighted Moving Average ',
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: 'green',
                        borderColor: 'green',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: acwr
                    }
                    ];
                this.setState({value:{min:(d.session_info.length-1)/2,max:(d.session_info.length+1)/2},maxValue:d.session_info.length,labels:list,lables2:list,datasets:datasets,



                    data3:{
                    labels:list,

                        datasets: [
                            {
                                label: 'acwr',
                                fill: false,
                                lineTension: 0.1,
                                backgroundColor: 'brown',
                                borderColor: 'black',
                                borderCapStyle: 'butt',
                                borderDash: [],
                                borderDashOffset: 0.0,
                                borderJoinStyle: 'miter',
                                pointBorderColor: 'rgba(75,192,192,1)',
                                pointBackgroundColor: '#fff',
                                pointBorderWidth: 1,
                                pointHoverRadius: 5,
                                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                                pointHoverBorderColor: 'rgba(220,220,220,1)',
                                pointHoverBorderWidth: 2,
                                pointRadius: 1,
                                pointHitRadius: 10,
                                data: tcb
                            }
                        ]
                    },

                    data2:{
                        labels:list,

                        datasets: [
                            {
                                label: 'TSB',
                                fill: false,
                                lineTension: 0.1,
                                backgroundColor: 'brown',
                                borderColor: 'black',
                                borderCapStyle: 'butt',
                                borderDash: [],
                                borderDashOffset: 0.0,
                                borderJoinStyle: 'miter',
                                pointBorderColor: 'rgba(75,192,192,1)',
                                pointBackgroundColor: '#fff',
                                pointBorderWidth: 1,
                                pointHoverRadius: 5,
                                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                                pointHoverBorderColor: 'rgba(220,220,220,1)',
                                pointHoverBorderWidth: 2,
                                pointRadius: 1,
                                pointHitRadius: 10,
                                data: acwr
                            }
                        ]
                    }})

                d.session_info.forEach(function (ans) {
                    fetch("http://ec2-54-201-123-10.us-west-2.compute.amazonaws.com:5000/get_session_questions")
                        .then(response => {
                            return response.json();
                        })
                        .then(e => {
                            console.log(e)
                            e.questions.forEach(function (que) {
                                ans.answers.forEach(function (an){
                                    if(an.q_id===que.q_id)
                                    {
                                        an.qstn=que.qstn
                                    }
                                })

                            })

                        })

                    /* var athe=[];
                     d.atheletes.forEach(function(ath){
                         athe.push( { value: ath.name, label:ath.name });

                     })*/

                })
                var question1=[];
                var question2=[];
                var question3=[];
                var question4=[];
                var question5=[];
                var question6=[];
                var question7=[];

                d.session_info.forEach(function (ans){
                    ans.answers.forEach(function (an){
                  if(an.q_id===0)
                        question1.push(an.val)
                        if(an.q_id===1)
                            question2.push(an.val)
                        if(an.q_id===2)
                            question3.push(an.val)
                        if(an.q_id===3)
                            question4.push(an.val)
                        if(an.q_id===4)
                            question5.push(an.val)
                        if(an.q_id===5)
                            question6.push(an.val)
                        if(an.q_id===6)
                            question7.push(an.val)


                    })

                });

                this.setState(
                    {data4:{
                    labels:list,

                        datasets: [
                        {
                            label: 'Mood',
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: 'brown',
                            borderColor: 'black',
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: 'rgba(75,192,192,1)',
                            pointBackgroundColor: '#fff',
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                            pointHoverBorderColor: 'rgba(220,220,220,1)',
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: question1
                        }
                    ]
                },
                        data5:{
                            labels:list,

                            datasets: [
                                {
                                    label: 'Energy Level',
                                    fill: false,
                                    lineTension: 0.1,
                                    backgroundColor: 'brown',
                                    borderColor: 'black',
                                    borderCapStyle: 'butt',
                                    borderDash: [],
                                    borderDashOffset: 0.0,
                                    borderJoinStyle: 'miter',
                                    pointBorderColor: 'rgba(75,192,192,1)',
                                    pointBackgroundColor: '#fff',
                                    pointBorderWidth: 1,
                                    pointHoverRadius: 5,
                                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                                    pointHoverBorderWidth: 2,
                                    pointRadius: 1,
                                    pointHitRadius: 10,
                                    data: question2
                                }
                            ]
                        },
                        data6:{
                            labels:list,

                            datasets: [
                                {
                                    label: 'Sleep quality',
                                    fill: false,
                                    lineTension: 0.1,
                                    backgroundColor: 'brown',
                                    borderColor: 'black',
                                    borderCapStyle: 'butt',
                                    borderDash: [],
                                    borderDashOffset: 0.0,
                                    borderJoinStyle: 'miter',
                                    pointBorderColor: 'rgba(75,192,192,1)',
                                    pointBackgroundColor: '#fff',
                                    pointBorderWidth: 1,
                                    pointHoverRadius: 5,
                                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                                    pointHoverBorderWidth: 2,
                                    pointRadius: 1,
                                    pointHitRadius: 10,
                                    data: question3
                                }
                            ]
                        },
                        data7:{
                            labels:list,

                            datasets: [
                                {
                                    label: 'Sleep duration',
                                    fill: false,
                                    lineTension: 0.1,
                                    backgroundColor: 'brown',
                                    borderColor: 'black',
                                    borderCapStyle: 'butt',
                                    borderDash: [],
                                    borderDashOffset: 0.0,
                                    borderJoinStyle: 'miter',
                                    pointBorderColor: 'rgba(75,192,192,1)',
                                    pointBackgroundColor: '#fff',
                                    pointBorderWidth: 1,
                                    pointHoverRadius: 5,
                                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                                    pointHoverBorderWidth: 2,
                                    pointRadius: 1,
                                    pointHitRadius: 10,
                                    data: question4
                                }
                            ]
                        },
                        data8:{
                            labels:list,

                            datasets: [
                                {
                                    label: 'Stress level',
                                    fill: false,
                                    lineTension: 0.1,
                                    backgroundColor: 'brown',
                                    borderColor: 'black',
                                    borderCapStyle: 'butt',
                                    borderDash: [],
                                    borderDashOffset: 0.0,
                                    borderJoinStyle: 'miter',
                                    pointBorderColor: 'rgba(75,192,192,1)',
                                    pointBackgroundColor: '#fff',
                                    pointBorderWidth: 1,
                                    pointHoverRadius: 5,
                                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                                    pointHoverBorderWidth: 2,
                                    pointRadius: 1,
                                    pointHitRadius: 10,
                                    data: question5
                                }
                            ]
                        },
                        data9:{
                            labels:list,

                            datasets: [
                                {
                                    label: 'Muscle Prep',
                                    fill: false,
                                    lineTension: 0.1,
                                    backgroundColor: 'brown',
                                    borderColor: 'black',
                                    borderCapStyle: 'butt',
                                    borderDash: [],
                                    borderDashOffset: 0.0,
                                    borderJoinStyle: 'miter',
                                    pointBorderColor: 'rgba(75,192,192,1)',
                                    pointBackgroundColor: '#fff',
                                    pointBorderWidth: 1,
                                    pointHoverRadius: 5,
                                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                                    pointHoverBorderWidth: 2,
                                    pointRadius: 1,
                                    pointHitRadius: 10,
                                    data: question6
                                }
                            ]
                        },
                        data10:{
                            labels:list,

                            datasets: [
                                {
                                    label: 'Session Rating',
                                    fill: false,
                                    lineTension: 0.1,
                                    backgroundColor: 'brown',
                                    borderColor: 'black',
                                    borderCapStyle: 'butt',
                                    borderDash: [],
                                    borderDashOffset: 0.0,
                                    borderJoinStyle: 'miter',
                                    pointBorderColor: 'rgba(75,192,192,1)',
                                    pointBackgroundColor: '#fff',
                                    pointBorderWidth: 1,
                                    pointHoverRadius: 5,
                                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                                    pointHoverBorderWidth: 2,
                                    pointRadius: 1,
                                    pointHitRadius: 10,
                                    data: question7
                                }
                            ]
                        }})







            })
        // An object with two keys,
        // 'startDate' and 'endDate' which are Momentjs objects.
    }


    componentWillMount(){



       // this.setState(initialState);

        fetch(" http://ec2-54-201-123-10.us-west-2.compute.amazonaws.com:5000/get_athletes_for_coach?coachid=dev1234")
            .then(response => {
                return response.json();

            })
            .then(d => {
                console.log(d)
                var athe=[];
                d.atheletes.forEach(function(ath){
                    athe.push( { value: ath.id, label:ath.name });

                })
                console.log(athe)
                this.setState({
                    options:athe,
                    selectedOption:athe[0]
                })
                if(this.state.selectedOption)
                    fetch("http://ec2-54-201-123-10.us-west-2.compute.amazonaws.com:5000/get_forecast?userid="+this.state.selectedOption.value+"&start_date=05-08-2016")
                        .then(response => {
                            return response.json();

                        })
                        .then(d => {
                            console.log(d)
                            var forecast=[];
                            d.forecast.forEach(function(ath){
                                forecast.push( ath);

                            })
                            var list2=[];
                            for(var i=10;i<31;i++)
                            {
                                list2.push('08-'+i+'-2016')
                            }
                            // console.log(athe)
                            this.setState({
                                forecastdata:{
                                    labels:list2,

                                    datasets: [
                                        {
                                            label: 'forecasted acwr for the next 21 days',
                                            fill: false,
                                            lineTension: 0.1,
                                            backgroundColor: 'brown',
                                            borderColor: 'black',
                                            borderCapStyle: 'butt',
                                            borderDash: [],
                                            borderDashOffset: 0.0,
                                            borderJoinStyle: 'miter',
                                            pointBorderColor: 'rgba(75,192,192,1)',
                                            pointBackgroundColor: '#fff',
                                            pointBorderWidth: 1,
                                            pointHoverRadius: 5,
                                            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                                            pointHoverBorderColor: 'rgba(220,220,220,1)',
                                            pointHoverBorderWidth: 2,
                                            pointRadius: 1,
                                            pointHitRadius: 10,
                                            data: forecast
                                        }
                                    ]
                                }})

                        })



                    })










    }
    componentDidMount()
{

    var _this = this;
    var newData = [];
    newData = _this.state.data;


////////console.log(database.ref(`/users`).once('value'))


    // var value;

    fetch("http://ec2-54-201-123-10.us-west-2.compute.amazonaws.com:5000/get_session_info?userid=2134225533&start_date=06-07-2015&end_date=07-07-2015")
        .then(response => {
            return response.json();
        })
        .then(d => {
            console.log(d)


            d.session_info.forEach(function (ans) {
                fetch("http://ec2-54-201-123-10.us-west-2.compute.amazonaws.com:5000/get_session_questions")
                    .then(response => {
                        return response.json();
                    })
                    .then(e => {
                        console.log(e)
                        e.questions.forEach(function (que) {
                            ans.answers.forEach(function (an) {
                                if (an.q_id === que.q_id) {
                                    an.qstn = que.qstn
                                }
                            })

                        })

                    })

                /* var athe=[];
                 d.atheletes.forEach(function(ath){
                     athe.push( { value: ath.name, label:ath.name });

                 })*/

            })
            console.log(d)

        })





    }




/*
        componentDidMount(){
      setInterval(() => this.setState({ Car: Math.random() }), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }*/
    render() {
        return (
            <div className="card">

                <Selectv
                    {...this.state}
                    ismulti={false}

                    handleselectChange ={this.handleselectChange}/>


<div className='row'>
                <div className='col-md-3'>
                    <Line data={this.state.data4} />

                </div>
    <div className='col-md-3'>
        <Line data={this.state.data4} />

    </div>
    <div className='col-md-3'>
        <Line data={this.state.data5} />

    </div>
    <div className='col-md-3'>
        <Line data={this.state.data6} />

    </div>
    <div className='col-md-3'>
        <Line data={this.state.data7} />

    </div>
    <div className='col-md-3'>
        <Line data={this.state.data8} />

    </div>
    <div className='col-md-3'>
        <Line data={this.state.data9} />

    </div>
    <div className='col-md-3'>
        <Line data={this.state.data10} />

    </div>
</div>


                <br></br>
                <br></br>
                <br></br>
                <div className='row'>
                    <div className='col-md-8'>
                <DateRange
                    onInit={this.handleSelect}
                    onChange={this.handleSelect}
                />
                    </div>
                    <div className='col-md-4'>
                        <Line data={this.state.data2} />
                        <Line data={this.state.data3} />
                    </div>

                </div>
                <br></br>
                <br></br>
                <br></br>

                <p><b>Drag the slider to check between your sessions</b></p>

                <div class="row">
                    <div class="col-md-1"></div>
                    <div class="col-md-10">
                        <InputRange
                            draggableTrack
                            maxValue={this.state.maxValue}
                            minValue={0}
                            onChange={value => this.changerange(value)}
                            onChangeComplete={value => console.log(value)}
                            value={this.state.value5} />
                    </div>
                    <div className="col-md-1"></div>
                </div>
                {/*    <div className="content">

      <ChartistGraph data={dataSales} options={optionsSales} type="Line" className="ct-chart" />
    </div>*/}

                <Line data={this.state} />

                <Line data={this.state.forecastdata} />

                <div className="legend">
                    <div className="item">
                        <i style={{marginLeft: 40}} className="fa fa-circle text-info"></i> <img
                        src="http://www.stickpng.com/assets/images/596ce37bed07ad6118f998e9.png"
                        style={{width: 40}}></img>

                        <i className="fa fa-circle text-danger"></i> <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsev212NgQgIl_rIur0sypCFuhWwkHn6o8dxP6rDl-j0wKm-GIpxfzbR4u"
                        style={{height: 40}}></img>


                        <i className="fa fa-circle text-warning"></i> <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Running_icon_-_Noun_Project_22889.svg/1024px-Running_icon_-_Noun_Project_22889.svg.png"
                        style={{width: 40}}></img>


                        <i style={{marginLeft: 40}} className="fa fa-history"></i> Updated 3 minutes ago

                        <b style={{marginLeft: 40, fontSize: 20}}> Training loads</b>
                    </div>
                </div>


            </div>
        )
    }

};

export default SalesChart;