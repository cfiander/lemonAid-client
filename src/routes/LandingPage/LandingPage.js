import React from 'react'
import IngredientsPage from '../../components/IngredientsPage/IngredientsPage';

export default function LandingPage(props) {
    return (
        <>
        <section className="landingPage">
            <div className="hero">
                    <div class="learnMore">
                    <p className="aboutArrow">&#x2191;</p>
                    <p>Click the lemon to learn more</p>
                    </div>
                    <h1 className="heroTitle">LemonAid</h1>
                    <h1 className="startHere">Search and Add Ingredients</h1>
                    <br/>
            </div>
            <section className="ingredientsContainer" >
                    <IngredientsPage />
            </section>
        </section>
        </>
    )
}
