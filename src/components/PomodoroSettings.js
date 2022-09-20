import React from "react";
import SettingsContext from "./SettingsContext";
import ReactSlider from "react-slider";
import { useContext } from "react";
import "../Styles/Home.css";

function PomodoroSettings() {
  const settingsInfo = useContext(SettingsContext);
  return (
    <div>
      <div style={{ textAlign: "left" }}>
        <label>work: {settingsInfo.workMinutes}:00</label>
        <ReactSlider
          className={"pomodoro-setting-slider "}
          thumbClassName={"thumb"}
          trackClassName={"track"}
          value={settingsInfo.workMinutes}
          onChange={(newValue) => settingsInfo.setWorkMinutes(newValue)}
          min={1}
          max={120}
        />
        <label>break: {settingsInfo.breakMinutes}:00</label>
        <ReactSlider
          className={"slider green"}
          thumbClassName={"thumb"}
          trackClassName={"track"}
          value={settingsInfo.breakMinutes}
          onChange={(newValue) => settingsInfo.setBreakMinutes(newValue)}
          min={1}
          max={120}
        />
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button onClick={() => settingsInfo.setShowSettings(false)}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default PomodoroSettings;
