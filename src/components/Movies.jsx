import "./Movies.css";
import { useState, useRef, useEffect } from "react";
import HTTYD from "../../public/images/HTTYD.jpg";
import moviesDescriptions from "../data/moviesDescriptions";
import movies from "../data/movies";

const Movies = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [openSubgroup, setOpenSubgroup] = useState(null);
  const [selectedSeries, setSelectedSeries] = useState(null);
  const [selectedPart, setSelectedPart] = useState(null);

  const seriesRef = useRef(null);
  const partRef = useRef(null);

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    setOpenSubgroup(null);
    setSelectedSeries(null);
    setSelectedPart(null);
  };

  const handleSeriesClick = (series) => {
    if (selectedSeries?.title === series.title) {
      setSelectedSeries(null);
      setSelectedPart(null);
    } else {
      setSelectedSeries(series);
      setSelectedPart(null);
    }
  };

  const handlePartClick = (e, part) => {
    e.stopPropagation();
    setSelectedPart(selectedPart?.title === part.title ? null : part);
  };

  const toggleSubgroup = (group) => {
    setOpenSubgroup(openSubgroup === group ? null : group);
  };

  const isBoskaKomedia = selectedCategory === "Boska Komedia";
  const isHTTYD = selectedSeries?.title === "Jak Wytresować Smoka";

  useEffect(() => {
    if (selectedSeries && seriesRef.current) {
      seriesRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selectedSeries]);

  useEffect(() => {
    if (selectedPart && partRef.current) {
      partRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selectedPart]);

  return (
    <div className="movies-wrapper">
      <div className="movies-container">
        <h2 className="movies-title">Filmy</h2>

        <label className="movies-select-label">
          Wybierz licencję:
          <select
            className="movies-select"
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            <option value="" disabled>
              Wybierz licencję
            </option>
            {Object.keys(movies).map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </label>

        {/* Zwykłe kategorie */}
        {!isBoskaKomedia && selectedCategory && (
          <ul className="movies-list">
            {movies[selectedCategory].map((series) => (
              <li
                key={series.title}
                className="movies-item clickable"
                onClick={() => handleSeriesClick(series)}
              >
                {series.title}
              </li>
            ))}
          </ul>
        )}

        {/* Boska Komedia */}
        {isBoskaKomedia &&
          Object.keys(movies["Boska Komedia"]).map((group) => (
            <div key={group} className="movies-group">
              <h3
                className="movies-group-title clickable"
                onClick={() => toggleSubgroup(group)}
              >
                {group}
              </h3>

              {openSubgroup === group && (
                <ul className="movies-list">
                  {movies["Boska Komedia"][group].map((series) => (
                    <li
                      key={series.title}
                      className="movies-item clickable"
                      onClick={() => handleSeriesClick(series)}
                    >
                      {series.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

        {/* Szczegóły serii */}
        {selectedSeries && (
          <div className="series-details" ref={seriesRef}>
            <h3>{selectedSeries.title}</h3>

            {moviesDescriptions[selectedSeries.title] && (
              <div className="series-description">
                <p>
                  <strong>Licencja: </strong>
                  {moviesDescriptions[selectedSeries.title].licence}
                </p>
                <p>
                  <strong>Dlaczego tu jest: </strong>
                  {moviesDescriptions[selectedSeries.title].why}
                </p>
                <p>
                  <strong>Główni Protagoniści: </strong>
                  {moviesDescriptions[selectedSeries.title].protagonist}
                </p>
                <p>
                  <strong>Główni Antagoniści: </strong>
                  {moviesDescriptions[selectedSeries.title].antagonist}
                </p>
                <p>
                  <strong>Miejsce Akcji: </strong>
                  {moviesDescriptions[selectedSeries.title].location}
                </p>
                <p>
                  <strong>Opis: </strong>
                  {moviesDescriptions[selectedSeries.title].description}
                </p>
              </div>
            )}

            {selectedSeries.parts && (
              <ul className="movies-sublist">
                {selectedSeries.parts.map((part) => (
                  <li
                    key={part.title}
                    className="movies-subitem clickable"
                    onClick={(e) => handlePartClick(e, part)}
                  >
                    {part.title}
                  </li>
                ))}
              </ul>
            )}

            {/* 🔥 Jeśli to HTTYD — pokaż część NAD obrazem */}
            {isHTTYD && selectedPart && (
              <div className="part-details" ref={partRef}>
                <h4>{selectedPart.title}</h4>
                <p>{selectedPart.description}</p>
              </div>
            )}

            {/* 🔥 Obraz tylko dla HTTYD */}
            {isHTTYD && (
              <img src={HTTYD} className="image-of-media" alt="HTTYD" />
            )}
          </div>
        )}

        {/* 🔥 Szczegóły części dla innych serii */}
        {selectedPart && !isHTTYD && (
          <div className="part-details" ref={partRef}>
            <h4>{selectedPart.title}</h4>
            <p>{selectedPart.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Movies;
