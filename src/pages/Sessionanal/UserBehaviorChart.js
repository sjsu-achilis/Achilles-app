import React, {Component} from 'react';
import Chart from 'react-chartist';
import HeatMap from 'react-heatmap-grid'
import Selectv from "./Selectv";




const xLabels = new Array(28).fill(0).map((_, i) => `${i}`);
const yLabels = [ 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const data = new Array(yLabels.length)
    .fill(0)
    .map(() => new Array(xLabels.length).fill(0).map(() => Math.floor(Math.random() * 3000)+1000));

const indata = new Array(yLabels.length)
    .fill(0)
    .map(() => new Array(xLabels.length).fill(0).map(() => Math.floor(Math.random() * 4000)+2000));

const diffdata = new Array(yLabels.length)
    .fill(0)
    .map(() => new Array(xLabels.length).fill(0).map(() => Math.floor(Math.random() * 4000)+2000));

for(var x = 0; x < data.length; x++){

    //Iterate through all elements in second array


        /*This causes us to compare all elements
           in first array to each element in second array
          Since md1[x] stays fixed while md2[y] iterates through second array.
           We compare the first two indexes of each array in conditional*/
        for(var y = 0; y < data[x].length; y++)
        {
            diffdata[x][y]=indata[x][y]-data[x][y]
        }

}


let options = {
  seriesBarDistance: 10,
  axisX: {
    showGrid: false
  },
  height: "245px"
};

let responsiveOptions = [
  ['screen and (max-width: 640px)', {
    seriesBarDistance: 5,
    axisX: {
      labelInterpolationFnc: function (value) {
        return value[0];
      }
    }
  }]
];

class UserBehaviorChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            xLabels: new Array(28).fill(0).map((_, i) => `${i}`),
            yLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            data: new Array(yLabels.length)
                .fill(0)
                .map(() => new Array(xLabels.length).fill(0).map(() => Math.floor(Math.random() * 3000) + 1000)),
            indata: [],
            diffdata: []

        }

    }
    componentWillMount() {

       // var index,index2;

        const varlabel = [1,2,3,4,5];
        var arr = [[],[],[],[],[],[]]
        var arr2 = [[],[],[],[],[],[]]


            //var data2;


            const newvar=varlabel.forEach(function(labelvar,index2){
            fetch("http://ec2-54-201-123-10.us-west-2.compute.amazonaws.com:5000/get_daily_health_data?userid=2134225533&start_date="+(index2+5)+"-15-2015&end_date="+(index2+6)+"-15-2015")
                .then(response => {
                    if(response)
                        return response.json();
                })
                .then(d => {


                        Object.values(d).forEach(function (obj, index) {

                            //console.log(obj.calories)


                            arr[index2][index] = obj.calories
                            arr2[index2][index] = obj.calories_activity



                            //   calories_activty =   obj.caloies_activty;
                            ////console.log(data);

                            //console.log(index2,index)
                            if(index2==4 && index==30)
                            {
                                return arr

                            }
                        })


                    }
                )
        })

        //console.log(newvar)


       // this.setState({data:arr})

    }
    render() {

        return (

            <div className="card ">
                <Selectv/>
                <div className='row'>
                    <div className='col-md-11'>
                        <h3><b style={{paddingLeft: 67}}>Calorie Burn</b></h3>
                        <HeatMap style={{paddingRight: 10}} height={12} background={'red'}
                                 xLabels={xLabels}
                                 yLabels={yLabels}
                                 data={this.state.data}
                        /></div>
                </div>
                <div className='row'>
                    <div className='col-md-11'>
                        <h3><b style={{paddingLeft: 67}}>Calorie Intake</b></h3>
                        <HeatMap style={{paddingRight: 10}} height={12}
                                 background={'green'}
                                 xLabels={xLabels}
                                 yLabels={yLabels}
                                 data={indata}
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-11'>
                        <h3><b style={{paddingLeft: 67}}>Calorie Difference</b></h3>
                        <HeatMap style={{paddingRight: 10}} height={12}
                                 background={'blue'}
                                 xLabels={xLabels}
                                 yLabels={yLabels}
                                 data={diffdata}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default UserBehaviorChart;