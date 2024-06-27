"use client"
import Banner from '@/components/Banner'
import Essentials from '@/components/Essentials'
import Footer from '@/components/Footer'
import Invest from '@/components/Invest'
import Marquee from '@/components/Marquee'
import Method from '@/components/Method'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import React, { useState } from 'react'

const RegisterPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
        <Marquee />
      <div className="gradient relative">
      <span className="essential-bg"></span>
        <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <div className=" overflow-hidden">
      
      <div className="wrapper flex flex-col justify-center text-center py-24">
        <p className="text-sm md:text-xl text-purpleAsh mb-8">Private access to the most exclusive luxury brands</p>
        <h1 className="text-5xl md:text-7xl dm-font">
          <span className="font-extrabold text-purpleAsh">Lor</span>{" "}
          <span className="text-stroke">Lorem, Ipsum</span>
        </h1>
        <h1 className="text-5xl md:text-7xl dm-font">
          <span className="text-purpleAsh font-extrabold">Ipsum</span>{" "}
          <span className="text-stroke">&</span>{" "}
          <span className="text-purpleAsh font-extrabold"> Lorem</span>{" "}
          <span className="text-stroke">Ipsum</span>
        </h1>
        <p className="text-sm md:text-xl text-purpleAsh my-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur finibus leo.
        </p>
        <div className="grid grid-cols-1 px-4 md:px-20 mb-5 gap-5">
        <div className=" text-start flex items-center justify-between flex-col md:flex-row gap-4 register-card ">
                    <div>
                        <h3 className="text-xl md:text-3xl text-purpleAsh font-extrabold">
                        Lorem ipsum dolor sit?
                        </h3>
                        <p className="text-sm md:text-xl text-purpleAsh leading-6 md:mb-2">
                        Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque
                        </p>
                    </div>
                    <div className="z-50">
                        <Link href="/register" className="bg-purple px-4 md:px-6 py-2 md:py-2 rounded-full text-white">
                            Connect
                        </Link>
                    </div>
                    <span className="register-inner-bg"></span>
                </div>
                <div className=" text-start flex items-center justify-between flex-col md:flex-row gap-4 register-card ">
                    <div>
                        <h3 className="text-xl md:text-3xl text-purpleAsh font-extrabold">
                        Lorem ipsum dolor sit?
                        </h3>
                        <p className="text-sm md:text-xl text-purpleAsh leading-6 md:mb-2">
                        Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque
                        </p>
                    </div>
                    <div className="z-50">
                        <Link href="/register" className="bg-purple px-4 md:px-6 py-2 md:py-2 rounded-full text-white">
                            Connect
                        </Link>
                    </div>
                    <span className="register-inner-bg"></span>
                </div>
        </div>
      </div>
    </div>
        <Footer />
      </div>
    </div>
    
  )
}

export default RegisterPage




{
    /*
    
    
    <div>
        <div className="gradient">
        <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <div className="bg-bannerBg bg-center bg-cover min-h-screen">
            <div className="text-center flex flex-col items-center justify-center relative pb-28 wrapper px-4">
                <span className="gradient-banner overflow-hidden w-[22%] md:w-[30%]"></span>
                <div className="wrapper flex flex-col justify-center text-center py-24">
                    <p className="text-sm md:text-xl text-purpleAsh mb-8">Private access to the most exclusive luxury brands</p>
                    <h1 className="text-5xl md:text-7xl dm-font">
                        <span className="font-extrabold text-purpleAsh">Lor</span>{" "}
                        <span className="text-stroke">Lorem, Ipsum</span>
                    </h1>
                    <h1 className="text-5xl md:text-7xl dm-font">
                        <span className="text-purpleAsh font-extrabold">Ipsum</span>{" "}
                        <span className="text-stroke">&</span>{" "}
                        <span className="text-purpleAsh font-extrabold"> Lorem</span>{" "}
                        <span className="text-stroke">Ipsum</span>
                    </h1>
                    <p className="text-sm md:text-xl text-purpleAsh my-10">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur finibus leo.
                    </p>
                </div>
            <div className="grid grid-cols-1 gap-5 px-4 md:px-20 mb-5">
                <div className=" text-start flex items-center justify-between flex-col md:flex-row gap-4 essential-card ">
                    <div>
                        <h3 className="text-xl md:text-3xl text-purpleAsh font-extrabold">
                        Lorem ipsum dolor sit?
                        </h3>
                        <p className="text-sm md:text-xl text-purpleAsh leading-6 md:mb-2">
                        Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque
                        </p>
                    </div>
                    <div className="z-50">
                        <Link href="/register" className="bg-purple px-4 md:px-6 py-2 md:py-2 rounded-full text-white">
                            Connect
                        </Link>
                    </div>
                    <span className="register-inner-bg"></span>
                </div>

                <div className=" text-start flex items-center justify-between flex-col md:flex-row gap-4 register-card ">
                    <div>
                        <h3 className="text-xl md:text-3xl text-purpleAsh font-extrabold">
                        Lorem ipsum dolor sit?
                        </h3>
                        <p className="text-sm md:text-xl text-purpleAsh leading-6 md:mb-2">
                        Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque
                        </p>
                    </div>
                    <div className="z-50">
                        <Link href="/register" className="bg-purple px-4 md:px-6 py-2 md:py-2 rounded-full text-white">
                            Connect
                        </Link>
                    </div>
                    <span className="register-inner-bg"></span>
                </div>
            </div>
        
            </div>
        </div>
        <Footer />
    </div>
    </div>
    
    */
}