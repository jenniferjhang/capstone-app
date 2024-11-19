//Card data
const testimonials = [
    {
        rating: "4/5",
        title: "Amazing, so delicious.",
        description: "Our experience at Little Lemon was above and beyond.",
        getImageSrc: () => require("../assets/user aya.png"),
        userName: "Aya M.",
    },
    {
        rating: "5/5",
        title: "Bring your friends & family~",
        description: "The staff was super friendly, and the food was Michelin star level.",
        getImageSrc: () => require("../assets/user tilli.png"),
        userName: "Tilli B.",
    },
    {
        rating: "4/5",
        title: "Convenient table booking.",
        description: "I love using their table booking system, so reliable.",
        getImageSrc: () => require("../assets/user april.png"),
        userName: "April W.",
    },
    {
        rating: "5/5",
        title: "Hands down the best in Chicago!",
        description: "Don't look any further, this is the best restaurant to dine in.",
        getImageSrc: () => require("../assets/user caleb.png"),
        userName: "Caleb Y.",
    },
]
//Card structure with parameters
export const TestimonialsCard = ({rating, title, description, imageSrc, userName}) => {
    return (
        <div className="testimonials-card">
            <div className="icon-rating">
                <span className="material-symbols-rounded">
                    star
                </span>
                <h4>{rating}</h4>
            </div>
            <h4>{title}</h4>
            <p>{description}</p>
            <div className="user">
                <img src={imageSrc}></img>
                <h5>{userName}</h5>
            </div>
        </div>
    )
}
//Section component with header and card list
const TestimonialsSection = () => {
    return (
        <section className="testimonials-section">
            <h3 className="testimonials-header">Testimonials</h3>
            <div className="testimonials-cardList">
                {testimonials.map((testimonial) => (
                    <TestimonialsCard
                    key={testimonial.title}
                    rating={testimonial.rating}
                    title={testimonial.title}
                    description={testimonial.description}
                    imageSrc={testimonial.getImageSrc()}
                    userName={testimonial.userName}
                    />
                ))}
            </div>
        </section>
    )
}

export default TestimonialsSection;