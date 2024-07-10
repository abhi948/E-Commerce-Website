import React from 'react'
import contact from '../assets/contact.webp'

function Contact() {
    return (
        <>
            <div>
            <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
                <div className="w-full order-2 md:order-1 md:w-1/2 mt-20 md:mt-30">
                    <div className="space-y-8">
                        <p className="text-sm md:text-xl">
                            How can we help you ?
                        </p>
                        <h1 className="text-2xl md:text-4xl font-bold">
                            Contact<span className="text-yellow-500"> Us</span>
                        </h1>
                        <p className="text-sm md:text-xl">
                            We're here to help answer any question you might have. We look forward to hearing from you!!!
                        </p>
                        <div className='flex '>
                            {/* Email */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                fill="currentColor" className="w-8 h-7 opacity-70">
                                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <p className='text-xl mx-6 text-yellow-400'>abseksir@tcet.in</p>
                        </div>

                        <div className='flex'>
                            {/* Contact */}
                            <svg class="w-8 h-7 opacity-70" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
                            </svg>
                            <p className='text-xl mx-6 text-yellow-400'>+91 9828784565</p>
                        </div>
                        <div className='flex'>
                            {/* Adress */}
                            <svg className="w-8 h-7 opacity-70" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd" />
                            </svg>
                            <p className='text-xl mx-6 text-yellow-400'>Kandivali, Mumbai</p>
                        </div>
                    </div>
                </div>
                <div className=" order-1 w-full m-auto md:w-1/2">
                    <img src={contact} className="mx-10 w-81 h-92" alt="" />
                </div>
            </div></div>
        </>
    )
}

export default Contact