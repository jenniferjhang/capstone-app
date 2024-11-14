import Owners from '../assets/Mario and Adrian A.jpg'

const AboutSection = () => {
    return (
        <section className="about-section">
            <div className="about-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                <button className="primary-button">Learn More</button>
            </div>
            <img className="about-img" src={Owners}></img>
        </section>
    )
}

export default AboutSection;