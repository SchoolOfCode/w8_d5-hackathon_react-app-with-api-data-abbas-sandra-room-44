import React, { useState } from "react";
import { v4 } from "uuid";

export default function CommentBox() {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let createComment = {
      text: text,
      id: v4(),
    };
    setComments([...comments, createComment]);
  }

  function handleDelete(commentID) {
    console.log(comments);
    console.log(commentID);
    const newComments = comments.filter((c) => c.id != commentID);
    setComments(newComments);
    console.log("done");
  }

  function handleEdit(e, comment, text, id) {
    console.log("here", id);
    e.preventDefault();
    console.log("comment", comment);
    console.log("text", text);
    const index = comments.indexOf(comment);
    const newComments = [...comments];
    newComments[index].text = text;
    setComments(newComments);
    let form = document.getElementById(id);
    form.style = { display: "none" };
  }
  return (
    <div>
      <ul>
        {comments.map((el) => {
          return (
            <li key={el.id}>
              {el.text}
              <button
                onClick={() => {
                  let form = document.getElementById(`${el.id}`);
                  form.style = { display: "block" };
                }}
              >
                edit
              </button>
              <button onClick={() => handleDelete(el.id)}>delete</button>
              <form
                onSubmit={(e) => handleEdit(e, el, text, el.id)}
                id={el.id}
                style={{ display: "none" }}
              >
                <input onChange={(e) => setText(e.target.value)} />
                <button type="submit">Submit</button>
              </form>
            </li>
          );
        })}
      </ul>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input type="text" onChange={(e) => setText(e.target.value)}></input>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
