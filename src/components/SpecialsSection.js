//Card data
const specials = [
    {
        title: "Greek Salad",
        price: "$12.99",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        getImageSrc: () => require("../assets/greek salad.jpg")
    },
    {
        title: "Bruschetta",
        price: "$7.99",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.",
        getImageSrc: () => require("../assets/bruschetta.png")
    },
    {
        title: "Grilled Fish",
        price: "$20.00",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.",
        getImageSrc: () => require("../assets/grilled fish.jpg")
    },
];
//Card structure with parameters
export const SpecialsCard = ({title, price, description, imageSrc}) => {
    return (
        <div className="specials-card">
            <div>
                <img src={imageSrc} className="specials-img"/>
            </div>
            <div className="specials-text">
                <div className="title-price">
                    <h4>{title}</h4>
                    <h4>{price}</h4>
                </div>
                <p>{description}</p>
                <div className="specials-cta">
                    <a>Order Now</a>
                    <span className="material-symbols-rounded">
                        arrow_forward
                    </span>
                </div>
            </div>
        </div>
    )
}
//Section component with header and card list
const SpecialsSection = () => {
    return (
        <section className="specials-section">
            <div className="specials-header">
                <h3>This week's specials</h3>
                <button className="primary-button">Online Menu</button>
            </div>
            <div className="specials-cardList">
                {specials.map((special) => (
                    <SpecialsCard
                        key={special.title}
                        title={special.title}
                        price={special.price}
                        description={special.description}
                        imageSrc={special.getImageSrc()}
                    />
                ))}
            </div>
        </section>
    )
}

export default SpecialsSection;
