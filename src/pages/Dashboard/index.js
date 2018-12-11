import React from 'react';
import EmailChart from './EmailChart';
import SelectFood from './SelectFood';
import SalesChart from './SalesChart';
import ReactGuage from './ReactGuage';
import Radargraph from './Radargraph';
import UserBehaviorChart from './UserBehaviorChart';
import HumanHeatmap from './HumanHeatmap';
import GamefrequencyChart from './Gamefrequency'
import Weightchange from './Weightchange'
import Bar2 from './Bar2'
import Tasks from './Tasks';

const Dashboard = () => (
  <div className="content" style={{backgroundColor: "#EAEAEA"}} >
    <div className="container-fluid" style={{backgroundColor: "#EAEAEA"}}>
    <div className="row">
    <HumanHeatmap />
    </div>

      <div className="row">
        <div className="col-md-4">
          <EmailChart />
            <ReactGuage/>
            <Radargraph/>
          <Bar2/>
        </div>
        <div className="col-md-8">
          <SalesChart />
            <SelectFood/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <UserBehaviorChart />
            <GamefrequencyChart/>
        </div>
        <div className="col-md-4">
          <Tasks />
            <Weightchange />
        </div>
      </div>

    </div>
  </div>
);

export default Dashboard;