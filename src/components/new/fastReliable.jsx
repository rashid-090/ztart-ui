import React, { useState } from 'react';
import { ban6, bann3, tick } from '../../assets';

const FastReliable = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleParagraph = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const services = [
    {
      title: "Easy Process",
      description: "We make the Visa application simple, so you don’t have to worry about paperwork or deadlines.",
    },
    {
      title: "Fast Services",
      description: "Need your Visa quickly? We offer fast processing to get your Visa as soon as possible.",
    },
    {
      title: "High Approval Rate",
      description: "We’ve helped many people get their Visa, and they trust us to help again in the future.",
    },
    {
      title: "Worldwide Reach",
      description: "We offer professional assistance in obtaining Visa for your desired destination.",
    },
  ];

  return (
    <section className="w-full mx-auto relative overflow-hidden">
      <img
        className="absolute h-full w-full left-0 top-0 object-cover object-top"
        src={ban6}
        alt=""
        width="961"
        height="396"
        loading="lazy"
        style={{ aspectRatio: '961/396' }}
      />
      <div className="bg-[#00000092] absolute w-full h-full"></div>
      <div className="z-10 relative grid grid-cols-1 gap-y-10 gap-5 py-10 xl:py-20 w-11/12 xl:w-10/12 mx-auto">
        <div className="flex flex-col justify-center items-start xl:items-center xl:text-center gap-2 text-white">
          <h4 className="text-2xl xl:text-5xl font-PoppinsMedium uppercase">
            Fast and Reliable<br />
            <span className="text-visaclr">Visa Services in Dubai</span>
          </h4>
          <p className="hidden md:block xl:w-[60%] text-sm md:text-base">
            We offer fast and reliable Visa services in Dubai, ensuring a smooth and efficient process. Our expert team is dedicated on handling your Visa quickly, so you can focus on your plans without the stress. Our expertise includes
          </p>
          <p className=" md:hidden xl:w-[60%] text-xs md:text-base">
            We offer fast and reliable Visa services in Dubai, ensuring a smooth and efficient process...
          </p>
        </div>

        <div className="text-white grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-10 xl:pt-5">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col gap-2">
              <div className="flex gap-3 items-center cursor-pointer" onClick={() => toggleParagraph(index)}>
                <img className="w-7 h-7" src={tick} alt="" />
                <p className="text-sm xl:text-xl font-PoppinsMedium">{service.title}</p>
              </div>
              <p className={`text-xs md:text-base ${openIndex === index ? "block" : "hidden"} md:block`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FastReliable;
