/*eslint-disable*/
import React from "react";
import "./Mail.css";
const Mail = ({ mailto, label }) => {
  return (
    <div>
      <a href={`mailto:${mailto}`}> {label}</a>
    </div>
  );
};

export default Mail;
