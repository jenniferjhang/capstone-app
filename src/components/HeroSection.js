import Hero from '../assets/restauranfood.jpg'

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                <button className="primary-button">Reserve a Table</button>
            </div>
            <img className="hero-img" src={Hero}></img>

        </section>
    )
}

export default HeroSection;