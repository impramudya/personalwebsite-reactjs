import React from "react";
import "./about.css";
import pram from "../../img/impramudya.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={pram}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Tegar Pramudya Pratama</h1>
        <p className="a-sub">itsme.pramudya@gmail.com | +62895332358853</p>
        <p className="a-desc">
          
Currently i have reached 5th semester in major Informatics Engineering, I am very passionate about IT and programming, especially in Web Programming and Networking. I like to learn something new in my life especially about IT and Programming Language
        </p>
      </div>
    </div>
  );
};

export default About;
