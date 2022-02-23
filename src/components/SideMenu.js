import React from "react";
import Logo from "./Logo";
import MenuLinks from "./MenuLinks";
import Search from "./Search";

function SideMenu() {
  return (
    <aside className="side-bar open">
      <Logo />
      <MenuLinks />
      <Search />
      {/* What components go here? */}</aside>
  );
}

export default SideMenu;
