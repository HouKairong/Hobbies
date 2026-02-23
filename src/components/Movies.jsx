import { useState } from "react";

const Movies = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [openSubgroup, setOpenSubgroup] = useState(null);
  const [openSeries, setOpenSeries] = useState(null);

  const movies = {
    Gry: [
      {
        title: "Wiedźmin",
        parts: [
          "Wiedźmin (2001)",
          "Wiedźmin: Zmora Wilka (2021)",
          "Wiedźmin: Syreny z głębin (2025)",
          "Szczury: Opowieści ze świata Wiedźmina (2025)",
        ],
      },
      { title: "Assassin's Creed (2016)" },
      {
        title: "DOOM",
        parts: ["DOOM (2005)", "DOOM: Anihilacja (2019)"],
      },
      {
        title: "Lara Croft",
        parts: [
          "Tomb Raider (2001)",
          "Kolebka życia (2003)",
          "Tomb Raider (2018)",
        ],
      },
      { title: "LEGO Ninjago Film (2017)" },
      {
        title: "Harry Potter",
        parts: [
          "Kamień Filozoficzny",
          "Komnata Tajemnic",
          "Więzień Azkabanu",
          "Czara Ognia",
          "Zakon Feniksa",
          "Książę Półkrwi",
          "Insygnia Śmierci cz.1",
          "Insygnia Śmierci cz.2",
        ],
      },
      {
        title: "Jak Wytresować Smoka",
        parts: ["Część 1", "Część 2", "Część 3"],
      },
      {
        title: "Gwiezdne wojny",
        parts: [
          "Mroczne Widmo",
          "Atak klonów",
          "Zemsta Sithów",
          "Nowa Nadzieja",
          "Imperium kontratakuje",
          "Powrót Jedi",
          "Przebudzenie Mocy",
          "Ostatni Jedi",
          "Skywalker: Odrodzenie",
        ],
      },
      {
        title: "Sherlock Holmes",
        parts: ["Sherlock Holmes", "Gra cieni"],
      },
      {
        title: "Persona 3 The Movie",
        parts: [
          "#1 Spring of Birth",
          "#2 Midsummer Knight's Dream",
          "#3 Falling Down",
          "#4 Winter of Rebirth",
        ],
      },
      {
        title: "Epoka Lodowcowa",
        parts: [
          "Część 1",
          "Odwilż",
          "Era Dinozaurów",
          "Wędrówka Kontynentów",
          "Mocne Uderzenie",
        ],
      },
      { title: "Dante's Inferno: An Animated Epic" },
      {
        title: "Madagaskar",
        parts: ["Część 1", "Część 2", "Część 3", "Pingwiny z Madagaskaru"],
      },
      {
        title: "Kung Fu Panda",
        parts: ["Część 1", "Część 2", "Część 3", "Część 4"],
      },
      { title: "Herkules" },
      { title: "Aladyn" },
      { title: "Król Lew" },
      { title: "Super Mario Bros" },
    ],

    Seriale: [
      {
        title: "Wiedźmin",
        parts: [
          "Wiedźmin (2001)",
          "Wiedźmin: Zmora Wilka (2021)",
          "Wiedźmin: Syreny z głębin (2025)",
          "Szczury: Opowieści ze świata Wiedźmina (2025)",
        ],
      },
      {
        title: "Jak Wytresować Smoka",
        parts: ["Część 1", "Część 2", "Część 3"],
      },
      { title: "El Camino" },
      {
        title: "Sherlock Holmes",
        parts: ["Sherlock Holmes", "Gra cieni"],
      },
      {
        title: "Persona 3 The Movie",
        parts: [
          "#1 Spring of Birth",
          "#2 Midsummer Knight's Dream",
          "#3 Falling Down",
          "#4 Winter of Rebirth",
        ],
      },
      {
        title: "Madagaskar",
        parts: ["Część 1", "Część 2", "Część 3", "Pingwiny z Madagaskaru"],
      },
      {
        title: "Kung Fu Panda",
        parts: ["Część 1", "Część 2", "Część 3", "Część 4"],
      },
      { title: "LEGO Ninjago Film (2017)" },
      { title: "Death Note" },
      { title: "Avatar: Ostatni Władca Wiatru" },
      { title: "Herkules" },
    ],

    Chiny: [
      {
        title: "Kung Fu Panda",
        parts: ["Część 1", "Część 2", "Część 3", "Część 4"],
      },
      {
        title: "Ne Zha",
        parts: ["Ne Zha", "Ne Zha 2"],
      },
      { title: "Małpi Król" },
      { title: "Wielki Mur" },
      {
        title: "Mulan",
        parts: ["Mulan", "Mulan 2", "Live Action"],
      },
      { title: "Rower z Pekinu" },
      { title: "Spirited Away: W Krainie Bogów" },
      { title: "K-Popowe Łowczynie Demonów" },
      { title: "LEGO Ninjago: Film" },
      { title: "Raya i Ostatni Smok" },
      { title: "Behemoth" },
      {
        title: "Przyczajony Tygrys, Ukryty Smok",
        parts: [
          "Przyczajony Tygrys, Ukryty Smok",
          "Przyczajony Tygrys, Ukryty Smok: Miecz Przeznaczenia",
        ],
      },
      { title: "The Yinyang Master" },
      { title: "Konfucjusz" },
    ],

    BoskaKomedia: {
      PiekłoListaA: [
        { title: "L'Inferno" },
        { title: "Dante's Inferno: An Animated Epic" },
        { title: "Behemoth" },
        { title: "DOOM", parts: ["DOOM", "DOOM: Anihilacja"] },
        { title: "Jako w piekle, tak i na ziemi" },
        { title: "Norymberga" },
        { title: "Czas Apokalipsy" },
        {
          title: "Hellraiser",
          parts: [
            "Hellraiser: Wysłannik piekieł",
            "Hellraiser: Wysłannik piekieł II",
            "Hellraiser III: Piekło na ziemi",
            "Hellraiser IV: Dziedzictwo krwi",
            "Hellraiser V: Wrota piekieł",
            "Hellraiser: Droga do piekła",
            "Hellraiser: Sekta",
            "Hellraiser: Hellworld.com",
            "Hellraiser: Revelations",
            "Hellraiser: Judgment",
            "Hellraiser ",
          ],
        },
        { title: "Constantine" },
      ],

      PiekłoListaB: [
        { title: "L'Inferno" },
        { title: "Dante's Inferno: An Animated Epic" },
        { title: "Behemoth" },
        { title: "DOOM", parts: ["DOOM", "DOOM: Anihilacja"] },
        { title: "Jako w piekle, tak i na ziemi" },
        { title: "Minecraft: Film" },
        { title: "Trylogia Dana Browna" },
        {
          title: "Hellraiser",
          parts: [
            "Hellraiser: Wysłannik piekieł",
            "Hellraiser: Wysłannik piekieł II",
            "Hellraiser III: Piekło na ziemi",
            "Hellraiser IV: Dziedzictwo krwi",
            "Hellraiser V: Wrota piekieł",
            "Hellraiser: Droga do piekła",
            "Hellraiser: Sekta",
            "Hellraiser: Hellworld.com",
            "Hellraiser: Revelations",
            "Hellraiser: Judgment",
            "Hellraiser ",
          ],
        },
        { title: "Constantine" },
      ],

      Czyściec: [
        { title: "Wiedźmin" },
        { title: "Dzwonnik z Notre Dame", parts: ["Część 1", "Część 2"] },
        { title: "Ostatni Pojedynek" },
        {
          title: "Śródziemie",
          parts: [
            "Władca Pierścieni: Drużyna Pierścienia",
            "Władca Pierścieni: Dwie Wieże",
            "Władca Pierścieni: Powrót Króla",
            "Hobbit: Niezwykła Podróż",
            "Hobbit: Pustkowie Smauga",
            "Hobbit: Bitwa Pięciu Armii",
            "Władca Pierścieni: Wojna Rohirrimów",
          ],
        },
        { title: "Siódma pieczęć" },
        { title: "Wiking" },
        { title: "Czarownica: Bajka ludowa z Nowej Anglii" },
      ],

      Niebo: [
        { title: "Między piekłem a niebem" },
        { title: "Niebo istnieje... naprawdę" },
        { title: "Wszystkie psy idą do Nieba" },
        { title: "Herkules" },
        {
          title: "Starcie Tytanów",
          parts: ["Starcie Tytanów", "Zemsta Tytanów"],
        },
        { title: "Pasja" },
        { title: "Noe: Wybrany przez Boga" },
        {
          title: "Avatar",
          parts: ["Avatar", "Avatar: Istota wody", "Avatar: Ogień i popiół"],
        },
        { title: "Interstellar" },
        {
          title: "Gwiezdne wojny",
          parts: [
            "Mroczne Widmo",
            "Atak klonów",
            "Zemsta Sithów",
            "Nowa Nadzieja",
            "Imperium kontratakuje",
            "Powrót Jedi",
            "Przebudzenie Mocy",
            "Ostatni Jedi",
            "Skywalker: Odrodzenie",
          ],
        },
      ],
    },

    Filozofia: [],
  };

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    setOpenSubgroup(null);
    setOpenSeries(null);
  };

  const toggleSubgroup = (group) => {
    setOpenSubgroup(openSubgroup === group ? null : group);
    setOpenSeries(null);
  };

  const toggleSeries = (title) => {
    setOpenSeries(openSeries === title ? null : title);
  };

  const isBoskaKomedia = selectedCategory === "BoskaKomedia";

  return (
    <div>
      <label>
        Wybierz licencję:
        <select
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
        >
          <option value="" disabled hidden>
            Wybierz licencję
          </option>

          {Object.keys(movies).map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>

      {selectedCategory && !isBoskaKomedia && (
        <ul>
          {movies[selectedCategory].map((item) => (
            <li key={item.title}>
              <span
                onClick={() => (item.parts ? toggleSeries(item.title) : null)}
                style={{
                  cursor: item.parts ? "pointer" : "default",
                }}
              >
                {item.title}
              </span>

              {item.parts && openSeries === item.title && (
                <ul style={{ marginLeft: "20px" }}>
                  {item.parts.map((part) => (
                    <li key={part}>{part}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}

      {isBoskaKomedia && (
        <div>
          {Object.keys(movies.BoskaKomedia).map((group) => (
            <div key={group}>
              <h3
                onClick={() => toggleSubgroup(group)}
                style={{ cursor: "pointer" }}
              >
                {group}
              </h3>

              {openSubgroup === group && (
                <ul>
                  {movies.BoskaKomedia[group].map((item) => (
                    <li key={item.title}>
                      <span
                        onClick={() =>
                          item.parts ? toggleSeries(group + item.title) : null
                        }
                        style={{ cursor: item.parts ? "pointer" : "default" }}
                      >
                        {item.title}
                      </span>

                      {item.parts && openSeries === group + item.title && (
                        <ul style={{ marginLeft: "20px" }}>
                          {item.parts.map((part) => (
                            <li key={part}>{part}</li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Movies;
