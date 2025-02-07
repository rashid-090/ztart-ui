import React, { useEffect, useState } from 'react';
import { bann3, bann2, bann4 } from '../../assets';
import { Link } from 'react-router-dom';

const data = [
  {
    icon:`🏢`,
    image: bann3,
    title: 'Your Trusted Visa Service in Dubai',
    description:
      'Count on us for specialized Visa support from start to finish. Our experienced Visa consultants in Dubai ensure your process is smooth, whether you’re applying for a Tourist Visa, Visit Visa, or Business Visa.',
  },
  {
    icon:`🎯`,
    image: bann2,
    title: 'Tailored Visa Solutions',
    description:
      'Need a Schengen Visa or a Business Visa? We’ve got you covered with customized services that meet all requirements for on-time approvals. Get Visa Solutions that are built around your specific needs.',
  },
  {
    icon:`⚡`,
    image: bann4,
    title: 'Efficient Visa Processing',
    description:
      'Skip the wait and experience fast, efficient visa services. From Schengen Visa Assistance to Tourist Visa, our streamlined process delivers quick turnarounds, ensuring you’re travel-ready in no time.',
  },
  {
    icon:`💰`,
    image: bann2,
    title: 'Save Your Money',
    description:
      'Our expert advice helps you avoid unnecessary expenses—maximize your budget and get exactly what you need.',
  },
  {
    icon:`🕰️`,
    image: bann3,
    title: 'Reliable Visa Consultancy in Dubai',
    description:
      'Our dedicated team offers top-notch Visa Consultancy in Dubai, providing 24/7 customer support. We’re here to assist you through every step of the process.',
  },
  {
    icon:`🤝`,
    image: bann3,
    title: 'Strong Government Connections',
    description:
      'With our deep understanding of global Visa regulations and strong ties with government bodies, we can ensure a faster, smoother Visa approval experience.',
  },
];

const Whyztart = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  const currentItem = data[currentIndex];

  return (
    <section className="w-11/12 xl:w-10/12 mx-auto py-10 xl:py-20">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        <div className="md:col-span-3 flex flex-col justify-center items-start gap-5">
          <h4 className="text-2xl xl:text-5xl font-PoppinsMedium uppercase transition-all duration-700 ease-in-out opacity-100">
            Why ZtartVisa is <span className="text-visaclr">Your<br /> Trusted Choice</span> for<br /> On-Time Visa Approval
          </h4>
          <p className="text-xs xl:w-[70%] xl:text-justify md:text-base text-opacity-100 transition-all duration-700 ease-in-out opacity-100">
          Ztartvisa is your trusted choice for on-time Visa approval. We provide the best Visa services in Dubai helping you get your Visa on time with no hassle. Whether it’s a Tourist or Visit Visa, we’ve got you covered.
          </p>
          <Link to={'/contact'}><button className="bg-visaclr text-xs md:text-sm font-PoppinsMedium uppercase text-white px-5 py-3 rounded-full transition-all duration-700 ease-in-out opacity-100">START YOUR VISA PROCESS</button></Link>
        </div>
        <div className="ml-10 md:col-span-2 aspect-square md:aspect-auto xl:aspect-square rounded-[2rem] shadow-xl relative">
          <img
            className="absolute w-full h-full object-cover rounded-[2rem] transition-all duration-700 ease-in-out opacity-100"
            src={currentItem.image}
            alt=""
          />
          <div className="bg-[#00000098] rounded-[2rem] absolute w-full h-full"></div>
          <div className="z-10 relative text-white p-5 xl:p-14 h-full flex gap-1 xl:gap-3 flex-col justify-center">
            {/* count */}
            <div className="absolute -left-12 xl:-left-10 bottom-0">
              {Array.from({ length: 6 }, (_, index) => (
                <div
                  key={index}
                  className={`absolute cursor-pointer left-0 h-14 w-14 ${index === currentIndex ? 'bg-black text-white' : 'bg-gray-200 text-black'} border-4 border-white rounded-full grid place-items-center font-mono transition-all duration-700 ease-in-out opacity-100`}
                  style={{
                    bottom: `${index * 40}px`,
                    zIndex: index === currentIndex ? 100 : 50 - index * 10, // Higher z-index for active item
                  }}
                  onClick={() => handleClick(index)} // Add click handler
                >
                  {index + 1}
                </div>
              ))}
            </div>
            {/* count */}
            <div className="text-4xl">{currentItem.icon}</div>
            <h4 className="text-base xl:text-xl font-PoppinsMedium capitalize transition-all duration-700 ease-in-out opacity-100">{currentItem.title}</h4>
            <p className="text-xs md:text-[10px] xl:text-sm transition-all duration-700 ease-in-out opacity-100">{currentItem.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whyztart;
