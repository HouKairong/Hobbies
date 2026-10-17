import "./Books.css";
import { useState, useRef, useEffect } from "react";
import komedia from "../../public/images/komedia.jpg";
import books from "../data/books";
import booksDescriptions from "../data/booksDescriptions";
import GalleryModal from "../elements/GalleryModal";

const Books = () => {
  const [selectedSeries, setSelectedSeries] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedStory, setSelectedStory] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("Wszystkie");
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [itemStatuses, setItemStatuses] = useState(() => {
    if (typeof window === "undefined") return {};

    try {
      return JSON.parse(localStorage.getItem("hobbies-book-statuses") || "{}");
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

  const seriesRefs = useRef({});
  const bookRefs = useRef({});
  const storyRefs = useRef({});
  const bookDescriptionRefs = useRef({});
  const storyDescriptionRefs = useRef({});

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(
        "hobbies-book-statuses",
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

  const seriesWorlds = {
    Wiedźmin: "Wizard City, Grizzleheim, Krokotopia, Mooshu",
    "Pieśń Lodu i Ognia": "Krokotopia, Grizzleheim",
    "Sherlock Holmes": "Marleybone, Krokotopia, Mooshu, Dragonspyre",
    "Książki o Chinach": "Mooshu",
    "Boska Komedia": "Dragonspyre, Wizard City",
    "Mitologia Nordycka": "Grizzleheim",
    "Jak Wytresować Smoka": "Grizzleheim, Aquila",
    "Obrona Sokratesa": "Aquila",
    "Death Note": "Wysteria, Dragonspyre",
    "Królestwo Kwarcu": "Wizard City, Dragonspyre",
  };

  const currentBooks = books;
  const allBooksByTitle = Object.values(currentBooks).reduce(
    (map, seriesBooks) => {
      (seriesBooks ?? []).forEach((book) => {
        if (book?.title) {
          map.set(book.title, book);
        }
      });
      return map;
    },
    new Map(),
  );

  const seriesGroupMap = {
    Wiedźmin: [
      {
        title: "Książki Andrzeja Sapkowskiego",
        books: [
          "Ostatnie życzenie",
          "Miecz przeznaczenia",
          "Krew elfów",
          "Czas pogardy",
          "Chrzest ognia",
          "Wieża Jaskółki",
          "Pani Jeziora",
          "Sezon Burz",
          "Rozdroże Kruków",
          "Droga z której się nie wraca",
          "Coś się kończy, coś się zaczyna",
        ],
      },
      {
        title: "Fanowskie opowiadania",
        books: ["Opowieści ze świata Wiedźmina", "Szpony i Kły"],
      },
      {
        title: "Komiksy Bogusława Polcha",
        books: ["Komiksy Macieja Parowskiego i Bogusława Polcha"],
      },
      {
        title: "Komiksy CD Projekt RED",
        books: [
          "Oryginalne komiksy CD Projekt RED",
          "Komiksowe adaptacje opowiadań CD Projekt RED",
          "Wiedźmin Ronin",
          "Wiedźmineczka",
        ],
      },
    ],
    "Pieśń Lodu i Ognia": [
      {
        title: "Główna saga",
        books: [
          "Gra o Tron",
          "Starcie Królów",
          "Nawałnica Mieczy",
          "Uczta dla Wron",
          "Taniec ze Smokami",
        ],
      },
      {
        title: "Powieści dodatkowe",
        books: ["Ogień i Krew", "Rycerz Siedmiu Królestw"],
      },
      {
        title: "Historia świata",
        books: ["Świat Lodu i Ognia", "Panowanie Smoka"],
      },
      {
        title: "Pojedyncze opowiadania",
        books: ["Księżniczka i Królowa", "Książę Łotrzyk", "Synowie Smoka"],
      },
    ],
    "Jak Wytresować Smoka": [
      {
        title: "Główna seria książek Cressidy Cowell",
        books: [
          "Jak wytresować smoka",
          "Jak zostać piratem",
          "Jak mówić po smoczemu",
          "Jak złamać smoczą klątwę",
          "Jak odwrócić smoka ogonem",
          "Drapieżne smoki dla początkujących",
          "How to Ride a Dragon's Storm",
          "How to Break a Dragon's Heart",
          "How to Steal a Dragon's Sword",
          "How to Seize a Dragon's Jewel",
          "How to Betray a Dragon's Hero",
          "How to Fight a Dragon's Fury",
        ],
      },
      {
        title: "Komiksy Dark Horse",
        books: ["The Serpent's Heir", "Dragonvine"],
      },
    ],
    "Sherlock Holmes": [
      {
        title: "Oryginalne książki Arthura Conana Doyle’a",
        books: [
          "Studium w szkarłacie",
          "Znak czterech",
          "Przygody Sherlocka Holmesa",
          "Wspomnienia Sherlocka Holmesa",
          "Pies Baskerville’ów",
          "Powrót Sherlocka Holmesa",
          "Dolina trwogi",
          "Pożegnalny ukłon",
          "Sprawy Sherlocka Holmesa",
        ],
      },
      {
        title: "Książki Neila Gaimana",
        books: ["Studium w Szmaragdzie", "A Case of Death and Honey"],
      },
      {
        title: "Książki Nicholasa Meyera",
        books: ["The Seven-Per-Cent Solution", "The Return of the Pharaoh"],
      },
      {
        title: "Książki Tima Symondsa",
        books: ["Sherlock Holmes and The Nine-Dragon Sigil"],
      },
      {
        title: "Książki Paula Kane'a",
        books: ["Sherlock Holmes and The Servants of Hell"],
      },
      {
        title: "Manga",
        books: ["Moriarty the Patriot"],
      },
    ],
    "Książki o Chinach": [
      {
        title: "Historia i polityka",
        books: [
          "Chiny bez makijażu",
          "Czerwony cesarz: Xi Jinping i jego Nowe Chiny",
          "Tajwan: Herbatka na beczce prochu",
          "Japonia, Chiny i Korea: O ludziach skłóconych na śmierć i życie",
          "Cesarzowa wdowa Cixi: Konkubina która stworzyła współczesne Chiny",
          "Historia Kościoła w Chinach",
          "Ocalała z chińskiego gułagu",
        ],
      },
      {
        title: "Filozofia i duchowość",
        books: ["Taoizm: Wprowadzenie", "Daodejing"],
      },
      {
        title: "Kultura i mitologia",
        books: [
          "Baśnie chińskie",
          "Bestiariusz chiński",
          "Chiny: Przewodnik po herosach, smokach i świętych rzekach",
          "Chiny: Portret cywilizacji i narodu",
        ],
      },
      {
        title: "Literatura klasyczna",
        books: ["Journey to the West in Simple Chinese"],
      },
      {
        title: "Manga i komiksy",
        books: [
          "吃透中国史：三国",
          "Assassin's Creed Miecz Shao Jun",
          "Assassin's Creed: Dynasty",
          "Wiedźmin Ronin",
        ],
      },
      {
        title: "Crossovery",
        books: [
          "Wiedźmin Ronin",
          "A Case of Death and Honey",
          "Sherlock Holmes and The Nine-Dragon Sigil",
        ],
      },
    ],
  };

  const getSeriesEntries = (series) => {
    const groups = seriesGroupMap[series];
    if (!groups) return currentBooks[series] ?? [];

    const byTitle = new Map(
      (currentBooks[series] ?? []).map((book) => [book.title, book]),
    );

    return groups.map((group) => ({
      ...group,
      items: group.books
        .map((title) => {
          return (
            byTitle.get(title) ??
            allBooksByTitle.get(title) ?? { title, description: "" }
          );
        })
        .filter(Boolean),
    }));
  };

  const getBookStatus = (series, book) => {
    if (!book.stories || book.stories.length === 0) {
      return itemStatuses[`book:${series}:${book.title}`] ?? "seen";
    }

    const storyStatuses = book.stories.map((story) => {
      const storyKey = `story:${series}:${book.title}:${story.title}`;
      return itemStatuses[storyKey] ?? "seen";
    });

    if (storyStatuses.length === 0) return "seen";

    const allDone = storyStatuses.every((status) => status === "done");
    if (allDone) return "done";

    const hasProgressOrDone = storyStatuses.some(
      (status) => status === "progress" || status === "done",
    );
    if (hasProgressOrDone) return "progress";

    return "seen";
  };

  const getSeriesStatus = (series) => {
    const seriesItems = [];

    const flatSeriesItems = getSeriesEntries(series).flatMap(
      (entry) => entry.items ?? [entry],
    );

    flatSeriesItems.forEach((book) => {
      const bookKey = `book:${series}:${book.title}`;
      seriesItems.push(itemStatuses[bookKey] ?? "seen");

      book.stories?.forEach((story) => {
        const storyKey = `story:${series}:${book.title}:${story.title}`;
        seriesItems.push(itemStatuses[storyKey] ?? "seen");
      });
    });

    if (seriesItems.length === 0) return "seen";

    const allDone = seriesItems.every((status) => status === "done");
    if (allDone) return "done";

    const hasProgressOrDone = seriesItems.some(
      (status) => status === "progress" || status === "done",
    );
    if (hasProgressOrDone) return "progress";

    return "seen";
  };

  const filteredSeries = Object.keys(currentBooks).filter((series) => {
    if (selectedStatus === "Wszystkie") return true;

    return (
      getSeriesStatus(series) ===
      statusOptions.find((option) => option.label === selectedStatus)?.value
    );
  });

  const scrollToTarget = (element) => {
    if (!element || typeof window === "undefined") return;
    requestAnimationFrame(() => {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  const toggleSeries = (series, e) => {
    const nextValue = selectedSeries === series ? null : series;
    setSelectedSeries(nextValue);
    setSelectedBook(null);
    setSelectedStory(null);

    if (nextValue) {
      requestAnimationFrame(() => {
        const target = seriesRefs.current[series];
        const heading = target?.querySelector(".books-series-title");
        scrollToTarget(heading || target || e.currentTarget);
      });
    }
  };

  const toggleBook = (book, e) => {
    e.stopPropagation();

    const nextValue = selectedBook?.title === book.title ? null : book;
    setSelectedBook(nextValue);
    setSelectedStory(null);

    if (nextValue) {
      requestAnimationFrame(() => {
        const target = bookDescriptionRefs.current[nextValue.title];
        scrollToTarget(target || e.currentTarget.closest(".books-series"));
      });
    }
  };

  const toggleStory = (story, e) => {
    e.stopPropagation();

    const nextValue = selectedStory?.title === story.title ? null : story;
    setSelectedStory(nextValue);

    if (nextValue) {
      requestAnimationFrame(() => {
        const key = `${selectedSeries}:${selectedBook?.title}:${nextValue.title}`;
        const target = storyDescriptionRefs.current[key];
        scrollToTarget(
          target || e.currentTarget.closest(".books-book-description"),
        );
      });
    }
  };

  return (
    <div className="books-wrapper">
      <div className="books-container">
        <h2 className="books-title">Książki</h2>
        <div className="books-controls">
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="books-filter"
          >
            {statusFilterOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        {/* <h3 className="books-canon-title">Główny kanon</h3> */}
        {/* LISTA SERII */}
        <ul className="books-list">
          {filteredSeries.map((series) => {
            const itemStatus = getSeriesStatus(series);

            return (
              <li
                key={series}
                className={`books-series-item item-status-${itemStatus}`}
                onClick={(e) => toggleSeries(series, e)}
              >
                {series}
                <span className="books-world">({seriesWorlds[series]})</span>
              </li>
            );
          })}
        </ul>
        {/* SERIE */}
        {Object.keys(currentBooks).map((series) => (
          <div
            key={series}
            ref={(el) => (seriesRefs.current[series] = el)}
            className="books-series"
          >
            {selectedSeries === series &&
              (series === "Boska Komedia" ? (
                <div className="books-series-boska-komedia">
                  <h3 className="books-series-title">{series}</h3>

                  {booksDescriptions[series] && (
                    <div className="books-description">
                      <p>
                        <strong>Do jakiego świata nawiązuje: </strong>
                        {booksDescriptions[series].world}
                      </p>
                      <p>
                        <strong>Dlaczego jest wyjątkowa: </strong>
                        {booksDescriptions[series].specialReason}
                      </p>
                      <p>
                        <strong>Dlaczego tu jest: </strong>
                        {booksDescriptions[series].why}
                      </p>
                      <p>
                        <strong>Główni Protagoniści: </strong>
                        {booksDescriptions[series].protagonist}
                      </p>
                      <p>
                        <strong>Główni Antagoniści: </strong>
                        {booksDescriptions[series].antagonist}
                      </p>
                      <p>
                        <strong>Miejsce Akcji: </strong>
                        {booksDescriptions[series].location}
                      </p>
                      <p>
                        <strong>Opis: </strong>
                        {booksDescriptions[series].description}
                      </p>
                    </div>
                  )}

                  <ul className="books-item-list">
                    {currentBooks[series]?.map((book) => {
                      const itemKey = `book:${series}:${book.title}`;
                      const currentStatus = getBookStatus(series, book);
                      const hasStories = Boolean(book.stories?.length);

                      return (
                        <li
                          key={book.title}
                          className={`books-item ${currentStatus ? `item-status-${currentStatus}` : ""}`}
                          ref={(el) => (bookRefs.current[book.title] = el)}
                          onClick={(e) => toggleBook(book, e)}
                        >
                          <div className="books-item-content">
                            <span className="books-title-item">
                              {book.title}
                            </span>

                            {!hasStories && (
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

                  {selectedBook && selectedSeries === series && (
                    <div
                      className="books-book-description"
                      ref={(el) => {
                        if (el)
                          bookDescriptionRefs.current[selectedBook.title] = el;
                      }}
                    >
                      <h4>{selectedBook.title}</h4>
                      <p>{selectedBook.description}</p>

                      {selectedBook.stories && (
                        <ul className="books-story-list">
                          {selectedBook.stories.map((story) => {
                            const itemKey = `story:${series}:${selectedBook.title}:${story.title}`;
                            const currentStatus =
                              itemStatuses[itemKey] ?? "seen";

                            return (
                              <li
                                key={story.title}
                                className={`books-story-item ${currentStatus ? `item-status-${currentStatus}` : ""}`}
                                ref={(el) =>
                                  (storyRefs.current[story.title] = el)
                                }
                                onClick={(e) => toggleStory(story, e)}
                              >
                                <div className="books-story-item-content">
                                  <span>{story.title}</span>

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
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      )}

                      {selectedStory && selectedStory.title && (
                        <div
                          className="books-story-description"
                          ref={(el) => {
                            const key = `${selectedSeries}:${selectedBook?.title}:${selectedStory.title}`;
                            if (el) storyDescriptionRefs.current[key] = el;
                          }}
                        >
                          <h5>{selectedStory.title}</h5>
                          <p>{selectedStory.description}</p>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="books-image-wrapper">
                    <img
                      src={komedia}
                      alt="Boska Komedia"
                      className="image-of-media"
                    />
                  </div>
                </div>
              ) : (
                <div className="books-series-standard">
                  <h3 className="books-series-title">{series}</h3>

                  {booksDescriptions[series] && (
                    <div className="books-description">
                      <p>
                        <strong>Do jakiego świata nawiązuje: </strong>
                        {booksDescriptions[series].world}
                      </p>
                      <p>
                        <strong>Dlaczego tu jest: </strong>
                        {booksDescriptions[series].why}
                      </p>
                      <p>
                        <strong>Główni Protagoniści: </strong>
                        {booksDescriptions[series].protagonist}
                      </p>
                      <p>
                        <strong>Główni Antagoniści: </strong>
                        {booksDescriptions[series].antagonist}
                      </p>
                      <p>
                        <strong>Miejsce Akcji: </strong>
                        {booksDescriptions[series].location}
                      </p>
                      <p>
                        <strong>Opis: </strong>
                        {booksDescriptions[series].description}
                      </p>
                    </div>
                  )}

                  {getSeriesEntries(series).map((entry) => {
                    const items = entry.items ?? [entry];

                    return (
                      <div key={entry.title} className="books-group-block">
                        {entry.items && (
                          <h4 className="books-group-title">{entry.title}</h4>
                        )}

                        <ul className="books-item-list">
                          {items.map((book) => {
                            const itemKey = `book:${series}:${book.title}`;
                            const currentStatus = getBookStatus(series, book);
                            const hasStories = Boolean(book.stories?.length);

                            return (
                              <li
                                key={book.title}
                                className={`books-item ${currentStatus ? `item-status-${currentStatus}` : ""}`}
                                ref={(el) =>
                                  (bookRefs.current[book.title] = el)
                                }
                                onClick={(e) => toggleBook(book, e)}
                              >
                                <div className="books-item-content">
                                  <span className="books-title-item">
                                    {book.title}
                                  </span>

                                  {!hasStories && (
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
                      </div>
                    );
                  })}

                  {selectedBook && selectedSeries === series && (
                    <div
                      className="books-book-description"
                      ref={(el) => {
                        if (el)
                          bookDescriptionRefs.current[selectedBook.title] = el;
                      }}
                    >
                      <h4>{selectedBook.title}</h4>
                      <p>{selectedBook.description}</p>

                      {selectedBook.stories && (
                        <ul className="books-story-list">
                          {selectedBook.stories.map((story) => {
                            const itemKey = `story:${series}:${selectedBook.title}:${story.title}`;
                            const currentStatus =
                              itemStatuses[itemKey] ?? "seen";

                            return (
                              <li
                                key={story.title}
                                className={`books-story-item ${currentStatus ? `item-status-${currentStatus}` : ""}`}
                                ref={(el) =>
                                  (storyRefs.current[story.title] = el)
                                }
                                onClick={(e) => toggleStory(story, e)}
                              >
                                <div className="books-story-item-content">
                                  <span>{story.title}</span>

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
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      )}

                      {selectedStory && selectedStory.title && (
                        <div
                          className="books-story-description"
                          ref={(el) => {
                            const key = `${selectedSeries}:${selectedBook?.title}:${selectedStory.title}`;
                            if (el) storyDescriptionRefs.current[key] = el;
                          }}
                        >
                          <h5>{selectedStory.title}</h5>
                          <p>{selectedStory.description}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
          </div>
        ))}{" "}
        <div className="dogs-purpose-section">
          <button
            className="dogs-purpose-button"
            onClick={() => setIsGalleryOpen(true)}
          >
            A Dog's Purpose
          </button>
        </div>
        {isGalleryOpen && (
          <GalleryModal
            galleryType="books"
            onClose={() => setIsGalleryOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Books;
