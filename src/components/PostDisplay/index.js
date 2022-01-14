import Post from "../Post/index.js";
import { useState } from "react";
import CommentBox from "../CommentBox";

function PostDisplay({ posts }) {
  return (
    <div>
      <ul>
        {posts.map(function (item) {
          return <Post key={item.text} text={item.text} />;
        })}
      </ul>
      <CommentBox />
    </div>
  );
}

export default PostDisplay;
