import React from "react";
import SideMenu from "./SideMenu";
import TopMenu from "./TopMenu";
// import GenrePicker from "./GenrePicker";
// import AlbumList from "./AlbumList";
import MainContent from "./MainContent";

function App() {
  return <div className="app-container">
    <SideMenu />
    <MainContent />
    <TopMenu />


    {/* What components go here? */}</div>;
}

export default App;
