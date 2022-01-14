import React from "react";

export default function Comment({
  commentText,
  commentID,
  setComments,
  comments,
}) {
  function handleDelete(commentID) {
    console.log(comments);
    console.log(commentID);
    const newComments = comments.filter((c) => c.id != commentID);
    setComments(newComments);
    console.log("done");
  }

  return (
    <div>
      <li key={commentID}>
        {commentText} {commentID}
        <button>edit</button>
        <button name={commentID} onClick={(name) => handleDelete(name)}>
          delete
        </button>
      </li>
    </div>
  );
}
