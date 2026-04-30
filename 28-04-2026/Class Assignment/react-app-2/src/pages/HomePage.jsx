import React from "react";
import { Link, Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h3>This is home page</h3>
      <div>
        <Link to="/">Home Hero</Link>
        <Link to="kitchen">Kitchen</Link>
      </div>
      <Outlet />
      <h3>This is the end of home page</h3>
    </>
  );
};

export default HomePage;
