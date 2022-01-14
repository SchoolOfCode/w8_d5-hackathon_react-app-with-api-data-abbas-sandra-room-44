//PLAN
// Build the <Post/> component using HTML elements in JSX.
// Choose the most semantic html tag for each property that makes up the post.
// Use p tag for text.
// Import Avatar component to display the avatar picture alongside the text.

import Avatar from "../Avatar";

function Post({ text }) {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <Avatar />
      </div>
      <div style={{ float: "left" }}>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Post;
