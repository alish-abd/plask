// import { sec } from "mathjs";
import React, { useContext, useEffect, useState, useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
// import ReactSlider from "react-slider";
import SettingsContext from "./SettingsContext";
import "../Styles/Home.css";
import SettingsIcon2 from "../icons/SettingsIcon2";

const mainColor = "#5f2cf8";
const greyColor = "#e2e2e2";
const mainDarkColor = "#001f36";

function PomodoroTimer() {
  const settingsInfo = useContext(SettingsContext);

  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState("work"); //work/break/null
  const [secondsLeft, setSecondsLeft] = useState(0);

  //reference--start
  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);
  //reference--end

  //switchMode -- start
  function switchMode() {
    const nextMode = modeRef.current === "work" ? "break" : "work";
    const nextSeconds =
      (nextMode === "work"
        ? settingsInfo.workMinutes
        : settingsInfo.breakMinutes) * 60;

    setMode(nextMode);
    modeRef.current = nextMode;

    setSecondsLeft(nextSeconds);
    secondsLeftRef.current = nextSeconds;
  }
  //switchMode -- end

  function tick() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  function initTimer() {
    secondsLeftRef.current = settingsInfo.workMinutes * 60;
    setSecondsLeft(secondsLeftRef.current);
  }
  useEffect(() => {
    initTimer();

    //interval function -- start
    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode();
      }
      tick();
    }, 10);
    return () => clearInterval(interval);
  }, []);
  //interval function -- end

  const totalSeconds =
    mode === "work"
      ? settingsInfo.workMinutes * 60
      : settingsInfo.breakMinutes * 60;
  const percentage = Math.round((secondsLeft / totalSeconds) * 100);

  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  return (
    //pomodoro block
    <div style={{ width: 200, height: 200 }}>
      <CircularProgressbar
        value={percentage}
        text={minutes + ":" + seconds}
        styles={buildStyles({
          textColor: mainDarkColor,
          pathColor: mode === "work" ? mainColor : mainDarkColor,
          tailColor: "rgba(255,255,255,.2)",
        })}
      />
      <div className="pomodoro--buttons-row">
        {isPaused ? (
          <button
            className="pomodoro--button"
            onClick={() => {
              setIsPaused(false);
              isPausedRef.current = false;
            }}
          >
            Play
          </button>
        ) : (
          <button
            className="pomodoro--button"
            onClick={() => {
              setIsPaused(true);
              isPausedRef.current = true;
            }}
          >
            Pause
          </button>
        )}
      </div>
      <div>
        <button
          className="pomodoro--button-settings"
          onClick={() => settingsInfo.setShowSettings(true)}
        >
          <SettingsIcon2 />
        </button>
      </div>
    </div>
    //pomodoro block
  );
}

export default PomodoroTimer;
