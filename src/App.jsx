import { useState } from "react";
import Header from "./elements/Header.jsx";
import Books from "./components/Books.jsx";
import Movies from "./components/Movies.jsx";
import Games from "./components/Games.jsx";
import Series from "./components/Series.jsx";
import China from "./components/China.jsx";
import "./App.css";

const App = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <div>
      <Header
        onClickBooks={() => setActiveComponent("books")}
        onClickMovies={() => setActiveComponent("movies")}
        onClickGames={() => setActiveComponent("games")}
        onClickSeries={() => setActiveComponent("series")}
        onClickChina={() => setActiveComponent("china")}
      />

      {activeComponent === "books" && <Books />}
      {activeComponent === "movies" && <Movies />}
      {activeComponent === "games" && <Games />}
      {activeComponent === "series" && <Series />}
      {activeComponent === "china" && <China />}
    </div>
  );
};

export default App;
