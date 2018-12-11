import React, { Component } from 'react';
import NotificationSystem from 'react-notification-system';

import ImageUploader from 'react-images-upload';


var Coverflow = require('react-coverflow');



class Notifications extends Component {

    constructor(props) {
        super(props);

        this.state = { x: 0, y: 0 ,pictures: [],file:null,injuries:[],level:'50',cause:'',type:'',userid:localStorage['userinfo'],date:null,region:'',location:''};
        this.onDrop = this.onDrop.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.newinjuryclick2=this.newinjuryclick2.bind(this);
        this.newinjuryclick3=this.newinjuryclick3.bind(this);
        this.newinjuryclick4=this.newinjuryclick4.bind(this);
        this.newinjuryclick5=this.newinjuryclick5.bind(this);
/*        this.newinjuryclick6=this.newinjuryclick6.bind(this);
        this.newinjuryclick7=this.newinjuryclick7.bind(this);
        this.newinjuryclick8=this.newinjuryclick8.bind(this);
        this.newinjuryclick9=this.newinjuryclick9.bind(this);*/
    }
    _onMouseMove(e) {
        this.setState({ x: e.screenX, y: e.nativeEvent.offsetY });
    }

    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat( URL.createObjectURL(picture)),
        });

        console.log(this.state.pictures)
    }

    newinjuryclick(e)
    {
        console.log(this.state)



        var newjson=JSON.parse(JSON.stringify(this.state))



        newjson.location='top';
        newjson.region='head';
        newjson.type=this.state.cause;
        newjson.intensity=this.state.level;


        delete newjson.level;
        delete newjson.cause;
        delete newjson.injuries;
        delete newjson.file;
        delete newjson.pictures;
        delete newjson.x;
        delete newjson.y;





        fetch("http://ec2-54-201-123-10.us-west-2.compute.amazonaws.com:5000/register_injury", {
            method: "post",

            //make sure to serialize your JSON body
            body: JSON.stringify(newjson)
        })
            .then( (response) => {
                console.log(response)

                var url = "http://ec2-54-201-123-10.us-west-2.compute.amazonaws.com:5000/get_injury_history?userid="+localStorage['userinfo'];
                fetch(url)
                    .then(response => {
                        return response.json();
                    })
                    .then(d => {
                        this.setState({ injuries: d });
                        console.log("state", this.state.injuries)
                    })
                    .catch(error => console.log(error))
                //do something awesome that makes the world a better place
            });



    }




    newinjuryclick2(e)
    {
        console.log(this.state)



        var newjson=JSON.parse(JSON.stringify(this.state))



        newjson.location='right';
        newjson.region='chest';
        newjson.type=this.state.cause;
        newjson.intensity=this.state.level;


        delete newjson.level;
        delete newjson.cause;
        delete newjson.injuries;
        delete newjson.file;
        delete newjson.pictures;
        delete newjson.x;
        delete newjson.y;





        fetch("http://ec2-54-201-123-10.us-west-2.compute.amazonaws.com:5000/register_injury", {
            method: "post",

            //make sure to serialize your JSON body
            body: JSON.stringify(newjson)
        })
            .then( (response) => {
                console.log(response)

                var url = "http://ec2-54-201-123-10.us-west-2.compute.amazonaws.com:5000/get_injury_history?userid="+localStorage['userinfo'];
                fetch(url)
                    .then(response => {
                        return response.json();
                    })
                    .then(d => {
                        this.setState({ injuries: d });
                        console.log("state", this.state.injuries)
                    })
                    .catch(error => console.log(error))
                //do something awesome that makes the world a better place
            });



    }


    newinjuryclick3(e)
    {
        console.log(this.state)



        var newjson=JSON.parse(JSON.stringify(this.state))



        newjson.location='right';
        newjson.region='chest';
        newjson.type=this.state.cause;
        newjson.intensity=this.state.level;


        delete newjson.level;
        delete newjson.cause;
        delete newjson.injuries;
        delete newjson.file;
        delete newjson.pictures;
        delete newjson.x;
        delete newjson.y;





        fetch("http://ec2-54-201-123-10.us-west-2.compute.amazonaws.com:5000/register_injury", {
            method: "post",

            //make sure to serialize your JSON body
            body: JSON.stringify(newjson)
        })
            .then( (response) => {
                console.log(response)

                var url = "http://ec2-54-201-123-10.us-west-2.compute.amazonaws.com:5000/get_injury_history?userid="+localStorage['userinfo'];
                fetch(url)
                    .then(response => {
                        return response.json();
                    })
                    .then(d => {
                        this.setState({ injuries: d });
                        console.log("state", this.state.injuries)
                    })
                    .catch(error => console.log(error))
                //do something awesome that makes the world a better place
            });



    }


    newinjuryclick4(e)
{
    console.log(this.state)



    var newjson=JSON.parse(JSON.stringify(this.state))



    newjson.location='left';
    newjson.region='shoulder';
    newjson.type=this.state.cause;
    newjson.intensity=this.state.level;


    delete newjson.level;
    delete newjson.cause;
    delete newjson.injuries;
    delete newjson.file;
    delete newjson.pictures;
    delete newjson.x;
    delete newjson.y;





    fetch("http://ec2-54-201-123-10.us-west-2.compute.amazonaws.com:5000/register_injury", {
    method: "post",

    //make sure to serialize your JSON body
    body: JSON.stringify(newjson)
})
.then( (response) => {
    console.log(response)

    var url = "http://ec2-54-201-123-10.us-west-2.compute.amazonaws.com:5000/get_injury_history?userid="+localStorage['userinfo'];
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(d => {
            this.setState({ injuries: d });
            console.log("state", this.state.injuries)
        })
        .catch(error => console.log(error))
    //do something awesome that makes the world a better place
});



}



    newinjuryclick4(e)
    {
        console.log(this.state)



        var newjson=JSON.parse(JSON.stringify(this.state))



        newjson.location='right';
        newjson.region='shoulder';
        newjson.type=this.state.cause;
        newjson.intensity=this.state.level;


        delete newjson.level;
        delete newjson.cause;
        delete newjson.injuries;
        delete newjson.file;
        delete newjson.pictures;
        delete newjson.x;
        delete newjson.y;





        fetch("http://ec2-54-201-123-10.us-west-2.compute.amazonaws.com:5000/register_injury", {
            method: "post",

            //make sure to serialize your JSON body
            body: JSON.stringify(newjson)
        })
            .then( (response) => {
                console.log(response)

                var url = "http://ec2-54-201-123-10.us-west-2.compute.amazonaws.com:5000/get_injury_history?userid="+localStorage['userinfo'];
                fetch(url)
                    .then(response => {
                        return response.json();
                    })
                    .then(d => {
                        this.setState({ injuries: d });
                        console.log("state", this.state.injuries)
                    })
                    .catch(error => console.log(error))
                //do something awesome that makes the world a better place
            });



    }

    newinjuryclick5(e)
    {
        console.log(this.state)



        var newjson=JSON.parse(JSON.stringify(this.state))



        newjson.location='left';
        newjson.region='shoulder';
        newjson.type=this.state.cause;
        newjson.intensity=this.state.level;


        delete newjson.level;
        delete newjson.cause;
        delete newjson.injuries;
        delete newjson.file;
        delete newjson.pictures;
        delete newjson.x;
        delete newjson.y;





        fetch("http://ec2-54-201-123-10.us-west-2.compute.amazonaws.com:5000/register_injury", {
            method: "post",

            //make sure to serialize your JSON body
            body: JSON.stringify(newjson)
        })
            .then( (response) => {
                console.log(response)

                var url = "http://ec2-54-201-123-10.us-west-2.compute.amazonaws.com:5000/get_injury_history?userid="+localStorage['userinfo'];
                fetch(url)
                    .then(response => {
                        return response.json();
                    })
                    .then(d => {
                        this.setState({ injuries: d });
                        console.log("state", this.state.injuries)
                    })
                    .catch(error => console.log(error))
                //do something awesome that makes the world a better place
            });



    }
    componentWillMount(){

        var url = "http://ec2-54-201-123-10.us-west-2.compute.amazonaws.com:5000/get_injury_history?userid="+localStorage['userinfo'];
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(d => {
                this.setState({ injuries: d });
                console.log("state", this.state.injuries,d)
            })
            .catch(error => console.log(error))
    }
    componentDidMount() {
        var url = "http://ec2-54-201-123-10.us-west-2.compute.amazonaws.com:5000/get_injury_history?userid="+localStorage['userinfo'];
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(d => {
                this.setState({ injuries: d });
                console.log("state", this.state.injuries)
            })
            .catch(error => console.log(error))
    }
  showNotification(position) {
    this.notificationSystem.addNotification({
      message: 'Welcome to Crystal Dashboard - a beautiful React dashboard for everyone.',
      level: 'success',
      autoDismiss: 0,
      position
    });
  }

    handleChange(event) {
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        })
    }

  render() {
    return (

      (this.state.x>=373 && this.state.x<=390 && this.state.y>=62 && this.state.y<=98)?
            <div className="content">
                <div className="container-fluid">
                    <div className="card">
                        <div className="header">
                            <h4>Notifications</h4>
                        </div>
                        <div className="content">
                            <div className="places-buttons">
                                <div className="row">
                                    <div className="col-md-6 col-md-offset-3 text-center">
                                        <h5>Injury report
                                            <p className="category">Click to view notifications</p>
                                        </h5>
                                    </div>
                                </div>
                                <div className="row">

                                    <div className="col-md-4" style={{paddingLeft: 0}}>
                                    <img width={267.84} onClick={this._onMouseMove.bind(this)} height={500} src="https://image.ibb.co/ffLuOL/1.png" alt="first" border="0"></img>







                                </div>
                                <div className='col-md-8'>
                                    <form>
                                        <input className='form-control' type="radio" name="firstname" className="span3"
                                               onChange={ e => this.setState({ cause : 'Concussion' }) }
                                        ></input>
                                        <b> Concussion—</b>A concussion is a type of traumatic brain injury (TBI) that happens when the brain is jarred or shaken hard enough to bounce against the skull



                                      <br></br>
                                        <br></br>
                                        <input className='form-control' type="radio" name="firstname" className="span3"

                                               onChange={ e => this.setState({ cause : 'Contusion' }) }
                                        ></input>
                                        <b> Contusion—</b>Bruise on the brain that can cause swelling

                                        <br></br>
                                        <br></br>
                                        <input className='form-control' type="radio" name="firstname" className="span3"
                                               onChange={ e => this.setState({ cause : 'Hematoma' }) }
                                        ></input>
                                        <b> Hematoma—</b> Bleeding in the brain that collects and forms a clot.
                                        <br></br>
                                        <br></br>

                                    <input className='form-control' type="radio" name="firstname" className="span3"
                                           onChange={ e => this.setState({ cause : 'Skull fracture' }) }></input>
                                    <b> Skull fracture</b>
                                    <br></br>
                                    <br></br>


                                        <div className="slidecontainer">


                                                <p>Level of injury</p>
                                                <input style={{width:'40%'}} type="range" min="1" max="100"  defaultValue="50" className="slider"
                                                       id="myRange" onChange={ e => this.setState({ level : e.target.value }) }/>
                                            <br></br>
                                        </div>


                                        <br></br>
                                        Comments

                                        <textarea className="form-control" placeholder="Envianos tu Mensaje"
                                                  required
                                                  onChange={ e => this.setState({ desc : e.target.value }) }
                                        ></textarea>

                                        <br></br>


                                        <b>Upload your injury images</b>

                                        <input type="file" onChange={this.handleChange}/>
                                        <img width={267.84} src={this.state.file}/>

                                        <input type='submit' value ='Create injury' onClick={this.newinjuryclick}/>



                                    </form>








                                </div>





                            </div>


                        </div>
                    </div>
                </div>
            </div>

                <Coverflow
                    width={960}
                    height={480}
                    displayQuantityOfSide={2}
                    navigation={false}
                    enableHeading={false}>
                    <div

                        role="menuitem"
                        tabIndex="0">

                    </div>
                    {this.state.injuries.map(injury=>


                        <form style={{zoom:'60%'}} action="mail.php" method="post">
                            <div className="card border-primary rounded-0">

                                <div className="card-header p-0">
                                    <div className="bg-info text-white text-center py-2">
                                        < b>{injury.location}</b>
                                        < b>{injury.region}</b>
                                        <p className="m-0">
                                            Cause:
                                            <input type="text" defaultValue= {injury.type}/></p>
                                    </div>
                                </div>



                                <div className="slidecontainer">
                                    <div className='row'>

                                        <div className='col-md-6'>
                                            <p>Level of injury</p>
                                            <input style={{width:'100%'}} type="range" min="1" max="100"  defaultValue={injury.intensity} className="slider"
                                                   id="myRange" />
                                            <br></br></div>

                                        <div className='col-md-6'>


                                            <img src='data:image/jpeg;base64,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' style={{width:'100%'}}></img>
                                        </div>

                                    </div>
                                </div>



                                <br></br>
                                Comments

                                <textarea className="form-control" defaultValue={injury.desc}
                                          required></textarea>

                                <button>Save</button>

                            </div>
                        </form>

                    )
                    }

                </Coverflow>
            </div>:

          (this.state.x>=345 && this.state.x<=377 && this.state.y>=133 && this.state.y<=175)?
              <div>
              <div className="content">
                  <div className="container-fluid">
                      <div className="card">
                          <div className="header">
                              <h4>Notifications</h4>
                          </div>
                          <div className="content">
                              <div className="places-buttons">
                                  <div className="row">
                                      <div className="col-md-6 col-md-offset-3 text-center">
                                          <h5>Notifications Places
                                              <p className="category">Click to view notifications</p>
                                          </h5>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="col-md-4" style={{paddingLeft: 0}}>

                                      <img width={267.84} onClick={this._onMouseMove.bind(this)} height={500} src="https://image.ibb.co/n75TiL/2.png" alt="first" border="0"></img>





                                  </div>
                                  <div className='col-md-8'>
                                      <form>
                                          <input className='form-control' type="radio" name="firstname"
                                                 onChange={ e => this.setState({ cause : 'Flail Chest' }) }
                                                 className="span3"></input>
                                          <b> Flail Chest—</b>Flail chest occurs when one or more ribs are fractured in one or more places.


                                          <br></br>
                                          <br></br>
                                          <input className='form-control' type="radio" name="firstname"
                                                 onChange={ e => this.setState({ cause : 'Pneumothorax' }) }
                                                 className="span3"></input>
                                          <b> Pneumothorax/Tension Pneumothorax—</b>Tension pneumothorax occurs when the integrity of the lung tissue is compromised, allowing air to escape from the lung into the surrounding pleural tissue

                                          <br></br>
                                          <br></br>
                                          <input className='form-control' type="radio" name="firstname"
                                                 onChange={ e => this.setState({ cause : 'Myocardial Contusion' }) }
                                                 className="span3"></input>
                                          <b> Myocardial Contusion—</b>Myocardial contusion occurs when the athlete is struck in the anterior aspect of the chest in the region of the heart.
                                          <br></br>
                                          <br></br>

                                          <input className='form-control' type="radio" name="firstname"
                                                 onChange={ e => this.setState({ cause : 'Commotio Cordis' }) }
                                                 className="span3"></input>
                                          <b> Commotio Cordis—</b>Commotio Cordis also occurs when the athlete is struck in the chest with a missile or object, but differs from a myocardial contusion in that it occurs precisely at the beginning of the T-wave in the cardiac.
                                        <br></br>
                                          <br></br>
                                          <b>Upload your injury images</b>

                                          <input type="file" onChange={this.handleChange}/>


                                          <img width={267.84} src={this.state.file}/>



                                          <br></br>
                                          Comments

                                          <textarea className="form-control" placeholder="Envianos tu Mensaje"
                                                    required
                                                    onChange={ e => this.setState({ desc : e.target.value }) }
                                          ></textarea>

                                          <br></br>





                                          <input type='submit' value ='Create injury' onClick={this.newinjuryclick2}/>

                                      </form>








                                  </div>





                              </div>


                          </div>
                      </div>
                  </div>
              </div>
           </div>
                  <Coverflow
                      width={960}
                      height={480}
                      displayQuantityOfSide={2}
                      navigation={false}
                      enableHeading={false}>
                      <div

                          role="menuitem"
                          tabIndex="0">

                      </div>
                      {this.state.injuries.map(injury=>


                          <form style={{zoom:'60%'}} action="mail.php" method="post">
                              <div className="card border-primary rounded-0">

                                  <div className="card-header p-0">
                                      <div className="bg-info text-white text-center py-2">
                                          < b>{injury.location}</b>
                                          < b>{injury.region}</b>
                                          <p className="m-0">
                                              Cause:
                                              <input type="text" defaultValue= {injury.type}/></p>
                                      </div>
                                  </div>



                                  <div className="slidecontainer">
                                      <div className='row'>

                                          <div className='col-md-6'>
                                              <p>Level of injury</p>
                                              <input style={{width:'100%'}} type="range" min="1" max="100"  defaultValue={injury.intensity} className="slider"
                                                     id="myRange" />
                                              <br></br></div>

                                          <div className='col-md-6'>


                                              <img src='data:image/jpeg;base64,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' style={{width:'100%'}}></img>
                                          </div>

                                      </div>
                                  </div>



                                  <br></br>
                                  Comments

                                  <textarea className="form-control" defaultValue={injury.desc}
                                            required></textarea>

                                  <button>Save</button>

                              </div>
                          </form>

                      )
                      }

                  </Coverflow>
              </div>
          :

      (this.state.x>=393 && this.state.x<=419 && this.state.y>=138 && this.state.y<=173)?
          <div>    <div className="content">
              <div className="container-fluid">
                  <div className="card">
                      <div className="header">
                          <h4>Notifications</h4>
                      </div>
                      <div className="content">
                          <div className="places-buttons">
                              <div className="row">
                                  <div className="col-md-6 col-md-offset-3 text-center">
                                      <h5>Notifications Places
                                          <p className="category">Click to view notifications</p>
                                      </h5>
                                  </div>
                              </div>
                              <div className="row">

                                  <div className="col-md-4" style={{paddingLeft: 0}}>
                                  <img width={267.84} onClick={this._onMouseMove.bind(this)} height={500} src="https://image.ibb.co/d6CkV0/3.png" alt="first" border="0"></img>






                              </div>
                              <div className='col-md-8'>
                                  <form>
                                      <input className='form-control' type="radio" name="firstname"
                                             onChange={ e => this.setState({ cause : 'Flail Chest' }) }className="span3"></input>
                                      <b> Flail Chest—</b>Flail chest occurs when one or more ribs are fractured in one or more places.


                                      <br></br>
                                      <br></br>
                                      <input className='form-control' type="radio" name="firstname"
                                             onChange={ e => this.setState({ cause : 'Pneumothorax' })} className="span3"></input>
                                      <b> Pneumothorax/Tension Pneumothorax—</b>Tension pneumothorax occurs when the integrity of the lung tissue is compromised, allowing air to escape from the lung into the surrounding pleural tissue

                                      <br></br>
                                      <br></br>
                                      <input className='form-control' type="radio" name="firstname"
                                             onChange={ e => this.setState({ cause : 'Myocardial Contusion' }) }className="span3"></input>
                                      <b> Myocardial Contusion—</b>Myocardial contusion occurs when the athlete is struck in the anterior aspect of the chest in the region of the heart.
                                      <br></br>
                                      <br></br>

                                      <input className='form-control' type="radio" name="firstname"
                                             onChange={ e => this.setState({ cause : 'Commotio Cordis' }) }className="span3"></input>
                                      <b> Commotio Cordis—</b>Commotio Cordis also occurs when the athlete is struck in the chest with a missile or object, but differs from a myocardial contusion in that it occurs precisely at the beginning of the T-wave in the cardiac.
                                      <br></br>
                                      <br></br>
                                      <b>Upload your injury images</b>

                                      <input type="file" onChange={this.handleChange}/>
                                      <img width={267.84} src={this.state.file}/>


                                      <br></br>
                                      Comments

                                      <textarea className="form-control" placeholder="Envianos tu Mensaje"
                                                required
                                                onChange={ e => this.setState({ desc : e.target.value }) }
                                      ></textarea>

                                      <br></br>

                                      <input type='submit' value ='Create injury' onClick={this.newinjuryclick3}/>

                                  </form>








                              </div>





                          </div>


                      </div>
                  </div>
              </div>
              </div>
              </div>
              <Coverflow
                  width={960}
                  height={480}
                  displayQuantityOfSide={2}
                  navigation={false}
                  enableHeading={false}>
                  <div

                      role="menuitem"
                      tabIndex="0">

                  </div>
                  {this.state.injuries.map(injury=>


                      <form style={{zoom:'60%'}} action="mail.php" method="post">
                          <div className="card border-primary rounded-0">

                              <div className="card-header p-0">
                                  <div className="bg-info text-white text-center py-2">
                                      < b>{injury.location}</b>
                                      < b>{injury.region}</b>
                                      <p className="m-0">
                                          Cause:
                                          <input type="text" defaultValue= {injury.type}/></p>
                                  </div>
                              </div>



                              <div className="slidecontainer">
                                  <div className='row'>

                                      <div className='col-md-6'>
                                          <p>Level of injury</p>
                                          <input style={{width:'100%'}} type="range" min="1" max="100"  defaultValue={injury.intensity} className="slider"
                                                 id="myRange" />
                                          <br></br></div>

                                      <div className='col-md-6'>


                                          <img src='data:image/jpeg;base64,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' style={{width:'100%'}}></img>
                                      </div>

                                  </div>
                              </div>



                              <br></br>
                              Comments

                              <textarea className="form-control" defaultValue={injury.desc}
                                        required></textarea>

                              <button>Save</button>

                          </div>
                      </form>

                  )
                  }

              </Coverflow>
          </div>
          :
          (this.state.x>=326 && this.state.x<=350 && this.state.y>=142 && this.state.y<=164)?

              <div> <div className="content">
              <div className="container-fluid">
                  <div className="card">
                      <div className="header">
                          <h4>Notifications</h4>
                      </div>
                      <div className="content">
                          <div className="places-buttons">
                              <div className="row">
                                  <div className="col-md-6 col-md-offset-3 text-center">
                                      <h5>Notifications Places
                                          <p className="category">Click to view notifications</p>
                                      </h5>
                                  </div>
                              </div>
                              <div className="row">
                                  <div className="col-md-4" style={{paddingLeft: 0}}>

                                  <img width={267.84} onClick={this._onMouseMove.bind(this)} height={500} src="https://image.ibb.co/nOD3Hf/11.png" alt="first" border="0"></img>









                              </div>
                              <div className='col-md-8'>
                                  <form>
                                      <input className='form-control' type="radio" name="firstname"
                                             onChange={ e => this.setState({ cause : 'Arthritis osteoarthritis' }) }className="span3"></input>
                                      <b> Arthritis osteoarthritis—</b>This condition is due to the wearing down of cartilage that allows bones to glide smoothly within the joints, and can occur with aging, trauma or overuse injury.


                                      <br></br>
                                      <br></br>
                                      <input className='form-control' type="radio" name="firstname"
                                             onChange={ e => this.setState({ cause : 'Rotator cuff' }) } className="span3"></input>
                                      <b> Rotator cuff injuries—</b>These include tendonitis and rotator cuff tears, and are the most common causes of shoulder pain and activity restriction

                                      <br></br>
                                      <br></br>
                                      <input className='form-control' type="radio" name="firstname"
                                             onChange={ e => this.setState({ cause : 'Bursitis' }) }className="span3"></input>
                                      <b> Bursitis—</b>This is the inflammation of the bursa, and is most often caused by repetitive motions (overuse), or repeatedly bumping or putting pressure on the area.
                                      <br></br>
                                      <br></br>
                                      <b>Upload your injury images</b>

                                      <input type="file" onChange={this.handleChange}/>
                                      <img width={267.84} src={this.state.file}/>


                                      <br></br>
                                      Comments

                                      <textarea className="form-control" placeholder="Envianos tu Mensaje"
                                                required
                                                onChange={ e => this.setState({ desc : e.target.value }) }
                                      ></textarea>

                                      <br></br>

                                      <input type='submit' value ='Create injury' onClick={this.newinjuryclick4}/>

                                  </form>








                              </div>





                          </div>


                      </div>
                  </div>
              </div>
          </div>
          </div>
                  <Coverflow
                      width={960}
                      height={480}
                      displayQuantityOfSide={2}
                      navigation={false}
                      enableHeading={false}>
                      <div

                          role="menuitem"
                          tabIndex="0">

                      </div>
                      {this.state.injuries.map(injury=>


                          <form style={{zoom:'60%'}} action="mail.php" method="post">
                              <div className="card border-primary rounded-0">

                                  <div className="card-header p-0">
                                      <div className="bg-info text-white text-center py-2">
                                          < b>{injury.location}</b>
                                          < b>{injury.region}</b>
                                          <p className="m-0">
                                              Cause:
                                              <input type="text" defaultValue= {injury.type}/></p>
                                      </div>
                                  </div>



                                  <div className="slidecontainer">
                                      <div className='row'>

                                          <div className='col-md-6'>
                                              <p>Level of injury</p>
                                              <input style={{width:'100%'}} type="range" min="1" max="100"  defaultValue={injury.intensity} className="slider"
                                                     id="myRange" />
                                              <br></br></div>

                                          <div className='col-md-6'>


                                              <img src='data:image/jpeg;base64,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' style={{width:'100%'}}></img>
                                          </div>

                                      </div>
                                  </div>



                                  <br></br>
                                  Comments

                                  <textarea className="form-control" defaultValue={injury.desc}
                                            required></textarea>

                                  <button>Save</button>

                              </div>
                          </form>

                      )
                      }

                  </Coverflow>
              </div>:
              (this.state.x>=414 && this.state.x<=436 && this.state.y>=142 && this.state.y<=164)?

                  <div>
                      <div className="content">
                  <div className="container-fluid">
                      <div className="card">
                          <div className="header">
                              <h4>Notifications</h4>
                          </div>
                          <div className="content">
                              <div className="places-buttons">
                                  <div className="row">
                                      <div className="col-md-6 col-md-offset-3 text-center">
                                          <h5>Notifications Places
                                              <p className="category">Click to view notifications</p>
                                          </h5>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="col-md-4" style={{paddingLeft: 0}}>

                                      <img width={267.84} onClick={this._onMouseMove.bind(this)} height={500} src="https://image.ibb.co/hSvHcf/16.png" alt="first" border="0"></img>




                                  </div>
                                  <div className='col-md-8'>
                                      <form>
                                          <input className='form-control' type="radio" name="firstname"
                                                 onChange={ e => this.setState({ cause : 'Arthritis osteoarthritis' }) }className="span3"></input>
                                          <b> Arthritis osteoarthritis—</b>This condition is due to the wearing down of cartilage that allows bones to glide smoothly within the joints, and can occur with aging, trauma or overuse injury.


                                          <br></br>
                                          <br></br>
                                          <input className='form-control' type="radio" name="firstname"
                                                 onChange={ e => this.setState({ cause : 'Rotator cuff' }) } className="span3"></input>
                                          <b> Rotator cuff injuries—</b>These include tendonitis and rotator cuff tears, and are the most common causes of shoulder pain and activity restriction

                                          <br></br>
                                          <br></br>
                                          <input className='form-control' type="radio" name="firstname"
                                                 onChange={ e => this.setState({ cause : 'Bursitis' }) }className="span3"></input>
                                          <b> Bursitis—</b>This is the inflammation of the bursa, and is most often caused by repetitive motions (overuse), or repeatedly bumping or putting pressure on the area.
                                          <br></br>
                                          <br></br>
                                          <b>Upload your injury images</b>

                                          <input type="file" onChange={this.handleChange}/>
                                          <img width={267.84} src={this.state.file}/>


                                          <br></br>
                                          Comments

                                          <textarea className="form-control" placeholder="Envianos tu Mensaje"
                                                    required
                                                    onChange={ e => this.setState({ desc : e.target.value }) }
                                          ></textarea>

                                          <br></br>

                                          <input type='submit' value ='Create injury' onClick={this.newinjuryclick5}/>

                                      </form>








                                  </div>





                              </div>


                          </div>
                      </div>
                  </div>
              </div>
              </div>
                      <Coverflow
                          width={960}
                          height={480}
                          displayQuantityOfSide={2}
                          navigation={false}
                          enableHeading={false}>
                          <div

                              role="menuitem"
                              tabIndex="0">

                          </div>
                          {this.state.injuries.map(injury=>


                              <form style={{zoom:'60%'}} action="mail.php" method="post">
                                  <div className="card border-primary rounded-0">

                                      <div className="card-header p-0">
                                          <div className="bg-info text-white text-center py-2">
                                              < b>{injury.location}</b>
                                              < b>{injury.region}</b>
                                              <p className="m-0">
                                                  Cause:
                                                  <input type="text" defaultValue= {injury.type}/></p>
                                          </div>
                                      </div>



                                      <div className="slidecontainer">
                                          <div className='row'>

                                              <div className='col-md-6'>
                                                  <p>Level of injury</p>
                                                  <input style={{width:'100%'}} type="range" min="1" max="100"  defaultValue={injury.intensity} className="slider"
                                                         id="myRange" />
                                                  <br></br></div>

                                              <div className='col-md-6'>


                                                  <img src='data:image/jpeg;base64,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' style={{width:'100%'}}></img>
                                              </div>

                                          </div>
                                      </div>



                                      <br></br>
                                      Comments

                                      <textarea className="form-control" defaultValue={injury.desc}
                                                required></textarea>

                                      <button>Save</button>

                                  </div>
                              </form>

                          )
                          }

                      </Coverflow>
                  </div>:
                  (this.state.x>=357 && this.state.x<=374 && this.state.y>=336 && this.state.y<=361)?
<div>
                  <div className="content">
                      <div className="container-fluid">
                          <div className="card">
                              <div className="header">
                                  <h4>Notifications</h4>
                              </div>
                              <div className="content">
                                  <div className="places-buttons">
                                      <div className="row">
                                          <div className="col-md-6 col-md-offset-3 text-center">
                                              <h5>Notifications Places
                                                  <p className="category">Click to view notifications</p>
                                              </h5>
                                          </div>
                                      </div>
                                      <div className="row">
                                          <div className="col-md-4" style={{paddingLeft: 0}}>

                                          <img width={267.84} onClick={this._onMouseMove.bind(this)} height={500} src="https://image.ibb.co/hD2xcf/13.png" alt="first" border="0"></img>



                                      </div>
                                      <div className='col-md-8'>
                                          <form>
                                              <input className='form-control' type="radio" name="firstname" className="span3"></input>
                                              <b> Arthritis osteoarthritis—</b>This condition is due to the wearing down of cartilage that allows bones to glide smoothly within the joints, and can occur with aging, trauma or overuse injury.


                                              <br></br>
                                              <br></br>
                                              <input className='form-control' type="radio" name="firstname" className="span3"></input>
                                              <b> Rotator cuff injuries—</b>These include tendonitis and rotator cuff tears, and are the most common causes of shoulder pain and activity restriction

                                              <br></br>
                                              <br></br>
                                              <input className='form-control' type="radio" name="firstname" className="span3"></input>
                                              <b> Bursitis—</b>This is the inflammation of the bursa, and is most often caused by repetitive motions (overuse), or repeatedly bumping or putting pressure on the area.
                                              <br></br>
                                              <br></br>
                                              <b>Upload your injury images</b>

                                              <input type="file" onChange={this.handleChange}/>
                                              <img width={267.84} src={this.state.file}/>

                                              <br></br>
                                              Comments

                                              <textarea className="form-control" placeholder="Envianos tu Mensaje"
                                                        required
                                                        onChange={ e => this.setState({ desc : e.target.value }) }
                                              ></textarea>

                                              <br></br>

                                              <input type='submit' value ='Create injury' onClick={this.newinjuryclick5}/>


                                          </form>








                                      </div>





                                  </div>


                              </div>
                          </div>
                      </div>
                  </div>
                  </div>
    <Coverflow
        width={960}
        height={480}
        displayQuantityOfSide={2}
        navigation={false}
        enableHeading={false}>
        <div

            role="menuitem"
            tabIndex="0">

        </div>
        {this.state.injuries.map(injury=>


            <form style={{zoom:'60%'}} action="mail.php" method="post">
                <div className="card border-primary rounded-0">

                    <div className="card-header p-0">
                        <div className="bg-info text-white text-center py-2">
                            < b>{injury.location}</b>
                            < b>{injury.region}</b>
                            <p className="m-0">
                                Cause:
                                <input type="text" defaultValue= {injury.type}/></p>
                        </div>
                    </div>



                    <div className="slidecontainer">
                        <div className='row'>

                            <div className='col-md-6'>
                                <p>Level of injury</p>
                                <input style={{width:'100%'}} type="range" min="1" max="100"  defaultValue={injury.intensity} className="slider"
                                       id="myRange" />
                                <br></br></div>

                            <div className='col-md-6'>


                                <img src='data:image/jpeg;base64,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' style={{width:'100%'}}></img>
                            </div>

                        </div>
                    </div>



                    <br></br>
                    Comments

                    <textarea className="form-control" defaultValue={injury.desc}
                              required></textarea>

                    <button>Save</button>

                </div>
            </form>

        )
        }

    </Coverflow>
</div>:
                      (this.state.x>=388 && this.state.x<=404 && this.state.y>=336 && this.state.y<=361)?
                     <div> <div className="content">
                          <div className="container-fluid">
                              <div className="card">
                                  <div className="header">
                                      <h4>Notifications</h4>
                                  </div>
                                  <div className="content">
                                      <div className="places-buttons">
                                          <div className="row">
                                              <div className="col-md-6 col-md-offset-3 text-center">
                                                  <h5>Notifications Places
                                                      <p className="category">Click to view notifications</p>
                                                  </h5>
                                              </div>
                                          </div>
                                          <div className="row">

                                              <div className="col-md-4" style={{paddingLeft: 0}}>
                                              <img width={267.84} onClick={this._onMouseMove.bind(this)} height={500} src="https://image.ibb.co/jQzccf/12.png" alt="first" border="0"></img>






                                          </div>
                                          <div className='col-md-8'>
                                              <form>
                                                  <input className='form-control' type="radio" name="firstname" className="span3"></input>
                                                  <b> Arthritis osteoarthritis—</b>This condition is due to the wearing down of cartilage that allows bones to glide smoothly within the joints, and can occur with aging, trauma or overuse injury.


                                                  <br></br>
                                                  <br></br>
                                                  <input className='form-control' type="radio" name="firstname" className="span3"></input>
                                                  <b> Rotator cuff injuries—</b>These include tendonitis and rotator cuff tears, and are the most common causes of shoulder pain and activity restriction

                                                  <br></br>
                                                  <br></br>
                                                  <input className='form-control' type="radio" name="firstname" className="span3"></input>
                                                  <b> Bursitis—</b>This is the inflammation of the bursa, and is most often caused by repetitive motions (overuse), or repeatedly bumping or putting pressure on the area.
                                                  <br></br>
                                                  <br></br>
                                                  <b>Upload your injury images</b>

                                                  <input type="file" onChange={this.handleChange}/>
                                                  <img width={267.84} src={this.state.file}/>



                                              </form>








                                          </div>





                                      </div>


                                  </div>
                              </div>
                          </div>
                      </div>
                      </div>
                         <Coverflow
                             width={960}
                             height={480}
                             displayQuantityOfSide={2}
                             navigation={false}
                             enableHeading={false}>
                             <div

                                 role="menuitem"
                                 tabIndex="0">

                             </div>
                             {this.state.injuries.map(injury=>


                                 <form style={{zoom:'60%'}} action="mail.php" method="post">
                                     <div className="card border-primary rounded-0">

                                         <div className="card-header p-0">
                                             <div className="bg-info text-white text-center py-2">
                                                 < b>{injury.location}</b>
                                                 < b>{injury.region}</b>
                                                 <p className="m-0">
                                                     Cause:
                                                     <input type="text" defaultValue= {injury.type}/></p>
                                             </div>
                                         </div>



                                         <div className="slidecontainer">
                                             <div className='row'>

                                                 <div className='col-md-6'>
                                                     <p>Level of injury</p>
                                                     <input style={{width:'100%'}} type="range" min="1" max="100"  defaultValue={injury.intensity} className="slider"
                                                            id="myRange" />
                                                     <br></br></div>

                                                 <div className='col-md-6'>


                                                     <img src='data:image/jpeg;base64,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' style={{width:'100%'}}></img>
                                                 </div>

                                             </div>
                                         </div>



                                         <br></br>
                                         Comments

                                         <textarea className="form-control" defaultValue={injury.desc}
                                                   required></textarea>

                                         <button>Save</button>

                                     </div>
                                 </form>

                             )
                             }

                         </Coverflow>
                     </div>:
                          (this.state.x>=367 && this.state.x<=380 && this.state.y>=444 && this.state.y<=462)?


     /* 386-393  444-462*/

    <div>  <div className="content">
                              <div className="container-fluid">
                                  <div className="card">
                                      <div className="header">
                                          <h4>Notifications</h4>
                                      </div>
                                      <div className="content">
                                          <div className="places-buttons">
                                              <div className="row">
                                                  <div className="col-md-6 col-md-offset-3 text-center">
                                                      <h5>Notifications Places
                                                          <p className="category">Click to view notifications</p>
                                                      </h5>
                                                  </div>
                                              </div>
                                              <div className="row">
                                                  <div className="col-md-4" style={{paddingLeft: 0}}>

                                                  <img width={267.84} onClick={this._onMouseMove.bind(this)} height={500} src="https://image.ibb.co/fPEAxf/14.png" alt="first" border="0"></img>


                                              </div>
                                              <div className='col-md-8'>
                                                  <form>
                                                      <input className='form-control' type="radio" name="firstname" className="span3"></input>
                                                      <b> Arthritis osteoarthritis—</b>This condition is due to the wearing down of cartilage that allows bones to glide smoothly within the joints, and can occur with aging, trauma or overuse injury.


                                                      <br></br>
                                                      <br></br>
                                                      <input className='form-control' type="radio" name="firstname" className="span3"></input>
                                                      <b> Rotator cuff injuries—</b>These include tendonitis and rotator cuff tears, and are the most common causes of shoulder pain and activity restriction

                                                      <br></br>
                                                      <br></br>
                                                      <input className='form-control' type="radio" name="firstname" className="span3"></input>
                                                      <b> Bursitis—</b>This is the inflammation of the bursa, and is most often caused by repetitive motions (overuse), or repeatedly bumping or putting pressure on the area.
                                                      <br></br>
                                                      <br></br>
                                                      <b>Upload your injury images</b>

                                                      <input type="file" onChange={this.handleChange}/>
                                                      <img width={267.84} src={this.state.file}/>



                                                  </form>








                                              </div>





                                          </div>


                                      </div>
                                  </div>
                              </div>
      </div>
    </div>
        <Coverflow
            width={960}
            height={480}
            displayQuantityOfSide={2}
            navigation={false}
            enableHeading={false}>
            <div

                role="menuitem"
                tabIndex="0">

            </div>
            {this.state.injuries.map(injury=>


                <form style={{zoom:'60%'}} action="mail.php" method="post">
                    <div className="card border-primary rounded-0">

                        <div className="card-header p-0">
                            <div className="bg-info text-white text-center py-2">
                                < b>{injury.location}</b>
                                < b>{injury.region}</b>
                                <p className="m-0">
                                    Cause:
                                    <input type="text" defaultValue= {injury.type}/></p>
                            </div>
                        </div>



                        <div className="slidecontainer">
                            <div className='row'>

                                <div className='col-md-6'>
                                    <p>Level of injury</p>
                                    <input style={{width:'100%'}} type="range" min="1" max="100"  defaultValue={injury.intensity} className="slider"
                                           id="myRange" />
                                    <br></br></div>

                                <div className='col-md-6'>


                                    <img src='data:image/jpeg;base64,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' style={{width:'100%'}}></img>
                                </div>

                            </div>
                        </div>



                        <br></br>
                        Comments

                        <textarea className="form-control" defaultValue={injury.desc}
                                  required></textarea>

                        <button>Save</button>

                    </div>
                </form>

            )
            }

        </Coverflow></div>:

                              (this.state.x>=386 && this.state.x<=393 && this.state.y>=444 && this.state.y<=462)?
                                  <div>
                                      <div className="content">
          <div className="container-fluid">
              <div className="card">
                  <div className="header">
                      <h4>Notifications</h4>
                  </div>
                  <div className="content">
                      <div className="places-buttons">
                          <div className="row">
                              <div className="col-md-6 col-md-offset-3 text-center">
                                  <h5>Notifications Places
                                      <p className="category">Click to view notifications</p>
                                  </h5>
                              </div>
                          </div>
                          <div className="row">

                              <div className="col-md-4" style={{paddingLeft: 0}}>
                              <img width={267.84} onClick={this._onMouseMove.bind(this)} height={500} src="https://image.ibb.co/noViHf/15.png" alt="first" border="0"></img>






                          </div>
                          <div className='col-md-8'>
                              <form>
                                  <input className='form-control' type="radio" name="firstname" className="span3"></input>
                                  <b> Arthritis osteoarthritis—</b>This condition is due to the wearing down of cartilage that allows bones to glide smoothly within the joints, and can occur with aging, trauma or overuse injury.


                                  <br></br>
                                  <br></br>
                                  <input className='form-control' type="radio" name="firstname" className="span3"></input>
                                  <b> Rotator cuff injuries—</b>These include tendonitis and rotator cuff tears, and are the most common causes of shoulder pain and activity restriction

                                  <br></br>
                                  <br></br>
                                  <input className='form-control' type="radio" name="firstname" className="span3"></input>
                                  <b> Bursitis—</b>This is the inflammation of the bursa, and is most often caused by repetitive motions (overuse), or repeatedly bumping or putting pressure on the area.
                                  <br></br>
                                  <br></br>
                                  <b>Upload your injury images</b>

                                  <input type="file" onChange={this.handleChange}/>
                                  <img width={267.84} src={this.state.file}/>



                              </form>








                          </div>





                      </div>


                  </div>
              </div>
          </div>
      </div>
                                  </div>
                                      <Coverflow
                                          width={960}
                                          height={480}
                                          displayQuantityOfSide={2}
                                          navigation={false}
                                          enableHeading={false}>
                                          <div

                                              role="menuitem"
                                              tabIndex="0">

                                          </div>
                                          {this.state.injuries.map(injury=>


                                              <form style={{zoom:'60%'}} action="mail.php" method="post">
                                                  <div className="card border-primary rounded-0">

                                                      <div className="card-header p-0">
                                                          <div className="bg-info text-white text-center py-2">
                                                              < b>{injury.location}</b>
                                                              < b>{injury.region}</b>
                                                              <p className="m-0">
                                                                  Cause:
                                                                  <input type="text" defaultValue= {injury.type}/></p>
                                                          </div>
                                                      </div>



                                                      <div className="slidecontainer">
                                                          <div className='row'>

                                                              <div className='col-md-6'>
                                                                  <p>Level of injury</p>
                                                                  <input style={{width:'100%'}} type="range" min="1" max="100"  defaultValue={injury.intensity} className="slider"
                                                                         id="myRange" />
                                                                  <br></br></div>

                                                              <div className='col-md-6'>


                                                                  <img src='data:image/jpeg;base64,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' style={{width:'100%'}}></img>
                                                              </div>

                                                          </div>
                                                      </div>



                                                      <br></br>
                                                      Comments

                                                      <textarea className="form-control" defaultValue={injury.desc}
                                                                required></textarea>

                                                      <button>Save</button>

                                                  </div>
                                              </form>

                                          )
                                          }

                                      </Coverflow>
                                  </div>:
                                  <div>
                                      <div className="content">
                                          <div className="container-fluid">
                                              <div className="card">
                                                  <div className="header">
                                                      <h4>Notifications</h4>
                                                  </div>
                                                  <div className="content">
                                                      <div className="places-buttons">
                                                          <div className="row">
                                                              <div className="col-md-6 col-md-offset-3 text-center">
                                                                  <h5>Injury report
                                                                      <p className="category">Click to view notifications</p>
                                                                  </h5>
                                                              </div>
                                                          </div>
                                                          <div className="row">

                                                              <div className="col-md-4" style={{paddingLeft: 0}}>
                                                                  <img width={267.84} onClick={this._onMouseMove.bind(this)} height={500} src="https://image.ibb.co/ffLuOL/1.png" alt="first" border="0"></img>







                                                              </div>
                                                              <div className='col-md-8'>
                                                                  <form>
                                                                      <input className='form-control' type="radio" name="firstname" className="span3"
                                                                             onChange={ e => this.setState({ cause : 'Concussion' }) }
                                                                      ></input>
                                                                      <b> Concussion—</b>A concussion is a type of traumatic brain injury (TBI) that happens when the brain is jarred or shaken hard enough to bounce against the skull



                                                                      <br></br>
                                                                      <br></br>
                                                                      <input className='form-control' type="radio" name="firstname" className="span3"

                                                                             onChange={ e => this.setState({ cause : 'Contusion' }) }
                                                                      ></input>
                                                                      <b> Contusion—</b>Bruise on the brain that can cause swelling

                                                                      <br></br>
                                                                      <br></br>
                                                                      <input className='form-control' type="radio" name="firstname" className="span3"
                                                                             onChange={ e => this.setState({ cause : 'Hematoma' }) }
                                                                      ></input>
                                                                      <b> Hematoma—</b> Bleeding in the brain that collects and forms a clot.
                                                                      <br></br>
                                                                      <br></br>

                                                                      <input className='form-control' type="radio" name="firstname" className="span3"
                                                                             onChange={ e => this.setState({ cause : 'Skull fracture' }) }></input>
                                                                      <b> Skull fracture</b>
                                                                      <br></br>
                                                                      <br></br>


                                                                      <div className="slidecontainer">


                                                                          <p>Level of injury</p>
                                                                          <input style={{width:'40%'}} type="range" min="1" max="100"  defaultValue="50" className="slider"
                                                                                 id="myRange" onChange={ e => this.setState({ level : e.target.value }) }/>
                                                                          <br></br>
                                                                      </div>


                                                                      <br></br>
                                                                      Comments

                                                                      <textarea className="form-control" placeholder="Envianos tu Mensaje"
                                                                                required
                                                                                onChange={ e => this.setState({ desc : e.target.value }) }
                                                                      ></textarea>

                                                                      <br></br>


                                                                      <b>Upload your injury images</b>

                                                                      <input type="file" onChange={this.handleChange}/>
                                                                      <img width={267.84} src={this.state.file}/>

                                                                      <input type='submit' value ='Create injury' onClick={this.newinjuryclick}/>



                                                                  </form>








                                                              </div>





                                                          </div>


                                                      </div>
                                                  </div>
                                              </div>
                                          </div>

                                          <Coverflow
                                              width={960}
                                              height={480}
                                              displayQuantityOfSide={2}
                                              navigation={false}
                                              enableHeading={false}>
                                              <div

                                                  role="menuitem"
                                                  tabIndex="0">

                                              </div>
                                              {this.state.injuries.map(injury=>


                                                  <form style={{zoom:'60%'}} action="mail.php" method="post">
                                                      <div className="card border-primary rounded-0">

                                                          <div className="card-header p-0">
                                                              <div className="bg-info text-white text-center py-2">
                                                                  < b>{injury.location}</b>
                                                                  < b>{injury.region}</b>
                                                                  <p className="m-0">
                                                                      Cause:
                                                                      <input type="text" defaultValue= {injury.type}/></p>
                                                              </div>
                                                          </div>



                                                          <div className="slidecontainer">
                                                              <div className='row'>

                                                                  <div className='col-md-6'>
                                                                      <p>Level of injury</p>
                                                                      <input style={{width:'100%'}} type="range" min="1" max="100"  defaultValue={injury.intensity} className="slider"
                                                                             id="myRange" />
                                                                      <br></br></div>

                                                                  <div className='col-md-6'>


                                                                      <img src='data:image/jpeg;base64,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' style={{width:'100%'}}></img>
                                                                  </div>

                                                              </div>
                                                          </div>



                                                          <br></br>
                                                          Comments

                                                          <textarea className="form-control" defaultValue={injury.desc}
                                                                    required></textarea>

                                                          <button>Save</button>

                                                      </div>
                                                  </form>

                                              )
                                              }

                                          </Coverflow>
                                      </div>
                                      <Coverflow
                                          width={960}
                                          height={480}
                                          displayQuantityOfSide={2}
                                          navigation={false}
                                          enableHeading={false}>
                                          <div

                                              role="menuitem"
                                              tabIndex="0">

                                          </div>
                                          {this.state.injuries.map(injury=>


                                              <form style={{zoom:'60%'}} action="mail.php" method="post">
                                                  <div className="card border-primary rounded-0">

                                                      <div className="card-header p-0">
                                                          <div className="bg-info text-white text-center py-2">
                                                              < b>{injury.location}</b>
                                                              < b>{injury.region}</b>
                                                              <p className="m-0">
                                                                  Cause:
                                                                  <input type="text" defaultValue= {injury.type}/></p>
                                                          </div>
                                                      </div>



                                                      <div className="slidecontainer">
                                                          <div className='row'>

                                                              <div className='col-md-6'>
                                                                  <p>Level of injury</p>
                                                                  <input style={{width:'100%'}} type="range" min="1" max="100"  defaultValue={injury.intensity} className="slider"
                                                                         id="myRange" />
                                                                  <br></br></div>

                                                              <div className='col-md-6'>


                                                                  <img src='data:image/jpeg;base64,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' style={{width:'100%'}}></img>
                                                              </div>

                                                          </div>
                                                      </div>



                                                      <br></br>
                                                      Comments

                                                      <textarea className="form-control" defaultValue={injury.desc}
                                                                required></textarea>

                                                      <button>Save</button>

                                                  </div>
                                              </form>

                                          )
                                          }

                                      </Coverflow>
                                  </div>











    );
  }
}

export default Notifications;