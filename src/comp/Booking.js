import React, { useState } from 'react';

const AppointmentBooking = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Appointment booked:', { date, time, name, email, phone });
        setDate('');
        setTime('');
        setName('');
        setEmail('');
        setPhone('');
    };

    return (
        <>
            <div className='bg-slate-300 flex pt-8'>
                <p className='text-sm flex items-center w-1/2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sint asperiores Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae illum vitae hic adipisci laborum! Earum, ex enim nam, tenetur aliquid unde minus aperiam voluptatum corrupti aspernatur quaerat fugit placeat culpa. molestiae. Maiores tempores non voluptate?</p>
                <div className="appoint-box max-w-md ml-auto mr-40 float bg-white shadow-md rounded-md">
                    <div className='bg-shiva p-3 rounded-t-sm'><h2 className="text-xl text-center font-semibold mb-4">Book an Appointment</h2></div>
                    <form onSubmit={handleSubmit} className='p-4'>
                        <div className="mb-4">
                            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Date:</label>
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
                            <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">Time:</label>
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
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name:</label>
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
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email:</label>
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
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone:</label>
                            <input
                                id="phone"
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                                required
                            />
                        </div>
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Book Appointment</button>
                    </form>
                </div>

            </div>
        </>
    );
};

export default AppointmentBooking;
