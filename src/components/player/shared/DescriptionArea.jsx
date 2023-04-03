import React from "react";

const DescriptionArea = ({ description }) => {
  return (
    <div
      style={{
        marginTop: "1rem",
      }}
    >
      <h4>Description</h4>
      {description}
    </div>
  );
};

export default DescriptionArea;
