import React from 'react';

function Hero(props) {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="hero-box container md:pl-28 pt-20 md:pt-48 md:text-left">
                    <p>Physiotherapist & Chiropractor</p>
                    <h2 className="quotes-sec flex justify-center  text-lg md:text-xl border-l-4 border-cyan-950 pl-2 font-medium pb-1">
                        "In every step of your journey, <br /> physical therapy empowers you to go farther"
                    </h2>
                    <p className="about-cont pt-8 md:w-1/2 mx-auto md:mx-0 md:pt-8">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam alias repellendus quasi porro nostrum rem illo, voluptatem iusto ratione. Sed quasi ducimus magni quas a ea, excepturi aliquid maiores tempora!
                    </p>
                    <button className="bg-shiva p-3 rounded-full mt-8"><a href="+91xxxxxxx">Call Now</a></button>
                </div>
                <div className="hero-sec pt-8 w-full md:w-2/5 mx-auto md:absolute md:right-0">
                    <img src={props.pranjal} className="rounded-lg img-main mx-auto md:mx-0" alt="" />
                    <div className="flex justify-center pr-24 max-md:pr-0 text-lg">
                        <h1 className="text-sm md:text-3xl">{props.name}</h1>
                        <p className="pl-2 flex items-center text-md md:text-lg">({props.about})</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
