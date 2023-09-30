import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Technologypageone from "../components/Technologypageone";
import TeamAreaGroup from "../components/TeamAreaGroup";
import Technologypagetwo from '../components/Technologypagetwo';
import Technologypagethree from "../components/Technologypagethree"

const Team = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />
      <Technologypageone />
      <Technologypagetwo />
      <Technologypagethree />

      {/* Breadcrumb */}
      {/* <Breadcrumb title={"Team"} /> */}

      {/* Team Area Group */}
      {/* <TeamAreaGroup /> */}

      {/* Footer One */}
      <Footer />
    </>
  );
};

export default Team;
