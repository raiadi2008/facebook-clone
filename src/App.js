import React from "react";
import Header from "./components/Header";
import SideBar from "./components/Sidebar";
import "./App.css";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";
import Login from "./components/Login";
import { useStateValue } from "./components/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          {" "}
          <Header />
          <div className="app__body">
            <SideBar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
