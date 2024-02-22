import React from "react";
import hero from "../assets/main.jpg";

const Hero = () => {
  return (
      <section className="float-start w-25 me-3">
          <img className="w-100" src={hero} alt="Hero"/>
      </section>
  )
}

export default Hero