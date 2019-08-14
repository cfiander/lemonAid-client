import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Nav from '../Nav/Nav'
import RecipePage from '../../routes/RecipePage/RecipePage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'
import './App.css';
import LandingPage from '../../routes/LandingPage/LandingPage';
import AboutPage from '../../routes/AboutPage/AboutPage';




class App extends React.Component {
  render() {
    return (
      <main>
        <nav>
            <Nav/>
        </nav>
        <main>
        <Switch>
        <Route 
        exact
        path={`/`}
        component={AboutPage}
        />
        <Route 
        exact
        path={`/about`}
        component={AboutPage}
        />
        <Route 
        exact
        path={`/LandingPage`}
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
      </main>
    )
  }
}

export default App;
