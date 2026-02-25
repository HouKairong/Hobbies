import { useState } from "react";

const Books = () => {
  const [selectedSeries, setSelectedSeries] = useState(null);
  const [openBooks, setOpenBooks] = useState({});

  const books = {
    Wiedźmin: [
      {
        title: "Ostatnie życzenie",
        stories: [
          "Głos rozsądku",
          "Wiedźmin",
          "Ziarno prawdy",
          "Mniejsze zło",
          "Kwestia ceny",
          "Kraniec świata",
          "Ostatnie życzenie",
        ],
      },
      {
        title: "Miecz przeznaczenia",
        stories: [
          "Granica możliwości",
          "Okruch lodu",
          "Wieczny ogień",
          "Trochę poświęcenia",
          "Miecz przeznaczenia",
          "Coś więcej",
        ],
      },
      { title: "Krew elfów" },
      { title: "Czas pogardy" },
      { title: "Chrzest ognia" },
      { title: "Wieża Jaskółki" },
      { title: "Pani Jeziora" },
      { title: "Sezon Burz" },
      { title: "Rozdroże Kruków" },
      { title: "Droga z której się nie wraca" },
      { title: "Coś się kończy, coś się zaczyna" },
    ],

    "Pieśń Lodu i Ognia": [
      { title: "Gra o Tron" },
      { title: "Starcie Królów" },
      { title: "Nawałnica Mieczy" },
      { title: "Uczta dla Wron" },
      { title: "Taniec ze Smokami" },
      { title: "Ogień i Krew" },
      { title: "Rycerz Siedmiu Królestw" },
      { title: "Świat Lodu i Ognia" },
      { title: "Panowanie Smoka" },
      { title: "Księżniczka i Królowa" },
      { title: "Książę Łotrzyk" },
      { title: "Synowie Smoka" },
    ],

    "Sherlock Holmes": [
      { title: "Studium w szkarłacie" },
      { title: "Znak czterech" },
      {
        title: "Przygody Sherlocka Holmesa",
        stories: [
          "Skandal w Bohemii",
          "Związek rudowłosych",
          "Sprawa tożsamości",
          "Tragedia w Boscombe Valley",
          "Pięć pestek pomarańczy",
          "Człowiek z wywiniętą wargą",
          "Błękitny Karbunkuł",
          "Nakrapiana przepaska niesie śmierć",
          "Kciuk inżyniera",
          "Nobliwy kawaler",
          "Diadem z berylami",
          "Przygoda w Copper Beeches",
        ],
      },
      {
        title: "Wspomnienia Sherlocka Holmesa",
        stories: [
          "Srebrny Płomień",
          "Kartonowe pudełko",
          "Żółta twarz",
          "Urzędnik maklerski",
          "Gloria Scott",
          "Rytuał Musgrave’ów",
          "Dziedzice z Reigate",
          "Garbus",
          "Stały pacjent",
          "Grecki tłumacz",
          "Traktat morski",
          "Ostatnia zagadka",
        ],
      },
      { title: "Pies Baskerville'ów" },
      {
        title: "Powrót Sherlocka Holmesa",
        stories: [
          "Pusty dom",
          "Przedsiębiorca budowlany z Norwood",
          "Tańczące sylwetki",
          "Samotna cyklistka ",
          "Zniknięcie młodego lorda",
          "Czarny Piotr",
          "Charles Augustus Milverton",
          "Sześć popiersi Napoleona",
          "Trzej studenci",
          "Złote binokle",
          "Zaginiony sportowiec",
          "Abbey Grange",
          "Druga plama",
        ],
      },
      { title: "Dolina trwogi" },
      {
        title: "Pożegnalny ukłon",
        stories: [
          "Tajemnica Wisteria Lodge",
          "Kartonowe pudełko",
          "Sprawa Czerwonego Kręgu",
          "Plany Bruce-Partington",
          "Umierający detektyw",
          "Zniknięcie Lady Frances Carfax",
          "Sprawa diabelskiej stopy",
          "Pożegnalny ukłon",
        ],
      },

      {
        title: "Sprawy Sherlocka Holmesa",
        stories: [
          "Znamienity klient",
          "Żołnierz o bladym obliczu",
          "Klejnot z kolekcji kardynała Mazariniego",
          "Dom pod trzema daszkami",
          "Wampirzyca z hrabstwa Sussex",
          "O trzech panach Garrideb",
          "Zabójstwo przy moście",
          "Przypadek szalonego profesora",
          "Lwia grzywa",
          "Tajemnicza lokatorka",
          "Stary dwór Shoscombe",
          "Emerytowany sprzedawca farb",
        ],
      },
    ],
    "Książki o Chinach": [
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
        title: "Japonia, Chiny i Korea: O ludziach skłóonych na śmierć i życie",
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
        title: "Assassin's Creed Miecz Shao Jun",
        stories: ["Tom 1", "Tom 2", "Tom 3", "Tom 4"],
      },
    ],

    "Boska Komedia": [
      { title: "Inferno" },
      { title: "Czyściec" },
      { title: "Raj" },
    ],
    "Mitologia Nordycka": [],
    "Obrona Sokratesa": [],
  };

  const toggleSeries = (series) => {
    setSelectedSeries(selectedSeries === series ? null : series);
    setOpenBooks({}); // reset otwartych tomów przy zmianie serii
  };

  const toggleBook = (bookTitle) => {
    setOpenBooks((prev) => ({
      ...prev,
      [bookTitle]: !prev[bookTitle],
    }));
  };

  return (
    <div>
      <h2>Książki</h2>
      {/* Lista serii */}
      <ul>
        {Object.keys(books).map((series) => (
          <li
            key={series}
            onClick={() => toggleSeries(series)}
            style={{ cursor: "pointer", fontWeight: "bold" }}
          >
            {series}
          </li>
        ))}
      </ul>

      {/* Lista tomów */}
      {selectedSeries && (
        <div style={{ marginTop: "10px" }}>
          <h3>{selectedSeries}</h3>
          <ul>
            {books[selectedSeries].map((book) => (
              <li key={book.title}>
                <span
                  onClick={() => (book.stories ? toggleBook(book.title) : null)}
                  style={{
                    cursor: book.stories ? "pointer" : "default",
                  }}
                >
                  {book.title}
                </span>

                {/* Opowiadania */}
                {book.stories && openBooks[book.title] && (
                  <ul style={{ marginLeft: "20px" }}>
                    {book.stories.map((story) => (
                      <li key={story}>{story}</li>
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

export default Books;
