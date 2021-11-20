//  variant = title, subtitle, content
// bold = boolean,
// hover= hover style
// ownStyle= custom style

import React from "react";

const Text = (props) => {
  const { variant, bold, ownStyle, hover, children } = props;

  return (
    <p
      className={`${
        variant === "title"
          ? "text-lg"
          : variant === "subtitle"
          ? "text-base"
          : "text-sm"
      } ${
        bold === true ? "font-bold" : "font-normal"
      } ${hover} ${ownStyle}`}
    >
      {children}
    </p>
  );
};

export default Text;
