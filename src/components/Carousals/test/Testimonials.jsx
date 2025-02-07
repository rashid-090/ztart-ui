import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineStar } from "react-icons/md";
import { RiDoubleQuotesL } from "react-icons/ri";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const CustomerTestimonails = [
  {
    name: `Anna Santos Villar`,
    desc: `uae`,
    desig: `It has been smooth sailing, hassle-free process. Thanks for your assistance! It took a while understandably because of the demand here in the UAE for Japan e-visa. But Ztsrtvisa is 100% legit! Our Japan trip was an unforgettable one!`,
  },
  {
    name: `abina arif`,
    desc: `uae`,
    desig: `Ztartvisa really helped me visit Europe. They were super nice and made it easy for me to get my Schengen visa. I think you'll like them too!`,
  },
  {
    name: `Box`,
    desc: `uae`,
    desig: `I really want to thanks Ztart visa uae, and specifically Ms Sahala and Ms Riya for their big help to get UK VISA
      to be honest at the beginning I was little not sure of that, becoz I just met them and contact them via WhatsApp, so I don’t trust too much.`,
  },
  {
    name: `SHIYON JOSHY`,
    desc: `uae`,
    desig: `ZtartVisa is the best visa agency in Dubai! Their team of visa consultants in Dubai made my visa application process smooth and easy. They guided me through every step, ensuring that all the paperwork was in order.`,
  },
  {
    name: `Saina Byju`,
    desc: `uae`,
    desig: `I had an excellent experience with ZtartVisa. Their visa consultants in Dubai are highly knowledgeable and responsive. They took care of everything, from document submission to follow-ups. If you're looking for visa services in Dubai, ZtartVisa is the way to go!`,
  },
  {
    name: `Jorline Joshy`,
    desc: `uae`,
    desig: `ZtartVisa made my visa process incredibly easy. Their visa services in Dubai are efficient, and the consultants provided personalized guidance. I appreciated their attention to detail and prompt service. Definitely the best visa agency in Dubai!`,
  },
  {
    name: `Rahul RS`,
    desc: `uae`,
    desig: `I’m so glad I chose ZtartVisa for my visa application. Their team of visa consultants in Dubai is very professional and friendly. They kept me informed at every step and made the whole process stress-free. I would highly recommend ZtartVisa for anyone in need of a visa agency in Dubai.`,
  },
];

// Custom Previous Arrow
const PrevArrow = ({ onClick }) => (
  <button
    className="absolute right-12 z-20 -bottom-14 transform -translate-y-1/2  p-2 px-3 rounded-lg shadow-lg bg-visaclr text-white"
    onClick={onClick}
  >
    <FaArrowLeft />
  </button>
);

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-0 z-20 -bottom-14 transform -translate-y-1/2  p-2 px-3 rounded-lg shadow-lg bg-visaclr text-white"
    onClick={onClick}
  >
    <FaArrowRight />
  </button>
);
const Testimonails = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: (i) => (
      <div className="w-2 h-2 bg-gray-300 hover:bg-mainbtn rounded-full transition-all duration-300 cursor-pointer"></div>
    ),
    appendDots: (dots) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <ul className="flex">{dots}</ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {CustomerTestimonails.map((testi, i) => (
          <div key={i} className="p-1 md:p-2 mt-5 z-10">
            <div className="bg-gray-100 hover:bg-gray-100 duration-200 border border-gray-100 text-gray-600 h-full  md:h-80 xl:min-h-96 p-5 rounded-lg flex flex-col text-center gap-1  justify-center relative">
              <RiDoubleQuotesL className="text-6xl text-visaclr" />

              <p className="text-[10px] md:text-sm text-gray-500">{testi.desig}</p>

              <h4 className="text-base font-semibold my-2">{testi.name}</h4>
              <p className="text-xs font-light">{testi.desc}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonails;
