const works = [
  {
    title: "Boska Komedia",
    media: "Książki",
    themes: [
      "Etyka i moralność",
      "Wolna wola i determinizm",
      "Metafizyka / Symulacja",
      "Śmierć / Przemijanie",
      "Religia",
    ],
  },
  {
    title: "Obrona Sokratesa",
    media: "Książki",
    themes: ["Etyka i moralność", "Śmierć / Przemijanie", "Religia"],
  },
  {
    title: "Wiedźmin",
    media: "Książki",
    themes: [
      "Etyka i moralność",
      "Władza i polityka",
      "Wolna wola i determinizm",
      "Egzystencjalizm",
    ],
  },
  {
    title: "Pieśń Lodu i Ognia",
    media: "Książki",
    themes: ["Etyka i moralność", "Władza i polityka", "Nihilizm / Absurd"],
  },
  {
    title: "Mitologia nordycka",
    media: "Książki",
    themes: ["Religia", "Śmierć / Przemijanie", "Metafizyka / Symulacja"],
  },
  {
    title: "Daodejing",
    media: "Książki",
    themes: ["Religia", "Filozofia Wschodu"],
  },
  {
    title: "Taoizm: Wprowadzenie",
    media: "Książki",
    themes: ["Religia", "Filozofia Wschodu"],
  },
  {
    title: "Chiny: Przewodnik po herosach, smokach i świętych rzekach",
    media: "Książki",
    themes: ["Religia", "Filozofia Wschodu"],
  },
  {
    title: "Siódma pieczęć",
    media: "Filmy",
    themes: ["Egzystencjalizm", "Śmierć / Przemijanie", "Religia"],
  },
  {
    title: "Interstellar",
    media: "Filmy",
    themes: ["Egzystencjalizm", "Metafizyka / Symulacja"],
  },
  {
    title: "Avatar",
    media: "Filmy",
    themes: ["Egzystencjalizm", "Metafizyka / Symulacja"],
  },
  {
    title: "Persona 3 The Movie",
    media: "Filmy",
    themes: [
      "Tożsamość i świadomość",
      "Egzystencjalizm",
      "Śmierć / Przemijanie",
    ],
  },

  {
    title: "Wiedźmin",
    media: "Filmy",
    themes: [
      "Egzystencjalizm",
      "Wolna wola i determinizm",
      "Etyka i moralność",
      "Władza i polityka",
    ],
  },
  {
    title: "El Camino",
    media: "Filmy",
    themes: ["Wolna wola i determinizm"],
  },
  {
    title: "Death Note",
    media: "Filmy",
    themes: ["Nihilizm / Absurd", "Etyka i moralność"],
  },
  {
    title: "Constantine",
    media: "Filmy",
    themes: ["Metafizyka / Symulacja", "Religia"],
  },
  {
    title: "Pasja",
    media: "Filmy",
    themes: ["Śmierć / Przemijanie", "Religia"],
  },
  {
    title: "Noe: Wybrany przez Boga",
    media: "Filmy",
    themes: ["Śmierć / Przemijanie", "Religia"],
  },
  {
    title: "L'Inferno",
    media: "Filmy",
    themes: ["Śmierć / Przemijanie", "Metafizyka / Symulacja", "Religia"],
  },
  {
    title: "Dante's Inferno: An Animated Epic",
    media: "Filmy",
    themes: ["Śmierć / Przemijanie", "Metafizyka / Symulacja", "Religia"],
  },
  {
    title: "Behemoth",
    media: "Filmy",
    themes: ["Nihilizm / Absurd", "Metafizyka / Symulacja"],
  },
  {
    title: "Przyczajony Tygrys, Ukryty Smok",
    media: "Filmy",
    themes: ["Metafizyka / Symulacja", "Filozofia Wschodu"],
  },
  {
    title: "Spirited Away: W Krainie Bogów",
    media: "Filmy",
    themes: ["Filozofia Wschodu"],
  },
  {
    title: "Rower z Pekinu",
    media: "Filmy",
    themes: ["Filozofia Wschodu"],
  },
  {
    title: "Gwiezdne wojny",
    media: "Filmy",
    themes: ["Wolna wola i determinizm", "Egzystencjalizm"],
  },
  {
    title: "Między piekłem a niebem",
    media: "Filmy",
    themes: ["Śmierć / Przemijanie", "Egzystencjalizm"],
  },
  {
    title: "Niebo istnieje... naprawdę",
    media: "Filmy",
    themes: ["Śmierć / Przemijanie", "Egzystencjalizm"],
  },
  {
    title: "Wszystkie psy idą do Nieba",
    media: "Filmy",
    themes: ["Śmierć / Przemijanie"],
  },
  {
    title: "Hellraiser",
    media: "Filmy",
    themes: [
      "Metafizyka / Symulacja",
      "Śmierć / Przemijanie",
      "Nihilizm / Absurd",
      "Egzystencjalizm",
    ],
  },
  { title: "Konfucjusz", media: "Filmy", themes: ["Filozofia Wschodu"] },
  {
    title: "Jako w piekle, tak i na ziemi",
    media: "Filmy",
    themes: [
      "Śmierć / Przemijanie",
      "Nihilizm / Absurd",
      "Tożsamość i świadomość",
    ],
  },
  {
    title: "Norymberga",
    media: "Filmy",
    themes: ["Nihilizm / Absurd", "Etyka i moralność"],
  },
  {
    title: "Czas Apokalipsy",
    media: "Filmy",
    themes: ["Nihilizm / Absurd", "Etyka i moralność"],
  },
  {
    title: "Wiking",
    media: "Filmy",
    themes: ["Nihilizm / Absurd", "Etyka i moralność"],
  },
  {
    title: "Władca Pierścieni",
    media: "Filmy",
    themes: ["Tożsamość i świadomość"],
  },
  {
    title: "Hobbit",
    media: "Filmy",
    themes: ["Tożsamość i świadomość"],
  },
  {
    title: "Matrix",
    media: "Filmy",
    themes: [
      "Metafizyka / Symulacja",
      "Wolna wola i determinizm",
      "Egzystencjalizm",
    ],
  },
  {
    title: "Heretyk",
    media: "Filmy",
    themes: ["Religia", "Etyka i moralność", "Wolna wola i determinizm"],
  },
  {
    title: "Jojo Rabbit",
    media: "Filmy",
    themes: ["Etyka i moralność", "Nihilizm / Absurd", "Władza i polityka"],
  },
  {
    title: "Sokrates",
    media: "Filmy",
    themes: ["Etyka i moralność", "Religia", "Śmierć / Przemijanie"],
  },
];

import { useState } from "react";
const mediaOptions = ["Gry", "Seriale", "Filmy", "Książki"];

const Philosophy = () => {
  const [openMainSection, setOpenMainSection] = useState(null); // "media", "podcasty", null
  const [openSection, setOpenSection] = useState(null); // sekcje tematyczne w Media
  const [selectedMedia, setSelectedMedia] = useState([...mediaOptions]);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const toggleMediaOption = (media) => {
    if (selectedMedia.includes(media)) {
      setSelectedMedia(selectedMedia.filter((m) => m !== media));
    } else {
      setSelectedMedia([...selectedMedia, media]);
    }
  };

  const allThemes = [...new Set(works.flatMap((w) => w.themes))];

  return (
    <div className="philosophy">
      {/* Główne przyciski */}
      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={() =>
            setOpenMainSection(openMainSection === "media" ? null : "media")
          }
          style={{ cursor: "pointer", marginRight: "10px" }}
        >
          Media
        </button>
        <button
          onClick={() =>
            setOpenMainSection(
              openMainSection === "podcasty" ? null : "podcasty",
            )
          }
          style={{ cursor: "pointer" }}
        >
          Podcasty
        </button>
      </div>

      {/* Sekcja Media */}
      {openMainSection === "media" && (
        <>
          {/* Checkboxy filtrujące media */}
          <div style={{ marginBottom: "20px" }}>
            {mediaOptions.map((media) => (
              <label key={media} style={{ marginRight: "15px" }}>
                <input
                  type="checkbox"
                  checked={selectedMedia.includes(media)}
                  onChange={() => toggleMediaOption(media)}
                />{" "}
                {media}
              </label>
            ))}
          </div>

          {/* Sekcje motywów */}
          {allThemes.map((theme) => {
            const filteredWorks = works.filter(
              (w) =>
                w.themes.includes(theme) && selectedMedia.includes(w.media),
            );

            if (filteredWorks.length === 0) return null;

            return (
              <div key={theme}>
                <h3
                  onClick={() => toggleSection(theme)}
                  style={{ cursor: "pointer" }}
                >
                  {theme}
                </h3>
                {openSection === theme && (
                  <ul>
                    {filteredWorks.map((w, index) => (
                      <li key={index}>
                        {w.title} ({w.media})
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </>
      )}

      {/* Sekcja Podcasty */}
      {openMainSection === "podcasty" && (
        <div>
          <p>
            Tu w przyszłości możesz dodać listę podcastów z motywami
            filozoficznymi.
          </p>
        </div>
      )}
    </div>
  );
};

export default Philosophy;
