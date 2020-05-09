import React from "react";
import "./App.css";
import Header from "./components/Header";
import Post from "./components/Post";

function App() {
  return (
    <div>
      <Header />
      <div>
        <Post
          nickname="Chris"
          avatar="https://www.laravelnigeria.com/img/chris.jpg"
          caption="Moving the community!"
          image="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg"
        />
        <Post
          nickname="OG"
          avatar="https://www.laravelnigeria.com/img/chris.jpg"
          caption="Holding a mic"
          image="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg"
        />
      </div>
    </div>
  );
}

export default App;
