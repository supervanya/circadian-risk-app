import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      users: null
    };
  }

  getUsers = async () => {
    let num = Math.random() * (+4 - +1) + +1;
    let api_route = `https://reqres.in/api/users?page=${num}`;
    const response = await fetch(api_route);
    const users = await response.json();
    this.setState(
      {isLoaded: true, 
       users: users.data});
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
      <img alt="Loading..." src="https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"></img>
    )
  }

  // renders the main page
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        {/* button to load the random users */}
        <button className="b1" onClick={() => this.getUsers()}>Load users</button>
        </header>
        { this.state.isLoaded ? this.renderUsers() : this.renderLoader() }
      </div>
    );
  }
}

function Card(props){
  return(
    <div className="person">
      <img alt="Avatar" className="avatar" src={props.avatar}></img>
      <h2>{props.name}</h2>
      <p>Email: <b>{props.email}</b></p>
    </div>
  )
}

export default App;
