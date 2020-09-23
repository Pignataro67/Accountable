import React, {Component} from 'react';
import './App.css';
import UserHomepage from './Components/userHomepage';
import Timer from './Components/timer';

class App extends Component {
  constructor () {
    super()
    this.state = {
      user: {
        name: "",
        id: 1
      },
      tasks: [
        {
          title:"Do some weird stuff",
          status: "open",
          workSessions: ""
        }
      ],
      workSessions: []
      }
    }

    componentDidMount(){

      fetch("http://localhost:3001/work_sessions")
      .then(res => res.json())
      .then(data => filterWorkSessions(data))
  
      const filterWorkSessions = (data) => {
        let sessions = data.filter( item => {
          return item.user_id === this.state.user.id
        })
      }
    }
    
render() {

  return (
    <div className="App">
      <UserHomepage />
    </div>
  );
}

}

export default App;