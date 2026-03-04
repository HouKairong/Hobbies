import "./China.css";
import { useState } from "react";

const China = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [openItems, setOpenItems] = useState({});

  const chinaTopics = {
    "Nauka języka chińskiego": [
      { title: "Spotkania z Xiaohan" },
      { title: "Studiowanie sinologii" },
    ],
    Wyjazdy: [{ title: "Wyjazd do Chin" }, { title: "Wyjazd do Tajwanu" }],
    Gry: [
      {
        title: "Black Myth: Wukong",
      },
      {
        title: "Kung Fu Panda",
      },
      { title: "Total War: Three Kingdoms" },
      { title: "GuJian", subitems: ["GuJian 1", "GuJian 2", "GuJian 3"] },
      { title: "Wuchang: Fallen Feathers" },
      { title: "Where Winds Meet" },
    ],
    Seriale: [
      { title: "Dziesięć mil kwitnących brzoskwiń (Eternal Love)" },
      { title: "Eternal Love of dream" },
      { title: "Love and Destiny" },
      { title: "The Untamed" },
      { title: "Wu Xin the Monster Killer" },
      { title: "Nirvana in Fire" },
      { title: "Young Sherlock" },
      { title: "The Long Ballad" },
      { title: "Oh My Emperor" },
      { title: "Arsenal Military Academy" },
      { title: "Reset" },
      {
        title: "Kung Fu Panda Seriale",
        subitems: [
          "Legenda o niezwykłości",
          "Łapy przeznaczenia",
          "Smoczy rycerz",
        ],
      },
    ],
    Filmy: [
      {
        title: "Ne Zha",
        subitems: ["Ne Zha 1", "Ne Zha 2: W krainie potworów"],
      },
      {
        title: "Kung Fu Panda Filmy",
        subitems: [
          "Kung Fu Panda 1",
          "Sekrety Potężnej Piątki",
          "Święta, święta i Po",
          "Kung Fu Panda 2",
          "Sekrety Mistrzów",
          "Tajemnice Zwoju",
          "Kung Fu Panda 3",
          "Panda Paws",
          "Kung Fu Panda 4",
          "Dueling Dumplings",
        ],
      },
      { title: "Mulan", subitems: ["Mulan 1", "Mulan 2", "Mulan Live Action"] },
      {
        title: "Przyczajony Tygrys, Ukryty Smok",
        subitems: [
          "Przyczajony Tygrys, Ukryty Smok",
          "Przyczajony Tygrys, Ukryty Smok: Miecz Przeznaczenia",
        ],
      },
      { title: "Małpi Król" },
      { title: "Wielki Mur" },
      { title: "Rower z Pekinu" },
      { title: "Behemoth" },
      { title: "The Yinyang Master" },
      { title: "Konfucjusz" },
      { title: "Historia Chin" },
    ],
    Książki: [
      { title: "Chiny bez makijażu" },
      { title: "Czerwony cesarz: Xi Jinping i jego Nowe Chiny" },
      { title: "Taoizm: Wprowadzenie" },
      { title: "Baśnie chińskie" },
      {
        title:
          "Prowadzący umarłych: Opowieści prawdziwe Chiny z perspektywy nizin społecznych",
      },
      { title: "Tajwan: Herbatka na beczce prochu" },
      {
        title:
          "Japonia, Chiny i Korea: O ludziach skłóconych na śmierć i życie",
      },
      { title: "Chiny: Przewodnik po herosach, smokach i świętych rzekach" },
      { title: "Chiny: Portret cywilizacji i narodu" },
      {
        title:
          "Cesarzowa wdowa Cixi: Konkubina która stworzyła współczesne Chiny",
      },
      { title: "Historia Kościoła w Chinach" },
      { title: "Daodejing" },
      { title: "Ocalała z chińskiego gułagu" },
      {
        title: "Assassin's Creed: Miecz Shao Jun",
        subitems: ["Tom 1", "Tom 2", "Tom 3", "Tom 4"],
      },
    ],
    Filozofia: [
      { title: "Konfucjanizm" },
      { title: "Taoizm" },
      { title: "Legalizm" },
      { title: "Mohizm" },
      { title: "Szkoła Yin-Yang i Pięciu Przemian" },
      { title: "Buddyzm chiński" },
    ],
    Historia: [
      { title: "Prehistoria" },
      { title: "Dynastia Shang i wczesna epoka brązu" },
      { title: "Dynastia Zhou" },
      { title: "Dynastia Qin (221–207 p.n.e.)" },
      { title: "Dynastia Han (206 p.n.e.–220 n.e.)" },
      { title: "Okres Rozbicia (220-589)" },
      { title: "Dynastia Sui (581–618)" },
      { title: "Dynastia Tang (618–907)" },
      { title: "Pięć Dynastii i Dziesięć Królestw (907–960)" },
      { title: "Dynastia Song (960–1279)" },
      { title: "Dynastia Yuan (1279–1368)" },
      { title: "Dynastia Ming (1368–1644)" },
      { title: "Dynastia mandżurska Qing (1644–1911)" },
      { title: "Republika Chińska (1911 - obecnie)" },
      { title: "Chińska Republika Ludowa (1949 - obecnie)" },
    ],
    "Inne Azjatyckie": [
      {
        title: "Gry",
        subitems: [
          "Ghost of Tsushima",
          "Ghost of Yotei",
          "Sekiro: Shadows Die Twice",
          "Might and Magic: Heroes 6 (Kampania Świątyni",
          "Kangurek Kao (Etap azjatycki)",
          "LEGO Ninjago Film Gra",
          "Age of Empires (Kampania Japonii)",
          "Super Mario Odyssey (Bowser's Kingdom)",
        ],
      },
      {
        title: "Seriale",
        subitems: [
          "Alice in Borderland",
          "Squid Game",
          "All of Us are Dead",
          "Sweet Home",
          "Ninjago",
        ],
      },
      {
        title: "Anime/Persona",
        subitems: [
          "Persona 3 Reload",
          "Persona 3 Portable",
          "Persona 3 Dancing in The Moonlight",
          "Persona 4 Golden",
          "Persona 4 Arena",
          "Persona 4 Dancing all Night",
          "Persona 5 Royal",
          "Persona 5 Strikers",
          "Persona 5 Tactica",
          "Persona 5 The Phantom X",
          "Persona 5 Dancing in The Starlight",
          "Persona Q",
          "Persona Q2",
          "Persona 3 The Movie #1 Spring of Birth",
          "Persona 3 The Movie #2 Midsummer Knight's Dream",
          "Persona 3 The Movie #3 Falling Down",
          "Persona 3 The Movie #4 Winter of Rebirth",
          "Persona Trinity Soul",
          "Persona 4 The Animation",
          "Persona 4 Golden The Animation",
          "Persona 5 The Animation",
        ],
      },
      {
        title: "Inne Anime",
        subitems: [
          "Death Note",
          "Seven Deadly Sins",
          "One Punch Man",
          "Gakkou Gurashi",
          "Kakegurui",
          "Kakegurui Twin",
          "High-Rise Invasion",
          "Devilman Crybaby",
          "Devil May Cry",
          "Devil May Cry Netflix",
          "Attack on Titan",
          "Shiboyugi: Playing Death Games to Put Food on the Table",
          "Spirited Away: W krainie bogów",
        ],
      },
      {
        title: "Filmy",
        subitems: [
          "LEGO Ninjago Film",
          "K-Popowe Łowczynie Demonów",
          "Raya i Ostatni Smok",
        ],
      },
    ],
  };

  const toggleCategory = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
    setOpenItems({});
  };

  const toggleItem = (itemTitle) => {
    setOpenItems((prev) => ({ ...prev, [itemTitle]: !prev[itemTitle] }));
  };

  return (
    <div className="china-wrapper">
      <div className="china-container">
        <h2 className="china-title">Chiny</h2>

        <ul className="china-categories">
          {Object.keys(chinaTopics).map((category) => (
            <li
              key={category}
              className="china-category"
              onClick={() => toggleCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>

        {selectedCategory && (
          <div className="china-items-section">
            <h3 className="china-subtitle">{selectedCategory}</h3>
            <ul className="china-items-list">
              {chinaTopics[selectedCategory].map((item) => (
                <li key={item.title} className="china-item">
                  <span
                    className={`china-item-title ${item.subitems ? "clickable" : ""}`}
                    onClick={() => item.subitems && toggleItem(item.title)}
                  >
                    {item.title}
                  </span>
                  {item.subitems && openItems[item.title] && (
                    <ul className="china-subitems-list">
                      {item.subitems.map((sub) => (
                        <li key={sub} className="china-subitem">
                          {sub}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default China;
