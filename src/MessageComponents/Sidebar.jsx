import React from "react";
import MessageNavbar from "./MessageNavbar"
import Search from "./Search"
import Chats from "./Chats"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <MessageNavbar />
      <Search/>
      <Chats/>
    </div>
  );
};

export default Sidebar;