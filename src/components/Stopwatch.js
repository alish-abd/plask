import React, { useState, useEffect } from "react";
import { floor } from "mathjs";
import ResetIcon from "../icons/ResetIcon";
import "../Styles/Home.css";
import EditIcon from "../icons/SettingsIcon";
import TickIcon from "../icons/TickIcon";

function Stopwatch(props) {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1000);
      }, 1000);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  var [stopwatchName, setStopwatchName] = useState("");
  function nameChanger(event) {
    setStopwatchName(event.target.value);
  }

  const [nameInput, setNameInput] = useState(false);
  function nameInputChange() {
    setNameInput((prevNameInput) => !prevNameInput);
  }

  if (stopwatchName.length > 14) {
    stopwatchName = stopwatchName.slice(0, 14);
  }

  return (
    <div className="performance-item" style={props.style}>
      <div className="performance-item-content">
        <div className="performance-item-stopwatch">
          <span>{("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
          {/* <span>{("0" + ((time / 10) % 100)).slice(-2)}:</span> */}
        </div>

        {/* <input placeholder="Enter the name ">{stopwatchName}</input> */}
        <div>
          {nameInput ? (
            <input
              className="performance-item-title-input"
              type="text"
              id="stopwatchName"
              name="stopwatchName"
              placeholder={stopwatchName}
              onChange={nameChanger}
              value={stopwatchName}
            />
          ) : (
            <h4 onClick={nameInputChange} className="performance-item-title">
              {stopwatchName == "" ? "Default name" : stopwatchName}
            </h4>
          )}
        </div>

        <div className="button-row">
          <div>
            {running ? (
              <button
                className="performance--button-start"
                onClick={() => setRunning(false)}
              >
                Stop
              </button>
            ) : (
              <button
                className="performance--button-start"
                onClick={() => setRunning(true)}
              >
                Start
              </button>
            )}
          </div>
          <button
            className="performance--button-reset"
            onClick={() => setTime(0)}
          >
            <ResetIcon />
          </button>
          <button
            onClick={nameInputChange}
            className="performance--button-delete"
          >
            {!nameInput ? <EditIcon /> : <TickIcon />}
          </button>
          {/* <button className="performance--button-delete">
          <DeleteIcon />
        </button> */}
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;
