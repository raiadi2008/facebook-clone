import { Avatar } from "@material-ui/core";
import React from "react";
import "../styles/Story.css";

const Story = ({ image, profileSrc, title }) => {
  return (
    <div className="story" style={{ backgroundImage: `url(${image})` }}>
      <Avatar src={profileSrc} />
      <h4>{title}</h4>
    </div>
  );
};

export default Story;
