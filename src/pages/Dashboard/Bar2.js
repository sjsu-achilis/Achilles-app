import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2'
import Selectv from "./Selectv";

const data = {
    labels: ['June','July','August','Sep','Oct','Nov','Dec'],
    datasets: [
        {
            label: 'Step Count',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40],
        }
    ]
};

class Bar2 extends Component {

    constructor(props) {
        super(props);

        this.state={
            labels: ['June','July','August','Sep','Oct','Nov','Dec'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: [65, 59, 80, 81, 56, 55, 40]
                }
            ]
        }
    }

    componentWillMount() {
        var minutes_sitting = 0, minutes_of_intense_activity = 0, minutes_of_moderate_activity = 0,
            minutes_of_slow_activity = 0, calories_activty = 0;

        fetch("http://ec2-54-201-123-10.us-west-2.compute.amazonaws.com:5000/get_daily_health_data?userid=2134225533&start_date=10-15-2015&end_date=11-15-2015")
            .then(response => {
                return response.json();
            })
            .then(d => {
                Object.values(d).forEach(function (obj) {
                    minutes_sitting = minutes_sitting + obj.steps;


                })


                var minutes_sitting6 = 0;
                fetch("http://ec2-54-201-123-10.us-west-2.compute.amazonaws.com:5000/get_daily_health_data?userid=2134225533&start_date=9-15-2015&end_date=10-15-2015")
                    .then(response => {
                        return response.json();
                    })
                    .then(d => {
                        Object.values(d).forEach(function (obj) {
                            minutes_sitting6 = minutes_sitting6 + obj.steps;


                        })


                        // this.setState({'datasets':datasets})


                        var minutes_sitting5 = 0;
                        fetch("http://ec2-54-201-123-10.us-west-2.compute.amazonaws.com:5000/get_daily_health_data?userid=2134225533&start_date=8-15-2015&end_date=9-15-2015")
                            .then(response => {
                                return response.json();
                            })
                            .then(d => {
                                Object.values(d).forEach(function (obj) {
                                    minutes_sitting5 = minutes_sitting5 + obj.steps;


                                })


                                var minutes_sitting5 = 0;
                                fetch("http://ec2-54-201-123-10.us-west-2.compute.amazonaws.com:5000/get_daily_health_data?userid=2134225533&start_date=8-15-2015&end_date=9-15-2015")
                                    .then(response => {
                                        return response.json();
                                    })
                                    .then(d => {
                                        Object.values(d).forEach(function (obj) {
                                            minutes_sitting5 = minutes_sitting5 + obj.steps;


                                        })

                                        var minutes_sitting4 = 0;
                                        fetch("http://ec2-54-201-123-10.us-west-2.compute.amazonaws.com:5000/get_daily_health_data?userid=2134225533&start_date=7-15-2015&end_date=8-15-2015")
                                            .then(response => {
                                                return response.json();
                                            })
                                            .then(d => {
                                                Object.values(d).forEach(function (obj) {
                                                    minutes_sitting4 = minutes_sitting4 + obj.steps;


                                                })
                                                var minutes_sitting3 = 0;
                                                fetch("http://ec2-54-201-123-10.us-west-2.compute.amazonaws.com:5000/get_daily_health_data?userid=2134225533&start_date=6-15-2015&end_date=7-15-2015")
                                                    .then(response => {
                                                        return response.json();
                                                    })
                                                    .then(d => {
                                                        Object.values(d).forEach(function (obj) {
                                                            minutes_sitting3 = minutes_sitting3 + obj.steps;


                                                        })
                                                        var minutes_sitting2 = 0;
                                                        fetch("http://ec2-54-201-123-10.us-west-2.compute.amazonaws.com:5000/get_daily_health_data?userid=2134225533&start_date=5-15-2015&end_date=6-15-2015")
                                                            .then(response => {
                                                                return response.json();
                                                            })
                                                            .then(d => {
                                                                Object.values(d).forEach(function (obj) {
                                                                    minutes_sitting2 = minutes_sitting2 + obj.steps;


                                                                })

                                              var dataset= [
                                                                    {
                                                                        label: 'Steps walked',
                                                                        backgroundColor: 'rgba(255,99,132,0.2)',
                                                                        borderColor: 'rgba(255,99,132,1)',
                                                                        borderWidth: 1,
                                                                        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                                                                        hoverBorderColor: 'rgba(255,99,132,1)',
                                                                        data: [minutes_sitting, minutes_sitting6,minutes_sitting5,minutes_sitting4,minutes_sitting3,minutes_sitting2 ]
                                                                    }
                                                                ]
                                                               // console.log(minutes_sitting3, minutes_of_intense_activity, minutes_of_slow_activity, minutes_of_moderate_activity, calories_activty)
                                                                this.setState({'datasets':dataset})
                                                            });



                                                        //var data=this.state.datasets.data;
                                                        // data.push(minutes_sitting4)


                                                        // console.log(minutes_sitting4, minutes_of_intense_activity, minutes_of_slow_activity, minutes_of_moderate_activity, calories_activty)
                                                    });


                                                // console.log(minutes_sitting5, minutes_of_intense_activity, minutes_of_slow_activity, minutes_of_moderate_activity, calories_activty)

                                            });

                                        //this.setState({'datasets':datasets})

                                        //  console.log(minutes_sitting5, minutes_of_intense_activity, minutes_of_slow_activity, minutes_of_moderate_activity, calories_activty)
                                    });

                                //  console.log(minutes_sitting6, minutes_of_intense_activity, minutes_of_slow_activity, minutes_of_moderate_activity, calories_activty)
                            });
                    });


                /*
                        var minutes_sitting5=0;
                        fetch("http://ec2-54-201-123-10.us-west-2.compute.amazonaws.com:5000/get_daily_health_data?userid=2134225533&start_date=8-15-2015&end_date=9-15-2015")
                            .then(response => {
                                return response.json();
                            })
                            .then(d => {
                                Object.values(d).forEach(function (obj) {
                                    minutes_sitting5 = minutes_sitting5 + obj.steps;


                                })

                                var data=this.state.datasets.data;

                                var data=this.state.datasets.data;
                                console.log(this.state.datasets,data.split[' '])
                                data.push(minutes_sitting5)

                                var datasets= [
                                    {
                                        label: 'My First dataset',
                                        backgroundColor: 'rgba(255,99,132,0.2)',
                                        borderColor: 'rgba(255,99,132,1)',
                                        borderWidth: 1,
                                        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                                        hoverBorderColor: 'rgba(255,99,132,1)',
                                        data: data     }
                                ]


                                this.setState({'datasets':datasets})

                                console.log(minutes_sitting5, minutes_of_intense_activity, minutes_of_slow_activity, minutes_of_moderate_activity, calories_activty)
                            });


                        var minutes_sitting4=0;
                        fetch("http://ec2-54-201-123-10.us-west-2.compute.amazonaws.com:5000/get_daily_health_data?userid=2134225533&start_date=7-15-2015&end_date=8-15-2015")
                            .then(response => {
                                return response.json();
                            })
                            .then(d => {
                                Object.values(d).forEach(function (obj) {
                                    minutes_sitting4 = minutes_sitting4 + obj.steps;


                                })
                                var data=this.state.datasets.data;
                                data.push(minutes_sitting4)

                                var datasets= [
                                    {
                                        label: 'My First dataset',
                                        backgroundColor: 'rgba(255,99,132,0.2)',
                                        borderColor: 'rgba(255,99,132,1)',
                                        borderWidth: 1,
                                        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                                        hoverBorderColor: 'rgba(255,99,132,1)',
                                        data: data     }
                                ]


                                this.setState({'datasets':datasets})

                                console.log(minutes_sitting4, minutes_of_intense_activity, minutes_of_slow_activity, minutes_of_moderate_activity, calories_activty)
                            });



                        var minutes_sitting3=0;
                        fetch("http://ec2-54-201-123-10.us-west-2.compute.amazonaws.com:5000/get_daily_health_data?userid=2134225533&start_date=6-15-2015&end_date=7-15-2015")
                            .then(response => {
                                return response.json();
                            })
                            .then(d => {
                                Object.values(d).forEach(function (obj) {
                                    minutes_sitting3 = minutes_sitting3 + obj.steps;


                                })
                                var data=this.state.datasets.data;
                                data.push(minutes_sitting3)

                                var datasets= [
                                    {
                                        label: 'My First dataset',
                                        backgroundColor: 'rgba(255,99,132,0.2)',
                                        borderColor: 'rgba(255,99,132,1)',
                                        borderWidth: 1,
                                        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                                        hoverBorderColor: 'rgba(255,99,132,1)',
                                        data: data     }
                                ]


                                this.setState({'datasets':datasets})

                                console.log(minutes_sitting3, minutes_of_intense_activity, minutes_of_slow_activity, minutes_of_moderate_activity, calories_activty)
                            });

                        var minutes_sitting2=0;
                        fetch("http://ec2-54-201-123-10.us-west-2.compute.amazonaws.com:5000/get_daily_health_data?userid=2134225533&start_date=5-15-2015&end_date=6-15-2015")
                            .then(response => {
                                return response.json();
                            })
                            .then(d => {
                                Object.values(d).forEach(function (obj) {
                                    minutes_sitting2 = minutes_sitting2 + obj.steps;


                                })

                                var data=this.state.datasets.data;
                                data.push(minutes_sitting2)

                                var datasets= [
                                    {
                                        label: 'My First dataset',
                                        backgroundColor: 'rgba(255,99,132,0.2)',
                                        borderColor: 'rgba(255,99,132,1)',
                                        borderWidth: 1,
                                        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                                        hoverBorderColor: 'rgba(255,99,132,1)',
                                        data: data     }
                                ]


                                this.setState({'datasets':datasets})

                                console.log(minutes_sitting2, minutes_of_intense_activity, minutes_of_slow_activity, minutes_of_moderate_activity, calories_activty)
                            });
                */


                //       this.setState({'datasets':datasets})


            });
    }
    render() {
        return (
            <div className="card">
                <Selectv/>
                <Bar
                    data={this.state}

                />
            </div>
        );
    }
}

export default Bar2;