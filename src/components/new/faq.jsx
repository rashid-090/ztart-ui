import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
const LandFAQ = [
  {
    question: `What Visa services do you offer in Dubai?`,
    answer: `We provide a wide range of Visa services, including Schengen Visa Assistance, Tourist Visa, Visit Visa, and Business Visa, all with expert guidance.`,
  },
  {
    question: `Are you a registered visa consultant in Dubai?`,
    answer: `Yes, we are fully licensed and registered as a trusted Visa Consultant in Dubai.`,
  },
  {
    question: `How long does it take to process a visa?`,
    answer: `The time varies depending on the Visa type and requirements, but we specialize in fast and efficient processing, especially for Schengen Visa applications in Dubai.`,
  },
  {
    question: `Can I apply for a Visa online?`,
    answer: `Yes, you can submit your application and documents online through our website, providing seamless Visa services in Dubai.`,
  },
  {
    question: `Do you assist with urgent Visa applications?`,
    answer: `Yes, we offer expedited services for urgent visa applications in Dubai. Contact us for further details.`,
  },
  {
    question: `Do you assist with Visa extensions or renewals?`,
    answer: `Absolutely! We provide comprehensive assistance for Visa extensions and renewals, ensuring continued support from your trusted Visa agents in Dubai.`,
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
        <div className=" text-xs md:text-base pl-5">{question}</div>
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
const Faq = () => {
  return (
    <>
      <section className="w-11/12 xl:w-10/12 mx-auto grid grid-cols-1 xl:grid-cols-2 py-10 xl:pb-20 xl:pt-20 gap-y-5">
        <div className="h-full flex flex-col justify-center space-y-3">
          <h5 className="text-2xl xl:text-5xl font-PoppinsMedium uppercase text-center xl:text-left">
            Frequently asked <span className="text-visaclr">questions?</span>
          </h5>

          <p className="text-xs md:text-base lg:text-base text-center xl:text-left ">
            Everything you need to know about
            <br className="hidden md:block"/> our Visa services in Dubai.
          </p>
        </div>
        <div className="">
          {LandFAQ.map((dt, i) => (
            <FAQItem key={i} question={dt.question} answer={dt.answer} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Faq;
