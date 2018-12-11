import React, {Component} from 'react';
import ChartistGraph from 'react-chartist';
import DonutChart from 'react-donut-chart';
import SalesChart from "./SalesChart";
import {database} from "../../firebase/firebase";
import {Doughnut} from 'react-chartjs-2';
import Selectv from "./Selectv";



// Chartist.Pie('#chartPreferences', dataPreferences, optionsPreferences);

// Chartist.Pie('#chartPreferences', {
// labels: ['62%','32%','6%'],


    let dataPreferences = {
        labels: ['62%', '32%', '6%'],
        series: [62, 32, 6]
    };



const getState = () => ({
    labels: [
        'Steps Covered',
        ''
    ],
    datasets: [{
        data: [localStorage['steps'], 10000],
        backgroundColor: [
            '#36A2EB',
            '#CCC'


        ],
        hoverBackgroundColor: [

            '#36A2EB',
            '#FF6384'
        ]
    }]
});
    let optionsPreferences = {
        donut: false,
        donutWidth: 40,
        startAngle: 0,
        total: 100,
        showLabel: true,
        axisX: {
            showGrid: false,
            offset: 0
        },
        axisY: {
            offset: 0
        }
    };

const initialState = {
    value:25

}




    class EmailStatistic extends Component {


        constructor(props) {
            super(props);
        }

        componentWillMount() {
            setInterval(() => {
            database.ref(`/users/`).once('value').then(snapshot => {


                if(snapshot.val()) {
                   // //console.log(snapshot.val()['2134225533'].heart_rate);
                    localStorage.setItem('steps',snapshot.val()['2134225533'].no_of_steps)

                    localStorage.setItem('steps',snapshot.val()['2134225533'].no_of_steps)

                        this.setState(getState());

                }
            });
            }, 1000);
        }




        render() {

            return (

                <div style={{height: 250, width: 320}} className="card">

                    <div className="content">
                        <Selectv/>
                        <img style={{
                            height: 45,
                            marginTop: 140,
                            position: 'absolute',
                            marginLeft: 108
                        }} src='https://melbournechapter.net/images/footsteps-clipart-walk-way-3.png'></img>



                       <b> <h5 style={{

                            marginTop: 120,
                            color:'red',

                            position: 'absolute',
                            marginLeft: 110
                       }}>{localStorage['steps']}</h5></b>


                            <h5>Steps Covered</h5>
                            <Doughnut
                                width={250}

                                data={this.state} />




                    </div>

                </div>

            );
        }
    };

export default EmailStatistic;