/* eslint-disable*/
import { useState } from "react";
import "./App.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import Mail from "./components/Mail/Mail";
import { FaLocationDot } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
const App = () => {
  const showInMapClicked = () => {
    window.open(
      "https://www.google.com/maps?q=24.7157211303711,46.6802597045898"
    );
  };
  return (
    <body>
      <div className="name">
        <h2>Mohamed Seif</h2>
        <h3>Branch Manager Urubah</h3>
      </div>

      <div className="container">
        <h1>Contact Me</h1>
        <div className="box">
          <FaPhoneAlt className="icon" />{" "}
          <a href="tel:053-168-1656" className="text">
            +966 531681656
          </a>
        </div>
        <div className="box">
          <MdOutlineMail className="icon" />
          <Mail
            className="text"
            label="m.seif@alfaristours.com"
            mailto="mailto:m.seif@alfaristours.com"
          />
        </div>
        <div className="box">
          <TbWorld className="icon" />
          <a href="https://www.alfaristours.com/" className="text">
            https://www.alfaristours.com
          </a>
        </div>
        <div className="box">
          <FaLocationDot className="icon" />
          <a onClick={showInMapClicked} className="text">
            Al Urubah Rd, As Sulimaniyah, Riyadh 12244, Saudi Arabia
          </a>
        </div>
      </div>
    </body>
  );
};

export default App;
