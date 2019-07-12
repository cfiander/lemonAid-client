import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import { RecipeContextProvider } from './contexts/RecipeContext'
import App from './components/App/App'
import './index.css'


ReactDOM.render(
    <RecipeContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </RecipeContextProvider>,
    document.getElementById('root')
  )
  
  serviceWorker.unregister()

