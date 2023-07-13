import React from "react";
import logo1 from "../assets/product/logo1.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${logo1})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        
         @ BIRTHDAY GIFT
         @  COUPLE'S GIFT
         @ VALENTINE'S GIFT
         @ ANNIVERSERY GIFT
         @ WEDDING GIFT


         Building trust with Integrity. 
         At craft pencil, every decision made is based on ethical and moral principles 
         - no success is meaningful if its not achieved the right way.
        </p>
      </div>
    </div>
  );
}

export default About;