import React, { useReducer } from "react";
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import BookingForm from './BookingForm';

const initializeTimes = [
    {id: 1, slot: "2:00 PM", booked: false},
    {id: 2, slot: "3:00 PM", booked: false},
    {id: 3, slot: "4:00 PM", booked: false},
    {id: 4, slot: "5:00 PM", booked: false},
    {id: 5, slot: "6:00 PM", booked: false},
    {id: 6, slot: "7:00 PM", booked: false},
];
//logic: no double booking + update by date
const updateTimes = (state, action) => {
    switch (action.type) {
        case "BOOKED":
          return state.map((time) => {
            if (time.id === action.id) {
                return { ...time, booked: !time.booked};
            } else { return time;}
          });
        default: return state;
    }
};

const BookingPage = () => {
    return (
        <>
            <Header />
            <Nav />
            <BookingForm
                initializeTimes={initializeTimes}
                updateTimes={updateTimes}
            />
            <Footer />
        </>
    )
}

export default BookingPage;