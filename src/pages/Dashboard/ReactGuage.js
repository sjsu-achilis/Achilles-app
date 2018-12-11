import React, {Component} from 'react';
import ChartistGraph from 'react-chartist';
import DonutChart from 'react-donut-chart';
import SalesChart from "./SalesChart";
import {database} from "../../firebase/firebase";
import {Doughnut} from 'react-chartjs-2';
import ReactGauge from 'react-gauge-capacity';
import {Line} from 'react-chartjs-2';
import Selectv from "./Selectv";


// Chartist.Pie('#chartPreferences', dataPreferences, optionsPreferences);

// Chartist.Pie('#chartPreferences', {
// labels: ['62%','32%','6%'],

const initialState = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    data:[100,90,80,95,99],
    datasets: [
        {
            label: 'Distance Covered',
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
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};



let contWidth = 300;
let contHeight = 180;
let gaugeRadius = 115;
let centerLineHeight = 30;
let options = {
    isInnerNumbers: false,
    aperture: 180,
    radius : gaugeRadius,
    tickOffset: 20,
    arcStrokeWidth: 40,
    miniTickLength: 1,
    miniTickStrokeWidth: 1,
    tickLabelOffset: 12,
    scaleDivisionNumber: 5,
    centralCircleRadius: 10,
    marks: ["0", null, null, null, null, null , "6km", null, "8km",  null,"10km",  null, "12km", null, "16km", null,null, null , null, null, "20km"],
    contentWidth: contWidth,
    svgContainerWidth: contWidth,
    svgContainerHeight: contHeight,
    arrowValue: localStorage['distance']/20000,
    gaugeCenterLineHeight: centerLineHeight,
    viewBox: "30 0 300 200",
    ranges: [{
        start: 0,
        end: 72/180,
        color: "#f3595b"
    },
        {
            start: 58/180,
            end: 81/180,
            color: "#ffc875"
        },
        {
            start: 81/180,
            end: 90/180,
            color: "#83d7c0"
        },
        {
            start: 90/180,
            end: 90/180,
            color: "#83d7c0"
        },
        {
            start: 90/180,
            end: 99/180,
            color: "#83d7c0"
        },
        {
            start: 99/180,
            end: 122/180,
            color: "#ffc875"
        },
        {
            start: 122/180,
            end: 180/180,
            color: "#f3595b"
        }]

}



const getState = () => (


    {

        isInnerNumbers: false,
        aperture: 180,
        radius : 115,
        tickOffset: 20,
        arcStrokeWidth: 40,
        miniTickLength: 1,
        miniTickStrokeWidth: 1,
        tickLabelOffset: 12,
        scaleDivisionNumber: 5,
        centralCircleRadius: 10,
        marks: ["0", null, null, null, null, null , "6km", null, "8km",  null,"10km",  null, "12km", null, "16km", null,null, null , null, null, "20km"],
        contentWidth: 300,
        svgContainerWidth: 300,
        svgContainerHeight: 180,
        arrowValue: 30/180,
        gaugeCenterLineHeight: 30,
        viewBox: "30 0 300 200",
        ranges: [{
            start: 0,
            end: 72/180,
            color: "#f3595b"
        },
            {
                start: 58/180,
                end: 81/180,
                color: "#ffc875"
            },
            {
                start: 81/180,
                end: 90/180,
                color: "#83d7c0"
            },
            {
                start: 90/180,
                end: 90/180,
                color: "#83d7c0"
            },
            {
                start: 90/180,
                end: 99/180,
                color: "#83d7c0"
            },
            {
                start: 99/180,
                end: 122/180,
                color: "#ffc875"
            },
            {
                start: 122/180,
                end: 180/180,
                color: "#f3595b"
            }]

    }
);
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






class ReactGuage extends Component {


    constructor(props) {
        super(props);

    }
    componentWillMount(){
        this.setState(initialState);
    }
    componentDidMount(){

        var _this = this;
        var newData = [];
        newData=_this.state.data;
        setInterval(function(){
            var oldDataSet = _this.state.datasets[0];

            var newlabel=[];

//console.log(database.ref(`/users`).once('value'))



            // var value;

            database.ref(`/users/`).once('value').then(snapshot => {


                if(snapshot.val()) {
                    //console.log(snapshot.val()['2134225533'].heart_rate);
                    localStorage.setItem('distance',snapshot.val()['2134225533'].distance_covered)
                }
            });

            for(var x=_this.state.labels.length-1; x>0; x--) {
                //console.log(newData[x])
                newData[_this.state.labels.length-1-x]=newData[_this.state.labels.length-1-x+1];

            }

            newData[_this.state.labels.length-1]=localStorage['distance']


            //console.log(newData);

            var d = new Date
            for(var x=0; x< _this.state.labels.length; x++){
                d.setSeconds(d.getSeconds() -(_this.state.labels.length-1-x));
                newlabel.push(d.getHours()+' '+d.getMinutes() + ':' + d.getSeconds());
            }

            var newDataSet = {
                ...oldDataSet
            };

            newDataSet.data = newData;
            // newDataSet.labels=newlabel;

            var newState = {
                ...initialState,
                datasets: [newDataSet],
                labels:newlabel,
                data:newData
            };

            _this.setState(newState);




        }, 400);
    }




    render() {

        return (

            <div className="card">
            <Selectv/>

                <Line data={this.state} />
            </div>

        );
    }
};

export default ReactGuage;