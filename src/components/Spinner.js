import React from "react";
import spinner from "./giphy.gif";
function Loading() {
  return (
    <>
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </>
  );
}

export default Loading;
