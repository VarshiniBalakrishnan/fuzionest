import React from "react";
import AboutAreaOne from "../components/AboutAreaOne";
import Breadcrumb from "../components/Breadcrumb";
import ContactAreaOne from "../components/ContactAreaOne";
import CounterAreaOne from "../components/CounterAreaOne";
import FaqAreaOne from "../components/FaqAreaOne";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Homepage from "../components/Homepage";
import Servicepageone from '../components/Servicepageone';
import Servicepagetwo from "../components/Servicepagetwo";
import Servicepagethree from "../components/Servicepagethree";
import Servicepagefour from "../components/Servicepagefour";
import Homepageone from "../components/Homepageone";
import TeamAreaOne from "../components/TeamAreaOne";
import WorkProcessOne from "../components/WorkProcessOne";

const About = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />
     
      <Homepageone />
      <Servicepageone />
      <Servicepagetwo />
      <Servicepagethree />
      <Servicepagefour />
      {/* Navigation Bar */}
      {/* <Breadcrumb title={"About Us"} /> */}

      {/* About Area One */}
      {/* <AboutAreaOne /> */}

      {/* FAQ Area One */}
      {/* <FaqAreaOne /> */}

      {/* Team Area One */}
      {/* <TeamAreaOne /> */}

      {/* Counter Area One */}
      {/* <CounterAreaOne /> */}

      {/* Contact Area One */}
      {/* <ContactAreaOne /> */}

      {/* Work Process One */}
      {/* <WorkProcessOne /> */}

      {/* Footer One */}
      <Footer />
    </>
  );
};

export default About;
