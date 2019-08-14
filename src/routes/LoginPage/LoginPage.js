import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import { Helmet } from "react-helmet";
export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }
  // componentDidMount() {
  //   document.title = "Lemonaid";
  // }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }

  render() {
    return (
      <section className="login">
        <Helmet>
          <title>Login</title>
          <meta name="description" content="Lemonaid login form" />
          <meta name="keywords" cpntent="recipe,food,login" />
        </Helmet>
        <h1 className="heroTitle">Login</h1>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
        />
      </section>
    )
  }
}
