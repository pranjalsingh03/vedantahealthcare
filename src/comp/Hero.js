import React from 'react'

function Hero(props) {
  return (
    <>
    <div className='bg-shiva absolute right-0 w-2/5 h-3/4 rounded-bl-lg shadow-lg max-md:w-14'>
    <img src={props.pranjal} className="relative rounded-lg left-10 top-2" alt="" />
    <div className='flex justify-center text-lg relative top-2'>
    <h1 className='text-3xl'>{props.name}</h1><p className='pl-2 flex items-center text-lg'>({props.about})</p>

    </div>
    </div>
    <p>"In every step of your journey, physical therapy empowers you to go farther.</p>
    </>
  )
}

export default Hero
