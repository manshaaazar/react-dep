import React, { useState, useEffect } from "react";
import Play from "./Play";
import Bar from "./bar";
import Volumn from "./volumn";
import Pause from "./Pause";
const Audio = () => {
  const [duration, setDuration] = useState();
  let [curTime, setCurTime] = useState();
  let [playing, setPlaying] = useState(false);
  let [clickedTime, setClickedTime] = useState();
  let [curVolume, setCurVolume] = useState();
  let [clickedVolume, setClickedVolume] = useState();
  let [mute, setMute] = useState(false);
  let [source, setSource] = useState("./instant-crush.mp3");
  let [loop, setLoop] = useState();
  useEffect(() => {
    const audio = document.querySelector("#audio");
    const setAudioData = () => {
      setCurTime(audio.currentTime);
      setDuration(audio.duration);
      setCurVolume(audio.volume);
      setLoop(audio.loop);
    };
    const setAudioVolume = () => {
      setCurVolume(audio.volume);
    };
    const handleLoop = () => {
      setPlaying(false);
    };
    const setAudioTime = () => setCurTime(audio.currentTime);
    audio.addEventListener("loadeddata", setAudioData);
    audio.addEventListener("timeupdate", setAudioTime);
    audio.addEventListener("volumechange", setAudioVolume);
    audio.addEventListener("ended", handleLoop);
    // for handling play pause
    playing ? audio.play() : audio.pause();
    // for handling the clicked time in time bar
    if (clickedTime && clickedTime !== curTime) {
      audio.currentTime = clickedTime;
      setClickedTime(null);
    }
    // handling the clikced volume in volume bar
    if (clickedVolume && clickedVolume !== curVolume) {
      clickedVolume >= 1
        ? (audio.volume = 1)
        : clickedVolume <= 0
        ? (audio.volume = 0)
        : (audio.volume = clickedVolume);
      setClickedVolume(null);
    }
    // for handling the mute
    mute ? (audio.muted = true) : (audio.muted = false);

    return () => {
      audio.removeEventListener("loadeddata", setAudioData);
      audio.removeEventListener("timeupdate", setAudioTime);
      audio.removeEventListener("volumechange", setAudioVolume);
      audio.removeEventListener("ended", handleLoop);
    };
  }, [
    curTime,
    setCurTime,
    curVolume,
    setCurVolume,
    playing,
    setPlaying,
    duration,
    setDuration,
    clickedTime,
    setClickedTime,
    clickedVolume,
    setClickedVolume,
    mute,
    setMute
  ]);
  return (
    <div className="player">
      <audio id="audio">
        <source src={source} />
        <p>Your browser does not support html5 audio element</p>
      </audio>
      <span>
        {playing ? (
          <Pause setPlaying={setPlaying} />
        ) : (
          <Play setPlaying={setPlaying} />
        )}
      </span>
      <Bar
        curTime={curTime}
        duration={duration}
        onTimeUpdate={time => {
          setClickedTime(time);
        }}
      />
      <Volumn
        setMute={mute => {
          setMute(mute);
        }}
        mute={mute}
        curVolume={curVolume}
        onVolumeUpdate={vol => {
          setClickedVolume(vol);
        }}
      />
    </div>
  );
};

export default Audio;
