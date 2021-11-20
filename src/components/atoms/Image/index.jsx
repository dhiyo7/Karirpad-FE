import React from "react";

const Image = (props) => {
  const { linkPath, ownStyle, alias } = props;
  return (
    <img
      src={linkPath}
      alt={alias}
      className={`${ownStyle !== "undefined" ? ownStyle : null}`}
    />
  );
};

export default Image;
