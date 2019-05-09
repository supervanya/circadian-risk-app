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
  renderUsers(){
      if (!this.state.isLoaded) {
        return(
          <img src="https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"></img>
        )
      } else {
        return(
          <div>
            {this.state.users.map(user => (
              <div className="person">
                <img className="avatar" src={user.avatar}></img>
                <h2>{user.first_name}</h2>
                <p>Email: <b>{user.email}</b></p>
              </div>
            ))}
          </div>
        )  
      }
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
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React!!
          </a>

        {/* button to load the random users */}
        <button className="b1" onClick={() => this.getUsers()}>Load users</button>
        </header>
        {this.renderUsers()}
      </div>
    );
  }
}

export default App;
