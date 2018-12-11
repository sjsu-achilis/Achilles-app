import React, { Component } from 'react';





class ProfileForm extends Component {
    constructor(props) {
        super(props);

        this.state = { userid:localStorage['userinfo'],email: '',height: '',weight:'',name:'',gender:'',
            age:'',
            sport_id:1,
            role:'',
            organization:'',sports:['tennis','soccer','football'],quest:[]};
        this.handleClick=this.handleClick.bind(this);
        this.updateq=this.updateq.bind(this);


    }
    componentWillMount() {

        var sports = []
        fetch('http://ec2-54-201-123-10.us-west-2.compute.amazonaws.com:5000/get_user_info?userid=' + localStorage['userinfo']).then(
            results => {
                return results.json();
            }
        ).then(data =>

            this.setState({
                email: data.email,
                name: data.name,
                height: data.height,
                weight: data.weight,
                gender: data.gender,
                age: data.age,
                sport_id: data.sport_id,
                role: data.role,
                organization: data.organization

            })
        );


    }

    componentDidMount() {
        var url = "http://ec2-54-201-123-10.us-west-2.compute.amazonaws.com:5000/get_question_response?userid=" + localStorage['userinfo'];
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(d => {
                this.setState({ quest: d.answers });
                console.log("state", this.state.quest)
            })
            .catch(error => console.log(error))
    }



    handleChange(param1,event)
    {
       var answers=JSON.parse(JSON.stringify(this.state.quest));
       answers.forEach(function(obj){
          if(obj.qid==param1)
          {
              obj.response='true';
          }
       })

        this.setState({
            quest:answers
        })
    }


    handleChange2(param1,event)
    {
        var answers=JSON.parse(JSON.stringify(this.state.quest));
        answers.forEach(function(obj){
            if(obj.qid==param1)
            {
                obj.response='false';
            }
        })


        this.setState({
            quest:answers
        })
    }

    handleClick(event) {
       var newbody=JSON.parse( JSON.stringify(this.state));
       delete newbody.sports;
        delete newbody.quest;
       console.log(newbody);

        fetch("http://ec2-54-201-123-10.us-west-2.compute.amazonaws.com:5000/update_user_info", {
            method: "post",

            //make sure to serialize your JSON body
            body: JSON.stringify(newbody)
        })
            .then( (response) => {
                console.log(response)
                //do something awesome that makes the world a better place
            });
    }

    updateq(event)
    {
        var newbody=JSON.parse( JSON.stringify(this.state.quest));

        console.log(newbody);

        fetch("http://ec2-54-201-123-10.us-west-2.compute.amazonaws.com:5000/edit_qstn_response", {
            method: "post",

            //make sure to serialize your JSON body
            body: JSON.stringify({'answers':newbody,"user_id":this.state.userid})
        })
            .then( (response) => {
                console.log(response)
                //do something awesome that makes the world a better plac
    })
    }


    render() {
        return  (
            <div>
        <div className="card">
            <div className="header">
                <h4 className="title">Edit Profile</h4>
            </div>
            <div className="content">
                <form>
                    <div className="row">
                        <div className="col-md-5">
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text"  readOnly="readOnly" className="form-control" disabled="" placeholder="Company"
                                       value={localStorage['userinfo']}/>
                            </div>
                        </div>

                        <div className="col-md-7">
                            <div className="form-group">
                                <label>Username</label>
                                <input type="email" className="form-control"  placeholder={this.state.email}
                                       onChange={ e => this.setState({ email : e.target.value }) }

                                       value={this.state.email}/>
                            </div>
                        </div>
                    </div>



                    <div className="row">

                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Sports: Change from    <b> {this.state.sports[this.state.sport_id-1]}</b></label>

                                <select style={{
                                    marginLeft: 16,
                                    height: 29
                                }}>
                                    {this.state.sports.map(sport=><option >{sport}</option>)
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="col-md-5">

                            <input type="radio" checked={this.state.role}
                                   onChange={ e => this.setState({ role : true })}
                                      />  Athelete


                            <input  style={{marginLeft:10,marginRight:5}}type="radio" checked={!this.state.role}
                                   onChange={ e => this.setState({ role : false })}
                                    />Coach

                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <label>Organization</label>
                                <input type="text"
                                       onChange={ e => this.setState({ organization : e.target.value }) }
                                       className="form-control" placeholder="gender" value={this.state.organization}/>
                            </div>
                        </div>

                    </div>


                    <div className="row">
                        <div className="col-md-3">
                            <div className="form-group">
                                <label>age</label>
                                <input type="text" className="form-control"
                                       onChange={ e => this.setState({ age : e.target.value }) }
                                       placeholder="age" value={this.state.age}/>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <label>gender</label>
                                <input type="text"
                                       onChange={ e => this.setState({ gender : e.target.value }) }
                                       className="form-control" placeholder="gender" value={this.state.gender}/>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <label>Height</label>
                                <input type="number"
                                       onChange={ e => this.setState({ height : e.target.value }) }
                                       className="form-control" placeholder={this.state.height} value={this.state.height}/>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <label>Weight</label>
                                <input type="number" className="form-control"
                                       onChange={ e => this.setState({ weight : e.target.value }) }
                                       placeholder={this.state.weight} value={this.state.weight}/>
                            </div>
                        </div>


                    </div>


                    <button  onClick={this.handleClick} type="submit" className="btn btn-info btn-fill pull-right">Update Profile</button>
                    <div className="clearfix"></div>
                </form>
            </div>
        </div>


            <div className="card">
            <div className="header">
            <h4 className="title">Update Q&A</h4>
    </div>
        <div className="content">
            {
                this.state.quest.map(((quest, index) =>

                            <ul className='row'>
                                <li>
                                    {quest.qstn}

                                    <input type="radio" style={{marginLeft:10}} checked={quest.response=='true'}
                                           onChange={ this.handleChange.bind(this, quest.qid) }
                                    />  Yes


                                    <input  style={{marginLeft:10,marginRight:5}}type="radio" checked={quest.response=='false'}
                                            onChange={ this.handleChange2.bind(this, quest.qid) }
                                    />No


                                </li>

                            </ul>


                ))
            }
            <button  onClick={this.updateq} type="submit" className="btn btn-info btn-fill pull-right">Update Q&A</button>

        </div>
        </div>
            </div>
    )}
}
export default ProfileForm;