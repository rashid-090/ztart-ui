import React, { useEffect, useState } from "react";
import { VisaLogo } from "../../assets";
import { Link } from "react-router-dom";
import { IoCloseOutline, IoLocationOutline } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { CgMenuLeft } from "react-icons/cg";

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

const NewHeader = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isVisaOpen, setVisaOpen] = useState(false);
  isPopupOpen
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "unset");
  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };
  const visatogglePopup = () => {
    setVisaOpen(!isVisaOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 360);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [[location.pathname]]);
  return (
    <>
      <nav className="z-50 absolute capitalize left-[50%] text-black top-8 md:top-16 -translate-x-[50%] -translate-y-[50%] w-11/12 xl:w-10/12 mx-auto flex justify-between items-center h-full">
        <img
          className="h-7 xl:h-10 w-28 xl:w-40 object-contain"
          src={VisaLogo}
          alt=""
        />
        <ul className="hidden -ml-60  md:flex gap-5 items-center">
          {myHeader?.map((dt, i) => (
            <Link to={dt.url} key={i}>
              {dt.title}
            </Link>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link className="bg-gray-200 md:bg-white text-[10px] sm:text-xs md:text-sm shadow-xl font-PoppinsMedium uppercase text-black px-5 xl:px-8 py-2.5 xl:py-3 rounded-full">
            request a call
          </Link>
          <CgMenuLeft
            className="text-3xl xl:hidden"
            onClick={togglePopup}
            aria-label="Open menu"
          />
        </div>
      </nav>
      {/* popup */}
      <div
        className={`fixed  top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center transition-opacity duration-300 z-[999] ${
          isPopupOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`bg-white overflow-y-scroll h-full w-full transform transition-transform duration-200 ease-in ${
            isPopupOpen ? "scale-100" : "scale-0"
          }`}
        >
          {/* ================= */}
          <button
            className="absolute top-3 right-3"
            onClick={togglePopup}
            aria-label="Close popup"
          >
            <IoCloseOutline className="text-3xl" />
          </button>
          {/* popup-body */}
          <div className="">
           
            <div className="p-4 pt-10 flex flex-col gap-7 h-full">
             
              <div>
                <h2 className="text-lg font-PoppinsSemibold">
                  About ztartvisa
                </h2>
                <ul className="text-base pt-4 flex flex-col gap-2">
                  <li>
                    <Link onClick={() => setPopupOpen(false)} to="/about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => setPopupOpen(false)} to="/visa">
                      Visa
                    </Link>
                  </li>

                  <li>
                    {/* <Link onClick={()=> setPopupOpen(false)} to="/faq">FAQ</Link> */}
                  </li>
                  <li>
                    <Link onClick={() => setPopupOpen(false)} to="/blogs">
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => setPopupOpen(false)} to="/contact">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setPopupOpen(false)}
                      to="/privacy-policy"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-lg font-PoppinsSemibold">Contact Us</h2>
                <ul className="text-base pt-4 flex flex-col gap-2">
                  <li>
                    <a href="mailto:hello@ztartvisa.com">hello@ztartvisa.com</a>
                  </li>
                  <li>
                    <a href="tel:04 528 2118">04 528 2118</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-lg font-PoppinsSemibold">Business Hours</h2>
                <p className="pt-3">Monday - Friday : 9AM - 6PM</p>
                <p>Saturday & Sunday Closed</p>
              </div>
              <div>
                <h2 className="text-lg font-PoppinsSemibold">Location</h2>
                <p className="pt-3">
                  Level1, Wafi residence - Oud Metha Rd
                  <br /> Umm Hurair 2 - Dubai, UAE
                </p>
              </div>
            </div>
          </div>
          {/* ================= */}
        </div>
      </div>

      
    </>
  );
};

export default NewHeader;
