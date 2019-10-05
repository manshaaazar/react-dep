import React from "react";

import MutedF from "./nmuted";
import MutedT from "./muted";
const Volumn = props => {
  const { curVolume, onVolumeUpdate, setMute, mute } = props;
  // to calculate current percentage to handle volume bar background dynamically
  const curPercentage = (curVolume / 1) * 100;
  // to calculate volume clicked in volume bar
  const calClickedVolume = e => {
    const clickedPositionInPage = e.pageX;
    const volumeBar = document.querySelector(".v-bar-progress");
    const vBarStart = volumeBar.getBoundingClientRect().left;
    const clickedPositionInvBar = clickedPositionInPage - vBarStart;
    const vBarWidth = volumeBar.offsetWidth;
    const volumePerPixel = 1 / vBarWidth;
    return volumePerPixel * clickedPositionInvBar;
  };
  // to handle clicked and move events in volume bar
  const handleVolume = e => {
    onVolumeUpdate(calClickedVolume(e));
    const updateVolumeOnMove = eMove => {
      onVolumeUpdate(calClickedVolume(eMove));
    };
    document.addEventListener("mousemove", updateVolumeOnMove);
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", updateVolumeOnMove);
    });
  };
  const handleVolumeBar = () => {
    const volumeBar = document.querySelector(".v-bar-progress");
    volumeBar.classList.add("show-v-bar");
  };
  const handleVolumeBarOf = () => {
    setTimeout(() => {
      const volumeBar = document.querySelector(".v-bar-progress");
      volumeBar.classList.remove("show-v-bar");
    }, 4000);
  };
  return (
    <div className="v-bar">
      <span
        className="volumeIcon"
        onMouseEnter={handleVolumeBar}
        onMouseLeave={handleVolumeBarOf}
      >
        {mute ? <MutedT setMute={setMute} /> : <MutedF setMute={setMute} />}
      </span>
      <div
        className="v-bar-progress"
        style={{
          background: `linear-gradient(to right, orange ${curPercentage}%, white 0)`
        }}
        onMouseDown={e => handleVolume(e)}
      >
        <span
          className="v-bar-progress-knob"
          style={{ left: `${curPercentage - 12}%` }}
        />
      </div>
    </div>
  );
};

export default Volumn;
