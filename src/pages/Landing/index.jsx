import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import emailjs from "@emailjs/browser";

import {
  InsatProf,
  insatsvg,
  relaxImg,
  relaxImg2,
  Trustpilotgoogle,
  ztartnews,
  PriceComp,
  ztartoffice,
  Scn1,
  diamondsvg,
  sheildsvg,
  heartsvg,
  Grp2,
  Grp3,
  Grp4,
  Buddy,
  Solutions,
  Savemoney,
} from "../../assets";
import {
  TravelCarousal,
  BetterDeal,
  Testimonial,
  Demo,
  VisaImageCarousal,
  InsatFeed
} from "../../components";
import { TiTick } from "react-icons/ti";
import { FiPlus } from "react-icons/fi";
import { IoMdStar } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FaArrowUp } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { IoSendSharp } from "react-icons/io5";
import axios from "axios";
import { toast } from "react-toastify";


const LandFAQ = [
      {
        question: `What are the benefits of working with a visa consultant in Dubai?`,
        answer: `By working with our agency, you can benefit from our expertise, save time and effort, and
        increase your chances of obtaining your visa.`,
      },
      {
        question: `What is the best way to find a reliable visa consultant in Dubai?`,
        answer: `Research and read reviews from previous clients to find a trustworthy visa consultant in
        Dubai.`,
      },
      {
        question: `What makes STartVisas' visa consultant in Dubai different from others?`,
        answer: `Years of expertise and an excellent reputation in helping customers secure visas are
        attributes of our team of knowledgeable visa advisors at STartVisas, makes us a trusted and
        reliable visa consultant in Dubai.`,
      },
      {
        question: `What documents do I need to provide to a visa consultant in Dubai?`,
        answer: `Required documents vary depending on the type of visa and the country of destnation.`,
      },
      {
        question: `How can a visa consultant in Dubai help me with my visa application if I have a complex
        case?`,
        answer: `Experienced consultants can provide personalized guidance and representation for
        complex cases, increasing the chances of success.`,
      },
      {
        question: `How do I know if I need a visa to travel to my destination, and how can a visa consultant
        in Dubai help?`,
        answer: `Check the entry requirements for your destination country, and consult with a visa
        consultant in Dubai for guidance and assistance.`,
      },
      {
        question: `What are the benefits of approaching with a registered visa consultant in Dubai?`,
        answer: `Registered consultants are authorized and experienced, providing peace of mind and
        increasing the chances of successful visa applications.`,
      },


]

const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
  "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
  "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic (Czechia)", "Democratic Republic of the Congo",
  "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (Swaziland)", "Ethiopia",
  "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
  "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan",
  "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda",
  "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
  "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
  "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

function LandingPage() {
  const [open, setOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");

  const modalRef = useRef(null);
  open
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "");

 



  // Handle form submission
const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
     const serviceId = "service_wj3pobe";
    const templateId = "template_3iadmge";
    const publicKey = "F2kfLKAaSE8fINfl7";

    // Create a new object that contains dynamic template params
    const templateParams = {
      user_name: name,
      user_mobile: phone,
      user_cnty: country,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        toast.success("Message sent successfully", response);
        setName("");
        setPhone("");
        setCountry("");
      })
      .catch((error) => {
        toast.error("Error sending email", error);
      });
  };

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 360);
    };

    const handleOutsideClick = (event) => {
      // Check if the click is outside the modal
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        // Close the modal
        setOpen(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleOutsideClick);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  


  const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleOpen = () => {
      setIsOpen(!isOpen);
    };
  
  
    return (
      <div className="">
        <div
          className={`flex gap-x-10  ${isOpen ? 'bg-visaclr text-white' : 'bg-gray-100'} rounded-md md:gap-x-0 py-4 mb-2 justify-between items-center  pl-0 p-4 cursor-pointer transition duration-300 ease-in-out `}
          onClick={toggleOpen}
        >
          <div className="font-PoppinsMedium text-sm md:text-base pl-5">{question}</div>
          <div
            className={`transform transition-transform ${
              isOpen ? 'rotate-45' : 'rotate-0'
            }`}
          >
           <FiPlus/>
          </div>
        </div>
        <div
          className={`bg-white px-5 overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <p className='p-4 pl-0 text-sm font-PoppinsRegular' >{answer}</p>
        </div>
      </div>
    );
  };
  

  
  return (
    <>
      <Helmet>
      <title>Startvisa Your Expert Visa Consultant in Dubai
      </title>
        <link rel="canonical" href={`https://startvisa.com/visa-consultant-in-dubai`} />
        <meta name="keywords" content="Visa Consultant in Dubai, Best Visa Consultant in Dubai, Visa Consultants in Dubai, Best, Visa Consultants in Dubai, Visa Consultancy in Dubai, Best Visa Consultancy in Dubai, Schengen Visa Consultant in Dubai, Schengen Visa Consultants in Dubai, Schengen Visa Consultancy in Dubai, Best Schengen Visa Consultant in Dubai, Best Schengen Visa Consultants in Dubai, Best Schengen Visa Consultancy in Dubai"/>
        <meta name="description" content="We are the top visa consultant in Dubai, UAE, offer end-to-end visa services, handling all documentation for Tourist, Visit, Business & Schengen Visas etc" />
        <meta property="og:title" content="Visa Consultant in Dubai | Schengen Visa Consultancy in Dubai"/>
        <meta property="og:description" content="Top Visa Consultant in Dubai offer expert guidance for Business, Tourist, and Schengen Visa from Dubai, ensuring a smooth application process."/>

      </Helmet>
      <main className="w-11/12 md:w-11/12 xl:w-9/12 mx-auto h-full">
        {/* Banner */}
        <section className="w-full h-full pt-5 xl:py-20 grid grid-cols-1 md:grid-cols-5 gap-5 xl:gap-10">
           <div className="md:col-span-3 h-full flex flex-col justify-center gap-y-3">
                <h1 className="text-3xl text-center md:text-left lg:text-5xl font-PoppinsExtraBold">Startvisa<br className="hidden lg:block" />  Your Expert Visa Consultant in Dubai</h1>
                <p className="font-PoppinsRegular text-center xl:text-justify">Startvisa, we are the top visa consultant in Dubai, offer end-to-end visa services in dubai, handling all documentation for various visas, including business, investor, and tourist visas, ensuring clients make the right choice.</p>
                <Link to={'/'}
                  className=" text-base text-center mx-auto md:mx-0 w-fit px-10 py-3.5 font-PoppinsMedium rounded-full border border-visaclr duration-200 hover:bg-visaclr hover:text-white text-visaclr"
                >
                  Apply now
                </Link>
           </div>
           <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="flex flex-col gap-y-3 border p-5 rounded-xl">
                               <div className="relative">
                                 <input className="border border-gray-300 p-2 w-full pl-8 rounded-sm outline-none" type="text" placeholder="Name" name="user_name" value={name} onChange={(e) => setName(e.target.value)} required />
                                 <AiOutlineUser className="absolute top-2.5 left-2 text-lg text-gray-700" />
                               </div>
                               <div className="relative">
                                 <input className="border border-gray-300 p-2 pl-[75px] w-full rounded-sm outline-none" type="tel" inputMode="numeric" placeholder="58 550 3940" pattern="[0-9]{9}" title="Please enter a 9-digit number" name="user_mobile" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                                 <p className="absolute top-[7px] left-8 chfont font-medium">+971</p>
                                 <HiOutlineDevicePhoneMobile className="absolute top-2.5 left-2 text-lg text-gray-700" />
                               </div>
                               <div className="relative">
                                 <select className="h-10 w-full pl-8 text-base outline-none border appearance-none" name="user_cnty" value={country} onChange={(e) => setCountry(e.target.value)} required>
                                   <option value="">Select a location</option>
                                 {countries.map((c, index) => (
  <option key={index} value={c}>{c}</option>
))}
                                 </select>
                                 <IoLocationOutline className="absolute top-2.5 left-2 text-lg text-gray-700" />
                               </div>
                               <button className="text-center w-full bg-visaclr h-10 text-white rounded-md mt-2" type="submit">Submit</button>
                             </form>
           </div>
        </section>

        {/* carousal */}
        <section className="py-20 lg:py-24">
          <TravelCarousal />
        </section>

        

        <section className="flex flex-col gap-3 pb-20">
         
         <div className="space-y-1">
         <h2 className="text-xl lg:text-4xl font-PoppinsExtraBold text-visaclr text-center capitalize">
          Our Assurance
          </h2>
          <h1 className="text-2xl lg:text-4xl font-PoppinsExtraBold text-center capitalize">
                As the Best Visa Consultant in Dubai
          </h1>
          <p className="font-PoppinsRegular text-center">As the leading visa consultant in Dubai, we guarantee your visa is made easy with our expert visa service in dubai.</p>
         </div>
          {/* <img loading='lazy' className='rounded-2xl h-52 lg:h-[24rem] w-full object-cover mt-3' src={Grp4} alt="image" /> */}
          {/* // add mt-5 when add image */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
            <div className="flex flex-col gap-3">
              <span className="flex items-center gap-3">
                <TiTick className="text-visaclr text-sm bg-gray-200 rounded-2xl" />
                <h4 className="text-lg lg:text-lg font-PoppinsSemibold">
                  Fast
                </h4>
              </span>
              <p className="pl-6 text-base lg:text-base">
                24/7 Support: Reach us anytime on Instagram, Messenger,
                WhatsApp, Email, or call us.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <span className="flex items-center gap-3">
                <TiTick className="text-visaclr text-sm bg-gray-200 rounded-2xl" />
                <h4 className="text-lg lg:text-lg font-PoppinsSemibold">
                  Convenient
                </h4>
              </span>
              <p className="pl-6 text-base lg:text-base">
                Expert Guidance: Personal visa officer assigned until your visa
                is processed.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <span className="flex items-center gap-3">
                <TiTick className="text-visaclr text-sm bg-gray-200 rounded-2xl" />
                <h4 className="text-lg lg:text-lg font-PoppinsSemibold">
                  Personalized
                </h4>
              </span>
              <p className="pl-6 text-base lg:text-base">
                Personalized Service: Comprehensive help starting from scratch.
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-10">
          <h1 className="text-2xl lg:text-4xl font-PoppinsExtraBold text-center">
            UAE's Favorite,
            <br className="hidden lg:block" /> Visa Community
          </h1>
          <img
            loading="lazy"
            className="rounded-2xl h-52 lg:h-[25rem] w-full object-cover"
            src={ztartoffice}
            alt="image"
          />
          <div className="bg-[#F2EFEA] px-10 lg:px-0 lg:py-10 grid grid-cols-1 lg:grid-cols-3 rounded-2xl">
            <div className="flex flex-col gap-3 border-b lg:border-b-0 lg:border-r border-gray-300 py-10 lg:py-0 lg:px-10">
              <img
                className="h-14 w-14 object-cover mb-2"
                src={Buddy}
                alt="logo"
              />
              <h3 className="text-lg lg:text-xl font-PoppinsMedium">
                Your Visa Buddy
              </h3>
              <p className="text-sm lg:text-base">
                Specialized visa support you can count on.
              </p>
            </div>
            <div className="flex flex-col gap-3 border-b lg:border-b-0 lg:border-r border-gray-300 py-10 lg:py-0 lg:px-10">
              <img
                className="h-14 w-14 object-cover mb-2"
                src={Savemoney}
                alt="logo"
              />
              <h3 className="text-lg lg:text-xl font-PoppinsMedium">
                Save Your Money
              </h3>
              <p className="text-sm lg:text-base">
                Expert advice to avoid unnecessary expenses.
              </p>
            </div>
            <div className="flex flex-col gap-3 py-10 lg:py-0 lg:px-10">
              <img
                className="h-14 w-14 object-cover mb-2"
                src={Solutions}
                alt="logo"
              />
              <h3 className="text-lg lg:text-xl font-PoppinsMedium">
                Get Visa Solutions
              </h3>
              <p className="text-sm lg:text-base">
                Strong government connections and deep understanding of global
                visa regulations.
              </p>
            </div>
          </div>
        </section>





        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:pt-16">
          <div className="flex-1 ">
            <img
              className="hidden lg:block rounded-xl w-full  object-cover h-full"
              loading="lazy"
              src={ztartnews}
              alt="insta"
            />
          </div>
          <div className="flex-1 flex flex-col gap-7">
            <h1 className="text-2xl lg:text-4xl text-center lg:text-left font-PoppinsExtraBold">
              Join Our Visa Analysis Camp
            </h1>
            <img
              className="block lg:hidden rounded-xl w-full  object-cover h-full"
              loading="lazy"
              src={ztartnews}
              alt="insta"
            />
            <p className="text-sm lg:text-base">
              Learn the common reasons for visa denials and improve your
              application. Our camp offers insights and strategies to enhance
              your chances of approval.
            </p>
            <a
              className="w-full text-base text-center md:w-fit px-10 py-3.5 font-PoppinsMedium rounded-full border border-visaclr duration-200 hover:bg-visaclr hover:text-white text-visaclr"
              href="https://www.khaleejtimes.com/kt-network/ztartvisa-hosts-visa-rejection-analysis-camp-in-dubai-for-visa-applicants"
              target="_blank"
            >
              Learn more
            </a>
          </div>
        </section>

        <section className="flex flex-col-reverse lg:flex-row  overflow-hidden pt-24 pb-20">
          <div className="rounded-b-2xl lg:rounded-b-none lg:rounded-l-3xl flex-1 bg-[#FEFCE8] flex flex-col justify-center p-5 md:p-10 gap-7">
            <h1 className="text-2xl lg:text-4xl capitalize font-PoppinsExtraBold">
            Boost Your Visa Chances,
              <br /> not your stress
            </h1>
            <p className=" font-PoppinsRegular">
            At StartVisa, we focus on enhancing your visa success while keeping the process stress-free. As leading visa agents in Dubai, we handle all the complexities of visa applications, ensuring a smooth experience. Put your trust in our experienced crew for quality Dubai visa services and enjoy peace of mind with a higher chance of approval
            </p>
            <a
              className="w-full text-base text-center md:w-fit px-10 py-3.5 font-PoppinsMedium rounded-full bg-transparent border border-visaclr duration-200 hover:bg-visaclr hover:text-white text-visaclr"
              href="#"
            >
              Start with an expert
            </a>
          </div>
          <div className="flex-1">
            <img
              className="w-full md:h-96 lg:h-full object-cover rounded-t-2xl lg:rounded-t-none lg:rounded-tr-3xl lg:rounded-br-3xl"
              src={relaxImg2}
              alt="scene"
            />
          </div>
        </section>

        <section className="pb-20 -mt-20">
          <Testimonial />
        </section>

        <section className="pb-20 xl:w-[80%] mx-auto -mt-20">
        <h1 className="text-2xl lg:text-4xl font-PoppinsExtraBold text-center px-3 md:px-0 mt-20 pb-8">FAQ</h1>
          {LandFAQ.map((dt,i)=>(
            <FAQItem key={i} question={dt.question} answer={dt.answer} />

          ))}
        </section>


        <section className="flex flex-col-reverse lg:flex-row-reverse  overflow-hidden pb-20">
          <div className="rounded-b-2xl lg:rounded-b-none lg:rounded-r-3xl flex-1 bg-[#FEFCE8] flex flex-col justify-center p-5 md:p-10 gap-3">
            <h1 className="text-2xl lg:text-4xl capitalize font-PoppinsExtraBold">
            Current Visa Trends and 
              <br /> Requirements in Dubai
            </h1>
            <p className=" font-PoppinsRegular">As a global hub, Dubai's visa requirements are evolving, particularly for work permits, business visas, and travel restrictions. At Startvisa, we provide expert guidance throughout the visa application process, ensuring smooth and timely approvals.</p>
            <p className=" font-PoppinsRegular">Post-COVID regulations require health declarations, vaccination proof, or negative PCR tests for visa applications. We ensure compliance with these guidelines and assist with business visas, including new categories like the Golden Visa and Freelancer Visa, for professionals and investors. Our services also cover family and dependent visas for expatriates and updated work visas, guiding professionals through the entire application process.</p>
            <a
              className="w-full text-base text-center md:w-fit px-10 py-3.5 font-PoppinsMedium rounded-full bg-transparent border border-visaclr duration-200 hover:bg-visaclr hover:text-white text-visaclr"
              href="/contact"
            >
              Start with an expert
            </a>
          </div>
          <div className="flex-1">
            <img
              className="w-full md:h-96 lg:h-full object-cover rounded-t-2xl lg:rounded-t-none lg:rounded-tl-3xl lg:rounded-bl-3xl"
              src={relaxImg2}
              alt="scene"
            />
          </div>
        </section>


        {/* Go to top */}

        <div className="w-fit mx-auto pb-5 md:pb-0">
          <button
            className="w-fit text-base font-PoppinsMedium px-10 lg:px-8 py-2.5 lg:py-3 flex items-center gap-3 border border-visaclr rounded-full text-visaclr hover:bg-visaclr hover:text-white duration-200"
            onClick={scrollToTop}
          >
            <FaArrowUp />
            <p>Back to top</p>
          </button>
        </div>
      </main>

      {/* <Demo/> */}
    </>
  );
}

export default LandingPage;
