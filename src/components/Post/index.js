//PLAN
// Build the <Post/> component using HTML elements in JSX.
// Choose the most semantic html tag for each property that makes up the post.
// Use img tag for the avatar, h2 tag for author, p tag for text.
// Import Avatar component to display the avatar picture alongside the text.

import Avatar from "../Avatar";
import CommentBox from "../CommentBox";

function Post({ text }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          flexDirection: "row",
          width: "80px",
          height: "80px",
          float: "left",
          margin: "auto",
        }}
      >
        <Avatar />
      </div>
      <div
        style={{
          float: "left",
          lineHeight: "50px",
        }}
      >
        <p>{text}</p>
      </div>
      <CommentBox />
    </div>
  );
}

export default Post;
