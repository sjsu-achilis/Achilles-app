import React from 'react';
import ChartistGraph from 'react-chartist';


// Chartist.Pie('#chartPreferences', dataPreferences, optionsPreferences);

// Chartist.Pie('#chartPreferences', {
// labels: ['62%','32%','6%'],
// series: [62, 32, 6]
// });
const HumanHeatmap = () => {

    let dataPreferences = {
        labels: ['62%', '32%', '6%'],
        series: [62, 32, 6]
    };

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

    let chartType = 'Pie';

    return (
<div id='humanbody'>
        <div id="container"></div>
        <div id="info"></div>
    </div>
);
};

export default HumanHeatmap;