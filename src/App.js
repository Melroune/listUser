import React, { Component } from 'react';
import fetchedUsers from './users.json'
import User from './components/User.js'
import './App.css';



class App extends Component {
  constructor(){
    super()
    this.state = {
      users: [],
      friends: []
    }
  }
  componentDidMount() {
    // fetch -> fetchedUsers 
    this.setState({users: fetchedUsers})
  }
  addUserFriends = id => {
    const friend = this.state.users.find(user => 
      user.id === id
    )
    // console.log(friend)
    const concatFriends = [...this.state.friends, friend]
    // console.log(concatFriends)
    this.setState({friends: concatFriends} )
  }

  render() {
    // console.log(`state user:  ${this.state.users.map(user => console.log(user))}`)
    
    const usersList = this.state.users.map(user => (
      <User
        key={user.id}
        name={user.name}
        id={user.id}
        add={this.addUserFriends}
      />
    ))

    const friendsList = this.state.friends.map(user => (
      <div key={user.id}>{user.name}</div>
      // <User
      //   key={user.id}
      //   name={user.name}
      //   id={user.id}
      //   add={this.addUserFriends}
      // />
    ));

    return <div className="App">
        <span>----- Friend -----</span>
        <div>{friendsList}</div>
        <span>----- Users -----</span>
        <div>{usersList}</div>
      </div>;
  }
}

export default App;
