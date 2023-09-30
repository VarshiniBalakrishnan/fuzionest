import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Servicehomepage from "../components/Servicehomepage";
import Servicehomepage1 from '../components/Servicehomepage1';
import Servicehomepage2 from "../components/Servicehomepage2";
import Servicehomepage3 from "../components/Servicehomepage3";
import Servicehomepage4 from '../components/Servicehomepage4'
import PricingAreaOne from "../components/PricingAreaOne";
import ServiceAreaGroup from "../components/ServiceAreaGroup";

const Service = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />
      <Servicehomepage />
      <Servicehomepage1 />
      <Servicehomepage2 />
      <Servicehomepage3 />
      <Servicehomepage4 />
      {/* Navigation Bar */}
      {/* <Breadcrumb title={"Service"} /> */}

      {/* Service Area One */}
      {/* <ServiceAreaGroup /> */}

      {/* Pricing Area One */}
      {/* <PricingAreaOne /> */}

      {/* Footer One */}
      <Footer />
    </>
  );
};

export default Service;
