import React from "react";
import HomeIcon from "../icons/HomeIcon";
import TodoIcon from "../icons/TodoIcon";
import WriteIcon from "../icons/WriteIcon";
import StopwatchIcon from "../icons/StopwatchIcon";
import BlogIcon from "../icons/BlogIcon";
import CalendarIcon from "../icons/CalendarIcon";
import LogoIcon from "../icons/LogoIcon";
import "../Styles/Sidebar.css";
import ExitIcon from "../icons/ExitIcon";

function Sidebar() {
  return (
    <div className="sidebar">
      <LogoIcon />
      <div className="sidebar--icons">
        <HomeIcon />
        <TodoIcon />
        <WriteIcon />
        <StopwatchIcon />
        <CalendarIcon />
        <BlogIcon />
      </div>
      <ExitIcon />
    </div>
  );
}

export default Sidebar;
