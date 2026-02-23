import { useState } from "react";

const Movies = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const movies = {
    Gry: [
      "Wiedźmin (2001)",
      "Wiedźmin: Zmora Wilka (2021)",
      "Wiedźmin: Syreny z głębin (2025)",
      "Szczury: Opowieści ze świata Wiedźmina (2025)",
      "Assassin's Creed (2016)",
      "DOOM (2005)",
      "DOOM: Anihilacja (2019)",
      "Lara Croft: Tomb Raider (2001)",
      "Lara Croft Tomb Raider: Kolebka życia (2003)",
      "Tomb Raider (2018)",
      "LEGO Ninjago Film (2017)",
      "Harry Potter i Kamień Filozoficzny",
      "Harry Potter i Komnata Tajemnic",
      "Harry Potter i Więzień Azkabanu",
      "Harry Potter i Czara Ognia",
      "Harry Potter i Zakon Feniksa",
      "Harry Potter i Książę Półkrwi",
      "Harry Potter i Insygnia Śmierci część 1",
      "Harry Potter i Insygnia Śmierci część 2",
      "Jak Wytresować Smoka",
      "Jak wytresować Smoka 2",
      "Jak wytresować Smoka 3",
      "Jak wytresować Smoka",
      "Gwiezdne Wojny: Mroczne Widmo",
      "Gwiezdne Wojny: Atak klonów",
      "Gwiezdne Wojny: Zemsta Sithów",
      "Gwiezdne wojny: Nowa Nadzieja",
      "Gwiezdne Wojny: Imperium kontratakuje",
      "Gwiezdne Wojny: Powrót Jedi",
      "Gwiezdne Wojny: Przebudzenie Mocy",
      "Gwiezdne Wojny: Ostatni Jedi",
      "Gwiezdne Wojny: Skywalker: Odrodzenie",
      "Sherlock Holmes",
      "Sherlock Holmes: Gra cieni",
      "Persona 3 The Movie #1 Spring of Birth",
      "Persona 3 The Movie #2 Midsummer Knight's Dream",
      "Persona 3 The Movie #3 Falling Down",
      "Persona 3 The Movie #4 Winter of Rebirth",
      "Epoka Lodowcowa",
      "Epoka Lodowcowa 2 Odwilż",
      "Epoka Lodowcowa 3 Era Dinozaurów",
      "Epoka Lodowcowa 4 Wędrówka Kontynentów",
      "Epoka Lodowcowa 5 Mocne Uderzenie",
      "Dante's Inferno",
      "Madagaskar",
      "Madagaskar 2",
      "Madagaskar 3",
      "Pingwiny z Madagaskaru",
      "Kung Fu Panda",
      "Kung Fu Panda 2",
      "Kung Fu Panda 3",
      "Kung Fu Panda 4",
      "Herkules",
      "Aladyn",
      "Król Lew",
      "Super Mario Bros",
    ],
    Seriale: [
      "Wiedźmin (2001)",
      "Wiedźmin: Zmora Wilka (2021)",
      "Wiedźmin: Syreny z głębin (2025)",
      "Szczury: Opowieści ze świata Wiedźmina (2025)",
      "Jak Wytresować Smoka",
      "Jak wytresować Smoka 2",
      "Jak wytresować Smoka 3",
      "Jak wytresować Smoka",
      "El Camino",
      "Sherlock Holmes",
      "Sherlock Holmes: Gra cieni",
      "Persona 3 The Movie #1 Spring of Birth",
      "Persona 3 The Movie #2 Midsummer Knight's Dream",
      "Persona 3 The Movie #3 Falling Down",
      "Persona 3 The Movie #4 Winter of Rebirth",
      "Madagaskar",
      "Madagaskar 2",
      "Madagaskar 3",
      "Pingwiny z Madagaskaru",
      "Kung Fu Panda",
      "Kung Fu Panda 2",
      "Kung Fu Panda 3",
      "Kung Fu Panda 4",
      "LEGO Ninjago Film (2017)",
      "Death Note",
      "Avatar: Ostatni Władca Wiatru",
    ],
    Chiny: [
      "Kung Fu Panda",
      "Kung Fu Panda 2",
      "Kung Fu Panda 3",
      "Kung Fu Panda 4",
      "Ne Zha",
      "Ne Zha 2",
      "Małpi Król",
      "Wielki Mur",
      "Mulan",
      "Mulan 2",
      "Mulan",
      "Rower z Pekinu",
      "Spirited Away: W Krainie Bogów",
      "K-Popowe Łowczynie Demonów",
      "LEGO Ninjago: Film",
      "Persona 3 The Movie #1 Spring of Birth",
      "Persona 3 The Movie #2 Midsummer Knight's Dream",
      "Persona 3 The Movie #3 Falling Down",
      "Persona 3 The Movie #4 Winter of Rebirth",
      "Raya i Ostatni Smok",
      "Behemoth",
      "Przyczajony Tygrys, Ukryty Smok",
      "Przyczajony Tygrys, Ukryty Smok: Miecz Przeznaczenia",
      "The Yinyang Master",
    ],
    BoskaKomedia: [],
    Filozofia: [],
  };

  return (
    <div>
      <label>
        Wybierz licencję:
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {/* placeholder */}
          <option value="" disabled hidden>
            Wybierz licencję
          </option>

          {/* faktyczne opcje */}
          {Object.keys(movies).map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>

      {selectedCategory && (
        <ul>
          {movies[selectedCategory].map((movie) => (
            <li key={movie}>{movie}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movies;
