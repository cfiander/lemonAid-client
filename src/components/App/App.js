import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Nav from '../Nav/Nav'
import RecipePage from '../../routes/RecipePage/RecipePage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'
import './App.css';
import LandingPage from '../LandingPage/LandingPage';




class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <nav>
            <Nav/>
        </nav>
        <main>
        <Switch>
        <Route 
        exact
        path={`/`}
        component={LandingPage}
        />
        <Route 
          path={`/login`}
          component={LoginPage}
        />
        <Route 
          path={`/register`}
          component={RegistrationPage}
        />
        <Route 
          path={`/recipes`}
          component={RecipePage}
        />
        <Route
              component={NotFoundPage}
        />
        </Switch>
        </main>
      </div>
    )
  }
}

export default App;
