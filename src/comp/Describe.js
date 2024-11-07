import React from 'react'
import support from '../images/desc/support.png';
import hospital from '../images/desc/hospital.png';
import therapist from '../images/desc/therapist.png';
import physio from '../images/physio.jpeg';
import homevisite from "../images/home-visite.jpg";
import digitalHealth from "../images/digital-health.jpeg";


function Describe() {
    return (
        <>
            <div className='describe grid grid-cols-3 p-24 mt-8'>
                <div className=''>
                    <img className='desc-img' src={support} alt="" />
                    <p className='desc-text'>It provides a convenient solution for patients to book physiotherapy and chiropractic appointments online, reducing the time and effort spent on traditional booking methods.</p>
                </div>
                <div className=''>
                    <img className='desc-img' src={hospital} alt="" />
                    <p className='desc-text'>It's been a decade since we discovered that home physiotherapy treatments come in a variety of formats. If you are experiencing chronic pain following surgery, you will be treated by experts to help you return to a pain-free normal life.</p>
                </div>
                <div className=''>
                    <img className='desc-img' src={therapist} alt="" />
                    <p className='desc-text'>This improved efficiency allows providers to focus more on delivering quality care. Patients benefit from enhanced communication, reduced wait times, and a more satisfying overall experience.</p>
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
                            <p>High quality physiotherapy care at our VHC Physiotherapy Centre near you. Best Treatment for Ortho / Neuro Issues</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-sm shadow-md overflow-hidden">
                        <img className="w-full h-56 object-cover object-center" src={homevisite} alt="Physio Home Visits" />
                        <div className="p-4">
                            <h2 className="text-sm font-semibold mb-2">PHYSIO HOME VISITS</h2>
                            <p>Home Visits by certified VHC Physiotherapists for Patients with mobility issues & for patients looking for convenience</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-sm shadow-md overflow-hidden">
                        <img className="w-full h-56 object-cover object-center" src={digitalHealth} alt="Digital Care" />
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
