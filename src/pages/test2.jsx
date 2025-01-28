import React, { useEffect, useRef, useState } from "react";
import {
  VisaLogo,
  baan22,
  bann1,
  bann2,
  bann3,
  stand1,
  stand2,
  stand3,
  stand4,
} from "../assets";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { Testimonial2 } from "../components";
import { IoMdStar } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FiPlus } from "react-icons/fi";



const LandFAQ = [
  {
    question: `What visa services do you offer in Dubai?`,
    answer: `We provide a wide range of visa services, including Schengen Visa Assistance, Tourist Visas, Visit Visas, and Business Visas, all with expert guidance.`,
  },
  {
    question: `Are you a registered visa consultant in Dubai?`,
    answer: `Yes, we are fully licensed and registered as a trusted Visa Consultant in Dubai.`,
  },
  {
    question: `How long does it take to process a visa?`,
    answer: `The time varies depending on the visa type and requirements, but we specialize in fast and efficient processing, especially for Schengen Visa applications in Dubai.`,
  },
  {
    question: `Can I apply for a visa online?`,
    answer: `Yes, you can submit your application and documents online through our website, providing seamless visa services in Dubai.`,
  },
  {
    question: `Do you assist with urgent visa applications?`,
    answer: `Yes, we offer expedited services for urgent visa applications in Dubai. Contact us for further details.`,
  },
  {
    question: `Do you assist with visa extensions or renewals?`,
    answer: `Absolutely! We provide comprehensive assistance for visa extensions and renewals, ensuring continued support from your trusted visa agents in Dubai.`,
  },
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <div
        className={`flex gap-x-10  ${
          isOpen ? "bg-white" : "bg-white"
        } rounded-md md:gap-x-0  justify-between items-center  pl-0 p-4 cursor-pointer transition duration-300 ease-in-out `}
        onClick={toggleOpen}
      >
        <div className=" text-sm md:text-base pl-5">{question}</div>
        <div
          className={`transform transition-transform ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        >
          <FiPlus />
        </div>
      </div>
      <div
        className={`bg-white px-5 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="p-4 pl-0 text-sm font-PoppinsRegular">{answer}</p>
      </div>
    </div>
  );
};

const myHeader = [
  {
    title: `home`,
    url: `/`,
  },
  {
    title: `about us`,
    url: `/about`,
  },
  {
    title: `visa`,
    url: `/visa`,
  },
  {
    title: `blogs`,
    url: `/blogs`,
  },
  {
    title: `contact us`,
    url: `/contact`,
  },
];

const test2 = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const steps = [
    {
      icon: stand1,
      title: "Free visa consultation",
    },
    {
      icon: stand2,
      title: "Application preparation",
    },
    {
      icon: stand3,
      title: "Doorstep document delivery",
    },
    {
      icon: stand4,
      title: "Personalized support",
    },
  ];

  return (
    <>
      <nav className="z-50 absolute capitalize left-[50%] text-black top-10 -translate-x-[50%] -translate-y-[50%] w-11/12 xl:w-10/12 mx-auto flex justify-between items-center h-full">
        <img className="h-10 w-40 object-contain" src={VisaLogo} alt="" />
        <ul className="hidden -ml-60  md:flex gap-5 items-center">
          {myHeader?.map((dt, i) => (
            <Link to={dt.url} key={i}>
              {dt.title}
            </Link>
          ))}
        </ul>
        <Link className="bg-visaclr text-xs md:text-sm font-PoppinsMedium uppercase text-white px-8 py-3 rounded-full">
          request a call
        </Link>
      </nav>
      <section className=" bg-white h-full xl:h-screen grid grid-cols-1 md:grid-cols-5">
        <div className="px-5 py-20 xl:pl-32 xl:pr-20 md:col-span-3 flex flex-col gap-5 justify-center h-full w-full bg-gray-200">
          <h1 className="text-3xl xl:text-6xl font-PoppinsSemibold capitalize">
            Quick and Timely
            <br /> visa Approvals
          </h1>
          <p className="text-base leading-loose">
            Your journey can be easier and more convenient with the best visa
            services in Dubai. We provide fast, hassle-free processing to help
            you get the right visa quickly. Let us take care of everything, so
            you can focus on what matters.
          </p>
          <form className="relative text-black overflow-hidden rounded-full w-full md:w-[80%] 2xl:w-[70%]  mt-5">
            <input
              className="w-full p-3 xl:p-4 outline-none pr-52"
              type="number"
              placeholder="Mobile number"
              inputMode="numeric"
              min="0"
            />
            <button
              className="uppercase bg-visaclr hover:bg-visaclrhvr duration-200 text-white w-fit text-xs md:text-sm font-PoppinsMedium px-2 xl:px-5 h-[80%] absolute right-1.5 top-[50%] -translate-y-[50%] rounded-full"
              type="submit"
            >
              Get Free Assistance
            </button>
          </form>

          <div className="flex items-center gap-16 -mb-20 mt-5">
            <div className="flex flex-col items-center">
              <h4 className="text-3xl font-mono font-semibold">100k</h4>
              <p className="text-[12px]">Lorem, ipsum.</p>
            </div>
            <div className="flex flex-col items-center">
              <h4 className="text-3xl font-mono font-semibold">100%</h4>
              <p className="text-[12px]">Lorem, ipsum.</p>
            </div>
            <div className="flex flex-col items-center">
              <h4 className="text-3xl font-mono font-semibold">100+</h4>
              <p className="text-[12px]">Lorem, ipsum.</p>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 h-full w-full relative">
          <div className="absolute bottom-5 right-5 flex gap-3   z-10">
            <div className="bg-white hover:bg-visaclr hover:text-white duration-150 rounded-xl w-10 h-10 grid place-items-center">
              <MdKeyboardArrowLeft className="text-3xl" />
            </div>
            <div className="bg-white hover:bg-visaclr hover:text-white duration-150 rounded-xl w-10 h-10 grid place-items-center">
              <MdKeyboardArrowRight className="text-3xl" />
            </div>
          </div>
          <img
            className="absolute h-40 xl:h-full top-0 left-0 w-full object-cover"
            src={bann2}
            alt=""
            loading="lazy"
          />
        </div>
      </section>

      <section
        ref={sectionRef}
        className="w-11/12 xl:w-10/12 text-center mx-auto py-10 2xl:py-20"
      >
        <h2 className="text-2xl md:text-5xl font-PoppinsMedium uppercase">
          How We <span className="text-visaclr">Stand Out</span>
        </h2>
        <p className="mt-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          neque.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 pt-20 relative">
          {/* Progress Line and Dots */}
          <div className=" absolute w-[78%] transform -translate-x-1/2 left-1/2 flex items-center justify-between mt-10">
            <div className="absolute h-0.5 bg-gray-200 w-full">
              <div
                className={`h-full bg-black transition-all duration-[3000ms] ease-in-out ${
                  animate ? "w-full" : "w-0"
                }`}
              />
            </div>

            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-4 h-4 bg-black rounded-full transform transition-all duration-500 ${
                  animate ? "opacity-100 scale-100" : "opacity-0 scale-50"
                }`}
                style={{
                  transitionDelay: `${index * 400}ms`,
                  zIndex: 10,
                }}
              />
            ))}
          </div>

          {/* Step Content */}
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col p-3 gap-5 items-center justify-center transform transition-all duration-500 ${
                animate
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 400 + 200}ms`,
              }}
            >
              <img
                className="w-12 h-12 object-contain"
                src={step.icon}
                alt=""
              />
              <h4 className="text-xs md:text-sm font-PoppinsMedium text-center w-[70%] 2xl:w-[55%] uppercase">{step.title}</h4>
            </div>
          ))}
        </div>
      </section>

      <section className="w-11/12 xl:w-10/12 mx-auto py-10 2xl:pb-20">
             <div className="grid grid-cols-3">
                <div className="col-span-2 space-y-2">
                    <h3 className="text-2xl md:text-5xl font-PoppinsMedium uppercase">Your Preferred Choice<br/> for the <span className="text-visaclr">Most In-Demand Visas</span></h3>
                  <p>When it comes to securing the most in-demand visas, look no further.<br/>Choosing us means you're partnering with the best visa agents in Dubai.</p>
                </div>
                <div className="flex items-center justify-end gap-3   z-10">
                  <div className="bg-gray-200 hover:bg-visaclr hover:text-white duration-150 rounded-xl w-10 h-10 grid place-items-center">
                    <MdKeyboardArrowLeft className="text-3xl" />
                  </div>
                  <div className="bg-gray-200 hover:bg-visaclr hover:text-white duration-150 rounded-xl w-10 h-10 grid place-items-center">
                    <MdKeyboardArrowRight className="text-3xl" />
                  </div>
                </div>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-4 gap-5 pt-10">
                    <div className="bg-gray-100 p-5 rounded-3xl shadow-lg hover:shadow-xl duration-200">
                        <img className="rounded-3xl aspect-square object-cover shadow-lg" src={bann1} alt="" loading="lazy"/>
                        <div className="flex flex-col gap-2 items-center text-center pt-5">
                            <h4 className="text-2xl font-PoppinsBold uppercase">London visa</h4>
                            <button className="text-sm bg-black text-white px-5 py-1 rounded-md capitalize">explore</button>
                        </div>
                    </div>
                    <div className="bg-gray-100 p-5 rounded-3xl shadow-lg hover:shadow-xl duration-200">
                        <img className="rounded-3xl aspect-square object-cover shadow-lg" src={bann2} alt="" loading="lazy"/>
                        <div className="flex flex-col gap-2 items-center text-center pt-5">
                            <h4 className="text-2xl font-PoppinsBold uppercase">London visa</h4>
                            <button className="text-sm bg-black text-white px-5 py-1 rounded-md capitalize">explore</button>
                        </div>
                    </div>
                    <div className="bg-gray-100 p-5 rounded-3xl shadow-lg hover:shadow-xl duration-200">
                        <img className="rounded-3xl aspect-square object-cover shadow-lg" src={bann3} alt="" loading="lazy"/>
                        <div className="flex flex-col gap-2 items-center text-center pt-5">
                            <h4 className="text-2xl font-PoppinsBold uppercase">London visa</h4>
                            <button className="text-sm bg-black text-white px-5 py-1 rounded-md capitalize">explore</button>
                        </div>
                    </div>
                    <div className="bg-gray-100 p-5 rounded-3xl shadow-lg hover:shadow-xl duration-200">
                        <img className="rounded-3xl aspect-square object-cover shadow-lg" src={bann1} alt="" loading="lazy"/>
                        <div className="flex flex-col gap-2 items-center text-center pt-5">
                            <h4 className="text-2xl font-PoppinsBold uppercase">London visa</h4>
                            <button className="text-sm bg-black text-white px-5 py-1 rounded-md capitalize">explore</button>
                        </div>
                    </div>
              </div>
      </section>

      <section className="w-full mx-auto relative  overflow-hidden">
          <img className="absolute h-full w-full left-0 top-0 object-cover" src={bann3} alt="" />
          <div className="bg-[#000000a4] absolute w-full h-full"></div>
          <div className="z-10 relative grid grid-cols-1 gap-y-10 gap-5 py-20 w-10/12 mx-auto">
            <div className="flex flex-col justify-center gap-2 text-white ">
              <h4 className="text-2xl md:text-5xl font-PoppinsMedium uppercase">Fast and Reliable<br/> <span className="text-visaclr">Visa Services in Dubai</span></h4>
              <p className="w-[70%] text-justify">We offer fast and reliable visa services in Dubai, ensuring a smooth and efficient process. Our expert team is dedicated to handling your visa needs quickly, so you can focus on your plans without the stress. Our expertise includes.</p>
            </div>
            <div className="text-white flex flex-col gap-3">
            <div className="flex gap-2 items-start">
              <div className="text-4xl">
                <IoArrowForwardCircleOutline />
              </div>
              <div>
                <p className="font-PoppinsBold">End To End Visa Assistance</p>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugiat, molestias.
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-start">
              <div className="text-4xl">
                <IoArrowForwardCircleOutline />
              </div>

              <div>
                <p className="font-PoppinsBold">
                  Visa Updates & Tracking in Real Time
                </p>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugiat, molestias.
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-start">
              <div className="text-4xl">
                <IoArrowForwardCircleOutline />
              </div>

              <div>
                <p className="font-PoppinsBold">Save Time and Effort </p>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugiat, molestias.
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-start">
              <div className="text-4xl">
                <IoArrowForwardCircleOutline />
              </div>

              <div>
                <p className="font-PoppinsBold">
                  Boost Your Chances of Visa Approval with Us
                </p>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugiat, molestias.
                </p>
              </div>
            </div>
            </div>
          </div>
      </section>

      <section className="w-11/12 xl:w-10/12 mx-auto py-10 xl:py-20">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
              <div className="col-span-3 flex flex-col justify-center items-start gap-5">
                <h4 className="text-2xl md:text-5xl font-PoppinsMedium uppercase">Why ZtartVisa is <span className="text-visaclr">Your<br/> Trusted Choice</span> for<br/> On-Time Visa Approval</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Assumenda quisquam quam aliquam non esse.<br/> Culpa laudantium voluptatem vitae facere tenetur!</p>
                <button className="bg-visaclr text-xs md:text-sm font-PoppinsMedium uppercase text-white px-5 py-3 rounded-full">START YOUR VISA PROCESS</button>
              </div>
              <div className="col-span-2 aspect-square rounded-[2rem] shadow-xl  relative">
                <img className="absolute w-full h-full object-cover rounded-[2rem] " src={bann3} alt="" />
                <div className="bg-[#00000098] rounded-[2rem]  absolute w-full h-full"></div>
                <div className="z-10 relative text-white p-14 h-full flex gap-3 flex-col justify-center">
                <div className="">
                  <div className="z-50 absolute -left-6 bottom-0 h-14 w-14 bg-visaclr border-4 border-white  rounded-full grid place-items-center font-mono">1</div>
                  <div className="z-40 absolute -left-6 bottom-10 h-14 w-14 bg-visaclr border-4 border-white  rounded-full grid place-items-center font-mono">2</div>
                  <div className="z-30 absolute -left-6 bottom-20 h-14 w-14 bg-visaclr border-4 border-white  rounded-full grid place-items-center font-mono">3</div>
                  <div className="z-20 absolute -left-6 bottom-[120px] h-14 w-14 bg-visaclr border-4 border-white  rounded-full grid place-items-center font-mono">4</div>
                  <div className="z-10 absolute -left-6 bottom-40 h-14 w-14 bg-visaclr border-4 border-white  rounded-full grid place-items-center font-mono">5</div>
                  <div className="absolute -left-6 bottom-[200px] h-14 w-14 bg-visaclr border-4 border-white  rounded-full grid place-items-center font-mono">6</div>
                </div>
                  <div className="text-4xl">🎯</div>
                    <h4 className="text-xl font-PoppinsBold capitalize">Your Trusted Visa Service in Dubai</h4>
                    <p className="text-sm text-justify">Count on us for specialized visa support from start to finish. Our experienced visa consultants in Dubai ensure your process is smooth, whether you’re applying for a Tourist Visa, Visit Visa, or Business Visa.</p>
                </div>
              </div>
          </div>
      </section>

      <section className="w-10/12 mx-auto relative rounded-3xl overflow-hidden">
            <img className="absolute w-full h-full object-cover" src={bann1} alt="" />
            <div className="bg-[#0000008b] absolute w-full h-full"></div>
            <div className="relative text-white flex flex-col gap-5 items-center justify-center text-center py-32 w-[80%] mx-auto">
                <h4 className="text-2xl md:text-5xl font-PoppinsMedium uppercase">Simplifying Your Visa Journey</h4>
                <p>Are you worried about your visa application being denied or frustrated with the long wait times and complicated process? At Ztartvisa, we specialize in providing visa services in Dubai, offering expert guidance every step of the way. Our team of experienced visa consultants in Dubai is dedicated to making the process as smooth and efficient as possible, ensuring you meet all the requirements and avoid common pitfalls. Whether you're applying for a tourist visa or visit visa, we are here to help you secure your visa quickly and hassle-free, giving you peace of mind throughout the entire process.</p>
            </div>
      </section>

      <section className="w-10/12 mx-auto py-20">
        <div className=" relative  text-center">
          <h4 className="text-2xl md:text-5xl font-PoppinsMedium uppercase">
            What Our <span className="text-visaclr">Client's Say</span>
          </h4>
          <div className="flex flex-col items-center gap-1 mt-5">
            <p className="text-center text-sm lg:text-base">
              Trusted by thousands with a perfect 5-star Google rating. Your
              journey is our priority!
            </p>
            <span className="flex items-center text-3xl text-yellow-400">
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
            </span>
            {/* <img loading='lazy' className='h-10 w-36' src={Trustpilotgoogle} alt="image" />
          <p className='text-center text-base'>Based on 1,393+ reviews Trustpilot & Google</p> */}
            <span className="flex gap-5 items-center text-2xl text-yellow-400">
              <FcGoogle />
            </span>
          </div>
        </div>
        <Testimonial2 />
      </section>


        <section className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 pb-20 pt-20 px-5 md:px-0">
          <div className="h-full flex flex-col justify-center space-y-3">
            <h5 className="text-2xl md:text-5xl font-PoppinsMedium uppercase text-center xl:text-left">
              Frequently asked <span className="text-visaclr">questions?</span>
            </h5>

            <p className=" text-base lg:text-base text-center xl:text-left ">
              Here’s everything you need to know about
              <br /> our visa services in Dubai.
            </p>
          </div>
          <div className="">
            {LandFAQ.map((dt, i) => (
              <FAQItem key={i} question={dt.question} answer={dt.answer} />
            ))}
          </div>
        </section>

        <section className="w-10/12 mx-auto relative rounded-3xl overflow-hidden">
            <img className="absolute w-full h-full object-cover" src={baan22} alt="" />
            <div className="bg-[#00000066] absolute w-full h-full"></div>
            <div className="relative text-white flex flex-col gap-5 items-start justify-end pt-52 p-10 pb-20 w-[60%]">
                <h4 className="text-2xl md:text-4xl font-PoppinsMedium uppercase">Get in touch with our expert consultants</h4>
                <p>We have customized our Visa services in dubai to support your travel plans. Reach out to us for a smooth and efficient tourist or visit visa process.</p>
                <button className="bg-white text-black px-5 shadow-xl py-3 text-sm font-PoppinsMedium rounded-full">GET YOUR VISA NOW, FAST & EASY!</button>
            </div>
      </section>
      <footer className="pt-20 flex justify-center">
        <p className="text-xs">Copyright © 2024 Ztartvisa Documents Clearing Services. All rights reserved.</p>
      </footer>
    </>
  );
};

export default test2;
