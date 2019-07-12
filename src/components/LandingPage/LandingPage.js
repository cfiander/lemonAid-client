import React from 'react'
import IngredientsPage from '../../routes/IngredientsPage/IngredientsPage';
import Hero from '../../images/Vintage-kitchen.jpg'


export default function LandingPage(props) {
    return (
    <div>
        <div className="hero" 
        style={{
            backgroundImage: `url${Hero}`,
            backgroundRepeat: `no-repeat`,
            backgroundOrigin: `center`,
            backgroundPosition: `center`,
            backgroundAttachment: `fixed`,
            }}>
        <section>
        <h1 className="heroTitle">LemonAid</h1>
        </section>
        <section >
            <h1 className="startHere">Start Here</h1>
        </section>
        </div>
        <div className="start">
        <section>
            <h1 className="startHere">Search and Add Ingredients</h1>
        </section>
        <section>
            <h1 className="startHere">Filter Your Results</h1>
        </section>
        </div>
        <div className="ingredientsSearch" id="search">
        <section>
            <p className="appDescription">
                Don't know what to make? Don't want to waste? Have no fear. Lemonstand helps you take what you already have and make something great with it.
                Just start by adding the ingredients you already have on hand and we will deliver one of our 350,000 recipes sourced from the top recipe sites across the internet.  
            </p>
        </section>
        <section>
        <IngredientsPage/>
        </section>
        <section>
            
        </section>
        </div>
    </div>
    )
}
