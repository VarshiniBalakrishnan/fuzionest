import React from "react";
import BlogGroup from "../components/BlogGroup";
import Breadcrumb from "../components/Breadcrumb";
import Rslpageone from "../components/Rslpageone";
import Rslpagetwo from '../components/Rslpagetwo'
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Rslpagethree from "../components/Rslpagethree";
import Job1 from "../components/Job1";
import Job2 from "../components/job2";

const Job = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />
      <Job1 />
      <Job2 />
      {/* Navigation Bar */}
      {/* <Breadcrumb title={"Blog"} /> */}

      {/* Blog Group */}
      {/* <BlogGroup /> */}

      {/* Footer One */}
      <Footer />
    </>
  );
};

export default Job;
