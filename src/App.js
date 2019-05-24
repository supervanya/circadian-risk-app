import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      users: null,
      Height: "100vh"
    };
  }

  getUsers = async () => {
    this.setState(
      {...this.setState,
        isLoaded: false,
        Height: "50vh"})


    let num = Math.random() * (+4 - +1) + +1;
    let api_route = `https://reqres.in/api/users?page=${num}`;
    const response = await fetch(api_route);
    const users = await response.json();


    setTimeout(() => {
      this.setState(
        {...this.setState,
          isLoaded: true,
          users: users.data});  
    },1000)


  };
  
  // returns either a spinner or the users 
  renderUsers() {
    return (
      <div>
        {this.state.users.map(user => (
          <Card key={user.id} avatar={user.avatar} email = {user.email} name = {user.first_name}  />
        ))}
      </div>
    )    
  }

  renderLoader(){
    return (
      <img id="spinner" alt="Loading..." src="https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"></img>
    )
  }

  // renders the main page
  render() {
    return (
      <div className="App">
        <header className="App-header" style={{height:this.state.Height}}>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        {/* button to load the random users */}
        <button className="b1" onClick={() => this.getUsers()}>Load users</button>
        </header>
        <div id="spinnerDiv" className="cards">
          { this.state.isLoaded ? this.renderUsers() : this.renderLoader() }
        </div>
      </div>
    );
  }
}

function Card(props){
  return(
    <div className="person">
      <img alt="Avatar" className="avatar" src={props.avatar}></img>
      <h2>{props.name}</h2>
      <p>Email:</p>
      <p><b>{props.email}</b></p>
    </div>
  )
}

export default App;
