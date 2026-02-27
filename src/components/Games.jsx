import "./Games.css";
import { useState, useMemo, useRef, useEffect } from "react";

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

const gameDescriptions = {
  Wiedźmin: {
    world: "Avalon",
    protagonist: "Geralt z Rivii",
    antagonist: "Jacques de Aldersberg",
    description:
      "Pierwsza odsłona przygód wiedźmina, skupiona na intrygach politycznych i tajemnicy Salamandry.",
  },

  "Wiedźmin 2": {
    world: "Avalon",
    protagonist: "Geralt z Rivii",
    antagonist: "Letho z Gulety",
    description:
      "Geralt zostaje oskarżony o królobójstwo i wplątany w brutalną walkę o władzę między królestwami.",
  },

  "Wiedźmin 3": {
    world: "Avalon, Grizzleheim, Darkmoor",
    protagonist: "Geralt z Rivii",
    antagonist: "Eredin i Dziki Gon",
    description:
      "Epicka podróż w poszukiwaniu Ciri w świecie ogarniętym wojną i nadciągającą katastrofą.",
  },

  "Wiedźmin: Pożegnanie Białego Wilka": {
    world: "Avalon",
    protagonist: "Geralt z Rivii",
    antagonist: "—",
    description:
      "Fanowskie zakończenie historii Geralta, domykające wątki po wydarzeniach sagi.",
  },

  Gwint: {
    world: "Avalon",
    protagonist: "Gracz",
    antagonist: "Przeciwnik",
    description: "Strategiczna gra karciana osadzona w uniwersum Wiedźmina.",
  },

  "TES IV Oblivion": {
    world: "Avalon, Dragonspyre",
    protagonist: "Bohater Kvatch",
    antagonist: "Mehrunes Dagon",
    description:
      "Bohater próbuje powstrzymać inwazję daedrycznego księcia na Cyrodiil.",
  },

  "TES V Skyrim": {
    world: "Grizzleheim",
    protagonist: "Dragonborn",
    antagonist: "Alduin",
    description:
      "Smoczy prorok powraca, a Dragonborn musi powstrzymać koniec świata.",
  },

  "Dark Souls 3": {
    world: "Dragonspyre",
    protagonist: "Ashen One",
    antagonist: "Soul of Cinder",
    description:
      "Gasnące ognie i upadłe królestwa w mrocznej walce o podtrzymanie Pierwszego Płomienia.",
  },

  Bloodborne: {
    world: "Darkmoor",
    protagonist: "Łowca",
    antagonist: "Gehrman / Great Ones",
    description:
      "Gotycki koszmar w Yharnam, gdzie polowanie prowadzi ku kosmicznemu szaleństwu.",
  },

  "Elden Ring": {
    world: "Wizard City",
    protagonist: "Tarnished",
    antagonist: "Radagon / Elden Beast",
    description:
      "Podróż przez Ziemie Pomiędzy w celu odbudowy Elden Ring i zostania Elden Lordem.",
  },

  "Sekiro: Shadows Die Twice": {
    world: "Mooshu",
    protagonist: "Wilk (Sekiro)",
    antagonist: "Isshin Ashina",
    description:
      "Historia shinobi walczącego o ocalenie swojego pana w brutalnej feudalnej Japonii.",
  },

  "Dragon's Dogma: Dark Arisen": {
    world: "Avalon",
    protagonist: "Arisen",
    antagonist: "Grigori",
    description:
      "Bohater z wyrwanym sercem rusza, by zmierzyć się ze smokiem i odkryć naturę przeznaczenia.",
  },

  "Dragon's Dogma 2": {
    world: "Avalon, Krokotopia",
    protagonist: "Arisen",
    antagonist: "—",
    description:
      "Kontynuacja historii o cyklu życia, śmierci i przeznaczenia w świecie fantasy.",
  },

  "Assassin's Creed": {
    world: "Avalon, Zafaria, Celestia",
    protagonist: "Altaïr Ibn-La'Ahad",
    antagonist: "Robert de Sablé",
    description: "Konflikt asasynów i templariuszy w czasach III krucjaty.",
  },

  "Assassin's Creed 2": {
    world: "Wysteria, Celestia",
    protagonist: "Ezio Auditore",
    antagonist: "Rodrigo Borgia",
    description: "Historia zemsty młodego Ezio w renesansowych Włoszech.",
  },

  "Assassin's Creed Brotherhood": {
    world: "Wysteria, Dragonspyre, Celestia",
    protagonist: "Ezio Auditore",
    antagonist: "Cesare Borgia",
    description:
      "Ezio buduje Bractwo Asasynów, by obalić władzę Borgiów w Rzymie.",
  },

  "Assassin's Creed Revelations": {
    world: "Zafaria, Celestia",
    protagonist: "Ezio Auditore",
    antagonist: "Ahmet",
    description: "Ezio odkrywa sekrety Altaïra w Konstantynopolu.",
  },

  "Assassin's Creed 4 Black Flag": {
    world: "Azteca, Celestia",
    protagonist: "Edward Kenway",
    antagonist: "Laureano Torres",
    description:
      "Piracka opowieść o wolności i konflikcie asasynów z templariuszami.",
  },
  "Assassin's Creed Syndicate": {
    world: "Marleybone, Celestia",
    protagonist: "Jacob i Evie Frye",
    antagonist: "Crawford Starrick",
    description:
      "Rodzeństwo Frye walczy z templariuszami w przemysłowym Londynie epoki wiktoriańskiej.",
  },

  "Assassin's Creed Origins": {
    world: "Krokotopia, Celestia",
    protagonist: "Bayek z Siwy",
    antagonist: "Flavius Metellus",
    description:
      "Narodziny Bractwa Asasynów w starożytnym Egipcie i osobista historia zemsty.",
  },

  "Assassin's Creed Odyssey": {
    world: "Aquila, Celestia",
    protagonist: "Kassandra / Alexios",
    antagonist: "Kult Kosmosa",
    description:
      "Epicka podróż przez starożytną Grecję, pełna mitologii i politycznych intryg.",
  },

  "Assassin's Creed Valhalla": {
    world: "Grizzleheim, Celestia",
    protagonist: "Eivor",
    antagonist: "Alfred Wielki / Zakon Starożytnych",
    description: "Saga wikingów o podboju Anglii i konflikcie z Zakonem.",
  },

  "Assassin's Creed Mirage": {
    world: "Zafaria, Celestia",
    protagonist: "Basim Ibn Ishaq",
    antagonist: "Zakon Starożytnych",
    description:
      "Powrót do korzeni serii — skradanie i intrygi w średniowiecznym Bagdadzie.",
  },

  "Assassin's Creed Chronicles China": {
    world: "Mooshu",
    protagonist: "Shao Jun",
    antagonist: "Templariusze",
    description:
      "Dwuwymiarowa opowieść o asasynce walczącej z templariuszami w Chinach.",
  },

  "The Last of Us": {
    world: "Dragonspyre, Darkmoor",
    protagonist: "Joel i Ellie",
    antagonist: "Ludzie i świat po pandemii",
    description:
      "Poruszająca historia przetrwania w postapokaliptycznym świecie.",
  },

  "The Last of Us Part 2": {
    world: "Dragonspyre, Darkmoor",
    protagonist: "Ellie / Abby",
    antagonist: "Cykl zemsty",
    description: "Brutalna opowieść o konsekwencjach nienawiści i zemsty.",
  },

  "Shadow of the Colossus": {
    world: "Azteca",
    protagonist: "Wander",
    antagonist: "Dormin",
    description:
      "Samotna wędrówka przez zakazane ziemie w celu pokonania kolosów i ocalenia ukochanej.",
  },

  "Red Dead Redemption 2": {
    world: "Zafaria, Marleybone, Azteca",
    protagonist: "Arthur Morgan",
    antagonist: "Micah Bell / bezlitosny świat",
    description:
      "Opowieść o upadku gangu Van der Linde w schyłkowym okresie Dzikiego Zachodu.",
  },

  "Mafia Definitive Edition": {
    world: "Marleybone",
    protagonist: "Tommy Angelo",
    antagonist: "Don Salieri / Morello",
    description:
      "Gangsterska historia awansu i moralnych kompromisów w latach 30.",
  },

  "Serious Sam: The First Encounter": {
    world: "Krokotopia",
    protagonist: "Sam Stone",
    antagonist: "Mental",
    description:
      "Dynamiczny FPS pełen absurdalnych hord przeciwników i intensywnej akcji.",
  },

  "Serious Sam: The Second Encounter": {
    world: "Krokotopia, Azteca, Avalon",
    protagonist: "Sam Stone",
    antagonist: "Mental",
    description: "Kontynuacja szalonej walki z kosmicznymi najeźdźcami.",
  },

  "DOOM 1 & 2": {
    world: "Dragonspyre, Celestia",
    protagonist: "Doom Slayer",
    antagonist: "Demony Piekła",
    description:
      "Ikoniczny FPS o eksterminacji demonów w marsjańskich bazach i piekle.",
  },

  "DOOM 64": {
    world: "Dragonspyre, Celestia",
    protagonist: "Doom Slayer",
    antagonist: "Mother Demon",
    description: "Kontynuacja klasycznej walki z piekielnymi siłami.",
  },

  "DOOM 3": {
    world: "Dragonspyre, Celestia",
    protagonist: "Marine",
    antagonist: "Demony z Piekła",
    description: "Mroczniejsza, horrorowa interpretacja klasycznego DOOM-a.",
  },

  "DOOM 2016": {
    world: "Dragonspyre, Celestia",
    protagonist: "Doom Slayer",
    antagonist: "Olivia Pierce",
    description: "Powrót legendy w brutalnym, szybkim FPS-ie.",
  },

  "DOOM Eternal": {
    world: "Dragonspyre, Celestia",
    protagonist: "Doom Slayer",
    antagonist: "Khan Maykr / Icon of Sin",
    description:
      "Jeszcze bardziej dynamiczna eksterminacja demonów na Ziemi i w Piekle.",
  },

  "DOOM The Dark Ages": {
    world: "Dragonspyre, Celestia",
    protagonist: "Doom Slayer",
    antagonist: "Siły Piekła",
    description: "Średniowieczna odsłona brutalnej walki z demonami.",
  },

  "Ori and The Blind Forest": {
    world: "Khrysalis",
    protagonist: "Ori",
    antagonist: "Kuro",
    description:
      "Baśniowa platformówka o odwadze i poświęceniu w magicznym lesie.",
  },

  "Ori and The Will of The Wisps": {
    world: "Khrysalis",
    protagonist: "Ori",
    antagonist: "Shriek",
    description: "Kontynuacja wzruszającej historii o świetle i nadziei.",
  },

  "Warhammer 40k Dawn of War": {
    world: "Polaris, Zafaria, Azteca, Celestia, Dragonspyre, Darkmoor",
    protagonist: "Blood Ravens",
    antagonist: "Orkowie / Chaos",
    description: "Strategiczna wojna w brutalnym uniwersum Warhammer 40k.",
  },

  "Warhammer 40k Space Marine": {
    world: "Polaris, Zafaria, Azteca, Dragonspyre",
    protagonist: "Kapitan Titus",
    antagonist: "Orkowie / Chaos",
    description: "Dynamiczna akcja w roli Kosmicznego Marines.",
  },

  "Warhammer 40k Space Marine 2": {
    world: "Polaris, Khrysalis, Dragonspyre",
    protagonist: "Kapitan Titus",
    antagonist: "Tyranidzi / Chaos",
    description: "Kontynuacja brutalnej walki o przetrwanie Imperium.",
  },

  "Warhammer 40k Boltgun": {
    world: "Polaris, Dragonspyre",
    protagonist: "Malum Caedo",
    antagonist: "Siły Chaosu",
    description: "Oldschoolowy shooter osadzony w realiach Warhammer 40k.",
  },

  "Starcraft 2": {
    world: "Polaris, Khrysalis, Celestia",
    protagonist: "Jim Raynor",
    antagonist: "Sarah Kerrigan / Amon",
    description: "Kosmiczna wojna Terran, Protossów i Zergów o los galaktyki.",
  }, // 🎮 gameDescriptions – Część 3
  "Cyberpunk 2077": {
    world: "Celestia",
    protagonist: "V",
    antagonist: "Adam Smasher / korporacje",
    description:
      "Futurystyczna, otwarta RPG-akcja w Night City, gdzie każda decyzja ma konsekwencje.",
  },

  "Detroit Become Human": {
    world: "Celestia",
    protagonist: "Connor, Kara, Markus",
    antagonist: "Ludzkość / system",
    description:
      "Interaktywna historia androidów w konflikcie o prawa i wolność w futurystycznym Detroit.",
  },

  "Life is Strange": {
    world: "Wysteria",
    protagonist: "Max Caulfield",
    antagonist: "Ciemne tajemnice Arcadia Bay",
    description:
      "Gra epizodyczna o podróży w czasie, wyborach i konsekwencjach.",
  },

  "Life is Strange Before The Storm": {
    world: "Wysteria",
    protagonist: "Chloe Price",
    antagonist: "Problemy rodzinne i społeczne",
    description:
      "Prequel oryginalnej gry, skupiający się na burzliwym okresie Chloe.",
  },

  "Kangurek Kao": {
    world: "Zafaria, Mooshu, Khrysalis",
    protagonist: "Kao",
    antagonist: "Bóbr Nero i różne bestie",
    description:
      "Platformówka o kangurku walczącym z siłami zła w kolorowych światach.",
  },

  "Sniper Elite 3": {
    world: "Zafaria",
    protagonist: "Karl Fairburne",
    antagonist: "Naziści",
    description:
      "Taktyczna strzelanka z perspektywy snajpera podczas II wojny światowej.",
  },

  "Prince of Persia Warrior Within": {
    world: "Zafaria",
    protagonist: "Książę Persji",
    antagonist: "Duch Czasu / Dahaka",
    description:
      "Mroczniejsza odsłona serii, gdzie książę walczy o życie z nieubłaganym przeznaczeniem.",
  },

  MediEvil: {
    world: "Darkmoor",
    protagonist: "Sir Daniel Fortesque",
    antagonist: "Zarok",
    description:
      "Humorystyczna przygodowa gra akcji o powstaniu nieumarłego bohatera.",
  },

  "Shadow of The Tomb Raider": {
    world: "Azteca",
    protagonist: "Lara Croft",
    antagonist: "Trinity / siły starożytne",
    description:
      "Przygoda archeolożki w Ameryce Południowej, pełna pułapek i zagadek.",
  },

  "God of War": {
    world: "Aquila",
    protagonist: "Kratos",
    antagonist: "Ares",
    description:
      "Mitologiczna bijatyka o bogu wojny, walce z bogami i własną przeszłością.",
  },

  "God of War 2": {
    world: "Aquila",
    protagonist: "Kratos",
    antagonist: "Zeus",
    description:
      "Kontynuacja epickiej historii Kratosa, w której walczy przeciw samym bogom.",
  },

  "God of War Ghost of Sparta": {
    world: "Aquila",
    protagonist: "Kratos",
    antagonist: "Thanatos",
    description:
      "Historia ukazująca mroczne sekrety przeszłości Kratosa i jego walkę z bogami śmierci.",
  },

  "God of War Chains of Olympus": {
    world: "Aquila",
    protagonist: "Kratos",
    antagonist: "Morfeusz / Persephone",
    description:
      "Prequel ukazujący wczesne misje Kratosa i konflikty z bogami.",
  },

  "God of War Wstąpienie": {
    world: "Aquila",
    protagonist: "Kratos",
    antagonist: "Ares",
    description: "Kolejna przygoda wojownika w świecie mitologii greckiej.",
  },

  "God of War 3": {
    world: "Aquila",
    protagonist: "Kratos",
    antagonist: "Zeus",
    description: "Kulminacyjna walka Kratosa z bogami Olimpu.",
  },

  "God of War 2018": {
    world: "Grizzleheim",
    protagonist: "Kratos i Atreus",
    antagonist: "Bogowie nordyccy",
    description:
      "Nowy rozdział w nordyckiej mitologii, ojciec i syn stawiają czoła potężnym bogom.",
  },

  "God of War Ragnarok": {
    world: "Grizzleheim",
    protagonist: "Kratos i Atreus",
    antagonist: "Loki / Thor / Odyn",
    description: "Epickie zakończenie nordyckiej sagi Kratosa i Atreusa.",
  },

  "Ghost of Tsushima": {
    world: "Mooshu",
    protagonist: "Jin Sakai",
    antagonist: "Mongolowie",
    description:
      "Otwarte walki samuraja w feudalnej Japonii przeciwko najeźdźcom.",
  },

  "Ghost of Yotei": {
    world: "Mooshu",
    protagonist: "Jin / lokalni bohaterowie",
    antagonist: "Duchy i wrogowie",
    description:
      "Kontynuacja przygód w Japonii z elementami folkloru i mitologii.",
  },

  Undertale: {
    world: "Wizard City",
    protagonist: "Frisk",
    antagonist: "Flowey / wybory moralne",
    description:
      "Unikalna RPG z możliwością wyboru między walką a pokojowym rozwiązaniem konfliktów.",
  },

  Portal: {
    world: "Celestia",
    protagonist: "Chell",
    antagonist: "GLaDOS",
    description:
      "Puzzle-platformówka z innowacyjnym mechanizmem portali i czarnym humorem.",
  },

  "Portal 2": {
    world: "Celestia",
    protagonist: "Chell",
    antagonist: "GLaDOS / Wheatley",
    description:
      "Rozszerzenie oryginalnego portalu z większą historią i nowymi zagadkami.",
  },

  Valheim: {
    world: "Grizzleheim",
    protagonist: "Wiking",
    antagonist: "Świat i potwory",
    description: "Survival w otwartym świecie inspirowanym nordycką mitologią.",
  },

  "A Way Out": {
    world: "Marleybone",
    protagonist: "Leo i Vincent",
    antagonist: "System więzienny / przeciwnicy",
    description: "Kooperacyjna gra akcji o ucieczce z więzienia i zemście.",
  },

  Creaks: {
    world: "Darkmoor",
    protagonist: "Bohater",
    antagonist: "Monstra i zagadki",
    description:
      "Platformowa przygoda z unikalnym stylem artystycznym i łamigłówkami.",
  },

  Superhot: {
    world: "Celestia",
    protagonist: "Gracz",
    antagonist: "Siły czasoprzestrzeni",
    description: "FPS, w którym czas porusza się tylko wtedy, gdy się ruszasz.",
  },

  "Superhot Mind Control Delete": {
    world: "Celestia",
    protagonist: "Gracz",
    antagonist: "Korpo / system",
    description: "Kontynuacja eksperymentalnego FPS-a z manipulacją czasu.",
  },

  Returnal: {
    world: "Khrysalis",
    protagonist: "Selene",
    antagonist: "Obcy / cykl czasowy",
    description:
      "Roguelike sci-fi shooter z niekończącym się cyklem życia i śmierci.",
  },

  "LEGO Ninjago Film Gra": {
    world: "Mooshu",
    protagonist: "Ninjago Team",
    antagonist: "Lord Garmadon",
    description: "Przygodowa gra akcji dla dzieci w świecie LEGO Ninjago.",
  },

  "LEGO Marvel Super Heroes": {
    world: "Wizard City, Marleybone",
    protagonist: "Bohaterowie Marvela",
    antagonist: "Loki i inni złoczyńcy",
    description: "Klockowa przygoda superbohaterów w otwartym świecie.",
  }, // 🎮 gameDescriptions – Część 4
  "LEGO Harry Potter Lata 1–4": {
    world: "Wizard City",
    protagonist: "Harry Potter i przyjaciele",
    antagonist: "Lord Voldemort i śmierciożercy",
    description:
      "Platformówka przygodowa z serii LEGO, odwzorowująca pierwsze lata Harry'ego w Hogwarcie.",
  },

  "LEGO Harry Potter Lata 5–7": {
    world: "Wizard City",
    protagonist: "Harry Potter i przyjaciele",
    antagonist: "Lord Voldemort i śmierciożercy",
    description:
      "Kontynuacja przygód w świecie LEGO, kończąca historię książkową.",
  },

  "Harry Potter i Kamień Filozoficzny": {
    world: "Wizard City",
    protagonist: "Harry Potter",
    antagonist: "Lord Voldemort",
    description:
      "Pierwsza część klasycznej przygody młodego czarodzieja w świecie magii.",
  },

  "Hogwart's Legacy": {
    world: "Wizard City",
    protagonist: "Nowy uczeń Hogwartu",
    antagonist: "Mroczne siły",
    description:
      "Otwarte RPG w uniwersum Harry’ego Pottera z własnym bohaterem.",
  },

  "School of Dragons": {
    world: "Grizzleheim",
    protagonist: "Trener smoków",
    antagonist: "Niebezpieczne smoki i wyzwania",
    description:
      "Gra MMO osadzona w świecie Jak wytresować smoka, uczysz smoki i eksplorujesz Wyspę Berk.",
  },

  "Rise of Berk": {
    world: "Grizzleheim",
    protagonist: "Trener smoków",
    antagonist: "Wrogowie Berk",
    description: "Strategiczna gra mobilna o rozwoju wioski i tresurze smoków.",
  },

  "Titan Uprising": {
    world: "Grizzleheim",
    protagonist: "Trener i smoki",
    antagonist: "Tytani i przeciwnicy",
    description: "Kontynuacja mobilnych przygód z serii Jak wytresować smoka.",
  },

  "How To Train Your Dragon": {
    world: "Grizzleheim",
    protagonist: "Hiccup i Smocza Drużyna",
    antagonist: "Niebezpieczne smoki i przeciwnicy",
    description: "Platformówka/adventure oparta na pierwszym filmie HTTYD.",
  },

  "How To Train Your Dragon 2": {
    world: "Grizzleheim",
    protagonist: "Hiccup i Smocza Drużyna",
    antagonist: "Nowi wrogowie i smokobójcy",
    description: "Kontynuacja przygód w rozszerzonym świecie smoków.",
  },

  "Dawn Of New Riders": {
    world: "Grizzleheim",
    protagonist: "Nowi trenerzy smoków",
    antagonist: "Zagrożenia dla Berk",
    description: "Mobilna gra przygodowa z uniwersum HTTYD.",
  },

  "Dragons Nine Realms": {
    world: "Khrysalis",
    protagonist: "Nowi bohaterowie",
    antagonist: "Zło w nowych światach",
    description: "Strategiczna przygoda w dziewięciu krainach smoków.",
  },

  "Dragons Wild Skies": {
    world: "Grizzleheim",
    protagonist: "Trener i smoki",
    antagonist: "Wrogowie i wyzwania",
    description: "Gra akcji/platformówka w uniwersum HTTYD.",
  },

  "Reksio i Skarb Piratów": {
    world: "Zafaria",
    protagonist: "Reksio",
    antagonist: "Piraci",
    description: "Klasyczna przygodówka z Reksiem w roli głównej.",
  },

  "Reksio i UFO": {
    world: "Celestia, Khrysalis",
    protagonist: "Reksio",
    antagonist: "Kosmici",
    description: "Przygody Reksia w spotkaniu z obcymi.",
  },

  "Reksio i Czarodzieje": {
    world: "Wizard City",
    protagonist: "Reksio",
    antagonist: "Czarodzieje i zagadki",
    description: "Platformówka edukacyjno-przygodowa z elementami magii.",
  },

  "Reksio i Wehikuł Czasu": {
    world: "Azteca, Celestia, Krokotopia, Avalon",
    protagonist: "Reksio",
    antagonist: "Czas i złoczyńcy",
    description: "Przygody Reksia w podróży przez różne epoki.",
  },

  "Reksio i Kapitan Nemo": {
    world: "Marleybone, Krokotopia",
    protagonist: "Reksio",
    antagonist: "Kapitan Nemo",
    description: "Podwodna przygoda Reksia w świecie Nautilusa.",
  },

  "Reksio i Kretes w Akcji": {
    world:
      "Wizard City, Zafaria, Celestia, Khrysalis, Azteca, Krokotopia, Avalon",
    protagonist: "Reksio i Kretes",
    antagonist: "Różni przeciwnicy",
    description: "Szerokie przygody w wielu światach z Reksiem i Kretesem.",
  },

  "Reksio i Kretes: Tajemnica Trzeciego Wymiaru": {
    world: "Wysteria",
    protagonist: "Reksio i Kretes",
    antagonist: "Trzeci wymiar / zagadki",
    description: "Nowoczesna przygodówka 3D z Reksiem i Kretesem.",
  },

  "Star Wars Battlefront 2": {
    world: "Celestia, Khrysalis",
    protagonist: "Żołnierze Rebelii",
    antagonist: "Imperium Galaktyczne",
    description:
      "Strzelanka MMO w uniwersum Gwiezdnych Wojen z walkami PvP i kampanią.",
  },

  "GTA 5 Online": {
    world: "Marleybone, Wizard City",
    protagonist: "Gracz",
    antagonist: "Gangsterzy i przestępczy świat",
    description:
      "Otwartoświatowa gra online, eksploracja Los Santos i działania w criminal sandbox.",
  },
  "Ark Survival Evolved": {
    world: "Azteca",
    protagonist: "Gracz – ocalały",
    antagonist: "Dinozaury i inne niebezpieczeństwa",
    description:
      "Survival MMO w świecie prehistorycznym, budujesz obozy, polujesz i przetrwasz wśród dinozaurów.",
  },

  "Don't Starve": {
    world: "Zafaria, Darkmoor",
    protagonist: "Wilson / inni ocalały",
    antagonist: "Niebezpieczeństwa dziczy i bestie",
    description:
      "Survival roguelike, musisz przetrwać w dziwnym, gotyckim świecie pełnym zagrożeń.",
  },

  Phasmophobia: {
    world: "Darkmoor",
    protagonist: "Zespół łowców duchów",
    antagonist: "Duchy i zjawy",
    description:
      "Horror współpracy online, identyfikujesz duchy i wykonujesz misje paranormalne.",
  },

  "Among Us": {
    world: "Celestia",
    protagonist: "Załoga statku",
    antagonist: "Impostorzy",
    description:
      "Gra wieloosobowa w trybie dedukcji społecznej, znajdź sabotażystów zanim wyeliminują załogę.",
  },

  "Diablo Immortal": {
    world: "Dragonspyre",
    protagonist: "Łowcy demonów",
    antagonist: "Demony i Mroczne Siły",
    description:
      "MMORPG akcji w uniwersum Diablo, walka z demonami i eksploracja świata Sanctum.",
  },

  "Martha is Dead": {
    world: "Wysteria",
    protagonist: "Giulia / gracz",
    antagonist: "Tajemnice i trauma",
    description:
      "Psychologiczny horror w scenerii II wojny światowej, mroczna opowieść o śmierci i manipulacji.",
  },

  "Sherlock Holmes Chapter One": {
    world: "Wysteria",
    protagonist: "Młody Sherlock Holmes",
    antagonist: "Różni przestępcy",
    description:
      "Detektywistyczna przygoda RPG, rozwiązujesz zagadki i śledzisz zbrodnie w młodości Sherlocka.",
  },

  "Sherlock Holmes The Awakened": {
    world: "Darkmoor",
    protagonist: "Sherlock Holmes",
    antagonist: "Cthulhu / kultystów",
    description:
      "Przygodowa gra detektywistyczna w mrocznym, horrorowym klimacie Lovecrafta.",
  },

  "Persona 3 Reload": {
    world: "Wysteria, Aquila",
    protagonist: "Uczeń / bohater",
    antagonist: "Shadows / mroczne siły",
    description:
      "Remake RPG o walce ze Shadow w wieżach Tartaru, rozwój postaci i relacje społeczne.",
  },

  "Persona 3 Portable": {
    world: "Wysteria, Aquila",
    protagonist: "Uczeń / bohater",
    antagonist: "Shadows / mroczne siły",
    description:
      "Port mobilny klasycznego Persona 3 z możliwością wyboru bohatera i bohaterki.",
  },

  "Persona 3 Dancing in The Moonlight": {
    world: "Wysteria, Aquila",
    protagonist: "Bohaterowie Persona 3",
    antagonist: "Rytmowe wyzwania",
    description:
      "Spin-off muzyczny, tańczysz i wykonujesz rytmiczne wyzwania z postaciami Persona 3.",
  },

  "Persona 4 Golden": {
    world: "Wysteria",
    protagonist: "Yu Narukami i przyjaciele",
    antagonist: "Shadow / mroczne tajemnice",
    description:
      "RPG z elementami detektywistycznymi, eksplorujesz tajemnicze przypadki w Inaba.",
  },

  "Persona 4 Arena": {
    world: "Wysteria",
    protagonist: "Bohaterowie Persona 4",
    antagonist: "Wrogowie z Alternate World",
    description:
      "Bijatyka oparta na uniwersum Persona 4, starcia 1v1 między bohaterami.",
  },

  "Persona 4 Dancing all Night": {
    world: "Wysteria",
    protagonist: "Bohaterowie Persona 4",
    antagonist: "Rytmowe wyzwania",
    description:
      "Spin-off muzyczny, taniec i rytmiczne mini-gry w świecie Persona 4.",
  }, // 🎮 gameDescriptions – Część 6

  "Persona 5 Royal": {
    world: "Wysteria, Avalon, Marleybone, Krokotopia, Celestia, Dragonspyre",
    protagonist: "Joker / Phantom Thieves",
    antagonist: "Zepsiani dorośli, korporacje i zło społeczne",
    description:
      "RPG z elementami życia codziennego i walki w Metaverse, przejmujesz serca złych ludzi.",
  },

  "Persona 5 Strikers": {
    world:
      "Wysteria, Wizard City, Avalon, Polaris, Marleybone, Mooshu, Celestia, Dragonspyre",
    protagonist: "Phantom Thieves",
    antagonist: "Nowi złoczyńcy i Shadows",
    description:
      "Action RPG kontynuujący wydarzenia z Persona 5, dynamiczna walka i podróż po Japonii i świecie Metaverse.",
  },

  "Persona 5 Tactica": {
    world: "Wysteria, Polaris, Mooshu, Dragonspyre, Marleybone",
    protagonist: "Phantom Thieves",
    antagonist: "Wrogowie strategiczni",
    description:
      "Spin-off taktyczny Persona 5, turowa strategia z bohaterami Phantom Thieves.",
  },

  "Persona 5 The Phantom X": {
    world: "Wysteria",
    protagonist: "Phantom Thieves",
    antagonist: "Nowe zagrożenia",
    description:
      "Kolejna odsłona spin-offowa Persona 5 z nowymi wyzwaniami i misjami Phantom Thieves.",
  },

  "Persona 5 Dancing in The Starlight": {
    world: "Wysteria",
    protagonist: "Bohaterowie Persona 5",
    antagonist: "Rytmowe wyzwania",
    description: "Muzyczny spin-off, tańczysz w rytm muzyki Persona 5.",
  },

  "Persona Q": {
    world: "Wysteria",
    protagonist: "Postacie z Persona 3 i 4",
    antagonist: "Mroczne tajemnice labiryntów",
    description:
      "Dungeon crawler RPG, postacie z różnych części Persona spotykają się w tajemniczych lochach.",
  },

  "Persona Q2": {
    world: "Wysteria",
    protagonist: "Postacie z Persona 3, 4 i 5",
    antagonist: "Nowe Shadows",
    description:
      "Kontynuacja Persona Q, wspólne przygody bohaterów w lochach i eksploracja tajemniczych światów.",
  },

  "Epoka Lodowcowa 3": {
    world: "Polaris, Azteca",
    protagonist: "Manfred, Sid, Diego",
    antagonist: "Scrat i przygody z epoki lodowcowej",
    description:
      "Platformówka przygodowa z bohaterami znanymi z filmu, zabawa i zagadki w zimowej scenerii.",
  },

  "Dante's Inferno": {
    world: "Dragonspyre",
    protagonist: "Dante",
    antagonist: "Demony Piekła",
    description:
      "Akcja hack'n'slash oparta na Boskiej Komedii, walka przez piekielne kręgi w poszukiwaniu ukochanej.",
  },

  Madagaskar: {
    world: "Zafaria",
    protagonist: "Alex, Marty, Gloria, Melman",
    antagonist: "Wilki i inne zwierzęce przeszkody",
    description:
      "Platformówka przygodowa z bohaterami z filmu, zabawa w dżungli i mieście.",
  },

  "Madagaskar 2": {
    world: "Zafaria",
    protagonist: "Alex, Marty, Gloria, Melman",
    antagonist: "Nowe wyzwania w Afryce",
    description:
      "Kontynuacja przygód bohaterów, platformówka pełna zagadek i humoru.",
  },

  "Spooky's Jumpscare Mansion": {
    world: "Darkmoor",
    protagonist: "Gracz",
    antagonist: "Duchy i potwory",
    description:
      "Horror platformowy z humorystycznymi jump-scare'ami, eksplorujesz mroczny dwór pełen niespodzianek.",
  },

  "Metal Gear Rising Revengeance": {
    world: "Celestia",
    protagonist: "Raiden",
    antagonist: "Private military companies",
    description:
      "Action hack'n'slash z dynamiczną walką mieczem, spin-off Metal Gear w futurystycznym świecie.",
  },

  "Sphinx and The Cursed Mummy": {
    world: "Krokotopia",
    protagonist: "Sphinx, Mummy",
    antagonist: "Kłamliwe siły i złoczyńcy",
    description:
      "Platformówka przygodowa w starożytnym Egipcie z łamigłówkami i walką.",
  },

  "Buckshot Roulette": {
    world: "Darkmoor",
    protagonist: "Strzelec / gracz",
    antagonist: "Gangsterzy i pułapki",
    description:
      "Strzelanka z elementami zręcznościowymi, eksplorujesz mroczne ulice i eliminujesz wrogów.",
  },

  Raft: {
    world: "Celestia",
    protagonist: "Gracz – ocalały",
    antagonist: "Przetrwanie na oceanie i rekiny",
    description:
      "Survival w open world na tratwie, zbierasz zasoby, rozwijasz się i unikaj niebezpieczeństw wody.",
  },
  "Kung Fu Panda": {
    world: "Mooshu",
    protagonist: "Po",
    antagonist: "Tai Lung",
    description:
      "Platformówka/action-adventure inspirowana filmem, Po trenuje sztuki walki, by pokonać złoczyńcę Tai Lunga.",
  },

  "Duke Dashington": {
    world: "Azteca, Krokotopia, Aquila, Dragonspyre, Khrysalis",
    protagonist: "Duke Dashington",
    antagonist: "Wrogowie w platformowych poziomach",
    description:
      "Zręcznościowa platformówka z wieloma światem, szybka akcja i pokonywanie przeszkód.",
  },

  "Spongebob Battle for Bikini Bottom": {
    world: "Celestia",
    protagonist: "SpongeBob",
    antagonist: "Plankton i jego roboty",
    description:
      "Platformówka 3D, zbierasz przedmioty i ratujesz Bikini Bottom przed Planktonem.",
  },

  "Game Of Thrones Telltale": {
    world: "Avalon, Krokotopia, Grizzleheim",
    protagonist: "Rodzina Forresterów",
    antagonist: "Inne rody Westeros",
    description:
      "Episodiczna gra przygodowa z decyzjami moralnymi, akcja dzieje się równolegle do wydarzeń serialu.",
  },

  "Game Of Thrones RPG": {
    world: "Avalon, Grizzleheim",
    protagonist: "Bohater gracza",
    antagonist: "Polityczne i militarne zagrożenia Westeros",
    description:
      "RPG strategiczno-przygodowe w świecie Westeros, decydujesz o losach rodu i królestwa.",
  },

  Cuphead: {
    world: "Marleybone",
    protagonist: "Cuphead & Mugman",
    antagonist: "Diabeł i jego pomocnicy",
    description:
      "Run'n'gun platformówka z bossami w stylu retro kreskówki, wymagająca perfekcyjnej zręczności.",
  },

  Hercules: {
    world: "Aquila",
    protagonist: "Herkules",
    antagonist: "Hades",
    description:
      "Platformówka inspirowana filmem Disneya, Hercules walczy z potworami i złoczyńcami starożytnej Grecji.",
  },

  "Call of Duty World War 2": {
    world: "Polaris, Dragonspyre",
    protagonist: "Żołnierze alianccy",
    antagonist: "Siły Osi",
    description:
      "FPS osadzony w realiach II wojny światowej, dynamiczne misje i akcja w kampanii wojennej.",
  },

  "Age of Empires": {
    world: "Krokotopia, Wysteria, Dragonspyre, Aquila, Azteca, Mooshu",
    protagonist: "Dowódca gracza",
    antagonist: "Wrogie cywilizacje",
    description:
      "Strategia czasu rzeczywistego, budujesz imperium, zarządzasz ekonomią i wojskiem, walczysz z innymi cywilizacjami.",
  },

  Helltaker: {
    world: "Dragonspyre",
    protagonist: "Helltaker",
    antagonist: "Demony i łamigłówki",
    description:
      "Logiczna gra przygodowa z komediowym twistem, rozwiązujesz zagadki, by zdobyć serca demonów.",
  },

  "The Binding Of Isaac": {
    world: "Darkmoor, Dragonspyre",
    protagonist: "Isaac",
    antagonist: "Potwory i demony w piwnicy",
    description:
      "Roguelike z elementami hack'n'slash, eksplorujesz losowo generowane lochy i walczysz z wrogami.",
  },

  "Squid Game Bez Pardonu": {
    world: "Wysteria",
    protagonist: "Gracz – uczestnik gier",
    antagonist: "Organizator i rywalizujący gracze",
    description:
      "Gra inspirowana serialem, survival w ekstremalnych grach zręcznościowych.",
  },

  Aladyn: {
    world: "Zafaria",
    protagonist: "Aladyn",
    antagonist: "Dżafar",
    description:
      "Platformówka/action-adventure w klimacie baśni arabskiej, magiczna przygoda z lampą i dżinem.",
  },

  "Król Lew": {
    world: "Zafaria",
    protagonist: "Simba",
    antagonist: "Scar",
    description:
      "Platformówka przygodowa inspirowana filmem, Simba walczy o odzyskanie tronu.",
  },

  "Black Myth: Wukong": {
    world: "Mooshu",
    protagonist: "Sun Wukong",
    antagonist: "Demony i boskie wyzwania",
    description:
      "Akcja RPG w świecie inspirowanym klasyczną chińską powieścią 'Podróż na Zachód'.",
  },

  "Total War: Three Kingdoms": {
    world: "Mooshu",
    protagonist: "Wybór gracza – generał/wojownik",
    antagonist: "Rywalizujące frakcje",
    description:
      "Strategia turowa i RTS w starożytnych Chinach, dyplomacja, wojny i taktyka bitewna.",
  },

  "The Legend Of Zelda: Breath of The Wild": {
    world: "Avalon, Celestia",
    protagonist: "Link",
    antagonist: "Calamity Ganon",
    description:
      "Otwarty świat, eksploracja Hyrule, puzzle, walka i przygody w legendarnym uniwersum Zeldy.",
  },

  "Hyrule Warriors: Age Of Calamity": {
    world: "Avalon, Celestia",
    protagonist: "Link, Zelda i wojownicy Hyrule",
    antagonist: "Calamity Ganon i armia",
    description:
      "Akcja hack'n'slash w świecie Zeldy, wielkie bitwy i misje wojowników Hyrule.",
  },

  "The Legend Of Zelda: Tears of Kingdom": {
    world: "Avalon, Celestia",
    protagonist: "Link",
    antagonist: "Nowe zło w Hyrule",
    description:
      "Kontynuacja Breath of the Wild, eksploracja, nowe zdolności i epicka przygoda w Hyrule.",
  },

  "Hyrule Warriors: Age of Imprisonment": {
    world: "Avalon, Celestia",
    protagonist: "Link, Zelda, bohaterowie Hyrule",
    antagonist: "Armie zła",
    description:
      "Spin-off hack'n'slash z epickimi bitwami i historią Hyrule w alternatywnej linii czasowej.",
  },
  "Super Mario Odyssey": {
    world:
      "Wizard City, Krokotopia, Marleybone, Mooshu, Dragonspyre, Celestia, Azteca, Khrysalis, Polaris",
    protagonist: "Mario",
    antagonist: "Bowser",
    description:
      "Platformówka 3D z otwartym światem, Mario podróżuje przez różnorodne krainy, aby uratować Peach przed Bowserem.",
  },

  "Luigi's Mansion 3": {
    world: "Darkmoor",
    protagonist: "Luigi",
    antagonist: "King Boo",
    description:
      "Luigi eksploruje nawiedzony hotel pełen duchów, rozwiązując zagadki i ratując przyjaciół.",
  },

  "Super Mario RPG": {
    world: "Wizard City",
    protagonist: "Mario",
    antagonist: "Smithy",
    description:
      "RPG z elementami platformówki, Mario i sojusznicy walczą z inwazją Smithy’ego.",
  },

  "Devil May Cry": {
    world: "Dragonspyre",
    protagonist: "Dante",
    antagonist: "Vergil / demony",
    description:
      "Dynamiczna gra akcji hack'n'slash, Dante walczy z demonami, wykorzystując broń i stylowy combat.",
  },

  "Devil May Cry 2": {
    world: "Dragonspyre",
    protagonist: "Dante",
    antagonist: "Argosax / demony",
    description:
      "Kontynuacja serii, akcja z większym naciskiem na eksplorację i walkę z demonami.",
  },

  "Devil May Cry 3": {
    world: "Dragonspyre",
    protagonist: "Dante",
    antagonist: "Vergil",
    description:
      "Prequel serii, opowiada historię rywalizacji Dantego z bratem Vergilem i demonami.",
  },

  "Devil May Cry 4": {
    world: "Dragonspyre",
    protagonist: "Dante",
    antagonist: "Sanctus / demony",
    description:
      "Hack'n'slash z dynamiczną walką i różnymi stylami walki, Dante walczy z kultem i demonami.",
  },

  "DMC Devil May Cry": {
    world: "Dragonspyre",
    protagonist: "Dante",
    antagonist: "Mundus / demony",
    description:
      "Reboot serii, szybka akcja, platformówka i walka z hordami demonów.",
  },

  "Devil May Cry 5": {
    world: "Dragonspyre",
    protagonist: "Dante, Nero, V",
    antagonist: "Urizen / demony",
    description:
      "Wieloosobowa kampania akcji, trzy grywalne postacie walczą z nowym potężnym demonem.",
  },

  "Clair Obscur Expedition 33": {
    world: "Wysteria, Celestia, Khrysalis, Dragonspyre",
    protagonist: "Ekspedycja gracza",
    antagonist: "Nieznane zagrożenia w świecie gry",
    description:
      "Gra przygodowa z elementami eksploracji i zagadek, odkrywasz tajemnice świata Clair Obscur.",
  },

  "Slay The Princess": {
    world: "Darkmoor",
    protagonist: "Gracz – mroczna postać",
    antagonist: "Księżniczka i strażnicy",
    description:
      "Horror RPG z moralnymi wyborami, gracz staje przed decyzją, kogo zabić i ocalić.",
  },

  "Buckshot Roulette": {
    world: "Darkmoor",
    protagonist: "Gracz – uczestnik gry",
    antagonist: "Los / rywale",
    description:
      "Dynamiczna gra zręcznościowa, unikaj pocisków i wrogów w losowo generowanych poziomach.",
  },

  Gujian: {
    world: "Mooshu",
    protagonist: "Gracz – bohater gry",
    antagonist: "Demony i złoczyńcy",
    description:
      "Chińskie RPG fabularne, eksplorujesz fantastyczne światy, walczysz z wrogami i rozwijasz postać.",
  },

  "Gujian 2": {
    world: "Mooshu",
    protagonist: "Gracz – bohater gry",
    antagonist: "Zło z pradawnej legendy",
    description:
      "Kontynuacja epickiego chińskiego RPG, nowa historia i rozszerzone mechaniki walki.",
  },

  "Gujian 3": {
    world: "Mooshu",
    protagonist: "Gracz – bohater gry",
    antagonist: "Legendarne demony",
    description:
      "Najnowsza odsłona serii, otwarty świat, RPG akcji z chińską mitologią.",
  },

  "Where Winds Meet": {
    world: "Mooshu",
    protagonist: "Gracz",
    antagonist: "Przeciwności losu",
    description:
      "Eksploracyjna przygoda w fantastycznym świecie, odkrywasz sekrety i rozwiązujesz zagadki.",
  },

  "Wuchang Fallen Feathers": {
    world: "Mooshu",
    protagonist: "Gracz – bohater gry",
    antagonist: "Demony i złoczyńcy",
    description:
      "Chińskie RPG z akcją i elementami taktycznymi, walczysz o przywrócenie pokoju w świecie Mooshu.",
  },
};

const Games = () => {
  const [selectedWorld, setSelectedWorld] = useState("Wszystkie");
  const [search, setSearch] = useState("");
  const [selectedGame, setSelectedGame] = useState(null);

  const descriptionRef = useRef(null);

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

  // scroll do opisu po zmianie selectedGame
  useEffect(() => {
    if (selectedGame && descriptionRef.current) {
      descriptionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selectedGame]);

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
            <li
              className={`games-item ${
                selectedGame === game.title ? "active" : ""
              }`}
              key={index}
              onClick={() =>
                setSelectedGame(selectedGame === game.title ? null : game.title)
              }
            >
              {game.title}
            </li>
          ))}
        </ul>

        {selectedGame && gameDescriptions[selectedGame] && (
          <div className="game-description" ref={descriptionRef}>
            <h3>{selectedGame}</h3>

            <p>
              <strong>Do jakiego świata nawiązuje:</strong>{" "}
              {gameDescriptions[selectedGame].world}
            </p>

            <p>
              <strong>Główni Protagoniści:</strong>{" "}
              {gameDescriptions[selectedGame].protagonist}
            </p>

            <p>
              <strong>Główni Antagoniści:</strong>{" "}
              {gameDescriptions[selectedGame].antagonist}
            </p>

            <p>
              <strong>Krótki opis:</strong>{" "}
              {gameDescriptions[selectedGame].description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Games;
