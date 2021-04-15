import React from "react";
import Navbar from "./Navbar";
import Bottombar from "./Bottombar";

function Layout(props) {
  return (
    <React.Fragment>
      <Navbar />
      {props.children}
      <Bottombar />
    </React.Fragment>
  );
}

export default Layout;
