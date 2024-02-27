import './App.css'
import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import MeetUpContext from './Context/MeetupContext'

import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'

class App extends Component {
  state = {
    isRegistered: false,
    name: '',
    topicDisplayText: '',
  }

  updateRegistrationStatus = () => {
    this.setState({isRegistered: true})
  }

  updateName = name => {
    this.setState({name})
  }

  updateTopic = topic => {
    this.setState({topicDisplayText: topic})
  }

  render() {
    const {isRegistered, name, topicDisplayText} = this.state
    return (
      <MeetUpContext.Provider
        value={{
          isRegistered,
          name,
          topicDisplayText,
          updateRegistrationStatus: this.updateRegistrationStatus,
          updateName: this.updateName,
          updateTopic: this.updateTopic,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </MeetUpContext.Provider>
    )
  }
}
export default App
