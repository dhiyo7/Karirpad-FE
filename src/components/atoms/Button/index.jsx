import React from "react";

const Button = (props) => {
  const { variant, children, ownStyle, textStyle, rounded } = props;

  return (
    <button
      className={`${
        variant === "primary"
          ? "bg-blue-400 hover:bg-blue-500"
          : variant === "dark"
          ? "bg-gray-500 hover:bg-gray-600"
          : variant === "solusi1"
          ? "bg-yellow-500 hover:bg-yellow-600"
          : variant === "solusi2"
          ? "bg-green-500 hover:bg-green-600"
          : "bg-red-400 hover:bg-red-500"
      } ${
        textStyle === "white" ? "text-white" : "text-black"
      } ${ownStyle} ${rounded}`}
    >
      {children}
    </button>
  );
};

export default Button;
