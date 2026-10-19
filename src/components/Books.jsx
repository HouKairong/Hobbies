import "./Books.css";
import { useState, useRef, useEffect } from "react";
import komedia from "../../public/images/komedia.jpg";
import books from "../data/books";
import booksDescriptions from "../data/booksDescriptions";
import gamesData from "../data/gamesData";
import seriesData from "../data/seriesData";
import movies from "../data/movies";
import GalleryModal from "../elements/GalleryModal";

const normalizeTitle = (value = "") =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const getMovieTitles = (entries, results = []) => {
  if (!entries) return results;

  if (Array.isArray(entries)) {
    entries.forEach((entry) => getMovieTitles(entry, results));
    return results;
  }

  if (typeof entries === "object") {
    if (entries.title) {
      results.push(entries.title);
    }

    Object.values(entries).forEach((value) => {
      if (value && typeof value === "object") {
        getMovieTitles(value, results);
      }
    });
  }

  return results;
};

const getSectionSeriesTitles = (entries, results = []) => {
  if (!entries) return results;

  if (Array.isArray(entries)) {
    entries.forEach((entry) => {
      if (entry && typeof entry === "object" && entry.title) {
        results.push(entry.title);
      }
    });
    return results;
  }

  if (typeof entries === "object") {
    Object.entries(entries).forEach(([key, value]) => {
      if (["parts", "children", "description", "why"].includes(key)) {
        return;
      }

      if (value && typeof value === "object") {
        getSectionSeriesTitles(value, results);
      }
    });
  }

  return results;
};

const chinaMovieExplicitAliases = [
  "Kung Fu Panda",
  "Behemoth",
  "Creation of the Gods I: Kingdom of Storms",
  "Konfucjusz",
  "Małpi Król",
  "Mulan",
  "Ne Zha",
  "Painted Skin",
  "Przyczajony Tygrys, Ukryty Smok",
  "Rower z Pekinu",
  "The Wandering Earth",
  "The Yinyang Master",
  "White Snake",
  "Wielki Mur",
];

const relatedMediaAliases = {
  Wiedźmin: ["Wiedźmin", "Wiedźmin 1", "Wiedźmin 2", "Wiedźmin 3"],
  "Pieśń Lodu i Ognia": [
    "Gra o Tron",
    "Game of Thrones",
    "House of the Dragon",
    "Ród Smoka",
    "Rycerz Siedmiu Królestw",
    "A Song of Ice and Fire",
  ],
  "Sherlock Holmes": [
    "Sherlock Holmes",
    "Sherlock",
    "Moriarty the Patriot",
    "Sherlock Holmes Zbrodnia i Kara",
    "Sherlock Holmes Chapter One",
    "Sherlock Holmes The Awakened",
    "Sherlock Holmes Gra Cieni",
    "Holmes i Watson",
    "Enola Holmes",
    "Enola Holmes 2",
    "Enola Holmes 3",
  ],
  "Książki o Chinach": [
    "Kung Fu Panda",
    "Black Myth: Wukong",
    "Total War: Three Kingdoms",
    "Gujian",
    "Gujian 2",
    "Gujian 3",
    "Wuchang Fallen Feathers",
    "Genshin Impact",
    "Dziesięć mil kwitnących brzoskwiń (Eternal Love)",
    "Eternal Love of Dream",
    "The Untamed",
    "Wu Xin the Monster Killer",
    "Nirvana in Fire",
    "Young Sherlock",
    "The Long Ballad",
    "Oh My Emperor",
    "Arsenal Military Academy",
    "Reset",
    "Under the Skin",
    "Love in the Desert",
    "Towards the Republic",
    "Ice Fantasy",
    "Zapiski Zielarki",
    "Behemoth",
    "Creation of the Gods I: Kingdom of Storms",
    "Konfucjusz",
    "Małpi Król",
    "Mulan",
    "Ne Zha",
    "Painted Skin",
    "Przyczajony Tygrys, Ukryty Smok",
    "Rower z Pekinu",
    "The Wandering Earth",
    "The Yinyang Master",
    "White Snake",
    "Wielki Mur",
  ],
  "Boska Komedia": [
    "Dante's Inferno",
    "Dante's Inferno: An Animated Epic",
    "The Alighieri Circle: Dante's Bloodline",
    "Devil May Cry",
    "Devil May Cry 2",
    "Devil May Cry 3",
    "Devil May Cry 4",
    "DMC: Devil May Cry",
    "Devil May Cry 5",
    "TES IV Oblivion",
    "Sinner: Sacrifice for Redemption",
    "Heroes of Might and Magic 3",
    "Might and Magic: Heroes 6",
    "Assassin's Creed Brotherhood",
    "Assassin's Creed 2",
    "DOOM 1 & 2",
    "DOOM 64",
    "DOOM 3",
    "DOOM",
    "DOOM Eternal",
    "DOOM The Dark Ages",
    "Warhammer 40,000 Dawn of War",
    "Warhammer 40,000 Space Marine",
    "Warhammer 40,000 Space Marine 2",
    "Warhammer 40,000 Boltgun",
    "Warhammer 40,000 Boltgun 2",
    "Clive Barker's Hellraiser: Revival",
    "Diablo Immortal",
    "Helltaker",
    "The Binding Of Isaac",
    "Painkiller",
    "Lucyfer",
    "Egzorcysta Bogdan Boner",
    "Seven Deadly Sins",
    "Stranger Things",
    "Hannibal",
    "Marianne",
    "Chilling Adventures of Sabrina",
    "Po drugiej stronie muru",
    "Hazbin Hotel",
    "Helluva Boss",
    "Cuphead",
    "Devilman Crybaby",
    "Minecraft",
  ],
  "Death Note": ["Death Note"],
  "Mitologia Nordycka": [
    "TES V Skyrim",
    "Wiedźmin 3",
    "Assassin's Creed Valhalla",
    "Valheim",
    "LEGO Marvel Super Heroes",
    "School of Dragons",
    "Rise of Berk",
    "Titan Uprising",
    "How To Train Your Dragon",
    "How To Train Your Dragon 2",
    "Dawn Of New Riders",
    "Dragons Wild Skies",
    "Ragnarok",
    "Wikingowie",
    "Wikingowie Walhalla",
    "Gra o Tron",
    "Wiedźmin Netflix",
    "Jeźdźcy smoków",
    "God of War (2018)",
    "God of War Ragnarök",
    "God of War Laufey",
    "Norse Mythology",
    "Thor",
  ],
  "Jak Wytresować Smoka": [
    "School of Dragons",
    "Rise of Berk",
    "Titan Uprising",
    "How To Train Your Dragon",
    "How To Train Your Dragon 2",
    "Dawn Of New Riders",
    "Dragons Wild Skies",
    "Dragons Nine Realms",
  ],
  "Obrona Sokratesa": ["Sokrates", "Platon"],
};

const excludedRelatedTitles = {
  "Książki o Chinach": [
    "Kung Fu Panda: Sekrety Mistrzów",
    "Kung Fu Panda: Tajemnice zwoju",
    "Mulan 2",
    "Ne Zha 2",
    "Przyczajony Tygrys, Ukryty Smok: Miecz Przeznaczenia",
  ].map(normalizeTitle),
  "Boska Komedia": ["DOOM (2005)", "DOOM: Anihilacja (2019)"].map(
    normalizeTitle,
  ),
};

const getRelatedMedia = (seriesName) => {
  const aliases = relatedMediaAliases[seriesName] ?? [seriesName];
  const normalizedAliases = aliases.map(normalizeTitle);

  const findMatches = (items, fieldName = "title", keepBaseTitle = false) => {
    const matches = [];
    const seen = new Set();
    const preferredBaseTitle = normalizeTitle(seriesName);

    items.forEach((item) => {
      const title = item?.[fieldName];
      if (!title) return;

      const normalizedTitle = normalizeTitle(title);
      const isMatch = normalizedAliases.some((alias) => {
        const normalizedAlias = normalizeTitle(alias);

        if (normalizedTitle === normalizedAlias) {
          return true;
        }

        return (
          normalizedTitle.startsWith(`${normalizedAlias} `) ||
          normalizedAlias.startsWith(`${normalizedTitle} `)
        );
      });

      if (!isMatch) return;
      if (seen.has(normalizedTitle)) return;

      seen.add(normalizedTitle);
      matches.push(title);
    });

    return matches.filter((title, index) => {
      const normalizedTitle = normalizeTitle(title);

      if (excludedRelatedTitles[seriesName]?.includes(normalizedTitle)) {
        return false;
      }

      if (keepBaseTitle && normalizedTitle === preferredBaseTitle) {
        return true;
      }

      const explicitAliases = normalizedAliases.map((alias) =>
        normalizeTitle(alias),
      );
      const isExplicitAlias = explicitAliases.includes(normalizedTitle);

      return !matches.some((otherTitle, otherIndex) => {
        if (index === otherIndex) return false;

        const normalizedOtherTitle = normalizeTitle(otherTitle);

        if (keepBaseTitle && normalizedOtherTitle === preferredBaseTitle) {
          return false;
        }

        const otherIsExplicitAlias =
          explicitAliases.includes(normalizedOtherTitle);
        if (isExplicitAlias || otherIsExplicitAlias) {
          return false;
        }

        return (
          normalizedOtherTitle.includes(normalizedTitle) &&
          normalizedOtherTitle.length > normalizedTitle.length
        );
      });
    });
  };

  const movieTitles = getMovieTitles(movies);
  const boskaKomediaSectionTitles = getSectionSeriesTitles(
    movies["Boska Komedia"] ?? {},
  )
    .filter(Boolean)
    .filter(
      (title, index, array) =>
        array.findIndex(
          (item) => normalizeTitle(item) === normalizeTitle(title),
        ) === index,
    )
    .filter(
      (title) =>
        !["DOOM (2005)", "DOOM: Anihilacja (2019)"].some(
          (excluded) => normalizeTitle(excluded) === normalizeTitle(title),
        ),
    );

  const gameMatches = findMatches(gamesData, "title", true);
  const boskaKomediaForcedGameTitles = ["Assassin's Creed 2"];
  const filteredGameMatches =
    seriesName === "Wiedźmin"
      ? [
          { label: "Wiedźmin", target: "Wiedźmin" },
          { label: "Wiedźmin 2", target: "Wiedźmin 2" },
          { label: "Wiedźmin 3", target: "Wiedźmin 3" },
          {
            label: "Wiedźmin: Pożegnanie Białego Wilka",
            target: "Wiedźmin: Pożegnanie Białego Wilka",
          },
        ]
      : seriesName === "Death Note"
        ? gamesData
            .filter((game) => game.title.startsWith("Persona"))
            .map((game) => ({
              label: game.title,
              target: game.title,
            }))
        : seriesName === "Boska Komedia"
        ? Array.from(
            new Set([
              ...gameMatches.filter((title) => {
                const normalizedTitle = normalizeTitle(title);

                return ![
                  "Assassin's Creed",
                  "Assassin's Creed Brotherhood",
                ].some(
                  (blocked) => normalizeTitle(blocked) === normalizedTitle,
                );
              }),
              ...boskaKomediaForcedGameTitles.filter((title) =>
                gamesData.some(
                  (game) =>
                    normalizeTitle(game.title) === normalizeTitle(title),
                ),
              ),
            ]),
          )
        : seriesName === "Obrona Sokratesa"
          ? [
              {
                label: "Assassin's Creed Odyssey",
                target: "Assassin's Creed Odyssey",
              },
            ]
          : seriesName === "Mitologia Nordycka"
            ? [
                { label: "TES V Skyrim", target: "TES V Skyrim" },
                { label: "Wiedźmin 3", target: "Wiedźmin 3" },
                {
                  label: "Assassin's Creed Valhalla",
                  target: "Assassin's Creed Valhalla",
                },
                { label: "Valheim", target: "Valheim" },
                {
                  label: "LEGO Marvel Super Heroes",
                  target: "LEGO Marvel Super Heroes",
                },
                { label: "School of Dragons", target: "School of Dragons" },
                { label: "Rise of Berk", target: "Rise of Berk" },
                { label: "Titan Uprising", target: "Titan Uprising" },
                {
                  label: "How To Train Your Dragon",
                  target: "How To Train Your Dragon",
                },
                {
                  label: "How To Train Your Dragon 2",
                  target: "How To Train Your Dragon 2",
                },
                { label: "Dawn Of New Riders", target: "Dawn Of New Riders" },
                { label: "Dragons Wild Skies", target: "Dragons Wild Skies" },
                { label: "God of War (2018)", target: "God of War 2018" },
                { label: "God of War Ragnarök", target: "God of War Ragnarok" },
                { label: "God of War Laufey", target: "God of War Laufey" },
              ]
            : seriesName === "Jak Wytresować Smoka"
              ? [
                  { label: "School of Dragons", target: "School of Dragons" },
                  { label: "Rise of Berk", target: "Rise of Berk" },
                  { label: "Titan Uprising", target: "Titan Uprising" },
                  {
                    label: "How To Train Your Dragon",
                    target: "How To Train Your Dragon",
                  },
                  {
                    label: "How To Train Your Dragon 2",
                    target: "How To Train Your Dragon 2",
                  },
                  { label: "Dawn Of New Riders", target: "Dawn Of New Riders" },
                  { label: "Dragons Wild Skies", target: "Dragons Wild Skies" },
                  {
                    label: "Dragons Nine Realms",
                    target: "Dragons Nine Realms",
                  },
                ]
              : gameMatches;

  const relatedMedia = {
    games: filteredGameMatches,
    series:
      seriesName === "Jak Wytresować Smoka"
        ? [
            { label: "Jeźdźcy smoków", target: "Jeźdźcy smoków" },
            {
              label: "Jeźdźcy smoków 9 światów",
              target: "Jeźdźcy smoków 9 światów",
            },
          ]
        : seriesName === "Mitologia Nordycka"
          ? [
              { label: "Ragnarok", target: "Ragnarok" },
              { label: "Wikingowie", target: "Wikingowie" },
              { label: "Wikingowie Walhalla", target: "Wikingowie Walhalla" },
              { label: "Gra o Tron", target: "Gra o Tron" },
              { label: "Wiedźmin Netflix", target: "Wiedźmin Netflix" },
              { label: "Jeźdźcy smoków", target: "Jeźdźcy smoków" },
            ]
          : seriesName === "Death Note"
            ? [
                { label: "Death Note", target: "Death Note" },
                { label: "Death Note 2015", target: "Death Note 2015" },
                {
                  label: "Persona Trinity Soul",
                  target: "Persona Trinity Soul",
                },
                {
                  label: "Persona 4 The Animation",
                  target: "Persona 4 The Animation",
                },
                {
                  label: "Persona 4 Golden The Animation",
                  target: "Persona 4 Golden The Animation",
                },
                {
                  label: "Persona 5 The Animation",
                  target: "Persona 5 The Animation",
                },
              ]
            : findMatches(seriesData),
    movies:
      seriesName === "Wiedźmin"
        ? [
            { label: "Wiedźmin (2001)", target: "Wiedźmin (2001)" },
            {
              label: "Pół Wieku Poezji Później",
              target: "Pół Wieku Poezji Później",
            },
            {
              label: "Wiedźmin: Zmora Wilka",
              target: "Wiedźmin: Zmora Wilka",
            },
            {
              label: "Wiedźmin: Syreny z głębin",
              target: "Wiedźmin: Syreny z głębin",
            },
            {
              label: "Szczury: Opowieści ze świata Wiedźmina",
              target: "Szczury: Opowieści ze świata Wiedźmina",
            },
            { label: "Śródziemie", target: "Śródziemie" },
          ]
        : seriesName === "Pieśń Lodu i Ognia"
          ? [{ label: "Śródziemie", target: "Śródziemie" }]
          : seriesName === "Obrona Sokratesa"
            ? [{ label: "Sokrates", target: "Sokrates" }]
            : seriesName === "Jak Wytresować Smoka"
              ? [
                  {
                    label: "Jak Wytresować Smoka",
                    target: "Jak Wytresować Smoka",
                  },
                  {
                    label: "Prezent Nocnej Furii",
                    target: "Prezent Nocnej Furii",
                  },
                  {
                    label: "Legenda o Smoku Gnatochrupie",
                    target: "Legenda o Smoku Gnatochrupie",
                  },
                  { label: "Księga Smoków", target: "Księga Smoków" },
                  {
                    label: "Świt Jeźdźców Smoków",
                    target: "Świt Jeźdźców Smoków",
                  },
                  {
                    label: "Jak Wytresować Smoka 2",
                    target: "Jak Wytresować Smoka 2",
                  },
                  {
                    label: "Jak Wytresować Smoka 3",
                    target: "Jak Wytresować Smoka 3",
                  },
                  { label: "Święta w Domu", target: "Święta w Domu" },
                  {
                    label: "Jak Wytresować Smoka Remake",
                    target: "Jak Wytresować Smoka Remake",
                  },
                ]
              : seriesName === "Mitologia Nordycka"
                ? [
                    { label: "Wiking", target: "Wiking" },
                    {
                      label: "Jak Wytresować Smoka",
                      target: "Jak Wytresować Smoka",
                    },
                    {
                      label: "Marvel Cinematic Universe",
                      target: "Marvel Cinematic Universe",
                    },
                  ]
                : seriesName === "Książki o Chinach"
                  ? chinaMovieExplicitAliases.filter((title) =>
                      movieTitles.some(
                        (movieTitle) =>
                          normalizeTitle(movieTitle) === normalizeTitle(title),
                      ),
                    )
                  : seriesName === "Death Note"
                    ? [
                        {
                          label: "Death Note (2006)",
                          target: "Death Note (2006)",
                        },
                        {
                          label: "L: Change the WorLd (2008)",
                          target: "L: Change the WorLd (2008)",
                        },
                        {
                          label: "Death Note: The Last Name (2006)",
                          target: "Death Note: The Last Name (2006)",
                        },
                        {
                          label: "Death Note (2017)",
                          target: "Death Note (2017)",
                        },
                        {
                          label: "Death Note: Light Up the New World (2017)",
                          target: "Death Note: Light Up the New World (2017)",
                        },
                        {
                          label: "Death Note: Relight 1: Visions of a God",
                          target: "Death Note: Relight 1: Visions of a God",
                        },
                        {
                          label: "Death Note: Relight 2: L's Successors",
                          target: "Death Note: Relight 2: L's Successors",
                        },
                        {
                          label: "Persona 3 The Movie",
                          target: "Persona 3 The Movie",
                        },
                      ]
                    : seriesName === "Boska Komedia"
                      ? boskaKomediaSectionTitles
                      : findMatches(movieTitles.map((title) => ({ title }))),
    books:
      seriesName === "Wiedźmin"
        ? [
            { label: "Boska Komedia", target: "Boska Komedia" },
            {
              label: "Mitologia Nordycka",
              target: "Mitologia Nordycka",
            },
          ]
        : seriesName === "Pieśń Lodu i Ognia"
          ? [{ label: "Książki o Chinach", target: "Książki o Chinach" }]
          : seriesName === "Sherlock Holmes"
            ? [
                { label: "Książki o Chinach", target: "Książki o Chinach" },
                { label: "Death Note", target: "Death Note" },
              ]
            : seriesName === "Książki o Chinach"
              ? [
                  { label: "Pieśń Lodu i Ognia", target: "Pieśń Lodu i Ognia" },
                  { label: "Sherlock Holmes", target: "Sherlock Holmes" },
                  { label: "Boska Komedia", target: "Boska Komedia" },
                  { label: "Death Note", target: "Death Note" },
                ]
              : seriesName === "Death Note"
                ? [
                    { label: "Sherlock Holmes", target: "Sherlock Holmes" },
                    { label: "Książki o Chinach", target: "Książki o Chinach" },
                    { label: "Boska Komedia", target: "Boska Komedia" },
                  ]
                : seriesName === "Obrona Sokratesa"
                  ? [{ label: "Boska Komedia", target: "Boska Komedia" }]
                  : seriesName === "Jak Wytresować Smoka"
                    ? [
                        {
                          label: "Mitologia nordycka",
                          target: "Mitologia Nordycka",
                        },
                        { label: "Wiedźmin", target: "Wiedźmin" },
                        {
                          label: "Pieśń Lodu i Ognia",
                          target: "Pieśń Lodu i Ognia",
                        },
                        {
                          label: "Jak Wytresować Smoka",
                          target: "Jak Wytresować Smoka",
                        },
                      ]
                    : seriesName === "Mitologia Nordycka"
                      ? [
                          { label: "Wiedźmin", target: "Wiedźmin" },
                          {
                            label: "Pieśń Lodu i Ognia",
                            target: "Pieśń Lodu i Ognia",
                          },
                          {
                            label: "Jak Wytresować Smoka",
                            target: "Jak Wytresować Smoka",
                          },
                        ]
                      : seriesName === "Boska Komedia"
                        ? [
                            {
                              label: "Obrona Sokratesa",
                              target: "Obrona Sokratesa",
                            },
                            {
                              label: "Wiedźmin Rozdroże Kruków",
                              target: "Rozdroże Kruków",
                            },
                            {
                              label: "Chiny: Portret cywilizacji i narodu",
                              target: "Chiny: Portret cywilizacji i narodu",
                            },
                            { label: "Death Note", target: "Death Note" },
                          ]
                        : [],
  };

  if (
    !relatedMedia.games.length &&
    !relatedMedia.series.length &&
    !relatedMedia.movies.length &&
    !relatedMedia.books.length
  ) {
    const fallback = aliases.map((alias) => alias).filter(Boolean);
    relatedMedia.games = fallback.filter(
      (alias) =>
        alias.toLowerCase().includes("game") ||
        alias.toLowerCase().includes("tron") ||
        alias.toLowerCase().includes("wiedźmin") ||
        alias.toLowerCase().includes("sherlock"),
    );
  }

  return relatedMedia;
};

const Books = () => {
  const [selectedSeries, setSelectedSeries] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedStory, setSelectedStory] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("Wszystkie");
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [itemStatuses, setItemStatuses] = useState(() => {
    if (typeof window === "undefined") return {};

    try {
      return JSON.parse(localStorage.getItem("hobbies-book-statuses") || "{}");
    } catch {
      return {};
    }
  });

  const statusOptions = [
    { value: "seen", label: "Nie znam" },
    { value: "progress", label: "W trakcie" },
    { value: "done", label: "Skończone" },
  ];

  const statusFilterOptions = [
    { value: "Wszystkie", label: "Wszystkie" },
    ...statusOptions.map((option) => ({
      value: option.label,
      label: option.label,
    })),
  ];

  const seriesRefs = useRef({});
  const bookRefs = useRef({});
  const storyRefs = useRef({});
  const bookDescriptionRefs = useRef({});
  const storyDescriptionRefs = useRef({});

  const currentBooks = books;
  const allBooksByTitle = Object.values(currentBooks).reduce(
    (map, seriesBooks) => {
      (seriesBooks ?? []).forEach((book) => {
        if (book?.title) {
          map.set(book.title, book);
        }
      });
      return map;
    },
    new Map(),
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(
        "hobbies-book-statuses",
        JSON.stringify(itemStatuses),
      );
    }
  }, [itemStatuses]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const target = sessionStorage.getItem("hobbies-related-target");
    if (!target) return;

    try {
      const parsed = JSON.parse(target);
      if (parsed.page !== "books") return;

      const normalizedTitle = String(parsed.title || "").trim();
      if (!normalizedTitle) return;

      openBookTarget(normalizedTitle);
    } finally {
      sessionStorage.removeItem("hobbies-related-target");
    }
  }, [currentBooks]);

  const updateStatus = (itemKey, nextStatus) => {
    setItemStatuses((current) => ({
      ...current,
      [itemKey]: nextStatus,
    }));
  };

  const seriesWorlds = {
    Wiedźmin: "Wizard City, Grizzleheim, Krokotopia, Mooshu",
    "Pieśń Lodu i Ognia": "Krokotopia, Grizzleheim",
    "Sherlock Holmes": "Marleybone, Krokotopia, Mooshu, Dragonspyre",
    "Książki o Chinach": "Mooshu",
    "Boska Komedia": "Dragonspyre, Wizard City",
    "Mitologia Nordycka": "Grizzleheim",
    "Jak Wytresować Smoka": "Grizzleheim, Aquila",
    "Obrona Sokratesa": "Aquila",
    "Death Note": "Wysteria, Dragonspyre",
    "Królestwo Kwarcu": "Wizard City, Dragonspyre",
  };

  const openBookTarget = (title) => {
    const normalizedTitle = normalizeTitle(String(title || ""));
    if (!normalizedTitle) return;

    let matchedSeries = null;
    let matchedBook = null;

    Object.entries(currentBooks).forEach(([series, seriesBooks]) => {
      if (matchedBook || matchedSeries) return;

      const found = (seriesBooks ?? []).find(
        (book) => normalizeTitle(book?.title || "") === normalizedTitle,
      );

      if (found) {
        matchedSeries = series;
        matchedBook = found;
        return;
      }

      if (normalizeTitle(series) === normalizedTitle) {
        matchedSeries = series;
      }
    });

    if (!matchedSeries) return;

    setSelectedSeries(matchedSeries);
    setSelectedBook(matchedBook);
    setSelectedStory(null);

    requestAnimationFrame(() => {
      const element =
        matchedBook &&
        (bookDescriptionRefs.current[matchedBook.title] ||
          bookRefs.current[matchedBook.title])
          ? bookDescriptionRefs.current[matchedBook.title] ||
            bookRefs.current[matchedBook.title]
          : seriesRefs.current[matchedSeries];

      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  };

  const navigateToRelatedItem = (page, title) => {
    if (typeof window === "undefined") return;

    sessionStorage.setItem(
      "hobbies-related-target",
      JSON.stringify({ page, title }),
    );

    if (page === "games") window.location.hash = "#/games";
    if (page === "series") window.location.hash = "#/series";
    if (page === "movies") window.location.hash = "#/movies";
    if (page === "books") {
      window.location.hash = "#/books";
      openBookTarget(title);
    }
  };

  const renderRelatedMedia = (series) => {
    const relatedMedia = getRelatedMedia(series);
    const groups = [
      { label: "Gry", page: "games", items: relatedMedia.games },
      { label: "Seriale", page: "series", items: relatedMedia.series },
      { label: "Filmy", page: "movies", items: relatedMedia.movies },
      { label: "Książki", page: "books", items: relatedMedia.books },
    ].filter((group) => group.items.length > 0);

    if (!groups.length) return null;

    return (
      <div className="books-related-media">
        <p className="books-related-media-title">Dzieła powiązane</p>
        <div className="books-related-groups">
          {groups.map((group) => (
            <div key={group.label} className="books-related-group">
              <span className="books-related-label">{group.label}:</span>
              <ul className="books-related-list">
                {group.items.map((item) => {
                  const title = typeof item === "string" ? item : item.label;
                  const target =
                    typeof item === "string"
                      ? item
                      : (item.target ?? item.label);

                  return (
                    <li
                      key={`${group.label}-${title}`}
                      onClick={() => navigateToRelatedItem(group.page, target)}
                      style={{ cursor: "pointer" }}
                    >
                      {title}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const seriesGroupMap = {
    Wiedźmin: [
      {
        title: "Książki Andrzeja Sapkowskiego",
        books: [
          "Ostatnie życzenie",
          "Miecz przeznaczenia",
          "Krew elfów",
          "Czas pogardy",
          "Chrzest ognia",
          "Wieża Jaskółki",
          "Pani Jeziora",
          "Sezon Burz",
          "Rozdroże Kruków",
          "Droga z której się nie wraca",
          "Coś się kończy, coś się zaczyna",
        ],
      },
      {
        title: "Fanowskie opowiadania",
        books: ["Opowieści ze świata Wiedźmina", "Szpony i Kły"],
      },
      {
        title: "Komiksy Bogusława Polcha",
        books: ["Komiksy Macieja Parowskiego i Bogusława Polcha"],
      },
      {
        title: "Komiksy CD Projekt RED",
        books: [
          "Oryginalne komiksy CD Projekt RED",
          "Komiksowe adaptacje opowiadań CD Projekt RED",
          "Wiedźmin Ronin",
          "Wiedźmineczka",
        ],
      },
    ],
    "Pieśń Lodu i Ognia": [
      {
        title: "Główna saga",
        books: [
          "Gra o Tron",
          "Starcie Królów",
          "Nawałnica Mieczy",
          "Uczta dla Wron",
          "Taniec ze Smokami",
        ],
      },
      {
        title: "Powieści dodatkowe",
        books: ["Ogień i Krew", "Rycerz Siedmiu Królestw"],
      },
      {
        title: "Historia świata",
        books: ["Świat Lodu i Ognia", "Panowanie Smoka"],
      },
      {
        title: "Pojedyncze opowiadania",
        books: ["Księżniczka i Królowa", "Książę Łotrzyk", "Synowie Smoka"],
      },
    ],
    "Jak Wytresować Smoka": [
      {
        title: "Główna seria książek Cressidy Cowell",
        books: [
          "Jak wytresować smoka",
          "Jak zostać piratem",
          "Jak mówić po smoczemu",
          "Jak złamać smoczą klątwę",
          "Jak odwrócić smoka ogonem",
          "Drapieżne smoki dla początkujących",
          "How to Ride a Dragon's Storm",
          "How to Break a Dragon's Heart",
          "How to Steal a Dragon's Sword",
          "How to Seize a Dragon's Jewel",
          "How to Betray a Dragon's Hero",
          "How to Fight a Dragon's Fury",
        ],
      },
      {
        title: "Komiksy Dark Horse",
        books: ["The Serpent's Heir", "Dragonvine"],
      },
    ],
    "Sherlock Holmes": [
      {
        title: "Oryginalne książki Arthura Conana Doyle’a",
        books: [
          "Studium w szkarłacie",
          "Znak czterech",
          "Przygody Sherlocka Holmesa",
          "Wspomnienia Sherlocka Holmesa",
          "Pies Baskerville’ów",
          "Powrót Sherlocka Holmesa",
          "Dolina trwogi",
          "Pożegnalny ukłon",
          "Sprawy Sherlocka Holmesa",
        ],
      },
      {
        title: "Książki Neila Gaimana",
        books: ["Studium w Szmaragdzie", "A Case of Death and Honey"],
      },
      {
        title: "Książki Nicholasa Meyera",
        books: ["The Seven-Per-Cent Solution", "The Return of the Pharaoh"],
      },
      {
        title: "Książki Tima Symondsa",
        books: ["Sherlock Holmes and The Nine-Dragon Sigil"],
      },
      {
        title: "Książki Paula Kane'a",
        books: ["Sherlock Holmes and The Servants of Hell"],
      },
      {
        title: "Manga",
        books: ["Moriarty the Patriot"],
      },
    ],
    "Książki o Chinach": [
      {
        title: "Historia i polityka",
        books: [
          "Chiny bez makijażu",
          "Czerwony cesarz: Xi Jinping i jego Nowe Chiny",
          "Tajwan: Herbatka na beczce prochu",
          "Japonia, Chiny i Korea: O ludziach skłóconych na śmierć i życie",
          "Cesarzowa wdowa Cixi: Konkubina która stworzyła współczesne Chiny",
          "Historia Kościoła w Chinach",
          "Ocalała z chińskiego gułagu",
        ],
      },
      {
        title: "Filozofia i duchowość",
        books: ["Taoizm: Wprowadzenie", "Daodejing"],
      },
      {
        title: "Kultura i mitologia",
        books: [
          "Baśnie chińskie",
          "Bestiariusz chiński",
          "Chiny: Przewodnik po herosach, smokach i świętych rzekach",
          "Chiny: Portret cywilizacji i narodu",
        ],
      },
      {
        title: "Literatura klasyczna",
        books: ["Journey to the West in Simple Chinese"],
      },
      {
        title: "Manga i komiksy",
        books: [
          "吃透中国史：三国",
          "Assassin's Creed Miecz Shao Jun",
          "Assassin's Creed: Dynasty",
        ],
      },
      {
        title: "Crossovery",
        books: [
          "Wiedźmin Ronin",
          "A Case of Death and Honey",
          "Sherlock Holmes and The Nine-Dragon Sigil",
        ],
      },
    ],
  };

  const getSeriesEntries = (series) => {
    const groups = seriesGroupMap[series];
    if (!groups) return currentBooks[series] ?? [];

    const byTitle = new Map(
      (currentBooks[series] ?? []).map((book) => [book.title, book]),
    );

    return groups.map((group) => ({
      ...group,
      items: group.books
        .map((title) => {
          return (
            byTitle.get(title) ??
            allBooksByTitle.get(title) ?? { title, description: "" }
          );
        })
        .filter(Boolean),
    }));
  };

  const getBookStatus = (series, book) => {
    if (!book.stories || book.stories.length === 0) {
      return itemStatuses[`book:${series}:${book.title}`] ?? "seen";
    }

    const storyStatuses = book.stories.map((story) => {
      const storyKey = `story:${series}:${book.title}:${story.title}`;
      return itemStatuses[storyKey] ?? "seen";
    });

    if (storyStatuses.length === 0) return "seen";

    const allDone = storyStatuses.every((status) => status === "done");
    if (allDone) return "done";

    const hasProgressOrDone = storyStatuses.some(
      (status) => status === "progress" || status === "done",
    );
    if (hasProgressOrDone) return "progress";

    return "seen";
  };

  const getSeriesStatus = (series) => {
    const seriesItems = [];

    const flatSeriesItems = getSeriesEntries(series).flatMap(
      (entry) => entry.items ?? [entry],
    );

    flatSeriesItems.forEach((book) => {
      const bookKey = `book:${series}:${book.title}`;
      seriesItems.push(itemStatuses[bookKey] ?? "seen");

      book.stories?.forEach((story) => {
        const storyKey = `story:${series}:${book.title}:${story.title}`;
        seriesItems.push(itemStatuses[storyKey] ?? "seen");
      });
    });

    if (seriesItems.length === 0) return "seen";

    const allDone = seriesItems.every((status) => status === "done");
    if (allDone) return "done";

    const hasProgressOrDone = seriesItems.some(
      (status) => status === "progress" || status === "done",
    );
    if (hasProgressOrDone) return "progress";

    return "seen";
  };

  const filteredSeries = Object.keys(currentBooks).filter((series) => {
    if (selectedStatus === "Wszystkie") return true;

    return (
      getSeriesStatus(series) ===
      statusOptions.find((option) => option.label === selectedStatus)?.value
    );
  });

  const scrollToTarget = (element) => {
    if (!element || typeof window === "undefined") return;
    requestAnimationFrame(() => {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  const toggleSeries = (series, e) => {
    const nextValue = selectedSeries === series ? null : series;
    setSelectedSeries(nextValue);
    setSelectedBook(null);
    setSelectedStory(null);

    if (nextValue) {
      requestAnimationFrame(() => {
        const target = seriesRefs.current[series];
        const heading = target?.querySelector(".books-series-title");
        scrollToTarget(heading || target || e.currentTarget);
      });
    }
  };

  const toggleBook = (book, e) => {
    e.stopPropagation();

    const nextValue = selectedBook?.title === book.title ? null : book;
    setSelectedBook(nextValue);
    setSelectedStory(null);

    if (nextValue) {
      requestAnimationFrame(() => {
        const target = bookDescriptionRefs.current[nextValue.title];
        scrollToTarget(target || e.currentTarget.closest(".books-series"));
      });
    }
  };

  const toggleStory = (story, e) => {
    e.stopPropagation();

    const nextValue = selectedStory?.title === story.title ? null : story;
    setSelectedStory(nextValue);

    if (nextValue) {
      requestAnimationFrame(() => {
        const key = `${selectedSeries}:${selectedBook?.title}:${nextValue.title}`;
        const target = storyDescriptionRefs.current[key];
        scrollToTarget(
          target || e.currentTarget.closest(".books-book-description"),
        );
      });
    }
  };

  return (
    <div className="books-wrapper">
      <div className="books-container">
        <h2 className="books-title">Książki</h2>
        <div className="books-controls">
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="books-filter"
          >
            {statusFilterOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        {/* <h3 className="books-canon-title">Główny kanon</h3> */}
        {/* LISTA SERII */}
        <ul className="books-list">
          {filteredSeries.map((series) => {
            const itemStatus = getSeriesStatus(series);

            return (
              <li
                key={series}
                className={`books-series-item item-status-${itemStatus}`}
                onClick={(e) => toggleSeries(series, e)}
              >
                {series}
                <span className="books-world">({seriesWorlds[series]})</span>
              </li>
            );
          })}
        </ul>
        {/* SERIE */}
        {Object.keys(currentBooks).map((series) => (
          <div
            key={series}
            ref={(el) => (seriesRefs.current[series] = el)}
            className="books-series"
          >
            {selectedSeries === series &&
              (series === "Boska Komedia" ? (
                <div className="books-series-boska-komedia">
                  <h3 className="books-series-title">{series}</h3>

                  {booksDescriptions[series] && (
                    <div className="books-description">
                      <p>
                        <strong>Do jakiego świata nawiązuje: </strong>
                        {booksDescriptions[series].world}
                      </p>
                      <p>
                        <strong>Dlaczego jest wyjątkowa: </strong>
                        {booksDescriptions[series].specialReason}
                      </p>
                      <p>
                        <strong>Dlaczego tu jest: </strong>
                        {booksDescriptions[series].why}
                      </p>
                      <p>
                        <strong>Główni Protagoniści: </strong>
                        {booksDescriptions[series].protagonist}
                      </p>
                      <p>
                        <strong>Główni Antagoniści: </strong>
                        {booksDescriptions[series].antagonist}
                      </p>
                      <p>
                        <strong>Miejsce Akcji: </strong>
                        {booksDescriptions[series].location}
                      </p>
                      <p>
                        <strong>Opis: </strong>
                        {booksDescriptions[series].description}
                      </p>

                      {renderRelatedMedia(series)}
                    </div>
                  )}

                  <ul className="books-item-list">
                    {currentBooks[series]?.map((book) => {
                      const itemKey = `book:${series}:${book.title}`;
                      const currentStatus = getBookStatus(series, book);
                      const hasStories = Boolean(book.stories?.length);

                      return (
                        <li
                          key={book.title}
                          className={`books-item ${currentStatus ? `item-status-${currentStatus}` : ""}`}
                          ref={(el) => (bookRefs.current[book.title] = el)}
                          onClick={(e) => toggleBook(book, e)}
                        >
                          <div className="books-item-content">
                            <span className="books-title-item">
                              {book.title}
                            </span>

                            {!hasStories && (
                              <div className="status-control">
                                {statusOptions.map((option) => (
                                  <button
                                    key={option.value}
                                    type="button"
                                    className={`status-button status-${option.value} ${
                                      currentStatus === option.value
                                        ? "active"
                                        : ""
                                    }`}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      updateStatus(itemKey, option.value);
                                    }}
                                  >
                                    {option.label}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        </li>
                      );
                    })}
                  </ul>

                  {selectedBook && selectedSeries === series && (
                    <div
                      className="books-book-description"
                      ref={(el) => {
                        if (el)
                          bookDescriptionRefs.current[selectedBook.title] = el;
                      }}
                    >
                      <h4>{selectedBook.title}</h4>
                      <p>{selectedBook.description}</p>

                      {selectedBook.stories && (
                        <ul className="books-story-list">
                          {selectedBook.stories.map((story) => {
                            const itemKey = `story:${series}:${selectedBook.title}:${story.title}`;
                            const currentStatus =
                              itemStatuses[itemKey] ?? "seen";

                            return (
                              <li
                                key={story.title}
                                className={`books-story-item ${currentStatus ? `item-status-${currentStatus}` : ""}`}
                                ref={(el) =>
                                  (storyRefs.current[story.title] = el)
                                }
                                onClick={(e) => toggleStory(story, e)}
                              >
                                <div className="books-story-item-content">
                                  <span>{story.title}</span>

                                  <div className="status-control">
                                    {statusOptions.map((option) => (
                                      <button
                                        key={option.value}
                                        type="button"
                                        className={`status-button status-${option.value} ${
                                          currentStatus === option.value
                                            ? "active"
                                            : ""
                                        }`}
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          updateStatus(itemKey, option.value);
                                        }}
                                      >
                                        {option.label}
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      )}

                      {selectedStory && selectedStory.title && (
                        <div
                          className="books-story-description"
                          ref={(el) => {
                            const key = `${selectedSeries}:${selectedBook?.title}:${selectedStory.title}`;
                            if (el) storyDescriptionRefs.current[key] = el;
                          }}
                        >
                          <h5>{selectedStory.title}</h5>
                          <p>{selectedStory.description}</p>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="books-image-wrapper">
                    <img
                      src={komedia}
                      alt="Boska Komedia"
                      className="image-of-media"
                    />
                  </div>
                </div>
              ) : (
                <div className="books-series-standard">
                  <h3 className="books-series-title">{series}</h3>

                  {booksDescriptions[series] && (
                    <div className="books-description">
                      <p>
                        <strong>Do jakiego świata nawiązuje: </strong>
                        {booksDescriptions[series].world}
                      </p>
                      <p>
                        <strong>Dlaczego tu jest: </strong>
                        {booksDescriptions[series].why}
                      </p>
                      <p>
                        <strong>Główni Protagoniści: </strong>
                        {booksDescriptions[series].protagonist}
                      </p>
                      <p>
                        <strong>Główni Antagoniści: </strong>
                        {booksDescriptions[series].antagonist}
                      </p>
                      <p>
                        <strong>Miejsce Akcji: </strong>
                        {booksDescriptions[series].location}
                      </p>
                      <p>
                        <strong>Opis: </strong>
                        {booksDescriptions[series].description}
                      </p>

                      {renderRelatedMedia(series)}
                    </div>
                  )}

                  {getSeriesEntries(series).map((entry) => {
                    const items = entry.items ?? [entry];

                    return (
                      <div key={entry.title} className="books-group-block">
                        {entry.items && (
                          <h4 className="books-group-title">{entry.title}</h4>
                        )}

                        <ul className="books-item-list">
                          {items.map((book) => {
                            const itemKey = `book:${series}:${book.title}`;
                            const currentStatus = getBookStatus(series, book);
                            const hasStories = Boolean(book.stories?.length);

                            return (
                              <li
                                key={book.title}
                                className={`books-item ${currentStatus ? `item-status-${currentStatus}` : ""}`}
                                ref={(el) =>
                                  (bookRefs.current[book.title] = el)
                                }
                                onClick={(e) => toggleBook(book, e)}
                              >
                                <div className="books-item-content">
                                  <span className="books-title-item">
                                    {book.title}
                                  </span>

                                  {!hasStories && (
                                    <div className="status-control">
                                      {statusOptions.map((option) => (
                                        <button
                                          key={option.value}
                                          type="button"
                                          className={`status-button status-${option.value} ${
                                            currentStatus === option.value
                                              ? "active"
                                              : ""
                                          }`}
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            updateStatus(itemKey, option.value);
                                          }}
                                        >
                                          {option.label}
                                        </button>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}

                  {selectedBook && selectedSeries === series && (
                    <div
                      className="books-book-description"
                      ref={(el) => {
                        if (el)
                          bookDescriptionRefs.current[selectedBook.title] = el;
                      }}
                    >
                      <h4>{selectedBook.title}</h4>
                      <p>{selectedBook.description}</p>

                      {selectedBook.stories && (
                        <ul className="books-story-list">
                          {selectedBook.stories.map((story) => {
                            const itemKey = `story:${series}:${selectedBook.title}:${story.title}`;
                            const currentStatus =
                              itemStatuses[itemKey] ?? "seen";

                            return (
                              <li
                                key={story.title}
                                className={`books-story-item ${currentStatus ? `item-status-${currentStatus}` : ""}`}
                                ref={(el) =>
                                  (storyRefs.current[story.title] = el)
                                }
                                onClick={(e) => toggleStory(story, e)}
                              >
                                <div className="books-story-item-content">
                                  <span>{story.title}</span>

                                  <div className="status-control">
                                    {statusOptions.map((option) => (
                                      <button
                                        key={option.value}
                                        type="button"
                                        className={`status-button status-${option.value} ${
                                          currentStatus === option.value
                                            ? "active"
                                            : ""
                                        }`}
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          updateStatus(itemKey, option.value);
                                        }}
                                      >
                                        {option.label}
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      )}

                      {selectedStory && selectedStory.title && (
                        <div
                          className="books-story-description"
                          ref={(el) => {
                            const key = `${selectedSeries}:${selectedBook?.title}:${selectedStory.title}`;
                            if (el) storyDescriptionRefs.current[key] = el;
                          }}
                        >
                          <h5>{selectedStory.title}</h5>
                          <p>{selectedStory.description}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
          </div>
        ))}{" "}
        <div className="dogs-purpose-section">
          <button
            className="dogs-purpose-button"
            onClick={() => setIsGalleryOpen(true)}
          >
            A Dog's Purpose
          </button>
        </div>
        {isGalleryOpen && (
          <GalleryModal
            galleryType="books"
            onClose={() => setIsGalleryOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Books;
