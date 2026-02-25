import "./Games.css";
import { useState, useMemo } from "react";

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
];

const gamesData = [
  { title: "Wiedźmin", worlds: ["Avalon"] },
  { title: "Wiedźmin 2", worlds: ["Avalon"] },
  { title: "Wiedźmin 3", worlds: ["Avalon", "Grizzleheim", "Darkmoor"] },
  { title: "Wiedźmin: Pożegnanie Białego Wilka", worlds: ["Avalon"] },
  { title: "Gwint", worlds: ["Avalon"] },
  { title: "TES IV Oblivion", worlds: ["Avalon", "Dragonspyre"] },
  { title: "TES V Skyrim", worlds: ["Grizzleheim"] },
  { title: "Dark Souls 3", worlds: ["Dragonspyre"] },
  { title: "Bloodborne", worlds: ["Darkmoor"] },
  { title: "Elden Ring", worlds: ["Wizard City"] },
  { title: "Sekiro: Shadows Die Twice", worlds: ["Mooshu"] },
  { title: "Sinner: Sacrifice for Redemption", worlds: ["Dragonspyre"] },
  { title: "Ghost of a Tale", worlds: ["Khrysalis", "Avalon"] },
  { title: "Dragon's Dogma: Dark Arisen", worlds: ["Avalon"] },
  { title: "Dragon's Dogma 2", worlds: ["Avalon", "Krokotopia"] },
  { title: "Ultimate Spiderman", worlds: ["Wizard City", "Marleybone"] },
  { title: "Marvel Spiderman", worlds: ["Wizard City", "Marleybone"] },
  {
    title: "Marvel Spiderman: Miles Morales",
    worlds: ["Wizard City", "Marleybone"],
  },
  { title: "Marvel Spiderman 2", worlds: ["Wizard City", "Marleybone"] },
  {
    title: "Might and Magic: Heroes 6",
    worlds: [
      "Avalon",
      "Darkmoor",
      "Mooshu",
      "Dragonspyre",
      "Zafaria",
      "Azteca",
    ],
  },
  { title: "Assassin's Creed", worlds: ["Avalon", "Zafaria", "Celestia"] },
  { title: "Assassin's Creed 2", worlds: ["Wysteria", "Celestia"] },
  {
    title: "Assassin's Creed Brotherhood",
    worlds: ["Wysteria", "Dragonspyre", "Celestia"],
  },
  { title: "Assassin's Creed Revelations", worlds: ["Zafaria", "Celestia"] },
  { title: "Assassin's Creed 4 Black Flag", worlds: ["Azteca", "Celestia"] },
  { title: "Assassin's Creed Syndicate", worlds: ["Marleybone", "Celestia"] },
  { title: "Assassin's Creed Origins", worlds: ["Krokotopia", "Celestia"] },
  { title: "Assassin's Creed Odyssey", worlds: ["Aquila", "Celestia"] },
  { title: "Assassin's Creed Valhalla", worlds: ["Grizzleheim", "Celestia"] },
  { title: "Assassin's Creed Mirage", worlds: ["Zafaria", "Celestia"] },
  { title: "Assassin's Creed Chronicles China", worlds: ["Mooshu"] },
  { title: "The Last of Us", worlds: ["Dragonspyre", "Darkmoor"] },
  { title: "The Last of Us Part 2", worlds: ["Dragonspyre", "Darkmoor"] },
  { title: "Shadow of the Colossus", worlds: ["Azteca"] },
  {
    title: "Red Dead Redemption 2",
    worlds: ["Zafaria", "Marleybone", "Azteca"],
  },
  { title: "Mafia Definitive Edition", worlds: ["Marleybone"] },
  { title: "Serious Sam: The First Encounter", worlds: ["Krokotopia"] },
  {
    title: "Serious Sam: The Second Encounter",
    worlds: ["Krokotopia", "Azteca", "Avalon"],
  },
  { title: "DOOM 1 & 2", worlds: ["Dragonspyre", "Celestia"] },
  { title: "DOOM 64", worlds: ["Dragonspyre", "Celestia"] },
  { title: "DOOM 3", worlds: ["Dragonspyre", "Celestia"] },
  { title: "DOOM 2016", worlds: ["Dragonspyre", "Celestia"] },
  { title: "DOOM Eternal", worlds: ["Dragonspyre", "Celestia"] },
  { title: "DOOM The Dark Ages", worlds: ["Dragonspyre", "Celestia"] },
  { title: "Ori and The Blind Forest", worlds: ["Khrysalis"] },
  { title: "Ori and The Will of The Wisps", worlds: ["Khrysalis"] },
  {
    title: "Warhammer 40k Dawn of War",
    worlds: [
      "Polaris",
      "Zafaria",
      "Azteca",
      "Celestia",
      "Dragonspyre",
      "Darkmoor",
    ],
  },
  {
    title: "Warhammer 40k Space Marine",
    worlds: ["Polaris", "Zafaria", "Azteca", "Dragonspyre"],
  },
  {
    title: "Warhammer 40k Space Marine 2",
    worlds: ["Polaris", "Khrysalis", "Dragonspyre"],
  },
  { title: "Warhammer 40k Boltgun", worlds: ["Polaris", "Dragonspyre"] },
  { title: "Starcraft 2", worlds: ["Polaris", "Khrysalis", "Celestia"] },
  { title: "Cyberpunk 2077", worlds: ["Celestia"] },
  { title: "Detroit Become Human", worlds: ["Celestia"] },
  { title: "Life is Strange", worlds: ["Wysteria"] },
  { title: "Life is Strange Before The Storm", worlds: ["Wysteria"] },
  { title: "Kangurek Kao", worlds: ["Zafaria", "Mooshu", "Khrysalis"] },
  { title: "Sniper Elite 3", worlds: ["Zafaria"] },
  { title: "Prince of Persia Warrior Within", worlds: ["Zafaria"] },
  { title: "MediEvil", worlds: ["Darkmoor"] },
  { title: "Shadow of The Tomb Raider", worlds: ["Azteca"] },
  { title: "God of War", worlds: ["Aquila"] },
  { title: "God of War 2", worlds: ["Aquila"] },
  { title: "God of War Ghost of Sparta", worlds: ["Aquila"] },
  { title: "God of War Chains of Olympus", worlds: ["Aquila"] },
  { title: "God of War Wstąpienie", worlds: ["Aquila"] },
  { title: "God of War 3", worlds: ["Aquila"] },
  { title: "God of War 2018", worlds: ["Grizzleheim"] },
  { title: "God of War Ragnarok", worlds: ["Grizzleheim"] },
  { title: "Ghost of Tsushima", worlds: ["Mooshu"] },
  { title: "Ghost of Yotei", worlds: ["Mooshu"] },
  { title: "Undertale", worlds: ["Wizard City"] },
  { title: "Portal", worlds: ["Celestia"] },
  { title: "Portal 2", worlds: ["Celestia"] },
  { title: "Valheim", worlds: ["Grizzleheim"] },
  { title: "A Way Out", worlds: ["Marleybone"] },
  { title: "Creaks", worlds: ["Darkmoor"] },
  { title: "Superhot", worlds: ["Celestia"] },
  { title: "Superhot Mind Control Delete", worlds: ["Celestia"] },
  { title: "Returnal", worlds: ["Khrysalis"] },
  { title: "LEGO Ninjago Film Gra", worlds: ["Mooshu"] },
  { title: "LEGO Marvel Super Heroes", worlds: ["Wizard City", "Marleybone"] },
  { title: "LEGO Harry Potter Lata 1–4", worlds: ["Wizard City"] },
  { title: "LEGO Harry Potter Lata 5–7", worlds: ["Wizard City"] },
  { title: "Harry Potter i Kamień Filozoficzny", worlds: ["Wizard City"] },
  { title: "Hogwart's Legacy", worlds: ["Wizard City"] },
  { title: "School of Dragons", worlds: ["Grizzleheim"] },
  { title: "Rise of Berk", worlds: ["Grizzleheim"] },
  { title: "Titan Uprising", worlds: ["Grizzleheim"] },
  { title: "How To Train Your Dragon", worlds: ["Grizzleheim"] },
  { title: "How To Train Your Dragon 2", worlds: ["Grizzleheim"] },
  { title: "Dawn Of New Riders", worlds: ["Grizzleheim"] },
  { title: "Dragons Nine Realms", worlds: ["Khrysalis"] },
  { title: "Dragons Wild Skies", worlds: ["Grizzleheim"] },
  { title: "Reksio i Skarb Piratów", worlds: ["Zafaria"] },
  { title: "Reksio i UFO", worlds: ["Celestia", "Khrysalis"] },
  { title: "Reksio i Czarodzieje", worlds: ["Wizard City"] },
  {
    title: "Reksio i Wehikuł Czasu",
    worlds: ["Azteca", "Celestia", "Krokotopia", "Avalon"],
  },
  { title: "Reksio i Kapitan Nemo", worlds: ["Marleybone", "Krokotopia"] },
  {
    title: "Reksio i Kretes w Akcji",
    worlds: [
      "Wizard City",
      "Zafaria",
      "Celestia",
      "Khrysalis",
      "Azteca",
      "Krokotopia",
      "Avalon",
    ],
  },
  {
    title: "Reksio i Kretes: Tajemnica Trzeciego Wymiaru",
    worlds: ["Wysteria"],
  },
  { title: "Star Wars Battlefront 2", worlds: ["Celestia", "Khrysalis"] },
  { title: "GTA 5 Online", worlds: ["Marleybone", "Wizard City"] },
  { title: "Ark Survival Evolved", worlds: ["Azteca"] },
  { title: "Don't Starve", worlds: ["Zafaria", "Darkmoor"] },
  { title: "Phasmophobia", worlds: ["Darkmoor"] },
  { title: "Among Us", worlds: ["Celestia"] },
  { title: "Diablo Immortal", worlds: ["Dragonspyre"] },
  { title: "Martha is Dead", worlds: ["Wysteria"] },
  { title: "Sherlock Holmes Chapter One", worlds: ["Wysteria"] },
  { title: "Sherlock Holmes The Awakened", worlds: ["Darkmoor"] },
  { title: "Persona 3 Reload", worlds: ["Wysteria", "Aquila"] },
  { title: "Persona 3 Portable", worlds: ["Wysteria", "Aquila"] },
  {
    title: "Persona 3 Dancing in The Moonlight",
    worlds: ["Wysteria", "Aquila"],
  },
  { title: "Persona 4 Golden", worlds: ["Wysteria"] },
  { title: "Persona 4 Arena", worlds: ["Wysteria"] },
  { title: "Persona 4 Dancing all Night", worlds: ["Wysteria"] },
  {
    title: "Persona 5 Royal",
    worlds: [
      "Wysteria",
      "Avalon",
      "Marleybone",
      "Krokotopia",
      "Celestia",
      "Dragonspyre",
    ],
  },
  {
    title: "Persona 5 Strikers",
    worlds: [
      "Wysteria",
      "Wizard City",
      "Avalon",
      "Polaris",
      "Marleybone",
      "Mooshu",
      "Celestia",
      "Dragonspyre",
    ],
  },
  {
    title: "Persona 5 Tactica",
    worlds: ["Wysteria", "Polaris", "Mooshu", "Dragonspyre", "Marleybone"],
  },
  { title: "Persona 5 The Phantom X", worlds: ["Wysteria"] },
  { title: "Persona 5 Dancing in The Starlight", worlds: ["Wysteria"] },
  { title: "Persona Q", worlds: ["Wysteria"] },
  { title: "Persona Q2", worlds: ["Wysteria"] },
  { title: "Epoka Lodowcowa 3", worlds: ["Polaris", "Azteca"] },
  { title: "Dante's Inferno", worlds: ["Dragonspyre"] },
  { title: "Madagaskar", worlds: ["Zafaria"] },
  { title: "Madagaskar 2", worlds: ["Zafaria"] },
  { title: "Spooky's Jumpscare Mansion", worlds: ["Darkmoor"] },
  { title: "Metal Gear Rising Revengeance", worlds: ["Celestia"] },
  { title: "Sphinx and The Cursed Mummy", worlds: ["Krokotopia"] },
  { title: "Buckshot Roulette", worlds: ["Darkmoor"] },
  { title: "Raft", worlds: ["Celestia"] },
  { title: "Kung Fu Panda", worlds: ["Mooshu"] },
  {
    title: "Duke Dashington",
    worlds: ["Azteca", "Krokotopia", "Aquila", "Dragonspyre", "Khrysalis"],
  },
  { title: "Spongebob Battle for Bikini Bottom", worlds: ["Celestia"] },
  {
    title: "Game Of Thrones Telltale",
    worlds: ["Avalon", "Krokotopia", "Grizzleheim"],
  },
  { title: "Game Of Thrones RPG", worlds: ["Avalon", "Grizzleheim"] },
  { title: "Cuphead", worlds: ["Marleybone"] },
  { title: "Hercules", worlds: ["Aquila"] },
  { title: "Call of Duty World War 2", worlds: ["Polaris", "Dragonspyre"] },
  {
    title: "Age of Empires",
    worlds: [
      "Krokotopia",
      "Wysteria",
      "Dragonspyre",
      "Aquila",
      "Azteca",
      "Mooshu",
    ],
  },
  { title: "Helltaker", worlds: ["Dragonspyre"] },
  { title: "The Binding Of Isaac", worlds: ["Darkmoor", "Dragonspyre"] },
  { title: "Squid Game Bez Pardonu", worlds: ["Wysteria"] },
  { title: "Aladyn", worlds: ["Zafaria"] },
  { title: "Król Lew", worlds: ["Zafaria"] },
  { title: "Black Myth: Wukong", worlds: ["Mooshu"] },
  { title: "Total War: Three Kingdoms", worlds: ["Mooshu"] },
  {
    title: "The Legend Of Zelda: Breath of The Wild",
    worlds: ["Avalon", "Celestia"],
  },
  { title: "Hyrule Warriors: Age Of Calamity", worlds: ["Avalon", "Celestia"] },
  {
    title: "The Legend Of Zelda: Tears of Kingdom",
    worlds: ["Avalon", "Celestia"],
  },
  {
    title: "Hyrule Warriors: Age of Imprisonment",
    worlds: ["Avalon", "Celestia"],
  },
  {
    title: "Super Mario Odyssey",
    worlds: [
      "Wizard City",
      "Krokotopia",
      "Marleybone",
      "Mooshu",
      "Dragonspyre",
      "Celestia",
      "Azteca",
      "Khrysalis",
      "Polaris",
    ],
  },
  { title: "Luigi's Mansion 3", worlds: ["Darkmoor"] },
  { title: "Super Mario RPG", worlds: ["Wizard City"] },
  { title: "Devil May Cry", worlds: ["Dragonspyre"] },
  { title: "Devil May Cry 2", worlds: ["Dragonspyre"] },
  { title: "Devil May Cry 3", worlds: ["Dragonspyre"] },
  { title: "Devil May Cry 4", worlds: ["Dragonspyre"] },
  { title: "DMC Devil May Cry", worlds: ["Dragonspyre"] },
  { title: "Devil May Cry 5", worlds: ["Dragonspyre"] },
  {
    title: "Clair Obscur Expedition 33",
    worlds: ["Wysteria", "Celestia", "Khrysalis", "Dragonspyre"],
  },
  { title: "Slay The Princess", worlds: ["Darkmoor"] },
  { title: "Buckshot Roulette", worlds: ["Darkmoor"] },
  { title: "Gujian", worlds: ["Mooshu"] },
  { title: "Gujian 2", worlds: ["Mooshu"] },
  { title: "Gujian 3", worlds: ["Mooshu"] },
  { title: "Where Winds Meet", worlds: ["Mooshu"] },
  { title: "Wuchang Fallen Feathers", worlds: ["Mooshu"] },
];

const Games = () => {
  const [selectedWorld, setSelectedWorld] = useState("Wszystkie");
  const [search, setSearch] = useState("");

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
            onChange={(e) => setSelectedWorld(e.target.value)}
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
            <li className="games-item" key={index}>
              {game.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Games;
