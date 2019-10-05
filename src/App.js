import React, { Component } from "react";
import "./App.css";
import Audio from "./components/audioplayer/audio";
import Layout from "./components/layout/Grid";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout />
      </div>
    );
  }
}

export default App;
