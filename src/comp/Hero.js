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
            <div className='relative top-48 left-8'>
                <p>Physiotherapist & Chiropractor</p>
                <h2 className='flex justify-left text-xl border-l-4 border-cyan-950 pl-2 font-medium pb-1'>"In every step of your journey,<br /> physical therapy empowers you to go farther"</h2>
                <p className='relative w-1/2 pt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam alias repellendus quasi porro nostrum rem illo, voluptatem iusto ratione. Sed quasi ducimus magni quas a ea, excepturi aliquid maiores tempora!</p>
            </div>
        </>
    )
}

export default Hero
