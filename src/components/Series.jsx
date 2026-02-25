import "./Series.css";
import { useState, useMemo } from "react";

const dimensionsList = ["Wszystkie", "Overworld", "Nether", "End"];

const seriesData = [
  { title: "Czarnobyl", dimensions: ["Nether"] },
  { title: "Gambit królowej", dimensions: ["Overworld"] },
  { title: "Lucyfer", dimensions: ["Nether"] },
  { title: "Wiedźmin netflixa", dimensions: ["Overworld"] },
  { title: "Wiedźmin rodowód krwi", dimensions: ["Overworld"] },
  { title: "Wiedźmin polski", dimensions: ["Overworld"] },
  { title: "Gra o tron", dimensions: ["Overworld", "End"] },
  { title: "Ród smoka", dimensions: ["Overworld", "End"] },
  { title: "Jeźdźcy smoków", dimensions: ["Overworld", "End"] },
  { title: "Jeźdźcy smoków 9 światów", dimensions: ["End"] },
  { title: "Centaurworld", dimensions: ["End"] },
  { title: "Deathnote", dimensions: ["End"] },
  { title: "Cyberpunk Edgerunners", dimensions: ["End"] },
  { title: "Dragon's Dogma", dimensions: ["Overworld", "End"] },
  { title: "The passage", dimensions: ["Nether"] },
  { title: "All of us are dead", dimensions: ["Nether"] },
  { title: "The last of us", dimensions: ["Nether"] },
  { title: "Squid game", dimensions: ["Nether"] },
  { title: "Breaking bad", dimensions: ["Nether"] },
  { title: "Better call Saul", dimensions: ["Nether"] },
  { title: "Sherlock", dimensions: ["Overworld"] },
  { title: "Persona Trinity Soul", dimensions: ["End"] },
  { title: "Persona 4 The Animation", dimensions: ["End"] },
  { title: "Persona 4 Golden The Animation", dimensions: ["End"] },
  { title: "Persona 5 The Animation", dimensions: ["End"] },
  { title: "Arcane", dimensions: ["Overworld", "End"] },
  { title: "Ragnarok", dimensions: ["Overworld", "End"] },
  { title: "Rzym", dimensions: ["Overworld"] },
  { title: "Most nad Sundem", dimensions: ["Overworld"] },
  { title: "13 powodów", dimensions: ["Nether"] },
  { title: "Egzorcysta Bogdan Boner", dimensions: ["Nether"] },
  { title: "Alice in Borderland", dimensions: ["Nether", "End"] },
  { title: "Seven Deadly Sins", dimensions: ["Overworld", "End"] },
  { title: "Kalifat", dimensions: ["Nether"] },
  { title: "Stranger Things", dimensions: ["Overworld", "End"] },
  { title: "Pingwiny z Madagaskaru", dimensions: ["Overworld"] },
  { title: "Niech żyje król julian", dimensions: ["Overworld"] },
  {
    title: "Kung fu panda legenda o niezwykłości",
    dimensions: ["Overworld", "End"],
  },
  {
    title: "Kung fu panda łapy przeznaczenia",
    dimensions: ["Overworld", "End"],
  },
  { title: "Kung fu panda Smoczy rycerz", dimensions: ["Overworld", "End"] },
  { title: "Ninjago", dimensions: ["Overworld", "End"] },
  { title: "Herkules", dimensions: ["Overworld"] },
  { title: "The end of the fucking world", dimensions: ["Nether"] },
  { title: "One Punch Man", dimensions: ["End"] },
  { title: "Gakkou Gurashi", dimensions: ["End"] },
  { title: "Hannibal", dimensions: ["Nether"] },
  { title: "Marianne", dimensions: ["Nether"] },
  { title: "Folklor", dimensions: ["Overworld", "End"] },
  { title: "Dom grozy", dimensions: ["Nether"] },
  { title: "Revolution", dimensions: ["Nether"] },
  { title: "Wheel of time", dimensions: ["Overworld", "End"] },
  { title: "30 srebrników", dimensions: ["Nether"] },
  { title: "Supernatural", dimensions: ["End", "Nether"] },
  { title: "Chilling adventures of Sabrina", dimensions: ["End"] },
  { title: "Po drugiej stronie muru", dimensions: ["Nether"] },
  { title: "1670", dimensions: ["Nether"] },
  { title: "Hazbin Hotel", dimensions: ["End"] },
  { title: "Helluva Boss", dimensions: ["End"] },
  { title: "Wikingowie", dimensions: ["Overworld"] },
  { title: "Wikingowie Walhalla", dimensions: ["Overworld"] },
  { title: "Kakegurui", dimensions: ["End"] },
  { title: "Kakegurui Twin", dimensions: ["End"] },
  { title: "Death Parade", dimensions: ["End"] },
  { title: "Cuphead", dimensions: ["Overworld", "End"] },
  { title: "High-Rise Invasion", dimensions: ["Nether"] },
  { title: "Spongebob Kanciastoporty (fragmenty)", dimensions: ["Overworld"] },
  { title: "Życie na planecie Ziemia", dimensions: ["Overworld"] },
  { title: "Sweet Home", dimensions: ["Nether"] },
  { title: "Devilman Crybaby", dimensions: ["End"] },
  { title: "Devil May Cry", dimensions: ["End"] },
  { title: "Devil May Cry Netflix", dimensions: ["End"] },
  { title: "From", dimensions: ["Nether"] },
  {
    title: "Dziesięć mil kwitnących brzoskwiń (Eternal Love)",
    dimensions: ["Overworld"],
  },
  { title: "Eternal Love of dream", dimensions: ["Overworld"] },
  { title: "Love and Destiny", dimensions: ["Overworld"] },
  { title: "The untamed", dimensions: ["Overworld", "End"] },
  { title: "Wu Xin the monster killer", dimensions: ["Overworld", "End"] },
  { title: "Nirvana in fire", dimensions: ["Overworld"] },
  { title: "Young Sherlock", dimensions: ["Overworld"] },
  { title: "The long ballad", dimensions: ["Overworld"] },
  { title: "Oh my Emperor", dimensions: ["Overworld"] },
  { title: "Arsenal Military Academy", dimensions: ["Nether"] },
  { title: "Reset", dimensions: ["Overworld"] },
  { title: "Attack on Titan", dimensions: ["End"] },
  {
    title: "Shiboyugi: Playing Death Games to Put Food on the Table",
    dimensions: ["Nether"],
  },
];

const Series = () => {
  const [selectedDimension, setSelectedDimension] = useState("Wszystkie");
  const [search, setSearch] = useState("");

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
            onChange={(e) => setSelectedDimension(e.target.value)}
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
            <li className="series-item" key={index}>
              {serie.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Series;
