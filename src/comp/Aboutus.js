import React from 'react'

function Aboutus() {
  return (
    <>
    <div className="about-us flex justify-center items-center">
      <p className='text-xxl font-semibold'>About Us</p>
    </div>
      <div className='m-16 max-md:m-8'>
        <p className='font-semibold text-xl'>Vision</p>
        <p className='m-8 max-md:m-2' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque consequatur eligendi necessitatibus eaque, asperiores maxime magni error consequuntur tempore. Obcaecati vero ipsa officiis nemo ut saepe soluta, quae quod. Placeat?</p>
        <p className='font-semibold text-xl'>Mission</p>
        <p className='m-8 max-md:m-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio voluptates nobis ducimus? Minima, voluptates? Nihil quisquam aperiam sunt tempore, nam rerum qui eligendi molestias, velit iusto est natus, hic earum!</p>
        <p className='font-semibold text-xl'>Our Team</p>
        <div className='flex justify-center items-center'>
          <div className='flex justify-center items-center'>
            <img src='https://www.w3schools.com/howto/img_avatar.png' alt='team' className='w-32 h-32 rounded-full'/>
            <p className='mx-4'>Name</p>
          </div>
          <div className='flex justify-center items-center'>
            <img src='https://www.w3schools.com/howto/img_avatar.png' alt='team' className='w-32 h-32 rounded-full'/>
            <p className='mx-4'>Name</p>
          </div>
          <div className='flex justify-center items-center'>
            <img src='https://www.w3schools.com/howto/img_avatar.png' alt='team' className='w-32 h-32 rounded-full'/>
            <p className='mx-4'>Name</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Aboutus
