import "./Series.css";
import { useState, useMemo, useEffect, useRef } from "react";

const dimensionsList = ["Wszystkie", "Overworld", "Nether", "End"];

const seriesData = [
  { title: "Czarnobyl", dimensions: ["Nether"] },
  { title: "Gambit królowej", dimensions: ["Overworld"] },
  { title: "Lucyfer", dimensions: ["Nether"] },
  { title: "Wiedźmin netflixa", dimensions: ["Overworld"] },
  { title: "Wiedźmin rodowód krwi", dimensions: ["Overworld"] },
  { title: "Wiedźmin polski", dimensions: ["Overworld"] },
  { title: "Gra o tron", dimensions: ["Overworld"] },
  { title: "Ród smoka", dimensions: ["Overworld"] },
  { title: "Jeźdźcy smoków", dimensions: ["Overworld"] },
  { title: "Jeźdźcy smoków 9 światów", dimensions: ["End"] },
  { title: "Centaurworld", dimensions: ["End"] },
  { title: "Deathnote", dimensions: ["Nether"] },
  { title: "Cyberpunk Edgerunners", dimensions: ["End"] },
  { title: "Dragon's Dogma", dimensions: ["Overworld"] },
  { title: "The passage", dimensions: ["Nether"] },
  { title: "All of us are dead", dimensions: ["Nether"] },
  { title: "The last of us", dimensions: ["Nether"] },
  { title: "Squid game", dimensions: ["End"] },
  { title: "Breaking bad", dimensions: ["Overworld"] },
  { title: "Better call Saul", dimensions: ["Overworld"] },
  { title: "Sherlock", dimensions: ["Overworld"] },
  { title: "Persona Trinity Soul", dimensions: ["Overworld", "End"] },
  { title: "Persona 4 The Animation", dimensions: ["Overworld", "End"] },
  { title: "Persona 4 Golden The Animation", dimensions: ["Overworld", "End"] },
  { title: "Persona 5 The Animation", dimensions: ["Overworld", "End"] },
  { title: "Arcane", dimensions: ["Overworld", "End"] },
  { title: "Ragnarok", dimensions: ["Overworld", "End"] },
  { title: "Rzym", dimensions: ["Overworld"] },
  { title: "Most nad Sundem", dimensions: ["Overworld"] },
  { title: "13 powodów", dimensions: ["Overworld"] },
  { title: "Egzorcysta Bogdan Boner", dimensions: ["Nether"] },
  { title: "Alice in Borderland", dimensions: ["End"] },
  { title: "Seven Deadly Sins", dimensions: ["Overworld", "Nether"] },
  { title: "Kalifat", dimensions: ["Overworld"] },
  { title: "Stranger Things", dimensions: ["Overworld", "Nether"] },
  { title: "Pingwiny z Madagaskaru", dimensions: ["Overworld"] },
  { title: "Niech żyje król julian", dimensions: ["Overworld"] },
  {
    title: "Kung fu panda legenda o niezwykłości",
    dimensions: ["Overworld"],
  },
  {
    title: "Kung fu panda łapy przeznaczenia",
    dimensions: ["Overworld"],
  },
  { title: "Kung fu panda Smoczy rycerz", dimensions: ["Overworld"] },
  { title: "Ninjago", dimensions: ["Overworld", "Nether", "End"] },
  { title: "Herkules", dimensions: ["Overworld", "End"] },
  { title: "The end of the fucking world", dimensions: ["Overworld"] },
  { title: "One Punch Man", dimensions: ["End"] },
  { title: "Gakkou Gurashi", dimensions: ["Nether"] },
  { title: "Hannibal", dimensions: ["Nether"] },
  { title: "Marianne", dimensions: ["Nether"] },
  { title: "Folklor", dimensions: ["Nether"] },
  { title: "Dom grozy", dimensions: ["Nether"] },
  { title: "Revolution", dimensions: ["Nether"] },
  { title: "Wheel of time", dimensions: ["Overworld", "End"] },
  { title: "30 srebrników", dimensions: ["Nether"] },
  { title: "Supernatural", dimensions: ["Overworld", "End", "Nether"] },
  { title: "Chilling adventures of Sabrina", dimensions: ["Nether"] },
  { title: "Po drugiej stronie muru", dimensions: ["Nether"] },
  { title: "1670", dimensions: ["Overworld"] },
  { title: "Hazbin Hotel", dimensions: ["Nether"] },
  { title: "Helluva Boss", dimensions: ["Nether"] },
  { title: "Wikingowie", dimensions: ["Overworld"] },
  { title: "Wikingowie Walhalla", dimensions: ["Overworld"] },
  { title: "Kakegurui", dimensions: ["End"] },
  { title: "Kakegurui Twin", dimensions: ["End"] },
  { title: "Death Parade", dimensions: ["End"] },
  { title: "Cuphead", dimensions: ["End"] },
  { title: "High-Rise Invasion", dimensions: ["Nether"] },
  { title: "Spongebob Kanciastoporty (fragmenty)", dimensions: ["Overworld"] },
  { title: "Życie na planecie Ziemia", dimensions: ["Overworld"] },
  { title: "Sweet Home", dimensions: ["Nether"] },
  { title: "Devilman Crybaby", dimensions: ["Nether"] },
  { title: "Devil May Cry", dimensions: ["Nether"] },
  { title: "Devil May Cry Netflix", dimensions: ["Nether"] },
  { title: "From", dimensions: ["Nether"] },
  {
    title: "Dziesięć mil kwitnących brzoskwiń (Eternal Love)",
    dimensions: ["Overworld"],
  },
  { title: "Eternal Love of dream", dimensions: ["Overworld"] },
  { title: "Love and Destiny", dimensions: ["Overworld"] },
  { title: "The untamed", dimensions: ["Overworld", "End"] },
  { title: "Wu Xin the monster killer", dimensions: ["Overworld", "End"] },
  { title: "Nirvana in fire", dimensions: ["Overworld"] },
  { title: "Young Sherlock", dimensions: ["Overworld"] },
  { title: "The long ballad", dimensions: ["Overworld"] },
  { title: "Oh my Emperor", dimensions: ["Overworld"] },
  { title: "Arsenal Military Academy", dimensions: ["Nether"] },
  { title: "Reset", dimensions: ["Overworld"] },
  { title: "Attack on Titan", dimensions: ["Nether"] },
  {
    title: "Shiboyugi: Playing Death Games to Put Food on the Table",
    dimensions: ["Nether"],
  },
];

const seriesDescriptions = {
  Czarnobyl: {
    dimension: "Nether",
    protagonist: "Valery Legasov",
    antagonist: "Błędy systemu radzieckiego",
    description: "Serial dramatyczny o katastrofie w Czarnobylu w 1986 roku.",
  },
  "Gambit królowej": {
    dimension: "Overworld",
    protagonist: "Beth Harmon",
    antagonist: "Rywalne szachistki i własne uzależnienia",
    description:
      "Historia genialnej szachistki walczącej z przeciwnościami losu.",
  },
  Lucyfer: {
    dimension: "Nether",
    protagonist: "Lucyfer Morningstar",
    antagonist: "Różni przestępcy i własne problemy",
    description: "Lucyfer, władca piekła, pomaga policji w Los Angeles.",
  },
  "Wiedźmin netflixa": {
    dimension: "Overworld",
    protagonist: "Geralt z Rivii",
    antagonist: "Potwory, polityczne intrygi",
    description: "Adaptacja przygód wiedźmina Geralta w świecie fantasy.",
  },
  "Wiedźmin rodowód krwi": {
    dimension: "Overworld",
    protagonist: "Geralt i Ciri",
    antagonist: "Czarnoksiężnicy i potwory",
    description: "Historia tajemniczej młodej czarodziejki i wiedźmina.",
  },
  "Wiedźmin polski": {
    dimension: "Overworld",
    protagonist: "Geralt",
    antagonist: "Potwory i złoczyńcy",
    description: "Polska adaptacja opowiadań o wiedźminie.",
  },
  "Gra o tron": {
    dimension: "Overworld",
    protagonist: "Jon Snow, Daenerys Targaryen",
    antagonist: "Cersei Lannister, Nocny Król",
    description: "Walka o władzę w fikcyjnym świecie Westeros.",
  },
  "Ród smoka": {
    dimension: "Overworld",
    protagonist: "Daenerys Targaryen, Rhaenyra Targaryen",
    antagonist: "Członkowie rodu Lannister i konflikt dynastyczny",
    description: "Prequel Gry o tron, historia dynastii Targaryen.",
  },
  "Jeźdźcy smoków": {
    dimension: "Overworld",
    protagonist: "Hiccup",
    antagonist: "Złowrogie smoki i wrogowie wioski",
    description: "Młody chłopak zaprzyjaźnia się ze smokiem i ratuje świat.",
  },
  "Jeźdźcy smoków 9 światów": {
    dimension: "End",
    protagonist: "Hiccup",
    antagonist: "Niebezpieczne smoki w 9 światach",
    description: "Kontynuacja przygód Hiccupa w nowych światach.",
  },
  Centaurworld: {
    dimension: "End",
    protagonist: "Horse",
    antagonist: "Złe stwory i zagrożenia świata",
    description: "Animowany serial o koniach w magicznym świecie.",
  },
  Deathnote: {
    dimension: "Nether",
    protagonist: "Light Yagami",
    antagonist: "L",
    description:
      "Student zdobywa notatnik, który zabija ludzi po wpisaniu ich imienia.",
  },
  "Cyberpunk Edgerunners": {
    dimension: "End",
    protagonist: "David Martinez",
    antagonist: "Korpo i gangi Night City",
    description: "Młody chłopak staje się najemnikiem w cyberpunkowym świecie.",
  },
  "Dragon's Dogma": {
    dimension: "Overworld",
    protagonist: "Arisen",
    antagonist: "Smok",
    description:
      "Przygoda w świecie fantasy, walka ze smokiem i innymi potworami.",
  },
  "The passage": {
    dimension: "Nether",
    protagonist: "Amy Harper",
    antagonist: "Wirus i rząd",
    description:
      "Apokalipsa wirusowa i młoda dziewczyna z nadprzyrodzonymi mocami.",
  },
  "All of us are dead": {
    dimension: "Nether",
    protagonist: "Lee Cheong-san",
    antagonist: "Zainfekowani uczniowie",
    description: "Koreański horror o szkole opanowanej przez zombie.",
  },
  "The last of us": {
    dimension: "Nether",
    protagonist: "Joel i Ellie",
    antagonist: "Infekcja i wrogie grupy",
    description: "Dramat postapokaliptyczny oparty na grze wideo.",
  },
  "Squid game": {
    dimension: "End",
    protagonist: "Seong Gi-hun",
    antagonist: "Twórcy gry",
    description: "Uczestnicy rywalizują w śmiertelnych grach o dużą nagrodę.",
  },
  "Breaking bad": {
    dimension: "Overworld",
    protagonist: "Walter White",
    antagonist: "Rivalni handlarze narkotyków",
    description: "Nauczyciel chemii staje się producentem narkotyków.",
  },
  "Better call Saul": {
    dimension: "Overworld",
    protagonist: "Jimmy McGill / Saul Goodman",
    antagonist: "Przeciwnicy w sądzie i przestępczy świat",
    description: "Prequel Breaking Bad opowiadający o prawniku Saulu.",
  },
  Sherlock: {
    dimension: "Overworld",
    protagonist: "Sherlock Holmes",
    antagonist: "Profesor Moriarty",
    description: "Klasyczne przygody genialnego detektywa w XXI wieku.",
  },
  "Persona Trinity Soul": {
    dimension: "Overworld, End",
    protagonist: "Hajime, Ryo",
    antagonist: "Cienie i tajemnicze zjawiska",
    description: "Anime o walce z nadprzyrodzonymi istotami w mieście.",
  },
  "Persona 4 The Animation": {
    dimension: "Overworld, End",
    protagonist: "Yu Narukami",
    antagonist: "Shadow Yuu",
    description: "Młodzi bohaterowie walczą z cieniem w świecie alternatywnym.",
  },
  "Persona 4 Golden The Animation": {
    dimension: "Overworld, End",
    protagonist: "Yu Narukami",
    antagonist: "Shadow Yuu",
    description: "Kontynuacja Persona 4, rozbudowana wersja anime.",
  },
  "Persona 5 The Animation": {
    dimension: "Overworld, End",
    protagonist: "Joker",
    antagonist: "Złe serca korporacji i skorumpowanych ludzi",
    description: "Grupa nastolatków walczy ze złymi intencjami dorosłych.",
  },
  Arcane: {
    dimension: "Overworld, End",
    protagonist: "Vi i Jinx",
    antagonist: "Silco",
    description:
      "Historia w uniwersum League of Legends, konflikty w Piltover i Zaun.",
  },
  Ragnarok: {
    dimension: "Overworld, End",
    protagonist: "Magnus",
    antagonist: "Loki i giganci",
    description: "Współczesna wersja mitologii nordyckiej.",
  },
  Rzym: {
    dimension: "Overworld",
    protagonist: "Gajusz Juliusz Cezar",
    antagonist: "Spiskowcy i wrogowie polityczni",
    description: "Serial historyczny o upadku Republiki Rzymskiej.",
  },
  "Most nad Sundem": {
    dimension: "Overworld",
    protagonist: "Ingrid i Jan",
    antagonist: "Przeciwnicy polityczni",
    description: "Serial szpiegowski osadzony w czasach zimnej wojny.",
  },
  "13 powodów": {
    dimension: "Overworld",
    protagonist: "Hannah Baker",
    antagonist: "Rówieśnicy i traumy",
    description: "Serial o tajemniczych nagraniach wyjaśniających samobójstwo.",
  },
  "Egzorcysta Bogdan Boner": {
    dimension: "Nether",
    protagonist: "Bogdan Boner",
    antagonist: "Demony",
    description: "Polski horror o egzorcyście walczącym ze złem.",
  },
  "Alice in Borderland": {
    dimension: "End",
    protagonist: "Arisu",
    antagonist: "Śmiertelne gry",
    description: "Młody chłopak trafia do alternatywnego świata pełnego gier.",
  },
  "Seven Deadly Sins": {
    dimension: "Overworld, Nether",
    protagonist: "Meliodas i grupa Siedmiu Grzechów",
    antagonist: "Demony i Złe Królestwo",
    description: "Anime fantasy o wojownikach walczących ze złem.",
  },
  Kalifat: {
    dimension: "Overworld",
    protagonist: "Prawniczka i agentki",
    antagonist: "ISIS i ekstremiści",
    description: "Thriller o zagrożeniach terrorystycznych w Europie.",
  },
  "Stranger Things": {
    dimension: "Overworld, Nether",
    protagonist: "Eleven i przyjaciele",
    antagonist: "Demogorgon i władze",
    description: "Tajemnicze wydarzenia w miasteczku Hawkins.",
  },
  "Pingwiny z Madagaskaru": {
    dimension: "Overworld",
    protagonist: "Pingwiny",
    antagonist: "Król Julian i wrogowie",
    description: "Animacja o przygodach pingwinów i zwierząt z zoo.",
  },
  "Niech żyje król julian": {
    dimension: "Overworld",
    protagonist: "Król Julian",
    antagonist: "Konkurenci w zoo",
    description: "Serial animowany o przygodach ekscentrycznego króla lemurów.",
  },
  "Kung fu panda legenda o niezwykłości": {
    dimension: "Overworld",
    protagonist: "Po",
    antagonist: "Lord Shen",
    description: "Po walczy, by zostać legendarnym wojownikiem smoka.",
  },
  "Kung fu panda łapy przeznaczenia": {
    dimension: "Overworld",
    protagonist: "Po i Smocza Drużyna",
    antagonist: "Złoczyńcy",
    description: "Dalsze przygody Po i jego przyjaciół.",
  },
  "Kung fu panda Smoczy rycerz": {
    dimension: "Overworld",
    protagonist: "Po",
    antagonist: "Nowe zagrożenia",
    description: "Kolejne przygody Po w świecie kung-fu.",
  },
  Ninjago: {
    dimension: "Overworld, Nether, End",
    protagonist: "Lloyd i ninja",
    antagonist: "Złe siły Lorda Garmadona",
    description: "Drużyna ninja walczy z wrogami w świecie Ninjago.",
  },
  Herkules: {
    dimension: "Overworld, End",
    protagonist: "Herkules",
    antagonist: "Hades",
    description: "Mitologiczne przygody Herkulesa w walce z bogami.",
  },
  "The end of the fucking world": {
    dimension: "Overworld",
    protagonist: "James i Alyssa",
    antagonist: "Świat i własne problemy",
    description: "Mroczny, czarny humor o nastolatkach uciekających od świata.",
  },
  "One Punch Man": {
    dimension: "End",
    protagonist: "Saitama",
    antagonist: "Potwory i złoczyńcy",
    description:
      "Bohater bijący każdego w jednym uderzeniu walczy z przestępcami.",
  },
  "Gakkou Gurashi": {
    dimension: "Nether",
    protagonist: "Yuki Takeya i klasa",
    antagonist: "Zombie i traumatyczne sytuacje",
    description: "Anime o uczennicach walczących o przetrwanie w szkole.",
  },
  Hannibal: {
    dimension: "Nether",
    protagonist: "Will Graham",
    antagonist: "Hannibal Lecter",
    description: "Psycholog i seryjny morderca w grze umysłów.",
  },
  Marianne: {
    dimension: "Nether",
    protagonist: "Emma",
    antagonist: "Demoniczna pisarka",
    description: "Horror o pisarce walczącej z własnymi stworzeniami.",
  },
  Folklor: {
    dimension: "Nether",
    protagonist: "Lokalne postacie",
    antagonist: "Zło w folklorze",
    description: "Serial dokumentalno-horror o ludowych opowieściach.",
  },
  "Dom grozy": {
    dimension: "Nether",
    protagonist: "Mieszkańcy domu",
    antagonist: "Duchy i demony",
    description: "Serial o nawiedzonym domu.",
  },
  Revolution: {
    dimension: "Nether",
    protagonist: "Familia i bohaterowie",
    antagonist: "Rząd i wojskowe zagrożenia",
    description: "Świat po globalnej awarii elektrycznej.",
  },
  "Wheel of time": {
    dimension: "Overworld, End",
    protagonist: "Rand al'Thor",
    antagonist: "Dark One",
    description: "Epicka historia fantasy w świecie Magii i Przeznaczenia.",
  },
  "30 srebrników": {
    dimension: "Nether",
    protagonist: "Przestępcy i detektyw",
    antagonist: "Zdrada i przestępczość",
    description: "Thriller o zdradzie i zemście.",
  },
  Supernatural: {
    dimension: "Overworld, End, Nether",
    protagonist: "Sam i Dean Winchester",
    antagonist: "Demony, duchy, potwory",
    description: "Bracia walczą z nadprzyrodzonymi zagrożeniami.",
  },
  "Chilling adventures of Sabrina": {
    dimension: "Nether",
    protagonist: "Sabrina Spellman",
    antagonist: "Czarownice i demony",
    description: "Mroczna opowieść o młodej czarownicy.",
  },
  "Po drugiej stronie muru": {
    dimension: "Nether",
    protagonist: "Uwięzieni bohaterowie",
    antagonist: "Władze więzienne i konflikty",
    description: "Serial o życiu za murami więzienia.",
  },
  1670: {
    dimension: "Overworld",
    protagonist: "Bohaterowie historyczni",
    antagonist: "Wrogowie polityczni",
    description: "Historyczny dramat o wydarzeniach w 1670 roku.",
  },
  "Hazbin Hotel": {
    dimension: "Nether",
    protagonist: "Charlie",
    antagonist: "Demony i piekielne zagrożenia",
    description: "Animacja o hotelu dla demonów próbujących się zmienić.",
  },
  "Helluva Boss": {
    dimension: "Nether",
    protagonist: "Blitzo i ekipa",
    antagonist: "Różne piekielne siły",
    description: "Komediowa animacja w piekle.",
  },
  Wikingowie: {
    dimension: "Overworld",
    protagonist: "Ragnar Lothbrok",
    antagonist: "Wrogie klany i wojny",
    description: "Historyczny dramat o wikingach.",
  },
  "Wikingowie Walhalla": {
    dimension: "Overworld",
    protagonist: "Nowi bohaterowie klanu",
    antagonist: "Wrogie klany",
    description: "Kontynuacja przygód wikingów.",
  },
  Kakegurui: {
    dimension: "End",
    protagonist: "Yumeko Jabami",
    antagonist: "Bogaci studenci i hazard",
    description: "Anime o rywalizacji w szkole pełnej hazardu.",
  },
  "Kakegurui Twin": {
    dimension: "End",
    protagonist: "Mary Saotome",
    antagonist: "Rywalizujące studentki",
    description: "Prequel Kakegurui, skupiony na Mary.",
  },
  "Death Parade": {
    dimension: "End",
    protagonist: "Decim",
    antagonist: "Życiowe wybory zmarłych",
    description: "Anime o grze oceniania dusz po śmierci.",
  },
  Cuphead: {
    dimension: "End",
    protagonist: "Cuphead i Mugman",
    antagonist: "Diabeł",
    description: "Serial animowany oparty na grze, walka z diabłem.",
  },
  "High-Rise Invasion": {
    dimension: "Nether",
    protagonist: "Yuri Honjo",
    antagonist: "Maski zabójców",
    description: "Survival horror w wieżowcach pełnych zabójców.",
  },
  "Spongebob Kanciastoporty (fragmenty)": {
    dimension: "Overworld",
    protagonist: "SpongeBob i przyjaciele",
    antagonist: "Plankton i różne problemy",
    description: "Fragmenty przygód mieszkańców Bikini Dolnego.",
  },
  "Życie na planecie Ziemia": {
    dimension: "Overworld",
    protagonist: "Narrator i zwierzęta",
    antagonist: "Środowisko i zagrożenia naturalne",
    description: "Dokument o życiu na Ziemi.",
  },
  "Sweet Home": {
    dimension: "Nether",
    protagonist: "Cha Hyun-soo i mieszkańcy",
    antagonist: "Potwory i przemiany ludzi",
    description:
      "Survival horror, gdzie ludzie w budynku zamieniają się w potwory.",
  },
  "Devilman Crybaby": {
    dimension: "Nether",
    protagonist: "Akira Fudo",
    antagonist: "Demony i Ryo Asuka",
    description: "Młody chłopak staje się Devilmanem i walczy z demonami.",
  },
  "Devil May Cry": {
    dimension: "Nether",
    protagonist: "Dante",
    antagonist: "Demony i Vergil",
    description:
      "Anime o łowcy demonów Dante w świecie pełnym niebezpieczeństw.",
  },
  "Devil May Cry Netflix": {
    dimension: "Nether",
    protagonist: "Dante",
    antagonist: "Demony",
    description:
      "Adaptacja anime na Netflixie przedstawiająca Dantego w walce z demonami.",
  },
  From: {
    dimension: "Nether",
    protagonist: "Mieszkańcy miasta",
    antagonist: "Nieznane potwory",
    description:
      "Ludzie uwięzieni w dziwnym miasteczku muszą przetrwać nocne ataki.",
  },
  "Dziesięć mil kwitnących brzoskwiń (Eternal Love)": {
    dimension: "Overworld",
    protagonist: "Bai Qian",
    antagonist: "Siły ciemności i złośliwe boginie",
    description: "Fantasy romans o wielkich bogach i miłości przez wieki.",
  },
  "Eternal Love of dream": {
    dimension: "Overworld",
    protagonist: "Bai Fengjiu",
    antagonist: "Złośliwe siły w niebie",
    description: "Kontynuacja historii miłości w świecie bogów i demonów.",
  },
  "Love and Destiny": {
    dimension: "Overworld",
    protagonist: "Jiang Zi Ya i Ling Xi",
    antagonist: "Wrogowie bogów i demonów",
    description: "Opowieść o miłości i przeznaczeniu w świecie fantasy.",
  },
  "The untamed": {
    dimension: "Overworld, End",
    protagonist: "Wei Wuxian i Lan Wangji",
    antagonist: "Nieuczciwe klany i złe moce",
    description: "Przygody w świecie magicznych klanów i tajemniczych mocy.",
  },
  "Wu Xin the monster killer": {
    dimension: "Overworld, End",
    protagonist: "Wu Xin",
    antagonist: "Potwory i złe duchy",
    description:
      "Bohater walczy z demonami przez wieki dzięki nieśmiertelności.",
  },
  "Nirvana in fire": {
    dimension: "Overworld",
    protagonist: "Mei Changsu",
    antagonist: "Nieuczciwi politycy",
    description:
      "Strategiczne intrygi w cesarstwie i zemsta genialnego taktyka.",
  },
  "Young Sherlock": {
    dimension: "Overworld",
    protagonist: "Młody Sherlock Holmes",
    antagonist: "Przestępcy i tajemnicze zagadki",
    description: "Młody Sherlock rozwiązuje zagadki i przestępstwa.",
  },
  "The long ballad": {
    dimension: "Overworld",
    protagonist: "Li Changge",
    antagonist: "Wrogowie polityczni",
    description: "Historia walki i zemsty w czasach dynastii Tang.",
  },
  "Oh my Emperor": {
    dimension: "Overworld",
    protagonist: "Zhao Yao",
    antagonist: "Rywalizujące klany i złe moce",
    description: "Fantasy romans o cesarzu i podróżach w czasie.",
  },
  "Arsenal Military Academy": {
    dimension: "Nether",
    protagonist: "Chinyński oddział studentów",
    antagonist: "Przeciwnicy w wojsku",
    description: "Akcja i szkolenie wojskowe w czasach dawnych Chin.",
  },
  Reset: {
    dimension: "Overworld",
    protagonist: "Zheng Tai",
    antagonist: "Zło w grze i rzeczywistości",
    description: "Survival fantasy o powtarzaniu wydarzeń w grze i życiu.",
  },
  "Attack on Titan": {
    dimension: "Nether",
    protagonist: "Eren Yeager",
    antagonist: "Tytani i polityczne zagrożenia",
    description:
      "Ludzkość walczy o przetrwanie w świecie opanowanym przez tytanów.",
  },
  "Shiboyugi: Playing Death Games to Put Food on the Table": {
    dimension: "Nether",
    protagonist: "Shiboyugi",
    antagonist: "Inni gracze i zasady gry",
    description:
      "Śmiertelne gry, w których bohater walczy o przetrwanie i jedzenie.",
  },
};

const Series = () => {
  const [selectedDimension, setSelectedDimension] = useState("Wszystkie");
  const [search, setSearch] = useState("");
  const [selectedSeries, setSelectedSeries] = useState(null);

  const descriptionRef = useRef(null);

  const filteredSeries = useMemo(() => {
    return seriesData
      .filter((serie) =>
        selectedDimension === "Wszystkie"
          ? true
          : serie.dimensions.includes(selectedDimension),
      )
      .filter((serie) =>
        serie.title.toLowerCase().includes(search.toLowerCase()),
      );
  }, [selectedDimension, search]);

  // Scroll do opisu po zmianie selectedSeries
  useEffect(() => {
    if (selectedSeries && descriptionRef.current) {
      descriptionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selectedSeries]);

  return (
    <div className="series-wrapper">
      <div className="series-container">
        <h2>Seriale</h2>

        <div className="series-controls">
          <input
            type="text"
            placeholder="Szukaj serialu..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="series-search"
          />

          <select
            value={selectedDimension}
            onChange={(e) => {
              setSelectedDimension(e.target.value);
              setSelectedSeries(null);
            }}
            className="series-filter"
          >
            {dimensionsList.map((dimension) => (
              <option key={dimension} value={dimension}>
                {dimension}
              </option>
            ))}
          </select>
        </div>

        <p className="series-count">Liczba seriali: {filteredSeries.length}</p>

        <ul className="series-list">
          {filteredSeries.map((serie, index) => (
            <li
              key={index}
              className={`series-item ${selectedSeries === serie.title ? "active" : ""}`}
              onClick={() =>
                setSelectedSeries(
                  selectedSeries === serie.title ? null : serie.title,
                )
              }
            >
              {serie.title}
            </li>
          ))}
        </ul>

        {selectedSeries && seriesDescriptions[selectedSeries] && (
          <div className="series-description" ref={descriptionRef}>
            <h3>{selectedSeries}</h3>

            <p>
              <strong>Do jakiego wymiaru nawiązuje:</strong>{" "}
              {seriesDescriptions[selectedSeries].dimension}
            </p>

            <p>
              <strong>Główni Protagoniści:</strong>{" "}
              {seriesDescriptions[selectedSeries].protagonist}
            </p>

            <p>
              <strong>Główni Antagoniści:</strong>{" "}
              {seriesDescriptions[selectedSeries].antagonist}
            </p>

            <p>
              <strong>Krótki opis:</strong>{" "}
              {seriesDescriptions[selectedSeries].description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Series;
