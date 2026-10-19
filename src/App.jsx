import Header from "./elements/Header.jsx";
import Home from "./components/Home.jsx";
import Books from "./components/Books.jsx";
import Movies from "./components/Movies.jsx";
import Games from "./components/Games.jsx";
import Series from "./components/Series.jsx";
import China from "./components/China.jsx";
import Philosophy from "./components/Philosophy.jsx";
import Warhammer from "./components/Warhammer.jsx";
import Progress from "./components/Progress.jsx";
import Plan from "./components/Plan.jsx";
import { Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:seriesName" element={<Books />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/games" element={<Games />} />
        <Route path="/series" element={<Series />} />
        <Route path="/china" element={<China />} />
        <Route path="/philosophy" element={<Philosophy />} />
        <Route path="/warhammer" element={<Warhammer />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/plan" element={<Plan />} />
      </Routes>
    </div>
  );
};

export default App;
