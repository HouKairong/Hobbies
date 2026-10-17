import "./Games.css";
import { useState, useMemo, useRef, useEffect } from "react";
import Wizard from "../../public/images/Wizard.jpg";
import Minecraft from "../../public/images/Minecraft.jpg";
import gamesData from "../data/gamesData";
import gameDescriptions from "../data/gameDescriptions";
import GalleryModal from "../elements/GalleryModal";

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

const gameTitleYears = {
  Wizard101: 2008,
  Minecraft: 2011,
  Pirate101: 2012,
  Wiedźmin: 2007,
  "Wiedźmin 2": 2011,
  "Wiedźmin 3": 2015,
  "Wiedźmin: Pożegnanie Białego Wilka": 2020,
  Gwint: 2018,
  "TES IV Oblivion": 2006,
  "TES V Skyrim": 2011,
  "Dark Souls 3": 2016,
  Bloodborne: 2015,
  "Elden Ring": 2022,
  "Sekiro: Shadows Die Twice": 2019,
  "Dragon's Dogma: Dark Arisen": 2013,
  "Dragon's Dogma 2": 2024,
  "Assassin's Creed": 2007,
  "Assassin's Creed 2": 2009,
  "Assassin's Creed Brotherhood": 2010,
  "Assassin's Creed Revelations": 2011,
  "Assassin's Creed 4 Black Flag": 2013,
  "Assassin's Creed Syndicate": 2015,
  "Assassin's Creed Origins": 2017,
  "Assassin's Creed Odyssey": 2018,
  "Assassin's Creed Valhalla": 2020,
  "Assassin's Creed Mirage": 2023,
  "The Last of Us": 2013,
  "The Last of Us Part 2": 2020,
  "Red Dead Redemption 2": 2018,
  "DOOM 2016": 2016,
  "DOOM Eternal": 2020,
  "DOOM The Dark Ages": 2025,
  "Ori and The Blind Forest": 2015,
  "Ori and The Will of The Wisps": 2020,
  "Warhammer 40k Dawn of War": 2004,
  "Warhammer 40k Space Marine": 2011,
  "Warhammer 40k Space Marine 2": 2024,
  "Warhammer 40k Boltgun": 2023,
  "Starcraft 2": 2010,
  "Cyberpunk 2077": 2020,
  "Detroit Become Human": 2018,
  "Life is Strange": 2015,
  "Kangurek Kao": 2022,
  "God of War": 2005,
  "God of War 2018": 2018,
  "God of War Ragnarok": 2022,
  "Ghost of Tsushima": 2020,
  "Ghost of Yotei": 2025,
  Undertale: 2015,
  Portal: 2007,
  "Portal 2": 2011,
  "School of Dragons": 2013,
  "How To Train Your Dragon": 2010,
  "How To Train Your Dragon 2": 2014,
  "Black Myth: Wukong": 2024,
  "The Legend Of Zelda: Breath of The Wild": 2017,
  "The Legend Of Zelda: Tears of Kingdom": 2023,
  "Super Mario Odyssey": 2017,
  "Super Mario RPG": 2023,
  "Devil May Cry 5": 2019,
  "Clair Obscur Expedition 33": 2025,
  "Genshin Impact": 2020,
  Fortnite: 2017,
  "Król Lew": 1994,
  Hercules: 1997,
  Aladyn: 1994,
  "Buckshot Roulette": 2024,
  "Super Smash Bros": 1999,
  "Shadow of Mordor": 2014,
  "Shadow of War": 2017,
  "LEGO Władca Pierścieni": 2012,
  "Game Of Thrones Telltale": 2015,
  "Game Of Thrones RPG": 2015,
  "Call of Duty World War 2": 2017,
  "Hogwart's Legacy": 2023,
  "Persona 3 Reload": 2024,
  "Persona 4 Golden": 2012,
  "Persona 5 Royal": 2020,
  "Persona 5 Strikers": 2020,
  "Persona 5 Tactica": 2023,
  "Persona Q2": 2018,
  "The Binding Of Isaac": 2011,
  "Sinner: Sacrifice for Redemption": 2018,
  "Ghost of a Tale": 2018,
  "Ultimate Spiderman": 2005,
  "Marvel Spiderman": 2018,
  "Marvel Spiderman: Miles Morales": 2020,
  "Marvel Spiderman 2": 2023,
  "Heroes of Might and Magic 3": 1999,
  "Might and Magic: Heroes 6": 2011,
  "Assassin's Creed Chronicles China": 2015,
  "Shadow of the Colossus": 2005,
  "Mafia Definitive Edition": 2020,
  "Serious Sam: The First Encounter": 2001,
  "Serious Sam: The Second Encounter": 2002,
  "DOOM 1 & 2": 1993,
  "DOOM 64": 1997,
  "DOOM 3": 2004,
  "Mirror's Edge": 2008,
  "Life is Strange Before The Storm": 2017,
  "Sniper Elite 3": 2014,
  "Prince of Persia Warrior Within": 2004,
  MediEvil: 2019,
  "Shadow of The Tomb Raider": 2018,
  "God of War 2": 2007,
  "God of War Ghost of Sparta": 2010,
  "God of War Chains of Olympus": 2008,
  "God of War Wstąpienie": 2013,
  "God of War 3": 2010,
  Valheim: 2021,
  "A Way Out": 2018,
  Creaks: 2020,
  Superhot: 2016,
  "Superhot Mind Control Delete": 2020,
  Returnal: 2021,
  "LEGO Ninjago Film Gra": 2017,
  "LEGO Marvel Super Heroes": 2013,
  "LEGO Harry Potter Lata 1–4": 2010,
  "LEGO Harry Potter Lata 5–7": 2011,
  "Harry Potter i Kamień Filozoficzny": 2001,
  "Rise of Berk": 2014,
  "Titan Uprising": 2019,
  "Dawn Of New Riders": 2019,
  "Dragons Nine Realms": 2021,
  "Dragons Wild Skies": 2021,
  "Reksio i Skarb Piratów": 2013,
  "Reksio i UFO": 2014,
  "Reksio i Czarodzieje": 2014,
  "Reksio i Wehikuł Czasu": 2017,
  "Reksio i Kapitan Nemo": 2017,
  "Reksio i Kretes w Akcji": 2013,
  "Reksio i Kretes: Tajemnica Trzeciego Wymiaru": 2020,
  "Star Wars Battlefront 2": 2017,
  "GTA 5 Online": 2013,
  "Ark Survival Evolved": 2017,
  "Don't Starve": 2013,
  "Don't Starve Together": 2016,
  Phasmophobia: 2020,
  "Among Us": 2018,
  "Diablo Immortal": 2022,
  "Martha is Dead": 2022,
  "Sherlock Holmes Chapter One": 2021,
  "Sherlock Holmes The Awakened": 2023,
  "Persona 3 Portable": 2009,
  "Persona 3 Dancing in The Moonlight": 2018,
  "Persona 4 Arena Ultimax": 2013,
  "Persona 4 Dancing all Night": 2015,
  "Persona 5 Dancing in The Starlight": 2018,
  "Persona Q": 2014,
  "Epoka Lodowcowa 3": 2009,
  "Dante's Inferno": 2010,
  Madagaskar: 2005,
  "Madagaskar 2": 2008,
  "Spooky's Jumpscare Mansion": 2014,
  "Metal Gear Rising Revengeance": 2013,
  "Sphinx and The Cursed Mummy": 2003,
  Raft: 2018,
  "Kung Fu Panda": 2008,
  "Duke Dashington": 2022,
  "Spongebob Battle for Bikini Bottom": 2003,
  Cuphead: 2017,
  "Age of Empires": 1997,
  Helltaker: 2020,
  "Squid Game Bez Pardonu": 2023,
  "Total War: Three Kingdoms": 2019,
  "Hyrule Warriors: Age Of Calamity": 2020,
  "Hyrule Warriors: Age of Imprisonment": 2025,
  "Luigi's Mansion 3": 2019,
  "Devil May Cry": 2001,
  "Devil May Cry 2": 2003,
  "Devil May Cry 3": 2005,
  "Devil May Cry 4": 2008,
  "DMC Devil May Cry": 2013,
  Painkiller: 2025,
  Witchfire: 2024,
  "Rayman Legends": 2013,
  "Slay The Princess": 2023,
  Gujian: 2014,
  "Gujian 2": 2013,
  "Gujian 3": 2018,
  "Wuchang Fallen Feathers": 2025,
};

const formatGameTitle = (title) => {
  const year = gameTitleYears[title];
  if (!year) return title;

  if (title === "Cyberpunk 2077") {
    return `Cyberpunk 2077 (${year})`;
  }

  const normalizedTitle = title
    .replace(/\s+\((19|20)\d{2}\)$/, "")
    .replace(/\s+(19|20)\d{2}$/, "");

  return `${normalizedTitle} (${year})`;
};

const renderDlcList = (dlcs) => {
  if (!dlcs || dlcs.length === 0) return null;

  return (
    <div className="game-dlc-block">
      <p>
        <strong>DLC i dodatki: </strong>
      </p>
      <ul className="game-dlc-list">
        {dlcs.map((dlc) => (
          <li key={dlc.title}>
            <strong>{dlc.title}</strong> — {dlc.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Games = () => {
  const [selectedWorld, setSelectedWorld] = useState("Wszystkie");
  const [selectedStatus, setSelectedStatus] = useState("Wszystkie");
  const [search, setSearch] = useState("");
  const [selectedGame, setSelectedGame] = useState(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [itemStatuses, setItemStatuses] = useState(() => {
    if (typeof window === "undefined") return {};

    try {
      return JSON.parse(localStorage.getItem("hobbies-game-statuses") || "{}");
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

  const descriptionRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(
        "hobbies-game-statuses",
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

  const filterByStatus = (itemKey) => {
    if (selectedStatus === "Wszystkie") return true;

    const selectedStatusValue = statusOptions.find(
      (option) => option.label === selectedStatus,
    )?.value;

    return (itemStatuses[itemKey] ?? "seen") === selectedStatusValue;
  };

  const filteredGames = useMemo(() => {
    return gamesData
      .filter((game) =>
        selectedWorld === "Wszystkie"
          ? true
          : game.worlds.includes(selectedWorld),
      )
      .filter((game) => game.title.toLowerCase().includes(search.toLowerCase()))
      .filter((game) => filterByStatus(`game:${game.title}`));
  }, [selectedWorld, search, selectedStatus, itemStatuses]);

  const scrollToDescription = (element) => {
    if (!element || typeof window === "undefined") return;
    requestAnimationFrame(() => {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  const handleGameClick = (title) => {
    const nextGame = selectedGame === title ? null : title;
    setSelectedGame(nextGame);

    if (nextGame) {
      requestAnimationFrame(() => {
        scrollToDescription(descriptionRef.current);
      });
    }
  };

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

          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="games-filter"
          >
            {statusFilterOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <p className="games-count">Liczba gier: {filteredGames.length}</p>

        <ul className="games-list">
          {filteredGames.map((game, index) => {
            const itemKey = `game:${game.title}`;
            const currentStatus = itemStatuses[itemKey] ?? "seen";

            return (
              <li
                key={index}
                className={`games-item ${
                  selectedGame === game.title ? "active" : ""
                } ${currentStatus ? `item-status-${currentStatus}` : ""}`}
                onClick={() => handleGameClick(game.title)}
              >
                <div className="games-item-content">
                  <span>{formatGameTitle(game.title)}</span>

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

        {selectedGame === "Wizard101" && gameDescriptions[selectedGame] && (
          <div className="game-description" ref={descriptionRef}>
            <h3>{formatGameTitle(selectedGame)}</h3>

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

            {renderDlcList(gameDescriptions[selectedGame].dlc)}

            <img src={Wizard} className="image-of-media" />
          </div>
        )}

        {selectedGame === "Minecraft" && gameDescriptions[selectedGame] && (
          <div className="game-description" ref={descriptionRef}>
            <h3>{formatGameTitle(selectedGame)}</h3>

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

            {renderDlcList(gameDescriptions[selectedGame].dlc)}

            <img src={Minecraft} className="image-of-media" />
          </div>
        )}

        {selectedGame !== "Wizard101" &&
          selectedGame !== "Minecraft" &&
          gameDescriptions[selectedGame] && (
            <div className="game-description" ref={descriptionRef}>
              <h3>{formatGameTitle(selectedGame)}</h3>

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

              {renderDlcList(gameDescriptions[selectedGame].dlc)}
            </div>
          )}

        {/* Przycisk na samym dole */}
        <div className="dogs-purpose-section">
          <button
            className="dogs-purpose-button"
            onClick={() => setIsGalleryOpen(true)}
          >
            A Dog's Purpose
          </button>
        </div>

        {/* Modal galerii */}
        {isGalleryOpen && (
          <GalleryModal
            galleryType="games"
            onClose={() => setIsGalleryOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Games;
