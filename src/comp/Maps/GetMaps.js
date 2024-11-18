import React from 'react'

function GetMaps() {
    return (
        <div className='m-4 md:m-16 grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='md:col-span-1'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28565.6668514621!2d83.75967957080691!3d26.497333579188183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993c53facb8f3b3%3A0x581e63d88cf3ed7f!2sDeoria%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1731906830875!5m2!1sen!2sin"
                    height="450"
                    width="100%"
                    allowFullScreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    title="Google Map"
                ></iframe>
            </div>
            <div className='md:col-span-1'>
                <div className='p-4'>
                    <p className='text-xl'>Address</p>
                    <p className="text-base mb-4">
                        {/* <strong>Address:</strong> */}
                        We are currently located in Deoria, situated in Uttar Pradesh. We are excited to announce that we are coming soon to your area to expand our services and bring top-quality health care solutions to more communities. Stay tuned for updates as we prepare to serve you with comprehensive and innovative care.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default GetMaps
