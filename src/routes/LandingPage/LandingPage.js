import React from 'react'
import IngredientsPage from '../../components/IngredientsPage/IngredientsPage';
import { Helmet } from "react-helmet";
export default class LandingPage extends React.Component {

    // componentDidMount() {
    //     document.title = "Lemonaid";
    // }

    render() {
        return (
            <section className="landingPage">
                <Helmet>
                    <title>Lemonaid</title>
                    <meta name="description" content="Add ingredients for the recipe search" />
                    <meta name="keywords" cpntent="recipe" />
                </Helmet>
                <div className="hero">
                    <div>
                        <p className="aboutArrow">&#x2191;</p>
                    </div>
                    <h1 className="heroTitle">LemonAid</h1>
                    <h1 className="startHere">Search and Add Ingredients</h1>
                    <br />
                </div>
                <section className="ingredientsContainer" >
                    <IngredientsPage />
                </section>
            </section>
        )
    }
}
