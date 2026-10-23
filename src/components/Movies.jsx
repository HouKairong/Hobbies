import "./Movies.css";
import { useState, useRef, useEffect } from "react";
import moviesDescriptions from "../data/moviesDescriptions";
import movies from "../data/movies";
import {
  readMovieStatuses,
  subscribeToMovieStatuses,
  updateMovieStatus,
} from "../data/movieStatuses";

const HTTYD = `${import.meta.env.BASE_URL}images/HTTYD.jpg`;

const normalizeMovieTitle = (value = "") =>
  String(value ?? "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s*\((?:19|20)\d{2}\)\s*$/, "")
    .replace(/\s+gra\s*$/i, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const getMovieTitleKey = (value = "") => {
  const normalized = normalizeMovieTitle(value);
  if (!normalized) return "";

  if (normalized === "lego ninjago film") {
    return "LEGO Ninjago Film";
  }

  return String(value ?? "").trim();
};

const resolveMovieDescriptionKey = (title = "") => {
  const directMatch = moviesDescriptions[String(title || "").trim()];
  if (directMatch) return String(title || "").trim();

  const normalizedTarget = normalizeMovieTitle(title);
  const matchingKey = Object.keys(moviesDescriptions).find(
    (key) => normalizeMovieTitle(key) === normalizedTarget,
  );

  return matchingKey || String(title || "").trim();
};

const Movies = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("Wszystkie");
  const [openSubgroup, setOpenSubgroup] = useState(null);
  const [selectedSeries, setSelectedSeries] = useState(null);
  const [selectedPart, setSelectedPart] = useState(null);
  const [movieChoiceOptions, setMovieChoiceOptions] = useState(null);
  const [itemStatuses, setItemStatuses] = useState(() => readMovieStatuses());

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
    const unsubscribe = subscribeToMovieStatuses(setItemStatuses);
    return unsubscribe;
  }, []);

  const updateStatus = (itemKey, nextStatus) => {
    updateMovieStatus(itemKey, nextStatus);
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

  const findMovieTargets = (title) => {
    const targetKey = getMovieTitleKey(title);
    const matches = [];
    const seen = new Set();

    Object.entries(movies).forEach(([category, categoryItems]) => {
      const flattenedItems = Array.isArray(categoryItems)
        ? categoryItems
        : Object.values(categoryItems ?? {}).flatMap((group) =>
            Array.isArray(group) ? group : [],
          );

      const matchingSeries = flattenedItems.filter((item) => {
        if (!item) return false;

        const seriesTitleKey = getMovieTitleKey(item.title);
        const matchingPart = item.parts?.find(
          (part) => getMovieTitleKey(part.title) === targetKey,
        );

        return (
          seriesTitleKey === targetKey ||
          matchingPart ||
          (item.title && getMovieTitleKey(item.title) === targetKey)
        );
      });

      matchingSeries.forEach((series) => {
        const part = series.parts?.find(
          (part) => getMovieTitleKey(part.title) === targetKey,
        );
        const canonicalSeriesTitle = getMovieTitleKey(series.title);
        const canonicalPartTitle = part
          ? getMovieTitleKey(part.title)
          : "series";
        const matchKey = `${canonicalSeriesTitle}:${canonicalPartTitle}`;

        if (seen.has(matchKey)) return;
        seen.add(matchKey);

        matches.push({
          category,
          series,
          part: part ?? null,
        });
      });
    });

    return matches;
  };

  const chooseMovieLicense = (match) => {
    setSelectedCategory(match.category);
    setSelectedSeries(match.series);
    setSelectedPart(match.part);
    setMovieChoiceOptions(null);

    if (
      match.category &&
      movies[match.category] &&
      typeof movies[match.category] === "object" &&
      !Array.isArray(movies[match.category])
    ) {
      const groupForSeries = Object.entries(movies[match.category]).find(
        ([group, items]) =>
          Array.isArray(items) &&
          items.some((item) => item.title === match.series.title),
      );

      setOpenSubgroup(groupForSeries ? groupForSeries[0] : null);
    } else {
      setOpenSubgroup(null);
    }

    const targetTitle = match.part ? match.part.title : match.series.title;
    const elementToScroll = () => {
      if (typeof document === "undefined") return null;

      const escapedTitle = targetTitle.replace(/["'\\]/g, "\\$&");
      const selector = match.part
        ? `[data-part-title="${escapedTitle}"]`
        : `[data-series-title="${escapedTitle}"]`;

      return document.querySelector(selector) || null;
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const foundElement = elementToScroll();
        if (foundElement) {
          foundElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          return;
        }

        const fallback = match.part ? partRef.current : seriesRef.current;
        if (fallback) {
          scrollToSection(fallback);
        }
      });
    });
  };

  const resolveMovieSelectionTarget = () => {
    if (typeof window === "undefined") return;

    const target = sessionStorage.getItem("hobbies-related-target");
    if (!target) return;

    try {
      const parsed = JSON.parse(target);
      if (parsed.page !== "movies") return;

      const normalizedTitle = String(parsed.title || "").trim();
      if (!normalizedTitle) return;

      const matchedTargets = findMovieTargets(normalizedTitle).filter(Boolean);
      if (!matchedTargets.length) {
        setMovieChoiceOptions(null);
        return;
      }

      const uniqueTargets = [];
      const seenTargets = new Set();
      matchedTargets.forEach((target) => {
        const canonicalSeriesTitle = getMovieTitleKey(target.series.title);
        const canonicalPartTitle = target.part
          ? getMovieTitleKey(target.part.title)
          : "series";
        const targetKey = `${canonicalSeriesTitle}:${canonicalPartTitle}`;
        if (seenTargets.has(targetKey)) return;
        seenTargets.add(targetKey);
        uniqueTargets.push(target);
      });

      setMovieChoiceOptions({
        title: normalizedTitle,
        options: uniqueTargets,
      });
    } finally {
      sessionStorage.removeItem("hobbies-related-target");
    }
  };

  useEffect(() => {
    resolveMovieSelectionTarget();

    if (typeof window === "undefined") return;

    const onHashChange = () => resolveMovieSelectionTarget();
    window.addEventListener("hashchange", onHashChange);

    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const toggleSubgroup = (group) => {
    setOpenSubgroup(openSubgroup === group ? null : group);
  };

  const groupedMovieCategories = new Set([
    "Boska Komedia",
    "Maraton 1",
    "Maraton 2",
  ]);
  const isGroupedMovieCategory = groupedMovieCategories.has(selectedCategory);
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

  const scrollToRelatedMovie = (targetElement) => {
    if (typeof window === "undefined") return;

    setTimeout(() => {
      if (targetElement) {
        scrollToSection(targetElement);
      }
    }, 50);
  };

  const shouldShowMovieChoice =
    !!movieChoiceOptions &&
    Array.isArray(movieChoiceOptions.options) &&
    movieChoiceOptions.options.length > 0;

  return (
    <div className="movies-wrapper">
      <div className="movies-container">
        <h2 className="movies-title">Filmy</h2>

        {shouldShowMovieChoice && (
          <div
            className="movie-choice-overlay"
            onClick={() => setMovieChoiceOptions(null)}
          >
            <div
              className="movie-choice-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="movie-choice-header">
                <h3>Wybierz licencję dla: {movieChoiceOptions.title}</h3>
                <button
                  type="button"
                  className="movie-choice-close"
                  onClick={() => setMovieChoiceOptions(null)}
                  aria-label="Zamknij wybór licencji"
                >
                  ×
                </button>
              </div>

              <ul className="movie-choice-list">
                {movieChoiceOptions.options.map((option) => (
                  <li
                    key={`${option.category}-${option.series.title}`}
                    className="movie-choice-option"
                    onClick={() => chooseMovieLicense(option)}
                  >
                    {option.category}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

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
        {!isGroupedMovieCategory && selectedCategory && (
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

                      {(!series.parts || series.parts.length === 0) && (
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
                      )}
                    </div>
                  </li>
                );
              })}
          </ul>
        )}

        {isGroupedMovieCategory &&
          Object.keys(movies[selectedCategory] || {}).map((group) => (
            <div key={group} className="movies-group">
              <h3
                className="movies-group-title clickable"
                onClick={() => toggleSubgroup(group)}
              >
                {group}
              </h3>

              {openSubgroup === group && (
                <ul className="movies-list">
                  {movies[selectedCategory][group]
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

                            {(!series.parts || series.parts.length === 0) && (
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
                            )}
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
          <div
            className="series-details"
            ref={seriesRef}
            data-series-title={selectedSeries.title}
          >
            <h3>{selectedSeries.title}</h3>

            {(() => {
              const descriptionKey = resolveMovieDescriptionKey(
                selectedSeries.title,
              );
              const description = moviesDescriptions[descriptionKey];

              return description ? (
                <div className="series-description">
                  <p>
                    <strong>Licencja: </strong>
                    {description.licence}
                  </p>
                  <p>
                    <strong>Dlaczego tu jest: </strong>
                    {description.why}
                  </p>
                  <p>
                    <strong>Główni Protagoniści: </strong>
                    {description.protagonist}
                  </p>
                  <p>
                    <strong>Główni Antagoniści: </strong>
                    {description.antagonist}
                  </p>
                  <p>
                    <strong>Miejsce Akcji: </strong>
                    {description.location}
                  </p>
                  <p>
                    <strong>Opis: </strong>
                    {description.description}
                  </p>
                </div>
              ) : null;
            })()}

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
              <div
                className="part-details"
                ref={partRef}
                data-part-title={selectedPart.title}
              >
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
          <div
            className="part-details"
            ref={partRef}
            data-part-title={selectedPart.title}
          >
            <h4>{selectedPart.title}</h4>
            <p>{selectedPart.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Movies;
