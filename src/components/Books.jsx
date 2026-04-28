import "./Books.css";
import { useState, useRef } from "react";
import komedia from "../../public/images/komedia.jpg";
import books from "../data/books";
import booksDescriptions from "../data/booksDescriptions";

const Books = () => {
  const [selectedSeries, setSelectedSeries] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedStory, setSelectedStory] = useState(null);
  const seriesRefs = useRef({});
  const bookRefs = useRef({});
  const storyRefs = useRef({});

  const seriesWorlds = {
    Wiedźmin: "Wizard City , Grizzleheim",
    "Pieśń Lodu i Ognia": "Krokotopia, Grizzleheim",
    "Sherlock Holmes": "Marleybone, Dragonspyre",
    "Książki o Chinach": "Mooshu",
    "Boska Komedia": "Dragonspyre",
    "Mitologia Nordycka": "Grizzleheim",
    "Jak Wytresować Smoka": "Grizzleheim, Aquila",
    "Obrona Sokratesa": "Aquila",
    "Death Note": "Wysteria, Dragonspyre",
  };

  const toggleSeries = (series) => {
    setSelectedSeries(selectedSeries === series ? null : series);
    setSelectedBook(null);
    setSelectedStory(null);

    setTimeout(() => {
      seriesRefs.current[series]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  const toggleBook = (book, e) => {
    e.stopPropagation();

    const isSameBook = selectedBook?.title === book.title;
    setSelectedBook(isSameBook ? null : book);
    setSelectedStory(null);

    if (!isSameBook) {
      setTimeout(() => {
        bookRefs.current[book.title]?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 50);
    }
  };

  const toggleStory = (story, e) => {
    e.stopPropagation();

    const isSameStory = selectedStory?.title === story.title;
    setSelectedStory(isSameStory ? null : story);

    if (!isSameStory) {
      setTimeout(() => {
        storyRefs.current[story.title]?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 50);
    }
  };

  return (
    <div className="books-wrapper">
      <div className="books-container">
        <h2 className="books-title">Książki</h2>

        <ul className="books-list">
          {Object.keys(books).map((series) => (
            <li
              key={series}
              className="books-series-item"
              onClick={() => toggleSeries(series)}
            >
              {series}
              <span className="books-world">({seriesWorlds[series]})</span>
            </li>
          ))}
        </ul>

        {Object.keys(books).map((series) => (
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
                    {books[series]?.map((book) => (
                      <li
                        key={book.title}
                        className="books-item"
                        ref={(el) => (bookRefs.current[book.title] = el)}
                        onClick={(e) => toggleBook(book, e)}
                      >
                        <span className="books-title-item">{book.title}</span>
                      </li>
                    ))}
                  </ul>

                  {selectedBook && selectedSeries === series && (
                    <div className="books-book-description">
                      <h4>{selectedBook.title}</h4>
                      <p>{selectedBook.description}</p>

                      {selectedBook.stories && (
                        <ul className="books-story-list">
                          {selectedBook.stories.map((story) => (
                            <li
                              key={story.title}
                              className="books-story-item"
                              ref={(el) =>
                                (storyRefs.current[story.title] = el)
                              }
                              onClick={(e) => toggleStory(story, e)}
                            >
                              {story.title}
                            </li>
                          ))}
                        </ul>
                      )}

                      {selectedStory && selectedStory.title && (
                        <div className="books-story-description">
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

                  <ul className="books-item-list">
                    {books[series]?.map((book) => (
                      <li
                        key={book.title}
                        className="books-item"
                        ref={(el) => (bookRefs.current[book.title] = el)}
                        onClick={(e) => toggleBook(book, e)}
                      >
                        <span className="books-title-item">{book.title}</span>
                      </li>
                    ))}
                  </ul>

                  {selectedBook && selectedSeries === series && (
                    <div className="books-book-description">
                      <h4>{selectedBook.title}</h4>
                      <p>{selectedBook.description}</p>

                      {selectedBook.stories && (
                        <ul className="books-story-list">
                          {selectedBook.stories.map((story) => (
                            <li
                              key={story.title}
                              className="books-story-item"
                              ref={(el) =>
                                (storyRefs.current[story.title] = el)
                              }
                              onClick={(e) => toggleStory(story, e)}
                            >
                              {story.title}
                            </li>
                          ))}
                        </ul>
                      )}

                      {selectedStory && selectedStory.title && (
                        <div className="books-story-description">
                          <h5>{selectedStory.title}</h5>
                          <p>{selectedStory.description}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
