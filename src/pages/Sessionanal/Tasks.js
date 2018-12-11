import React, { Component } from 'react';
import cx from 'classnames';
import uncheckImage from 'assets/images/checkbox-uncheck.svg';
import checkImage from 'assets/images/checkbox-check.svg';
import io from 'socket.io-client';


const socket = io('http;//localhost:3001', {secure: true});






class MessageForm extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    onSubmit = e => {
        e.preventDefault();

        if (this.state.text !== '') {
            const message = {
                type: 'message',
                text: this.state.text,
                time: 0, // Set by the server
                user: 0, // Set before sending
                currentuser: true
            };

            this.props.onMessageSubmit(message);
            this.setState({text: ''});
        }
    }

    onChange = e => {
        this.setState({text: e.target.value});
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{position: 'absolute', bottom: '0px'}} >
                <input autoFocus={true}
                       onChange={this.onChange}
                       placeholder="Type a message"
                       style={{width: '220px'}}
                       value={this.state.text} />
                <input className="btn btn-primary"
                       style={{width: '66px'}}
                       type="submit"
                       value="send" />
            </form>
        );
    }
}

class MessageList extends Component {
    render() {
        const listItems = this.props.messagelist.map((message, i) => {
            if (message.type === 'message') {
                return (
                    <MessageBox currentuser={message.currentuser}
                                key={i}
                                text={message.text}
                                time={message.time} />
                );
            }
            return (
                <StatusBox count={message.count} key={i} status={message.status} />
            );
        });

        return (

            <div >
                {listItems}
            </div>

        );
    }
}


class MessageBox extends Component {
    render() {
        if (this.props.currentuser === true) {
            return (
                <div >
                    <div style={{display: 'inline-block',
                        maxWidth: '80%',
                        wordWrap: 'break-word',
                        backgroundColor: '#dddddd',
                        padding: '5px 5px 5px 5px',
                        fontSize: '0.7rem',
                        borderRadius: '5px',
                        marginTop: '10px',
                        boxshadow: '1px 1px 1px #888888'}}> {this.props.text} </div>
                    <br />
                    <div style={{color: 'grey',
                        marginBottom: '5px',
                        marginTop: '3px'}}> {this.props.time} </div>
                </div>

            );
        }

        return (
            <div>
                <div style={{display: 'inline-block',
                    color: 'white',
                    maxWidth: '80%',
                    wordWrap: 'break-word',
                    backgroundColor: '#69c29f',
                    padding: '5px 5px 5px 5px',
                    fontSize: '0.7rem',
                    borderRadius: '5px',
                    marginTop: '10px',
                    marginLeft: '240px',
                    boxshadow: '1px 1px 1px #888888'}}> {this.props.text} </div>
                <br />
                <div > {this.props.time} </div>
            </div>
        );
    }
}

class StatusBox extends Component {
    render() {
        return (
            <div >
                {this.props.status}
                <br />
                there {this.props.count > 1 ? 'are' : 'is'}
                {this.props.count}
                {this.props.count > 1 ? 'participants' : 'participant'}
            </div>

        );
    }
}







var List = React.createClass({



    render: function() {
        return (<div>
            { this.props.data.map(function(item) {

              if(item.severity==='normal')
                 var  url='https://i.pinimg.com/originals/77/c8/b4/77c8b4b0d78bdf1c71bdc63b64456a63.png';
                if(item.severity==='high')
                    var url='https://mbtskoudsalg.com/images/color-lights-png-5.png';
                if(item.severity==='recovered')
                    var url='https://mbtskoudsalg.com/images/glowing-transparent-shine-3.png';

                //console.log(item.name);
                if(item.name==='head')
                  var styles={height:25,position:'absolute',left:137,top:125}

                if(item.name==='shoulderR')
                    var styles={height:25,position:'absolute',left:180,top:185}
                if(item.name==='elbowL')
                    var styles={height:25,position:'absolute',left:85,top:265}
                if(item.name==='elbowR')
                    var styles={height:25,position:'absolute',left:190,top:265}
                if(item.name==='cruciateLigamentL')
                    var styles={height:25,position:'absolute',left:115,top:415}
                if(item.name==='cruciateLigamentR')
                    var styles={height:25,position:'absolute',left:158,top:415}
                if(item.name==='kneeL')
                    var styles={height:25,position:'absolute',left:122,top:495}
                if(item.name==='kneeR')
                    var styles={height:25,position:'absolute',left:155,top:495}
                if(item.name==='shoulderL')
                    var styles={height:25,position:'absolute',left:95,top:185}
                if(item.name==='harmstringL')
                    var styles={height:25,position:'absolute',left:110,top:360}
                if(item.name==='harmstringR')
                    var styles={height:25,position:'absolute',left:160,top:360}


              //  //console.log(url,height,item.name)


                  return <img height={25} src={url} style={styles}  ></img>


                /* if(item.name==='shoulderL')
                     return  <img src={url} style={{height:25,position:'absolute',left:95,top:100}}  id="DislocatedShoulderL" ></img>


                 if(item.name==='shoulderR')
                     return <img src={url} style={{height:25,position:'absolute',left:180,top:100}}  id="DislocatedShoulderR" ></img>


                 if(item.name==='elbowL')
                     return <img src={url} style={{height:25,position:'absolute',left:180,top:100}}  id="elbowL" ></img>



                 if(item.name==='elbowR')
                     return <img src={url} style={{height:25,position:'absolute',left:180,top:100}}  id="elbowR" ></img>


                 if(item.name==='harmstringL')
                     return <img src={url} style={{height:25,position:'absolute',left:110,top:280}}  id="harmstringL" ></img>



                 if(item.name==='harmstringR')
                     return <img src={url} style={{height:25,position:'absolute',left:162,top:280}}  id="harmstringR" ></img>


                 if(item.name==='cruciateLigamentL')
                     return <img src={url} style={{height:25,position:'absolute',left:114,top:335}} id="cruciateLigamentL" ></img>

                 if(item.name==='cruciateLigamentR')
                     return <img src={url} style={{height:25,position:'absolute',left:158,top:335}}  id="cruciateLigamentR" ></img>

                 if(item.name==='kneeL')
                     return <img src={url} style={{height:25,position:'absolute',left:122,top:410}}   id="kneeL" ></img>

                 if(item.name==='kneeR')
                     return <img src={url} style={{height:25,position:'absolute',left:155,top:410}}   id="kneeR" ></img>

 */



            })
            }
        </div>);
    }
});

class Tasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
      text:'',
    url:'',
    todos: [
      {
        id: 1,
        content: 'Completed 4K RUN in San Jose"',
        completed: true
      },
      {
        id: 2,
        content: 'Had one hour workout session',
        completed: true
      },
      {
        id: 3,
        content: 'Had one hour workout session',
        completed: true
      },
      {
        id: 4,
        content: 'Ankle sprain in the foot',
        completed: false
      },
      {
        id: 5,
        content: 'Participated in international league  challenge'
      },
      {
        id: 6,
        content: 'Lines From Great Russian Literature? Or E-mails From My Boss?',
        completed: false
      }
    ],
      injurydata:[{

          id: 1,
          name: 'head',
          severity: 'high'
      },
          {
              id: 1,
              name: 'kneeL',
              severity: 'normal'
          },
          {
              id: 1,
              name: 'elbowL',
              severity: 'normal'
          },
          {
              id: 1,
              name: 'harmstringL',
              severity: 'recovered'
          },
          {
              id: 1,
              name: 'shoulderL',
              severity: 'recovered'
          },
          {
              id: 1,
              name: 'kneeR',
              severity: 'normal'
          },
          {
              id: 1,
              name: 'elbowR',
              severity: 'normal'
          },
          {
              id: 1,
              name: 'cruciateLigamentL',
              severity: 'recovered'
          },
          {
              id: 1,
              name: 'cruciateLigamentR',
              severity: 'recovered'
          },
          {
              id: 1,
              name: 'harmstringR',
              severity: 'normal'
          },
          {
              id: 1,
              name: 'shoulderR',
              severity: 'normal'
          }],
      urls:{
      severe:'https://mbtskoudsalg.com/images/color-lights-png-5.png',
    normal:'https://i.pinimg.com/originals/77/c8/b4/77c8b4b0d78bdf1c71bdc63b64456a63.png',
     recovered:'https://mbtskoudsalg.com/images/glowing-transparent-shine-3.png' },

      search: '',
      text: '',
      messages: [],
      userid: 0,
      users: 0,
      visitor: '',
      right: 14

  };





        this.userAccept = this.userAccept.bind(this);
        this.userJoin = this.userJoin.bind(this);
        this.userLeft = this.userLeft.bind(this);
        this.messageReceive = this.messageReceive.bind(this);
        this.onMessageSend = this.onMessageSend.bind(this);
    }

  toggleComplete = todoId => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === todoId) todo.completed = !todo.completed;
        return todo;
      })
    });
  }

  deleteTodo = todoId => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== todoId),
        injuries:[]
    });
  }





    componentDidMount() {
        // //console.log(this.props.contact.id);
        const users = [];
        const {currentUser} = 'dev1234';

       // this.setState({right: this.props.keyindex * 300 + 224});
        users.push(currentUser);
       // users.push(this.props.contact.id);
        socket.emit('user:request', {origin: currentUser, users});
        socket.on('user:accept', this.userAccept);
        socket.on('user:join', this.userJoin);
        socket.on('user:left', this.userLeft);
        socket.on('send:message', this.messageReceive);


        const newMessages = this.state.messages;
        const incomingmessages = [{msg:'hi'},{msg:'how'}];

        incomingmessages.forEach(msg => {
            msg.currentuser = false;
            newMessages.push(msg);
        });

        this.setState({messages: newMessages});




    }


    componentWillUnmount() {
        socket.emit('user:left');
    }


    userAccept(msg) {
        // //console.log(msg);

        const {currentUser} = localStorage['userinfo'];

        this.setState({userid: currentUser.uid});
        // this.setState({ users : msg.users });

        // const newMessages = this.state.messages;
        // newMessages.push( { 'type' : 'status', 'status' : 'you joined', 'vistor' : msg.visitor} );
        // this.setState( {messages : newMessages} );
    }

    userJoin(msg) {
        // //console.log(msg);

        const {currentUser} = localStorage['userinfo'];

        if (currentUser.uid in msg.users && currentUser.uid !== msg.origin) {
            const newMessages = this.state.messages;
            // newMessages.push({'type': 'status',
            // 'status': 'someone joined',
            // 'count': this.state.users});

            this.setState({messages: newMessages});
        }
    }

    userLeft() {
        this.setState((prevState, props) => ({users: prevState.users - 1}));

        const newMessages = this.state.messages;
        // newMessages.push( { 'type' : 'status', 'status' : 'someone left', 'count' : this.state.users} );

        this.setState({messages: newMessages});
    }

    messageReceive(msg) {
        if (msg.user === this.state.userid) {
            msg.currentuser = true;
        } else {
            msg.currentuser = false;
        }
        const newMessages = this.state.messages;

        newMessages.push(msg);
        this.setState({messages: newMessages});


        //  window.scrollTo(0, document.body.scrollHeight);
    }

    onMessageSend(message) {
        const {currentUser} = localStorage['userinfo'];

        message.user = this.state.sender;
        message.origin = localStorage['userinfo'];
        socket.emit('send:message', message);
    }




  componentWillMount(){

      var url = "http://ec2-54-201-123-10.us-west-2.compute.amazonaws.com:5000/get_injury_history?userid="+localStorage['userinfo'];
      fetch(url)
          .then(response => {
              return response.json();
          })
          .then(d => {
              this.setState({ injuries: d });
              //console.log("state", this.state.injuries)
          })
          .catch(error => console.log(error))
      //do something awesome that makes the wor
  }

  render() {

      const displayChat =
          <div className="card chat-box"
               id="cardbox"
               style={{overflow: 'auto', right: this.state.right}}>
              <header>
          <span style={{fontSize: '0.7rem'}}>
            dev1234
              <div className="autocomplete">
              <input autoComplete="on"
                     className="form-control"
                     list="contacts"
                     onChange={({target}) => this.setState({search: target.value})}
                     placeholder="Add more person"
                     value={this.state.search} />

            </div>
          </span>
                  <button onClick={e => {
                      this.props.onCloseChat(e);
                  }}>X</button>
              </header>
              <MessageList messagelist={this.state.messages} />
              <MessageForm onMessageSubmit={this.onMessageSend} />
          </div>

      return (
      <div className="card ">

        <div className="content">
            <h4><b>Injury Body Map</b></h4>

            <img style={{height:450}} src="https://image.ibb.co/moqgF0/human-form.png" />

            <List data={ this.state.injurydata }  />


            <img height={25} src='https://mbtskoudsalg.com/images/color-lights-png-5.png'  ></img>
            <b>Severe</b>

            <img height={25} src='https://mbtskoudsalg.com/images/glowing-transparent-shine-3.png'  ></img>
            <b>Normal</b>

            <img height={25} src='https://i.pinimg.com/originals/77/c8/b4/77c8b4b0d78bdf1c71bdc63b64456a63.png'  ></img>
            <b>Recovery</b>


          <form>
          {this.state.todos.map(todo => (
            <div className={cx("todo-item", {completed: todo.completed})} key={todo.id}>
              <div className="todo-item-wrapper">
              <label className={cx("checkbox", {
                  checked: todo.completed
                })}
                >
                  <span className="icons">
                    <img className="first-icon" src={uncheckImage} width={17} />
                    <img className="second-icon" src={checkImage} width={17} />
                  </span>
                  <input type="checkbox" data-toggle="checkbox" checked={todo.completed} onChange={() => this.toggleComplete(todo.id)} />
                </label>
                <div className="todo-content">{todo.content}</div>
                <a onClick={() => this.deleteTodo(todo.id)}>
                  &times;
                </a>
              </div>
            </div>
          ))}
          </form>







            <div className="chat-box-container">
                {displayChat}
            </div>









        </div>
        <div className="footer">
          <hr />
          <div className="stats">
            <i className="fa fa-history"></i> Updated 3 minutes ago
              </div>
        </div>
      </div>
    );
  }
}

export default Tasks;