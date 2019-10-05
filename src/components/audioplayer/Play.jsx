import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Play = props => {
  const { setPlaying } = props;
  return (
    <button
      style={{
        background: "none",
        border: "none",
        outline: "none",
        title: "Play",
        cursor: "pointer"
      }}
      className="button"
      onClick={() => {
        setPlaying(true);
      }}
    >
      <FontAwesomeIcon icon={faPlay} size="lg" />
    </button>
  );
};

export default Play;
