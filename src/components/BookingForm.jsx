import { useState, useEffect } from "react"
import { fetchAPI, submitAPI } from '../../public/api'
import { useNavigate } from "react-router-dom";


export default function BookingForm() {
    
    const navigate = useNavigate();
    const [availableTimes, setAvailableTimes] = useState([])
    useEffect(() => {
    async function initializeTimes() {
      
        const today = new Date()
        const times =  fetchAPI(today);

        setAvailableTimes(times);
      
    }
    
    initializeTimes();
  }, []);
    // function handleDateChange(e) {
    //     // For now, always set the same times regardless of date
    //     setAvailableTimes(initialTimes);
    // }
    function bookTable(formData) {
        const booking = {
            resTime: formData.get('res-time'),
            resDate: formData.get('res-date'),
            guests: formData.get('guests'),
            occasion: formData.get('occasion')      
        }
        localStorage.setItem('bookings', JSON.stringify(booking))
        const senttoserver =  submitAPI(formData)
        if (senttoserver) {
            navigate("/confirmed")
        }
    }
    return (
        <div className="bk-form">
            <form action={bookTable} aria-label="Booking form">
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" name="res-date" required/>
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" name="res-time"  required>
                    {availableTimes.map((time)=>(
                        <option key={time}>{time}</option>
                    ))}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" name="guests" required/>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" name="occasion" required>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" id="submit" value="Make Your reservation" />
            </form>
        </div>
    )
}