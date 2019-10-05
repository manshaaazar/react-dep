import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause } from "@fortawesome/free-solid-svg-icons";
const Pause = props => {
  const { setPlaying } = props;
  return (
    <button
      style={{
        background: "none",
        border: "none",
        outline: "none",
        title: "Pause",
        cursor: "pointer"
      }}
      className="button"
      onClick={() => {
        setPlaying(false);
      }}
    >
      <FontAwesomeIcon icon={faPause} size="lg" />
    </button>
  );
};

export default Pause;
