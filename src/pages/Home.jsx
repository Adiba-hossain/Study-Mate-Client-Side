import React from "react";
import HeroSlider from "../components/HeroSlider";
import TopPartners from "../components/TopPartners";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <section>
        <HeroSlider />
      </section>
      <section>
        <TopPartners />
      </section>
      <section>
        <HowItWorks />
      </section>
      <section>
        <Testimonials />
      </section>
    </>
  );
};

export default Home;
