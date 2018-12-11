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

const Sessionanal = () => (
  <div className="content" style={{backgroundColor: "#EAEAEA"}} >
    <div className="container-fluid" style={{backgroundColor: "#EAEAEA"}}>
    <div className="row">
    <HumanHeatmap />
    </div>

      <div className="row">

        <div className="col-md-11">
          <SalesChart />

        </div>
      </div>


    </div>
  </div>
);

export default Sessionanal;