import React, { useState } from 'react';
import axios from 'axios';

const AppointmentBooking = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        const timeParts = time.split(':');
        const bookingTime = parseInt(timeParts[0]) * 60 + parseInt(timeParts[1]);

        const formData = {
            bookingDate: date,
            bookingTime: bookingTime,
            userName: name,
            userEmail: email,
            userPhone: phone,
            userAddress: address
        };
        try {
            await axios.post('https://vhcbackend.vercel.app/appointmentbooking', formData);
            console.log('Appointment booked:', formData);
            setDate('');
            setTime('');
            setName('');
            setEmail('');
            setPhone('');
            setAddress('');
        } catch (error) {
            console.error('Error booking appointment:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className='grid book-div grid-cols-2 mt-40 max-md:mt-20'>
                <div className='ml-40 mt-8 w-4/5 pb-12 text-bookpage'>
                    <h1 className='text-sm font-bold'>We At VHC</h1>
                    <h1 className='text-xl flex font-bold'>Provide you a complete healing Solution</h1>
                    <p className='pt-4'>It provides a convenient solution for patients to book physiotherapy and chiropractic appointments online, reducing the time and effort spent on traditional booking methods.</p>
                    <ul className="list-disc pl-4">
                        <li className='book-li'>Offering cost-effective physiotherapy at home by a professional physiotherapist in Delhi NCR.</li>
                        <li>100% guaranteed, effective, and quality home physiotherapy treatment to our patients.</li>
                        <li>Providing any of the home physiotherapy in Delhi, Gurgaon, Noida & Ghaziabad whether it's Spine, orthopedic, neurological, sports or geriatric physiotherapy at home as per your convenience.</li>
                        <li>Highly personalized care at low cost.</li>
                        <li>Effective and quick physiotherapy at home to get better in the shortest time.</li>
                        <li>Assessment on call.</li>
                        <li>Get Certified, specialized and experienced home physiotherapist in Delhi, Gurgaon, Noida & Ghaziabad.</li>
                    </ul>
                </div>
                <div className="appoint-box max-w-md ml-auto mr-40 float bg-white shadow-md rounded-b-md rounded-t-sm">
                    <div className='bg-shiva p-3 rounded-t-sm'><h2 className="text-xl text-center font-semibold mb-4">Book an Appointment</h2></div>
                    <form method='post' onSubmit={handleSubmit} className='p-4 rounded-sm'>
                        <div className="mb-4">
                            <label htmlFor="date" className="block text-md font-medium text-gray-700 mb-1">Date:</label>
                            <input
                                id="date"
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="time" className="block text-md font-medium text-gray-700 mb-1">Time:</label>
                            <input
                                id="time"
                                type="time"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-md font-medium text-gray-700 mb-1">Name:</label>
                            <input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-md font-medium text-gray-700 mb-1">Email:</label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone" className="block text-md font-medium text-gray-700 mb-1">Phone:</label>
                            <input
                                id="phone"
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="address" className='block text-md font-medium text-gray-700 mb-1'>Address:</label>
                            <input
                                id="address"
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                                required
                            />
                        </div>
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300" disabled={loading}>
                {loading ? 'Booking...' : 'Book Appointment'}
            </button>
                    </form>
                </div>

            </div>
        </>
    );
};

export default AppointmentBooking;
