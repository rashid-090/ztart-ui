import React, { useEffect, useRef, useState } from "react";
import { stand1, stand2, stand3, stand4, aeorplane2, aeorplane1 } from "../../assets";

const HowweStand = () => {
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
    { icon: stand1, title: "Free visa consultation",alt:"visa consultation services icon- Startvisa" },
    { icon: stand2, title: "Application preparation",alt:"visa application processing- Startvisa" },
    { icon: stand3, title: "Doorstep document delivery",alt:"visa application form submission- Startvisa" },
    { icon: stand4, title: "Personalized support",alt:"visa assistance services- Startvisa" },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-11/12 xl:w-10/12 text-center mx-auto py-10 2xl:py-20"
    >
      <h2 className="text-2xl xl:text-5xl font-PoppinsMedium uppercase">
        How We <span className="text-visaclr">Stand Out</span>
      </h2>
      <p className="hidden md:block mt-4 text-sm md:text-base xl:w-[70%] mx-auto">
      With a commitment to transparency, reliability, and customer satisfaction, we make your Visa application process stress-free and efficient.
      </p>
      <p className="md:hidden mt-4 text-xs md:text-base xl:w-[70%] mx-auto">
      With a commitment to transparency, reliability, and customer satisfaction..
      </p>

      <div className="grid grid-cols-4 gap-2 md:gap-5 pt-20 relative">
        {/* Progress Line and Dots */}
        <div className="absolute w-[80%] xl:w-[78%] transform -translate-x-1/2 left-1/2 flex items-center justify-between mt-10">
          {/* Background Line */}
          <div className="absolute h-0.5 bg-gray-200 w-full">
            {/* Animated Progress Line */}
            <div
              className={`h-full bg-black transition-all duration-[6000ms] ease-in-out ${
                animate ? "w-full" : "w-0"
              }`}
            />
          </div>

          {/* Airplane Image Moving Along the Line */}
          <img
            src={aeorplane2}
            alt="Airplane"
            className="absolute top-[-15px] xl:top-[-18.5px] z-20 w-10 h-10 xl:w-12 xl:h-12 object-contain transition-all duration-[6000ms] ease-in-out"
            style={{
              left: animate ? "99%" : "0%",
              transform: `translateX(-50%) rotate(${animate ? "43deg" : "43deg"})`,
            }}
          />

          {/* Dots Along the Progress Line */}
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 bg-black rounded-full transform transition-all duration-[2500ms] ${
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
            className={` flex flex-col p-3 gap-5 items-center justify-center transform transition-all duration-[4000ms] ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{
              transitionDelay: `${index * 400 + 200}ms`,
            }}
          >
            <img className="h-8 w-8 xl:w-12 xl:h-12 object-contain" src={step.icon} alt={step.alt} />
            <h4 className="text-[8px] md:text-sm font-PoppinsMedium text-center w-[100%] 2xl:w-[55%] uppercase">
              {step.title}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowweStand;
