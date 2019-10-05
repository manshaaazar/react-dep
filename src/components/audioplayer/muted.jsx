import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeOff } from "@fortawesome/free-solid-svg-icons";
const MutedT = ({ setMute }) => {
  return (
    <button
      style={{
        background: "none",
        border: "none",
        outline: "none",
        cursor: "pointer"
      }}
      onClick={() => {
        setMute(false);
      }}
    >
      <FontAwesomeIcon icon={faVolumeOff} size="lg" color="white" />
    </button>
  );
};

export default MutedT;
