import { useState, useEffect } from "react";
import {
  stand1,
  stand2,
  stand3,
  stand4,
  Pl1,
  Pl2,
  Pl3,
  bann1,
  bann2,
  bann3,
  relaxImg2,
  aarow,
} from "../assets";
import {
  FaArrowUp,
  FaArrowRight,
  FaCheckCircle,
  FaChevronDown,
  FaTimes,
} from "react-icons/fa";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { Testimonial2, Faq2 } from "../components";

import { useNavigate } from "react-router-dom";
import { IoMdStar } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FiPlus } from "react-icons/fi";
import { useRef } from "react";
const benefits = [
  {
    title: "Your Trusted Visa Service in Dubai",
    description:
      "Count on us for specialized visa support from start to finish. Our experienced visa consultants in Dubai ensure your process is smooth, whether you’re applying for a Tourist Visa, Visit Visa, or Business Visa.",
    icon: "🏢",
  },
  {
    title: "Tailored Visa Solutions",
    description:
      "Need a Schengen Visa or a Business Visa? We’ve got you covered with customized services that meet all requirements for on-time approvals. Get Visa Solutions that are built around your specific needs.",
    icon: "🎯",
  },
  {
    title: "Efficient Visa Processing",
    description:
      "Skip the wait and experience fast, efficient visa services. From Schengen Visa Assistance to Tourist Visas, our streamlined process delivers quick turnarounds, ensuring you’re travel-ready in no time.",
    icon: "⚡",
  },
  {
    title: "Save Your Money",
    description:
      "Our expert advice helps you avoid unnecessary expenses—maximize your budget and get exactly what you need.",
    icon: "💰",
  },
  {
    title: "Reliable Visa Consultancy in Dubai",
    description:
      "Our dedicated team offers top-notch Visa Consultancy in Dubai, providing 24/7 customer support. We’re here to assist you through every step of the process.",
    icon: "🕰️",
  },
  {
    title: "Strong Government Connections",
    description:
      "With our deep understanding of global visa regulations and strong ties with government bodies, we can ensure a faster, smoother visa approval experience.",
    icon: "🤝",
  },
];

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

const Homenew = () => {
  const images = [bann2, bann3]; // Replace with your image sources
  const [currentImage, setCurrentImage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
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
      title: "Free visa consultation"
    },
    {
      icon: stand2,
      title: "Application preparation"
    },
    {
      icon: stand3,
      title: "Doorstep document delivery"
    },
    {
      icon: stand4,
      title: "Personalized support"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  const navigate = useNavigate();

  const toggleBenefit = (index) => {
    setExpandedBenefit(expandedBenefit === index ? null : index);
  };

  const [expandedBenefit, setExpandedBenefit] = useState(null);
  return (
    <>
      <section className="">
        <div className="w-[97.5%] h-[85vh] mx-auto mt-3 mb-10 relative overflow-hidden rounded-xl shadow-xl">
          {images.map((image, index) => (
            <img
              key={index}
              className={`absolute top-0 w-full h-full object-cover object-bottom transition-opacity duration-1000 ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
              src={image}
              alt="startvisa"
            />
          ))}
          <div className="bg-[#00000073] absolute top-0 left-0 w-full h-full z-0"></div>
          <div className="absolute text-center z-10 text-white top-0 flex h-full w-full items-center flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl 2xl:text-7xl uppercase">
              Quick and Timely
              <br /> visa Approvals
            </h1>
            <p className="xl:w-[60%] text-sm mx-auto font-PoppinsLight">
              Your journey can be easier and more convenient with the best visa
              services in Dubai. We provide fast, hassle-free processing to help
              you get the right visa quickly. Let us take care of everything, so
              you can focus on what matters.
            </p>
            <form className="relative text-black overflow-hidden rounded-full w-[90%] 2xl:w-[40%] mt-5">
              <input
                className="w-full p-3 xl:p-5 outline-none pr-52"
                type="number"
                placeholder="Mobile number"
                inputMode="numeric"
                min="0"
              />
              <button
                className="uppercase bg-visaclr hover:bg-visaclrhvr duration-200 text-white w-fit text-xs md:text-sm font-PoppinsMedium px-2 xl:px-5 h-[85%] absolute right-1.5 top-[50%] -translate-y-[50%] rounded-full"
                type="submit"
              >
                Get Free Assistance
              </button>
            </form>
          </div>
        </div>
      </section>

    <section
      ref={sectionRef}
      className="w-11/12 xl:w-10/12 text-center mx-auto py-10"
    >
      <h2 className="text-3xl xl:text-4xl font-medium">
        How We <span className="text-visaclr">Stand Out</span>
      </h2>
      <p className="mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, neque.</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 pt-20 relative">
        {/* Progress Line and Dots */}
        <div className=" absolute w-[78%] transform -translate-x-1/2 left-1/2 flex items-center justify-between mt-10">
          <div className="absolute h-0.5 bg-gray-200 w-full">
            <div
              className={`h-full bg-black transition-all duration-[3000ms] ease-in-out ${
                animate ? 'w-full' : 'w-0'
              }`}
            />
          </div>
          
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 bg-black rounded-full transform transition-all duration-500 ${
                animate ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`}
              style={{
                transitionDelay: `${index * 400}ms`,
                zIndex: 10
              }}
            />
          ))}
        </div>

        {/* Step Content */}
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col p-3 gap-3 items-center justify-center transform transition-all duration-500 ${
              animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{
              transitionDelay: `${(index * 400) + 200}ms`
            }}
          >
            <img className="w-12 h-12 object-contain" src={step.icon} alt="startvisa" />
            <h4 className="text-xs md:text-sm font-medium">{step.title}</h4>
          </div>
        ))}
      </div>
    </section>

      <section className="pt-10">
        <div className="w-11/12 xl:w-10/12 mx-auto grid grid-cols-3 gap-2 xl:gap-10 bg-visaclr rounded-xl text-white">
          <div className="py-3 xl:p-12 grid place-items-center gap-2 text-center">
            <h3 className="text-2xl xl:text-5xl font-PoppinsMedium">100%</h3>
            <p className="text-[10px] md:text-xs">Lorem ipsum dolor sitloremlisum.</p>
          </div>
          <div className="py-3 xl:p-12 grid place-items-center gap-2 text-center">
            <h3 className="text-2xl xl:text-5xl font-PoppinsMedium">100K</h3>
            <p className="text-[10px] md:text-xs">Lorem ipsum dolor sitloremlisum.</p>
          </div>
          <div className="py-3 xl:p-12 grid place-items-center gap-2 text-center">
            <h3 className="text-2xl xl:text-5xl font-PoppinsMedium">1000+</h3>
            <p className="text-[10px] md:text-xs">Lorem ipsum dolor sitloremlisum.</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="w-11/12 xl:w-10/12 mx-auto pb-10 text-center">
          <h3 className="text-6xl uppercase font-PoppinsMedium  ">
            <span className="text-visaclr">Your Preferred Choice</span>
            <br /> for the Most In-Demand Visas
          </h3>
          <p className="w-[60%] mx-auto">
            When it comes to securing the most in-demand visas, look no
            further.Choosing us means you're partnering with the best visa
            agents in Dubai.
          </p>
        </div>
        <div className="w-11/12 xl:w-10/12 text-black mx-auto grid grid-cols-4 gap-5">
          <div className="bg-gray-100 p-3 rounded-3xl">
            <img
              className="aspect-square shadow-2xl rounded-3xl object-cover"
              src={bann2}
              alt="startvisa"
            />
            <div className="pt-5 p-2">
              <h3 className=" text-3xl font-PoppinsMedium uppercase">London</h3>
              <p className="uppercase">visa</p>
            </div>
          </div>
          <div className="bg-gray-100 p-3 rounded-3xl">
            <img
              className="aspect-square shadow-2xl rounded-3xl object-cover"
              src={bann2}
              alt="startvisa"
            />
            <div className="pt-5 p-2">
              <h3 className=" text-3xl font-PoppinsMedium uppercase">London</h3>
              <p className="uppercase">visa</p>
            </div>
          </div>
          <div className="bg-gray-100 p-3 rounded-3xl">
            <img
              className="aspect-square shadow-2xl rounded-3xl object-cover"
              src={bann2}
              alt="startvisa"
            />
            <div className="pt-5 p-2">
              <h3 className=" text-3xl font-PoppinsMedium uppercase">London</h3>
              <p className="uppercase">visa</p>
            </div>
          </div>
          <div className="bg-gray-100 p-3 rounded-3xl">
            <img
              className="aspect-square shadow-2xl rounded-3xl object-cover"
              src={bann2}
              alt="startvisa"
            />
            <div className="pt-5 p-2">
              <h3 className=" text-3xl font-PoppinsMedium uppercase">London</h3>
              <p className="uppercase">visa</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-5 pb-10">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl lg:text-6xl text-center uppercase">
            Why ZtartVisa is
            <br /> <span className="text-visaclr">Your Trusted Choice</span>
            <br /> for On-Time Visa Approval
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 pt-5 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                toggleBenefit={toggleBenefit}
                benefit={benefit}
                index={index}
                isMobile={isMobile}
              />
            ))}
          </div>
          <div className="mt-10 sm:mt-12 text-center">
            <button
              onClick={() => navigate("/visa")}
              className="bg-visaclr text-white text-sm sm:text-base px-6 sm:px-8 py-3 rounded-full shadow-xl uppercase transition-colors duration-300 hover:bg-visaclr-dark inline-flex items-center"
            >
              Start Your Visa Process
              <FaCheckCircle className="ml-2" size={18} />
            </button>
          </div>
        </div>
        {expandedBenefit !== null && (
          <BenefitPopup
            benefit={benefits[expandedBenefit]}
            onClose={() => setExpandedBenefit(null)}
          />
        )}
      </section>

      <section>
        <div className="w-11/12 xl:w-10/12 mx-auto grid grid-cols-3 gap-5 py-20">
          <div className="col-span-2 xl:pr-40 h-full flex flex-col justify-center">
            <h4 className="text-6xl uppercase font-PoppinsRegular">
              Fast and Reliable{" "}
              <span className="text-visaclr">Visa Services in Dubai</span>
            </h4>
            <p className="text-sm">
              We offer fast and reliable visa services in Dubai, ensuring a
              smooth and efficient process. Our expert team is dedicated to
              handling your visa needs quickly, so you can focus on your plans
              without the stress. Our expertise includes.
            </p>
          </div>
          <div className="flex flex-col gap-5 ">
            <div className="flex gap-2 items-center">
              <div className="text-4xl">
                <IoArrowForwardCircleOutline />
              </div>
              <div>
                <p className="text-visaclr">End To End Visa Assistance</p>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugiat, molestias.
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="text-4xl">
                <IoArrowForwardCircleOutline />
              </div>

              <div>
                <p className="text-visaclr">
                  Visa Updates & Tracking in Real Time
                </p>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugiat, molestias.
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="text-4xl">
                <IoArrowForwardCircleOutline />
              </div>

              <div>
                <p className="text-visaclr">Save Time and Effort </p>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugiat, molestias.
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="text-4xl">
                <IoArrowForwardCircleOutline />
              </div>

              <div>
                <p className="text-visaclr">
                  Boost Your Chances of Visa Approval with Us
                </p>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugiat, molestias.
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="text-4xl">
                <IoArrowForwardCircleOutline />
              </div>

              <div>
                <p className="text-visaclr">
                  Safety, Security, Confidentiality, and Clarity
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

      <section className="overflow-hidden relative w-[97%] mx-auto">
        <img
          className="absolute top-0 left-0 h-full w-full object-cover rounded-2xl"
          src={bann1}
          alt="startvisa"
        />
        <div className="absolute w-full h-full left-0 top-0 bg-[#00000036] rounded-2xl"></div>
        <div className="py-40 relative text-white p-20 text-center">
          <h4 className="text-6xl">Simplifying Your Visa Journey</h4>
          <p className="pt-3">
            Are you worried about your visa application being denied or
            frustrated with the long wait times and complicated process? At
            Ztartvisa, we specialize in providing visa services in Dubai,
            offering expert guidance every step of the way. Our team of
            experienced visa consultants in Dubai is dedicated to making the
            process as smooth and efficient as possible, ensuring you meet all
            the requirements and avoid common pitfalls. Whether you're applying
            for a tourist visa or visit visa, we are here to help you secure
            your visa quickly and hassle-free, giving you peace of mind
            throughout the entire process.
          </p>
        </div>
      </section>

      <section className="w-10/12 mx-auto py-20">
        <div className=" relative  text-center">
          <h4 className="text-6xl">
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

      <section>
        <section className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 pb-20 pt-20 px-5 md:px-0">
          <div className="h-full flex flex-col justify-center space-y-3">
            <h5 className="text-2xl lg:text-6xl capitalize text-center xl:text-left">
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
      </section>

      <section className="w-10/12 mx-auto flex flex-col-reverse lg:flex-row  overflow-hidden pt-10 pb-20">
        <div className="rounded-b-2xl lg:rounded-b-none py-10 lg:rounded-l-3xl flex-1 bg-gray-100 flex flex-col justify-center p-5 md:p-10 gap-7">
          <p className="text-6xl uppercase">
            Get in touch with <span className="text-visaclr">our expert</span>{" "}
            consultants.
          </p>
          <p className="text-sm lg:text-base">
            We have customized our Visa services in dubai to support your travel
            plans. Reach out to us for a smooth and efficient tourist or visit
            visa process.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="w-full text-xs md:text-base text-center text-nowrap md:w-fit px-2 py-2 md:py-3.5 uppercase shadow-xl px-5 rounded-full bg-visaclr  border border-visaclr duration-200 hover:bg-visaclr text-white"
          >
            Get Your Visa Now, Fast & Easy!
          </button>
        </div>
        <div className="flex-1">
          <img
            className="w-full md:h-96 lg:h-full object-cover md:rounded-t-2xl lg:rounded-t-none lg:rounded-tr-3xl lg:rounded-br-3xl"
            src={bann1} // Change this to the appropriate image size or use srcset
            alt="isa Agents In Dubai"
            loading="lazy" // Use "lazy" loading for better performance
            width="800" // Set an explicit width
            height="600" // Set an explicit height
          />
        </div>
      </section>
    </>
  );
};

export default Homenew;

const BenefitPopup = ({ benefit, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50   transition-opacity duration-300 ease-in-out">
    <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:scale-105">
      <div className="text-4xl mb-4 flex justify-between">
        {benefit.icon}

        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <FaTimes size={24} />
        </button>
      </div>
      <h3 className="text-base lg:text-lg font-PoppinsSemibold">
        {benefit.title}
      </h3>
      <p className="tpl-6 text-sm lg:text-base pt-3">{benefit.description}</p>
      <div className="flex items-center text-visaclrhvr"></div>
    </div>
  </div>
  //   <div className="bg-white rounded-lg p-6 w-full max-w-md">
  //     <div className="flex justify-between items-center mb-4">
  //       <h3 className="text-sm font-PoppinsSemibold">{benefit.title}</h3>
  //       <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
  //         <FaTimes size={24} />
  //       </button>
  //     </div>
  //     <div className="text-2xl mb-4">{benefit.icon}</div>
  //     <p className="text-xs font-PoppinsRegular">{benefit.description}</p>
  //   </div>
);

const BenefitCard = ({ toggleBenefit, benefit, index, isMobile }) => (
  <div
    className="bg-white rounded-lg  flex flex-col justify-center space-y-2 shadow-md hover:shadow-lg p-4 sm:p-8 transition-all duration-300"
    onClick={() => isMobile && toggleBenefit(index)}
  >
    <div className="flex  items-center justify-between md:hover:cursor-pointer ">
      <div className="flex flex-col  justify-startmd:items-center">
        <div className="text-2xl sm:text-3xl mr-3">{benefit.icon}</div>
        <h3 className="text-xs lg:text-lg font-PoppinsSemibold">
          {benefit.title}
        </h3>
      </div>
    </div>
    <button
      className="md:hidden text-gray-500 hover:text-gray-700"
      aria-label="benefits-dropdown"
    >
      <FaChevronDown />
    </button>
    <p className="hidden md:block text-sm lg:text-sm pt-3">
      {benefit.description}
    </p>
  </div>
);
