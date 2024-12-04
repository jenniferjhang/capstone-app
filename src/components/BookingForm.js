import React, { useState, useReducer } from "react";

const BookingForm = (updateTimes, initializeTimes) => {
    const [formValues, setFormValues] = useState({
        date: "",
        time: "",
        guests: "1",
        occasion: "hello",
    });

    const [times, dispatch] = useReducer(updateTimes, initializeTimes);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues((prevFormValues) => ({
            ...prevFormValues,
            [name]: value,
        }));
    };

    const handleSelect = (action) => {
        dispatch ({ type: "BOOKED", id: action.id })
    }

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
                    {times.map((time) => (
                        <div key={time.id}>
                            <option
                                selected={time.booked}
                                onChange={() => handleSelect(time)}>
                                {time.slot}
                            </option>
                        </div>
                    ))}
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
                    <option>Choose an occasion</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Other</option>
                </select>
                <button className="primary-button" type="submit">Make Your Reservation</button>
            </form>
        </div>
    )
}

export default BookingForm;