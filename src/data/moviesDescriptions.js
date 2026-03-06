const moviesDescriptions = {
  Wiedźmin: {
    licence: "Gry, Seriale, Boska Komedia, Filozofia",
    protagonist: "Geralt z Rivii, Vesemir",
    antagonist:
      "Falwick, Ornella, Melusina, Deglan, Tetra Gilcrest, Leo Bonhart",
    location: "Kontynent, głównie XIII wiek",
    why: "Filmy o Wiedźminie powstały równolegle z grami i serialami. Są częścią mojego zbioru filmów nawiązującego do Boskiej Komedii (Czyśćca). Mają też głęboką wartość filozoficzną. Wszystko jest na podstawie książek, które są jednymi z niewielu jakie przeczytałam.",
    description: "",
  },
  "Assassin's Creed": {
    licence: "Gry, Seriale, Filozofia",
    protagonist: "Callum Lynch / Aguilar",
    antagonist: "Templariusze",
    why: "Filmy o Asasynach są tak naprawdę adaptacjami gier. Oprócz tego w świecie Asasynów dzieje się miniserial Lineage (a także nadchodzący serial Netflixa). Assassin's Creed ma też dużo wątków filozoficznych na temat wolnej woli i teorii symulacji",
    location:
      "XV-wieczna i współczesna Hiszpania oraz Włochy (Toskania, Florencja) w 1524 roku",
    description: "",
  },
  DOOM: {
    licence: "Gry, Boska Komedia, Maraton 1",
    protagonist: "John 'Reaper' Grimm, Porucznik Joan Dark",
    antagonist: "Sarge, Dr Malcolm Betruger, Demony",
    why: "Filmy DOOM opierają się na grach. Są to też filmy które umieściłam w liście Boska Komedia (Piekło). Podczas pierwszego maratonu również obejrzałam oba DOOMy",
    location: "Ziemia, Mars, Piekło w przyszłości",
    description: "",
  },
  "Lara Croft": {
    licence: "Gry",
    protagonist: "Lara Croft",
    antagonist: "Manfred Powell, Jonathan Reiss, Mathias Vogel",
    why: "Seria filmowa oparta jest na grach.",
    location: "Wiele różnych państw współczesnego świata",
    description: "",
  },
  "LEGO Ninjago Film (2017)": {
    licence: "Gry, Seriale, Chiny",
    protagonist: "Lloyd i Ninja",
    antagonist: "Lord Garmadon",
    why: "Film Ninjago inspirowany jest serialem. Na podstawie filmu wyszła równolegle również gra. Azjatycki klimat Ninjago sprawia że ten film jest dla mnie tym bardziej interesujący, jako sinolożki",
    location: "Ninjago City",
    description: "",
  },
  "Wizarding World": {
    licence: "Gry",
    protagonist: "Harry Potter, Newt Scamander",
    antagonist: "Lord Voldemort, Gellert Grindelwald",
    why: "Klasyczna seria fantasy, która ma swoje odpowiedniki w grach takich jak LEGO Harry Potter czy Hogwart's Legacy",
    location: "Hogwart",
    description: "",
  },
  "Jak Wytresować Smoka": {
    licence: "Gry, Seriale, IPiN, HTTYD",
    protagonist: "Czkawka i Szczerbatek",
    antagonist: "Czerwona Śmierć, Drago Krwawdoń, Grimmel Gnębiciel",
    why: "Jak wytresować Smoka to film wyjątkowy i jest kategorią samą w sobie. Powstało na jego podstawie kilka gier i seriali, takich jak School of Dragons, Rise of Berk, Dawn of New Riders, a także dwa seriale (Jeźdźcy Smoków i Jeźdźcy Smoków: 9 światów). Dwie części obejrzałam też będąc w IPiNie",
    location: "Skandynawia (Berk) w okresie Wikingów",
    description: "",
  },
  "Gwiezdne wojny": {
    licence: "Gry, Seriale, Boska Komedia, Filozofia",
    protagonist: "Anakin Skywalker, Luke Skywalker, Rey",
    antagonist: "Hrabia Dooku, Darth Vader, Darth Sidious, Kylo Ren",
    why: "Kultowa saga sci-fi, która ma mnóstwo gier (Battlefront 2) i seriali (Mandalorian). W serii nawiązującej do Boskiej Komedii symbolizuje Niebo. Ma też dużo motywów filozoficznych.",
    location: "Dawno, dawno temu w odległej galaktyce",
    description: "",
  },
  "Sherlock Holmes": {
    licence: "Gry, Seriale, Maraton 1",
    protagonist: "Sherlock Holmes",
    antagonist: "Lord Blackwood, James Moriarty",
    why: "Sherlock Holmes to jedna z niewielu serii książek, które przeczytałam. Na jej podstawie jest dużo nie tylko filmów, ale też gier (Chapter One, The Awakened) i seriali (Sherlock). Obejrzane podczas pierwszego maratonu.",
    location: "XIX-wieczny Londyn",
    description: "",
  },
  "Persona 3 The Movie": {
    licence: "Gry, Seriale, Chiny, Filozofia",
    protagonist: "Makoto Yuki i drużyna SEES",
    antagonist: "Strega, Shuji Ikutsuki",
    why: "Adaptacja gry Persona 3. Z serii Persona powstało poza grami również kilka seriali. Azjatyckie klimaty Japonii są fascynujące dla mnie jako sinolożki, nawet mimo że nie są to Chiny. Persona 3 eksploruje temty filozoficzne takie jak śmierć, zdrada czy depresja.",
    location: "Japonia (Tatsumi Port Island) 2009 rok",
    description: "",
  },
  "Epoka Lodowcowa": {
    licence: "Gry",
    protagonist: "Maniek, Sid, Diego, Buck",
    antagonist: "Rudy",
    why: "Film, który ma stworzoną na jej podstawie grę, która stworzyła mi dzieciństwo.",
    location: "Ziemia podczas Epoki Lodowcowej oraz podziemny świat dinozaurów",
    description: "",
  },
  "Dante's Inferno: An Animated Epic": {
    licence: "Gry, Boska Komedia, Filozofia",
    protagonist: "Dante",
    antagonist: "Lucyfer, Demony",
    why: "Adaptacja Boskiej Komedii, a konkretnie gry na jej podstawie. Boska Komedia jest bardzo filozoficzna, ten film może trochę mniej, ale nadal da się znaleźć rozważania nad grzechem.",
    location: "Piekło około 1191 roku",
    description: "",
  },
  Madagaskar: {
    licence: "Gry, Seriale",
    protagonist: "Alex, Marty, Melman, Gloria, Pingwiny",
    antagonist: "Fossy, Makunga, Chantel DuBois",
    why: "Animowana komedia, na podstawie której powstały gry i seriale.",
    location: "Madagaskar, Afryka, Francja współcześnie",
    description: "",
  },
  "Kung Fu Panda": {
    licence: "Gry, Seriale, Chiny, IPiN",
    protagonist: "Po",
    antagonist: "Tai Lung, Shen, Kai, Kameleon",
    why: "Animacja osadzona w CHINACH, która ma stworzoną na swojej podstawie grę oraz aż 3 seriale. 3 części tej wybitnej sagi obejrzałam w IPiNie",
    location: "Starożytne Chiny",
    description: "",
  },
  Herkules: {
    licence: "Gry, Seriale",
    protagonist: "Herkules",
    antagonist: "Hades",
    why: "Animacja Disney’a, na podstawie której powstała gra i serial",
    location: "Starożytna Grecja, Olimp, Hades",
    description: "",
  },
  Aladyn: {
    licence: "Gry",
    protagonist: "Aladyn",
    antagonist: "Dżafar",
    why: "Klasyczna opowieść, która ma własną grę, w wersji Live-Action",
    location: "Agrabah, Złoty Wiek Islamu",
    description: "",
  },
  "Król Lew": {
    licence: "Gry",
    protagonist: "Simba",
    antagonist: "Skaza",
    why: "Klasyczna opowieść, która ma własną grę, w wersji ala Live-Action",
    location: "Afryka",
    description: "",
  },
  "Super Mario Bros": {
    licence: "Gry",
    protagonist: "Mario i Luigi",
    antagonist: "Bowser",
    why: "Filmowa adaptacja jednej z największych serii gier wszechczasów",
    location: "USA, Grzybowe Królestwo",
    description: "",
  },
  "El Camino": {
    licence: "Seriale, Filozofia",
    protagonist: "Jesse Pinkman",
    antagonist: "Neil Kandy",
    why: "Kontynuacja historii Jesse'ego z Breaking Bad. Filozoficzne tematy syndromu Sztokholmskiego.",
    location: "Albuquerque, Nowy Meksyk rok 2010",
    description: "",
  },
  "Death Note": {
    licence: "Seriale, Chiny, Filozofia",
    protagonist: "Light Yagami",
    antagonist: "L",
    why: "Film na podstawie kultowej mangi, która ma swój serial anime. Dzieje się w Azji Wschodniej (sinologia! - prawie). Eksplorowanie syndromu Boga i moralności.",
    location: "USA (Waszyngton), 2017 rok",
    description: "",
  },
  "Avatar: Ostatni Władca Wiatru": {
    licence: "Seriale, Chiny",
    protagonist: "Avatar Aang",
    antagonist: "Władca Ognia Ozai",
    why: "Film na podstawie serialu Avatar. Królestwo Ziemi z tego uniwersum jest silnie inspirowane Chinami",
    location: "Cztery Narody: Powietrza, Wody, Ziemi i Ognia",
    description: "",
  },
  "Ne Zha": {
    licence: "Chiny",
    protagonist: "Ne Zha",
    antagonist: "Shen Gongbao, Mistrz Wuliang Xianweng",
    why: "Popularna animacja fantasy z Chin",
    location: "Starożytne Chiny za czasów dynastii Shang",
    description: "",
  },
  "Małpi Król": {
    licence: "Chiny, Maraton 1",
    protagonist: "Sun Wukong",
    antagonist: "Nefrytowy Cesarz, Smoczy Król",
    why: "Film na podstawie klasycznej chińskiej powieści Wędrówka na Zachód. Obejrzane podczas pierwszego maratonu",
    location: "",
    description: "",
  },
  "Wielki Mur": {
    licence: "Chiny",
    protagonist: "William / Chen",
    antagonist: "Potwory atakujące Chiny",
    why: "Film dziejący się w starożytnych Chinach",
    location: "Starożytne Chiny (Wielki Mur)",
    description: "",
  },
  Mulan: {
    licence: "Chiny",
    protagonist: "Mulan",
    antagonist: "Shan Yu, Böri Khan",
    why: "Historia dziejąca się w Chinach.",
    location: "Starożytne Chiny",
    description: "",
  },
  "Rower z Pekinu": {
    licence: "Chiny, Filozofia",
    protagonist: "Ma i Xiaojun",
    antagonist: "Przeciwności losu i konflikt społeczny",
    why: "Chiński film poruszający tematy społeczne",
    location: "Współczesne Chiny (Pekin)",
    description: "",
  },
  "Spirited Away: W Krainie Bogów": {
    licence: "Chiny, Filozofia, IPiN",
    protagonist: "Chihiro",
    antagonist: "Yubaba",
    why: "Kultowa animacja studia Ghibli, która nie dość że dzieje się na Dalekim Wschodzie (sinologia!) i porusza tematy filozoficzne takie jak wartość własnego imienia, to objerzane po raz pierwszy w IPiNie",
    location: "",
    description: "",
  },
  "K-Popowe Łowczynie Demonów": {
    licence: "Chiny",
    protagonist: "Rumi, Mira, Zoey",
    antagonist: "Jinu, Gwi-Ma",
    why: "Nowatorska animacja z Dalekiego Wschodu - pobliże Chin!",
    location: "",
    description: "",
  },
  "Raya i Ostatni Smok": {
    licence: "Chiny, Maraton 1",
    protagonist: "Raya",
    antagonist: "Drużyna złych smoków i konflikty między królestwami",
    why: "Animacja przygodowa o jedności i zaufaniu",
    location: "",
    description:
      "Raya wyrusza na misję odnalezienia ostatniego smoka, by ocalić swoje królestwo.",
  },
  Behemoth: {
    licence: "Chiny, Boska Komedia, Filozofia, Maraton 1",
    protagonist: "Nieokreślony bohater",
    antagonist: "Potwory i chaos",
    why: "Animacja / film akcji",
    location: "",
    description:
      "Opowieść o walce z ogromnymi, niszczycielskimi bestiami w mrocznym świecie.",
  },
  "Przyczajony Tygrys, Ukryty Smok": {
    licence: "Chiny, Filozofia",
    protagonist: "Li Mu Bai i Yu Shu Lien",
    antagonist: "Jen Yu i złodzieje",
    why: "Kultowy film wuxia",
    location: "",
    description:
      "Historia honoru, miłości i sztuk walki w świecie legendarnych wojowników.",
  },
  "The Yinyang Master": {
    licence: "Chiny",
    protagonist: "Zhou Ming / Yin Yang Master",
    antagonist: "Demony i złe moce",
    why: "Film akcji fantasy",
    location: "",
    description:
      "Mistrz Yin Yang walczy z nadprzyrodzonymi zagrożeniami, chroniąc równowagę świata.",
  },
  Konfucjusz: {
    licence: "Chiny, Filozofia",
    protagonist: "Konfucjusz",
    antagonist: "Przeciwności polityczne i społeczne",
    why: "Biograficzny dramat historyczny",
    location: "",
    description:
      "Film opowiada o życiu i filozofii Konfucjusza oraz jego wpływie na chińskie społeczeństwo.",
  },
  "L'Inferno": {
    licence: "Boska Komedia, Filozofia",
    protagonist: "Dante",
    antagonist: "Grzech i potępienie",
    why: "Animowana adaptacja Boskiej Komedii",
    location: "",
    description:
      "Dante podróżuje przez piekło, poznając cierpienia grzeszników i reflektując nad moralnością.",
  },
  "Jako w piekle, tak i na ziemi": {
    licence: "Boska Komedia, Filozofia",
    protagonist: "Różne postacie",
    antagonist: "Zło i chaos w ludzkim świecie",
    why: "Film ilustrujący analogie piekła w realnym świecie",
    location: "",
    description:
      "Historia ukazuje ludzkie dramaty i moralne wybory, przedstawione w kontekście metaforycznego piekła.",
  },
  Norymberga: {
    licence: "Boska Komedia, Filozofia, Maraton 1",
    protagonist: "Sędziowie i prokuratorzy",
    antagonist: "Nazistowscy zbrodniarze",
    why: "Historyczny dramat sądowy",
    location: "",
    description:
      "Procesy norymberskie pokazują rozliczenie zbrodni wojennych i sprawiedliwość po II wojnie światowej.",
  },
  "Czas Apokalipsy": {
    licence: "Boska Komedia, Filozofia",
    protagonist: "Kapitan Willard",
    antagonist: "Pułkownik Kurtz",
    why: "Klasyczny film wojenny",
    location: "",
    description:
      "Opowieść o misji ratunkowej w chaosie wojny, ukazująca moralne i psychologiczne skutki konfliktu.",
  },
  Hellraiser: {
    licence: "Boska Komedia, Filozofia",
    protagonist: "Kirsty Cotton",
    antagonist: "Pinhead i Cenobici",
    why: "Kultowa seria horroru",
    location: "",
    description:
      "Mroczna historia o tajemniczej skrzynce, która sprowadza na świat cierpienie i piekielne moce.",
  },
  Constantine: {
    licence: "Boska Komedia, Filozofia",
    protagonist: "John Constantine",
    antagonist: "Demony i siły zła",
    why: "Film fantasy / horror",
    location: "",
    description:
      "Łowca demonów John Constantine walczy z nadprzyrodzonymi siłami, próbując uratować ludzkość.",
  },
  "Minecraft: Film": {
    licence: "Boska Komedia",
    protagonist: "Steve",
    antagonist: "Ender Dragon i inne zagrożenia",
    why: "Adaptacja popularnej gry wideo",
    location: "",
    description:
      "Steve wyrusza w przygodę po świecie bloków, stawiając czoła potworom i odkrywając tajemnice Minecrafta.",
  },
  "Trylogia Dana Browna": {
    licence: "Boska Komedia",
    protagonist: "Robert Langdon",
    antagonist: "Sekretne stowarzyszenia i przeciwnicy historyczni",
    why: "Adaptacja bestsellerowych powieści",
    location: "",
    description:
      "Profesor Langdon rozwiązuje zagadki związane z religią, historią i sztuką, aby odkryć prawdę i powstrzymać zło.",
  },
  "Dzwonnik z Notre Dame": {
    licence: "Boska Komedia",
    protagonist: "Quasimodo",
    antagonist: "Frollo",
    why: "Adaptacja klasycznej powieści Victora Hugo",
    location: "",
    description:
      "Quasimodo, dzwonnik katedry Notre Dame, zmaga się z uprzedzeniami społecznymi i miłością do Esmeraldy.",
  },
  "Ostatni Pojedynek": {
    licence: "Boska Komedia",
    protagonist: "Jean de Carrouges",
    antagonist: "Jacques Le Gris",
    why: "Historyczny dramat oparty na prawdziwych wydarzeniach",
    location: "",
    description:
      "Historia konfliktu i honoru, który prowadzi do ostatniego pojedynku między dwoma rycerzami.",
  },
  Śródziemie: {
    licence: "Boska Komedia, Filozofia",
    protagonist: "Frodo, Bilbo, Aragorn i inni",
    antagonist: "Sauron i jego armie",
    why: "Adaptacja legendarnych książek Tolkiena",
    location: "",
    description:
      "Bohaterowie wyruszają na epicką podróż, by zniszczyć Pierścień i pokonać zło w Śródziemiu.",
  },
  "Siódma pieczęć": {
    licence: "Boska Komedia",
    protagonist: "Rycerz Antonius Block",
    antagonist: "Śmierć",
    why: "Klasyczny film Bergmana",
    location: "",
    description:
      "Rycerz wraca z krucjaty i staje w obliczu Śmierci, grając z nią w szachy, szukając sensu życia i wiary.",
  },
  Wiking: {
    licence: "Boska Komedia, Filozofia",
    protagonist: "Ragnar Lothbrok / bohaterowie",
    antagonist: "Wrogowie i los",
    why: "Epicka historia wikingów",
    location: "",
    description:
      "Opowieść o wikingach, ich podróżach, bitwach i próbach przetrwania w brutalnym świecie.",
  },
  "Czarownica: Bajka ludowa z Nowej Anglii": {
    licence: "Boska Komedia",
    protagonist: "Thomasin / rodzina",
    antagonist: "Zła natura i społeczność",
    why: "Horror inspirowany folklorem",
    location: "",
    description:
      "Rodzina zmaga się z nadprzyrodzonymi zjawiskami i przesądami w kolonialnej Nowej Anglii.",
  },
  "Między piekłem a niebem": {
    licence: "Boska Komedia, Filozofia",
    protagonist: "Różne postacie",
    antagonist: "Zło, grzech",
    why: "Film refleksyjny o granicach życia i śmierci",
    location: "",
    description:
      "Eksploracja ludzkich doświadczeń i decyzji między cierpieniem a zbawieniem.",
  },
  "Niebo istnieje... naprawdę": {
    licence: "Boska Komedia, Filozofia",
    protagonist: "Colton Burpo i jego rodzina",
    antagonist: "Niepewność i wątpliwości",
    why: "Film oparty na bestsellerowej książce",
    location: "",
    description:
      "Historie chłopca, który twierdzi, że odwiedził niebo, pokazujące cuda i wiarę.",
  },
  "Wszystkie psy idą do Nieba": {
    licence: "Boska Komedia, Filozofia",
    protagonist: "Charlie B. Barkin",
    antagonist: "Skomplikowane losy i własne błędy",
    why: "Animowany film familijny",
    location: "",
    description:
      "Charlie B. Barkin powraca do życia po śmierci i uczy się wartości przyjaźni, miłości i odkupienia.",
  },
  "Starcie Tytanów": {
    licence: "Boska Komedia",
    protagonist: "Perseusz",
    antagonist: "Potwory i Hades",
    why: "Film fantasy / mitologiczny",
    location: "",
    description:
      "Perseusz wyrusza, by uratować królestwo przed potężnymi siłami bogów i potworów.",
  },
  Pasja: {
    licence: "Boska Komedia, Filozofia",
    protagonist: "Jezus Chrystus",
    antagonist: "Rzymskie władze i arcykapłani",
    why: "Historyczny dramat religijny",
    location: "",
    description:
      "Opowieść o ostatnich godzinach życia Jezusa, jego cierpieniu i poświęceniu.",
  },
  "Noe: Wybrany przez Boga": {
    licence: "Boska Komedia, Filozofia",
    protagonist: "Noe",
    antagonist: "Ludzkość i nadchodzący potop",
    why: "Biblia w wersji filmowej",
    location: "",
    description:
      "Noe otrzymuje boskie polecenie zbudowania arki i uratowania życia przed potopem.",
  },
  Interstellar: {
    licence: "Boska Komedia",
    protagonist: "Cooper i zespół astronautów",
    antagonist: "Czas, grawitacja i zagrożenia kosmiczne",
    why: "Sci-fi z głęboką refleksją",
    location: "",
    description:
      "Misja kosmiczna w poszukiwaniu nowego domu dla ludzkości, pełna dramatycznych wyborów i odkryć.",
  },
  Avatar: {
    licence: "Boska Komedia",
    protagonist: "Jake Sully",
    antagonist: "Colonel Quaritch i korporacja RDA",
    why: "Kultowy film sci-fi z przełomową animacją i ekologicznym przesłaniem",
    location: "",
    description:
      "Jake Sully, sparaliżowany były żołnierz, zostaje awatarem i pomaga mieszkańcom Pandory w walce z ludzkimi kolonizatorami.",
  },
  Matrix: {
    licence: "Filozofia",
    protagonist: "Neo",
    antagonist: "Agent Smith i maszyny",
    why: "Klasyka sci-fi i filozofii w kinie akcji",
    location: "",
    description:
      "Neo odkrywa, że żyje w sztucznie stworzonej rzeczywistości, i staje do walki z systemem kontrolującym ludzkość.",
  },
  Heretyk: {
    licence: "Filozofia",
    protagonist: "Heretycy i inkwizytorzy",
    antagonist: "Kościół i społeczne prześladowania",
    why: "Historyczny dramat religijny",
    location: "",
    description:
      "Historia walki jednostki z systemem religijnym i społecznym w średniowieczu.",
  },
  "Jojo Rabbit": {
    licence: "Filozofia",
    protagonist: "Jojo",
    antagonist: "Ideologia nazistowska",
    why: "Satyrystyczny dramat wojenny",
    location: "",
    description:
      "Chłopiec w hitlerowskich Niemczech konfrontuje się z absurdem wojny i swoimi przekonaniami.",
  },
  Sokrates: {
    licence: "Filozofia",
    protagonist: "Sokrates",
    antagonist: "Społeczeństwo i władze",
    why: "Film biograficzny / filozoficzny",
    location: "",
    description:
      "Historia życia Sokratesa, jego nauk i procesu sądowego w Atenach.",
  },
  Menu: {
    licence: "Filozofia, IPiN",
    protagonist: "Goście luksusowej restauracji",
    antagonist: "Szef kuchni i sytuacje ekstremalne",
    why: "Satyrystyczny thriller / komedia",
    location: "",
    description:
      "Luksusowa kolacja zamienia się w dramatyczną walkę o przetrwanie i moralność.",
  },
  "Kot w butach: Ostatnie życzenie": {
    licence: "Filozofia, IPiN",
    protagonist: "Kot w Butach",
    antagonist: "Niebezpieczeństwa i złoczyńcy",
    why: "Animowany film familijny",
    location: "",
    description:
      "Kot w Butach wyrusza na misję, aby spełnić swoje ostatnie życzenie i stawić czoła przygodom.",
  },
  Coco: {
    licence: "Filozofia, IPiN",
    protagonist: "Miguel",
    antagonist: "Tradycje i rodzinna tajemnica",
    why: "Animacja Pixar o kulturze i muzyce",
    location: "",
    description:
      "Chłopiec odkrywa tajemnice swojej rodziny i kultury podczas święta Dnia Zmarłych.",
  },
  Shrek: {
    licence: "IPiN",
    protagonist: "Shrek",
    antagonist: "Lord Farquaad, Rumpelstiltskin",
    why: "Kultowa seria animowana parodiująca baśnie",
    location: "",
    description:
      "Ogre Shrek wyrusza w podróż, aby odzyskać swoją ziemię i odnajduje przyjaźń oraz miłość.",
  },
  "Film o pszczołach": {
    licence: "IPiN",
    protagonist: "Barry B. Benson",
    antagonist: "Ludzie niszczący środowisko",
    why: "Animacja edukacyjna i humorystyczna",
    location: "",
    description:
      "Barry B. Benson ucieka od pracy w ulu i odkrywa świat ludzi, broniąc pszczół przed zagładą.",
  },
  Klatka: {
    licence: "IPiN",
    protagonist: "Główny bohater",
    antagonist: "System i współwięźniowie",
    why: "Dramat psychologiczny",
    location: "",
    description:
      "Historia uwięzionego bohatera, który walczy o przetrwanie i zachowanie człowieczeństwa w więziennej rzeczywistości.",
  },
  "Zabawa w Pochowanego": {
    licence: "IPiN",
    protagonist: "Dzieci bawiące się w grę",
    antagonist: "Niebezpieczeństwa kryjące się w lesie",
    why: "Thriller/horror o grze, która wymyka się spod kontroli",
    location: "",
    description:
      "Grupa dzieci bawi się w zabawę w chowanego, która staje się śmiertelnie niebezpieczna.",
  },
  "Bilet do Raju": {
    licence: "IPiN",
    protagonist: "Para głównych bohaterów",
    antagonist: "Miłosne komplikacje i intrygi",
    why: "Lekka komedia romantyczna",
    location: "",
    description:
      "Para udaje się na rajską wyspę, gdzie wplątują się w zabawne i romantyczne sytuacje.",
  },
  "Sierota: Narodziny zła": {
    licence: "IPiN",
    protagonist: "Esther",
    antagonist: "Rodzina adoptująca",
    why: "Horror psychologiczny z twistem",
    location: "",
    description:
      "Młoda dziewczynka zostaje adoptowana, ale skrywa mroczny sekret, który grozi rodzinie.",
  },
  "Uśmiechnij się": {
    licence: "IPiN",
    protagonist: "Główny bohater",
    antagonist: "Przeciwności losu",
    why: "Lekka komedia/dramat",
    location: "",
    description:
      "Bohater uczy się, jak odnaleźć radość życia mimo codziennych trudności.",
  },
  Zwierzogród: {
    licence: "Maraton 1",
    protagonist: "Judy Hopps",
    antagonist: "Duke Weaselton / tajemniczy przestępcy",
    why: "Popularna animacja dla dzieci i młodzieży z przesłaniem o tolerancji",
    location: "",
    description:
      "Młoda królika Judy zostaje pierwszą policjantką w Zwierzogrodzie i razem z lisem Nickiem Wilde rozwiązuje zagadkę kryminalną.",
  },
  Idiokracja: {
    licence: "Filozofia, IPiN",
    protagonist: "Joe Bauers",
    antagonist: "Zdegenerowane, antyintelektualne społeczeństwo przyszłości",
    why: "Satyra na upadek inteligencji i kultury masowej",
    location: "",
    description:
      "Przeciętny mężczyzna budzi się w przyszłości, w której jest najinteligentniejszym człowiekiem na świecie i musi uratować cywilizację przed całkowitym upadkiem.",
  },

  TED: {
    licence: "IPiN",
    protagonist: "John Bennett, Ted",
    antagonist: "Dorosłość i konsekwencje niedojrzałości",
    location: "",
    why: "Niepoprawna komedia o dorastaniu",
    description:
      "Adam Miauczyński to inteligent, który nie potrafi odnaleźć się w świecie — rozdarty między potrzebą miłości, akceptacji i sensu a własnymi słabościami. Jego życie to nieustanna walka z samotnością, nerwicą, uzależnieniem i poczuciem niespełnienia. W kolejnych etapach swojego życia mierzy się z relacjami rodzinnymi, alkoholizmem i egzystencjalnym kryzysem, stając się symboliczną figurą człowieka uwikłanego w samego siebie.",
  },

  "Milion sposobów, jak zginąć na Zachodzie": {
    licence: "IPiN",
    protagonist: "Albert Stark",
    antagonist: "Bezwzględny rewolwerowiec Clinch Leatherwood",
    why: "Parodia westernu z czarnym humorem",
    location: "",
    description:
      "Nieporadny farmer próbuje przetrwać na Dzikim Zachodzie, gdzie niemal wszystko może go zabić.",
  },
  "Adam Miauczyński": {
    licence: "Filozofia, IPiN",
    protagonist: "Adam Miauczyński",
    antagonist: "Własne lęki, frustracje, uzależnienia i polska codzienność",
    why: "Studium neurotycznej jednostki w zderzeniu z rzeczywistością",
    location: "",
    description:
      "Adam Miauczyński to inteligent, który nie potrafi odnaleźć się w świecie — rozdarty między potrzebą miłości, akceptacji i sensu a własnymi słabościami. Jego życie to nieustanna walka z samotnością, nerwicą, uzależnieniem i poczuciem niespełnienia. W kolejnych etapach swojego życia mierzy się z relacjami rodzinnymi, alkoholizmem i egzystencjalnym kryzysem, stając się symboliczną figurą człowieka uwikłanego w samego siebie.",
  },

  "Egzorcyzmy Siostry Ann": {
    licence: "IPiN",
    protagonist: "Siostra Ann",
    antagonist: "Demony i opętanie",
    why: "Horror o tematyce egzorcyzmów i walce ze złem",
    location: "Współczesny instytut szkolący egzorcystów w USA",
    description:
      "Młoda zakonnica Siostra Ann zostaje dopuszczona do nauki egzorcyzmów i staje do walki z demonicznymi siłami, odkrywając przy tym mroczne tajemnice związane z własną przeszłością.",
  },

  "Mustang z Dzikiej Doliny": {
    licence: "IPiN",
    protagonist: "Spirit (Mustang) i dziewczyna Lucky",
    antagonist: "Ludzie próbujący schwytać mustanga i ujarzmić dzikie konie",
    why: "Animowany film o wolności i przyjaźni",
    location: "Dziki Zachód w Ameryce Północnej",
    description:
      "Dziki mustang Spirit walczy o wolność swoją i innych koni, ucząc się zaufania i przyjaźni w świecie pełnym niebezpieczeństw.",
  },
};

export default moviesDescriptions;
