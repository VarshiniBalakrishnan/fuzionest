import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Rslpageone from '../components/Rslpageone';
import Rslpagetwo from '../components/Rslpagetwo';
import TeamAreaGroup from "../components/TeamAreaGroup";
import Rslpagethree from "../components/Rslpagethree";
import Rslpagefour from "../components/Rslpagefour";

const Team = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />
      <Rslpageone />
      <Rslpagetwo />
      <Rslpagethree />
      {/* <Rslpagefour /> */}
      

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
