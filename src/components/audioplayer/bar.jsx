import React from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
const Bar = props => {
  const { duration, curTime, onTimeUpdate } = props;
  // finding the percentage to handle audio time bar background Colour dynamically
  const curPercentage = (curTime / duration) * 100;
  // to format during  to display in audio controls
  const formatTime = duration => {
    return moment
      .duration(duration, "seconds")
      .format("mm:ss", { trim: false });
  };
  // to calculate clicked volume in bar
  const calClickedTime = e => {
    const clickPositionInPage = e.pageX;
    const bar = document.querySelector(".bar-progress");
    const barStart = bar.getBoundingClientRect().left + window.scrollX;
    const clickPositionInBar = clickPositionInPage - barStart;
    const barWidth = bar.offsetWidth;
    const timePerPixel = duration / barWidth;
    return timePerPixel * clickPositionInBar;
  };
  // to handle clik event and move event in bar
  const handleTimeDrag = e => {
    onTimeUpdate(calClickedTime(e));
    const updateTimeOnMove = eMove => {
      onTimeUpdate(calClickedTime(eMove));
    };
    document.addEventListener("mousemove", updateTimeOnMove);
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", updateTimeOnMove);
    });
  };
  return (
    <div className="bar">
      <span className="bar-time">{formatTime(curTime)}</span>
      <div
        className="bar-progress"
        style={{
          background: `linear-gradient(to right, orange ${curPercentage}%, white 0)`
        }}
        onMouseDown={e => handleTimeDrag(e)}
      >
        <span
          className="bar-progress-knob"
          style={{ left: `${curPercentage - 1}%` }}
        />
      </div>
      <span className="bar-time">{formatTime(duration)}</span>
    </div>
  );
};

export default Bar;
