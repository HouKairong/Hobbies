import "./Movies.css";
import { useState, useRef, useEffect } from "react";

const seriesDescriptions = {
  Wiedźmin: {
    licence: "Gry, Seriale, Boska Komedia, Filozofia",
    protagonist: "Geralt z Rivii",
    antagonist: "Dziki Gon, czarodzieje",
    why: "Klasyczna seria fantasy",
    description:
      "Geralt walczy z potworami i mierzy się z moralnymi dylematami w brutalnym świecie.",
  },
  "Assassin's Creed (2016)": {
    licence: "Gry, Filozofia",
    protagonist: "Callum Lynch / Aguilar",
    antagonist: "Templariusze",
    why: "Film na podstawie kultowej gry",
    description:
      "Historia konfliktu między Asasynami a Templariuszami, wciągająca akcja i podróże w czasie.",
  },
  DOOM: {
    licence: "Gry, Boska Komedia, Maraton 1",
    protagonist: "Doom Slayer",
    antagonist: "Demony",
    why: "Ikona strzelanek",
    description:
      "Doom Slayer walczy z hordami demonów próbujących opanować Marsa i Ziemię.",
  },
  "Lara Croft": {
    licence: "Gry",
    protagonist: "Lara Croft",
    antagonist: "Złoczyńcy i tajemnicze organizacje",
    why: "Seria filmowa oparta na grze",
    description:
      "Lara Croft przemierza świat, odkrywając starożytne artefakty i stawiając czoła niebezpieczeństwom.",
  },
  "LEGO Ninjago Film (2017)": {
    licence: "Gry, Seriale, Chiny",
    protagonist: "Lloyd i Ninja",
    antagonist: "Lord Garmadon",
    why: "Film animowany dla młodszych widzów",
    description:
      "Grupa ninja broni miasta przed złoczyńcami w pełnej humoru i akcji przygodzie.",
  },
  "Harry Potter": {
    licence: "Gry",
    protagonist: "Harry Potter",
    antagonist: "Lord Voldemort",
    why: "Klasyczna seria fantasy",
    description:
      "Historia młodego czarodzieja i jego przyjaciół w walce ze złem w magicznym świecie.",
  },
  "Jak Wytresować Smoka": {
    licence: "Gry, Seriale, IPiN",
    protagonist: "Czkawka i Szczerbatek",
    antagonist: "Smoki (na początku) i drapieżne zagrożenia",
    why: "Animowana seria o przyjaźni i dorastaniu",
    description:
      "Młody Wiking zaprzyjaźnia się ze smokiem, odkrywając wartość przyjaźni i odwagi.",
  },
  "Gwiezdne wojny": {
    licence: "Gry, Seriale, Boska Komedia, Filozofia",
    protagonist: "Luke Skywalker, Rey",
    antagonist: "Darth Vader, Imperium, Kylo Ren",
    why: "Kultowa saga sci-fi",
    description:
      "Epicka walka między Ciemną i Jasną stroną Mocy w całej galaktyce.",
  },
  "Sherlock Holmes": {
    licence: "Gry, Seriale, Maraton 1",
    protagonist: "Sherlock Holmes",
    antagonist: "Profesor Moriarty i inni przestępcy",
    why: "Kultowa postać literacka w filmowej adaptacji",
    description:
      "Błyskotliwy detektyw rozwiązuje zagadki kryminalne w pełnym napięcia świecie.",
  },
  "Persona 3 The Movie": {
    licence: "Gry, Seriale, Chiny, Filozofia",
    protagonist: "Makoto Yuki i drużyna SEES",
    antagonist: "Shadows",
    why: "Adaptacja gry Persona 3",
    description:
      "Grupa uczniów walczy z tajemniczymi istotami w nocy, odkrywając własne przeznaczenie.",
  },
  "Epoka Lodowcowa": {
    licence: "Gry",
    protagonist: "Maniek, Sid, Diego",
    antagonist: "Naturalne zagrożenia, piraci epoki lodowcowej",
    why: "Animowana seria przygodowa",
    description:
      "Grupa zwierząt przemierza epokę lodowcową, przeżywając przygody i ucząc się współpracy.",
  },
  "Dante's Inferno: An Animated Epic": {
    licence: "Gry, Boska Komedia, Filozofia",
    protagonist: "Dante",
    antagonist: "Grzech i demony",
    why: "Adaptacja Boskiej Komedii",
    description:
      "Dante przemierza kręgi piekielne, konfrontując się z własnymi grzechami i demonami.",
  },
  Madagaskar: {
    licence: "Gry, Seriale",
    protagonist: "Alex, Marty, Melman, Gloria",
    antagonist: "Król Julien i natura",
    why: "Animowana komedia",
    description:
      "Grupa zwierząt z zoo trafia na wolność w Madagaskarze, przeżywając zabawne przygody.",
  },
  "Kung Fu Panda": {
    licence: "Gry, Seriale, Chiny, IPiN",
    protagonist: "Po",
    antagonist: "Tai Lung, Kai i inni",
    why: "Animacja o kung-fu i przyjaźni",
    description:
      "Niezdarny panda Po staje się bohaterem, ucząc się sztuki kung-fu i odwagi.",
  },
  Herkules: {
    licence: "Gry, Seriale",
    protagonist: "Herkules",
    antagonist: "Hades",
    why: "Animacja Disney’a",
    description:
      "Herkules, syn Zeusa, walczy ze złem i odkrywa swoją prawdziwą moc.",
  },
  Aladyn: {
    licence: "Gry",
    protagonist: "Aladyn",
    antagonist: "Dżafar",
    why: "Klasyczna opowieść baśniowa",
    description:
      "Aladyn odkrywa magiczną lampę i przeżywa przygody pełne magii i miłości.",
  },
  "Król Lew": {
    licence: "Gry",
    protagonist: "Simba",
    antagonist: "Skaza",
    why: "Klasyczna animacja Disney’a",
    description:
      "Młody lew Simba musi odzyskać tron i odkryć swoje przeznaczenie.",
  },
  "Super Mario Bros": {
    licence: "Gry",
    protagonist: "Mario i Luigi",
    antagonist: "Bowser",
    why: "Filmowa adaptacja gry",
    description:
      "Bracia Mario wyruszają na misję ratunkową, pokonując przeszkody w magicznym świecie.",
  },
  "El Camino": {
    licence: "Seriale, Filozofia",
    protagonist: "Jesse Pinkman",
    antagonist: "Przestępczy świat i dawni współpracownicy",
    why: "Kontynuacja historii Jesse'ego z Breaking Bad",
    description:
      "Po wydarzeniach z Breaking Bad, Jesse ucieka przed prawem i próbuje zacząć nowe życie.",
  },
  "Death Note": {
    licence: "Seriale, Chiny, Filozofia",
    protagonist: "Light Yagami",
    antagonist: "L (detektyw), prawo i moralność",
    why: "Kultowa seria o walce inteligencji i moralności",
    description:
      "Light zdobywa notes, który zabija każdego wpisanego w niego człowieka, co prowadzi do gry psychologicznej z detektywem L.",
  },
  "Avatar: Ostatni Władca Wiatru": {
    licence: "Seriale, Chiny",
    protagonist: "Aang",
    antagonist: "Lord Ozai i Naród Ognia",
    why: "Klasyczna animacja przygodowa",
    description:
      "Młody Avatar Aang musi opanować wszystkie żywioły, by przywrócić równowagę w świecie.",
  },
  "Ne Zha": {
    licence: "Chiny",
    protagonist: "Ne Zha",
    antagonist: "Shen Gongbao i inne demoniczne siły",
    why: "Popularna animacja fantasy z Chin",
    description:
      "Opowieść o młodym bohaterze, który musi pokonać przeznaczenie i ochronić ludzi przed złymi mocami.",
  },
  "Małpi Król": {
    licence: "Chiny, Maraton 1",
    protagonist: "Sun Wukong",
    antagonist: "Demony i bóstwa próbujące go powstrzymać",
    why: "Klasyczna historia przygodowa",
    description:
      "Małpi Król używa swojej siły i sprytu, by bronić przyjaciół i walczyć ze złem.",
  },
  "Wielki Mur": {
    licence: "Chiny",
    protagonist: "William / Chen",
    antagonist: "Potwory atakujące Chiny",
    why: "Film akcji z elementami fantasy",
    description:
      "Grupa wojowników broni wielkiego muru przed nadprzyrodzonymi potworami.",
  },
  Mulan: {
    licence: "Chiny",
    protagonist: "Mulan",
    antagonist: "Najazd Hunów / Shan Yu",
    why: "Klasyczna historia odwagi i poświęcenia",
    description:
      "Młoda kobieta przebiera się za mężczyznę, by walczyć za ojczyznę i udowodnić swoją wartość.",
  },
  "Rower z Pekinu": {
    licence: "Chiny, Filozofia",
    protagonist: "Ma i Xiaojun",
    antagonist: "Przeciwności losu i konflikt społeczny",
    why: "Film poruszający tematy społeczne",
    description:
      "Para zakochanych walczy o swoje marzenia i miłość w realiach współczesnego Pekinu.",
  },
  "Spirited Away: W Krainie Bogów": {
    licence: "Chiny, Filozofia, IPiN",
    protagonist: "Chihiro",
    antagonist: "Yubaba i jej pułapki",
    why: "Kultowa animacja studia Ghibli",
    description:
      "Dziewczynka odkrywa magiczny świat duchów, ucząc się odwagi i dojrzałości.",
  },
  "K-Popowe Łowczynie Demonów": {
    licence: "Chiny",
    protagonist: "Grupa łowczyń demonów",
    antagonist: "Demony atakujące świat ludzi",
    why: "Nowatorska animacja / film akcji",
    description:
      "Grupa młodych kobiet walczy z demonami, łącząc muzykę K-Pop i sztuki walki.",
  },
  "Raya i Ostatni Smok": {
    licence: "Chiny, Maraton 1",
    protagonist: "Raya",
    antagonist: "Drużyna złych smoków i konflikty między królestwami",
    why: "Animacja przygodowa o jedności i zaufaniu",
    description:
      "Raya wyrusza na misję odnalezienia ostatniego smoka, by ocalić swoje królestwo.",
  },
  Behemoth: {
    licence: "Chiny, Boska Komedia, Filozofia, Maraton 1",
    protagonist: "Nieokreślony bohater",
    antagonist: "Potwory i chaos",
    why: "Animacja / film akcji",
    description:
      "Opowieść o walce z ogromnymi, niszczycielskimi bestiami w mrocznym świecie.",
  },
  "Przyczajony Tygrys, Ukryty Smok": {
    licence: "Chiny, Filozofia",
    protagonist: "Li Mu Bai i Yu Shu Lien",
    antagonist: "Jen Yu i złodzieje",
    why: "Kultowy film wuxia",
    description:
      "Historia honoru, miłości i sztuk walki w świecie legendarnych wojowników.",
  },
  "The Yinyang Master": {
    licence: "Chiny",
    protagonist: "Zhou Ming / Yin Yang Master",
    antagonist: "Demony i złe moce",
    why: "Film akcji fantasy",
    description:
      "Mistrz Yin Yang walczy z nadprzyrodzonymi zagrożeniami, chroniąc równowagę świata.",
  },
  Konfucjusz: {
    licence: "Chiny, Filozofia",
    protagonist: "Konfucjusz",
    antagonist: "Przeciwności polityczne i społeczne",
    why: "Biograficzny dramat historyczny",
    description:
      "Film opowiada o życiu i filozofii Konfucjusza oraz jego wpływie na chińskie społeczeństwo.",
  },
  "L'Inferno": {
    licence: "Boska Komedia, Filozofia",
    protagonist: "Dante",
    antagonist: "Grzech i potępienie",
    why: "Animowana adaptacja Boskiej Komedii",
    description:
      "Dante podróżuje przez piekło, poznając cierpienia grzeszników i reflektując nad moralnością.",
  },
  "Jako w piekle, tak i na ziemi": {
    licence: "Boska Komedia, Filozofia",
    protagonist: "Różne postacie",
    antagonist: "Zło i chaos w ludzkim świecie",
    why: "Film ilustrujący analogie piekła w realnym świecie",
    description:
      "Historia ukazuje ludzkie dramaty i moralne wybory, przedstawione w kontekście metaforycznego piekła.",
  },
  Norymberga: {
    licence: "Boska Komedia, Filozofia, Maraton 1",
    protagonist: "Sędziowie i prokuratorzy",
    antagonist: "Nazistowscy zbrodniarze",
    why: "Historyczny dramat sądowy",
    description:
      "Procesy norymberskie pokazują rozliczenie zbrodni wojennych i sprawiedliwość po II wojnie światowej.",
  },
  "Czas Apokalipsy": {
    licence: "Boska Komedia, Filozofia",
    protagonist: "Kapitan Willard",
    antagonist: "Pułkownik Kurtz",
    why: "Klasyczny film wojenny",
    description:
      "Opowieść o misji ratunkowej w chaosie wojny, ukazująca moralne i psychologiczne skutki konfliktu.",
  },
  Hellraiser: {
    licence: "Boska Komedia, Filozofia",
    protagonist: "Kirsty Cotton",
    antagonist: "Pinhead i Cenobici",
    why: "Kultowa seria horroru",
    description:
      "Mroczna historia o tajemniczej skrzynce, która sprowadza na świat cierpienie i piekielne moce.",
  },
  Constantine: {
    licence: "Boska Komedia, Filozofia",
    protagonist: "John Constantine",
    antagonist: "Demony i siły zła",
    why: "Film fantasy / horror",
    description:
      "Łowca demonów John Constantine walczy z nadprzyrodzonymi siłami, próbując uratować ludzkość.",
  },
  "Minecraft: Film": {
    licence: "Boska Komedia",
    protagonist: "Steve",
    antagonist: "Ender Dragon i inne zagrożenia",
    why: "Adaptacja popularnej gry wideo",
    description:
      "Steve wyrusza w przygodę po świecie bloków, stawiając czoła potworom i odkrywając tajemnice Minecrafta.",
  },
  "Trylogia Dana Browna": {
    licence: "Boska Komedia",
    protagonist: "Robert Langdon",
    antagonist: "Sekretne stowarzyszenia i przeciwnicy historyczni",
    why: "Adaptacja bestsellerowych powieści",
    description:
      "Profesor Langdon rozwiązuje zagadki związane z religią, historią i sztuką, aby odkryć prawdę i powstrzymać zło.",
  },
  "Dzwonnik z Notre Dame": {
    licence: "Boska Komedia",
    protagonist: "Quasimodo",
    antagonist: "Frollo",
    why: "Adaptacja klasycznej powieści Victora Hugo",
    description:
      "Quasimodo, dzwonnik katedry Notre Dame, zmaga się z uprzedzeniami społecznymi i miłością do Esmeraldy.",
  },
  "Ostatni Pojedynek": {
    licence: "Boska Komedia",
    protagonist: "Jean de Carrouges",
    antagonist: "Jacques Le Gris",
    why: "Historyczny dramat oparty na prawdziwych wydarzeniach",
    description:
      "Historia konfliktu i honoru, który prowadzi do ostatniego pojedynku między dwoma rycerzami.",
  },
  Śródziemie: {
    licence: "Boska Komedia, Filozofia",
    protagonist: "Frodo, Bilbo, Aragorn i inni",
    antagonist: "Sauron i jego armie",
    why: "Adaptacja legendarnych książek Tolkiena",
    description:
      "Bohaterowie wyruszają na epicką podróż, by zniszczyć Pierścień i pokonać zło w Śródziemiu.",
  },
  "Siódma pieczęć": {
    licence: "Boska Komedia",
    protagonist: "Rycerz Antonius Block",
    antagonist: "Śmierć",
    why: "Klasyczny film Bergmana",
    description:
      "Rycerz wraca z krucjaty i staje w obliczu Śmierci, grając z nią w szachy, szukając sensu życia i wiary.",
  },
  Wiking: {
    licence: "Boska Komedia, Filozofia",
    protagonist: "Ragnar Lothbrok / bohaterowie",
    antagonist: "Wrogowie i los",
    why: "Epicka historia wikingów",
    description:
      "Opowieść o wikingach, ich podróżach, bitwach i próbach przetrwania w brutalnym świecie.",
  },
  "Czarownica: Bajka ludowa z Nowej Anglii": {
    licence: "Boska Komedia",
    protagonist: "Thomasin / rodzina",
    antagonist: "Zła natura i społeczność",
    why: "Horror inspirowany folklorem",
    description:
      "Rodzina zmaga się z nadprzyrodzonymi zjawiskami i przesądami w kolonialnej Nowej Anglii.",
  },
  "Między piekłem a niebem": {
    licence: "Boska Komedia, Filozofia",
    protagonist: "Różne postacie",
    antagonist: "Zło, grzech",
    why: "Film refleksyjny o granicach życia i śmierci",
    description:
      "Eksploracja ludzkich doświadczeń i decyzji między cierpieniem a zbawieniem.",
  },
  "Niebo istnieje... naprawdę": {
    licence: "Boska Komedia, Filozofia",
    protagonist: "Colton Burpo i jego rodzina",
    antagonist: "Niepewność i wątpliwości",
    why: "Film oparty na bestsellerowej książce",
    description:
      "Historie chłopca, który twierdzi, że odwiedził niebo, pokazujące cuda i wiarę.",
  },
  "Wszystkie psy idą do Nieba": {
    licence: "Boska Komedia, Filozofia",
    protagonist: "Charlie B. Barkin",
    antagonist: "Skomplikowane losy i własne błędy",
    why: "Animowany film familijny",
    description:
      "Charlie B. Barkin powraca do życia po śmierci i uczy się wartości przyjaźni, miłości i odkupienia.",
  },
  "Starcie Tytanów": {
    licence: "Boska Komedia",
    protagonist: "Perseusz",
    antagonist: "Potwory i Hades",
    why: "Film fantasy / mitologiczny",
    description:
      "Perseusz wyrusza, by uratować królestwo przed potężnymi siłami bogów i potworów.",
  },
  Pasja: {
    licence: "Boska Komedia, Filozofia",
    protagonist: "Jezus Chrystus",
    antagonist: "Rzymskie władze i arcykapłani",
    why: "Historyczny dramat religijny",
    description:
      "Opowieść o ostatnich godzinach życia Jezusa, jego cierpieniu i poświęceniu.",
  },
  "Noe: Wybrany przez Boga": {
    licence: "Boska Komedia, Filozofia",
    protagonist: "Noe",
    antagonist: "Ludzkość i nadchodzący potop",
    why: "Biblia w wersji filmowej",
    description:
      "Noe otrzymuje boskie polecenie zbudowania arki i uratowania życia przed potopem.",
  },
  Interstellar: {
    licence: "Boska Komedia",
    protagonist: "Cooper i zespół astronautów",
    antagonist: "Czas, grawitacja i zagrożenia kosmiczne",
    why: "Sci-fi z głęboką refleksją",
    description:
      "Misja kosmiczna w poszukiwaniu nowego domu dla ludzkości, pełna dramatycznych wyborów i odkryć.",
  },
  Avatar: {
    licence: "Boska Komedia",
    protagonist: "Jake Sully",
    antagonist: "Colonel Quaritch i korporacja RDA",
    why: "Kultowy film sci-fi z przełomową animacją i ekologicznym przesłaniem",
    description:
      "Jake Sully, sparaliżowany były żołnierz, zostaje awatarem i pomaga mieszkańcom Pandory w walce z ludzkimi kolonizatorami.",
  },
  Matrix: {
    licence: "Filozofia",
    protagonist: "Neo",
    antagonist: "Agent Smith i maszyny",
    why: "Klasyka sci-fi i filozofii w kinie akcji",
    description:
      "Neo odkrywa, że żyje w sztucznie stworzonej rzeczywistości, i staje do walki z systemem kontrolującym ludzkość.",
  },
  Heretyk: {
    licence: "Filozofia",
    protagonist: "Heretycy i inkwizytorzy",
    antagonist: "Kościół i społeczne prześladowania",
    why: "Historyczny dramat religijny",
    description:
      "Historia walki jednostki z systemem religijnym i społecznym w średniowieczu.",
  },
  "Jojo Rabbit": {
    licence: "Filozofia",
    protagonist: "Jojo",
    antagonist: "Ideologia nazistowska",
    why: "Satyrystyczny dramat wojenny",
    description:
      "Chłopiec w hitlerowskich Niemczech konfrontuje się z absurdem wojny i swoimi przekonaniami.",
  },
  Sokrates: {
    licence: "Filozofia",
    protagonist: "Sokrates",
    antagonist: "Społeczeństwo i władze",
    why: "Film biograficzny / filozoficzny",
    description:
      "Historia życia Sokratesa, jego nauk i procesu sądowego w Atenach.",
  },
  "Dzień Świra": {
    licence: "Filozofia, IPiN",
    protagonist: "Adaś Miauczyński",
    antagonist: "Codzienność i frustracje",
    why: "Komedia / dramat społeczny",
    description:
      "Historia nauczyciela zmaga się z absurdami życia codziennego w Polsce.",
  },
  Menu: {
    licence: "Filozofia, IPiN",
    protagonist: "Goście luksusowej restauracji",
    antagonist: "Szef kuchni i sytuacje ekstremalne",
    why: "Satyrystyczny thriller / komedia",
    description:
      "Luksusowa kolacja zamienia się w dramatyczną walkę o przetrwanie i moralność.",
  },
  "Kot w butach: Ostatnie życzenie": {
    licence: "Filozofia, IPiN",
    protagonist: "Kot w Butach",
    antagonist: "Niebezpieczeństwa i złoczyńcy",
    why: "Animowany film familijny",
    description:
      "Kot w Butach wyrusza na misję, aby spełnić swoje ostatnie życzenie i stawić czoła przygodom.",
  },
  Coco: {
    licence: "Filozofia, IPiN",
    protagonist: "Miguel",
    antagonist: "Tradycje i rodzinna tajemnica",
    why: "Animacja Pixar o kulturze i muzyce",
    description:
      "Chłopiec odkrywa tajemnice swojej rodziny i kultury podczas święta Dnia Zmarłych.",
  },
  Shrek: {
    licence: "IPiN",
    protagonist: "Shrek",
    antagonist: "Lord Farquaad, Rumpelstiltskin",
    why: "Kultowa seria animowana parodiująca baśnie",
    description:
      "Ogre Shrek wyrusza w podróż, aby odzyskać swoją ziemię i odnajduje przyjaźń oraz miłość.",
  },
  "Film o pszczołach": {
    licence: "IPiN",
    protagonist: "Barry B. Benson",
    antagonist: "Ludzie niszczący środowisko",
    why: "Animacja edukacyjna i humorystyczna",
    description:
      "Barry B. Benson ucieka od pracy w ulu i odkrywa świat ludzi, broniąc pszczół przed zagładą.",
  },
  Klatka: {
    licence: "IPiN",
    protagonist: "Główny bohater",
    antagonist: "System i współwięźniowie",
    why: "Dramat psychologiczny",
    description:
      "Historia uwięzionego bohatera, który walczy o przetrwanie i zachowanie człowieczeństwa w więziennej rzeczywistości.",
  },
  "Zabawa w Pochowanego": {
    licence: "IPiN",
    protagonist: "Dzieci bawiące się w grę",
    antagonist: "Niebezpieczeństwa kryjące się w lesie",
    why: "Thriller/horror o grze, która wymyka się spod kontroli",
    description:
      "Grupa dzieci bawi się w zabawę w chowanego, która staje się śmiertelnie niebezpieczna.",
  },
  "Bilet do Raju": {
    licence: "IPiN",
    protagonist: "Para głównych bohaterów",
    antagonist: "Miłosne komplikacje i intrygi",
    why: "Lekka komedia romantyczna",
    description:
      "Para udaje się na rajską wyspę, gdzie wplątują się w zabawne i romantyczne sytuacje.",
  },
  "Sierota: Narodziny zła": {
    licence: "IPiN",
    protagonist: "Esther",
    antagonist: "Rodzina adoptująca",
    why: "Horror psychologiczny z twistem",
    description:
      "Młoda dziewczynka zostaje adoptowana, ale skrywa mroczny sekret, który grozi rodzinie.",
  },
  "Uśmiechnij się": {
    licence: "IPiN",
    protagonist: "Główny bohater",
    antagonist: "Przeciwności losu",
    why: "Lekka komedia/dramat",
    description:
      "Bohater uczy się, jak odnaleźć radość życia mimo codziennych trudności.",
  },
  Zwierzogród: {
    licence: "Maraton 1",
    protagonist: "Judy Hopps",
    antagonist: "Duke Weaselton / tajemniczy przestępcy",
    why: "Popularna animacja dla dzieci i młodzieży z przesłaniem o tolerancji",
    description:
      "Młoda królika Judy zostaje pierwszą policjantką w Zwierzogrodzie i razem z lisem Nickiem Wilde rozwiązuje zagadkę kryminalną.",
  },
};

const Movies = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [openSubgroup, setOpenSubgroup] = useState(null);
  const [openSeries, setOpenSeries] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

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
        parts: ["Część 1", "Część 2", "Część 3", "Live Action"],
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
        parts: ["Część 1", "Część 2", "Część 3", "Live Action"],
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
      {
        title: "Persona 3 The Movie",
        parts: [
          "#1 Spring of Birth",
          "#2 Midsummer Knight's Dream",
          "#3 Falling Down",
          "#4 Winter of Rebirth",
        ],
      },
      { title: "Death Note" },
      { title: "Avatar: Ostatni Władca Wiatru" },
    ],

    "Boska Komedia": {
      "Piekło Lista A": [
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

      "Piekło Lista B": [
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

    Filozofia: [
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
        title: "Wiedźmin",
        parts: [
          "Wiedźmin (2001)",
          "Wiedźmin: Zmora Wilka (2021)",
          "Wiedźmin: Syreny z głębin (2025)",
          "Szczury: Opowieści ze świata Wiedźmina (2025)",
        ],
      },
      { title: "El Camino" },
      { title: "Death Note" },
      { title: "Constantine" },
      { title: "Pasja" },
      { title: "Noe: Wybrany przez Boga" },
      { title: "L'Inferno" },
      { title: "Dante's Inferno: An Animated Epic" },
      { title: "Behemoth" },
      {
        title: "Przyczajony Tygrys, Ukryty Smok",
        parts: [
          "Przyczajony Tygrys, Ukryty Smok",
          "Przyczajony Tygrys, Ukryty Smok: Miecz Przeznaczenia",
        ],
      },
      { title: "Spirited Away: W Krainie Bogów" },
      { title: "Rower z Pekinu" },
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
      { title: "Między piekłem a niebem" },
      { title: "Niebo istnieje... naprawdę" },
      { title: "Wszystkie psy idą do Nieba" },
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
          "Hellraiser",
        ],
      },
      { title: "Konfucjusz" },
      { title: "Jako w piekle, tak i na ziemi" },
      { title: "Norymberga" },
      { title: "Czas Apokalipsy" },
      { title: "Wiking" },
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
      {
        title: "Matrix",
        parts: [
          "Matrix (1999)",
          "Matrix: Reaktywacja (2003)",
          "Matrix: Rewolucje (2003)",
          "Matrix: Zmartwychwstanie (2021)",
        ],
      },
      { title: "Heretyk" },
      { title: "Jojo Rabbit" },
      { title: "Sokrates" },
      { title: "Assassin's Creed" },
      { title: "Dzień Świra" },
      { title: "Menu" },
      { title: "Kot w butach: Ostatnie życzenie" },
      { title: "Coco" },
    ],
    IPiN: [
      {
        title: "Jak Wytresować Smoka",
        parts: ["Jak Wytresować Smoka 1", "Jak Wytresować Smoka 2"],
      },
      {
        title: "Kung Fu Panda",
        parts: ["Kung Fu Panda 1", "Kung Fu Panda 2", "Kung Fu Panda 3"],
      },
      { title: "Spirited Away: W krainie bogów" },
      { title: "Dzień Świra" },
      {
        title: "Shrek",
        parts: ["Shrek 1", "Shrek 2", "Shrek 3", "Shrek 4"],
      },
      { title: "Kot w butach: Ostatnie życzenie" },
      { title: "Coco" },
      { title: "Film o pszczołach" },
      { title: "Klatka" },
      { title: "Zabawa w Pochowanego" },
      { title: "Bilet do Raju" },
      { title: "Sierota: Narodziny zła" },
      { title: "Uśmiechnij się" },
      { title: "Menu" },
    ],
    "Maraton 1": [
      { title: "Zwierzogród", parts: ["Zwierzogród 1", "Zwierzogród 2"] },
      { title: "Norymberga" },
      { title: "Behemoth" },
      { title: "Sherlock Holmes", parts: ["Sherlock Holmes", "Gra Cieni"] },
      { title: "Raya i Ostatni Smok" },
      { title: "Małpi Król" },
      { title: "DOOM", parts: ["DOOM", "DOOM: Anihilacja"] },
    ],
  };

  const movieRef = useRef(null);

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    setOpenSubgroup(null);
    setOpenSeries(null);
    setSelectedMovie(null);
  };

  const handleMovieClick = (e, movie) => {
    e.stopPropagation();

    if (selectedMovie?.title === movie.title) {
      setSelectedMovie(null);
      setOpenSeries(null);
    } else {
      setSelectedMovie(movie);
      if (movie.parts) {
        toggleSeries(movie.title);
      } else {
        setOpenSeries(null);
      }
    }
  };

  const toggleSubgroup = (group) => {
    setOpenSubgroup(openSubgroup === group ? null : group);
  };

  const toggleSeries = (id) => {
    setOpenSeries(openSeries === id ? null : id);
  };

  const isBoskaKomedia = selectedCategory === "Boska Komedia";
  const boskaKomedia = movies["Boska Komedia"];

  // EFFECT do scrolla
  useEffect(() => {
    if (selectedMovie && movieRef.current) {
      movieRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selectedMovie]);

  return (
    <div className="movies-wrapper">
      <div className="movies-container">
        <h2 className="movies-title">Filmy</h2>

        <label className="movies-select-label">
          Wybierz licencję:
          <select
            className="movies-select"
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            <option value="" disabled>
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
          <ul className="movies-list">
            {movies[selectedCategory].map((item) => (
              <li
                key={item.title}
                className={`movies-item ${item.parts ? "clickable" : ""}`}
                onClick={(e) => handleMovieClick(e, item)}
              >
                <span className="movies-title-item">{item.title}</span>
              </li>
            ))}
          </ul>
        )}

        {isBoskaKomedia && (
          <div>
            {Object.keys(boskaKomedia).map((group) => (
              <div
                key={group}
                className="movies-group"
                onClick={() => toggleSubgroup(group)}
              >
                <h3 className="movies-group-title">{group}</h3>
                {openSubgroup === group && (
                  <ul className="movies-list">
                    {boskaKomedia[group].map((item) => (
                      <li
                        key={item.title}
                        className={`movies-item ${item.parts ? "clickable" : ""}`}
                        onClick={(e) => handleMovieClick(e, item)}
                      >
                        <span className="movies-title-item">{item.title}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

        {selectedMovie && (
          <div className="selected-movie" ref={movieRef}>
            <h3 className="selected-movie-title">{selectedMovie.title}</h3>
            {selectedMovie.parts && (
              <ul className="movies-sublist">
                {selectedMovie.parts.map((part) => (
                  <li key={part} className="movies-subitem">
                    {part}
                  </li>
                ))}
              </ul>
            )}
            {seriesDescriptions[selectedMovie.title] && (
              <div className="books-description">
                <p>
                  <strong>Licencja:</strong>{" "}
                  {seriesDescriptions[selectedMovie.title].licence}
                </p>
                <p>
                  <strong>Główni Protagoniści:</strong>{" "}
                  {seriesDescriptions[selectedMovie.title].protagonist}
                </p>
                <p>
                  <strong>Główni Antagoniści:</strong>{" "}
                  {seriesDescriptions[selectedMovie.title].antagonist}
                </p>
                <p>
                  <strong>Dlaczego tu jest:</strong>{" "}
                  {seriesDescriptions[selectedMovie.title].why}
                </p>
                <p>
                  <strong>Krótki opis:</strong>{" "}
                  {seriesDescriptions[selectedMovie.title].description}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Movies;
