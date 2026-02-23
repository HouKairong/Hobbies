import { useState } from "react";
import Header from "./elements/Header.jsx";
import Books from "./components/Books.jsx";
import Movies from "./components/Movies.jsx";
import "./App.css";

const App = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <div>
      <Header
        onClickBooks={() => setActiveComponent("books")}
        onClickMovies={() => setActiveComponent("movies")}
      />
      {activeComponent === "books" && <Books />}
      {activeComponent === "movies" && <Movies />}
    </div>
  );
};

export default App;
