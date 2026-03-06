import "./Games.css";
import { useState, useMemo, useRef, useEffect } from "react";
import Wizard from "../../public/images/Wizard.jpg";
import Minecraft from "../../public/images/Minecraft.jpg";
import gamesData from "../data/gamesData";
import gameDescriptions from "../data/gameDescriptions";

const worldsList = [
  "Wizard City",
  "Krokotopia",
  "Marleybone",
  "Mooshu",
  "Dragonspyre",
  "Grizzleheim",
  "Wysteria",
  "Aquila",
  "Celestia",
  "Zafaria",
  "Avalon",
  "Azteca",
  "Khrysalis",
  "Darkmoor",
  "Polaris",
  "Wizard101",
  "Minecraft",
];

const Games = () => {
  const [selectedWorld, setSelectedWorld] = useState("Wszystkie");
  const [search, setSearch] = useState("");
  const [selectedGame, setSelectedGame] = useState(null);

  const descriptionRef = useRef(null);

  const filteredGames = useMemo(() => {
    return gamesData
      .filter((game) =>
        selectedWorld === "Wszystkie"
          ? true
          : game.worlds.includes(selectedWorld),
      )
      .filter((game) =>
        game.title.toLowerCase().includes(search.toLowerCase()),
      );
  }, [selectedWorld, search]);

  // scroll do opisu po zmianie selectedGame
  useEffect(() => {
    if (selectedGame && descriptionRef.current) {
      descriptionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selectedGame]);

  return (
    <div className="games-wrapper">
      <div className="games-container">
        <h2 className="games-title">Gry</h2>
        <div className="games-controls">
          <input
            type="text"
            placeholder="Szukaj gry..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="games-search"
          />

          <select
            value={selectedWorld}
            onChange={(e) => {
              setSelectedWorld(e.target.value);
              setSelectedGame(null);
            }}
            className="games-filter"
          >
            <option value="Wszystkie">Wszystkie</option>
            {worldsList.map((world) => (
              <option key={world} value={world}>
                {world}
              </option>
            ))}
          </select>
        </div>
        <p className="games-count">Liczba gier: {filteredGames.length}</p>
        <ul className="games-list">
          {filteredGames.map((game, index) => (
            <li
              className={`games-item ${
                selectedGame === game.title ? "active" : ""
              }`}
              key={index}
              onClick={() =>
                setSelectedGame(selectedGame === game.title ? null : game.title)
              }
            >
              {game.title}
            </li>
          ))}
        </ul>
        {selectedGame === "Wizard101" && gameDescriptions[selectedGame] && (
          <div className="game-description" ref={descriptionRef}>
            <h3>{selectedGame}</h3>
            <p>
              <strong>Dlaczego jest wyjątkowa: </strong>
              {gameDescriptions[selectedGame].why}
            </p>
            <p>
              <strong>Główni Protagoniści: </strong>
              {gameDescriptions[selectedGame].protagonist}
            </p>
            <p>
              <strong>Główni Antagoniści: </strong>
              {gameDescriptions[selectedGame].antagonist}
            </p>
            <p>
              <strong>Miejsce Akcji: </strong>
              {gameDescriptions[selectedGame].location}
            </p>
            <p>
              <strong>Opis: </strong>
              {gameDescriptions[selectedGame].description}
            </p>
            <img src={Wizard} className="image-of-media" />
          </div>
        )}

        {selectedGame === "Minecraft" && gameDescriptions[selectedGame] && (
          <div className="game-description" ref={descriptionRef}>
            <h3>{selectedGame}</h3>
            <p>
              <strong>Dlaczego jest wyjątkowa: </strong>
              {gameDescriptions[selectedGame].why}
            </p>
            <p>
              <strong>Główni Protagoniści: </strong>
              {gameDescriptions[selectedGame].protagonist}
            </p>
            <p>
              <strong>Główni Antagoniści: </strong>
              {gameDescriptions[selectedGame].antagonist}
            </p>
            <p>
              <strong>Miejsce Akcji: </strong>
              {gameDescriptions[selectedGame].location}
            </p>
            <p>
              <strong>Opis: </strong>
              {gameDescriptions[selectedGame].description}
            </p>
            <img src={Minecraft} className="image-of-media" />
          </div>
        )}
        {selectedGame !== "Wizard101" &&
          selectedGame !== "Minecraft" &&
          gameDescriptions[selectedGame] && (
            <div className="game-description" ref={descriptionRef}>
              <h3>{selectedGame}</h3>

              <p>
                <strong>Do jakiego świata nawiązuje: </strong>
                {gameDescriptions[selectedGame].world}
              </p>

              <p>
                <strong>Dlaczego akurat do tego: </strong>
                {gameDescriptions[selectedGame].why}
              </p>

              <p>
                <strong>Główni Protagoniści: </strong>
                {gameDescriptions[selectedGame].protagonist}
              </p>

              <p>
                <strong>Główni Antagoniści: </strong>
                {gameDescriptions[selectedGame].antagonist}
              </p>
              <p>
                <strong>Miejsce Akcji: </strong>
                {gameDescriptions[selectedGame].location}
              </p>
              <p>
                <strong>Opis: </strong>
                {gameDescriptions[selectedGame].description}
              </p>
            </div>
          )}
      </div>
    </div>
  );
};

export default Games;
