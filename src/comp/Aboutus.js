import React from 'react'

function Aboutus() {
  return (
    <>
    <div className="about-us flex justify-center items-center">
      <p className='text-xxl font-semibold'>About Us</p>
    </div>
      <div className='m-16 max-md:m-8'>
        <p className='font-semibold text-xl'>Vision</p>
        <p className='m-8 max-md:m-2' >Our vision for the Vedanta Health Care project is to revolutionize the way health care services are delivered by creating an integrated, user-centric platform that enhances patient care, streamlines medical processes, and fosters better health outcomes. We aim to empower health care providers and patients alike with reliable, innovative, and secure technology solutions that set a new benchmark for health care quality and accessibility.</p>
        <p className='font-semibold text-xl'>Mission</p>
        <p className='m-8 max-md:m-2'>Our mission is to develop a comprehensive, scalable, and secure software solution tailored to meet the unique needs of Vedanta Health Care. We are committed to leveraging advanced technology, user-friendly design, and stringent data protection measures to ensure seamless patient interactions, efficient medical operations, and compliance with industry regulations. Through collaboration, expertise, and continuous innovation, we strive to support Vedanta Health Care in its pursuit of excellence and to contribute positively to the broader health care ecosystem.</p>
        <p className='font-semibold text-xl'>Our Team</p>
        <div className='flex justify-center items-center'>
          <div className='justify-center items-center p-8'>
            <img src='https://www.w3schools.com/howto/img_avatar.png' alt='team' className='w-32 h-32 rounded-full'/>
            <p className='mx-4'>Name</p>
          </div>
          <div className='justify-center items-center p-8'>
            <img src='https://www.w3schools.com/howto/img_avatar.png' alt='team' className='w-32 h-32 rounded-full'/>
            <p className='mx-4'>Name</p>
          </div>
          <div className='justify-center items-center p-8'>
            <img src='https://www.w3schools.com/howto/img_avatar.png' alt='team' className='w-32 h-32 rounded-full'/>
            <p className='mx-4'>Name</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Aboutus
