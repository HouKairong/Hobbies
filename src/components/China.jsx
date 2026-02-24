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
          "Kung Fu Panda 2",
          "Kung Fu Panda 3",
          "Kung Fu Panda 4",
        ],
      },
      { title: "Mulan", subitems: ["Mulan 1", "Mulan 2", "Mulan Live Action"] },
      {
        title: "Przyczajony Tygrys, Ukryty Smok",
        subitems: ["Miecz Przeznaczenia"],
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
          "Cesarzowa wdowa Cixi: Konkubin która stworzyła współczesne Chiny",
      },
      { title: "Historia Kościoła w Chinach" },
      { title: "Daodejing" },
      { title: "Ocalała z chińskiego gułagu" },
    ],
    Filozofia: [
      { title: "Konfucjanizm" },
      { title: "Taoizm" },
      { title: "Legalizm" },
      { title: "Mohizm" },
      { title: "Szkoła Yin-Yang i Pięciu Przemian" },
      { title: "Buddyzm chiński" },
    ],
    "Inne Azjatyckie": [
      {
        title: "Gry",
        subitems: ["Ghost of Tsushima", "Ghost of Yotei", "Sekiro"],
      },
      {
        title: "Seriale",
        subitems: [
          "Alice in Borderland",
          "Squid Game",
          "All of Us are Dead",
          "Sweet Home",
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
        ],
      },
      {
        title: "Inne Anime",
        subitems: [
          "Deathnote",
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
        ],
      },
    ],
  };

  const toggleCategory = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
    setOpenItems({});
  };

  const toggleItem = (itemTitle) => {
    setOpenItems((prev) => ({
      ...prev,
      [itemTitle]: !prev[itemTitle],
    }));
  };

  return (
    <div>
      <h2>Chiny</h2>
      <ul>
        {Object.keys(chinaTopics).map((category) => (
          <li
            key={category}
            onClick={() => toggleCategory(category)}
            style={{ cursor: "pointer", fontWeight: "bold" }}
          >
            {category}
          </li>
        ))}
      </ul>

      {selectedCategory && (
        <div style={{ marginTop: "10px" }}>
          <h3>{selectedCategory}</h3>
          <ul>
            {chinaTopics[selectedCategory].map((item) => (
              <li key={item.title}>
                <span
                  onClick={() => item.subitems && toggleItem(item.title)}
                  style={{ cursor: item.subitems ? "pointer" : "default" }}
                >
                  {item.title}
                </span>
                {item.subitems && openItems[item.title] && (
                  <ul style={{ marginLeft: "20px" }}>
                    {item.subitems.map((sub) => (
                      <li key={sub}>{sub}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default China;
