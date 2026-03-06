import "./Series.css";
import { useState, useMemo, useEffect, useRef } from "react";
import seriesData from "../data/seriesData";
import seriesDescriptions from "../data/seriesDescriptions";

const dimensionsList = ["Wszystkie", "Overworld", "Nether", "End"];

const Series = () => {
  const [selectedDimension, setSelectedDimension] = useState("Wszystkie");
  const [search, setSearch] = useState("");
  const [selectedSeries, setSelectedSeries] = useState(null);

  const descriptionRef = useRef(null);

  const filteredSeries = useMemo(() => {
    return seriesData
      .filter((serie) =>
        selectedDimension === "Wszystkie"
          ? true
          : serie.dimensions.includes(selectedDimension),
      )
      .filter((serie) =>
        serie.title.toLowerCase().includes(search.toLowerCase()),
      );
  }, [selectedDimension, search]);

  // Scroll do opisu po zmianie selectedSeries
  useEffect(() => {
    if (selectedSeries && descriptionRef.current) {
      descriptionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selectedSeries]);

  return (
    <div className="series-wrapper">
      <div className="series-container">
        <h2>Seriale</h2>

        <div className="series-controls">
          <input
            type="text"
            placeholder="Szukaj serialu..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="series-search"
          />

          <select
            value={selectedDimension}
            onChange={(e) => {
              setSelectedDimension(e.target.value);
              setSelectedSeries(null);
            }}
            className="series-filter"
          >
            {dimensionsList.map((dimension) => (
              <option key={dimension} value={dimension}>
                {dimension}
              </option>
            ))}
          </select>
        </div>

        <p className="series-count">Liczba seriali: {filteredSeries.length}</p>

        <ul className="series-list">
          {filteredSeries.map((serie, index) => (
            <li
              key={index}
              className={`series-item ${selectedSeries === serie.title ? "active" : ""}`}
              onClick={() =>
                setSelectedSeries(
                  selectedSeries === serie.title ? null : serie.title,
                )
              }
            >
              {serie.title}
            </li>
          ))}
        </ul>

        {selectedSeries && seriesDescriptions[selectedSeries] && (
          <div className="series-description" ref={descriptionRef}>
            <h3>{selectedSeries}</h3>

            <p>
              <strong>Do jakiego wymiaru nawiązuje: </strong>
              {seriesDescriptions[selectedSeries].dimension}
            </p>
            <p>
              <strong>Dlaczego akurat do tego: </strong>
              {seriesDescriptions[selectedSeries].why}
            </p>
            <p>
              <strong>Główni Protagoniści: </strong>
              {seriesDescriptions[selectedSeries].protagonist}
            </p>

            <p>
              <strong>Główni Antagoniści: </strong>
              {seriesDescriptions[selectedSeries].antagonist}
            </p>

            <p>
              <strong>Miejsce Akcji: </strong>
              {seriesDescriptions[selectedSeries].location}
            </p>

            <p>
              <strong>Krótki opis: </strong>
              {seriesDescriptions[selectedSeries].description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Series;
