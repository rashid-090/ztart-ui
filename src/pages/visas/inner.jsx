import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import { allvisaData } from "../../components/Constant";
import { HiOutlineDevicePhoneMobile, HiOutlineUsers } from "react-icons/hi2";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { AiOutlineFieldTime, AiOutlineUser } from "react-icons/ai";
import { IoDocumentTextOutline, IoLocationOutline } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import axios from "axios";
import { vars } from "../../constents/Api";
import { RiFileWarningLine } from "react-icons/ri";
import { Loader } from "../../components";
import RichTextContent from "../../components/RichTextEditor/RichTextContent";


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
const notify = () =>
  toast.dark("Application started ✅", {
    position: "bottom-right",
    autoClose: 1000,
  });

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <div
        className={`flex gap-x-10 md:gap-x-0 py-6 justify-between items-center bg-white border-b last:border-0 pl-0 p-4 cursor-pointer transition duration-300 ease-in-out `}
        onClick={toggleOpen}
      >
        <div className="font-PoppinsMedium text-sm md:text-base">
          {question}
        </div>
        <div
          className={`transform transition-transform ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        >
          <FiPlus />
        </div>
      </div>
      <div
        className={`bg-white  overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="p-4 pl-0 text-sm font-PoppinsRegular">{answer}</p>
      </div>
    </div>
  );
};

const VisaInner = () => {
  const { id } = useParams();
  const [isSticky, setSticky] = useState(false);
  const [visadata, setVisaData] = useState({});
  const [isVisaOpen, setVisaOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  // const { title } = useParams();
  // const decodedTitle = decodeURIComponent(title);
  const visatogglePopup = () => {
    setVisaOpen(!isVisaOpen);
  };

  useEffect(() => {
    const fetchVisa = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `${vars.api_url}/api/1.0/user/testimonial/testimonial/${id}`
        );
        console.log("Visa data from visa inner", response?.data?.data);
        if (response?.data?.data) {
          setVisaData(response?.data?.data);
        }
        console.log(response);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVisa();
    const handleScroll = () => {
      setSticky(window.scrollY > 600);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [id]);

  if (visadata.length === 0) {
    return (
      <div className="w-11/12 md:w-11/12 xl:w-10/12 mx-auto min-h-[60vh] flex items-center justify-center">
        <div className="flex flex-col items-center gap-6 p-8 rounded-lg bg-white shadow-xl shadow-gray-300">
          <RiFileWarningLine className="w-20 h-20 text-gray-400" />

          <div className="text-center">
            <h1 className="text-2xl font-PoppinsBold mb-2">No Visa Found</h1>
            <p className="text-gray-500 font-PoppinsRegular mb-6">
              It looks like there aren't any visa posted yet.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!visadata) {
    return <div>Page not found</div>;
  }

  // api



  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = "service_rvuqpgc";
    const templateId = "template_w6dc66m";
    const publicKey = "PR2g2ETNbDb0653Ge";

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


  return (
    <>
      <Helmet>
        <title>{visadata?.metaTitle}</title>
        <meta name="description" content={visadata?.metaDescription || {}} />
        <link
          rel="canonical"
          href={`https://ztartvisa.com/visa/${visadata?.slug}`}
        />
      </Helmet>

      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-11/12 md:w-11/12 lg:w-9/12 mx-auto h-full flex flex-col md:flex-row gap-y-10 gap-x-10 lg:gap-x-10 py-5 relative">
          {/* left scrll body */}
          <div className="pb-5 md:pb-0 basis-3/6 lg:basis-4/6 flex flex-col gap-5 lg:gap-10">
            <div className="lg:pr-8">
              {/* <h1 className="text-2xl font-bold capitalize pb-5">{visadata?.place} Visit Visa Dubai UAE</h1> */}
              <div className="relative overflow-hidden md:rounded-3xl">
                <img
                  className="object-cover w-full h-52 md:h-44 object-left-bottom lg:h-full md:rounded-3xl pointer-events-none"
                  src={visadata?.imageURL}
                  alt={visadata?.imageAlt}
                />
              </div>
              {/* <div
              className="mt-5 flex flex-col gap-10 prose-h1:text-2xl prose-h1:font-bold prose-h1:capitalize prose-h2:text-xl prose-h2:font-PoppinsBold prose-h3:text-xl prose-h3:font-PoppinsBold prose-li:list-disc prose-h2:capitalize prose-h3:capitalize prose-h4:font-bold prose-p:text-base prose-p:mt-3 prose-ul:mt-3 prose-li:pt-1 prose-a:font-extrabold"
              dangerouslySetInnerHTML={{ __html: visadata.body1 }}
            ></div> */}
              <div className="mt-5 flex flex-col gap-10 text-3xl font-bold  ">
                <h1>{visadata?.title}</h1>
              </div>
              <div className=" flex flex-col gap-10 text-base mt-3 ">
                <RichTextContent content={visadata.description} />
              </div>

              <div className="flex gap-3">
                <button className="bg-visaclr text-white h-10 xl:h-11 px-6 capitalize text-sm rounded-full hover:bg-visaclrhvr my-3 font-PoppinsSemibold">
                  <Link to="/">apply now</Link>
                </button>
                <a
                  href="https://api.whatsapp.com/send?phone=971544404197"
                  target="_blank"
                  className="bg-visaclr grid place-items-center text-white h-10 xl:h-11 px-6 capitalize text-sm rounded-full hover:bg-green-600 my-3 font-PoppinsSemibold"
                >
                  Whatsapp
                </a>
              </div>
              {visadata?.questions?.map((question) => (
                <div className="pb-3 border-b border-b-1">
                  <RichTextContent content={question.question} />

                  <RichTextContent content={question.answer} />
                </div>
              ))}
              {/* <div className="mt-5 flex flex-col gap-10 prose-h1:text-2xl prose-h1:font-bold prose-h1:capitalize prose-h2:text-xl prose-h2:font-PoppinsBold prose-h3:text-xl prose-h3:font-PoppinsBold prose-li:list-disc prose-h2:capitalize prose-h3:capitalize prose-h4:font-bold prose-p:text-base prose-p:mt-3 prose-ul:mt-3 prose-li:pt-1 prose-a:font-extrabold">
              {visadata.description}
            </div> */}

              <button className="bg-visaclr text-white h-10 xl:h-11 px-6 capitalize text-sm rounded-full hover:bg-visaclrhvr my-3 font-PoppinsSemibold">
                <Link to="/contact">contact us</Link>
              </button>
            </div>

            {visadata?.faqList?.length > 0 ? (
              <hr className="w-full h-1" />
            ) : null}

            {/* faq */}
            <div className="">
              {visadata?.faqs?.length > 0 ? (
                <h6 className="text-xl font-PoppinsBold">FAQ'S</h6>
              ) : null}
              <div>
                {visadata?.faqs?.length > 0
                  ? visadata.faqs.map((faq, index) => (
                      <FAQItem
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                      />
                    ))
                  : null}
              </div>
            </div>
          </div>

          {/* right */}
          <div className="basis-3/6 xl:basis-2/6 relative">
            <div className="hidden md:inline">
              <div className="hidden md:sticky top-24 md:flex flex-col gap-5">
                <div className="mx-0 flex rounded-3xl flex-col gap-5 border p-5 shadow-xl ">
                  {/* Ribbon */}

                  {/* Ribbon */}
                  <form onSubmit={handleSubmit} className="flex flex-col gap-y-3">
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
              </div>
            </div>
          </div>
        </div>
      )}

      {/* mobile card */}
      <div
        className={`${
          isSticky ? "visible" : "hidden"
        } px-10 bg-white border-2 md:hidden h-20 fixed bottom-0 left-0 right-0 grid grid-cols-1 gap-x-1 place-items-center`}
      >
        {/* <div className="col-span-3 text-sm font-PoppinsSemibold leading-5">
                <p className="text-gray-500">Visa Guaranteed on</p>
                <p className="">16 February 2024</p>
              </div> */}
        <div className="w-full">
          <button
            onClick={visatogglePopup}
            className="bg-[#ffb800] w-full text-white py-3 px-5 rounded-xl capitalize text-sm font-PoppinsMedium"
          >
            start application
          </button>
        </div>
      </div>
      {/* get free visa pop up*/}
      {isVisaOpen && (
        <div className="fixed w-full h-screen bg-[#000000a1] backdrop-blur-[2px] top-0 left-0 z-[9999]">
          <div
            className={`fixed top-[50%] left-[50%] w-[85%] sm:w-[80%] md:w-[60%] -translate-x-[50%] -translate-y-[50%] bg-white rounded-lg z-[9999]`}
          >
            <IoIosCloseCircleOutline
              onClick={visatogglePopup}
              className="text-2xl text-visaclr absolute top-3 right-3"
            />
            <div className="w-full h-full p-5 py-10 ">
              <h1 className="text-visaclr font-PoppinsSemibold text-center pb-5 text-lg capitalize">
                get free visa consultation
              </h1>
              <form onSubmit={handleSubmit} className="flex flex-col gap-y-3">
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
          </div>
        </div>
      )}
    </>
  );
};

export default VisaInner;
