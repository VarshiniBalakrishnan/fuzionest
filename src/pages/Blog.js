import React from "react";
import BlogGroup from "../components/BlogGroup";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import BannerOne from "../components/BannerOne";
import AboutAreaOne from "../components/AboutAreaOne";
import FaqAreaOne from "../components/FaqAreaOne";
import Stopthink from "../components/Stopthink";
import Map from "../components/Map";
import ServiceAreaOne from "../components/ServiceAreaOne";
import Uber from "../components/Uber";
const Blog = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />
      <BannerOne />
      <AboutAreaOne />
      <ServiceAreaOne />

      
      <FaqAreaOne  />
      <Uber />
      <Stopthink />
      <Map />
      {/* Navigation Bar */}
      {/* <Breadcrumb title={"Blog"} /> */}

      {/* Blog Group */}
      {/* <BlogGroup /> */}

      {/* Footer One */}
      <Footer />
    </>
  );
};

export default Blog;
