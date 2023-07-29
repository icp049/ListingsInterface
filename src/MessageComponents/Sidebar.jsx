import React from "react";
import MessageNavbar from "./Navbar"
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