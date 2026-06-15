import "./China.css";
import { useState, useRef, useEffect } from "react";
import chinaTopics from "../data/chinaTopics";
import booksManga from "../data/booksManga";

const China = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedSubitem, setSelectedSubitem] = useState(null);

  const chinaTopicsWithManga = {
    ...chinaTopics,
    "Inne Azjatyckie": [
      ...chinaTopics["Inne Azjatyckie"],
      {
        title: "Manga",
        description: "Wybrane mangi z kolekcji książek.",
        subitems: Object.keys(booksManga).map((title) => ({
          title,
          description:
            (booksManga[title].description || "") ||
            (booksManga[title].stories && booksManga[title].stories.length
              ? `Zawiera ${booksManga[title].stories.length} tomów.`
              : ""),
        })),
      },
    ],
  };

  const itemsRef = useRef(null);
  const itemDescriptionRef = useRef(null);
  const subitemDescriptionRef = useRef(null);

  const toggleCategory = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
    setSelectedItem(null);
    setSelectedSubitem(null);
  };

  const toggleItem = (item) => {
    setSelectedItem(item === selectedItem ? null : item);
    setSelectedSubitem(null);
  };

  const toggleSubitem = (sub) => {
    setSelectedSubitem(sub === selectedSubitem ? null : sub);
  };

  /* Scroll do listy itemów */
  useEffect(() => {
    if (selectedCategory && itemsRef.current) {
      itemsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selectedCategory]);

  /* Scroll do opisu itemu */
  useEffect(() => {
    if (selectedItem && itemDescriptionRef.current) {
      itemDescriptionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selectedItem]);

  /* Scroll do opisu subitemu */
  useEffect(() => {
    if (selectedSubitem && subitemDescriptionRef.current) {
      subitemDescriptionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selectedSubitem]);

  return (
    <div className="china-wrapper">
      <div className="china-container">
        <h2 className="china-title">Chiny</h2>

        {/* Kategorie */}
        <ul className="china-categories">
          {Object.keys(chinaTopicsWithManga).map((category) => (
            <li
              key={category}
              className="china-category"
              onClick={() => toggleCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>

        {/* Lista elementów */}
        {selectedCategory && (
          <div className="china-items-section" ref={itemsRef}>
            <h3 className="china-subtitle">{selectedCategory}</h3>

            <ul className="china-items-list">
              {chinaTopicsWithManga[selectedCategory].map((item) => (
                <li
                  key={item.title}
                  className="china-item"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleItem(item);
                  }}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Opis item */}
        {selectedItem && (
          <div className="china-description-section" ref={itemDescriptionRef}>
            <h3>{selectedItem.title}</h3>
            <p>{selectedItem.description}</p>

            {selectedItem.subitems && (
              <ul className="china-items-list">
                {selectedItem.subitems.map((sub, index) => {
                  const title = typeof sub === "string" ? sub : sub.title;

                  return (
                    <li
                      key={index}
                      className="china-item"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSubitem(sub);
                      }}
                    >
                      {title}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        )}

        {/* Opis subitem */}
        {selectedSubitem && (
          <div
            className="china-description-section"
            ref={subitemDescriptionRef}
          >
            <h3>
              {typeof selectedSubitem === "string"
                ? selectedSubitem
                : selectedSubitem.title}
            </h3>

            <p>
              {typeof selectedSubitem === "string"
                ? `Opis dla ${selectedSubitem}`
                : selectedSubitem.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default China;
