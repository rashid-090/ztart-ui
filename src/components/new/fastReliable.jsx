import React from 'react'
import { IoArrowForwardCircleOutline } from 'react-icons/io5'
import { bann3,tick } from '../../assets'

const FastReliable = () => {
  return (
    <>
     <section className="w-full mx-auto relative  overflow-hidden">
          <img className="absolute h-full w-full left-0 top-0 object-cover" src={bann3} alt="" />
          <div className="bg-[#000000a4] absolute w-full h-full"></div>
          <div className="z-10 relative grid grid-cols-1 gap-y-10 gap-5 py-10 xl:py-20 w-11/12 xl:w-10/12 mx-auto">
            <div className="flex flex-col justify-center gap-2 text-white ">
              <h4 className="text-2xl md:text-5xl font-PoppinsMedium uppercase">Fast and Reliable<br/> <span className="text-visaclr">Visa Services in Dubai</span></h4>
              <p className="xl:w-[70%] text-justify text-sm md:text-base">We offer fast and reliable visa services in Dubai, ensuring a smooth and efficient process. Our expert team is dedicated to handling your visa needs quickly, so you can focus on your plans without the stress. Our expertise includes.</p>
            </div>
            <div className="text-white flex flex-col gap-3">
            <div className="flex gap-3 items-start">
              <div className="text-4xl">
               <img className='w-7 h-7' src={tick} alt="" />
              </div>
              <div>
                <p className="text-base xl:text-xl font-PoppinsBold">Easy Process</p>
                <p className="text-xs md:text-base">
                We make the visa application simple, so you don’t have to worry about paperwork or deadlines
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="text-4xl">
              <img className='w-7 h-7' src={tick} alt="" />
              </div>

              <div>
                <p className="text-base xl:text-xl font-PoppinsBold">
                  Fast Services
                </p>
                <p className="text-xs md:text-base">
                Need your visa quickly? We offer fast processing to get your visa as soon as possible.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="text-4xl">
              <img className='w-7 h-7' src={tick} alt="" />
              </div>

              <div>
                <p className="text-base xl:text-xl font-PoppinsBold">High Approval Rate</p>
                <p className="text-xs md:text-base">
                We’ve helped many people get their visas, and they trust us to help again in the future.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="text-4xl">
              <img className='w-7 h-7' src={tick} alt="" />
              </div>

              <div>
                <p className="text-base xl:text-xl font-PoppinsBold">
                  Worldwide Reach
                </p>
                <p className="text-xs md:text-base">
                We can help you get a visa for almost any country you want to visit.
                </p>
              </div>
            </div>
            </div>
          </div>
      </section>
    </>
  )
}

export default FastReliable