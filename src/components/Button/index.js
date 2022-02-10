import React from "react";

const Button = ({ text, callback, id }) => {
  return (
    <button onClick={callback} id={id}>
      {text}
    </button>
  );
};

export default Button;
