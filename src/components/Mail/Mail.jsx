/*eslint-disable*/
import React from "react";

const Mail = ({ mailto, label }) => {
  return (
    <div>
      <a href={`mailto:${mailto}`}>{label}</a>
    </div>
  );
};

export default Mail;
