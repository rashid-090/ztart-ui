import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { bann1, bann2, bann3 } from '../../assets';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { vars } from "../../constents/Api";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loader from '../Loading';
const VisaCarousel = () => {
  const navigate = useNavigate();
  const [visaData, setVisaData] = useState([]); // State for visa data
  const [loading, setLoading] = useState(true);
  const sliderRef = React.useRef(null);

  // const visaData = [
  //   {
  //     image: bann1,
  //     title: "London Visa",
  //   },
  //   {
  //     image: bann2,
  //     title: "USA Visa",
  //   },
  //   {
  //     image: bann3,
  //     title: "Canada Visa",
  //   },
  //   {
  //     image: bann1,
  //     title: "Australia Visa",
  //   },
  //   {
  //     image: bann2,
  //     title: "Schengen Visa",
  //   },
  //   {
  //     image: bann3,
  //     title: "Japan Visa",
  //   },
  // ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  useEffect(() => {
    const fetchVisaData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${vars.api_url}/api/1.0/user/testimonial/testimonials`
        ); // Replace with your API endpoint

        setVisaData(response.data?.data); // Assuming the response data is an array
      } catch (error) {
        console.error("Error fetching visa data:", error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };

    fetchVisaData();
  }, []);

  return (
    <>
      <section className="w-11/12 xl:w-10/12 mx-auto pt-10 2xl:pt-20 visacarousal2 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="col-span-2 space-y-2">
            <h3 className="text-2xl xl:text-5xl font-PoppinsMedium uppercase">
              Your Preferred Choice
              <br /> for the <span className="text-visaclr">Most In-Demand Visa</span>
            </h3>
            <p className='text-xs md:text-base'>
            Your First Choice for the Most Requested Visa.
            </p>
          </div>
          <div className="flex items-center justify-end gap-3 z-10">
            <div
              className="bg-gray-100 hover:bg-visaclr hover:text-white duration-150 rounded-lg md:rounded-xl w-8 h-8 md:w-10 md:h-10 grid place-items-center cursor-pointer"
              onClick={goToPrev}
            >
              <MdKeyboardArrowLeft className="text-2xl md:text-3xl" />
            </div>
            <div
              className="bg-gray-100 hover:bg-visaclr hover:text-white duration-150 rounded-lg md:rounded-xl w-8 h-8 md:w-10 md:h-10 grid place-items-center cursor-pointer"
              onClick={goToNext}
            >
              <MdKeyboardArrowRight className="text-2xl md:text-3xl" />
            </div>
          </div>
        </div>
        <div className="pt-10">
          {loading ? 
        (<Loader />)
        :
        (
          <Slider ref={sliderRef} {...settings}>
            {visaData?.slice()
            .reverse()?.map((visa, index) => (
              <>
              {/* {console.log(visaData)} */}
              <div
             key={visa._id}
                className="bg-gray-100 p-0 pb-2 md:p-5 rounded-3xl shadow-lg hover:shadow-xl duration-200 mb-10"
              >
                <img
                   onClick={() => navigate(`/visa/${visa.slug}`)}
                  className="rounded-xl cursor-pointer xl:rounded-3xl aspect-square object-cover object-left-bottom shadow-lg"
                  src={visa?.imageURL}
                  alt={visa?.title}
                  
                  loading="lazy"
                  width="800" // Set an explicit width based on the image's expected display size
                  height="450" // Set an explicit height to maintain aspect ratio
                  srcSet={`
                ${visa?.imageURL}?w=400 400w,
                ${visa?.imageURL}?w=800 800w,
                ${visa?.imageURL}?w=1200 1200w
                `} // Use srcSet for responsive images
                  sizes="(max-width: 800px) 100vw, 800px"
                />
                <div className="flex flex-col gap-2 items-center text-center pt-5">
                  <h4 className="text-sm md:text-base xl:text-xl font-PoppinsSemibold uppercase">{visa?.country}</h4>
                  <button onClick={() => navigate(`/visa/${visa.slug}`)} className="text-xs md:text-sm font-PoppinsLight bg-black tracking-widest capitalize text-white px-5 py-1.5 rounded-lg ">
                    explore
                  </button>
                </div>
              </div>
              </>
            ))}
          </Slider>
        )  
        }
          
        </div>
        <div className='w-fit mx-auto pt-5'>
        <Link to={'/visa'}>
        <button className="bg-visaclr text-white px-5 xl:px-10 py-3 text-sm font-PoppinsMedium uppercase rounded-full">
            view more
          </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default VisaCarousel;
