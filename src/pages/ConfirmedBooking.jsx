import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Confirmed() {
    const bookings = JSON.parse(localStorage.getItem('bookings'));
    return (
        <>
            <Nav />
            <div className='form '>
                <p>Thank you!</p>
                <p>Reservation confirmed.</p>
                <p>Date: {bookings.resDate}</p>
                <p>Time: {bookings.resTime}</p>
                <p>Number of guests: {bookings.guests}</p>
                <p>Occasion: {bookings.occasion}</p>
                
            </div>
            <Footer />
        </>
    )
}