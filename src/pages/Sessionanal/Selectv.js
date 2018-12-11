import React from 'react';
import Select from 'react-select';
import Radargraph from "./Radargraph";

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
];

class Selectv extends React.Component {

    constructor(props) {
        super(props);
        /* this.state = {
             options: [
                 {value: 'chocolate', label: 'Chocolate'},
                 {value: 'strawberry', label: 'Strawberry'},
                 {value: 'vanilla', label: 'Vanilla'}
             ]
         }*/
    }




    componentWillMount(){


        console.log(this.props.selectedOption);
        /*
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
                               options:athe
                           })
                        })*/
    }
    /*  handleChange = (selectedOption) => {
          this.setState({ selectedOption });
          console.log(`Option selected:`, selectedOption);
      }*/
    render() {


        return (
           <div></div>
        );
    }
}
export default Selectv;
