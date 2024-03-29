import React from 'react'

function Hero(props) {
    return (
        <>
            <div className='hero-sec float-right bg-shiva w-2/5 h-3/4 rounded-bl-lg shadow-lg max-md:w-14'>
                <img src={props.pranjal} className= "rounded-lg  top-2" alt="" />
                <div className='flex justify-center text-lg top-2'>
                    <h1 className='text-3xl'>{props.name}</h1><p className='pl-2 flex items-center text-lg'>({props.about})</p>

                </div>
            </div>
            <div className='hero-box p-28 text-left'>
                <p>Physiotherapist & Chiropractor</p>
                <h2 className='quotes-sec flex justify-left text-xl border-l-4 border-cyan-950 pl-2 font-medium pb-1'>"In every step of your journey,<br /> physical therapy empowers you to go farther"</h2>
                <p className='about-cont w-1/2 pt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam alias repellendus quasi porro nostrum rem illo, voluptatem iusto ratione. Sed quasi ducimus magni quas a ea, excepturi aliquid maiores tempora!</p>
                <a href="+91xxxxxxx" className='pt-10 '><button className="bg-shiva p-3 rounded-full">Call Now</button></a>
                
            </div>
        </>
    )
}

export default Hero
