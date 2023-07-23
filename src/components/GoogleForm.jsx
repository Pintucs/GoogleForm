import React, { useState } from "react";
import InputBox from "./commonUsed/InputBox";
import OptionTech from "./commonUsed/OptionTechnology";
import File from "./commonUsed/File";
import TopPage from "./commonUsed/TopPage";
import TopColorBlue from "./commonUsed/TopColorBlue";
import Require from "./commonUsed/Require";
import Heading from "./commonUsed/Heading"
import Experience from "./commonUsed/OptionExperience";
import NoticePeriod from "./commonUsed/OptionNoticePeriod";

const GoogleForm = () => {
   // State to keep track of the current user's Gmail account
   const [currentUser, setCurrentUser] = useState('pintucs9695@gmail.com');

   // Function to switch the user's Gmail account
   const switchUser = () => {
     // Implement logic to switch the user's Gmail account here
     // For this example, we'll just update the state with a new email
     setCurrentUser(currentUser);
   };



  return (
    <div
      className="roww"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="col-lg-12 col-md-12" style={{ backgroundColor: "LightGray" }}>
        <TopColorBlue />
        <Heading />
        <TopPage onSwitchUser={switchUser}/>
        <Require /> 
        <InputBox name="Full Name *" />
        <InputBox name="Location" />
        <OptionTech />
        <Experience />
        <InputBox name="CTC" />
        <InputBox name="ECTC *" />
        <NoticePeriod />
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
