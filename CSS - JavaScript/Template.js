function Crack() {
    const Once = document.getElementById('BookingPage');
    if(Once.className === "Booking_Off") {
        Once.className += " Booking_On";
    } else {
        Once.className = "Booking_Off";
    }
}