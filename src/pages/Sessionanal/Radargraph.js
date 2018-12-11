import React, {Component} from 'react';
import ChartistGraph from 'react-chartist';
import DonutChart from 'react-donut-chart';
import SalesChart from "./SalesChart";
import {database} from "../../firebase/firebase";
import {Doughnut} from 'react-chartjs-2';
import ReactGauge from 'react-gauge-capacity';
import {Radar} from 'react-chartjs-2';
import MultiToggle from 'react-multi-toggle';
import 'react-multiselect-box/build/css/index.css';
import Selectv from "./Selectv";



// Chartist.Pie('#chartPreferences', dataPreferences, optionsPreferences);

// Chartist.Pie('#chartPreferences', {
// labels: ['62%','32%','6%'],


const groupOptions = [
    {
        displayName: 'Past week',
        value: 1
    },
    {
        displayName: 'month',
        value: 2
    },
    {
        displayName: 'year',
        value: 3
    }

];

class Radargraph extends Component {


    constructor(props) {
        super(props);
        this.state= {
            groupSize: 2,
            labels: ['min_sit', 'min_slow_act', 'min_of_mod_act', 'min_of_intense_act', 'calories_act'],
            datasets: [
                {
                    label: 'Past Week',
                    backgroundColor: 'rgb(255,160,122)',
                    borderColor: 'rgb(255,0,0)',
                    pointBackgroundColor: 'rgba(179,181,198,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(179,181,198,1)',
                    data: [65, 59, 90, 81, 56]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    pointBackgroundColor: 'rgba(255,99,132,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(255,99,132,1)',
                    data: [28, 48, 40, 19, 96]
                }
            ]
            ,
            selectedOption: null,

            options: [/*{value: "2134225533", label: "Jason Smith"},
{value: "1342252213", label: "Rita Munez"},
{value: "1673662323", label: "Roger Cage"},
{value: "9978656676", label: "Laurine Little"},
{value: "1414252511", label: "Mac Mason"}*/]
        };

        this.weekclick = this.weekclick.bind(this);
        this.monthclick = this.monthclick.bind(this);
        this.yearclick = this.yearclick.bind(this);
        this.combinedclick = this.combinedclick.bind(this);
        this.handleselectChange=this.handleselectChange.bind(this);


    }
    handleselectChange = (selectedOption) => {

        this.setState({

            selectedOption:selectedOption[0]
        })
        var minutes_sitting=0,minutes_of_intense_activity=0,minutes_of_moderate_activity=0,minutes_of_slow_activity=0,calories_activty=0;

        fetch("http://ec2-54-201-123-10.us-west-2.compute.amazonaws.com:5000/get_daily_health_data?userid="+this.state.selectedOption.value+"&start_date=10-29-2015&end_date=11-15-2015")
            .then(response => {
                return response.json();
            })
            .then(d => {
                Object.values(d).forEach(function(obj)
                {
                    minutes_sitting=minutes_sitting+obj.minutes_sitting;
                    minutes_of_intense_activity=minutes_of_intense_activity+obj.minutes_of_intense_activity;
                    minutes_of_slow_activity=minutes_of_slow_activity+obj.minutes_of_slow_activity;
                    minutes_of_moderate_activity=minutes_of_moderate_activity+obj.minutes_of_moderate_activity;
                    calories_activty=calories_activty+obj.calories_activty;

                })

                //console.log(minutes_sitting,minutes_of_intense_activity,minutes_of_slow_activity,minutes_of_moderate_activity,calories_activty)


                var datasets=[{
                    label: 'Past Week',
                    backgroundColor: 'rgb(255,160,122)',
                    borderColor: 'rgb(255,0,0)',
                    pointBackgroundColor: 'rgba(179,181,198,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(179,181,198,1)',
                    data: [minutes_sitting/ Object.values(d).length, minutes_of_moderate_activity/Object.values(d).length, minutes_of_slow_activity/Object.values(d).length, minutes_of_intense_activity/Object.values(d).length, calories_activty/Object.values(d).length]
                },this.state.datasets]

                this.setState({datasets:datasets})

            })
    }
    componentWillMount() {

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
            })
          //  this.setState(initialState);

            var minutes_sitting=0,minutes_of_intense_activity=0,minutes_of_moderate_activity=0,minutes_of_slow_activity=0,calories_activty=0;


        fetch("http://ec2-54-201-123-10.us-west-2.compute.amazonaws.com:5000/get_daily_health_data?userid="+this.state.selectedOption.value+"&start_date=10-29-2015&end_date=11-15-2015")
            .then(response => {
                return response.json();
            })
            .then(d => {
         Object.values(d).forEach(function(obj)
             {
                 minutes_sitting=minutes_sitting+obj.minutes_sitting;
                 minutes_of_intense_activity=minutes_of_intense_activity+obj.minutes_of_intense_activity;
                 minutes_of_slow_activity=minutes_of_slow_activity+obj.minutes_of_slow_activity;
                 minutes_of_moderate_activity=minutes_of_moderate_activity+obj.minutes_of_moderate_activity;
                 calories_activty=calories_activty+obj.calories_activty;

             })

                //console.log(minutes_sitting,minutes_of_intense_activity,minutes_of_slow_activity,minutes_of_moderate_activity,calories_activty)


                var datasets=[{
                    label: 'Past Week',
                    backgroundColor: 'rgb(255,160,122)',
                    borderColor: 'rgb(255,0,0)',
                    pointBackgroundColor: 'rgba(179,181,198,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(179,181,198,1)',
                    data: [minutes_sitting/ Object.values(d).length, minutes_of_moderate_activity/Object.values(d).length, minutes_of_slow_activity/Object.values(d).length, minutes_of_intense_activity/Object.values(d).length, calories_activty/Object.values(d).length]
                }]

               this.setState({datasets:datasets})

            })

    }


    onGroupSizeSelect = value => this.setState({ groupSize: value });
    weekclick(e){


        var minutes_sitting=0,minutes_of_intense_activity=0,minutes_of_moderate_activity=0,minutes_of_slow_activity=0,calories_activty=0;


        fetch("http://ec2-54-201-123-10.us-west-2.compute.amazonaws.com:5000/get_daily_health_data?userid=2134225533&start_date=11-08-2015&end_date=11-15-2015")
            .then(response => {
                return response.json();
            })
            .then(d => {
                Object.values(d).forEach(function(obj)
                {
                    minutes_sitting=minutes_sitting+obj.minutes_sitting;
                    minutes_of_intense_activity=minutes_of_intense_activity+obj.minutes_of_intense_activity;
                    minutes_of_slow_activity=minutes_of_slow_activity+obj.minutes_of_slow_activity;
                    minutes_of_moderate_activity=minutes_of_moderate_activity+obj.minutes_of_moderate_activity;
                    calories_activty=calories_activty+obj.calories_activty;

                })

                //console.log(minutes_sitting,minutes_of_intense_activity,minutes_of_slow_activity,minutes_of_moderate_activity,calories_activty)


                var datasets=[{
                    label: 'Past Week',
                    backgroundColor: 'rgb(255,160,122)',
                    borderColor: 'rgb(255,0,0)',
                    pointBackgroundColor: 'rgba(179,181,198,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(179,181,198,1)',
                    data: [minutes_sitting/ Object.values(d).length, minutes_of_moderate_activity/Object.values(d).length, minutes_of_slow_activity/Object.values(d).length, minutes_of_intense_activity/Object.values(d).length, calories_activty/Object.values(d).length]
                }]

                this.setState({datasets:datasets})

            })
    }

    monthclick(e){


        var minutes_sitting=0,minutes_of_intense_activity=0,minutes_of_moderate_activity=0,minutes_of_slow_activity=0,calories_activty=0;


        fetch("http://ec2-54-201-123-10.us-west-2.compute.amazonaws.com:5000/get_daily_health_data?userid=2134225533&start_date=10-15-2015&end_date=11-15-2015")
            .then(response => {
                return response.json();
            })
            .then(d => {
                Object.values(d).forEach(function(obj)
                {
                    minutes_sitting=minutes_sitting+obj.minutes_sitting;
                    minutes_of_intense_activity=minutes_of_intense_activity+obj.minutes_of_intense_activity;
                    minutes_of_slow_activity=minutes_of_slow_activity+obj.minutes_of_slow_activity;
                    minutes_of_moderate_activity=minutes_of_moderate_activity+obj.minutes_of_moderate_activity;
                    calories_activty=calories_activty+obj.calories_activty;

                })

                //console.log(minutes_sitting,minutes_of_intense_activity,minutes_of_slow_activity,minutes_of_moderate_activity,calories_activty)


                var datasets=[{
                    label: 'Past Month',
                    backgroundColor: 'lightblue',
                    borderColor: 'blue',
                    pointBackgroundColor: 'rgba(179,181,198,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(179,181,198,1)',
                    data: [minutes_sitting/ Object.values(d).length, minutes_of_moderate_activity/Object.values(d).length, minutes_of_slow_activity/Object.values(d).length, minutes_of_intense_activity/Object.values(d).length, calories_activty/Object.values(d).length]
                }]

                this.setState({datasets:datasets})

            })
    }

    yearclick(e){


        var minutes_sitting=0,minutes_of_intense_activity=0,minutes_of_moderate_activity=0,minutes_of_slow_activity=0,calories_activty=0;


        fetch("http://ec2-54-201-123-10.us-west-2.compute.amazonaws.com:5000/get_daily_health_data?userid=2134225533&start_date=11-30-2014&end_date=11-15-2015")
            .then(response => {
                return response.json();
            })
            .then(d => {
                Object.values(d).forEach(function(obj)
                {
                    minutes_sitting=minutes_sitting+obj.minutes_sitting;
                    minutes_of_intense_activity=minutes_of_intense_activity+obj.minutes_of_intense_activity;
                    minutes_of_slow_activity=minutes_of_slow_activity+obj.minutes_of_slow_activity;
                    minutes_of_moderate_activity=minutes_of_moderate_activity+obj.minutes_of_moderate_activity;
                    calories_activty=calories_activty+obj.calories_activty;

                })

                //console.log(minutes_sitting,minutes_of_intense_activity,minutes_of_slow_activity,minutes_of_moderate_activity,calories_activty)


                var datasets=[{
                    label: 'Past Year',
                    backgroundColor: 'yellow',
                    borderColor: 'orange',
                    pointBackgroundColor: 'rgba(179,181,198,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(179,181,198,1)',
                    data: [minutes_sitting/ Object.values(d).length, minutes_of_moderate_activity/Object.values(d).length, minutes_of_slow_activity/Object.values(d).length, minutes_of_intense_activity/Object.values(d).length, calories_activty/Object.values(d).length]
                }]

                this.setState({datasets:datasets})

            })

    }

    combinedclick(e){

        var minutes_sitting=0,minutes_of_intense_activity=0,minutes_of_moderate_activity=0,minutes_of_slow_activity=0,calories_activty=0;

        var datanew=[];
        fetch("http://ec2-54-201-123-10.us-west-2.compute.amazonaws.com:5000/get_daily_health_data?userid=2134225533&start_date=11-08-2015&end_date=11-15-2015")
            .then(response => {
                return response.json();
            })
            .then(d => {
                Object.values(d).forEach(function (obj) {
                    minutes_sitting = minutes_sitting + obj.minutes_sitting;
                    minutes_of_intense_activity = minutes_of_intense_activity + obj.minutes_of_intense_activity;
                    minutes_of_slow_activity = minutes_of_slow_activity + obj.minutes_of_slow_activity;
                    minutes_of_moderate_activity = minutes_of_moderate_activity + obj.minutes_of_moderate_activity;
                    calories_activty = calories_activty + obj.calories_activty;

                })

                //console.log(minutes_sitting, minutes_of_intense_activity, minutes_of_slow_activity, minutes_of_moderate_activity, calories_activty)


                var datasets = {
                    label: 'Past Week',
                    backgroundColor: 'rgb(255,160,122)',
                    borderColor: 'rgb(255,0,0)',
                    pointBackgroundColor: 'rgba(179,181,198,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(179,181,198,1)',
                    data: [minutes_sitting / Object.values(d).length, minutes_of_moderate_activity / Object.values(d).length, minutes_of_slow_activity / Object.values(d).length, minutes_of_intense_activity / Object.values(d).length, calories_activty / Object.values(d).length]
                }
                var datanew=[];
                datanew.push(datasets)

                fetch("http://ec2-54-201-123-10.us-west-2.compute.amazonaws.com:5000/get_daily_health_data?userid=2134225533&start_date=10-15-2015&end_date=11-15-2015")
                    .then(response => {
                        return response.json();
                    })
                    .then(d => {
                        Object.values(d).forEach(function (obj) {
                            minutes_sitting = minutes_sitting + obj.minutes_sitting;
                            minutes_of_intense_activity = minutes_of_intense_activity + obj.minutes_of_intense_activity;
                            minutes_of_slow_activity = minutes_of_slow_activity + obj.minutes_of_slow_activity;
                            minutes_of_moderate_activity = minutes_of_moderate_activity + obj.minutes_of_moderate_activity;
                            calories_activty = calories_activty + obj.calories_activty;

                        })

                        //console.log(minutes_sitting, minutes_of_intense_activity, minutes_of_slow_activity, minutes_of_moderate_activity, calories_activty)


                        var datasets = {
                            label: 'Past Month',
                            backgroundColor: 'lightblue',
                            borderColor: 'blue',
                            pointBackgroundColor: 'rgba(179,181,198,1)',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: 'rgba(179,181,198,1)',
                            data: [minutes_sitting / Object.values(d).length, minutes_of_moderate_activity / Object.values(d).length, minutes_of_slow_activity / Object.values(d).length, minutes_of_intense_activity / Object.values(d).length, calories_activty / Object.values(d).length]
                        }

                        datanew.push(datasets)

                        fetch("http://ec2-54-201-123-10.us-west-2.compute.amazonaws.com:5000/get_daily_health_data?userid=2134225533&start_date=11-30-2014&end_date=11-15-2015")
                            .then(response => {
                                return response.json();
                            })
                            .then(d => {
                                Object.values(d).forEach(function (obj) {
                                    minutes_sitting = minutes_sitting + obj.minutes_sitting;
                                    minutes_of_intense_activity = minutes_of_intense_activity + obj.minutes_of_intense_activity;
                                    minutes_of_slow_activity = minutes_of_slow_activity + obj.minutes_of_slow_activity;
                                    minutes_of_moderate_activity = minutes_of_moderate_activity + obj.minutes_of_moderate_activity;
                                    calories_activty = calories_activty + obj.calories_activty;

                                })

                                //console.log(minutes_sitting, minutes_of_intense_activity, minutes_of_slow_activity, minutes_of_moderate_activity, calories_activty)


                                var datasets = {
                                    label: 'Past Year',
                                    backgroundColor: 'yellow',
                                    borderColor: 'orange',
                                    pointBackgroundColor: 'rgba(179,181,198,1)',
                                    pointBorderColor: '#fff',
                                    pointHoverBackgroundColor: '#fff',
                                    pointHoverBorderColor: 'rgba(179,181,198,1)',
                                    data: [minutes_sitting / Object.values(d).length, minutes_of_moderate_activity / Object.values(d).length, minutes_of_slow_activity / Object.values(d).length, minutes_of_intense_activity / Object.values(d).length, calories_activty / Object.values(d).length]
                                }


                                datanew.push(datasets)
                                //console.log(datanew);

                                this.setState({datasets: datanew})
                            })


                    })

            })









    }



    render() {

        const { groupSize } = this.state;

        return (

            <div className="card" style={{height:'220'}}>
                <Selectv
                    {...this.state}
                    ismulti={true}

                    handleselectChange ={this.handleselectChange}/>
                <button id='week'  style={{color:'red'}} onClick={this.weekclick}>PastWeek</button>
                <button  id='month' onClick={this.monthclick}>PastMonth</button>
                <button id='year' onClick={this.yearclick}>PastYear</button>
                <button id='combined' onClick={this.combinedclick}>Combined</button>


                <Radar width={349}  data={this.state} />
            </div>

        );
    }
};

export default Radargraph;