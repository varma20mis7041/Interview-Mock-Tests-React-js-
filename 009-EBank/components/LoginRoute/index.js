import './index.css'
import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

class LoginRoute extends Component {
  state = {
    username: '',
    password: '',
    errMsg: '',
    showError: false,
  }

  onChangeUserInput = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitLoginForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/ebank/login'
    const options = {
      method: 'POST',
      body: JSON.stringify({
        user_id: username,
        pin: password,
      }),
    }
    const fetchResponse = await fetch(url, options)
    const result = await fetchResponse.json()
    if (fetchResponse.ok === true) {
      const jwtToken = result.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 2, path: '/'})
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({errMsg: result.error_msg, showError: true})
    }
  }

  render() {
    const {username, password, errMsg, showError} = this.state
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login_page_bg_container">
        <div className="login_card_container">
          <div className="login_image_container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
              alt="website login"
              className="login_img"
            />
          </div>
          <div className="user_login_container">
            <form className="form_element" onSubmit={this.onSubmitLoginForm}>
              <h1 className="login_page_main_heading">Welcome Back!</h1>
              <div className="label_container">
                <label className="label_element" htmlFor="textInput">
                  User ID
                </label>
                <input
                  type="text"
                  id="textInput"
                  className="input_element"
                  placeholder="Enter User ID"
                  value={username}
                  onChange={this.onChangeUserInput}
                />
              </div>
              <div className="label_container">
                <label className="label_element" htmlFor="passwordInput">
                  PIN
                </label>
                <input
                  type="password"
                  id="passwordInput"
                  className="input_element"
                  placeholder="Enter PIN"
                  value={password}
                  onChange={this.onChangePassword}
                />
              </div>
              <button type="submit" className="login_button_element">
                Login
              </button>
              <div>{showError && <p className="error_msg">{errMsg}</p>}</div>
            </form>
          </div>
        </div>
        <p className="login_credentials">
          *To test this webpage the userid is 142420 and pin is 231225
        </p>
      </div>
    )
  }
}
export default LoginRoute
