import Post from "../Post/index.js";
import { useState } from "react";

function PostDisplay() {
  return (
    <>
      <input type="text"></input>
      <Post />;
    </>
  );
}

export default PostDisplay;
