import React from "react";
import BATCH from "./batch";
const BATCHCONTAINER = () => {
  // best case adds only 7 batches
  return (
    <React.Fragment>
      <BATCH />
      <BATCH />
      <BATCH />
      <BATCH />
    </React.Fragment>
  );
};

export default BATCHCONTAINER;
