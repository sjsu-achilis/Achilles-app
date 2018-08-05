import React from 'react';
import EmailChart from './EmailChart';
import SalesChart from './SalesChart';
import UserBehaviorChart from './UserBehaviorChart';
import HumanHeatmap from './HumanHeatmap';
import Tasks from './Tasks';

const Dashboard = () => (
  <div className="content" style={{backgroundColor: "#008ECC"}} >
    <div className="container-fluid" style={{backgroundColor: "#008ECC"}}>
    <div className="row">
    <HumanHeatmap />
    </div>

      <div className="row">
        <div className="col-md-4">
          <EmailChart />
        </div>
        <div className="col-md-8">
          <SalesChart />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <UserBehaviorChart />
        </div>
        <div className="col-md-6">
          <Tasks />
        </div>
      </div>

    </div>
  </div>
);

export default Dashboard;