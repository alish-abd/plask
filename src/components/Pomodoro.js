import { sec } from "mathjs";
import React, { useContext, useEffect, useState, useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../Styles/Home.css";

import SettingsContext from "./SettingsContext";
import PomodoroSettings from "./PomodoroSettings";
import PomodoroTimer from "./PomodoroTimer";

// const mainColor = "#5f2cf8";
// const greyColor = "#e2e2e2";
// const mainDarkColor = "#001f36";

function Pomodoro() {
  //state
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  return (
    <div>
      <SettingsContext.Provider
        value={{
          showSettings,
          setShowSettings,
          workMinutes,
          breakMinutes,
          setWorkMinutes,
          setBreakMinutes,
        }}
      >
        {showSettings ? <PomodoroSettings /> : <PomodoroTimer />}
      </SettingsContext.Provider>
    </div>
  );
}

export default Pomodoro;
