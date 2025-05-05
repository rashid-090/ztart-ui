import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdAccessTime, MdArrowOutward } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
const Jobs = [
  {
    title: `product designer`,
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, reiciendis.`,
    jobtype: `india`,
    jobtym: `full-time`,
  },
  {
    title: `Engineering Manager`,
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, reiciendis.`,
    jobtype: `india`,
    jobtym: `full-time`,
  },
  {
    title: `Account Executive`,
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, reiciendis.`,
    jobtype: `qatar`,
    jobtym: `full-time`,
  },
  {
    title: `SEO Marketing Manager`,
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, reiciendis.`,
    jobtype: `qatar`,
    jobtym: `full-time`,
  },
];

const locations = ["India", "Qatar"];
const designations = [
  "Product Designer", 
  "Engineering Manager", 
  "Account Executive", 
  "SEO Marketing Manager"
];

const Career = () => {
  const [formData, setFormData] = useState({
    usr_name: "",
    usr_email: "",
    usr_location: "",
    usr_desig: "",
    usr_msg: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = "service_vokbcvc";
    const templateId = "template_p69x9u4";
    const publicKey = "Xecq_K13XvtQQK2R3";

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, formData, publicKey)
      .then((response) => {
        toast.success("Send successfully!");
        setFormData({
          usr_name: "",
          usr_email: "",
          usr_location: "",
          usr_desig: "",
          usr_msg: "",
        });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        toast.error("Failed to submit application. Please try again.");
      });
  };

  return (
    <div className="w-11/12 md:w-11/12 xl:w-9/12 mx-auto py-10 xl:py-20">
      {/* ... other components ... */}
      <div className="flex flex-col gap-5">
        <div className="w-fit px-5 py-2 border border-visaclr text-visaclr rounded-full">
          We're hiring!
        </div>
        <h1 className="text-2xl xl:text-5xl font-PoppinsMedium">
          Be part of our mission
        </h1>
        <p className="xl:w-[60%]">
          We're looking for passionate people to join us on our mission. We
          value flat hierarchies, clear communication, and full ownership and
          responsibility.
        </p>
      </div>

       {/* jobs */}
       <div className="mt-10 xl:mt-20 flex flex-col gap-8">
        {Jobs?.map((dt, i) => (
          <div key={i} className="flex flex-col md:flex-row justify-between xl:items-center gap-5 border-b pb-8 last:border-none">
            <div className="flex flex-col gap-3 ">
              <h4 className="capitalize text-lg xl:text-xl font-PoppinsMedium">
                {dt.title}
              </h4>
              <p className="text-sm">
                {dt.desc}
              </p>
              <div className="flex gap-4 text-visaclr">
                <span className="px-3 py-1.5 rounded-full border border-visaclr flex w-fit items-center gap-2">
                  <CiLocationOn />
                  <p className="capitalize text-xs">{dt.jobtype}</p>
                </span>
                <span className="px-3 py-1.5 rounded-full border border-visaclr flex w-fit items-center gap-2">
                  <MdAccessTime />
                  <p className="capitalize text-xs">{dt.jobtym}</p>
                </span>
              </div>
            </div>
            <a href="#form" className="group flex items-center gap-2 capitalize transition-all duration-200">
              <p className="group-hover:underline duration-200 text-lg md:text-xl">apply</p>
              <MdArrowOutward className="group-hover:rotate-45 text-xl duration-200"/>
            </a>
          </div>
        ))}
      </div>
      
      {/* Career Application Form */}
      <div className="mt-20 border-t pt-20" id="form">
        <h2 className="text-2xl xl:text-5xl text-center font-PoppinsMedium mb-10">Apply Now</h2>
        
        <form 
          className="max-w-2xl mx-auto" 
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="usr_name" className="font-PoppinsMedium">Full Name</label>
              <input
                type="text"
                id="usr_name"
                name="usr_name"
                value={formData.usr_name}
                onChange={handleChange}
                required
                className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-visaclr focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="usr_email" className="font-PoppinsMedium">Email Address</label>
              <input
                type="email"
                id="usr_email"
                name="usr_email"
                value={formData.usr_email}
                onChange={handleChange}
                required
                className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-visaclr focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="usr_location" className="font-PoppinsMedium">Preferred Location</label>
              <select
                id="usr_location"
                name="usr_location"
                value={formData.usr_location}
                onChange={handleChange}
                required
                className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-visaclr focus:border-transparent"
              >
                <option value="">Select location</option>
                {locations.map((loc, index) => (
                  <option key={index} value={loc}>{loc}</option>
                ))}
              </select>
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="usr_desig" className="font-PoppinsMedium">Career Designation</label>
              <select
                id="usr_desig"
                name="usr_desig"
                value={formData.usr_desig}
                onChange={handleChange}
                required
                className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-visaclr focus:border-transparent"
              >
                <option value="">Select designation</option>
                {designations.map((title, index) => (
                  <option key={index} value={title}>{title}</option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2 flex flex-col gap-2">
              <label htmlFor="usr_msg" className="font-PoppinsMedium">Cover Letter / Message</label>
              <textarea
                id="usr_msg"
                name="usr_msg"
                value={formData.usr_msg}
                onChange={handleChange}
                rows="3"
         
                className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-visaclr focus:border-transparent"
                placeholder="Tell us why you'd be a great fit..."
              ></textarea>
            </div>
          </div>
          
          <button
            type="submit"
            className="mt-8 bg-visaclr text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-200 flex items-center gap-2 mx-auto"
          >
            Submit Application
            <MdArrowOutward className="text-xl"/>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Career;