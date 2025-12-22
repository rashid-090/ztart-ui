import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import { vars } from "../../constents/Api";
import { Loader } from "../../components";
import RichTextContent from "../../components/RichTextEditor/RichTextContent";
import { RiFileWarningLine } from "react-icons/ri";

const BlogInner = () => {
  const { id } = useParams();
  const [bdata, setBdata] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [toc, setToc] = useState([]);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get(`${vars.api_url}/api/1.0/user/blog/blog/${id}`);
        const data = response?.data?.data;

        const container = document.createElement("div");
        container.innerHTML = data.description;

        const headings = container.querySelectorAll("h2, h3, h4, h5, h6");

        const newToc = [];
        headings.forEach((heading, index) => {
          const text = heading.textContent;
          const tag = heading.tagName.toLowerCase();
          const id = `heading-${index}`;
          heading.setAttribute("id", id); // ✅ Add id to DOM
          newToc.push({ id, text, tag });
        });

        setToc(newToc);
        setBdata({ ...data, description: container.innerHTML }); // ✅ Updated HTML with IDs
      } catch (error) {
        console.error("Error fetching blog data:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [id]);



  if (loading) return <Loader />;
  if (error) return <div>Error: {error.message}</div>;
  if (!bdata) return <div>Page not found</div>;

  return (
    <>
      <Helmet>
        <title>{bdata?.metaTitle}</title>
        <link rel="canonical" href={`https://startvisa.com/blogs/${bdata?.slug}`} />
        <meta name="description" content={bdata.metaDescription} />
      </Helmet>

      <div className="w-11/12 md:w-11/12 xl:w-9/12 mx-auto h-full py-10">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl xl:text-4xl font-PoppinsBold">{bdata.title}</h1>

          <img
            className="object-cover object-left xl:object-center h-52 md:h-full xl:h-[450px] w-full"
            src={bdata?.imageURL}
            alt={bdata?.imageAlt}
            loading="lazy"
          />

          <Link to="/contact">
            <button className="bg-visaclr text-white h-10 xl:h-11 px-6 capitalize text-sm rounded-full hover:bg-visaclrhvr w-fit my-2 font-PoppinsSemibold">
              Apply Now
            </button>
          </Link>

        

          {/* Blog Content */}
          <RichTextContent content={bdata.description} />

          <Link to="/">
            <button className="bg-visaclr text-white h-10 xl:h-11 px-6 capitalize text-sm rounded-full hover:bg-visaclrhvr w-fit my-2 font-PoppinsSemibold">
              Explore Now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogInner;
