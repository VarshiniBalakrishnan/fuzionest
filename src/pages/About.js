import React from "react";
import AboutAreaOne from "../components/AboutAreaOne";
import Breadcrumb from "../components/Breadcrumb";
import ContactAreaOne from "../components/ContactAreaOne";
import CounterAreaOne from "../components/CounterAreaOne";
import FaqAreaOne from "../components/FaqAreaOne";
import Footer from "../components/Footer";
import Aboutpage1 from '../components/Aboutpage1';
import Aboutpage2 from "../components/Aboutpage2";
import Aboutpage4 from "../components/Aboutpage4";
import NavBar from "../components/NavBar";
import TeamAreaOne from "../components/TeamAreaOne";
import WorkProcessOne from "../components/WorkProcessOne";
import Aboutpage3 from "../components/Aboutpage3";
import Aboutpage5 from "../components/Aboutpage5";
import FooterOne from "../components/FooterOne";
const About = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />
<Aboutpage1 />
<Aboutpage2 />
<Aboutpage3 />
<WorkProcessOne />
<Aboutpage4 />
<Aboutpage5 />

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

       {/* <FooterOne /> */}
      <Footer />
    </>
  );
};

export default About;
