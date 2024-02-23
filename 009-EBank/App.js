import {Route, Switch} from 'react-router-dom'
import './App.css'
import LoginRoute from './components/LoginRoute'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'

const App = () => (
  <Switch>
    <Route exact path="/ebank/login" component={LoginRoute} />
    <ProtectedRoute exact path="/" component={Home} />
    <Route component={NotFound} />
  </Switch>
)

export default App
