import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Progress.css";
import gamesData from "../data/gamesData";
import seriesData from "../data/seriesData";
import moviesData from "../data/movies";
import booksData from "../data/books";
import {
  readGameStatuses,
  subscribeToGameStatuses,
  updateGameStatus,
} from "../data/gameStatuses";
import {
  readSeriesStatuses,
  subscribeToSeriesStatuses,
  updateSeriesStatus,
} from "../data/seriesStatuses";

const STORAGE_KEY = "myHobbiesProgressPlan";

const categoryOrder = [
  "Ogólne",
  "Gry",
  "Seriale",
  "Filmy",
  "Książki",
  "Chiny",
  "Filozofia",
  "Warhammer 40,000",
];

const statusOrder = [
  { key: "not-started", label: "Nie rozpoczęte" },
  { key: "in-progress", label: "W trakcie" },
  { key: "done", label: "Skończone" },
];

const statusLabels = Object.fromEntries(
  statusOrder.map(({ key, label }) => [key, label]),
);

const collectMovieTitles = (source) => {
  const titles = new Set();

  const walk = (value) => {
    if (!value) return;

    if (Array.isArray(value)) {
      value.forEach(walk);
      return;
    }

    if (typeof value === "object") {
      if (typeof value.title === "string") {
        titles.add(value.title);
      }

      Object.values(value).forEach(walk);
    }
  };

  walk(source);
  return [...titles];
};

const collectBookTitles = (source) => {
  const titles = new Set();

  Object.entries(source || {}).forEach(([, seriesBooks]) => {
    if (!Array.isArray(seriesBooks)) {
      return;
    }

    seriesBooks.forEach((book) => {
      const title = typeof book === "string" ? book : book?.title;
      if (title) {
        titles.add(title);
      }
    });
  });

  return [...titles];
};

const defaultPlan = {
  Gry: gamesData.map((game) => game.title),
  Seriale: seriesData.map((series) => series.title),
  Filmy: collectMovieTitles(moviesData),
  Książki: collectBookTitles(booksData),
  Chiny: ["Książki o Chinach", "Mitologia Nordycka", "Buddhizm i taoizm"],
  Filozofia: ["Obrona Sokratesa", "Arystoteles", "Kierkegaard", "Nihilizm"],
  "Warhammer 40,000": [
    "Warhammer 40,000: Dawn of War",
    "Warhammer 40,000: Space Marine",
    "Warhammer 40,000: Boltgun",
    "Warhammer 40,000: Rogue Trader",
  ],
};

const normalizeStatus = (entry) => {
  if (!entry || typeof entry !== "object") {
    return "not-started";
  }

  if (entry.status && statusLabels[entry.status]) {
    return entry.status;
  }

  if (typeof entry.done === "boolean") {
    return entry.done ? "done" : "not-started";
  }

  return "not-started";
};

const mapGameStatusToProgressStatus = (status) => {
  if (status === "progress") return "in-progress";
  if (status === "done") return "done";
  return "not-started";
};

const mapSeriesStatusToProgressStatus = (status) => {
  if (status === "progress") return "in-progress";
  if (status === "done") return "done";
  return "not-started";
};

const mapMovieStatusToProgressStatus = (status) => {
  if (status === "progress") return "in-progress";
  if (status === "done") return "done";
  return "not-started";
};

const mapProgressStatusToGameStatus = (status) => {
  if (status === "in-progress") return "progress";
  if (status === "done") return "done";
  return "seen";
};

const mapProgressStatusToSeriesStatus = (status) => {
  if (status === "in-progress") return "progress";
  if (status === "done") return "done";
  return "seen";
};

const mapProgressStatusToMovieStatus = (status) => {
  if (status === "in-progress") return "progress";
  if (status === "done") return "done";
  return "seen";
};

const readMovieStatuses = () => {
  if (typeof window === "undefined") {
    return {};
  }

  try {
    return JSON.parse(
      window.localStorage.getItem("hobbies-movie-statuses") || "{}",
    );
  } catch {
    return {};
  }
};

const createEmptyPlan = () =>
  Object.fromEntries(
    Object.entries(defaultPlan).map(([section, titles]) => [
      section,
      titles.map((title) => ({ title, status: "not-started" })),
    ]),
  );

const loadPlan = () => {
  if (typeof window === "undefined") {
    return createEmptyPlan();
  }

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) return createEmptyPlan();

    const parsed = JSON.parse(saved);

    return Object.fromEntries(
      Object.entries(defaultPlan).map(([section, titles]) => {
        const savedItems = Array.isArray(parsed[section])
          ? parsed[section]
          : [];

        const mergedItems = titles.map((title) => {
          const match = savedItems.find((item) => item.title === title);
          return {
            title,
            status: normalizeStatus(match ?? { title, status: "not-started" }),
          };
        });

        const customItems = savedItems
          .filter((item) => !titles.includes(item.title))
          .map((item) => ({
            title: item.title,
            status: normalizeStatus(item),
          }));

        return [section, [...mergedItems, ...customItems]];
      }),
    );
  } catch {
    return createEmptyPlan();
  }
};

const Progress = () => {
  const navigate = useNavigate();
  const [plan, setPlan] = useState(loadPlan);
  const [refreshKey, setRefreshKey] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Ogólne");
  const [gameStatuses, setGameStatuses] = useState(() => readGameStatuses());
  const [seriesStatuses, setSeriesStatuses] = useState(() =>
    readSeriesStatuses(),
  );
  const [movieStatuses, setMovieStatuses] = useState(() => readMovieStatuses());
  const [isRandomModalOpen, setIsRandomModalOpen] = useState(false);
  const [randomCategories, setRandomCategories] = useState({
    Gry: true,
    Seriale: true,
    Filmy: true,
    Książki: true,
  });
  const [randomStatuses, setRandomStatuses] = useState({
    "not-started": true,
    "in-progress": true,
    done: true,
  });
  const [randomResult, setRandomResult] = useState(null);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(plan));
  }, [plan]);

  useEffect(() => {
    const unsubscribe = subscribeToGameStatuses(setGameStatuses);
    return unsubscribe;
  }, []);

  useEffect(() => {
    const unsubscribe = subscribeToSeriesStatuses(setSeriesStatuses);
    return unsubscribe;
  }, []);

  const movieGroups = useMemo(() => {
    const groupMap = new Map();
    const flatMap = new Map();

    const registerFlatItem = (title, status, groupTitle) => {
      const key = groupTitle
        ? `group:${groupTitle}:${title}`
        : `standalone:${title}`;

      if (flatMap.has(key)) {
        return;
      }

      flatMap.set(key, { title, status, groupTitle });
    };

    const walk = (value) => {
      if (!value) return;

      if (Array.isArray(value)) {
        value.forEach(walk);
        return;
      }

      if (typeof value !== "object") {
        return;
      }

      if (value.title && Array.isArray(value.parts)) {
        const groupTitle = value.title;
        const existingGroup = groupMap.get(groupTitle) ?? {
          title: groupTitle,
          items: [],
        };

        const seenTitles = new Set(
          existingGroup.items.map((item) => item.title),
        );

        value.parts.forEach((part) => {
          if (!part || !part.title) {
            return;
          }

          if (seenTitles.has(part.title)) {
            return;
          }

          const status = mapMovieStatusToProgressStatus(
            movieStatuses[`movie-part:${groupTitle}:${part.title}`],
          );

          const item = { title: part.title, status, groupTitle };
          existingGroup.items.push(item);
          seenTitles.add(part.title);
          registerFlatItem(part.title, status, groupTitle);
        });

        groupMap.set(groupTitle, existingGroup);
        return;
      }

      if (value.title) {
        const title = value.title;
        const status = mapMovieStatusToProgressStatus(
          movieStatuses[`movie:${title}`],
        );

        if (!flatMap.has(`standalone:${title}`)) {
          flatMap.set(`standalone:${title}`, {
            title,
            status,
            groupTitle: null,
          });
        }
        return;
      }

      Object.values(value).forEach(walk);
    };

    walk(moviesData);

    return {
      groups: Array.from(groupMap.values()),
      flatItems: Array.from(flatMap.values()),
    };
  }, [movieStatuses]);

  const bookGroups = useMemo(() => {
    const groups = [];

    Object.entries(booksData).forEach(([seriesName, seriesBooks]) => {
      const items = [];

      (Array.isArray(seriesBooks) ? seriesBooks : []).forEach((book) => {
        const title = typeof book === "string" ? book : book?.title;
        if (!title) {
          return;
        }

        const entry = plan["Książki"]?.find((item) => item.title === title);
        items.push({
          title,
          status: entry?.status ?? "not-started",
          groupTitle: seriesName,
        });
      });

      if (items.length > 0) {
        groups.push({ title: seriesName, items });
      }
    });

    const crossoverTitles = [
      "Wiedźmin Ronin",
      "Sherlock Holmes and the Case of Death and Honey",
      "Sherlock Holmes and the Nine-Dragon Sigil",
    ];

    const crossoverItems = crossoverTitles.map((title) => {
      const entry = plan["Książki"]?.find((item) => item.title === title);
      return {
        title,
        status: entry?.status ?? "not-started",
        groupTitle: "Crossovery",
      };
    });

    return {
      groups: [...groups, { title: "Crossovery", items: crossoverItems }],
      flatItems: [...groups.flatMap((group) => group.items), ...crossoverItems],
    };
  }, [plan]);

  const generalItems = useMemo(() => {
    const items = [];
    const seen = new Set();

    const pushItems = (section, rawItems) => {
      (Array.isArray(rawItems) ? rawItems : []).forEach((item) => {
        const title = typeof item === "string" ? item : item?.title;
        if (!title) {
          return;
        }

        const key = `${section}:${title}`;
        if (seen.has(key)) {
          return;
        }

        seen.add(key);
        items.push({
          title,
          status:
            typeof item === "string"
              ? "not-started"
              : (item.status ?? "not-started"),
          section,
        });
      });
    };

    pushItems(
      "Gry",
      gamesData.map((game) => ({
        title: game.title,
        status: mapGameStatusToProgressStatus(
          gameStatuses[`game:${game.title}`],
        ),
      })),
    );

    pushItems(
      "Seriale",
      seriesData.map((series) => ({
        title: series.title,
        status: mapSeriesStatusToProgressStatus(
          seriesStatuses[`series:${series.title}`],
        ),
      })),
    );

    pushItems("Filmy", movieGroups.flatItems);
    pushItems("Książki", bookGroups.flatItems);

    return items;
  }, [bookGroups, gameStatuses, movieGroups, seriesStatuses]);

  const selectedItems = useMemo(() => {
    if (selectedCategory === "Ogólne") {
      return generalItems;
    }

    if (selectedCategory === "Gry") {
      return gamesData.map((game) => ({
        title: game.title,
        status: mapGameStatusToProgressStatus(
          gameStatuses[`game:${game.title}`],
        ),
      }));
    }

    if (selectedCategory === "Seriale") {
      return seriesData.map((series) => ({
        title: series.title,
        status: mapSeriesStatusToProgressStatus(
          seriesStatuses[`series:${series.title}`],
        ),
      }));
    }

    if (selectedCategory === "Filmy") {
      return movieGroups.flatItems;
    }

    if (selectedCategory === "Książki") {
      return bookGroups.flatItems;
    }

    return plan[selectedCategory] || [];
  }, [
    bookGroups,
    gameStatuses,
    generalItems,
    movieGroups,
    plan,
    selectedCategory,
    refreshKey,
    seriesStatuses,
  ]);

  const doneTasks = useMemo(
    () => selectedItems.filter((entry) => entry.status === "done").length,
    [selectedItems],
  );

  const inProgressTasks = useMemo(
    () =>
      selectedItems.filter((entry) => entry.status === "in-progress").length,
    [selectedItems],
  );

  const allTasks = selectedItems.length;

  const completion =
    allTasks === 0 ? 0 : Math.round((doneTasks / allTasks) * 100);

  const groupedItems = useMemo(
    () => ({
      "not-started": selectedItems.filter(
        (item) => item.status === "not-started",
      ),
      "in-progress": selectedItems.filter(
        (item) => item.status === "in-progress",
      ),
      done: selectedItems.filter((item) => item.status === "done"),
    }),
    [selectedItems],
  );

  const toggleRandomCategory = (category) => {
    setRandomCategories((current) => ({
      ...current,
      [category]: !current[category],
    }));
  };

  const toggleRandomStatus = (statusKey) => {
    setRandomStatuses((current) => ({
      ...current,
      [statusKey]: !current[statusKey],
    }));
  };

  const buildRandomCandidates = () => {
    const selectedCategories = Object.entries(randomCategories)
      .filter(([, isSelected]) => isSelected)
      .map(([category]) => category);

    const selectedStatusKeys = Object.entries(randomStatuses)
      .filter(([, isSelected]) => isSelected)
      .map(([statusKey]) => statusKey);

    if (selectedCategories.length === 0 || selectedStatusKeys.length === 0) {
      return [];
    }

    const candidates = [];

    if (selectedCategories.includes("Gry")) {
      gamesData.forEach((game) => {
        const status = mapGameStatusToProgressStatus(
          gameStatuses[`game:${game.title}`],
        );
        if (selectedStatusKeys.includes(status)) {
          candidates.push({ category: "Gry", title: game.title, status });
        }
      });
    }

    if (selectedCategories.includes("Seriale")) {
      seriesData.forEach((series) => {
        const status = mapSeriesStatusToProgressStatus(
          seriesStatuses[`series:${series.title}`],
        );
        if (selectedStatusKeys.includes(status)) {
          candidates.push({
            category: "Seriale",
            title: series.title,
            status,
          });
        }
      });
    }

    if (selectedCategories.includes("Filmy")) {
      movieGroups.flatItems.forEach((item) => {
        if (selectedStatusKeys.includes(item.status)) {
          candidates.push({
            category: "Filmy",
            title: item.title,
            status: item.status,
          });
        }
      });
    }

    if (selectedCategories.includes("Książki")) {
      bookGroups.flatItems.forEach((item) => {
        if (selectedStatusKeys.includes(item.status)) {
          candidates.push({
            category: "Książki",
            title: item.title,
            status: item.status,
          });
        }
      });
    }

    return candidates;
  };

  const categoryRoutes = {
    Gry: "/games",
    Seriale: "/series",
    Filmy: "/movies",
    Książki: "/books",
  };

  const handleRandomDraw = () => {
    const candidates = buildRandomCandidates();

    if (!candidates.length) {
      setRandomResult({ empty: true });
      return;
    }

    const randomItem =
      candidates[Math.floor(Math.random() * candidates.length)];
    setRandomResult(randomItem);
  };

  const handleRandomResultClick = () => {
    if (!randomResult || randomResult.empty) {
      return;
    }

    const targetPath = categoryRoutes[randomResult.category];
    if (!targetPath) {
      return;
    }

    if (typeof window !== "undefined") {
      sessionStorage.setItem(
        "hobbies-related-target",
        JSON.stringify({
          page: {
            Gry: "games",
            Seriale: "series",
            Filmy: "movies",
            Książki: "books",
          }[randomResult.category],
          title: randomResult.title,
        }),
      );
    }

    setIsRandomModalOpen(false);
    navigate(targetPath);
  };

  const updateStatus = (section, title, status, mode = "single") => {
    if (section === "Ogólne") {
      const targetSection = ["Gry", "Seriale", "Filmy", "Książki"].find(
        (candidate) => {
          if (candidate === "Gry") {
            return gamesData.some((game) => game.title === title);
          }

          if (candidate === "Seriale") {
            return seriesData.some((series) => series.title === title);
          }

          if (candidate === "Filmy") {
            return movieGroups.flatItems.some((item) => item.title === title);
          }

          if (candidate === "Książki") {
            return bookGroups.flatItems.some((item) => item.title === title);
          }

          return false;
        },
      );

      if (targetSection) {
        updateStatus(targetSection, title, status, mode);
      }
      return;
    }

    if (section === "Gry") {
      const mappedStatus = mapProgressStatusToGameStatus(status);
      const nextStatuses = {
        ...readGameStatuses(),
        [`game:${title}`]: mappedStatus,
      };

      if (typeof window !== "undefined") {
        window.localStorage.setItem(
          "hobbies-game-statuses",
          JSON.stringify(nextStatuses),
        );
      }

      setGameStatuses(nextStatuses);
      setRefreshKey((current) => current + 1);
      return;
    }

    if (section === "Seriale") {
      const mappedStatus = mapProgressStatusToSeriesStatus(status);
      const nextStatuses = {
        ...readSeriesStatuses(),
        [`series:${title}`]: mappedStatus,
      };

      if (typeof window !== "undefined") {
        window.localStorage.setItem(
          "hobbies-series-statuses",
          JSON.stringify(nextStatuses),
        );
      }

      setSeriesStatuses(nextStatuses);
      setRefreshKey((current) => current + 1);
      return;
    }

    if (section === "Filmy") {
      const nextStatuses = {
        ...readMovieStatuses(),
      };

      if (mode === "series") {
        const groupMatch = movieGroups.groups.find(
          (group) => group.title === title,
        );

        if (!groupMatch) {
          return;
        }

        const mappedStatus = mapProgressStatusToMovieStatus(status);
        groupMatch.items.forEach((item) => {
          nextStatuses[`movie-part:${groupMatch.title}:${item.title}`] =
            mappedStatus;
        });
      } else {
        const groupMatch = movieGroups.groups.find((group) =>
          group.items.some((item) => item.title === title),
        );

        if (groupMatch) {
          nextStatuses[`movie-part:${groupMatch.title}:${title}`] =
            mapProgressStatusToMovieStatus(status);
        } else {
          nextStatuses[`movie:${title}`] =
            mapProgressStatusToMovieStatus(status);
        }
      }

      if (typeof window !== "undefined") {
        window.localStorage.setItem(
          "hobbies-movie-statuses",
          JSON.stringify(nextStatuses),
        );
      }

      setMovieStatuses(nextStatuses);
      setRefreshKey((current) => current + 1);
      return;
    }

    if (section === "Książki") {
      setPlan((previous) => {
        const existingItems = Array.isArray(previous[section])
          ? previous[section]
          : [];

        const targetTitles =
          mode === "series"
            ? (
                bookGroups.groups.find((group) => group.title === title)
                  ?.items ?? []
              ).map((item) => item.title)
            : [title];

        const updatedItems = existingItems.map((item) =>
          targetTitles.includes(item.title) ? { ...item, status } : item,
        );

        const missingItems = targetTitles.filter(
          (targetTitle) =>
            !updatedItems.some((item) => item.title === targetTitle),
        );

        return {
          ...previous,
          [section]: [
            ...updatedItems,
            ...missingItems.map((targetTitle) => ({
              title: targetTitle,
              status,
            })),
          ],
        };
      });
      return;
    }

    setPlan((previous) => ({
      ...previous,
      [section]: previous[section].map((item) =>
        item.title === title ? { ...item, status } : item,
      ),
    }));
  };

  const handleDrop = (statusKey, event) => {
    event.preventDefault();
    const rawTitle = event.dataTransfer.getData("text/plain");

    if (!rawTitle) {
      return;
    }

    try {
      const payload = JSON.parse(rawTitle);
      if (payload && payload.type === "series") {
        updateStatus(
          selectedCategory,
          payload.seriesTitle,
          statusKey,
          "series",
        );
        return;
      }

      if (payload && payload.type === "movie") {
        updateStatus(selectedCategory, payload.title, statusKey, "single");
        return;
      }

      if (payload && payload.type === "bookSeries") {
        updateStatus(
          selectedCategory,
          payload.seriesTitle,
          statusKey,
          "series",
        );
        return;
      }

      if (payload && payload.type === "book") {
        updateStatus(selectedCategory, payload.title, statusKey, "single");
        return;
      }
    } catch {
      updateStatus(selectedCategory, rawTitle, statusKey, "single");
    }

    updateStatus(selectedCategory, rawTitle, statusKey, "single");
  };

  const renderMovieColumnItems = (statusKey) => {
    if (selectedCategory === "Książki") {
      const groupedBookItems = bookGroups.groups
        .filter((group) =>
          group.items.some((item) => item.status === statusKey),
        )
        .map((group) => ({
          title: group.title,
          items: group.items.filter((item) => item.status === statusKey),
        }));

      return (
        <>
          {groupedBookItems.map((group) => (
            <div
              key={group.title}
              className="progressMovieGroup"
              draggable
              onDragStart={(event) => {
                event.stopPropagation();
                event.dataTransfer.setData(
                  "text/plain",
                  JSON.stringify({
                    type: "bookSeries",
                    seriesTitle: group.title,
                  }),
                );
                event.dataTransfer.effectAllowed = "move";
              }}
              onClick={() =>
                updateStatus(selectedCategory, group.title, statusKey, "series")
              }
            >
              <div className="progressMovieGroupHeader">{group.title}</div>
              <div className="progressMovieGroupList">
                {group.items.map((item) => (
                  <div
                    key={item.title}
                    className="progressTaskCard"
                    draggable
                    onDragStart={(event) => {
                      event.stopPropagation();
                      event.dataTransfer.setData(
                        "text/plain",
                        JSON.stringify({ type: "book", title: item.title }),
                      );
                      event.dataTransfer.effectAllowed = "move";
                    }}
                    onClick={() =>
                      updateStatus(selectedCategory, item.title, statusKey)
                    }
                  >
                    <span className="progressTaskTitle">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </>
      );
    }

    if (selectedCategory !== "Filmy") {
      return (groupedItems[statusKey] || []).map((item) => (
        <div
          key={item.title}
          className="progressTaskCard"
          draggable
          onDragStart={(event) => {
            event.dataTransfer.setData("text/plain", item.title);
            event.dataTransfer.effectAllowed = "move";
          }}
          onClick={() => updateStatus(selectedCategory, item.title, statusKey)}
        >
          <span className="progressTaskTitle">{item.title}</span>
        </div>
      ));
    }

    const groupedMovieItems = movieGroups.groups
      .filter((group) => group.items.some((item) => item.status === statusKey))
      .map((group) => ({
        title: group.title,
        items: group.items.filter((item) => item.status === statusKey),
      }));

    const standaloneMovieItems = movieGroups.flatItems.filter(
      (item) => item.groupTitle === null && item.status === statusKey,
    );

    return (
      <>
        {groupedMovieItems.map((group) => (
          <div
            key={group.title}
            className="progressMovieGroup"
            draggable
            onDragStart={(event) => {
              event.stopPropagation();
              event.dataTransfer.setData(
                "text/plain",
                JSON.stringify({ type: "series", seriesTitle: group.title }),
              );
              event.dataTransfer.effectAllowed = "move";
            }}
            onClick={() =>
              updateStatus(selectedCategory, group.title, statusKey, "series")
            }
          >
            <div className="progressMovieGroupHeader">{group.title}</div>
            <div className="progressMovieGroupList">
              {group.items.map((item) => (
                <div
                  key={item.title}
                  className="progressTaskCard"
                  draggable
                  onDragStart={(event) => {
                    event.stopPropagation();
                    event.dataTransfer.setData(
                      "text/plain",
                      JSON.stringify({ type: "movie", title: item.title }),
                    );
                    event.dataTransfer.effectAllowed = "move";
                  }}
                  onClick={() =>
                    updateStatus(selectedCategory, item.title, statusKey)
                  }
                >
                  <span className="progressTaskTitle">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {standaloneMovieItems.map((item) => (
          <div
            key={item.title}
            className="progressTaskCard"
            draggable
            onDragStart={(event) => {
              event.stopPropagation();
              event.dataTransfer.setData(
                "text/plain",
                JSON.stringify({ type: "movie", title: item.title }),
              );
              event.dataTransfer.effectAllowed = "move";
            }}
            onClick={() =>
              updateStatus(selectedCategory, item.title, statusKey)
            }
          >
            <span className="progressTaskTitle">{item.title}</span>
          </div>
        ))}
      </>
    );
  };

  return (
    <div className="progressPage">
      <div className="progressHeader">
        <div>
          <p className="eyebrow">Plan</p>
          <h1>Postępy w zapoznawaniu się z dziełami</h1>
        </div>
      </div>

      <div className="progressCategories" aria-label="Kategorie planu">
        {categoryOrder.map((category) => (
          <button
            key={category}
            type="button"
            className={
              category === selectedCategory
                ? "progressCategoryItem active"
                : "progressCategoryItem"
            }
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="progressSummary">
        <div>
          <span>Skończone</span>
          <strong>
            {doneTasks}/{allTasks}
          </strong>
        </div>
        <div>
          <span>Postęp</span>
          <strong>{completion}%</strong>
        </div>
        <Link to="/plan" className="progressPlanButton">
          PLAN
        </Link>
        <button
          type="button"
          className="progressRandomButton"
          onClick={() => {
            setRandomResult(null);
            setIsRandomModalOpen(true);
          }}
        >
          LOSUJ
        </button>
      </div>

      {isRandomModalOpen && (
        <div
          className="progressRandomModalOverlay"
          onClick={() => setIsRandomModalOpen(false)}
        >
          <div
            className="progressRandomModal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="progressRandomCloseButton"
              onClick={() => setIsRandomModalOpen(false)}
              aria-label="Zamknij losowanie"
            >
              ×
            </button>

            <p className="progressRandomEyebrow">Nudzi ci się co?</p>
            <h2>Co chcesz wylosować?</h2>

            <div className="progressRandomFieldset">
              <span className="progressRandomLegend">Kategoria</span>
              <div className="progressRandomOptions">
                {["Gry", "Seriale", "Filmy", "Książki"].map((category) => (
                  <label key={category} className="progressRandomOption">
                    <input
                      type="checkbox"
                      checked={Boolean(randomCategories[category])}
                      onChange={() => toggleRandomCategory(category)}
                    />
                    <span>{category}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="progressRandomFieldset">
              <span className="progressRandomLegend">Status</span>
              <div className="progressRandomOptions">
                {statusOrder.map(({ key, label }) => (
                  <label key={key} className="progressRandomOption">
                    <input
                      type="checkbox"
                      checked={Boolean(randomStatuses[key])}
                      onChange={() => toggleRandomStatus(key)}
                    />
                    <span>{label}</span>
                  </label>
                ))}
              </div>
            </div>

            {randomResult && (
              <div
                className={
                  randomResult.empty
                    ? "progressRandomResultBox progressRandomResultBoxEmpty"
                    : "progressRandomResultBox"
                }
                onClick={randomResult.empty ? undefined : handleRandomResultClick}
                role={randomResult.empty ? undefined : "button"}
                tabIndex={randomResult.empty ? undefined : 0}
                onKeyDown={(event) => {
                  if (!randomResult.empty && (event.key === "Enter" || event.key === " ")) {
                    event.preventDefault();
                    handleRandomResultClick();
                  }
                }}
              >
                {randomResult.empty ? (
                  <>
                    <strong>Brak wyników</strong>
                    <span>Wybierz inne kryteria, żeby coś się wylosowało.</span>
                  </>
                ) : (
                  <>
                    <strong>Wylosowano</strong>
                    <span>
                      {randomResult.title} · {randomResult.category}
                    </span>
                  </>
                )}
              </div>
            )}

            <div className="progressRandomActions">
              <button
                type="button"
                className="progressRandomDrawButton"
                onClick={handleRandomDraw}
              >
                Losuj
              </button>
              <button
                type="button"
                className="progressRandomCloseSecondary"
                onClick={() => setIsRandomModalOpen(false)}
              >
                Zamknij
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="progressBarTrack" aria-label="Postęp planu">
        <div className="progressBarFill" style={{ width: `${completion}%` }} />
      </div>

      <div className="progressColumns">
        {statusOrder.map(({ key, label }) => (
          <div
            key={key}
            className="progressColumn"
            onDragOver={(event) => event.preventDefault()}
            onDrop={(event) => handleDrop(key, event)}
          >
            <h2>{label}</h2>

            <div className="progressColumnList">
              {renderMovieColumnItems(key)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Progress;
