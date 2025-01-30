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
                <p className="text-base font-PoppinsBold">End To End Visa Assistance</p>
                <p className="text-xs md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugiat, molestias.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="text-4xl">
              <img className='w-7 h-7' src={tick} alt="" />
              </div>

              <div>
                <p className="text-base font-PoppinsBold">
                  Visa Updates & Tracking in Real Time
                </p>
                <p className="text-xs md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugiat, molestias.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="text-4xl">
              <img className='w-7 h-7' src={tick} alt="" />
              </div>

              <div>
                <p className="text-base font-PoppinsBold">Save Time and Effort </p>
                <p className="text-xs md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugiat, molestias.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="text-4xl">
              <img className='w-7 h-7' src={tick} alt="" />
              </div>

              <div>
                <p className="text-base font-PoppinsBold">
                  Boost Your Chances of Visa Approval with Us
                </p>
                <p className="text-xs md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugiat, molestias.
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