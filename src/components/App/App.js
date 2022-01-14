import React, { useState, useEffect, useReducer } from "react";
import { v4 } from "uuid";

import CommentBox from "../CommentBox";

function App() {
  return (
    <div className="App-header">
      <CommentBox />
    </div>
  );
}

export default App;
