import React from 'react'

function Contact() {
    return (
        <>
                <p className='flex justify-center font-bold text-xl'>Contact Us</p>
            <div className="flex justify-center">
                <form action="submit" className="space-y-4 p-8">
    <input type="text" placeholder="Enter your name" className="w-full p-2 border border-gray-300 rounded" />
    <input type="email" placeholder="Enter your email" className="w-full p-2 border border-gray-300 rounded" />
    <input type="text" placeholder="Enter your phone number" className="w-full p-2 border border-gray-300 rounded" />
    <textarea name="message" id="message" cols="30" rows="10" placeholder="Enter your message" className="w-full p-2 border border-gray-300 rounded"></textarea>
    <input type="submit" value="Submit" className="w-full p-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600" />
</form>
            </div>
        </>
    )
}

export default Contact
