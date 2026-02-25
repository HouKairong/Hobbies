import { useState } from "react";
import "./Philosophy.css";

const Philosophy = () => {
  const works = [
    {
      title: "Boska Komedia",
      media: "Książki",
      isSeries: true,
      themes: [
        "Etyka i moralność",
        "Wolna wola i determinizm",
        "Metafizyka / Symulacja",
        "Śmierć / Przemijanie",
        "Religia",
        "Postać Sokratesa",
      ],
      children: [{ title: "Inferno" }, { title: "Czyściec" }, { title: "Raj" }],
    },
    {
      title: "Obrona Sokratesa",
      media: "Książki",
      themes: [
        "Etyka i moralność",
        "Śmierć / Przemijanie",
        "Religia",
        "Postać Sokratesa",
      ],
    },
    {
      title: "Wiedźmin",
      media: "Książki",
      isSeries: true,
      themes: [
        "Etyka i moralność",
        "Władza i polityka",
        "Wolna wola i determinizm",
        "Egzystencjalizm",
      ],
      children: [
        { title: "Ostatnie życzenie" },
        { title: "Miecz przeznaczenia" },
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
    },
    {
      title: "Pieśń Lodu i Ognia",
      media: "Książki",
      isSeries: true,
      themes: ["Etyka i moralność", "Władza i polityka", "Nihilizm / Absurd"],
      children: [
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
      title: "Assassin's Creed Miecz Shao Jun",
      media: "Książki",
      isSeries: true,
      themes: [
        "Wolna wola i determinizm",
        "Władza i polityka",
        "Tożsamość i świadomość",
        "Metafizyka / Symulacja",
        "Etyka i moralność",
        "Religia",
        "Filozofia Wschodu",
      ],
      children: [
        { title: "Tom 1" },
        { title: "Tom 2" },
        { title: "Tom 3" },
        { title: "Tom 4" },
      ],
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
      isSeries: true,
      themes: ["Egzystencjalizm", "Metafizyka / Symulacja"],
      children: [
        { title: "Avatar" },
        { title: "Avatar: Istota wody" },
        { title: "Avatar: Ogień i popiół" },
      ],
    },
    {
      title: "Persona 3 The Movie",
      media: "Filmy",
      isSeries: true,
      themes: [
        "Tożsamość i świadomość",
        "Egzystencjalizm",
        "Śmierć / Przemijanie",
      ],
      children: [
        { title: "#1 Spring of Birth" },
        { title: "#2 Midsummer Knight's Dream" },
        { title: "#3 Falling Down" },
        { title: "#4 Winter of Rebirth" },
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
      children: [
        { title: "Wiedźmin (2001)" },
        { title: "Wiedźmin: Zmora Wilka (2021)" },
        { title: "Wiedźmin: Syreny z głębin (2025)" },
        { title: "Szczury: Opowieści ze świata Wiedźmina (2025)" },
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
      isSeries: true,
      themes: ["Metafizyka / Symulacja", "Filozofia Wschodu"],
      children: [
        { title: "Przyczajony Tygrys, Ukryty Smok" },
        { title: "Przyczajony Tygrys, Ukryty Smok: Miecz Przeznaczenia" },
      ],
    },
    {
      title: "Spirited Away: W Krainie Bogów",
      media: "Filmy",
      themes: ["Filozofia Wschodu"],
    },
    { title: "Rower z Pekinu", media: "Filmy", themes: ["Filozofia Wschodu"] },
    {
      title: "Gwiezdne wojny",
      media: "Filmy",
      isSeries: true,
      themes: ["Wolna wola i determinizm", "Egzystencjalizm"],
      children: [
        { title: "Mroczne Widmo" },
        { title: "Atak klonów" },
        { title: "Zemsta Sithów" },
        { title: "Nowa Nadzieja" },
        { title: "Imperium kontratakuje" },
        { title: "Powrót Jedi" },
        { title: "Przebudzenie Mocy" },
        { title: "Ostatni Jedi" },
        { title: "Skywalker: Odrodzenie" },
      ],
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
      isSeries: true,
      themes: [
        "Metafizyka / Symulacja",
        "Śmierć / Przemijanie",
        "Nihilizm / Absurd",
        "Egzystencjalizm",
      ],
      children: [
        { title: "Hellraiser: Wysłannik piekieł" },
        { title: "Hellraiser: Wysłannik piekieł II" },
        { title: "Hellraiser III: Piekło na ziemi" },
        { title: "Hellraiser IV: Dziedzictwo krwi" },
        { title: "Hellraiser V: Wrota piekieł" },
        { title: "Hellraiser: Droga do piekła" },
        { title: "Hellraiser: Sekta" },
        { title: "Hellraiser: Hellworld.com" },
        { title: "Hellraiser: Revelations" },
        { title: "Hellraiser: Judgment" },
        { title: "Hellraiser" },
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
      isSeries: true,
      themes: ["Tożsamość i świadomość"],
      children: [
        { title: "Władca Pierścieni: Drużyna Pierścienia" },
        { title: "Władca Pierścieni: Dwie Wieże" },
        { title: "Władca Pierścieni: Powrót Króla" },
        { title: "Władca Pierścieni: Wojna Rohirrimów" },
      ],
    },
    {
      title: "Hobbit",
      media: "Filmy",
      isSeries: true,
      themes: ["Tożsamość i świadomość"],
      children: [
        { title: "Hobbit: Niezwykła Podróż" },
        { title: "Hobbit: Pustkowie Smauga" },
        { title: "Hobbit: Bitwa Pięciu Armii" },
      ],
    },
    {
      title: "Matrix",
      media: "Filmy",
      isSeries: true,
      themes: [
        "Metafizyka / Symulacja",
        "Wolna wola i determinizm",
        "Egzystencjalizm",
      ],
      children: [
        { title: "Matrix (1999)" },
        { title: "Matrix: Reaktywacja (2003)" },
        { title: "Matrix: Rewolucje (2003)" },
        { title: "Matrix: Zmartwychwstanie (2021)" },
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
      themes: [
        "Etyka i moralność",
        "Religia",
        "Śmierć / Przemijanie",
        "Postać Sokratesa",
      ],
    },
    {
      title: "Assassin's Creed",
      media: "Filmy",
      themes: [
        "Wolna wola i determinizm",
        "Władza i polityka",
        "Tożsamość i świadomość",
        "Metafizyka / Symulacja",
        "Etyka i moralność",
        "Religia",
      ],
    },
    {
      title: "Menu",
      media: "Filmy",
      themes: [
        "Etyka i moralność",
        "Nihilizm / Absurd",
        "Władza i polityka",
        "Metafizyka / Symulacja",
        "Wolna wola i determinizm",
      ],
    },
    {
      title: "Dzień Świra",
      media: "Filmy",
      themes: [
        "Egzystencjalizm",
        "Nihilizm / Absurd",
        "Tożsamość i świadomość",
        "Śmierć / Przemijanie",
      ],
    },
    {
      title: "Kot w butach: Ostatnie życzenie",
      media: "Filmy",
      themes: [
        "Egzystencjalizm",
        "Śmierć / Przemijanie",
        "Wolna wola i determinizm",
        "Tożsamość i świadomość",
        "Etyka i moralność",
        "Metafizyka / Symulacja",
      ],
    },
    {
      title: "Coco",
      media: "Filmy",
      themes: [
        "Śmierć / Przemijanie",
        "Tożsamość i świadomość",
        "Religia",
        "Etyka i moralność",
        "Egzystencjalizm",
      ],
    },
    {
      title: "Czarnobyl",
      media: "Seriale",
      themes: [
        "Etyka i moralność",
        "Władza i polityka",
        "Śmierć / Przemijanie",
      ],
    },
    {
      title: "Lucyfer",
      media: "Seriale",
      themes: ["Religia", "Wolna wola i determinizm", "Etyka i moralność"],
    },
    {
      title: "Wiedźmin (Netflix)",
      media: "Seriale",
      themes: [
        "Etyka i moralność",
        "Wolna wola i determinizm",
        "Władza i polityka",
        "Egzystencjalizm",
      ],
    },
    {
      title: "Gra o tron",
      media: "Seriale",
      themes: ["Władza i polityka", "Nihilizm / Absurd", "Etyka i moralność"],
    },
    {
      title: "Ród smoka",
      media: "Seriale",
      themes: [
        "Władza i polityka",
        "Wolna wola i determinizm",
        "Nihilizm / Absurd",
      ],
    },
    {
      title: "Death Note",
      media: "Seriale",
      themes: [
        "Etyka i moralność",
        "Nihilizm / Absurd",
        "Tożsamość i świadomość",
      ],
    },
    {
      title: "Cyberpunk Edgerunners",
      media: "Seriale",
      themes: [
        "Egzystencjalizm",
        "Nihilizm / Absurd",
        "Wolna wola i determinizm",
      ],
    },
    {
      title: "Squid Game",
      media: "Seriale",
      themes: ["Nihilizm / Absurd", "Etyka i moralność", "Władza i polityka"],
    },
    {
      title: "Breaking Bad",
      media: "Seriale",
      themes: [
        "Wolna wola i determinizm",
        "Etyka i moralność",
        "Tożsamość i świadomość",
      ],
    },
    {
      title: "Better Call Saul",
      media: "Seriale",
      themes: [
        "Wolna wola i determinizm",
        "Etyka i moralność",
        "Egzystencjalizm",
      ],
    },
    {
      title: "Persona 4 The Animation",
      media: "Seriale",
      themes: ["Tożsamość i świadomość", "Egzystencjalizm"],
    },
    {
      title: "Persona 5 The Animation",
      media: "Seriale",
      themes: [
        "Etyka i moralność",
        "Tożsamość i świadomość",
        "Wolna wola i determinizm",
      ],
    },
    {
      title: "Arcane",
      media: "Seriale",
      themes: ["Władza i polityka", "Etyka i moralność", "Egzystencjalizm"],
    },
    {
      title: "Ragnarok",
      media: "Seriale",
      themes: ["Religia", "Wolna wola i determinizm", "Śmierć / Przemijanie"],
    },
    {
      title: "Most nad Sundem",
      media: "Seriale",
      themes: ["Etyka i moralność", "Władza i polityka"],
    },
    {
      title: "The End of the F***ing World",
      media: "Seriale",
      themes: [
        "Nihilizm / Absurd",
        "Egzystencjalizm",
        "Tożsamość i świadomość",
      ],
    },
    {
      title: "Hannibal",
      media: "Seriale",
      themes: [
        "Etyka i moralność",
        "Tożsamość i świadomość",
        "Nihilizm / Absurd",
      ],
    },
    {
      title: "Wheel of Time",
      media: "Seriale",
      themes: ["Wolna wola i determinizm", "Religia", "Metafizyka / Symulacja"],
    },
    {
      title: "Supernatural",
      media: "Seriale",
      themes: ["Wolna wola i determinizm", "Religia", "Metafizyka / Symulacja"],
    },
    {
      title: "Hazbin Hotel",
      media: "Seriale",
      themes: ["Religia", "Etyka i moralność", "Nihilizm / Absurd"],
    },
    {
      title: "Wikingowie",
      media: "Seriale",
      themes: ["Religia", "Władza i polityka", "Śmierć / Przemijanie"],
    },
    {
      title: "Death Parade",
      media: "Seriale",
      themes: [
        "Etyka i moralność",
        "Śmierć / Przemijanie",
        "Tożsamość i świadomość",
      ],
    },
    {
      title: "Devilman Crybaby",
      media: "Seriale",
      themes: ["Nihilizm / Absurd", "Religia", "Egzystencjalizm"],
    },
    {
      title: "Dziesięć mil kwitnących brzoskwiń (Eternal Love)",
      media: "Seriale",
      themes: [
        "Wolna wola i determinizm",
        "Metafizyka / Symulacja",
        "Filozofia Wschodu",
      ],
    },
    {
      title: "Reset",
      media: "Seriale",
      themes: [
        "Wolna wola i determinizm",
        "Metafizyka / Symulacja",
        "Egzystencjalizm",
      ],
    },
    {
      title: "The Untamed",
      media: "Seriale",
      themes: ["Filozofia Wschodu", "Etyka i moralność", "Władza i polityka"],
    },
    {
      title: "Attack on Titan",
      media: "Seriale",
      themes: [
        "Wolna wola i determinizm",
        "Nihilizm / Absurd",
        "Egzystencjalizm",
        "Władza i polityka",
      ],
    },
    {
      title: "Gambit królowej",
      media: "Seriale",
      themes: ["Tożsamość i świadomość", "Egzystencjalizm"],
    },
    {
      title: "The Passage",
      media: "Seriale",
      themes: [
        "Metafizyka / Symulacja",
        "Etyka i moralność",
        "Śmierć / Przemijanie",
      ],
    },
    {
      title: "All of Us Are Dead",
      media: "Seriale",
      themes: [
        "Etyka i moralność",
        "Śmierć / Przemijanie",
        "Władza i polityka",
      ],
    },
    {
      title: "Sweet Home",
      media: "Seriale",
      themes: [
        "Tożsamość i świadomość",
        "Nihilizm / Absurd",
        "Śmierć / Przemijanie",
      ],
    },
    {
      title: "Persona Trinity Soul",
      media: "Seriale",
      themes: [
        "Tożsamość i świadomość",
        "Egzystencjalizm",
        "Metafizyka / Symulacja",
      ],
    },
    {
      title: "Rzym",
      media: "Seriale",
      themes: ["Władza i polityka", "Etyka i moralność", "Religia"],
    },
    {
      title: "13 powodów",
      media: "Seriale",
      themes: [
        "Etyka i moralność",
        "Śmierć / Przemijanie",
        "Tożsamość i świadomość",
      ],
    },
    {
      title: "Alice in Borderland",
      media: "Seriale",
      themes: [
        "Nihilizm / Absurd",
        "Egzystencjalizm",
        "Metafizyka / Symulacja",
      ],
    },
    {
      title: "30 srebrników",
      media: "Seriale",
      themes: ["Religia", "Metafizyka / Symulacja", "Etyka i moralność"],
    },
    {
      title: "From",
      media: "Seriale",
      themes: [
        "Metafizyka / Symulacja",
        "Egzystencjalizm",
        "Nihilizm / Absurd",
      ],
    },
    {
      title: "Nirvana in Fire",
      media: "Seriale",
      themes: ["Władza i polityka", "Etyka i moralność", "Filozofia Wschodu"],
    },
    {
      title: "The Long Ballad",
      media: "Seriale",
      themes: ["Władza i polityka", "Etyka i moralność", "Filozofia Wschodu"],
    },
    {
      title: "Arsenal Military Academy",
      media: "Seriale",
      themes: ["Tożsamość i świadomość", "Władza i polityka"],
    },
    {
      title: "Centaurworld",
      media: "Seriale",
      themes: ["Tożsamość i świadomość", "Egzystencjalizm"],
    },
    {
      title: "The Last of Us",
      media: "Seriale",
      themes: ["Etyka i moralność", "Śmierć / Przemijanie", "Egzystencjalizm"],
    },
    {
      title: "Po drugiej stronie muru",
      media: "Seriale",
      themes: [
        "Tożsamość i świadomość",
        "Metafizyka / Symulacja",
        "Egzystencjalizm",
      ],
    },
    {
      title: "Kalifat",
      media: "Seriale",
      themes: ["Religia", "Władza i polityka", "Etyka i moralność"],
    },
    {
      title: "Wikingowie: Walhalla",
      media: "Seriale",
      themes: ["Religia", "Władza i polityka", "Śmierć / Przemijanie"],
    },
    {
      title: "Wiedźmin",
      media: "Gry",
      isSeries: true,
      themes: [
        "Etyka i moralność",
        "Władza i polityka",
        "Wolna wola i determinizm",
        "Śmierć / Przemijanie",
      ],
      children: [
        { title: "Wiedźmin" },
        { title: "Wiedźmin 2: Zabójcy Królów" },
        { title: "Wiedźmin 3: Dziki Gon" },
        { title: "Wiedźmin: Pożegnanie Białego Wilka" },
      ],
    },
    {
      title: "Soulsborne",
      media: "Gry",
      isSeries: true,
      themes: [
        "Nihilizm / Absurd",
        "Śmierć / Przemijanie",
        "Metafizyka / Symulacja",
      ],
      children: [
        { title: "Dark Souls 3" },
        { title: "Bloodborne" },
        { title: "Elden Ring" },
        { title: "Sekiro: Shadows Die Twice" },
      ],
    },
    {
      title: "The Last of Us",
      media: "Gry",
      isSeries: true,
      themes: ["Etyka i moralność", "Egzystencjalizm", "Śmierć / Przemijanie"],
      children: [
        { title: "The Last of Us" },
        { title: "The Last of Us Part II" },
      ],
    },
    {
      title: "Persona",
      media: "Gry",
      isSeries: true,
      themes: [
        "Tożsamość i świadomość",
        "Śmierć / Przemijanie",
        "Władza i polityka",
      ],
      children: [
        { title: "Persona 3 Reload" },
        { title: "Persona 4 Golden" },
        { title: "Persona 5 Royal" },
      ],
    },
    {
      title: "Life is Strange",
      media: "Gry",
      isSeries: true,
      themes: [
        "Wolna wola i determinizm",
        "Tożsamość i świadomość",
        "Śmierć / Przemijanie",
      ],
      children: [
        { title: "Life is Strange" },
        { title: "Life is Strange: Before the Storm" },
      ],
    },
    {
      title: "God of War",
      media: "Gry",
      isSeries: true,
      themes: ["Religia", "Wolna wola i determinizm", "Śmierć / Przemijanie"],
      children: [
        { title: "God of War (2018)" },
        { title: "God of War Ragnarök" },
      ],
    },
    {
      title: "Ori",
      media: "Gry",
      isSeries: true,
      themes: ["Śmierć / Przemijanie", "Metafizyka / Symulacja"],
      children: [
        { title: "Ori and the Blind Forest" },
        { title: "Ori and the Will of the Wisps" },
      ],
    },
    {
      title: "Portal",
      media: "Gry",
      isSeries: true,
      themes: [
        "Metafizyka / Symulacja",
        "Tożsamość i świadomość",
        "Wolna wola i determinizm",
      ],
      children: [{ title: "Portal" }, { title: "Portal 2" }],
    },
    {
      title: "The Legend of Zelda",
      media: "Gry",
      isSeries: true,
      themes: [
        "Śmierć / Przemijanie",
        "Egzystencjalizm",
        "Metafizyka / Symulacja",
      ],
      children: [
        { title: "Breath of the Wild" },
        { title: "Tears of the Kingdom" },
      ],
    },
    {
      title: "Red Dead Redemption",
      media: "Gry",
      isSeries: true,
      themes: ["Egzystencjalizm", "Śmierć / Przemijanie", "Etyka i moralność"],
      children: [{ title: "Red Dead Redemption 2" }],
    },
    {
      title: "Detroit: Become Human",
      media: "Gry",
      themes: [
        "Tożsamość i świadomość",
        "Wolna wola i determinizm",
        "Etyka i moralność",
      ],
    },
    {
      title: "Undertale",
      media: "Gry",
      themes: [
        "Etyka i moralność",
        "Wolna wola i determinizm",
        "Metafizyka / Symulacja",
      ],
    },
    {
      title: "The Binding of Isaac",
      media: "Gry",
      themes: ["Religia", "Nihilizm / Absurd"],
    },
    {
      title: "Black Myth: Wukong",
      media: "Gry",
      themes: ["Filozofia Wschodu", "Religia", "Tożsamość i świadomość"],
    },
    {
      title: "Slay the Princess",
      media: "Gry",
      themes: [
        "Metafizyka / Symulacja",
        "Wolna wola i determinizm",
        "Tożsamość i świadomość",
      ],
    },
    {
      title: "Dante’s Inferno",
      media: "Gry",
      themes: ["Religia", "Śmierć / Przemijanie"],
    },
    {
      title: "Ghost of Tsushima/Yotei",
      media: "Gry",
      isSeries: true,
      themes: ["Filozofia Wschodu", "Władza i polityka"],
      children: [{ title: "Ghost of Tsushima" }, { title: "Ghost of Yotei" }],
    },
    {
      title: "Assassin's Creed",
      media: "Gry",
      isSeries: true,
      themes: ["Postać Sokratesa"],
      children: [{ title: "Assassin's Creed Odyssey" }],
    },
    {
      title: "Assassin's Creed",
      media: "Gry",
      isSeries: true,
      themes: [
        "Wolna wola i determinizm",
        "Władza i polityka",
        "Tożsamość i świadomość",
        "Metafizyka / Symulacja",
        "Etyka i moralność",
        "Religia",
      ],
      children: [
        { title: "Assassin's Creed" },
        { title: "Assassin's Creed II" },
        { title: "Assassin's Creed Brotherhood" },
        { title: "Assassin's Creed Revelations" },
        { title: "Assassin's Creed IV: Black Flag" },
        { title: "Assassin's Creed Syndicate" },
        { title: "Assassin's Creed Origins" },
        { title: "Assassin's Creed Odyssey" },
        { title: "Assassin's Creed Valhalla" },
        { title: "Assassin's Creed Mirage" },
        { title: "Assassin's Creed Chronicles China" },
      ],
    },
    {
      title: "Assassin's Creed",
      media: "Gry",
      isSeries: true,
      themes: ["Filozofia Wschodu"],
      children: [{ title: "Assassin's Creed Chronicles China" }],
    },
    {
      title: "Martha is Dead",
      media: "Gry",
      themes: [
        "Tożsamość i świadomość",
        "Wolna wola i determinizm",
        "Śmierć / Przemijanie",
        "Etyka i moralność",
        "Metafizyka / Symulacja",
        "Nihilizm / Absurd",
      ],
    },
  ];

  const filozofiaPoProstuEpisodes = [
    "Czym w ogóle jest filozofia? /PODCAST #1",
    "Utylitaryzm – kiedy ważymy ludzkie życie /PODCAST #2",
    "Istnienie Boga – argumenty i kontrargumenty /PODCAST #3",
    "Friedrich Nietzsche – śmierć Boga, moralność panów i nadczłowiek /PODCAST #4",
    "Sigmund Freud – ojciec psychoanalizy /PODCAST #5",
    "Marks i Engels – każdemu według potrzeb /PODCAST #6",
    "Racjonalizm i Kartezjusz – myślę, więc jestem /PODCAST #7",
    "Empiryzm – jak poznajemy przez doświadczenie? /PODCAST #8",
    "Erich Fromm – życie człowieka jako problem do rozwiązania /PODCAST #9",
    "IDEE POD LUPĄ: Wolność #10",
    "Rozmowy Po Prostu: o wolnej woli z perspektywy neurofilozofii mówi dr Filip Stawski",
    "Filozofia konsumpcjonizmu – dlaczego kupujemy więcej, niż potrzebujemy?",
    "Ludwig Wittgenstein – granice mojego języka oznaczają granice mojego świata",
    "ODCINEK SPECJALNY: Zapytaj Filozofkę cz. 1",
    "ODCINEK SPECJALNY: Zapytaj Filozofkę cz. 2",
    "Filozofia Nauki – jakie są możliwości i granice nauki? /PODCAST #13",
    "Egzystencjalizm – absurdem jest, żeśmy się urodzili, i absurdem, że umrzemy /PODCAST #14",
    "Starożytne przepisy na szczęście – epikureizm, cynizm, stoicyzm #15",
    "Czym jest idea krzesła? – Problem pojęć ogólnych /PODCAST #16",
    "Ortega y Gasset - Masy się buntują /PODCAST #17",
    "Jak filozofia stara się wyjaśnić podstawy moralności? Wstęp do metaetyki #18 cz. 1",
    "Wstęp do metaetyki: teorie zaprzeczające uniwersalnej moralności #18 cz. 2",
    "Wstęp do metaetyki cz. 3: uniwersalna moralność #20",
    "W Poszukiwaniu Sensu – Filozoficzne perspektywy na sens życia /PODCAST #21",
    "ROZMOWA: o współczesnym praktykowaniu stoicyzmu z dr Tomaszem Mazurem",
    "Rozmowy po prostu: o wartościach mówi dr Paulina Seidler",
    "Czy płeć to iluzja? Filozofia płci i idee Judith Butler",
  ];

  const podcastEpisodes = [
    "Episode 1 ... Presocratic Philosophy - Ionian",
    "Episode 2 ... Presocratic Philosophy - Italian",
    "Episode 3 ... Socrates and the Sophists",
    "Episode 4 ... Plato",
    "Episode 5 ... Aristotle Pt. 1",
    "Episode 6 ... Aristotle Pt. 2",
    "Episode 7 ... Daoism",
    "Episode 8 ... Confucianism",
    "Episode 9 ... The Buddah",
    "Episode 10 ... The Hellenistic Age Pt. 1 - Epicurus",
    "Episode 11 ... The Hellenistic Age Pt. 2 - The Early Stoa and the Cynics",
    "Episode 12 ... The Hellenistic Age Pt. 3 - Hallmarks of Stoic Ethics",
    "Episode 13 ... The Hellenistic Age Pt. 4 - Skepticism",
    "Episode 14 ... The Hellenistic Age Pt. 5 - A Race To The Dark Ages",
    "Episode 15 ... A Period of Transition - Plotinus",
    "Episode 16 ... Saint Augustine",
    "Episode 17 ... Boethius",
    "Episode 18 ... Avicenna",
    "Episode 19 ... Three Islamic Truths",
    "Episode 20 ... Two Medieval Approaches To God",
    "Episode 21 ... One God - St. Thomas Aquinas",
    "Episode 22 ... Blast off to the Renaissance!",
    "Episode 23 ... Machiavelli",
    "Episode 24 ... Montaigne",
    "Episode 25 ... A Scientific Method For Your Life!",
    "Episode 26 ... Thomas Hobbes pt. 1 - The Social Contract",
    "Episode 27 ... Thomas Hobbes pt. 2",
    "Episode 28 ... Rene Descartes pt. 1 - Context",
    "Episode 29 ... Descartes pt. 2",
    "Episode 30 ... Descartes pt. 3 - God Exists",
    "Episode 31 ... Pascal's Wager",
    "Episode 32 ... Blaise Pascal pt. 2 - +EV your way to success!!",
    "Episode 33 ... Spinoza pt. 1 - From Baruch to Bendicto",
    "Episode 34 ... Spinoza pt. 2 - Force of Nature",
    "Episode 35 ... John Locke pt. 1",
    "Episode 36 ... John Locke pt. 2 - The Blank Slate",
    "Episode 37 ... Leibniz pt. 1 - A Million Points of Light",
    "Episode 38 ... Leibniz pt. 2 - The Best of All Possible Worlds",
    "Episode 39 ... The Limits of Empiricism",
    "Episode 40 ... Superstition",
    "Episode 41 ... Belief",
    "Episode 42 ... Optimism",
    "Episode 43 ... Tolerance",
    "Episode 44 ... Slavery",
    "Episode 45 ... Rousseau Government pt. 1",
    "Episode 46 ... Rousseau pt. 2 - Democracy, Aristocracy or Monarchy?",
    "Episode 47 ... Rousseau pt. 3 - The General Will",
    "Episode 48 ... Adam Smith pt. 1 - Specialization",
    "Episode 49 ... Adam Smith pt. 2 - The Tip of the Iceberg of Wealth",
    "Episode 50 ... Are You Left Or Right?",
    "Episode 51 ... David Hume pt. 1",
    "Episode 52 ... David Hume pt. 2 - Design",
    "Episode 53 ... Hume pt. 3 - Custom",
    "Episode 54 ... Hume pt. 4 - Art",
    "Episode 55 ... Interview on Hume with Massimo Pigliucci",
    "Episode 56 ... Kant pt. 1 - An Introduction to the Introduction",
    "Episode 57 ... Kant pt. 2 - The Actual Introduction",
    "Episode 58 ... Kant pt. 3 - Deontology vs Consequentialism",
    "Episode 59 ... Kant pt. 4 - Categorical Trolley Cars",
    "Episode 60 ... Kant pt. 5 - The Sublime",
    "Episode 61 ... Kant pt. 6 - What is Enlightenment?",
    "Episode 62 ... Kant pt. 7 - Suicide",
    "Episode 63 ... Kant pt. 8 - Limits of Knowledge",
    "Episode 64 ... Interpreting Interpretations",
    "Episode 65 ... Mary Wollstonecraft",
    "Episode 66 ... Hegel pt. 1 - Introduction",
    "Episode 67 ... What Hegel Was Saying!",
    "Episode 68 ... On Moodiness",
    "Episode 69 ... An Appeal To Reason",
    "Episode 70 ... Off Moodiness",
    "Episode 71 ... Is Killing Animals For Food Morally Justifiable?",
    "Episode 72 ... Insecurity",
    "Episode 73 ... How To Win An Argument Pt. 1",
    "Episode 74 ... Hegel Returns!",
    "Episode 75 ... How To Win An Argument pt. 2",
    "Episode 76 ... Hegel's God",
    "Episode 77 ... Marx on Religion",
    "Episode 78 ... Kierkegaard on Religion",
    "Episode 79 ... Kierkegaard on Anxiety",
    "Episode 80 ... Feuerbach on Religion",
    "Episode 81 ... Communism vs Capitalism",
    "Episode 82 ... Austrians and Marx",
    "Episode 83 ... Henry David Thoreau",
    "Episode 84 ... William James on Truth",
    "Episode 85 ... Peter Singer on Effective Altruism",
    "Episode 86 ... Sartre and Camus pt 1",
    "Episode 87 ... Sartre and Camus pt. 2",
    "Episode 88 ... Sartre and Camus pt. 3",
    "Episode 89 ... Simone De Beauvoir",
    "Episode 90 ... Nietzsche pt 1",
    "Episode 91 ... Nietzsche pt 2 - The Will To Power",
    "Episode 92 ... Nietzsche pt. 3 - Thus Spoke Zarathustra",
    "Episode 93 ... Nietzsche pt. 4 - Love",
    "Episode 94 ... A Look at Suffering",
    "Episode 95 ... Are you living in a simulation?",
    "Episode 96 ... Is Ayn Rand a Philosopher?",
    "Episode 97 ... Wittgenstein pt. 1",
    "Episode 98 ... Schopenhauer pt. 1 - Metaphysics and Love",
    "Episode 99 ... Schopenhauer pt. 2 - Ethics",
    "Episode 100 ... Heidegger pt. 1 - Phenomenology and Dasein",
    "Episode 101 ... Heidegger pt. 2 - Science and Technology",
    "Episode 102 ... Heidegger pt. 3 - Authenticity",
    "Episode 103 ... Sartre and Camus pt. 4 - The Quest For Certainty",
    "Episode 104 ... Sartre and Camus pt. 5 - Consciousness is Freedom",
    "Episode 105 ... Sartre and Camus pt. 6 - The Self",
    "Episode 106 ... Simone De Beauvoir - The Ethics of Ambiguity",
    "Episode 107 ... Simone De Beauvoir pt. 3 - Responsibility",
    "Episode 108 ... The Frankfurt School pt. 1 - Introduction",
    "Episode 109 ... The Frankfurt School pt. 2 - The Enlightenment",
    "Episode 110 ... The Frankfurt School pt. 3 - The Culture Industry",
    "Episode 111 ... The Frankfurt School pt. 4 - Eros",
    "Episode 112 ... The Frankfurt School pt. 5 - Civilization",
    "Episode 113 ... The Frankfurt School pt. 6 - Art As A Tool For Liberation",
    "Episode 114 ... The Frankfurt School pt. 7 - The Great Refusal",
    "Episode 115 ... Structuralism and Context",
    "Episode 116 ... Structuralism and Mythology pt. 1",
    "Episode 117 ... Structuralism and Mythology pt. 2",
    "Episode 118 ... A Basic Look At Postmodernism",
    "Episode 119 ... Derrida and Words",
    "Episode 120 ... A Brief Look At Logical Positivism",
    "Episode 121 ... Michel Foucault pt. 1 - Discipline and Punish",
    "Episode 122 ... Michel Foucault pt. 2 - The Order of Things",
    "Episode 123 ... Michel Foucault pt. 3 - Power",
    "Episode 124 ... Simulacra and Simulation",
    "Episode 125 ... Deleuze pt. 1 - What is philosophy?",
    "Episode 126 ... Gilles Deleuze pt. 2 - Immanence",
    "Episode 127 ... Deleuze pt. 3 - Anti-Oedipus",
    "Episode 128 ... Deleuze pt. 4 - Flows",
    "Episode 129 ... Deleuze pt. 5 - Difference",
    "Episode 130 ... Dewey and Lippman on Democracy",
    "Episode 131 ... Gramsci - Cultural Hegemony",
    "Episode 132 ... Carl Schmitt on Liberalism pt. 1",
    "Episode 133 ... Carl Schmitt on Liberalism pt. 2",
    "Episode 134 ... Consequences of Reason",
    "Episode 135 ... Leo Strauss - Ancients vs. Moderns",
    "Episode 136 ... Hannah Arendt - The Banality of Evil",
    "Episode 137 ... John Rawls - A Theory of Justice",
    "Episode 138 ... Robert Nozick - The Minimal State",
    "Episode 139 ... Friedrich Hayek - The Road to Serfdom",
    "Episode 140 ... Isaiah Berlin pt. 1 - Pluralism",
    "Episode 141 ... Isaiah Berlin pt. 2 - Culture",
    "Episode 142 ... Richard Rorty",
    "Episode 143 ... Jürgen Habermas pt. 1 - The Public Sphere",
    "Episode 144 ... Max Weber - Iron Cage",
    "Episode 145 ... Henri Bergson pt. 1 - History",
    "Episode 146 ... Henri Bergson pt. 2 - Vitalism",
    "Episode 147 ... Being and Becoming",
    "Episode 148 ... On Media pt. 1 - Manufacturing Consent",
    "Episode 149 ... On Media pt. 2 - Marshall McLuhan",
    "Episode 150 ... The Frankfurt School - Erich Fromm on Love",
    "Episode 151 ... The Frankfurt School - Erich Fromm on Freedom",
    "Episode 152 ... The Frankfurt School - Walter Benjamin pt. 1",
    "Episode 153 ... The Frankfurt School - Walter Benjamin pt. 2 - Distraction",
    "Episode 154 ... Pragmatism and Truth",
    "Episode 155 ... Emil Cioran - Absurdity and Nothingness",
    "Episode 156 ... Emil Cioran - Failure and Suicide",
    "Episode 157 ... The Creation of Meaning - Beauvoir",
    "Episode 158 ... The Creation of Meaning - Nietzsche - The Ascetic Ideal",
    "Episode 159 ... The Creation of Meaning - Nietzsche - Amor Fati",
    "Episode 160 ... The Creation of Meaning - Kierkegaard - Silence, Obedience and Joy",
    "Episode 161 ... Karl Popper - The Open Society and Its Enemies",
    "Episode 162 ... The Creation of Meaning - The Denial of Death",
    "Episode 163 ... The Creation of Meaning - Escape From Evil",
    "Episode 164 ... Ralph Waldo Emerson - Self Reliance",
    "Episode 165 ... Ralph Waldo Emerson - Nature and Other Things",
    "Episode 166 ... Jose Ortega - Circumstance",
    "Episode 167 ... Jose Ortega - Revolt of the Masses",
    "Episode 168 ... Introduction to an Ethics of Care",
    "Episode 169 ... Bruno Latour - We Have Never Been Modern",
    "Episode 170 ... Albert Camus - The Fall",
    "Episode 171 ... Guy Debord - The Society of the Spectacle",
    "Episode 172 ... Simone Weil - Attention",
    "Episode 173 ... Simone Weil - The Need For Roots",
    "Episode 174 ... Simone Weil - The Mathematician",
    "Episode 175 ... Simone Weil - Vessels of God",
    "Episode 176 ... Susan Sontag - Do you criticize yourself the way you criticize a movie?",
    "Episode 177 ... Susan Sontag - Do you speak the language of pictures and videos?",
    "Episode 178 ... Susan Sontag - How much is your view of everything affected by metaphors?",
    "Episode 179 ... Why is consciousness something worth talking about?",
    "Episode 180 ... What if everything is consciousness? - Panpsychism - Philip Goff",
    "Episode 181 ... What if consciousness is an illusion?",
    "Episode 182 ... What if free will is an illusion?",
    "Episode 183 ... Is ChatGPT really intelligent?",
    "Episode 184 ... Is Artificial Intelligence really an existential threat?",
    "Episode 185 ... Should we prepare for an AI revolution?",
    "Episode 186 ... Are we heading for a digital prison? - Panopticon (Foucault, Bentham, Cave)",
    "Episode 187 ... How much freedom would you trade for security? (Foucault, Hobbes, Mill, Agamben)",
    "Episode 188 ... Achievement Society and the rise of narcissism depression and anxiety - Byung-Chul Han",
    "Episode 189 ... Everything that connects us is slowly disappearing. - Byung Chul Han pt. 2",
    "Episode 190 ... Are emotions a waste of time? - Neo-Stoicism (Martha Nussbaum)",
    "Episode 191 ... The modern concentration camp and the failure of human rights. (Giorgio Agamben)",
    "Episode 192 ... Should we overthrow the government tomorrow? - Anarchism pt. 1 (Chomsky, Malatesta)",
    "Episode 193 ... The main export of the western world is trash. - Anarchism pt. 2",
    "Episode 194 ... Do we really need the police? - Anarchism pt. 3 - (Gelderloos, Security)",
    "Episode 195 ... Could Anarcho-Capitalism be the solution to our problems? - Anarchism pt. 4",
    "Episode 196 ... The improbable Slavoj Zizek - Part 1",
    "Episode 197 ... New Atheists and cosmic purpose without God. (Zizek, Goff, Nagel)",
    "Episode 198 ... The truth is in the process. - Zizek pt. 3 (ideology, dialectics)",
    "Episode 199 ... A conservative communist's take on global capitalism and desire. (Zizek, Marx, Lacan)",
    "Episode 200 ... The postmodernist subject and 'ideology without ideology' (Zizek, Byung Chul Han)",
    "Episode 201 ... Resistance, Love, and the importance of Failure. (Zizek, Byung Chul Han)",
    "Episode 202 ... Why we can't think beyond capitalism. - Neoliberalism (Mark Fisher, Capitalist Realism)",
    "Episode 203 ... Why the future is being slowly cancelled. - Postmodernism (Mark Fisher)",
    "Episode 204 ... The importance of philosophy, justice and the common good. (Michael Sandel)",
    "Episode 205 ... Why a meritocracy is corrosive to society. (Michael Sandel)",
    "Episode 206 ... Capitalism is dead. This is Technofeudalism. (Yanis Varoufakis)",
    "Episode 207 ... Fear is toxic to a democracy. (Martha Nussbaum)",
    "Episode 208 ... The moral evolution of a philosopher. (Peter Singer)",
    "Episode 209 ... Improving our world through applied ethics. (Peter Singer, Katarzyna de Lazari-Radek)",
    "Episode 210 ... The Pedagogy of the Oppressed (Paulo Freire, Education)",
    "Episode 211 ... Nietzsche returns with a hammer!",
    "Episode 212 ... Nietzsche and Critchley on the tragic perspective. (Amor Fati pt. 2)",
    "Episode 213 ... Deleuze Interprets Nietzsche (Difference, Joy, Affirmation)",
    "Episode 214 ... Framing our Being in a completely different way. (Heidegger)",
    "Episode 215 ... How Mysticism is missing from our modern lives. (Critchley, Heidegger)",
    "Episode 216 ... The Self-Overcoming of Nihilism - Kyoto School pt. 1 - Nishitani",
    "Episode 217 ... Religion and Nothingness - Kyoto School pt. 2 - Nishitani",
    "Episode 218 ... Dostoevsky - Notes From Underground",
    "Episode 219 ... Dostoevsky - Crime and Punishment",
    "Episode 220 ... Dostoevsky - Demons",
    "Episode 221 ... Dostoevsky - The Idiot",
    "Episode 222 ... Dostoevsky - Love in The Brothers Karamazov",
    "Episode 223 ... Religion and the duck-rabbit - Kyoto School pt. 3",
    "Episode 224 ... Albert Camus - The Stranger",
    "Episode 225 ... Albert Camus - The Plague",
    "Episode 226 ... Albert Camus - The Rebel",
    "Episode 227 ... Albert Camus - On Exile",
    "Episode 228 ... Albert Camus - Kafka and The Fall",
    "Episode 229 ... Kafka and Totalitarianism (Arendt, Adorno)",
    "Episode 230 ... Hope as an existentialism (Ernst Bloch)",
    "Episode 231 ... The Late Work of Wittgenstein - Language Games",
    "Episode 232 ... Byung Chul Han - The Crisis of Narration",
    "Episode 233 ... A philosophy of self-destruction. (Dostoevsky, Bataille)",
    "Episode 235 ... The Philosophy of Zen Buddhism - Byung Chul Han",
    "Episode 236 ... Meditations - Marcus Aurelius",
    "Episode 237 ... The Stoics are wrong. (Nietzsche, Schopenhauer)",
    "Episode 238 ... Frankenstein - Mary Shelley",
    "Episode 239 ... Authenticity and the history of the self. (Charles Taylor)",
    "Episode 240 ... Varieties of Religion Today (Charles Taylor)",
    "Episode 241 ... The Tragedy of Julius Caesar - William Shakespeare",
    "Episode 242 ... Romeo and Juliet - William Shakespeare",
    "Episode 243 ... Hamlet - William Shakespeare",
    "Episode 244 ... After Virtue - Alasdair MacIntyre (why moral debates feel so unsatisfying)",
  ];

  const mediaOptions = ["Gry", "Seriale", "Filmy", "Książki"];

  const [openMainSection, setOpenMainSection] = useState(null); // "media" lub "podcasty"
  const [openSection, setOpenSection] = useState(null); // rozwinięty temat
  const [selectedMedia, setSelectedMedia] = useState([...mediaOptions]); // filtr media
  const [openSeries, setOpenSeries] = useState(null); // rozwijanie serii

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

  const toggleSeries = (key) => {
    setOpenSeries(openSeries === key ? null : key);
  };

  // wszystkie unikalne tematy
  const allThemes = [...new Set(works.flatMap((w) => w.themes || []))].sort();

  const renderWorkItem = (w) => {
    if (w.isSeries && w.children) {
      const key = w.title + w.media;
      return (
        <div key={key}>
          <div
            onClick={() => toggleSeries(key)}
            style={{ cursor: "pointer", fontWeight: "bold" }}
          >
            {openSeries === key ? "▼" : "▶"} {w.title}{" "}
            <span style={{ fontStyle: "italic", color: "gray" }}>
              ({w.media})
            </span>
          </div>
          {openSeries === key && (
            <ul style={{ marginLeft: "20px" }}>
              {w.children.map((child, i) => (
                <li key={i}>{child.title}</li>
              ))}
            </ul>
          )}
        </div>
      );
    } else {
      return (
        <div key={w.title + w.media}>
          {w.title}{" "}
          <span style={{ fontStyle: "italic", color: "gray" }}>
            ({w.media})
          </span>
        </div>
      );
    }
  };

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
        </button>{" "}
        <button
          onClick={() =>
            setOpenMainSection(
              openMainSection === "filozofowie" ? null : "filozofowie",
            )
          }
          style={{ cursor: "pointer" }}
        >
          Ważni filozofowie
        </button>
        <button
          onClick={() =>
            setOpenMainSection(
              openMainSection === "mojaFilozofia" ? null : "mojaFilozofia",
            )
          }
          style={{ cursor: "pointer", marginLeft: "10px" }}
        >
          Moja filozofia
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
                w.themes?.includes(theme) && selectedMedia.includes(w.media),
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
                    {filteredWorks.map((w) => (
                      <li key={w.title + w.media}>{renderWorkItem(w)}</li>
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
          {" "}
          <div>
            <h3
              onClick={() => toggleSeries("filozofiaPoProstu")}
              style={{ cursor: "pointer" }}
            >
              {openSeries === "filozofiaPoProstu" ? "▼" : "▶"} Filozofia po
              prostu
            </h3>

            {openSeries === "filozofiaPoProstu" && (
              <ul style={{ marginLeft: "20px" }}>
                {filozofiaPoProstuEpisodes.map((ep, i) => (
                  <li key={i}>{ep}</li>
                ))}
              </ul>
            )}
          </div>
          <h3
            onClick={() => toggleSeries("podcasty")}
            style={{ cursor: "pointer" }}
          >
            {openSeries === "podcasty" ? "▼" : "▶"} Philosophize This!
          </h3>
          {openSeries === "podcasty" && (
            <ul style={{ marginLeft: "20px" }}>
              {podcastEpisodes.map((ep, i) => (
                <li key={i}>{ep}</li>
              ))}
            </ul>
          )}
        </div>
      )}
      {openMainSection === "filozofowie" && (
        <div>
          {/* Sekcja Zachodni i Wschodni */}
          {["Zachodni", "Wschodni"].map((region) => {
            const philosophers =
              region === "Zachodni"
                ? [
                    "Sokrates",
                    "Platon",
                    "Arystoteles",
                    "Machiavelli",
                    "Nietzsche",
                    "Kant",
                    "Camus",
                    "Sartre",
                    "Seneka",
                    "Epiktet",
                    "Marek Aureliusz",
                    "Kartezjusz",
                    "Freud",
                  ]
                : [
                    "Konfucjusz",
                    "Laozi",
                    "Zhuangzi",
                    "Bodhidharma",
                    "Sun Zi",
                    "Mozi",
                  ];

            const isOpen = openSection === region;

            return (
              <div key={region}>
                <h3
                  onClick={() => toggleSection(region)}
                  style={{ cursor: "pointer" }}
                >
                  {isOpen ? "▼" : "▶"} {region}
                </h3>
                {isOpen && (
                  <ul style={{ marginLeft: "20px" }}>
                    {philosophers.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      )}
      ,
      {openMainSection === "mojaFilozofia" && (
        <div>
          {[
            {
              title: "Refleksje z Taizé",
              content:
                "Moje doświadczenia duchowe i filozoficzne podczas pobytu w Taizé.",
            },
            {
              title: "Bycie puppygirl / doggirl",
              content:
                "Rozważania nad tożsamością, rolami i akceptacją samej siebie.",
            },
            {
              title: "Inspiracje z Boskiej Komedii",
              content:
                "Analiza symboliki, metafizyki i egzystencjalnych motywów z Dantego.",
            },
            {
              title: "Moje ulubione cytaty",
              content:
                "Cytaty z Nietzschego, Camusa, Sartre’a, które rezonują z moim spojrzeniem na życie.",
            },
          ].map((entry, i) => {
            const key = "mojaFilozofia_" + i;
            const isOpen = openSection === key;
            return (
              <div key={key}>
                <h3
                  onClick={() => toggleSection(key)}
                  style={{ cursor: "pointer" }}
                >
                  {isOpen ? "▼" : "▶"} {entry.title}
                </h3>
                {isOpen && (
                  <p style={{ marginLeft: "20px" }}>{entry.content}</p>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Philosophy;
