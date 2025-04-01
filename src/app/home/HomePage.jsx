"use client"
import React, { useState } from 'react';
import "./home.css";

const HomePage = () =>  {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='relative outer-div'>
            <div className="navbar flex justify-between px-16 absolute top-0">
                <div className="logo">
                    <img src="/assets/logo.png" alt="Logo" className='logo' />
                </div>

                <div className='flex flex-col items-end text-right'>
                    <button className="lg:hidden block text-white text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
                        ☰
                    </button>

                    <div className={`links flex items-center gap-20 pt-8 ${menuOpen ? 'block' : 'hidden'} lg:block`}>
                        <ul className='flex flex-col lg:flex-row gap-10'>
                            <li className='font-semibold text-white'>Ai cloud</li>
                            <li className='font-semibold text-white'>Service</li>
                            <li className='font-semibold text-white'>Consulting</li>
                            <li className='font-semibold text-white'>Application cloud</li>
                            <li className='font-semibold text-white'>Solutions</li>
                        
                        <div className="contact-btn flex justify-center py-1">
                            <p className='font-semibold'>CONTACT US</p>
                        </div>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="homepage pt-20 flex xl:flex-nowrap lg:flex-nowrap flex-wrap justify-center gap-0 lg:px-20 xl:px-20 md:px-10 px-7">
                <div className="home-text ps-11 ">
                    <h1 className='heading'>BUILD AI CLOUD WITH <span className='h2'>KUBERNETES & OPEN SOURCE</span></h1>
                    <p className='para mt-6 me-20 font-extralight'>we help build gpu cloud, modernize applications and infrastructure with our expertise in cloud native technologies</p>
                </div>
                <div className="hero-image ">
                    <img src="/assets/heroimage.png" alt="Hero" className='img' />
                </div>
            </div>

            <div className="circle-container absolute">
                {/* Content of your website */}
            </div>
        </div>
    );
};
export default HomePage
