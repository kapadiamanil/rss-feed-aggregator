import React from "react";
import { Spin } from "antd";

const Spinner = () => {
  return (
    <div className="spinner-container">
      <Spin className="spinner" size="large" />
    </div>
  );
};

export default Spinner;
