import React, {Component} from 'react';
import ChartistGraph from 'react-chartist';
import Chartist from 'chartist';
import RTChart from 'react-rt-chart';
import {Line} from 'react-chartjs-2';

import {database} from '../../firebase/firebase';
import Selectv from "./Selectv";



const initialState = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','January', 'February', 'March', 'April', 'May', 'June', 'July','January', 'February', 'March', 'April', 'May', 'June', 'July','January', 'February', 'March', 'April', 'May', 'June', 'July','January', 'February', 'March', 'April', 'May', 'June', 'July','January', 'February', 'March', 'April', 'May', 'June', 'July','January', 'February', 'March', 'April', 'May', 'June', 'July','January', 'February', 'March', 'April', 'May', 'June', 'July','January', 'February', 'March', 'April', 'May', 'June', 'July'],
    data:[100,90,80,95,99,100,101,100,90,80,95,99,100,101,100,90,80,95,99,100,101,100,90,80,95,99,100,101,100,90,80,95,99,100,101,100,90,80,95,99,100,101],
    datasets: [
        {
            label: 'My First dataset',
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
        },
        {
            label: 'Second athelete',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'orange',
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
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ],
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
        this.state={ labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','January', 'February', 'March', 'April', 'May', 'June', 'July','January', 'February', 'March', 'April', 'May', 'June', 'July','January', 'February', 'March', 'April', 'May', 'June', 'July','January', 'February', 'March', 'April', 'May', 'June', 'July','January', 'February', 'March', 'April', 'May', 'June', 'July','January', 'February', 'March', 'April', 'May', 'June', 'July','January', 'February', 'March', 'April', 'May', 'June', 'July','January', 'February', 'March', 'April', 'May', 'June', 'July'],
            data:[100,90,80,95,99,100,101,100,90,80,95,99,100,101,100,90,80,95,99,100,101,100,90,80,95,99,100,101,100,90,80,95,99,100,101,100,90,80,95,99,100,101],
            datasets: [
                {
                    label: 'My First dataset',
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
            ],
            selectedOption: null,

            options: [{value: "2134225533", label: "Jason Smith"},
                {value: "1342252213", label: "Rita Munez"},
                {value: "1673662323", label: "Roger Cage"},
                {value: "9978656676", label: "Laurine Little"},
                {value: "1414252511", label: "Mac Mason"}]}

        this.handleselectChange=this.handleselectChange.bind(this)
    }
    handleselectChange = (selectedOption) => {
        //this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);

        this.setState({selectedOption});
            var _this=this;
            var newData=_this.state.data;
            setInterval(function(){

                var oldDataSet = _this.state.datasets[1];

                var newlabel=[];

//////console.log(database.ref(`/users`).once('value'))



                // var value;

                database.ref(`/users/`).once('value').then(snapshot => {


                    if(snapshot.val()) {
                       // console.log(snapshot.val(),_this.state.selectedOption[0]);
                        localStorage.setItem('heart_rate_2',snapshot.val()[_this.state.selectedOption.value].heart_rate)
                    }
                });

                for(var x=_this.state.labels.length-1; x>0; x--) {
                    ////console.log(newData[x])
                    newData[x]=newData[x-1];

                }

                newData[0]=localStorage['heart_rate_2']


                ////console.log(newData);

                var d = new Date
                for(var x=0; x< _this.state.labels.length; x++){
                    d.setSeconds(d.getSeconds() -(x));
                    newlabel.push(d.getHours()+' '+d.getMinutes() + ':' + d.getSeconds());
                }

                var newDataSet = {
                    ...oldDataSet
                };

                newDataSet.data = newData;
             //   newDataSet.label=_this.state.selectedOption[0].label;
                // newDataSet.labels=newlabel;
                const initialStat=_this.state;

                var newState = {
                    ...initialStat,
                    datasets: [newDataSet],
                    labels:newlabel,
                    data:newData
                };

                _this.setState(newState);




            }, 1000);

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
                    athe.push( { value: ath.name, label:ath.name });

                })
                console.log(athe)
                this.setState({
                    options:athe,
                    selectedOption:athe[0]
                })
            })
    }
/*
    handleselectChange(){
        console.log
    }*/
    componentDidMount(){

        var _this = this;
        var newData = [];
        newData=_this.state.data;
        setInterval(function(){
            var oldDataSet = _this.state.datasets[0];

            var newlabel=[];

//////console.log(database.ref(`/users`).once('value'))



               // var value;

                database.ref(`/users/`).once('value').then(snapshot => {


                    if(snapshot.val()) {
                        ////console.log(snapshot.val()['2134225533'].heart_rate);
                        localStorage.setItem('heart_rate',snapshot.val()['2134225533'].heart_rate)
                    }
                });

            for(var x=_this.state.labels.length-1; x>0; x--) {
                ////console.log(newData[x])
                newData[x]=newData[x-1];

            }

            newData[0]=localStorage['heart_rate']


            ////console.log(newData);

            var d = new Date
            for(var x=0; x< _this.state.labels.length; x++){
                d.setSeconds(d.getSeconds() -(x));
                newlabel.push(d.getHours()+' '+d.getMinutes() + ':' + d.getSeconds());
            }

            var newDataSet = {
                ...oldDataSet
            };

            newDataSet.data = newData;
           // newDataSet.labels=newlabel;
            const initialStat=this.state;

            var newState = {
                ...initialStat,
                datasets: [newDataSet],
                labels:newlabel,
                data:newData
            };

            _this.setState(newState);




        }, 1000);




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
                    options:athe
                })
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
                {/*    <div className="content">
      <ChartistGraph data={dataSales} options={optionsSales} type="Line" className="ct-chart" />
    </div>*/}

                <Line data={this.state} />

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

                        <b style={{marginLeft: 40, fontSize: 20}}>Heart Rate</b>
                    </div>
                </div>


            </div>
        )
    }

};

export default SalesChart;