import React from 'react'

function GetMaps() {
    return (
        <div className='m-4 md:m-16 grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='md:col-span-1'>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27995.44634083346!2d77.39374380766765!3d28.706669059352333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bb41c50fdf%3A0xe6f06fd26a7798ba!2sGhaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1712672919478!5m2!1sen!2sin" 
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
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam rerum, sequi officiis commodi fuga libero natus quisquam ullam porro unde earum inventore provident soluta quaerat id deleniti praesentium molestiae facere.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default GetMaps
