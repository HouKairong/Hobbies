import "./Books.css";
import { useState, useRef } from "react";
const Books = () => {
  const [selectedSeries, setSelectedSeries] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedStory, setSelectedStory] = useState(null);
  const seriesRefs = useRef({});
  const bookRefs = useRef({});
  const storyRefs = useRef({});
  const books = {
    Wiedźmin: [
      {
        title: "Ostatnie życzenie",
        description:
          "Zbiór opowiadań wprowadzających w świat Geralta z Rivii – samotnego łowcy potworów, którego los splata się z magią, intrygami i moralnymi dylematami. Każda historia odsłania zarówno brutalność świata, jak i subtelności ludzkiego wyboru.",
        stories: [
          {
            title: "Głos rozsądku",
            description:
              "Opowieść otwierająca zbiór, ukazująca refleksje Geralta nad własnym życiem, przeznaczeniem i miejscem człowieka w świecie pełnym chaosu i potworów.",
          },
          {
            title: "Wiedźmin",
            description:
              "Pierwsza przygoda Geralta, w której bohater staje wobec potwora i moralnych wyborów, pokazując swoją odwagę, spryt i nieprzewidywalną naturę losu.",
          },
          {
            title: "Ziarno prawdy",
            description:
              "Historia tajemniczego człowieka i bestii, która zmusza Geralta do konfrontacji z ludzką pychą i przemocą. Moralne dylematy i granice dobra i zła stają się centralnym tematem.",
          },
          {
            title: "Mniejsze zło",
            description:
              "Opowieść o wyborach, które wymagają stawienia czoła niejednoznacznym decyzjom, gdzie każda decyzja niesie konsekwencje dla świata i własnego sumienia.",
          },
          {
            title: "Kwestia ceny",
            description:
              "Historia ukazująca cenę dokonywanych wyborów i przypadkowych spotkań, w której Geralt mierzy się z konsekwencjami swojej profesji i przeznaczenia.",
          },
          {
            title: "Kraniec świata",
            description:
              "Opowieść o niebezpiecznej wyprawie w odległe zakątki świata, w której bohater musi zmierzyć się z siłami natury, ludzi i własnymi słabościami.",
          },
          {
            title: "Ostatnie życzenie",
            description:
              "Tytułowa historia zbioru, w której Geralt staje przed dylematem moralnym i magicznym, ukazując relacje między losem a odpowiedzialnością człowieka wobec świata i bliskich.",
          },
        ],
      },
      {
        title: "Miecz przeznaczenia",
        description:
          "Zbiór opowiadań rozwijający świat Wiedźmina, ukazujący Geraltowe przygody w kontekście przeznaczenia, politycznych intryg i spotkań z bohaterami, którzy kształtują jego los.",
        stories: [
          {
            title: "Granica możliwości",
            description:
              "Historia badająca granice odwagi i moralności, w której Geralt zmaga się z niebezpieczeństwem oraz wyborem między honorowym działaniem a przetrwaniem.",
          },
          {
            title: "Okruch lodu",
            description:
              "Opowieść o chłodzie ludzkich serc, zdradzie i uczuciach, które splatają się z obowiązkiem Wiedźmina. Miłość, cierpienie i przeznaczenie stają się centralnym motywem.",
          },
          {
            title: "Wieczny ogień",
            description:
              "Historia o starciu magicznych sił i ludzkich ambicji, gdzie Geralt staje wobec złożonych dylematów, w których dobro i zło nie są jednoznaczne.",
          },
          {
            title: "Trochę poświęcenia",
            description:
              "Opowieść o cenie, jaką należy zapłacić za ochronę niewinnych, w której bohater zmaga się z własnym sumieniem i konsekwencjami decyzji innych ludzi.",
          },
          {
            title: "Miecz przeznaczenia",
            description:
              "Tytułowe opowiadanie, w którym temat przeznaczenia osiąga apogeum – Geralt konfrontuje się z własnym losem, spotykając osoby, które na zawsze zmienią jego życie.",
          },
          {
            title: "Coś więcej",
            description:
              "Historia o więziach między ludźmi, miłości i przyjaźni, które przekraczają granice zwykłych relacji, podkreślając moralne i emocjonalne dylematy bohatera.",
          },
        ],
      },
      {
        title: "Krew elfów",
        description:
          "Pierwsza powieść sagi, w której świat polityki i magii wkracza w nową fazę. Geralt chroni Ciri, młodą Dziewczynę Przeznaczenia, a konflikty między królestwami i tajemniczymi siłami kształtują losy wszystkich postaci.",
      },
      {
        title: "Czas pogardy",
        description:
          "Książka ukazująca narastające napięcia w świecie ludzi, elfów i magii. Wojny, polityczne intrygi i zagrożenia dla Ciri zmuszają Geralta do trudnych wyborów i heroicznych działań.",
      },
      {
        title: "Chrzest ognia",
        description:
          "Powieść pełna walki, poświęcenia i lojalności. Geralt przemierza niebezpieczne krainy, by odnaleźć zaginioną Ciri, spotykając sojuszników i wrogów, a świat staje w ogniu konfliktów.",
      },
      {
        title: "Wieża Jaskółki",
        description:
          "Książka skupiająca się na polityce, magii i sieci intryg, które otaczają bohaterów. Geralt i Ciri stają wobec niebezpieczeństw, które testują ich odwagę, mądrość i determinację.",
      },
      {
        title: "Pani Jeziora",
        description:
          "Finałowa powieść sagi, w której wszystkie wątki przeznaczenia, miłości, wojny i magii splatają się w epicką opowieść o końcu pewnej ery i początkach nowej w Westeros i Nilfgaardzie.",
      },
      {
        title: "Sezon Burz",
        description:
          "Powieść uzupełniająca, skupiająca się na wcześniejszych przygodach Geralta. Historia pełna niebezpieczeństw, pojedynków i zagadek kryminalnych, pokazująca jego mistrzostwo w walce i dedukcji.",
      },
      {
        title: "Rozdroże Kruków",
        description:
          "Nowe opowieści z uniwersum Wiedźmina, w których polityka, wojna i magia łączą się w labiryncie decyzji, zdrad i niezwykłych spotkań bohaterów.",
      },
      {
        title: "Droga z której się nie wraca",
        description: "Historia o rodzicach Geralta",
      },
      {
        title: "Coś się kończy, coś się zaczyna",
        description:
          "Alternatywny świat, w którym Geralt dostaje szczęśliwe zakończenie",
      },
    ],
    "Pieśń Lodu i Ognia": [
      {
        title: "Gra o Tron",
        description:
          "Pierwsza książka sagi, wprowadzająca czytelnika w brutalny i skomplikowany świat Westeros. Rodziny szlacheckie, zdrady i polityczne intrygi splatają się w grę o władzę, w której lojalność i ambicja testują granice człowieczeństwa.",
      },
      {
        title: "Starcie Królów",
        description:
          "Kontynuacja, w której Westeros pogrąża się w chaosie wojny domowej. Rycerze, królowie i uzurpatorzy rywalizują o tron, a każdy sojusz, zdrada i decyzja mogą odmienić losy królestwa.",
      },
      {
        title: "Nawałnica Mieczy",
        description:
          "Pełna dramatyzmu opowieść o wojnach, zdradach i mrocznych sekretach. Postacie są wystawione na ekstremalne próby, a losy królestw zmieniają się w wyniku zdrady, odwagi i nieoczekiwanych zwrotów akcji.",
      },
      {
        title: "Uczta dla Wron",
        description:
          "Książka skupiająca się na konsekwencjach wojny, polityce i przetrwaniu w świecie pełnym zdrad. Nowe postacie i rosnące napięcia tworzą obraz Westeros rozdartego konfliktami i ambicjami.",
      },
      {
        title: "Taniec ze Smokami",
        description:
          "Saga osiąga punkt kulminacyjny, w którym losy bohaterów splatają się w zawiłe intrygi. Stare i nowe zagrożenia zbliżają Westeros do katastrofy, a tajemnice smoczej krwi i magii ujawniają swoje znaczenie.",
      },
      {
        title: "Ogień i Krew",
        description:
          "Obszerna kronika dynastii Targaryenów, opisująca ich podboje, konflikty wewnętrzne i panowanie nad Westeros. Historia przesiąknięta pasją, zdradą i tragicznymi decyzjami w cieniu smoczych ognisk.",
      },
      {
        title: "Rycerz Siedmiu Królestw",
        description:
          "Zbiór opowiadań przedstawiających przygody rycerza ser Duncana i jego giermka Egg’a. Ukazuje Westeros sprzed wydarzeń sagi głównej, pełen honoru, walki i rycerskich legend.",
      },
      {
        title: "Świat Lodu i Ognia",
        description:
          "Księga ilustrowana, będąca przewodnikiem po historii Westeros i Essos. Prezentuje rody, bitwy, geograficzne szczegóły i dawne konflikty, pozwalając głębiej zrozumieć świat wykreowany przez Martina.",
      },
      {
        title: "Panowanie Smoka",
        description:
          "Historia Targaryenów od podboju Westeros do czasów wewnętrznych konfliktów dynastii. Książka pełna dramatów, politycznych intryg i tragicznych losów smoczych panów.",
      },
      {
        title: "Księżniczka i Królowa",
        description:
          "Opowieść o wojnie domowej w rodzinie Targaryenów – tańcu śmierci i ognia między rodzeństwem. Historia pełna zdrad, strategii i konsekwencji ambicji królewskich.",
      },
      {
        title: "Książę Łotrzyk",
        description:
          "Saga politycznych manipulacji i walki o władzę. Przedstawia losy ambitnych postaci, zdradę, przebiegłość i napięcie, które definiuje Westeros.",
      },
      {
        title: "Synowie Smoka",
        description:
          "Kontynuacja historii dynastii Targaryenów, w której nowe pokolenia mierzą się z dziedzictwem smoczej krwi, polityką i lojalnością, a historia Westeros splata epickie wydarzenia i dramaty rodzinne.",
      },
    ],
    "Sherlock Holmes": [
      {
        title: "Studium w szkarłacie",
        description:
          "Pierwsza powieść wprowadzająca genialnego detektywa Sherlocka Holmesa i doktora Watsona. Przedstawia ich spotkanie, narodziny partnerstwa i pierwszą zagadkę kryminalną, w której zdrada, tajemnica i skomplikowane intrygi splatają się w niezwykłą opowieść detektywistyczną.",
      },
      {
        title: "Znak czterech",
        description:
          "Opowieść o poszukiwaniu skarbu, zdradzie i zemście. Holmes i Watson stają przed tajemnicą pełną nieoczekiwanych zwrotów, w której przeszłość bohaterów i mroczne sekrety splatają się w jedną pełną napięcia historię.",
      },
      {
        title: "Przygody Sherlocka Holmesa",
        description:
          "Zbiór klasycznych opowiadań ukazujących błyskotliwe dedukcje Holmesa, jego niezwykłą spostrzegawczość i analityczny umysł. Każda historia to odrębna zagadka, w której logika, obserwacja i intuicja prowadzą do rozwiązania tajemnic.",
        stories: [
          {
            title: "Skandal w Bohemii",
            description:
              "Historia, w której Holmes musi stawić czoła przebiegłej kobiecie, której spryt przewyższa nawet jego metody. Opowieść pełna intrygi i subtelnej gry psychologicznej.",
          },
          {
            title: "Związek rudowłosych",
            description:
              "Opowieść o tajemniczej rodzinie, skomplikowanych spadkach i sekretach, które Holmes musi odszyfrować dzięki niezwykłej dedukcji i uwadze na detale.",
          },
          {
            title: "Sprawa tożsamości",
            description:
              "Historia, w której pozornie zwyczajna sprawa prowadzi do odkrycia skomplikowanego oszustwa i zagadki ludzkiej natury. Holmes łączy fakty, by ujawnić prawdę.",
          },
          {
            title: "Tragedia w Boscombe Valley",
            description:
              "Opowieść o morderstwie i rodzinnych konfliktach. Holmes bada ślady, które wydają się sprzeczne z logiką, by ujawnić prawdziwego sprawcę tragedii.",
          },
          {
            title: "Pięć pestek pomarańczy",
            description:
              "Historia, w której tajemnicze wiadomości, symboliczne gesty i zagadki prowadzą Holmesa przez labirynt intryg i niebezpieczeństw.",
          },
          {
            title: "Człowiek z wywiniętą wargą",
            description:
              "Opowieść o brutalnym morderstwie i zagadkowej przeszłości. Holmes musi połączyć elementy pozornie nieistotne, aby odkryć motywy zbrodni.",
          },
          {
            title: "Błękitny Karbunkuł",
            description:
              "Historia szlachetnego klejnotu, który wywołuje pożądanie i zbrodnię. Holmes rozplątuje sieć kłamstw, aby przywrócić sprawiedliwość.",
          },
          {
            title: "Nakrapiana przepaska niesie śmierć",
            description:
              "Tajemnicze morderstwo w środowisku arystokratycznym, w którym każdy gest może być wskazówką, a Holmes odsłania prawdę ukrytą w detalach.",
          },
          {
            title: "Kciuk inżyniera",
            description:
              "Historia, w której matematyka, mechanika i logiczne dedukcje Holmesa pozwalają rozwikłać zagadkę pozornie prostego morderstwa.",
          },
          {
            title: "Nobliwy kawaler",
            description:
              "Opowieść o honorze, zemście i tajemnicach arystokratycznej rodziny, w której Holmes łączy fakty, by ujawnić skrytą prawdę.",
          },
          {
            title: "Diadem z berylami",
            description:
              "Historia klejnotu, który wywołuje serię intryg i zbrodni. Holmes analizuje każdy szczegół, by ocalić honor i bezpieczeństwo niewinnych.",
          },
          {
            title: "Przygoda w Copper Beeches",
            description:
              "Tajemnicza historia dziewczyny z zagadkowego domu. Holmes bada psychologiczne mechanizmy i tajemnice rodziny, odkrywając motywy ukryte za fasadą pozorów.",
          },
        ],
      },
      {
        title: "Wspomnienia Sherlocka Holmesa",
        description:
          "Zbiór opowiadań pokazujących rozwój metod Holmesa i jego mistrzostwo w dedukcji. Każda historia ujawnia unikalną zagadkę i niezwykłe przypadki kryminalne.",
        stories: [
          {
            title: "Srebrny Płomień",
            description:
              "Holmes bada serię tajemniczych morderstw związanych z symbolicznym ogniem.",
          },
          {
            title: "Kartonowe pudełko",
            description:
              "Historia z zagadką niecodziennego znaleziska w pudełku i jego powiązań ze zbrodnią.",
          },
          {
            title: "Żółta twarz",
            description:
              "Holmes staje przed tajemniczą postacią ukrywającą swoją tożsamość i motyw.",
          },
          {
            title: "Urzędnik maklerski",
            description:
              "Zagadkowe zniknięcie urzędnika, które prowadzi do odkrycia kryminalnych machinacji.",
          },
          {
            title: "Gloria Scott",
            description:
              "Historia pełna tajemnic z przeszłości, które wpływają na teraźniejsze wydarzenia.",
          },
          {
            title: "Rytuał Musgrave’ów",
            description:
              "Opowieść o starych rodzinnych sekretach i ukrytych rytuałach, które Holmes musi odkryć.",
          },
          {
            title: "Dziedzice z Reigate",
            description:
              "Holmes bada sprawę związaną z dziedzicami, pieniędzmi i skrytą przestępczością.",
          },
          {
            title: "Garbus",
            description:
              "Historia nietypowego morderstwa i drobnych wskazówek, które prowadzą do rozwiązania.",
          },
          {
            title: "Stały pacjent",
            description:
              "Opowieść o tajemnicach w domu chorego, w których Holmes odkrywa prawdę dzięki dedukcji.",
          },
          {
            title: "Grecki tłumacz",
            description:
              "Historia pełna literackich zagadek i kryminalnych tajemnic związanych z językiem i kulturą.",
          },
          {
            title: "Traktat morski",
            description:
              "Holmes bada serię zagadek związanych z morskimi podróżami i skarbami.",
          },
          {
            title: "Ostatnia zagadka",
            description:
              "Historia prowadząca do dramatycznego finału, w którym geniusz Holmesa zostaje wystawiony na próbę.",
          },
        ],
      },
      {
        title: "Pies Baskerville'ów",
        description:
          "Klasyczna powieść grozy, w której Holmes staje wobec legendy o złowrogim psie. Napięcie, tajemnica i klimat Dartmoor tworzą niezapomnianą detektywistyczną opowieść.",
      },
      {
        title: "Powrót Sherlocka Holmesa",
        description:
          "Zbiór opowiadań po powrocie Holmesa, pełnych zaskakujących zagadek i mistrzowskich dedukcji.",
        stories: [
          {
            title: "Pusty dom",
            description:
              "Holmes powraca, by rozwiązać tajemnicę zaginionego detektywa i jego wrogów.",
          },
          {
            title: "Przedsiębiorca budowlany z Norwood",
            description:
              "Historia pełna intryg finansowych i rodzinnych sekretów.",
          },
          {
            title: "Tańczące sylwetki",
            description:
              "Holmes bada tajemnicę zaginionych osób i niepokojących zdarzeń.",
          },
          {
            title: "Samotna cyklistka",
            description:
              "Zagadkowe zdarzenia wokół podróży samotnej kobiety, w których dedukcja Holmesa prowadzi do rozwiązania.",
          },
          {
            title: "Zniknięcie młodego lorda",
            description:
              "Historia pełna tajemnic, w której Holmes odkrywa zdradę i niebezpieczeństwo.",
          },
          {
            title: "Czarny Piotr",
            description:
              "Zagadkowa sprawa związaną z więźniem, porwaniem i przestępczymi machinacjami.",
          },
          {
            title: "Charles Augustus Milverton",
            description:
              "Holmes stawia czoła bezwzględnemu szantażyście i jego ofiarom.",
          },
          {
            title: "Sześć popiersi Napoleona",
            description:
              "Historia pełna intryg i skradzionych artefaktów w świecie arystokratycznym.",
          },
          {
            title: "Trzej studenci",
            description:
              "Holmes bada tajemniczą sprawę akademicką pełną sekretów i zdrad.",
          },
          {
            title: "Złote binokle",
            description:
              "Historia z tajemnicą złotych okularów i ich powiązaniem z przestępstwem.",
          },
          {
            title: "Zaginiony sportowiec",
            description:
              "Holmes staje przed zagadką zniknięcia znanej postaci sportowej.",
          },
          {
            title: "Abbey Grange",
            description:
              "Historia z przestępstwem w domu arystokratycznym, pełna intryg i dowodów.",
          },
          {
            title: "Druga plama",
            description:
              "Opowieść kryminalna o morderstwie i drobnych śladach prowadzących do rozwiązania.",
          },
        ],
      },
      {
        title: "Dolina trwogi",
        description:
          "Opowieść pełna napięcia, w której Holmes stawia czoła niezwykle trudnej sprawie kryminalnej, wciągając czytelnika w labirynt mrocznych tajemnic.",
      },
      {
        title: "Pożegnalny ukłon",
        description:
          "Zbiór ostatnich opowiadań, w których Holmes mierzy się z różnorodnymi zagadkami, pokazując mistrzostwo dedukcji i analizę ludzkiej natury.",
        stories: [
          {
            title: "Tajemnica Wisteria Lodge",
            description:
              "Historia tajemniczej willi, rodzinnych sekretów i mrocznych motywów zbrodni.",
          },
          {
            title: "Kartonowe pudełko",
            description:
              "Zagadkowe odkrycie w pudełku prowadzi Holmesa do rozwiązania przestępstwa.",
          },
          {
            title: "Sprawa Czerwonego Kręgu",
            description:
              "Holmes ściga tajemniczą organizację przestępczą, rozwiązując złożoną zagadkę.",
          },
          {
            title: "Plany Bruce-Partington",
            description:
              "Historia szpiegowska, w której Holmes demaskuje zdradę i kradzież ważnych dokumentów.",
          },
          {
            title: "Umierający detektyw",
            description:
              "Opowieść o dramatycznych wydarzeniach i końcowej próbie intelektu Holmesa.",
          },
          {
            title: "Zniknięcie Lady Frances Carfax",
            description:
              "Holmes bada zagadkowe zniknięcie szlachcianki i odkrywa kryminalne powiązania.",
          },
          {
            title: "Sprawa diabelskiej stopy",
            description:
              "Historia pełna tajemniczych śladów, mistycyzmu i skomplikowanych przestępstw.",
          },
          {
            title: "Pożegnalny ukłon",
            description:
              "Zbiór zamykający serię, w którym Holmes rozwiązuje ostatnie tajemnice, demonstrując swoje mistrzostwo.",
          },
        ],
      },
      {
        title: "Sprawy Sherlocka Holmesa",
        description:
          "Zbiór mniej znanych, lecz fascynujących historii, które pokazują wszechstronność Holmesa i jego nieprzeciętne zdolności dedukcyjne.",
        stories: [
          {
            title: "Znamienity klient",
            description:
              "Holmes staje przed zagadką nietypowego klienta, w której prawda ukryta jest w szczegółach.",
          },
          {
            title: "Żołnierz o bladym obliczu",
            description:
              "Historia wojskowa i kryminalna, w której Holmes łączy ślady przeszłości z teraźniejszością.",
          },
          {
            title: "Klejnot z kolekcji kardynała Mazariniego",
            description:
              "Zagadkowa sprawa kradzieży cennego klejnotu, w której Holmes wykazuje mistrzowskie zdolności obserwacji.",
          },
          {
            title: "Dom pod trzema daszkami",
            description:
              "Opowieść o morderstwie w tajemniczym domu, gdzie każdy szczegół prowadzi do rozwiązania.",
          },
          {
            title: "Wampirzyca z hrabstwa Sussex",
            description:
              "Historia pełna przesądów, tajemniczych śladów i intrygi, które Holmes demaskuje.",
          },
          {
            title: "O trzech panach Garrideb",
            description:
              "Zagadkowa sprawa dziedziców i fałszywych tożsamości, rozwiązana przez Holmesa.",
          },
          {
            title: "Zabójstwo przy moście",
            description:
              "Historia kryminalna o morderstwie w miejskim krajobrazie, w której Holmes łączy fakty i dedukcje.",
          },
          {
            title: "Przypadek szalonego profesora",
            description:
              "Historia naukowych eksperymentów, które prowadzą do zbrodni, wymagającej dedukcji Holmesa.",
          },
          {
            title: "Lwia grzywa",
            description:
              "Zagadkowe morderstwo, w którym kluczowe są pozornie nieistotne detale.",
          },
          {
            title: "Tajemnicza lokatorka",
            description:
              "Holmes bada zagadkową postać mieszkającą w tajemniczym domu, odsłaniając sekrety i kłamstwa.",
          },
          {
            title: "Stary dwór Shoscombe",
            description:
              "Historia o tajemnicach rodzinnych, finansach i skrytobójstwach w rezydencji arystokratycznej.",
          },
          {
            title: "Emerytowany sprzedawca farb",
            description:
              "Zagadkowa śmierć i ślady prowadzą Holmesa przez labirynt intryg i kłamstw.",
          },
        ],
      },
    ],
    "Książki o Chinach": [
      {
        title: "Chiny bez makijażu",
        description:
          "Reportaż Marcina Jacoby pokazujący współczesne życie w Chinach z perspektywy zwykłych ludzi. Autor ujawnia kontrasty między nowoczesnością a tradycją, bogactwem a biedą, a także wyzwania społeczne i polityczne, które kształtują codzienność mieszkańców.",
      },
      {
        title: "Czerwony cesarz: Xi Jinping i jego Nowe Chiny",
        description:
          "Książka autorstwa Michaela Sheridana. Analiza politycznej drogi Xi Jinpinga i jego wizji nowoczesnych Chin. Książka ukazuje metody sprawowania władzy, reformy gospodarcze, kontrolę społeczną oraz wpływ lidera na pozycję Chin w świecie.",
      },
      {
        title: "Taoizm: Wprowadzenie",
        description:
          "Przewodnik po filozofii taoistycznej, jej historii i kluczowych tekstach, stworzony przez Livię Kohn. Wyjaśnia, jak taoizm kształtuje myślenie Chińczyków o naturze, harmonii, życiu duchowym i relacji człowieka z wszechświatem.",
      },
      {
        title: "Baśnie chińskie",
        description:
          "Książka autorstwa Wilhelma Richarda. Zbiór klasycznych chińskich opowieści i legend, pełnych mądrości, humoru i symboliki. Książka wprowadza w świat bogów, duchów, zwierząt i bohaterów, ukazując tradycyjne wartości i moralne nauki.",
      },
      {
        title: "Tajwan: Herbatka na beczce prochu",
        description:
          "Reportaż Marcina Jacoby o współczesnym Tajwanie – jego polityce, kulturze i historii. Autor opisuje napięcia między Chinami a Tajwanem, życie codzienne mieszkańców i wyzwania geopolityczne tej wyspy.",
      },
      {
        title:
          "Japonia, Chiny i Korea: O ludziach skłóconych na śmierć i życie",
        description:
          "Książka autorstwa Michaela Bootha. Analiza historycznych i współczesnych relacji między trzema państwami Azji Wschodniej. Książka ukazuje konflikty, współpracę i napięcia kulturowe oraz polityczne, które ukształtowały losy regionu.",
      },
      {
        title: "Chiny: Przewodnik po herosach, smokach i świętych rzekach",
        description:
          "Barwny przewodnik po chińskiej mitologii, historii i kulturze. Autor (Tao Tao Liu) przybliża legendarne postacie, symbole i miejsca, które kształtowały wyobraźnię Chińczyków przez wieki.",
      },
      {
        title: "Chiny: Portret cywilizacji i narodu",
        description:
          "Kompleksowy obraz Chin stworzony przez Michaela Wooda – od starożytności po współczesność. Książka omawia społeczeństwo, politykę, kulturę, filozofię i gospodarkę, pokazując wielowarstwową tożsamość chińskiego narodu.",
      },
      {
        title:
          "Cesarzowa wdowa Cixi: Konkubina która stworzyła współczesne Chiny",
        description:
          "Biografia wpływowej cesarzowej Cixi, która sprawowała władzę w Chinach w XIX i XX wieku. Książka, której autorką jest Jung Chang ukazuje jej polityczne manewry, reformy i znaczenie w procesie modernizacji państwa.",
      },
      {
        title: "Historia Kościoła w Chinach",
        description:
          "Historia chrześcijaństwa w Chinach od jego początków po współczesność. Książka autorstwa Ojca Jana Kosiora SJ opisuje misje, prześladowania, wpływ religii na społeczeństwo i dialog między wiarą a kulturą chińską.",
      },
      {
        title: "Daodejing",
        description:
          "Klasyczny tekst taoistyczny autorstwa Laozi, prezentujący filozofię życia zgodnego z Tao. Książka oferuje wgląd w ideę harmonii, prostoty, naturalnego porządku i duchowego rozwoju człowieka.",
      },
      {
        title: "Ocalała z chińskiego gułagu",
        description:
          "Wstrząsająca autobiografia o doświadczeniach życia w chińskich obozach pracy i represjach politycznych. Książka napisana przez Gulbahara Haitiwaji i Rozenn Morgat ukazuje cierpienie jednostki, przetrwanie, odporność psychiczną oraz znaczenie pamięci historycznej.",
      },
      {
        title: "Assassin's Creed Miecz Shao Jun",
        description:
          "Seria mang autorstwa Minojiego Kuraty osadzona w Chinach epoki Ming, opowiadająca przygody Shao Jun, mistrzyni Asasynów.",
        stories: [
          {
            title: "Tom 1",
            description:
              "Pierwsze kroki Shao Jun w świecie Asasynów. Trening, pierwsze misje i odkrywanie tajemnic swojego dziedzictwa.",
          },
          {
            title: "Tom 2",
            description:
              "Rozwój umiejętności Shao Jun i konfrontacje z przeciwnikami. Książka zgłębia historię jej wrogów i tajemnicze spiski w Chinach.",
          },
          {
            title: "Tom 3",
            description:
              "Shao Jun mierzy się z niebezpieczeństwami i zdradą. Tom ukazuje polityczne intrygi i duchową transformację bohaterki.",
          },
          {
            title: "Tom 4",
            description:
              "Kulminacja przygód Shao Jun – wielka bitwa, rozstrzygnięcie konfliktów i pełne uświadomienie roli Asasynów w historii Chin.",
          },
        ],
      },
    ],
    "Boska Komedia": [
      {
        title: "Piekło",
        description:
          "Dante rozpoczyna swoją podróż w mrocznym lesie, a następnie wkracza do Piekła – miejsca cierpienia i kary dla dusz grzesznych. Każdy krąg Piekła odpowiada konkretnym rodzajom grzechu, ukazując konsekwencje moralne złych czynów. To miejsce bólu, rozpaczy, lecz i refleksji nad naturą ludzkiej winy, sprawiedliwości oraz znaczenia wolnej woli.",
      },
      {
        title: "Czyściec",
        description:
          "W Czyśćcu Dante spotyka dusze, które muszą oczyścić się z niedoskonałości i grzechów, zanim osiągną pełnię dobra. To przestrzeń pokuty, nadziei i transformacji duchowej, gdzie cierpienie jest środkiem do oczyszczenia i zrozumienia własnych błędów. Pośrednie miejsce między Piekłem a Rajem, pokazujące, że droga do zbawienia wymaga wysiłku i introspekcji.",
      },
      {
        title: "Raj",
        description:
          "Raj to triumf miłości, boskości i harmonii wszechświata. Dante, prowadzony przez Beatrycze, doświadcza szczęścia dusz, które osiągnęły doskonałość moralną i duchową. To miejsce światła, wiedzy i pełnego zrozumienia boskiego planu, gdzie człowiek odkrywa sens życia, sprawiedliwości i ostatecznej jedności ze Stwórcą.",
      },
    ],
    "Mitologia Nordycka": [
      {
        title: "Wstęp",
        description:
          "Neil Gaiman wprowadza czytelnika w świat nordyckich mitów, tłumacząc, dlaczego te historie o bogach, olbrzymach i ludzkich losach są wciąż fascynujące i aktualne.",
      },
      {
        title: "Gracze",
        description:
          "Przedstawienie głównych postaci mitologii nordyckiej – Odyna, Thora, Lokiego i innych – oraz ich roli w wielkim teatrze losów bogów i ludzi.",
      },
      {
        title: "Przed początkiem, i po",
        description:
          "Opis pierwotnej pustki Ginnungagap, powstania świata i pierwszych istot, które kształtowały nordycką kosmologię.",
      },
      {
        title: "Yggdrasill i dziewięć światów",
        description:
          "Opowieść o kosmicznym drzewie Yggdrasill, które łączy wszystkie światy: Asgard, Midgard, Jotunheim i pozostałe, ukazując wzajemne powiązania bogów, ludzi i olbrzymów.",
      },
      {
        title: "Głowa Mimira i oko Odyna",
        description:
          "Historia poświęcenia Odyna dla mądrości – stracił jedno oko, aby zdobyć wiedzę, oraz znaczenie głowy Mimira jako źródła wiedzy i przewodnictwa.",
      },
      {
        title: "Skarby bogów",
        description:
          "Opowieść o magicznych artefaktach Asgardu – młot Thora, pierścień Draupnira, złote włosy Freji – i ich roli w mitologii oraz konfliktach bogów.",
      },
      {
        title: "Mistrz budowniczy",
        description:
          "Historia budowniczego, który miał wznosić wielkie mury Asgardu, oraz zdradziecka interwencja Lokiego, pokazująca spryt i podstęp w mitologii.",
      },
      {
        title: "Dzieci Lokiego",
        description:
          "Przedstawienie potężnych i niebezpiecznych dzieci Lokiego: Fenrira, Jormungandra i Hel, oraz ich roli w przepowiedniach Ragnaröku.",
      },
      {
        title: "Niezwykły ślub Frei",
        description:
          "Opowieść o miłości, poświęceniu i intrygach związanych ze ślubem bogini Freji, ukazująca kontrast między uczuciami a obowiązkami bogów.",
      },
      {
        title: "Miód poetów",
        description:
          "Historia magicznego miodu, który daje dar poezji i mądrości, oraz jego kradzieży i konsekwencji dla bogów i ludzi.",
      },
      {
        title: "Wyprawa Thora do krainy olbrzymów",
        description:
          "Relacja z podróży Thora, pełnej niebezpieczeństw i wyzwań, do Jotunheimu, krainy olbrzymów, gdzie jego siła i spryt są wystawione na próbę.",
      },
      {
        title: "Jabłka nieśmiertelności",
        description:
          "Opowieść o magicznych jabłkach Iduny, które utrzymują młodość bogów, i o próbie kradzieży, która mogła zmienić losy Asgardu.",
      },
      {
        title: "Historia Gerd i Freja",
        description:
          "Historia namiętnej i pełnej symboliki miłości Freji do olbrzyma Gerda, ukazująca, jak uczucia bogów wpływają na świat śmiertelników.",
      },
      {
        title: "Wyprawa rybacka Hymira i Thora",
        description:
          "Opowieść o wspólnej przygodzie Thora i Hymira, podczas której zmierzą się z ogromnym wężem morskim Jormungandrem, pełna humoru i heroizmu.",
      },
      {
        title: "Śmierć Baldera",
        description:
          "Tragiczna historia najpiękniejszego i najmilszego z bogów, Baldera, której śmierć zapoczątkowuje serię wydarzeń prowadzących do Ragnaröku.",
      },
      {
        title: "Ostatnie dni Lokiego",
        description:
          "Ukazanie, jak podstęp Lokiego prowadzi do chaosu, zdrad i konfliktów, które przyspieszają nadchodzące ostateczne wydarzenia w mitologii.",
      },
      {
        title: "Ragnarök: ostateczne przeznaczenie bogów",
        description:
          "Epicka wizja końca świata: wojny bogów z olbrzymami, śmierci wielu postaci i odrodzenia świata, symbolizująca cykl zniszczenia i odnowy w nordyckiej mitologii.",
      },
    ],
    "Obrona Sokratesa": [],
  };
  const seriesWorlds = {
    Wiedźmin: "Wizard City , Grizzleheim",
    "Pieśń Lodu i Ognia": "Krokotopia, Grizzleheim",
    "Sherlock Holmes": "Marleybone",
    "Książki o Chinach": "Mooshu",
    "Boska Komedia": "Dragonspyre",
    "Mitologia Nordycka": "Grizzleheim",
    "Obrona Sokratesa": "Aquila",
  };
  const seriesDescriptions = {
    Wiedźmin: {
      world: "Wizard City, Grizzleheim",
      protagonist: "Geralt z Rivii, Ciri",
      antagonist:
        "Vilgefortz z Roggeveen, Leo Bonhart, Emhyr var Emreis, potwory",
      why: "Wiedźmin ma adaptacje w postaci gier (Wiedźmin 1, 2, 3, Pożegnanie Białego Wilka) i seriali (Wiedźmin, Wiedźmin: Rodowód Krwi). Oprócz tego wszechobecna magia kojarzy się z Wizard City, a wyspy Skellige - na których toczy się część sagi - z Grizzleheim",
      description:
        "Saga o Wiedźminie, stworzona przez Andrzeja Sapkowskiego, to mroczne fantasy osadzone w świecie pełnym politycznych intryg, rasowych napięć i moralnej niejednoznaczności. Geralt z Rivii – mutant i zawodowy zabójca potworów – przemierza Kontynent, wykonując zlecenia, które rzadko okazują się tak proste, jak się wydają. W centrum opowieści znajduje się także Ciri, Dziecko Niespodzianka, obdarzona potężną mocą i będąca pionkiem w grze cesarzy, czarodziejów i tajemniczych sił. Wiedźmin to historia o przeznaczeniu, wolnej woli, odpowiedzialności i cenie neutralności w świecie, w którym „mniejsze zło” często bywa jedynym wyborem.",
    },
    "Pieśń Lodu i Ognia": {
      world: "Krokotopia, Grizzleheim",
      protagonist:
        "M.in.: Jon Snow, Daenerys Targaryen, Tyrion Lannister, Arya Stark, Bran Stark",
      antagonist:
        "M.in.: Cersei Lannister, Joffrey Baratheon, Ramsay Bolton, Petyr Baelish, Nocny Król",
      why: "Pieśń Lodu i Ognia ma adaptacje w postaci seriali (Gra o Tron, Ród Smoka, Rycerz Siedmiu Królestw) i gier (Gra o Tron: RPG oraz Gra o Tron od studia Telltale). Oprócz tego podróż Daenerys przez Essos kojarzy się z Krokotopią, a Żelazne Wyspy i okolice Muru - w których toczy się część opowieści - z Grizzleheim",
      description:
        "„Pieśń Lodu i Ognia” George’a R.R. Martina to epicka saga fantasy osadzona w brutalnym, realistycznym świecie, gdzie władza ma wyższą cenę niż życie, a honor rzadko bywa nagradzany. Historia splata losy wielu rodów walczących o Żelazny Tron, podczas gdy na północy budzi się pradawne zagrożenie przekraczające ludzkie konflikty. Intrygi polityczne, zdrady, wojny domowe i mistyczne moce przeplatają się z osobistymi dramatami bohaterów, którzy dojrzewają w świecie bez prostych podziałów na dobro i zło. To opowieść o ambicji, przeznaczeniu, naturze władzy oraz kruchości cywilizacji wobec nadchodzącej zimy.",
    },
    "Sherlock Holmes": {
      world: "Marleybone",
      protagonist: "Sherlock Holmes, John Watson",
      antagonist: "Profesor Moriarty, inni przestępcy",
      why: "Sherlock Holmes ma adaptacje w postaci wielu gier (m.in. Sherlock Holmes: Chapter One, Sherlock Holmes: The Awakened) i seriali (m.in Sherlock). Oprócz tego wiktoriański Londyn bardzo przypomina Marleybone, w którym jest nawet odpowiednik Sherlocka Holmesa - Sherlock Bones",
      description:
        "„Sherlock Holmes” Arthura Conana Doyle’a to cykl opowiadań i powieści detektywistycznych osadzonych w wiktoriańskim Londynie, gdzie logika i dedukcja stają się najpotężniejszą bronią. Sherlock Holmes – ekscentryczny geniusz obserwacji – wraz ze swoim wiernym przyjacielem i kronikarzem Johnem Watsonem rozwiązuje zagadki, które dla innych wydają się niemożliwe do wyjaśnienia. Od zbrodni w zamkniętych pokojach po międzynarodowe spiski, każda sprawa jest pojedynkiem intelektów, czasami prowadzącym do starcia z jego największym przeciwnikiem – profesorem Moriartym. Seria to nie tylko klasyka kryminału, ale też opowieść o sile rozumu, cienkiej granicy między genialnością a obsesją oraz o przyjaźni, która równoważy chłodny racjonalizm detektywa.",
    },
    "Książki o Chinach": {
      world: "Mooshu",
      protagonist: "Chińczycy",
      antagonist: "Mao Zedong, Xi Jinping",
      why: "Interesuję się Chinami. Chciałam zagłębić się w różne aspekty Chin, które są widoczne w tych książkach. Oprócz tego Chiny (szczególnie Starożytne) przypominają Mooshu.",
      description:
        "Zbiór książek o Chinach to wielowymiarowa podróż przez tysiące lat historii, filozofii, polityki i kultury Państwa Środka. Od klasycznej myśli taoistycznej zawartej w „Daodejing”, przez baśnie i mitologię budującą duchowy fundament cywilizacji, aż po dramatyczne relacje z czasów Mao Zedonga i współczesnych rządów Xi Jinpinga – lektury te ukazują Chiny jako przestrzeń napięcia między tradycją a nowoczesnością. To opowieść o imperium, które wielokrotnie upadało i odradzało się w nowej formie; o społeczeństwie balansującym między kolektywizmem a indywidualnym doświadczeniem; o duchowości, która współistnieje z bezwzględną realpolitik. Zestawienie reportaży, biografii, analiz historycznych i tekstów filozoficznych pozwala spojrzeć na Chiny zarówno z perspektywy elit władzy, jak i zwykłych ludzi, odsłaniając złożoność kraju, który jednocześnie fascynuje, przeraża i inspiruje.",
    },
    "Boska Komedia": {
      world: "Dragonspyre",
      protagonist: "Dante Alighieri",
      antagonist: "Lucyfer, demony",
      why: "Boska Komedia zdefiniowała piekło które widzimy w grach (np. Dante's Inferno, Devil May Cry, TES IV Oblivion), czy serialach (np. Nie z tego świata, Chilling Adventures of Sabrina, Hazbin Hotel). Oprócz tego pełne cierpienia Piekło i Czyściec przypominają Dragonspyre, a Niebo - Dragonspyre przed upadkiem. Jest to również książka filozoficzna, a filozofia mnie bardzo interesuje",
      description:
        "„Boska Komedia” Dantego Alighieri to monumentalny poemat filozoficzno-teologiczny opisujący wędrówkę autora przez Piekło, Czyściec i Raj. Prowadzony przez Wergiliusza, a następnie przez Beatrycze, Dante przemierza kolejne kręgi zaświatów, gdzie grzech, kara i łaska układają się w doskonale uporządkowany moralny kosmos. Utwór łączy średniowieczną teologię z refleksją nad sprawiedliwością, wolną wolą i naturą dobra, tworząc wizję wszechświata rządzonego rozumem i boskim ładem. To nie tylko literacka podróż przez życie po śmierci, ale także głęboka medytacja nad ludzką odpowiedzialnością, polityką, miłością i ostatecznym sensem istnienia.",
    },
    "Obrona Sokratesa": {
      world: "Aquila",
      protagonist: "Sokrates",
      antagonist: "Meletos, Anytos i Likón",
      why: "Filozofia mnie interesuje, więc chęć spojrzenia na proces, który skazał na śmierć największego filozofa w dziejach wydaje się czymś logicznym. Oprócz tego Grecja z czasów Sokratesa przypomina Aquilę.",
      description:
        "„Obrona Sokratesa” Platona to zapis mowy filozofa podczas procesu, który zakończył się jego skazaniem na śmierć. Sokrates staje przed sądem ateńskim, broniąc swojego życia i filozoficznej misji – pytania, dociekania i poszukiwania prawdy ponad popularnością i konwenansami społecznymi. Utwór pokazuje nie tylko dramat jednostki wobec władzy i opinii publicznej, ale też filozoficzne fundamenty etyki, cnoty i odpowiedzialności. To lekcja odwagi intelektu, konsekwencji myśli i wartości krytycznego myślenia, które pozostają aktualne mimo upływu wieków.",
    },
    "Mitologia Nordycka": {
      world: "Grizzleheim",
      protagonist: "Odyn i Thor",
      antagonist: "Loki, olbrzymy",
      why: "Mitologia nordycka to fundament kultury i wierzeń skandynawskich, które możemy oglądać w grach (m.in. Assassin's Creed: Valhalla, God of War, Valheim) i serialach (m.in. Wikingowie, Ragnarok). Oprócz tego nordyckie sagi o bogach przypominają Grizzleheim",
      description:
        "Mitologia nordycka to opowieść o bogach, bohaterach i olbrzymach, gdzie losy całych światów zależą od odwagi, mądrości i zdrad. Odyn – wszechwiedzący władca bogów – oraz jego syn Thor stają w obronie Asgardu przed chaosem, podczas gdy Loki, mistrz podstępu, sieje zamęt i nieprzewidywalność. Sagi pełne są walk, zdrad, przepowiedni o Ragnaroku i heroicznych czynów, które kształtują moralność i tożsamość nordyckiego świata. To zarówno epicka mitologia, jak i przewodnik po wartościach, sile honoru i cenie odwagi w świecie, gdzie lód i ogień rywalizują o panowanie nad wszechświatem.",
    },
  };
  const toggleSeries = (series) => {
    setSelectedSeries(selectedSeries === series ? null : series);
    setSelectedBook(null);
    if (!seriesRefs.current[series]) return;
    seriesRefs.current[series].scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const toggleBook = (book) => {
    const isSameBook = selectedBook?.title === book.title;
    setSelectedBook(isSameBook ? null : book);
    setSelectedStory(null); // <--- dodaj to
    if (!isSameBook && bookRefs.current[book.title]) {
      setTimeout(() => {
        bookRefs.current[book.title].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 50);
    }
  };
  const toggleStory = (story) => {
    const isSameStory = selectedStory?.title === story.title;
    setSelectedStory(isSameStory ? null : story);
    if (!isSameStory && storyRefs.current[story.title]) {
      setTimeout(() => {
        storyRefs.current[story.title].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 50);
    }
  };
  return (
    <div className="books-wrapper">
      <div className="books-container">
        <h2 className="books-title">Książki</h2>
        <ul className="books-list">
          {Object.keys(books).map((series) => (
            <li
              key={series}
              className="books-series-item"
              onClick={() => toggleSeries(series)}
            >
              {series}
              <span className="books-world">({seriesWorlds[series]})</span>
            </li>
          ))}
        </ul>
        {Object.keys(books).map((series) => (
          <div
            key={series}
            ref={(el) => (seriesRefs.current[series] = el)}
            className="books-series"
          >
            {selectedSeries === series && (
              <>
                <h3 className="books-series-title">{series}</h3>{" "}
                {seriesDescriptions[series] && (
                  <div className="books-description">
                    <p>
                      <strong>Do jakiego świata nawiązuje: </strong>
                      {seriesDescriptions[series].world}
                    </p>
                    <p>
                      <strong>Główni Protagoniści: </strong>
                      {seriesDescriptions[series].protagonist}
                    </p>
                    <p>
                      <strong>Główni Antagoniści: </strong>
                      {seriesDescriptions[series].antagonist}
                    </p>
                    <p>
                      <strong>Dlaczego tu jest: </strong>
                      {seriesDescriptions[series].why}
                    </p>
                    <p>
                      <strong>Opis: </strong>
                      {seriesDescriptions[series].description}
                    </p>
                  </div>
                )}
                <ul className="books-item-list">
                  {books[series].map((book) => (
                    <li
                      key={book.title}
                      className="books-item"
                      ref={(el) => (bookRefs.current[book.title] = el)}
                      onClick={() => toggleBook(book)}
                    >
                      <span className="books-title-item">{book.title}</span>
                    </li>
                  ))}
                </ul>
                {selectedBook && selectedSeries === series && (
                  <div className="books-book-description">
                    <h4>{selectedBook.title}</h4>
                    <p>{selectedBook.description}</p>
                    {selectedBook.stories && (
                      <ul className="books-sublist">
                        {selectedBook.stories.map((story) => (
                          <li
                            key={story.title}
                            className="books-subitem"
                            ref={(el) => (storyRefs.current[story.title] = el)}
                            onClick={() => toggleStory(story)}
                          >
                            {story.title}
                          </li>
                        ))}
                      </ul>
                    )}
                    {/* Tutaj pokazujemy opis klikniętego subitemu */}
                    {selectedStory &&
                      selectedBook.stories?.some(
                        (s) => s.title === selectedStory.title,
                      ) && (
                        <div className="books-subitem-description">
                          <h5>{selectedStory.title}</h5>
                          <p>{selectedStory.description}</p>
                        </div>
                      )}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Books;
