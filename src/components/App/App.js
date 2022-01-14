import "./App.css";
import Post from "../Post";
import samplePosts from "../../libs/data";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState(samplePosts);
  return (
    <div className="App">
      <header className="App-header">
        {posts.map(function (item) {
          return <Post key={item.text} text={item.text} />;
        })}
      </header>
    </div>
  );
}

export default App;
