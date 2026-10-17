import "./Movies.css";
import { useState, useRef, useEffect } from "react";
import HTTYD from "../../public/images/HTTYD.jpg";
import moviesDescriptions from "../data/moviesDescriptions";
import movies from "../data/movies";

const Movies = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("Wszystkie");
  const [openSubgroup, setOpenSubgroup] = useState(null);
  const [selectedSeries, setSelectedSeries] = useState(null);
  const [selectedPart, setSelectedPart] = useState(null);
  const [itemStatuses, setItemStatuses] = useState(() => {
    if (typeof window === "undefined") return {};

    try {
      return JSON.parse(localStorage.getItem("hobbies-movie-statuses") || "{}");
    } catch {
      return {};
    }
  });

  const statusOptions = [
    { value: "seen", label: "Nie znam" },
    { value: "progress", label: "W trakcie" },
    { value: "done", label: "Skończone" },
  ];

  const statusFilterOptions = [
    { value: "Wszystkie", label: "Wszystkie" },
    ...statusOptions.map((option) => ({
      value: option.label,
      label: option.label,
    })),
  ];

  const seriesRef = useRef(null);
  const partRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(
        "hobbies-movie-statuses",
        JSON.stringify(itemStatuses),
      );
    }
  }, [itemStatuses]);

  const updateStatus = (itemKey, nextStatus) => {
    setItemStatuses((current) => ({
      ...current,
      [itemKey]: nextStatus,
    }));
  };

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    setOpenSubgroup(null);
    setSelectedSeries(null);
    setSelectedPart(null);
  };

  const handleSeriesClick = (series) => {
    const nextSeries = selectedSeries?.title === series.title ? null : series;
    setSelectedSeries(nextSeries);
    setSelectedPart(null);

    if (nextSeries) {
      requestAnimationFrame(() => {
        scrollToSection(seriesRef.current);
      });
    }
  };

  const handlePartClick = (e, part) => {
    e.stopPropagation();
    const nextPart = selectedPart?.title === part.title ? null : part;
    setSelectedPart(nextPart);

    if (nextPart) {
      requestAnimationFrame(() => {
        scrollToSection(partRef.current);
      });
    }
  };

  const toggleSubgroup = (group) => {
    setOpenSubgroup(openSubgroup === group ? null : group);
  };

  const isBoskaKomedia = selectedCategory === "Boska Komedia";
  const isHTTYD = selectedSeries?.title === "Jak Wytresować Smoka";

  const getMovieStatusKey = (title, partTitle = null) => {
    if (partTitle) return `movie-part:${title}:${partTitle}`;
    return `movie:${title}`;
  };

  const getMovieStatusForSeries = (series) => {
    if (!series.parts || series.parts.length === 0) {
      return itemStatuses[getMovieStatusKey(series.title)] ?? "seen";
    }

    const partStatuses = series.parts.map(
      (part) =>
        itemStatuses[getMovieStatusKey(series.title, part.title)] ?? "seen",
    );

    const allDone = partStatuses.every((status) => status === "done");
    if (allDone) return "done";

    const hasProgressOrDone = partStatuses.some(
      (status) => status === "progress" || status === "done",
    );
    if (hasProgressOrDone) return "progress";

    return "seen";
  };

  const filterByStatus = (series) => {
    if (selectedStatus === "Wszystkie") return true;

    const selectedStatusValue = statusOptions.find(
      (option) => option.label === selectedStatus,
    )?.value;

    return getMovieStatusForSeries(series) === selectedStatusValue;
  };

  const scrollToSection = (element) => {
    if (!element || typeof window === "undefined") return;
    requestAnimationFrame(() => {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  return (
    <div className="movies-wrapper">
      <div className="movies-container">
        <h2 className="movies-title">Filmy</h2>

        <div className="movies-select-row">
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

          <label className="movies-select-label">
            Status:
            <select
              className="movies-select"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              {statusFilterOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        {/* Zwykłe kategorie */}
        {!isBoskaKomedia && selectedCategory && (
          <ul className="movies-list">
            {movies[selectedCategory]
              .filter((series) => filterByStatus(series))
              .map((series) => {
                const itemKey = getMovieStatusKey(series.title);
                const currentStatus = getMovieStatusForSeries(series);

                return (
                  <li
                    key={series.title}
                    className={`movies-item clickable ${currentStatus ? `item-status-${currentStatus}` : ""}`}
                    onClick={() => handleSeriesClick(series)}
                  >
                    <div className="movies-item-content">
                      <span>{series.title}</span>

                      {!series.parts || series.parts.length <= 1 ? (
                        <div className="status-control">
                          {statusOptions.map((option) => (
                            <button
                              key={option.value}
                              type="button"
                              className={`status-button status-${option.value} ${
                                currentStatus === option.value ? "active" : ""
                              }`}
                              onClick={(e) => {
                                e.stopPropagation();
                                updateStatus(itemKey, option.value);
                              }}
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </li>
                );
              })}
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
                  {movies["Boska Komedia"][group]
                    .filter((series) => filterByStatus(series))
                    .map((series) => {
                      const itemKey = getMovieStatusKey(series.title);
                      const currentStatus = getMovieStatusForSeries(series);

                      return (
                        <li
                          key={series.title}
                          className={`movies-item clickable ${currentStatus ? `item-status-${currentStatus}` : ""}`}
                          onClick={() => handleSeriesClick(series)}
                        >
                          <div className="movies-item-content">
                            <span>{series.title}</span>

                            {!series.parts || series.parts.length <= 1 ? (
                              <div className="status-control">
                                {statusOptions.map((option) => (
                                  <button
                                    key={option.value}
                                    type="button"
                                    className={`status-button status-${option.value} ${
                                      currentStatus === option.value
                                        ? "active"
                                        : ""
                                    }`}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      updateStatus(itemKey, option.value);
                                    }}
                                  >
                                    {option.label}
                                  </button>
                                ))}
                              </div>
                            ) : null}
                          </div>
                        </li>
                      );
                    })}
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
                {selectedSeries.parts.map((part) => {
                  const itemKey = getMovieStatusKey(
                    selectedSeries.title,
                    part.title,
                  );
                  const currentStatus = itemStatuses[itemKey] ?? "seen";

                  return (
                    <li
                      key={part.title}
                      className={`movies-subitem clickable ${currentStatus ? `item-status-${currentStatus}` : ""}`}
                      onClick={(e) => handlePartClick(e, part)}
                    >
                      <div className="movies-subitem-content">
                        <span>{part.title}</span>

                        <div className="status-control">
                          {statusOptions.map((option) => (
                            <button
                              key={option.value}
                              type="button"
                              className={`status-button status-${option.value} ${
                                currentStatus === option.value ? "active" : ""
                              }`}
                              onClick={(e) => {
                                e.stopPropagation();
                                updateStatus(itemKey, option.value);
                              }}
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </li>
                  );
                })}
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
