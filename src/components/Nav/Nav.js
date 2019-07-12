import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import './Nav.css'
import RecipeContext from '../../contexts/RecipeContext'
import logo from '../../images/LemonGreen.jpg'


export default class Nav extends Component {
  static contextType = RecipeContext

  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    this.context.setLogInFalse()
  }

  renderLogoutLink() {
    return (
      <li className='logoutButton'>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
      </li>
    )
  }

  renderLoginLink() {
    return (
      <>
      <li className='loginButton'>
        <Link
          to='/login'>
          Log In
        </Link>
      </li>
      <li className="register">
        <Link
          to='/register'>
          Register
        </Link>
      </li>
      </>
    )
  }

  render() {
    return <>
      <ul className={`mainNav one-edge-shadow ${this.props.path !== '/' ? `navColor` : ''}`}>
        <li className="homeButton">
            <Link to={`/`}>Home</Link>
        </li>
        <li>
        <a href='#search'>
          Recipes
        </a>
        </li>
        <li><img className="logo" alt="logo" src={`${logo}`}/></li>
        {TokenService.hasAuthToken() && this.context.loggedIn
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </ul>
    </>
  }
}
