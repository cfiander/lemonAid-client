import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }

  render() {
    return (
        <section className="login">
        <h1 className="heroTitle">Login</h1>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
        />
        </section>
    )
  }
}
