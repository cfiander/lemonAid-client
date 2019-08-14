import React, { Component } from 'react'
import { Section } from '../../components/Utils/Utils'
import { Helmet } from "react-helmet";
export default class NotFoundPage extends Component {
  // componentDidMount() {
  //   document.title = "Lemonaid";
  // }
  render() {
    return (
      <Section className='NotFoundPage'>
        <Helmet>
          <title>Not Found</title>
          <meta name="description" content="No page here" />
          <meta name="keywords" cpntent="recipes,ingredients,waste" />
        </Helmet>
        <h2>404 - Page not found</h2>
        <p>Try going back to your previous page.</p>
      </Section>
    )
  }
}
