import React from 'react';
import ChartistGraph from 'react-chartist';
import Chartist from 'chartist';
import Gauge from 'react-svg-gauge';




const dataPerformance = {
    labels: [0,1,2,3,4,5,6,7,8,9,20,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,0,1,2,3,4,5,6,7,8,9,20,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,0,1,2,3,4,5,6,7,8,9,20,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
    series: [
        [62,61,60,65,65,63,63,63,62,65,64,60,63,65,62,61,60,60,63,65,65,61,65,65,60,64,63,61,63,60,63,65,64,62,63,61,65,60,65,63,60,60,61,61,63,62,61,63,65,60,60,60,62,60,64,60,64,65,61,64,60,65,64,60,64,64,63,62,62,63,61,65,63,60,61,63,60,61,60]
    ]
};

const optionsPerformance = {
    showPoint: false,
    lineSmooth: true,
    height: "260px",

    axisX: {
        showGrid: false,
        showLabel: false
    },

    low: 40,
    high: 80
};




const Weightchange = () => (
    <div className="card">
        <div className="content">
            <h5><b>Weight Change (Past 30 days)</b></h5>



            <ChartistGraph data={dataPerformance} options={optionsPerformance} type="Line" className="ct-chart" />

        </div>

    </div>
);

export default Weightchange;