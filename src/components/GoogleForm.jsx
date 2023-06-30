import React from "react";
import InputBox from "./commonUsed/InputBox";
import Option from "./commonUsed/OptionInput";
import File from "./commonUsed/File";
import TopPage from "./commonUsed/TopPage";
const GoogleForm = () => {
  return (
    <div
      className="row"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="col-lg-4 col-md-12 p-0" style={{ backgroundColor: "LightGray" }}>
        <TopPage />
        <InputBox name="Full Name *" />
        <InputBox name="Location" />
        <Option Label="Technology *" />
        <Option Label="Experience *" />
        <InputBox name="CTC" />
        <InputBox name="ECTC *" />
        <Option Label="Notice Period *" />
        <File name="Resume *" />
        <InputBox name="Mobile No *" />
        <InputBox name="Email *" />

        <button className="btn btn-primary">Submit</button>
        <span style={{ float: "right", textDecoration: "none" }}>
          <a href="www.google.com">Clear form</a>
        </span>
      </div>
    </div>
  );
};

export default GoogleForm;
