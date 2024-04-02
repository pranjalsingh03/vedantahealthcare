import React from 'react'
import support from '../images/desc/support.png';
import hospital from '../images/desc/hospital.png';
import therapist from '../images/desc/therapist.png';
import physio from '../images/physio.jpeg';


function Describe() {
    return (
        <>
            <div className='describe grid grid-cols-3 p-24 mt-8'>
                <div className=''>
                    <img className='desc-img' src={support} alt="" />
                    <p className='desc-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea dolorem enim voluptate recusandae inventore alias doloribus doloremque nulla aperiam distinctio minus natus nihil, veniam nam dolor molestiae asperiores modi facere?</p>
                </div>
                <div className=''>
                    <img className='desc-img' src={hospital} alt="" />
                    <p className='desc-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea dolorem enim voluptate recusandae inventore alias doloribus doloremque nulla aperiam distinctio minus natus nihil, veniam nam dolor molestiae asperiores modi facere?</p>
                </div>
                <div className=''>
                    <img className='desc-img' src={therapist} alt="" />
                    <p className='desc-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea dolorem enim voluptate recusandae inventore alias doloribus doloremque nulla aperiam distinctio minus natus nihil, veniam nam dolor molestiae asperiores modi facere?</p>
                </div>
            </div>
            <div className="container mx-auto px-8 py-8">
                <h1 className="text-xl font-semibold mb-4 flex justify-center">360 DEGREE PHYSIO CARE</h1>
                <p className="mb-8">We are committed to ensuring that our clients have easy access to our physiotherapy services, whether it's at any of our Clinics or through scheduling a convenient Home visit.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-sm shadow-md overflow-hidden">
                        <img className="w-full h-56 object-cover object-center" src={physio} alt="Clinic Treatment" />
                        <div className="p-4">
                            <h2 className="textsm font-semibold mb-2">CLINIC TREATMENTS</h2>
                            <p>High quality physiotherapy care at our CB Physiotherapy Centre near you. Best Treatment for Ortho / Neuro Issues</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-sm shadow-md overflow-hidden">
                        <img className="w-full h-56 object-cover object-center" src={physio} alt="Physio Home Visits" />
                        <div className="p-4">
                            <h2 className="text-sm font-semibold mb-2">PHYSIO HOME VISITS</h2>
                            <p>Home Visits by certified CB Physiotherapists for Patients with mobility issues & for patients looking for convenience</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-sm shadow-md overflow-hidden">
                        <img className="w-full h-56 object-cover object-center" src={physio} alt="Digital Care" />
                        <div className="p-4">
                            <h2 className="text-sm font-semibold mb-2">DIGITAL CARE (FIZO)</h2>
                            <p>Digital Physio Assistant 'FIZO' for personalized PT exercises at home. Enables affordable & long-term care Mgmt</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Describe
