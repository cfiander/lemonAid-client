import React, { Component } from 'react'


export default class AboutPage extends Component {

  render() {
    return (
      <section className="about">
        <div className="appDescription">
        <div className="internalContent">
          <p>
            Don't know what to make?
          </p>
          <p>
            Don't want to waste?
          </p>
          <p>
            No sweat.
          </p>
          <p>
            Lemonstand helps you take what you already have and make something great with it.
          </p>
          <p>
            Just start by adding the ingredients you already have on hand and we will deliver one of our 350,000 recipes sourced from the top recipe sites across the internet.
          </p>
        </div>
        <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/526-lemon.svg/1024px-526-lemon.svg.png'} alt="lemonImage" className="lemonImage"></img>
        </div>
      </section>
    )
  }
}