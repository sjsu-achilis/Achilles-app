import React from 'react';
import ChartistGraph from 'react-chartist';
import Chartist from 'chartist';
import Gauge from 'react-svg-gauge';

let dataSales = {
    labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
    series: [18.5 ,24.9,60,40]
};

let optionsSales = {
    donut: true,
    donutWidth: 20,
    startAngle: 270,
    total: 200,
    showLabel: false
};


const GamefrequencyChart = () => (
    <div className="card">
        <div className="content">

            <div className="col-md-4">



                <Gauge value={30} width={100} height={100} max={39} label="BMI" />
                <img src="https://image.ibb.co/gKCFtL/obese.png" height={150} style={{paddingLeft:14}} alt="obese" border="0"></img>

               {/* <a href="https://imgbb.com/"><img src="https://image.ibb.co/e7GatL/over.png" alt="over" border="0"></a>
                <a href="https://imgbb.com/"><img src="https://image.ibb.co/mq2FtL/normal.png" alt="normal" border="0"></a>
                <a href="https://imgbb.com/"><img src="https://image.ibb.co/mExR00/under.png" alt="under" border="0"></a><br /><a target='_blank' href='https://poetandpoem.com/rainbow'>poems about rainbows and death</a><br />
*/}            </div>
            <div className="col-md-4">



                <Gauge value={20} width={100} height={100} max={39} label="Blood Pressure" />
                <img src="https://www.clipartmax.com/png/middle/10-107568_heart-human-heart-blue-and-red.png" height={120} style={{paddingLeft:14,paddingTop:15}} alt="obese" border="0"></img>
                <p style={{paddingLeft:14}}>NORMAL</p>

            </div>
            <div className="col-md-4">

                <Gauge value={20} width={100} height={100} max={39} label="Blood Sugar" />
            </div>


          {/*  <div className="panel panel-default">
                <div className="panel-heading c-list">
                    <span className="title">Friends</span>
                    <ul className="pull-right c-controls">
                        <li><a href="#cant-do-all-the-work-for-you" data-toggle="tooltip" data-placement="top"
                               title="Add Contact"><i className="glyphicon glyphicon-plus"></i></a></li>
                                  </ul>
                </div>

                <div className="row" >
                    <div className="col-xs-12">
                        <div className="input-group c-search">
                            <input type="text" className="form-control" id="contact-list-search"></input>
                            <span className="input-group-btn">
                                <button style={{height:35}} className="btn btn-default" type="button"><span
                                    className="glyphicon glyphicon-search text-muted"></span></button>
                            </span>
                        </div>
                    </div>

                    <ul className="list-group" id="contact-list" style={{paddingLeft:13,paddingRight:14}}>
                        <li className="list-group-item">
                            <div className="col-xs-12 col-sm-3">
                                <img height={20} src="http://api.randomuser.me/portraits/men/49.jpg" alt="Scott Stevens"
                                     className="img-responsive img-circle"/>
                            </div>
                            <div className="col-xs-12 col-sm-9">
                                <span className="name">Scott Stevens</span><br/>
                                                        </div>
                            <div className="clearfix"></div>
                        </li>
                    </ul>
                </div>
            </div>*/}
        </div>

      {/*  <div className="legend">
            <div className="item">
                <i style={{marginLeft:40}} className="fa fa-circle text-info"></i> <img src="http://www.stickpng.com/assets/images/596ce37bed07ad6118f998e9.png" style={{width:40}}></img>

                <i className="fa fa-circle text-danger"></i> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsev212NgQgIl_rIur0sypCFuhWwkHn6o8dxP6rDl-j0wKm-GIpxfzbR4u" style={{height:40}}></img>


                <i className="fa fa-circle text-warning"></i> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Running_icon_-_Noun_Project_22889.svg/1024px-Running_icon_-_Noun_Project_22889.svg.png" style={{width:40}}></img>


                <i style={{marginLeft:40}} className="fa fa-history"></i> Updated 3 minutes ago

                <b   style={{marginLeft:40,fontSize:20}}> Calories burnt</b>
            </div>
        </div>*/}


    </div>
);

export default GamefrequencyChart;