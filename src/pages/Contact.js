import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import ContactAreaOne from "../components/ContactAreaOne";
import ContactMain from "../components/ContactMain";
import Contactarea1 from "../components/Contactarea1";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Contact = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      {/* <Breadcrumb title={"Contact"} /> */}
<ContactAreaOne />
<Contactarea1 />
      {/* Contact Main */}
       {/* <ContactMain />  */}

      {/* Footer One */}
      <Footer />
    </>
  );
};

export default Contact;
