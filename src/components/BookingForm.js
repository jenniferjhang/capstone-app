import React, { useState } from "react";
//object destructuring, imports react, then useState

const BookingForm = () => {
    //initial state values
    const [formValues, setFormValues] = useState({
        date: "",
        time: "",
        guests: "1",
        occasion: "",
    });
    const [availableTimes, setAvailableTimes] = useState({
        option1: "17:00",
        option2: "18:00",
        option3: "19:00",
        option4: "20:00",
        option5: "21:00",
        option6: "22:00",
    });
    //create copy & update value
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues((prevFormValues) => ({
            ...prevFormValues,
            [name]: value,
        }));
    };
    //handle submit
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
        setFormValues("");
    }

    return (
        <div className="form-container">
            <h1>Reserve A Table</h1>
            <form className="booking-form" onSubmit={handleSubmit}>
                <label htmlFor="res-date">What day?</label>
                <input
                    type="date"
                    id="res-date"
                    name="date" //IMPORTANT! handle submit won't work w/o it
                    value={formValues.date}
                    onChange={handleChange}
                />
                <label htmlFor="res-time">What time?</label>
                <select
                    id="res-time"
                    name="time"
                    value={formValues.time}
                    onChange={handleChange}
                >
                    <option>{availableTimes.option1}</option>
                    <option>{availableTimes.option2}</option>
                    <option>{availableTimes.option3}</option>
                    <option>{availableTimes.option4}</option>
                    <option>{availableTimes.option5}</option>
                    <option>{availableTimes.option6}</option>
                </select>
                <label htmlFor="guests">How many guests?</label>
                <input
                    type="number"
                    placeholder="1"
                    min="1" max="10"
                    id="guests"
                    name="guests"
                    value={formValues.guests}
                    onChange={handleChange}
                />
                <label htmlFor="occasion">Occasion?</label>
                <select
                    id="occasion"
                    name="occasion"
                    value={formValues.occasion}
                    onChange={handleChange}
                >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <button className="primary-button" type="submit">Make Your Reservation</button>
            </form>
        </div>
    )
}

export default BookingForm;