//PLAN
// Build the <Post/> component using HTML elements in JSX.
// Choose the most semantic html tag for each property that makes up the post.
// Use img tag for the avatar, h2 tag for author, p tag for text.
// inside that img tag, put the src to be the link

function Post({ image, author, text }) {
  return (
    <article>
      <img src={image} alt={alt}></img>
      <h2>{author}</h2>
      <p>{text}</p>
    </article>
  );
}

export default Post;
