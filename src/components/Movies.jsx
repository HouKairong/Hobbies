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
  const [selectedSeries, setSelectedSeries] = useState(null);
  const [selectedPart, setSelectedPart] = useState(null);

  const seriesRef = useRef(null);
  const partRef = useRef(null);

  const movies = {
    Gry: [
      {
        title: "Wiedźmin",
        parts: [
          {
            title: "Wiedźmin (2001)",
            description:
              "Pierwszy film adaptujący sagę o Geralcie z Rivii, przedstawiający jego przygody w świecie pełnym potworów i intryg.",
          },
          {
            title: "Wiedźmin: Zmora Wilka (2021)",
            description:
              "Animowany film koncentrujący się na młodym Wiedźminie, jego treningu i pierwszych misjach, ukazujący początki jego legendy.",
          },
          {
            title: "Wiedźmin: Syreny z głębin (2025)",
            description:
              "Opowieść o walce Geralta z potworami morskimi i politycznych intrygach nad brzegami królestw północy.",
          },
          {
            title: "Szczury: Opowieści ze świata Wiedźmina (2025)",
            description:
              "Zbiór krótkich historii ukazujących mroczne i brutalne życie zwykłych ludzi w świecie Wiedźmina.",
          },
        ],
      },
      { title: "Assassin's Creed (2016)" },
      {
        title: "DOOM",
        parts: [
          {
            title: "DOOM (2005)",
            description:
              "Adaptacja kultowej gry FPS, w której żołnierze stawiają czoła demonicznym siłom na Marsie.",
          },
          {
            title: "DOOM: Anihilacja (2019)",
            description:
              "Nowsza ekranizacja gry, koncentrująca się na brutalnej walce z demonami w stacji badawczej na Marsie.",
          },
        ],
      },
      {
        title: "Lara Croft",
        parts: [
          {
            title: "Tomb Raider (2001)",
            description:
              "Pierwszy film o Larze Croft, arcyprzygodowej archeolożce, która przemierza świat w poszukiwaniu starożytnych artefaktów.",
          },
          {
            title: "Kolebka życia (2003)",
            description:
              "Druga część przygód Lary Croft, w której odkrywa tajemnicze artefakty związane z legendarnym Źródłem Życia.",
          },
          {
            title: "Tomb Raider (2018)",
            description:
              "Reboot serii, pokazujący młodą Larę Croft w pierwszej samodzielnej misji pełnej niebezpiecznych przygód i zagadek.",
          },
        ],
      },
      { title: "LEGO Ninjago Film (2017)" },
      {
        title: "Harry Potter",
        parts: [
          {
            title: "Kamień Filozoficzny",
            description:
              "Pierwsza część przygód Harry’ego Pottera, w której odkrywa on swoje magiczne zdolności i stawia czoła ciemnym siłom w Hogwarcie.",
          },
          {
            title: "Komnata Tajemnic",
            description:
              "Harry i jego przyjaciele odkrywają tajemniczą komnatę w szkole, pełną zagadek i groźnych sekretów.",
          },
          {
            title: "Więzień Azkabanu",
            description:
              "Opowieść o ucieczce groźnego więźnia, Siriusie Blacku, i nowym zagrożeniu dla Harry’ego w trzecim roku nauki.",
          },
          {
            title: "Czara Ognia",
            description:
              "Harry bierze udział w niebezpiecznym Turnieju Trójmagiczny, pełnym wyzwań, rywalizacji i tajemnic.",
          },
          {
            title: "Zakon Feniksa",
            description:
              "Harry zmaga się z powrotem Voldemorta i wstępuje do tajnej organizacji walczącej z ciemnymi siłami.",
          },
          {
            title: "Książę Półkrwi",
            description:
              "Odkrywanie przeszłości Voldemorta i przygotowania do nadchodzącej wojny w magicznym świecie.",
          },
          {
            title: "Insygnia Śmierci cz.1",
            description:
              "Pierwsza część finału serii, w której Harry, Ron i Hermiona wyruszają na misję odnalezienia horkruksów.",
          },
          {
            title: "Insygnia Śmierci cz.2",
            description:
              "Kulminacyjna bitwa z Voldemortem i zakończenie sagi o Harrym Potterze.",
          },
        ],
      },
      {
        title: "Jak Wytresować Smoka",
        parts: [
          {
            title: "Część 1",
            description:
              "Pierwsza część serii, opowiadająca o przyjaźni młodego Wikinga Hiccup’a z niebezpiecznym smokiem Bezzębkiem.",
          },
          {
            title: "Część 2",
            description:
              "Hiccup i Bezzębny kontynuują swoje przygody, odkrywając nowe krainy i wyzwania w świecie smoków.",
          },
          {
            title: "Część 3",
            description:
              "Finałowa część serii animowanej, w której Hiccup staje przed ostatecznym wyborem dotyczącym świata ludzi i smoków.",
          },
          {
            title: "Live Action",
            description:
              "Film aktorski oparty na popularnej serii animowanej, przenoszący historię Hiccup’a i Bezzębnego na duży ekran.",
          },
        ],
      },
      {
        title: "Gwiezdne wojny",
        parts: [
          {
            title: "Mroczne Widmo",
            description:
              "Pierwszy epizod prequeli, wprowadzający młodego Anakina Skywalkera i konflikty polityczne w galaktyce.",
          },
          {
            title: "Atak klonów",
            description:
              "Drugi epizod prequeli, pokazujący początki wojen klonów i rozwój relacji Anakina z Padmé.",
          },
          {
            title: "Zemsta Sithów",
            description:
              "Trzeci epizod prequeli, ukazujący upadek Anakina i przejście na ciemną stronę jako Darth Vader.",
          },
          {
            title: "Nowa Nadzieja",
            description:
              "Pierwszy film oryginalnej trylogii, w którym Luke Skywalker zaczyna swoją drogę Jedi i walczy z Imperium.",
          },
          {
            title: "Imperium kontratakuje",
            description:
              "Drugi film oryginalnej trylogii, w którym bohaterowie mierzą się z potężnym Imperium i tragicznymi stratami.",
          },
          {
            title: "Powrót Jedi",
            description:
              "Finał oryginalnej trylogii, przedstawiający ostateczną bitwę z Imperium i konfrontację Luke’a z Darthem Vaderem.",
          },
          {
            title: "Przebudzenie Mocy",
            description:
              "Pierwszy epizod nowej trylogii, wprowadzający Rey, Finna i Kylo Rena oraz powrót konfliktu w galaktyce.",
          },
          {
            title: "Ostatni Jedi",
            description:
              "Drugi film nowej trylogii, w którym Rey trenuje jako Jedi, a konflikt z Najwyższym Porządkiem się nasila.",
          },
          {
            title: "Skywalker: Odrodzenie",
            description:
              "Finał sagi Skywalkerów, kończący konflikt między Jedi a Ciemną Stroną oraz losy Rey i Kylo Rena.",
          },
        ],
      },
      {
        title: "Sherlock Holmes",
        parts: [
          {
            title: "Sherlock Holmes",
            description:
              "Film wprowadzający genialnego detektywa Sherlocka Holmesa i jego pierwsze konfrontacje z przestępczym światem Londynu.",
          },
          {
            title: "Gra cieni",
            description:
              "Kontynuacja przygód Holmesa, w której staje do walki z arcywrogiem, profesor Moriartym, w serii inteligentnych zagadek i intryg.",
          },
        ],
      },
      {
        title: "Persona 3 The Movie",
        parts: [
          {
            title: "#1 Spring of Birth",
            description:
              "Pierwszy film w serii, wprowadzający bohaterów i tajemnicze wydarzenia związane z Dark Hour oraz Persona.",
          },
          {
            title: "#2 Midsummer Knight's Dream",
            description:
              "Drugi film, w którym bohaterowie zmagają się z nowymi wrogami i pogłębiają swoje relacje w świecie Persona.",
          },
          {
            title: "#3 Falling Down",
            description:
              "Trzeci film, pokazujący eskalację konfliktu z cieniami i dramatyczne wybory bohaterów.",
          },
          {
            title: "#4 Winter of Rebirth",
            description:
              "Finałowa część serii, rozstrzygająca losy bohaterów i tajemnice Dark Hour.",
          },
        ],
      },
      {
        title: "Epoka Lodowcowa",
        parts: [
          {
            title: "Część 1",
            description:
              "Pierwsza część serii, w której Manny, Sid i Diego wyruszają w podróż, by zwrócić małe dziecko jego rodzinie.",
          },
          {
            title: "Odwilż",
            description:
              "Druga część serii, przedstawiająca przygody bohaterów w nowym, cieplejszym klimacie oraz nowe wyzwania.",
          },
          {
            title: "Era Dinozaurów",
            description:
              "Trzecia część, w której bohaterowie odkrywają tajemniczą krainę pełną prehistorycznych stworzeń.",
          },
          {
            title: "Wędrówka Kontynentów",
            description:
              "Czwarta część serii, ukazująca zmagania bohaterów z przesuwającymi się kontynentami i katastrofami naturalnymi.",
          },
          {
            title: "Mocne Uderzenie",
            description:
              "Piąta część serii, w której bohaterowie stawiają czoła wielkiemu zagrożeniu w postaci meteorytu zmieniającego świat.",
          },
        ],
      },
      { title: "Dante's Inferno: An Animated Epic" },
      {
        title: "Madagaskar",
        parts: [
          {
            title: "Część 1",
            description:
              "Pierwsza część serii, w której grupa zwierząt z nowojorskiego zoo przypadkowo trafia na wyspę Madagaskar i próbuje odnaleźć się w dzikiej przyrodzie.",
          },
          {
            title: "Część 2",
            description:
              "Kontynuacja przygód zwierząt, które próbują wrócić do domu, napotykając nowe wyzwania i wrogów.",
          },
          {
            title: "Część 3",
            description:
              "Bohaterowie wracają do Nowego Jorku, ale muszą stawić czoła kolejnym zabawnym i niebezpiecznym przygodom.",
          },
          {
            title: "Pingwiny z Madagaskaru",
            description:
              "Spin-off skupiający się na zabawnych pingwinach z serii, które podejmują tajne misje pełne akcji i humoru.",
          },
        ],
      },
      {
        title: "Kung Fu Panda",
        parts: [
          {
            title: "Część 1",
            description:
              "Połączenie komedii i akcji, w którym niezdarny panda Po staje się wybranym wojownikiem kung fu.",
          },
          {
            title: "Część 2",
            description:
              "Po kontynuuje swoją podróż jako wojownik, stawiając czoła nowemu zagrożeniu dla Doliny Pokoju.",
          },
          {
            title: "Część 3",
            description:
              "Po odkrywa swoją prawdziwą tożsamość i łączy siły z ojcem oraz nowymi przyjaciółmi, aby pokonać wroga.",
          },
          {
            title: "Część 4",
            description:
              "Najnowsza część serii, w której Po staje przed nowymi wyzwaniami, w tym potężnym przeciwnikiem z przeszłości kung fu.",
          },
        ],
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
          {
            title: "Wiedźmin (2001)",
            description:
              "Pierwszy film adaptujący sagę o Geralcie z Rivii, przedstawiający jego przygody w świecie pełnym potworów i intryg.",
          },
          {
            title: "Wiedźmin: Zmora Wilka (2021)",
            description:
              "Animowany film koncentrujący się na młodym Wiedźminie, jego treningu i pierwszych misjach, ukazujący początki jego legendy.",
          },
          {
            title: "Wiedźmin: Syreny z głębin (2025)",
            description:
              "Opowieść o walce Geralta z potworami morskimi i politycznych intrygach nad brzegami królestw północy.",
          },
          {
            title: "Szczury: Opowieści ze świata Wiedźmina (2025)",
            description:
              "Zbiór krótkich historii ukazujących mroczne i brutalne życie zwykłych ludzi w świecie Wiedźmina.",
          },
        ],
      },
      {
        title: "Jak Wytresować Smoka",
        parts: [
          {
            title: "Część 1",
            description:
              "Pierwsza część serii, opowiadająca o przyjaźni młodego Wikinga Hiccup’a z niebezpiecznym smokiem Bezzębkiem.",
          },
          {
            title: "Część 2",
            description:
              "Hiccup i Bezzębny kontynuują swoje przygody, odkrywając nowe krainy i wyzwania w świecie smoków.",
          },
          {
            title: "Część 3",
            description:
              "Finałowa część serii animowanej, w której Hiccup staje przed ostatecznym wyborem dotyczącym świata ludzi i smoków.",
          },
          {
            title: "Live Action",
            description:
              "Film aktorski oparty na popularnej serii animowanej, przenoszący historię Hiccup’a i Bezzębnego na duży ekran.",
          },
        ],
      },
      { title: "El Camino" },
      {
        title: "Sherlock Holmes",
        parts: [
          {
            title: "Sherlock Holmes",
            description:
              "Film wprowadzający genialnego detektywa Sherlocka Holmesa i jego pierwsze konfrontacje z przestępczym światem Londynu.",
          },
          {
            title: "Gra cieni",
            description:
              "Kontynuacja przygód Holmesa, w której staje do walki z arcywrogiem, profesor Moriartym, w serii inteligentnych zagadek i intryg.",
          },
        ],
      },
      {
        title: "Persona 3 The Movie",
        parts: [
          {
            title: "#1 Spring of Birth",
            description:
              "Pierwszy film w serii, wprowadzający bohaterów i tajemnicze wydarzenia związane z Dark Hour oraz Persona.",
          },
          {
            title: "#2 Midsummer Knight's Dream",
            description:
              "Drugi film, w którym bohaterowie zmagają się z nowymi wrogami i pogłębiają swoje relacje w świecie Persona.",
          },
          {
            title: "#3 Falling Down",
            description:
              "Trzeci film, pokazujący eskalację konfliktu z cieniami i dramatyczne wybory bohaterów.",
          },
          {
            title: "#4 Winter of Rebirth",
            description:
              "Finałowa część serii, rozstrzygająca losy bohaterów i tajemnice Dark Hour.",
          },
        ],
      },
      {
        title: "Madagaskar",
        parts: [
          {
            title: "Część 1",
            description:
              "Pierwsza część serii, w której grupa zwierząt z nowojorskiego zoo przypadkowo trafia na wyspę Madagaskar i próbuje odnaleźć się w dzikiej przyrodzie.",
          },
          {
            title: "Część 2",
            description:
              "Kontynuacja przygód zwierząt, które próbują wrócić do domu, napotykając nowe wyzwania i wrogów.",
          },
          {
            title: "Część 3",
            description:
              "Bohaterowie wracają do Nowego Jorku, ale muszą stawić czoła kolejnym zabawnym i niebezpiecznym przygodom.",
          },
          {
            title: "Pingwiny z Madagaskaru",
            description:
              "Spin-off skupiający się na zabawnych pingwinach z serii, które podejmują tajne misje pełne akcji i humoru.",
          },
        ],
      },
      {
        title: "Kung Fu Panda",
        parts: [
          {
            title: "Część 1",
            description:
              "Połączenie komedii i akcji, w którym niezdarny panda Po staje się wybranym wojownikiem kung fu.",
          },
          {
            title: "Część 2",
            description:
              "Po kontynuuje swoją podróż jako wojownik, stawiając czoła nowemu zagrożeniu dla Doliny Pokoju.",
          },
          {
            title: "Część 3",
            description:
              "Po odkrywa swoją prawdziwą tożsamość i łączy siły z ojcem oraz nowymi przyjaciółmi, aby pokonać wroga.",
          },
          {
            title: "Część 4",
            description:
              "Najnowsza część serii, w której Po staje przed nowymi wyzwaniami, w tym potężnym przeciwnikiem z przeszłości kung fu.",
          },
        ],
      },
      { title: "LEGO Ninjago Film (2017)" },
      { title: "Death Note" },
      { title: "Avatar: Ostatni Władca Wiatru" },
      { title: "Herkules" },
      {
        title: "Gwiezdne Wojny",
        parts: [
          {
            title: "Mroczne Widmo",
            description:
              "Pierwszy epizod prequeli, wprowadzający młodego Anakina Skywalkera i konflikty polityczne w galaktyce.",
          },
          {
            title: "Atak klonów",
            description:
              "Drugi epizod prequeli, pokazujący początki wojen klonów i rozwój relacji Anakina z Padmé.",
          },
          {
            title: "Zemsta Sithów",
            description:
              "Trzeci epizod prequeli, ukazujący upadek Anakina i przejście na ciemną stronę jako Darth Vader.",
          },
          {
            title: "Nowa Nadzieja",
            description:
              "Pierwszy film oryginalnej trylogii, w którym Luke Skywalker zaczyna swoją drogę Jedi i walczy z Imperium.",
          },
          {
            title: "Imperium kontratakuje",
            description:
              "Drugi film oryginalnej trylogii, w którym bohaterowie mierzą się z potężnym Imperium i tragicznymi stratami.",
          },
          {
            title: "Powrót Jedi",
            description:
              "Finał oryginalnej trylogii, przedstawiający ostateczną bitwę z Imperium i konfrontację Luke’a z Darthem Vaderem.",
          },
          {
            title: "Przebudzenie Mocy",
            description:
              "Pierwszy epizod nowej trylogii, wprowadzający Rey, Finna i Kylo Rena oraz powrót konfliktu w galaktyce.",
          },
          {
            title: "Ostatni Jedi",
            description:
              "Drugi film nowej trylogii, w którym Rey trenuje jako Jedi, a konflikt z Najwyższym Porządkiem się nasila.",
          },
          {
            title: "Skywalker: Odrodzenie",
            description:
              "Finał sagi Skywalkerów, kończący konflikt między Jedi a Ciemną Stroną oraz losy Rey i Kylo Rena.",
          },
        ],
      },
    ],

    Chiny: [
      {
        title: "Kung Fu Panda",
        parts: [
          {
            title: "Część 1",
            description:
              "Połączenie komedii i akcji, w którym niezdarny panda Po staje się wybranym wojownikiem kung fu.",
          },
          {
            title: "Część 2",
            description:
              "Po kontynuuje swoją podróż jako wojownik, stawiając czoła nowemu zagrożeniu dla Doliny Pokoju.",
          },
          {
            title: "Część 3",
            description:
              "Po odkrywa swoją prawdziwą tożsamość i łączy siły z ojcem oraz nowymi przyjaciółmi, aby pokonać wroga.",
          },
          {
            title: "Część 4",
            description:
              "Najnowsza część serii, w której Po staje przed nowymi wyzwaniami, w tym potężnym przeciwnikiem z przeszłości kung fu.",
          },
        ],
      },
      {
        title: "Ne Zha",
        parts: [
          {
            title: "Ne Zha",
            description:
              "Chińska animacja opowiadająca o młodym Ne Zha, który musi zmierzyć się z przeznaczeniem i dowieść swojej wartości jako bohater.",
          },
          {
            title: "Ne Zha 2",
            description:
              "Kontynuacja historii Ne Zha, w której bohater stawia czoła nowym zagrożeniom i odkrywa głębsze tajemnice swojego przeznaczenia.",
          },
        ],
      },
      { title: "Małpi Król" },
      { title: "Wielki Mur" },
      {
        title: "Mulan",
        parts: [
          {
            title: "Mulan",
            description:
              "Klasyczna animacja Disneya o młodej dziewczynie, która przebiera się za mężczyznę, by wstąpić do armii i uratować ojca oraz Chiny.",
          },
          {
            title: "Mulan 2",
            description:
              "Kontynuacja przygód Mulan, w której bohaterka stawia czoła nowym wyzwaniom wojskowym i osobistym, ucząc się odpowiedzialności i odwagi.",
          },
          {
            title: "Live Action",
            description:
              "Aktorska wersja historii Mulan, wiernie odwzorowująca animację, ale z większym naciskiem na realistyczną akcję i dramatyzm.",
          },
        ],
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
          {
            title: "Przyczajony Tygrys, Ukryty Smok",
            description:
              "Klasyczny film wuxia opowiadający o mistrzach kung fu, skradzionym legendarnym mieczu i dramatycznych losach bohaterów.",
          },
          {
            title: "Przyczajony Tygrys, Ukryty Smok: Miecz Przeznaczenia",
            description:
              "Kontynuacja historii, w której nowi bohaterowie podejmują walkę o odzyskanie legendarnego miecza i odkrywają swoje przeznaczenie.",
          },
        ],
      },
      { title: "The Yinyang Master" },
      { title: "Konfucjusz" },
      {
        title: "Persona 3 The Movie",
        parts: [
          {
            title: "#1 Spring of Birth",
            description:
              "Pierwszy film w serii, wprowadzający bohaterów i tajemnicze wydarzenia związane z Dark Hour oraz Persona.",
          },
          {
            title: "#2 Midsummer Knight's Dream",
            description:
              "Drugi film, w którym bohaterowie zmagają się z nowymi wrogami i pogłębiają swoje relacje w świecie Persona.",
          },
          {
            title: "#3 Falling Down",
            description:
              "Trzeci film, pokazujący eskalację konfliktu z cieniami i dramatyczne wybory bohaterów.",
          },
          {
            title: "#4 Winter of Rebirth",
            description:
              "Finałowa część serii, rozstrzygająca losy bohaterów i tajemnice Dark Hour.",
          },
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
        {
          title: "DOOM",
          parts: [
            {
              title: "DOOM (2005)",
              description:
                "Adaptacja kultowej gry FPS, w której żołnierze stawiają czoła demonicznym siłom na Marsie.",
            },
            {
              title: "DOOM: Anihilacja (2019)",
              description:
                "Nowsza ekranizacja gry, koncentrująca się na brutalnej walce z demonami w stacji badawczej na Marsie.",
            },
          ],
        },
        { title: "Jako w piekle, tak i na ziemi" },
        { title: "Norymberga" },
        { title: "Czas Apokalipsy" },
        {
          title: "Hellraiser",
          parts: [
            {
              title: "Hellraiser: Wysłannik piekieł",
              description:
                "Pierwszy film serii, wprowadzający Pinheada i przerażający świat cenobitów oraz ich mroczne pułapki.",
            },
            {
              title: "Hellraiser: Wysłannik piekieł II",
              description:
                "Kontynuacja historii, w której nowi bohaterowie stawiają czoła cenobitom i konsekwencjom otwarcia puzzle boxa.",
            },
            {
              title: "Hellraiser III: Piekło na ziemi",
              description:
                "Pinhead pojawia się w świecie ludzi, siejąc chaos i grozę w miejskim środowisku.",
            },
            {
              title: "Hellraiser IV: Dziedzictwo krwi",
              description:
                "Film kontynuuje mroczną sagę rodziny Cotton i przerażających cenobitów.",
            },
            {
              title: "Hellraiser V: Wrota piekieł",
              description:
                "Bohaterowie stają przed kolejnym wyzwaniem związanym z otwarciem piekielnych wrót i powrotem Pinheada.",
            },
            {
              title: "Hellraiser: Droga do piekła",
              description:
                "Historia nowych postaci, które próbują poradzić sobie z pułapkami i okrucieństwem cenobitów.",
            },
            {
              title: "Hellraiser: Sekta",
              description:
                "Sekta próbująca wykorzystać moce cenobitów napotyka tragiczne konsekwencje swoich działań.",
            },
            {
              title: "Hellraiser: Hellworld.com",
              description:
                "Mroczne wydarzenia łączą się z internetową grą, przynosząc Pinheada do współczesnego świata.",
            },
            {
              title: "Hellraiser: Revelations",
              description:
                "Nowe wcielenie koszmaru z Pinheadem, w którym bohaterowie próbują przeżyć w brutalnym świecie cenobitów.",
            },
            {
              title: "Hellraiser: Judgment",
              description:
                "Cenobici wymierzają sprawiedliwość tym, którzy złamali prawa piekła, w kolejnym mrocznym rozdziale serii.",
            },
            {
              title: "Hellraiser",
              description:
                "Reboot serii, wprowadzający nowe spojrzenie na Pinheada i mroczny świat puzzle boxa.",
            },
          ],
        },
        { title: "Constantine" },
      ],

      "Piekło Lista B": [
        { title: "L'Inferno" },
        { title: "Dante's Inferno: An Animated Epic" },
        { title: "Behemoth" },
        {
          title: "DOOM",
          parts: [
            {
              title: "DOOM (2005)",
              description:
                "Adaptacja kultowej gry FPS, w której żołnierze stawiają czoła demonicznym siłom na Marsie.",
            },
            {
              title: "DOOM: Anihilacja (2019)",
              description:
                "Nowsza ekranizacja gry, koncentrująca się na brutalnej walce z demonami w stacji badawczej na Marsie.",
            },
          ],
        },
        { title: "Jako w piekle, tak i na ziemi" },
        { title: "Minecraft: Film" },
        { title: "Trylogia Dana Browna" },
        {
          title: "Hellraiser",
          parts: [
            {
              title: "Hellraiser: Wysłannik piekieł",
              description:
                "Pierwszy film serii, wprowadzający Pinheada i przerażający świat cenobitów oraz ich mroczne pułapki.",
            },
            {
              title: "Hellraiser: Wysłannik piekieł II",
              description:
                "Kontynuacja historii, w której nowi bohaterowie stawiają czoła cenobitom i konsekwencjom otwarcia puzzle boxa.",
            },
            {
              title: "Hellraiser III: Piekło na ziemi",
              description:
                "Pinhead pojawia się w świecie ludzi, siejąc chaos i grozę w miejskim środowisku.",
            },
            {
              title: "Hellraiser IV: Dziedzictwo krwi",
              description:
                "Film kontynuuje mroczną sagę rodziny Cotton i przerażających cenobitów.",
            },
            {
              title: "Hellraiser V: Wrota piekieł",
              description:
                "Bohaterowie stają przed kolejnym wyzwaniem związanym z otwarciem piekielnych wrót i powrotem Pinheada.",
            },
            {
              title: "Hellraiser: Droga do piekła",
              description:
                "Historia nowych postaci, które próbują poradzić sobie z pułapkami i okrucieństwem cenobitów.",
            },
            {
              title: "Hellraiser: Sekta",
              description:
                "Sekta próbująca wykorzystać moce cenobitów napotyka tragiczne konsekwencje swoich działań.",
            },
            {
              title: "Hellraiser: Hellworld.com",
              description:
                "Mroczne wydarzenia łączą się z internetową grą, przynosząc Pinheada do współczesnego świata.",
            },
            {
              title: "Hellraiser: Revelations",
              description:
                "Nowe wcielenie koszmaru z Pinheadem, w którym bohaterowie próbują przeżyć w brutalnym świecie cenobitów.",
            },
            {
              title: "Hellraiser: Judgment",
              description:
                "Cenobici wymierzają sprawiedliwość tym, którzy złamali prawa piekła, w kolejnym mrocznym rozdziale serii.",
            },
            {
              title: "Hellraiser",
              description:
                "Reboot serii, wprowadzający nowe spojrzenie na Pinheada i mroczny świat puzzle boxa.",
            },
          ],
        },
        { title: "Constantine" },
      ],

      Czyściec: [
        {
          title: "Wiedźmin",
          parts: [
            {
              title: "Wiedźmin (2001)",
              description:
                "Pierwszy film adaptujący sagę o Geralcie z Rivii, przedstawiający jego przygody w świecie pełnym potworów i intryg.",
            },
            {
              title: "Wiedźmin: Zmora Wilka (2021)",
              description:
                "Animowany film koncentrujący się na młodym Wiedźminie, jego treningu i pierwszych misjach, ukazujący początki jego legendy.",
            },
            {
              title: "Wiedźmin: Syreny z głębin (2025)",
              description:
                "Opowieść o walce Geralta z potworami morskimi i politycznych intrygach nad brzegami królestw północy.",
            },
            {
              title: "Szczury: Opowieści ze świata Wiedźmina (2025)",
              description:
                "Zbiór krótkich historii ukazujących mroczne i brutalne życie zwykłych ludzi w świecie Wiedźmina.",
            },
          ],
        },
        { title: "Dzwonnik z Notre Dame", parts: ["Część 1", "Część 2"] },
        { title: "Ostatni Pojedynek" },
        {
          title: "Śródziemie",
          parts: [
            {
              title: "Władca Pierścieni: Drużyna Pierścienia",
              description:
                "Pierwsza część trylogii, w której Frodo i jego towarzysze wyruszają, by zniszczyć Jedyny Pierścień i powstrzymać Saurona.",
            },
            {
              title: "Władca Pierścieni: Dwie Wieże",
              description:
                "Drugi film trylogii, ukazujący rozdzielenie Drużyny i narastające zagrożenie ze strony Saurona oraz Sarumana.",
            },
            {
              title: "Władca Pierścieni: Powrót Króla",
              description:
                "Finałowa część trylogii, w której bohaterowie stają do ostatecznej bitwy o Śródziemie i losy Pierścienia zostają rozstrzygnięte.",
            },
            {
              title: "Hobbit: Niezwykła Podróż",
              description:
                "Początek przygód Bilba Bagginsa, który wyrusza z grupą krasnoludów na wyprawę do Samotnej Góry.",
            },
            {
              title: "Hobbit: Pustkowie Smauga",
              description:
                "Druga część przygód Bilba, koncentrująca się na starciu z potężnym smokiem Smaugiem i zagrożeniu dla królestwa krasnoludów.",
            },
            {
              title: "Hobbit: Bitwa Pięciu Armii",
              description:
                "Kulminacyjna część trylogii, w której rozgrywa się epicka bitwa między ludźmi, elfami, krasnoludami i siłami ciemności.",
            },
            {
              title: "Władca Pierścieni: Wojna Rohirrimów",
              description:
                "Film opowiadający o losach Rohirrimów i ich kluczowej roli w wydarzeniach trylogii Władcy Pierścieni.",
            },
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
          parts: [
            {
              title: "Starcie Tytanów",
              description:
                "Film opowiadający o Perseuszu, jego walce z potworami i bogami, oraz próbie uratowania księżniczki i ludzkości.",
            },
            {
              title: "Zemsta Tytanów",
              description:
                "Kontynuacja historii Perseusza, w której bohater stawia czoła nowym mitologicznym zagrożeniom i potężnym tytanom.",
            },
          ],
        },
        { title: "Pasja" },
        { title: "Noe: Wybrany przez Boga" },
        {
          title: "Avatar",
          parts: [
            {
              title: "Avatar",
              description:
                "Pierwszy film Jamesa Camerona, w którym Jake Sully odkrywa świat Pandory i angażuje się w konflikt między ludźmi a Na’vi.",
            },
            {
              title: "Avatar: Istota wody",
              description:
                "Kontynuacja, w której bohaterowie zgłębiają podwodne krainy Pandory i stają przed nowymi wyzwaniami i zagrożeniami.",
            },
            {
              title: "Avatar: Ogień i popiół",
              description:
                "Trzecia część serii, ukazująca eskalację konfliktu między ludźmi a Na’vi oraz dramatyczne wydarzenia na Pandorze.",
            },
          ],
        },
        { title: "Interstellar" },
        {
          title: "Gwiezdne wojny",
          parts: [
            {
              title: "Mroczne Widmo",
              description:
                "Pierwszy epizod prequeli, wprowadzający młodego Anakina Skywalkera i konflikty polityczne w galaktyce.",
            },
            {
              title: "Atak klonów",
              description:
                "Drugi epizod prequeli, pokazujący początki wojen klonów i rozwój relacji Anakina z Padmé.",
            },
            {
              title: "Zemsta Sithów",
              description:
                "Trzeci epizod prequeli, ukazujący upadek Anakina i przejście na ciemną stronę jako Darth Vader.",
            },
            {
              title: "Nowa Nadzieja",
              description:
                "Pierwszy film oryginalnej trylogii, w którym Luke Skywalker zaczyna swoją drogę Jedi i walczy z Imperium.",
            },
            {
              title: "Imperium kontratakuje",
              description:
                "Drugi film oryginalnej trylogii, w którym bohaterowie mierzą się z potężnym Imperium i tragicznymi stratami.",
            },
            {
              title: "Powrót Jedi",
              description:
                "Finał oryginalnej trylogii, przedstawiający ostateczną bitwę z Imperium i konfrontację Luke’a z Darthem Vaderem.",
            },
            {
              title: "Przebudzenie Mocy",
              description:
                "Pierwszy epizod nowej trylogii, wprowadzający Rey, Finna i Kylo Rena oraz powrót konfliktu w galaktyce.",
            },
            {
              title: "Ostatni Jedi",
              description:
                "Drugi film nowej trylogii, w którym Rey trenuje jako Jedi, a konflikt z Najwyższym Porządkiem się nasila.",
            },
            {
              title: "Skywalker: Odrodzenie",
              description:
                "Finał sagi Skywalkerów, kończący konflikt między Jedi a Ciemną Stroną oraz losy Rey i Kylo Rena.",
            },
          ],
        },
      ],
    },

    Filozofia: [
      {
        title: "Persona 3 The Movie",
        parts: [
          {
            title: "#1 Spring of Birth",
            description:
              "Pierwszy film w serii, wprowadzający bohaterów i tajemnicze wydarzenia związane z Dark Hour oraz Persona.",
          },
          {
            title: "#2 Midsummer Knight's Dream",
            description:
              "Drugi film, w którym bohaterowie zmagają się z nowymi wrogami i pogłębiają swoje relacje w świecie Persona.",
          },
          {
            title: "#3 Falling Down",
            description:
              "Trzeci film, pokazujący eskalację konfliktu z cieniami i dramatyczne wybory bohaterów.",
          },
          {
            title: "#4 Winter of Rebirth",
            description:
              "Finałowa część serii, rozstrzygająca losy bohaterów i tajemnice Dark Hour.",
          },
        ],
      },
      {
        title: "Wiedźmin",
        parts: [
          {
            title: "Wiedźmin (2001)",
            description:
              "Pierwszy film adaptujący sagę o Geralcie z Rivii, przedstawiający jego przygody w świecie pełnym potworów i intryg.",
          },
          {
            title: "Wiedźmin: Zmora Wilka (2021)",
            description:
              "Animowany film koncentrujący się na młodym Wiedźminie, jego treningu i pierwszych misjach, ukazujący początki jego legendy.",
          },
          {
            title: "Wiedźmin: Syreny z głębin (2025)",
            description:
              "Opowieść o walce Geralta z potworami morskimi i politycznych intrygach nad brzegami królestw północy.",
          },
          {
            title: "Szczury: Opowieści ze świata Wiedźmina (2025)",
            description:
              "Zbiór krótkich historii ukazujących mroczne i brutalne życie zwykłych ludzi w świecie Wiedźmina.",
          },
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
          {
            title: "Mroczne Widmo",
            description:
              "Pierwszy epizod prequeli, wprowadzający młodego Anakina Skywalkera i konflikty polityczne w galaktyce.",
          },
          {
            title: "Atak klonów",
            description:
              "Drugi epizod prequeli, pokazujący początki wojen klonów i rozwój relacji Anakina z Padmé.",
          },
          {
            title: "Zemsta Sithów",
            description:
              "Trzeci epizod prequeli, ukazujący upadek Anakina i przejście na ciemną stronę jako Darth Vader.",
          },
          {
            title: "Nowa Nadzieja",
            description:
              "Pierwszy film oryginalnej trylogii, w którym Luke Skywalker zaczyna swoją drogę Jedi i walczy z Imperium.",
          },
          {
            title: "Imperium kontratakuje",
            description:
              "Drugi film oryginalnej trylogii, w którym bohaterowie mierzą się z potężnym Imperium i tragicznymi stratami.",
          },
          {
            title: "Powrót Jedi",
            description:
              "Finał oryginalnej trylogii, przedstawiający ostateczną bitwę z Imperium i konfrontację Luke’a z Darthem Vaderem.",
          },
          {
            title: "Przebudzenie Mocy",
            description:
              "Pierwszy epizod nowej trylogii, wprowadzający Rey, Finna i Kylo Rena oraz powrót konfliktu w galaktyce.",
          },
          {
            title: "Ostatni Jedi",
            description:
              "Drugi film nowej trylogii, w którym Rey trenuje jako Jedi, a konflikt z Najwyższym Porządkiem się nasila.",
          },
          {
            title: "Skywalker: Odrodzenie",
            description:
              "Finał sagi Skywalkerów, kończący konflikt między Jedi a Ciemną Stroną oraz losy Rey i Kylo Rena.",
          },
        ],
      },
      { title: "Między piekłem a niebem" },
      { title: "Niebo istnieje... naprawdę" },
      { title: "Wszystkie psy idą do Nieba" },
      {
        title: "Hellraiser",
        parts: [
          {
            title: "Hellraiser: Wysłannik piekieł",
            description:
              "Pierwszy film serii, wprowadzający Pinheada i przerażający świat cenobitów oraz ich mroczne pułapki.",
          },
          {
            title: "Hellraiser: Wysłannik piekieł II",
            description:
              "Kontynuacja historii, w której nowi bohaterowie stawiają czoła cenobitom i konsekwencjom otwarcia puzzle boxa.",
          },
          {
            title: "Hellraiser III: Piekło na ziemi",
            description:
              "Pinhead pojawia się w świecie ludzi, siejąc chaos i grozę w miejskim środowisku.",
          },
          {
            title: "Hellraiser IV: Dziedzictwo krwi",
            description:
              "Film kontynuuje mroczną sagę rodziny Cotton i przerażających cenobitów.",
          },
          {
            title: "Hellraiser V: Wrota piekieł",
            description:
              "Bohaterowie stają przed kolejnym wyzwaniem związanym z otwarciem piekielnych wrót i powrotem Pinheada.",
          },
          {
            title: "Hellraiser: Droga do piekła",
            description:
              "Historia nowych postaci, które próbują poradzić sobie z pułapkami i okrucieństwem cenobitów.",
          },
          {
            title: "Hellraiser: Sekta",
            description:
              "Sekta próbująca wykorzystać moce cenobitów napotyka tragiczne konsekwencje swoich działań.",
          },
          {
            title: "Hellraiser: Hellworld.com",
            description:
              "Mroczne wydarzenia łączą się z internetową grą, przynosząc Pinheada do współczesnego świata.",
          },
          {
            title: "Hellraiser: Revelations",
            description:
              "Nowe wcielenie koszmaru z Pinheadem, w którym bohaterowie próbują przeżyć w brutalnym świecie cenobitów.",
          },
          {
            title: "Hellraiser: Judgment",
            description:
              "Cenobici wymierzają sprawiedliwość tym, którzy złamali prawa piekła, w kolejnym mrocznym rozdziale serii.",
          },
          {
            title: "Hellraiser",
            description:
              "Reboot serii, wprowadzający nowe spojrzenie na Pinheada i mroczny świat puzzle boxa.",
          },
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
          {
            title: "Władca Pierścieni: Drużyna Pierścienia",
            description:
              "Pierwsza część trylogii, w której Frodo i jego towarzysze wyruszają, by zniszczyć Jedyny Pierścień i powstrzymać Saurona.",
          },
          {
            title: "Władca Pierścieni: Dwie Wieże",
            description:
              "Drugi film trylogii, ukazujący rozdzielenie Drużyny i narastające zagrożenie ze strony Saurona oraz Sarumana.",
          },
          {
            title: "Władca Pierścieni: Powrót Króla",
            description:
              "Finałowa część trylogii, w której bohaterowie stają do ostatecznej bitwy o Śródziemie i losy Pierścienia zostają rozstrzygnięte.",
          },
          {
            title: "Hobbit: Niezwykła Podróż",
            description:
              "Początek przygód Bilba Bagginsa, który wyrusza z grupą krasnoludów na wyprawę do Samotnej Góry.",
          },
          {
            title: "Hobbit: Pustkowie Smauga",
            description:
              "Druga część przygód Bilba, koncentrująca się na starciu z potężnym smokiem Smaugiem i zagrożeniu dla królestwa krasnoludów.",
          },
          {
            title: "Hobbit: Bitwa Pięciu Armii",
            description:
              "Kulminacyjna część trylogii, w której rozgrywa się epicka bitwa między ludźmi, elfami, krasnoludami i siłami ciemności.",
          },
          {
            title: "Władca Pierścieni: Wojna Rohirrimów",
            description:
              "Film opowiadający o losach Rohirrimów i ich kluczowej roli w wydarzeniach trylogii Władcy Pierścieni.",
          },
        ],
      },
      {
        title: "Matrix",
        parts: [
          {
            title: "Matrix (1999)",
            description:
              "Pierwszy film serii, wprowadzający Neo i świat Matrixa – wirtualną rzeczywistość kontrolowaną przez maszyny.",
          },
          {
            title: "Matrix: Reaktywacja (2003)",
            description:
              "Druga część trylogii, w której Neo kontynuuje walkę z maszynami i odkrywa kolejne tajemnice Matrixa.",
          },
          {
            title: "Matrix: Rewolucje (2003)",
            description:
              "Finał oryginalnej trylogii, ukazujący ostateczną konfrontację Neo z maszynami i przeznaczeniem ludzkości.",
          },
          {
            title: "Matrix: Zmartwychwstanie (2021)",
            description:
              "Reboot/kontynuacja serii, w której Neo powraca do Matrixa, stając przed nowymi zagrożeniami i pytaniami o rzeczywistość.",
          },
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
        parts: [
          {
            title: "Część 1",
            description:
              "Pierwsza część serii, opowiadająca o przyjaźni młodego Wikinga Hiccup’a z niebezpiecznym smokiem Bezzębkiem.",
          },
          {
            title: "Część 2",
            description:
              "Hiccup i Bezzębny kontynuują swoje przygody, odkrywając nowe krainy i wyzwania w świecie smoków.",
          },
        ],
      },
      {
        title: "Kung Fu Panda",
        parts: [
          {
            title: "Część 1",
            description:
              "Połączenie komedii i akcji, w którym niezdarny panda Po staje się wybranym wojownikiem kung fu.",
          },
          {
            title: "Część 2",
            description:
              "Po kontynuuje swoją podróż jako wojownik, stawiając czoła nowemu zagrożeniu dla Doliny Pokoju.",
          },
          {
            title: "Część 3",
            description:
              "Po odkrywa swoją prawdziwą tożsamość i łączy siły z ojcem oraz nowymi przyjaciółmi, aby pokonać wroga.",
          },
        ],
      },
      { title: "Spirited Away: W krainie bogów" },
      { title: "Dzień Świra" },
      {
        title: "Shrek",
        parts: [
          {
            title: "Shrek 1",
            description:
              "Pierwsza część przygód zielonego ogrra Shreka, który wyrusza, by uratować księżniczkę Fionę i odkrywa prawdziwe znaczenie przyjaźni i miłości.",
          },
          {
            title: "Shrek 2",
            description:
              "Kontynuacja, w której Shrek i Fiona odwiedzają królestwo jej rodziców, napotykając nowe wyzwania i zabawne przygody.",
          },
          {
            title: "Shrek 3",
            description:
              "Shrek staje przed obowiązkiem zostania królem i wyrusza w podróż, by znaleźć następcę tronu, przeżywając przy tym kolejne komiczne perypetie.",
          },
          {
            title: "Shrek 4",
            description:
              "Czwarta część serii, w której Shrek zmaga się z konsekwencjami życzenia, cofając się w czasie i poznając alternatywne wersje swojej historii.",
          },
        ],
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
      {
        title: "Zwierzogród",
        parts: [
          {
            title: "Zwierzogród 1",
            description:
              "Pierwsza część animowanej serii o Judy Hopps i Nicku Wilde, którzy wspólnie rozwiązują zagadki kryminalne w tętniącym życiem mieście Zwierzogród.",
          },
          {
            title: "Zwierzogród 2",
            description:
              "Kontynuacja przygód bohaterów, w której Judy i Nick stawiają czoła nowym wyzwaniom i zagrożeniom w mieście Zwierzogród.",
          },
        ],
      },
      { title: "Norymberga" },
      { title: "Behemoth" },
      {
        title: "Sherlock Holmes",
        parts: [
          {
            title: "Sherlock Holmes",
            description:
              "Film wprowadzający genialnego detektywa Sherlocka Holmesa i jego pierwsze konfrontacje z przestępczym światem Londynu.",
          },
          {
            title: "Gra cieni",
            description:
              "Kontynuacja przygód Holmesa, w której staje do walki z arcywrogiem, profesor Moriartym, w serii inteligentnych zagadek i intryg.",
          },
        ],
      },
      { title: "Raya i Ostatni Smok" },
      { title: "Małpi Król" },
      {
        title: "DOOM",
        parts: [
          {
            title: "DOOM (2005)",
            description:
              "Adaptacja kultowej gry FPS, w której żołnierze stawiają czoła demonicznym siłom na Marsie.",
          },
          {
            title: "DOOM: Anihilacja (2019)",
            description:
              "Nowsza ekranizacja gry, koncentrująca się na brutalnej walce z demonami w stacji badawczej na Marsie.",
          },
        ],
      },
    ],
  };

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    setOpenSubgroup(null);
    setSelectedSeries(null);
    setSelectedPart(null);
  };

  const handleSeriesClick = (series) => {
    if (selectedSeries?.title === series.title) {
      setSelectedSeries(null);
      setSelectedPart(null);
    } else {
      setSelectedSeries(series);
      setSelectedPart(null);
    }
  };

  const handlePartClick = (e, part) => {
    e.stopPropagation();

    if (selectedPart?.title === part.title) {
      setSelectedPart(null);
    } else {
      setSelectedPart(part);
    }
  };

  const toggleSubgroup = (group) => {
    setOpenSubgroup(openSubgroup === group ? null : group);
  };

  const isBoskaKomedia = selectedCategory === "Boska Komedia";

  // Scroll do serii
  useEffect(() => {
    if (selectedSeries && seriesRef.current) {
      seriesRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selectedSeries]);

  // Scroll do części
  useEffect(() => {
    if (selectedPart && partRef.current) {
      partRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selectedPart]);

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

        {/* Zwykłe kategorie */}
        {!isBoskaKomedia && selectedCategory && (
          <ul className="movies-list">
            {movies[selectedCategory].map((series) => (
              <li
                key={series.title}
                className="movies-item clickable"
                onClick={() => handleSeriesClick(series)}
              >
                {series.title}
              </li>
            ))}
          </ul>
        )}

        {/* Boska Komedia */}
        {isBoskaKomedia &&
          Object.keys(movies["Boska Komedia"]).map((group) => (
            <div key={group} className="movies-group">
              <h3
                className="movies-group-title clickable"
                onClick={() => toggleSubgroup(group)}
              >
                {group}
              </h3>

              {openSubgroup === group && (
                <ul className="movies-list">
                  {movies["Boska Komedia"][group].map((series) => (
                    <li
                      key={series.title}
                      className="movies-item clickable"
                      onClick={() => handleSeriesClick(series)}
                    >
                      {series.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

        {/* Szczegóły serii */}
        {selectedSeries && (
          <div className="series-details" ref={seriesRef}>
            <h3>{selectedSeries.title}</h3>

            {seriesDescriptions[selectedSeries.title] && (
              <div className="series-description">
                <p>
                  <strong>Licencja:</strong>{" "}
                  {seriesDescriptions[selectedSeries.title].licence}
                </p>
                <p>
                  <strong>Protagonista:</strong>{" "}
                  {seriesDescriptions[selectedSeries.title].protagonist}
                </p>
                <p>
                  <strong>Antagonista:</strong>{" "}
                  {seriesDescriptions[selectedSeries.title].antagonist}
                </p>
                <p>
                  <strong>Dlaczego tu jest:</strong>{" "}
                  {seriesDescriptions[selectedSeries.title].why}
                </p>
                <p>
                  <strong>Opis:</strong>{" "}
                  {seriesDescriptions[selectedSeries.title].description}
                </p>
              </div>
            )}

            {selectedSeries.parts && (
              <ul className="movies-sublist">
                {selectedSeries.parts.map((part) => (
                  <li
                    key={part.title}
                    className="movies-subitem clickable"
                    onClick={(e) => handlePartClick(e, part)}
                  >
                    {part.title}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Szczegóły części */}
        {selectedPart && (
          <div className="part-details" ref={partRef}>
            <h4>{selectedPart.title}</h4>
            <p>{selectedPart.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Movies;
