import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
const MutedF = ({ setMute }) => {
  return (
    <button
      style={{
        background: "none",
        border: "none",
        outline: "none",
        cursor: "pointer"
      }}
      onClick={() => {
        setMute(true);
      }}
    >
      <FontAwesomeIcon icon={faVolumeUp} size="lg" color="white" />
    </button>
  );
};

export default MutedF;
