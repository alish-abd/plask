import React from "react";
import DeleteIcon from "../icons/DeleteIcon";
import ResetIcon from "../icons/ResetIcon";
import "../Styles/Home.css";
import Pomodoro from "./Pomodoro";
import Stopwatch from "./Stopwatch";
import Todo from "./Todo";
import TodoList from "./TodoList";

function Home() {
  return (
    <div className="home--container">
      {/* <h1 className="home--title">Home</h1> */}
      {/* <div className="home--publications">
        <h3 className="h3-title">My publications</h3>
        <div className="publication-items">
          <div className="new-publication">
            <button className="add-button">+</button>
            <p className="title">New publication</p>
          </div>
          <div className="publication-item">
            <img
              className="publication-item-img"
              src="https://images.unsplash.com/photo-1605106715994-18d3fecffb98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=363&q=80"
            ></img>
            <h4 className="publication-item-title">How to stay productive</h4>
            <p className="publication-item-button">Read more</p>
          </div>
        </div>
      </div> */}

      <div className="home--performance">
        <div className="title-and-button">
          <h3 className="common--h3-title">Task performance</h3>
          <button className="performance--add-button">+</button>
        </div>
        <div className="performance-items">
          <Stopwatch />
          <Stopwatch
            style={{
              background:
                "linear-gradient(146.59deg, #9F80FA 0%, #6738F7 111.41%)",
            }}
          />
          <Stopwatch
            style={{
              background:
                "linear-gradient(146.59deg, #FDAF7A 0%, #FB8F44 111.41%)",
            }}
          />
          <Stopwatch
            style={{
              background:
                "linear-gradient(146.59deg, #26D44C 0%, #12AF36 111.41%)",
            }}
          />
        </div>
      </div>

      <div className="todo-pomodoro-container">
        <div className="todo">
          <div className="todo-content">
            <div className="todo--title-and-buttons">
              <h3 className="common--h3-title">To do list</h3>
              <button className="performance--add-button">+</button>
              <p className="todo--teritary-button">See all</p>
            </div>
            <hr className="divider-line" />
            <TodoList />
            <div className="todo--items"></div>
          </div>
        </div>

        <div className="pomodoro">
          <div className="pomodoro-content">
            <div className="pomodoro--title-and-buttons">
              <h3 className="common--h3-title">Pomodoro</h3>
              <p className="pomodoro--teritary-button">Focus</p>
            </div>
            <hr className="divider-line" />
            <Pomodoro />
            <button className="pomodoro--timer-button">Start</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
