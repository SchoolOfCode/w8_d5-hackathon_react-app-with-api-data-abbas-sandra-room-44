import React, { useState, useEffect, useReducer } from "react";
import { v4 } from "uuid";

import CommentBox from "../CommentBox";

import "./App.css";
import Post from "../Post";
import samplePosts from "../../libs/data";

import {LandingPage} from "./../LandingPage/index.js"


function App() {
  const [posts, setPosts] = useState(samplePosts);
  return (

    <div className="App-header">
      <CommentBox />

    <div className="App">

      <LandingPage/>

      <header className="App-header">
        {posts.map(function (item) {
          return <Post key={item.text} text={item.text} />;
        })}
      </header>


    </div>
  );
}

export default App;
