import React, { useState, useEffect, useReducer } from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import samplePosts from "../../libs/data";

import { LandingPage } from "../LandingPage";
import Post from "../Post";

function App() {
  const [posts, setPosts] = useState(samplePosts);
  return (
    <div className="App-header">
      <header className="App-header">
        {posts.map(function (item) {
          return <Post key={item.text} text={item.text} />;
        })}
      </header>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/posts" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
