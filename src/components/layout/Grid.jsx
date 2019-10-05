// this holds all components of application
import React from "react";
import Audio from "../audioplayer/audio";
import BATCHCONTAINER from "./batchcontainer";
import XVIEWCONTAINER from "./xviewcontainer";
const Layout = () => {
  return (
    <div className="container">
      <header>header</header>
      <aside>aside</aside>
      <main>
        <p className="timeline">Timeline</p>
        <XVIEWCONTAINER />
      </main>
      <footer>
        <Audio />
      </footer>
    </div>
  );
};

export default Layout;
