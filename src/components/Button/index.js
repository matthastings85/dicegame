import React from "react";

const Button = ({ text, callback, id }) => {
  return (
    <button className="styled-btn" onClick={callback} id={id}>
      {text}
    </button>
  );
};

export default Button;
