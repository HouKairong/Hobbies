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
          "Pierwsza książka sagi o Geralcie z Rivii, pełna krótkich opowiadań wprowadzających w świat wiedźminów.",
        stories: [
          {
            title: "Głos rozsądku",
            description: "Opis historii Głos rozsądku...",
          },
          { title: "Wiedźmin", description: "Opis historii Wiedźmin..." },
          {
            title: "Ziarno prawdy",
            description: "Opis historii Ziarno prawdy...",
          },
          {
            title: "Mniejsze zło",
            description: "Opis historii Mniejsze zło...",
          },
          {
            title: "Kwestia ceny",
            description: "Opis historii Kwestia ceny...",
          },
          {
            title: "Kraniec świata",
            description: "Opis historii Kraniec świata...",
          },
          {
            title: "Ostatnie życzenie",
            description: "Opis historii Ostatnie życzenie...",
          },
        ],
      },
      {
        title: "Miecz przeznaczenia",
        description:
          "Zbiór opowiadań o przygodach Geralta i jego relacji z Ciri.",
        stories: [
          {
            title: "Granica możliwości",
            description: "Opis historii Granica możliwości...",
          },
          { title: "Okruch lodu", description: "Opis historii Okruch lodu..." },
          {
            title: "Wieczny ogień",
            description: "Opis historii Wieczny ogień...",
          },
          {
            title: "Trochę poświęcenia",
            description: "Opis historii Trochę poświęcenia...",
          },
          {
            title: "Miecz przeznaczenia",
            description: "Opis historii Miecz przeznaczenia...",
          },
          { title: "Coś więcej", description: "Opis historii Coś więcej..." },
        ],
      },
      {
        title: "Krew elfów",
        description:
          "Pierwsza powieść główna sagi, w której wątek Ciri nabiera tempa.",
      },
      {
        title: "Czas pogardy",
        description:
          "Kontynuacja sagi, w której polityka i magia stają się coraz ważniejsze.",
      },
      {
        title: "Chrzest ognia",
        description:
          "Geralt wyrusza na nowe przygody, polityczne napięcia narastają.",
      },
      {
        title: "Wieża Jaskółki",
        description:
          "Ciri odkrywa swoje przeznaczenie w świecie pełnym konfliktów.",
      },
      {
        title: "Pani Jeziora",
        description:
          "Kulminacja sagi – losy Geralta i Ciri splatają się w dramatycznym finale.",
      },
      {
        title: "Sezon Burz",
        description:
          "Dodatkowa opowieść o przygodach Geralta, niezależna od głównej sagi.",
      },
      {
        title: "Rozdroże Kruków",
        description:
          "Historie osadzone w uniwersum Wiedźmina, poszerzające świat i postacie.",
      },
      {
        title: "Droga z której się nie wraca",
        description:
          "Nowe opowieści w świecie Wiedźmina, ukazujące konsekwencje wyborów bohaterów.",
      },
      {
        title: "Coś się kończy, coś się zaczyna",
        description:
          "Zbiór opowiadań kończących pewien etap w uniwersum Wiedźmina.",
      },
    ],
    "Pieśń Lodu i Ognia": [
      {
        title: "Gra o Tron",
        description: "Początek epickiej sagi w Westeros.",
      },
      {
        title: "Starcie Królów",
        description: "Walki o władzę i zdrady w kolejnych królestwach.",
      },
      {
        title: "Nawałnica Mieczy",
        description: "Rozbudowane intrygi i wojny w Westeros.",
      },
      {
        title: "Uczta dla Wron",
        description: "Polityczne zagrywki i zdrady bohaterów.",
      },
      {
        title: "Taniec ze Smokami",
        description: "Magia, wojna i przeznaczenie bohaterów.",
      },
      { title: "Ogień i Krew", description: "Historia dynastii Targaryenów." },
      {
        title: "Rycerz Siedmiu Królestw",
        description: "Prequel z przygodami bohaterów Westeros.",
      },
      {
        title: "Świat Lodu i Ognia",
        description: "Encyklopedia świata Westeros i Essos.",
      },
      {
        title: "Panowanie Smoka",
        description: "Historia Targaryenów i ich panowania.",
      },
      {
        title: "Księżniczka i Królowa",
        description: "Wojny domowe Targaryenów.",
      },
      {
        title: "Książę Łotrzyk",
        description: "Opowieści o buntach i intrygach w Westeros.",
      },
      {
        title: "Synowie Smoka",
        description: "Historia potomków dynastii Targaryen.",
      },
    ],
    "Sherlock Holmes": [
      {
        title: "Studium w szkarłacie",
        description:
          "Pierwsza powieść o Sherlocku Holmesie i doktorze Watsonie, przedstawiająca ich spotkanie i pierwszą wspólną sprawę.",
      },
      {
        title: "Znak czterech",
        description:
          "Opowieść o zagadce skarbu i zdradzie, w której Holmes i Watson rozwiązują skomplikowaną intrygę.",
      },
      {
        title: "Przygody Sherlocka Holmesa",
        description:
          "Zbiór klasycznych opowiadań detektywistycznych, pokazujących genialne dedukcje Holmesa.",
        stories: [
          {
            title: "Skandal w Bohemii",
            description: "Opis historii Skandal w Bohemii...",
          },
          {
            title: "Związek rudowłosych",
            description: "Opis historii Związek rudowłosych...",
          },
          {
            title: "Sprawa tożsamości",
            description: "Opis historii Sprawa tożsamości...",
          },
          {
            title: "Tragedia w Boscombe Valley",
            description: "Opis historii Tragedia w Boscombe Valley...",
          },
          {
            title: "Pięć pestek pomarańczy",
            description: "Opis historii Pięć pestek pomarańczy...",
          },
          {
            title: "Człowiek z wywiniętą wargą",
            description: "Opis historii Człowiek z wywiniętą wargą...",
          },
          {
            title: "Błękitny Karbunkuł",
            description: "Opis historii Błękitny Karbunkuł...",
          },
          {
            title: "Nakrapiana przepaska niesie śmierć",
            description: "Opis historii Nakrapiana przepaska niesie śmierć...",
          },
          {
            title: "Kciuk inżyniera",
            description: "Opis historii Kciuk inżyniera...",
          },
          {
            title: "Nobliwy kawaler",
            description: "Opis historii Nobliwy kawaler...",
          },
          {
            title: "Diadem z berylami",
            description: "Opis historii Diadem z berylami...",
          },
          {
            title: "Przygoda w Copper Beeches",
            description: "Opis historii Przygoda w Copper Beeches...",
          },
        ],
      },
      {
        title: "Wspomnienia Sherlocka Holmesa",
        description:
          "Kolejny zbiór opowiadań, w którym Holmes rozwija swoje metody detektywistyczne i rozwiązuje różnorodne zagadki.",
        stories: [
          {
            title: "Srebrny Płomień",
            description: "Opis historii Srebrny Płomień...",
          },
          {
            title: "Kartonowe pudełko",
            description: "Opis historii Kartonowe pudełko...",
          },
          { title: "Żółta twarz", description: "Opis historii Żółta twarz..." },
          {
            title: "Urzędnik maklerski",
            description: "Opis historii Urzędnik maklerski...",
          },
          {
            title: "Gloria Scott",
            description: "Opis historii Gloria Scott...",
          },
          {
            title: "Rytuał Musgrave’ów",
            description: "Opis historii Rytuał Musgrave’ów...",
          },
          {
            title: "Dziedzice z Reigate",
            description: "Opis historii Dziedzice z Reigate...",
          },
          { title: "Garbus", description: "Opis historii Garbus..." },
          {
            title: "Stały pacjent",
            description: "Opis historii Stały pacjent...",
          },
          {
            title: "Grecki tłumacz",
            description: "Opis historii Grecki tłumacz...",
          },
          {
            title: "Traktat morski",
            description: "Opis historii Traktat morski...",
          },
          {
            title: "Ostatnia zagadka",
            description: "Opis historii Ostatnia zagadka...",
          },
        ],
      },
      {
        title: "Pies Baskerville'ów",
        description:
          "Klasyczna powieść o złowrogim psie z Dartmoor, pełna napięcia i atmosfery grozy.",
      },
      {
        title: "Powrót Sherlocka Holmesa",
        description:
          "Zbiór opowiadań po powrocie Holmesa, pełnych zaskakujących zagadek i mistrzowskich dedukcji.",
        stories: [
          { title: "Pusty dom", description: "Opis historii Pusty dom..." },
          {
            title: "Przedsiębiorca budowlany z Norwood",
            description: "Opis historii Przedsiębiorca budowlany z Norwood...",
          },
          {
            title: "Tańczące sylwetki",
            description: "Opis historii Tańczące sylwetki...",
          },
          {
            title: "Samotna cyklistka",
            description: "Opis historii Samotna cyklistka...",
          },
          {
            title: "Zniknięcie młodego lorda",
            description: "Opis historii Zniknięcie młodego lorda...",
          },
          {
            title: "Czarny Piotr",
            description: "Opis historii Czarny Piotr...",
          },
          {
            title: "Charles Augustus Milverton",
            description: "Opis historii Charles Augustus Milverton...",
          },
          {
            title: "Sześć popiersi Napoleona",
            description: "Opis historii Sześć popiersi Napoleona...",
          },
          {
            title: "Trzej studenci",
            description: "Opis historii Trzej studenci...",
          },
          {
            title: "Złote binokle",
            description: "Opis historii Złote binokle...",
          },
          {
            title: "Zaginiony sportowiec",
            description: "Opis historii Zaginiony sportowiec...",
          },
          {
            title: "Abbey Grange",
            description: "Opis historii Abbey Grange...",
          },
          { title: "Druga plama", description: "Opis historii Druga plama..." },
        ],
      },
      {
        title: "Dolina trwogi",
        description:
          "Opowieść pełna napięcia, w której Holmes stawia czoła niezwykle trudnej sprawie kryminalnej.",
      },
      {
        title: "Pożegnalny ukłon",
        description:
          "Zbiór ostatnich opowiadań, w których Holmes mierzy się z różnorodnymi zagadkami detektywistycznymi.",
        stories: [
          {
            title: "Tajemnica Wisteria Lodge",
            description: "Opis historii Tajemnica Wisteria Lodge...",
          },
          {
            title: "Kartonowe pudełko",
            description: "Opis historii Kartonowe pudełko...",
          },
          {
            title: "Sprawa Czerwonego Kręgu",
            description: "Opis historii Sprawa Czerwonego Kręgu...",
          },
          {
            title: "Plany Bruce-Partington",
            description: "Opis historii Plany Bruce-Partington...",
          },
          {
            title: "Umierający detektyw",
            description: "Opis historii Umierający detektyw...",
          },
          {
            title: "Zniknięcie Lady Frances Carfax",
            description: "Opis historii Zniknięcie Lady Frances Carfax...",
          },
          {
            title: "Sprawa diabelskiej stopy",
            description: "Opis historii Sprawa diabelskiej stopy...",
          },
          {
            title: "Pożegnalny ukłon",
            description: "Opis historii Pożegnalny ukłon...",
          },
        ],
      },
      {
        title: "Sprawy Sherlocka Holmesa",
        description:
          "Zbiór mniej znanych, ale ciekawych opowiadań, które pokazują pełne spektrum zdolności Holmesa.",
        stories: [
          {
            title: "Znamienity klient",
            description: "Opis historii Znamienity klient...",
          },
          {
            title: "Żołnierz o bladym obliczu",
            description: "Opis historii Żołnierz o bladym obliczu...",
          },
          {
            title: "Klejnot z kolekcji kardynała Mazariniego",
            description:
              "Opis historii Klejnot z kolekcji kardynała Mazariniego...",
          },
          {
            title: "Dom pod trzema daszkami",
            description: "Opis historii Dom pod trzema daszkami...",
          },
          {
            title: "Wampirzyca z hrabstwa Sussex",
            description: "Opis historii Wampirzyca z hrabstwa Sussex...",
          },
          {
            title: "O trzech panach Garrideb",
            description: "Opis historii O trzech panach Garrideb...",
          },
          {
            title: "Zabójstwo przy moście",
            description: "Opis historii Zabójstwo przy moście...",
          },
          {
            title: "Przypadek szalonego profesora",
            description: "Opis historii Przypadek szalonego profesora...",
          },
          { title: "Lwia grzywa", description: "Opis historii Lwia grzywa..." },
          {
            title: "Tajemnicza lokatorka",
            description: "Opis historii Tajemnicza lokatorka...",
          },
          {
            title: "Stary dwór Shoscombe",
            description: "Opis historii Stary dwór Shoscombe...",
          },
          {
            title: "Emerytowany sprzedawca farb",
            description: "Opis historii Emerytowany sprzedawca farb...",
          },
        ],
      },
    ],
    "Książki o Chinach": [
      {
        title: "Chiny bez makijażu",
        description:
          "Reportaż przedstawiający życie codzienne i realia współczesnych Chin z perspektywy zwykłych ludzi.",
      },
      {
        title: "Czerwony cesarz: Xi Jinping i jego Nowe Chiny",
        description:
          "Biografia i analiza polityki Xi Jinpinga, ukazująca kierunek zmian w Chinach współczesnych.",
      },
      {
        title: "Taoizm: Wprowadzenie",
        description:
          "Przewodnik po filozofii taoistycznej, jej zasadach, praktykach i wpływie na kulturę chińską.",
      },
      {
        title: "Baśnie chińskie",
        description:
          "Zbiór klasycznych baśni i opowieści ludowych z Chin, pokazujących tradycje i wartości kulturowe.",
      },
      {
        title:
          "Prowadzący umarłych: Opowieści prawdziwe Chiny z perspektywy nizin społecznych",
        description:
          "Reportaże o życiu biedniejszych warstw społecznych w Chinach, ukazujące codzienne trudności i nadzieje.",
      },
      {
        title: "Tajwan: Herbatka na beczce prochu",
        description:
          "Historia i polityka Tajwanu, z perspektywy społecznej i kulturowej, ukazująca napięcia w regionie.",
      },
      {
        title:
          "Japonia, Chiny i Korea: O ludziach skłóconych na śmierć i życie",
        description:
          "Analiza historycznych i współczesnych konfliktów w Azji Wschodniej oraz ich wpływu na ludzi.",
      },
      {
        title: "Chiny: Przewodnik po herosach, smokach i świętych rzekach",
        description:
          "Książka przybliżająca chińską mitologię, legendy i symbole kulturowe w kontekście historii i literatury.",
      },
      {
        title: "Chiny: Portret cywilizacji i narodu",
        description:
          "Kompleksowy przegląd historii, kultury i społeczeństwa chińskiego, od starożytności po współczesność.",
      },
      {
        title:
          "Cesarzowa wdowa Cixi: Konkubina która stworzyła współczesne Chiny",
        description:
          "Biografia Cixi, wpływowej cesarzowej Chin, która zmieniła bieg historii i polityki państwa.",
      },
      {
        title: "Historia Kościoła w Chinach",
        description:
          "Opowieść o chrześcijaństwie w Chinach, jego wpływie na społeczeństwo i konflikty z władzą.",
      },
      {
        title: "Daodejing",
        description:
          "Klasyczny tekst taoistyczny, przedstawiający filozofię życia w harmonii z naturą.",
      },
      {
        title: "Ocalała z chińskiego gułagu",
        description:
          "Wspomnienia osoby przeżywającej represje polityczne i obozy pracy w Chinach, osobista historia przetrwania.",
      },
      {
        title: "Assassin's Creed Miecz Shao Jun",
        description:
          "Komiksowa/książkowa adaptacja gry, opowiadająca o przygodach Shao Jun w Chinach.",
        stories: [
          { title: "Tom 1", description: "Opis Tom 1..." },
          { title: "Tom 2", description: "Opis Tom 2..." },
          { title: "Tom 3", description: "Opis Tom 3..." },
          { title: "Tom 4", description: "Opis Tom 4..." },
        ],
      },
    ],
    "Boska Komedia": [
      {
        title: "Inferno",
        description:
          "Pierwsza część epickiej podróży Dantego przez Piekło, ukazująca grzechy ludzkości i konsekwencje moralne.",
      },
      {
        title: "Czyściec",
        description:
          "Druga część podróży Dantego, przedstawiająca oczyszczenie dusz w Czyśćcu oraz refleksję nad cnotą i karą.",
      },
      {
        title: "Raj",
        description:
          "Ostatnia część, w której Dante doświadcza Raju, poznaje boską miłość i ostateczne szczęście duszy.",
      },
    ],
    "Mitologia Nordycka": [],
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
      antagonist: "Vilgefortz z Roggeveen, Bonhart, potwory",
      why: "Saga fantasy, która eksploruje moralność, wolną wolę i konsekwencje ludzkich decyzji.",
      description:
        "Opowieść o wiedźminie Geralcie, łowcy potworów, który przemierza świat pełen magii, polityki i konfliktów. Każda historia bada granice dobra i zła, pokazując, że świat jest pełen szarości i moralnych dylematów.",
    },
    "Pieśń Lodu i Ognia": {
      world: "Krokotopia, Grizzleheim",
      protagonist:
        "M.in.: Jon Snow, Daenerys Targaryen, Tyrion Lannister, Arya Stark, Bran Stark",
      antagonist:
        "M.in.: Cersei Lannister, Joffrey Baratheon, Ramsay Bolton, Petyr Baelish, Nocny Król",
      why: "Saga epickiego fantasy, która łączy politykę, wojnę i magię w złożonym świecie.",
      description:
        "Wielowątkowa opowieść o walce o władzę w Westeros i Essos. Historia pokazuje zdradę, lojalność, ambicję i przeznaczenie. To również głębokie studium charakterów, moralności i konsekwencji decyzji jednostek w obliczu chaosu.",
    },
    "Sherlock Holmes": {
      world: "Marleybone",
      protagonist: "Sherlock Holmes, John Watson",
      antagonist: "Profesor Moriarty, inni przestępcy",
      why: "Klasyczne opowieści detektywistyczne, fundament literatury kryminalnej.",
      description:
        "Zbiór opowiadań i powieści o genialnym detektywie Sherlocku Holmesie i jego przyjacielu doktorze Watsonie. Każda historia pokazuje mistrzowskie dedukcje, logiczne rozwiązywanie zagadek i mistrzostwo w obserwacji świata.",
    },
    "Książki o Chinach": {
      world: "Mooshu",
      protagonist: "Chińczycy",
      antagonist: "Mao Zedong, Xi Jinping",
      why: "Zbiór literatury non-fiction i powieściowych opowieści o Chinach, kulturze i historii.",
      description:
        "Książki przedstawiające Chiny w różnych wymiarach: historycznym, społecznym i kulturowym. Pokazują zarówno wielką historię dynastii i cesarzy, jak i życie codzienne zwykłych ludzi, pozwalając lepiej zrozumieć złożoność tej cywilizacji.",
    },
    "Boska Komedia": {
      world: "Dragonspyre",
      protagonist: "Dante Alighieri",
      antagonist: "Lucyfer, demony",
      why: "Klasyczne dzieło literatury światowej, metafizyczna podróż przez życie, śmierć i moralność.",
      description:
        "Epicka podróż Dantego przez Piekło, Czyściec i Raj. To zarówno alegoria duchowego oczyszczenia, jak i głębokie studium etyki, sprawiedliwości i kondycji ludzkiej. Książka bada konsekwencje grzechu i znaczenie cnoty w życiu człowieka.",
    },
    "Obrona Sokratesa": {
      world: "Aquila",
      protagonist: "Sokrates",
      antagonist: "Meletos, Anytos i Likón",
      why: "Fundament filozofii zachodniej i symbol wierności prawdzie.",
      description:
        "Dialog Platona przedstawiający mowę obrończą Sokratesa przed ateńskim sądem. To manifest postawy filozoficznej — odwagi myślenia, krytyki społecznej i gotowości poniesienia konsekwencji za swoje przekonania.",
    },
    "Mitologia Nordycka": {
      world: "Grizzleheim",
      protagonist: "Odyn i Thor",
      antagonist: "Loki, olbrzymy",
      why: "Mitologia nordycka to fundament kultury i wierzeń skandynawskich, pełna bogów, bohaterów i epickich opowieści o losie i przeznaczeniu.",
      description:
        "Zbiór sag i mitów opowiadających o bogach, gigantach i ludziach. Pokazuje walkę dobra ze złem, znaczenie honoru, odwagi i losu. To także źródło inspiracji dla literatury, gier i kultury popularnej.",
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
                      <strong>Świat: </strong>
                      {seriesDescriptions[series].world}
                    </p>
                    <p>
                      <strong>Protagoniści: </strong>
                      {seriesDescriptions[series].protagonist}
                    </p>
                    <p>
                      <strong>Antagoniści: </strong>
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
