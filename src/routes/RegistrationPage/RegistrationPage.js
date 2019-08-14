import React, { Component } from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import { Helmet } from "react-helmet";
export default class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }


  // componentDidMount() {
  //   document.title = "Lemonaid";
  // }

  handleRegistrationSuccess = user => {
    const { history } = this.props
    history.push('/login')
  }

  render() {
    return (
      <section className="registration">
      <Helmet>
        <title>Registration</title>
        <meta name="description" content="Register as a lemonaid user" />
        <meta name="keywords" cpntent="recipe,registration" />
      </Helmet>
        <h1 className="heroTitle">Register</h1>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </section>
    )
  }
}