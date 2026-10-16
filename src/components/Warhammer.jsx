import { useState } from "react";
import WarhammerWallpaper from "/images/Warhammer.jpg";
import "./Warhammer.css";

const warhammerSections = [
  {
    title: "Gry",
    items: [
      {
        name: "Warhammer 40,000: Dawn of War",
        description:
          "Strategia czasu rzeczywistego, która pokazuje brutalną politykę i walkę o przeżycie w świecie zdominowanym przez wojny i fanatyzm.",
      },
      {
        name: "Warhammer 40,000: Space Marine",
        description:
          "Akcja w stylu ciężkiego, brutalnego frontu, gdzie Space Marine staje w obliczu zmasakrowanego świata i przerażających hord Chaosu.",
      },
      {
        name: "Warhammer 40,000: Space Marine 2",
        description:
          "Nowocześniejsza, szybsza odsłona, która dalej rozwija temat heroizmu i kosmicznej przemocy Imperium.",
      },
      {
        name: "Warhammer 40,000: Boltgun",
        description:
          "Oldschoolowy shooter, który oddaje klimat nieubłaganej, krwawej wojny w najczystszej formie.",
      },
    ],
  },
  {
    title: "Frakcje",
    items: [
      {
        name: "Imperium Ludzkości",
        description:
          "Świat w opresji: fanatyzm, wiara, terror i wojna. Imperium to zarówno obrońca ludzkości, jak i największy tyran w galaktyce.",
      },
      {
        name: "Chaos",
        description:
          "Żywioł nieokiełznanej agresji, szaleństwa i pragnienia mocniejszego, bardziej niszczycielskiego porządku niż ten, który istnieje teraz.",
      },
      {
        name: "Eldar",
        description:
          "Starożytna rasa pełna elegancji, tajemnicy i desperacji. Ich kultura jest piękna, ale równocześnie przegrana z upływem czasu.",
      },
      {
        name: "Orkowie",
        description:
          "Najbardziej destrukcyjna i bezwzględna rasa w galaktyce. Ich wojna nie ma sensu, ale jest nieprzerwana i absolutnie nie do zatrzymania.",
      },
    ],
  },
  {
    title: "Motywy",
    items: [
      {
        name: "Fanatyzm i władza",
        description:
          "W Warhammerze nie ma miejsca na zwykłe dobro i zło. Wszystko rozbija się o ideologie, przemoc i pragnienie dominacji.",
      },
      {
        name: "Śmierć i przeznaczenie",
        description:
          "Każdy świat jest skazany. Każda bitwa jest absurdalna, a jednocześnie nieunikniona. To raczej kosmiczna tragedia niż klasyczna przygoda.",
      },
      {
        name: "Piekło ludzkości",
        description:
          "To nie jest świat przyszłości. To świat, w którym nawet zwycięstwo jest już w chwili narodzin skazane na zniszczenie.",
      },
    ],
  },
];

const Warhammer = () => {
  const [openSection, setOpenSection] = useState("Gry");

  return (
    <div className="warhammer-wrapper">
      <div className="warhammer-container">
        <h2 className="warhammer-title">Warhammer 40,000</h2>

        <p className="warhammer-intro">
          To świat, w którym ludzkość wkracza w kosmos, a następnie zapada się w
          fanatyzm, śmierć i bezkresne wojny. Warhammer 40,000 nie jest miejsce
          na zwykłe opowieści o bohaterach – to pejzaż przeznaczenia,
          zniszczenia i absolutnego przetrwania.
        </p>

        <div className="warhammer-sections">
          {warhammerSections.map((section) => {
            const isOpen = openSection === section.title;

            return (
              <div key={section.title} className="warhammer-card">
                <button
                  className="warhammer-toggle"
                  onClick={() => setOpenSection(isOpen ? null : section.title)}
                >
                  {isOpen ? "▼" : "▶"} {section.title}
                </button>

                {isOpen && (
                  <ul className="warhammer-list">
                    {section.items.map((item) => (
                      <li key={item.name} className="warhammer-item">
                        <strong>{item.name}</strong>
                        <span>{item.description}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Warhammer;
