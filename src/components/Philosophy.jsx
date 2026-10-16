import { useState } from "react";
import "./Philosophy.css";
import works from "../data/works";
import filozofiaPoProstuEpisodes from "../data/filozofiaPoProstuEpisodes";
import podcastEpisodes from "../data/podcastEpisodes";

const Philosophy = () => {
  const [openMainSection, setOpenMainSection] = useState(null);
  const [openSection, setOpenSection] = useState(null);
  const [openSeries, setOpenSeries] = useState(null);
  const [selectedPhilosophyBook, setSelectedPhilosophyBook] = useState(null);
  const [selectedPodcast, setSelectedPodcast] = useState(null);
  const [selectedPhilosophyRegion, setSelectedPhilosophyRegion] =
    useState(null);
  const [selectedPhilosopher, setSelectedPhilosopher] = useState(null);
  const [selectedPersonalEntry, setSelectedPersonalEntry] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const toggleSeries = (key) => {
    setOpenSeries(openSeries === key ? null : key);
  };

  const philosophyBooks = [
    {
      title: "Obrona Sokratesa",
      description:
        "To esencja filozofii etycznej i dialogicznej: Sokrates pokazuje, że prawdziwa mądrość zaczyna się od uznania własnej niewiedzy, a życiem filozoficznym jest nieustanne pytanie o dobro, cnotę i sens postępowania.",
    },
    {
      title: "Boska Komedia",
      description:
        "Dante łączy poetykę z teologią i moralnością: pokazuje, że człowiek nie jest tylko kimś, kto żyje, ale kimś, kto podąża ku wyborowi dobra lub zła, a droga przez piekło, czyściec i raj jest metaforą ludzkiej odpowiedzialności i odkupienia.",
    },
    {
      title: "Taoizm: Wprowadzenie",
      description:
        "Książka ta pokazuje filozofię taoizmu jako sposób myślenia o naturalnym rytmie świata, odpuszczeniu, prostocie i nieprzemocy wobec nadmiernej kontroli i ludzkiego ego.",
    },
    {
      title: "Daodejing",
      description:
        "To jeden z najważniejszych tekstów filozoficznych Wschodu: naucza, że sprawiedliwe życie nie polega na dominacji, lecz na harmonii z Tao, czyli naturalnym porządkiem rzeczy, który wymaga pokory i spokoju.",
    },
  ];

  const allThemes = [...new Set(works.flatMap((w) => w.themes || []))].sort();

  const philosopherGroups = [
    {
      region: "Zachodni",
      philosophers: [
        {
          name: "Sokrates",
          paragraphs: [
            "Sokrates był filozofem, który zrewolucjonizował myślenie o moralności, pytając nie o to, co ludzie wierzą, ale o to, jak naprawdę rozumieją dobro, sprawiedliwość i cnotę. Jego wielkim osiągnięciem było pokazanie, że prawdziwa mądrość zaczyna się od uznania własnej niewiedzy.",
            "W praktyce oznacza to, że nie można żyć dobrze, jeśli zakłada się, że zna się odpowiedzi na najważniejsze pytania. Sokrates był przeciwnikiem powierzchownej pewności i przekonywał, że człowiek powinien nieustannie badać siebie i swoje przekonania, bo to właśnie świadomość własnej ograniczoności prowadzi do autentycznej mądrości.",
            "Jego metoda, znana jako elenkhos, polegała na zadawaniu pytań, ujawnianiu sprzeczności w czyichś twierdzeniach i zmuszaniu do głębszej refleksji. To był początek filozofii jako rozmowy, a nie tylko systemu pojęć.",
          ],
          ideas: [
            "mądrość zaczyna się od uznania niewiedzy",
            "dobro i cnota są przedmiotem świadomego namysłu",
            "filozofia to pytanie, nie gotowa odpowiedź",
          ],
        },
        {
          name: "Platon",
          paragraphs: [
            "Platon rozwinął myśl Sokratesa w system, który łączył etykę, politykę i metafizykę. Jego najważniejszym przekonaniem było to, że świat zmysłowy jest niepełny i zmienny, a prawdziwa rzeczywistość istnieje poza nim w formach idealnych, takich jak dobro, piękno czy sprawiedliwość.",
            "W jego filozofii człowiek nie jest tylko istotą żyjącą według instynktu, ale istotą zdolną do rozumu, który ma prowadzić go ku prawdzie. Dlatego filozofia była dla Platona nie tylko teoretyczną refleksją, ale drogą do życia moralnego i politycznego.",
            "Jego koncepcja państwa idealnego i podziału na klasy społeczności miała ogromny wpływ na myślenie o sprawiedliwości, władzy i prawie. Platona można odczytywać jako filozofa, który próbował połączyć wizję doskonałości z realnymi problemami ludzkiego życia.",
          ],
          ideas: [
            "świat zmysłowy jest tylko cieniem świata idei",
            "rozum jest wyższą drogą poznania niż zmysły",
            "dobro jest fundamentem sprawiedliwego życia i państwa",
          ],
        },
        {
          name: "Arystoteles",
          paragraphs: [
            "Arystoteles odróżniał się od Platona praktycznym podejściem do filozofii. W jego ujęciu najważniejsze nie są metafizyczne idee odseparowane od świata, ale natura, ludzkie działanie i etyka, która ma prowadzić do życia w doskonałości i mądrości.",
            "Rozwinął koncepcję cnoty jako środka między skrajnymi zachowaniami. Według niego człowiek nie staje się dobry poprzez spełnianie reguł abstrakcyjnych, lecz poprzez ćwiczenie odpowiednich postaw i nawyków. Tak powstaje etyka cnoty, która jest bardzo żywa i praktyczna.",
            "Arystoteles był też jednym z pierwszych myślicieli, który podjął próbę systematycznego badania polityki, biologii, logiki i estetyki. Jego wpływ jest ogromny — nie tylko w filozofii, ale także w nauce i kulturze europejskiej.",
          ],
          ideas: [
            "cnota to droga do doskonałego życia",
            "rozum i doświadczenie są kluczowe dla poznania",
            "sprawiedliwość i polityka mają sens tylko w relacji do człowieka i wspólnoty",
          ],
        },
        {
          name: "Machiavelli",
          paragraphs: [
            "Machiavelli zaskakuje tym, że nie jest filozofem idealistycznym, lecz realistą, który patrzy na władzę taką, jaka jest, a nie taką, jaka powinna być w teorii. Jego celem nie było dawanie moralistycznych wskazówek, ale pokazanie mechanizmów władzy i polityki.",
            "W 'Księciu' argumentuje, że przywódca nie może kierować się jedynie dobrymi intencjami, jeśli chce przetrwać i utrzymać porządek. Mówił o konieczności podejmowania trudnych decyzji, które mogą wydawać się nieetyczne, jeśli służą bezpieczeństwu państwa.",
            "To sprawia, że Machiavelli jest postacią kontrowersyjną: krytykuje go się za cynizm, ale jednocześnie uznaje za myśliciela, który brutalnie ujawnił realia polityki. Jego filozofia jest najbardziej wyraźnym przykładem rozdziału między moralnością prywatną a logiczną praktyką władzy.",
          ],
          ideas: [
            "polityka to nie etyka w czystej formie",
            "władza wymaga decyzji trudnych i często nieprzyjemnych",
            "realizm polityczny jest ważniejszy niż utopijne ideały",
          ],
        },
        {
          name: "Nietzsche",
          paragraphs: [
            "Nietzsche był filozofem, który odrzucał zarówno tradycyjne moralne schematy, jak i łatwą wiarę w powszechne wartości. Jego myśl polegała na tym, że człowiek musi przejść przez kryzys wartości i odnaleźć własną drogę, zamiast żyć według gotowych norm.",
            "Najbardziej znane jest jego pojęcie nadczłowieka, które nie oznacza biologicznego supremacji, lecz przejście od człowieka oswojonego przez tradycję do jednostki twórczej, silnej, samodzielnej i wolnej od ślepego posłuszeństwa.",
            "Nietzsche podważał rozumienie dobra i zła jako rzeczywistości niezmiennej. W jego filozofii wartości są konstruowane, a człowiek musi je tworzyć świadomie, nie biernie przyjmować. To myślenie wywarło ogromny wpływ na późniejszą filozofię, psychologię i kulturę.",
          ],
          ideas: [
            "wartości nie są dane raz na zawsze",
            "wola mocy jest źródłem twórczości i wolności",
            "człowiek musi przekraczać niewolę norm i tradycji",
          ],
        },
        {
          name: "Kant",
          paragraphs: [
            "Immanuel Kant próbował odpowiedzieć na pytanie, czy ludzie mogą znać prawdę obiektywnie i czy ich działania mogą być moralnie zasadne niezależnie od okoliczności. Jego filozofia była próbą pogodzenia rozumu z doświadczeniem i stworzenia fundamentu moralności.",
            "Najważniejsze jest dla niego pojęcie imperatywu kategorycznego: działaj tak, aby zasada twojego postępowania mogła stać się prawem powszechnym. To znaczy, że moralność nie polega na emocjach czy korzyściach, lecz na tym, co mogłoby być uznane za zasługuje na ogólną zgodę.",
            "Kant rozdzielał sferę poznania od sfery moralności i pokazywał, że ludzki rozum ma granice, ale także zdolność do formułowania uniwersalnych zasad. Jego myśl stała się fundamentem nowożytnej etyki i filozofii prawa.",
          ],
          ideas: [
            "moralność opiera się na zasadzie uniwersalności",
            "rozum ma granice, ale też zasadę działania",
            "człowiek jest podmiotem i celem, a nie tylko środkiem",
          ],
        },
        {
          name: "Camus",
          paragraphs: [
            "Camus był filozofem egzystencjalnym, który skupiał się na absurdzie ludzkiego życia. Uważał, że świat nie daje nam oczywistego sensu, a człowiek musi zmierzyć się z tą prawdą bez uciekania w religijne czy ideologiczne ułatwienia.",
            "W jego filozofii absurd nie jest rozpaczliwym przekonaniem, ale świadomością, że ludzie pragną sensu, lecz rzeczywistość nie zapewnia mu automatycznie. To powoduje napięcie, które można przeżyć przez odwagę, szczerość i aktywne życie.",
            "Camus bronił wartości życia mimo braku metafizycznego sensu. Dlatego pisze o rebelii, godności i odwadze nie jako o złudnych ideałach, ale jako o sposobie stawiania czoła pustce.",
          ],
          ideas: [
            "absurd jest doświadczeniem współczesnego człowieka",
            "sens nie jest dany z góry, lecz tworzony w działaniu",
            "godność polega na odwadze wobec pustki",
          ],
        },
        {
          name: "Sartre",
          paragraphs: [
            "Sartre rozwijał filozofię egzystencjalną w sposób jeszcze bardziej radykalny: człowiek jest wolny i nie ma natury, która by go określała. To właśnie wolność staje się źródłem odpowiedzialności, a to oznacza, że każda decyzja ma konsekwencje nie tylko dla jednostki, ale dla wszystkich.",
            "Jego myśl o bycie-i-niczym była próbą zrozumienia, jak to się dzieje, że człowiek jest jednocześnie świadomy siebie i nieustannie tworzy własną tożsamość. Nie ma gotowej definicji człowieka; każdy musi ją sam zrealizować w działaniu.",
            "Sartre podkreślał, że wolność nie jest przyjemnym wyborem, ale ciężarem odpowiedzialności. To z jednej strony daje ogromną moc, z drugiej — ogromną samotność i konieczność bycia kimś, czego nie da się uniknąć.",
          ],
          ideas: [
            "człowiek tworzy siebie przez wybory",
            "wolność zawsze idzie w parze z odpowiedzialnością",
            "istnienie poprzedza istotę — nie ma gotowej definicji człowieka",
          ],
        },
        {
          name: "Seneka",
          paragraphs: [
            "Seneka był stoikiem, który nauczał, że prawdziwe szczęście nie zależy od zewnętrznych okoliczności, lecz od wewnętrznego nastawienia i kontroli nad własnymi emocjami. To ważne w świecie, w którym los często zaskakuje.",
            "Jego filozofia skupiała się na mądrości, hartu ducha i odróżnieniu tego, czego nie możemy kontrolować, od tego, nad czym mamy władzę. Takie myślenie miało silny wpływ na etykę chrześcijańską i późniejszą filozofię zachodnią.",
            "Seneka pokazywał, że dystans do bogactwa, sławy i cierpienia może dać człowiekowi spokój i godność. Nie była to filozofia ucieczki od świata, lecz filozofia mocy wewnętrznej.",
          ],
          ideas: [
            "to, co zależy od nas, jest kluczem do wolności",
            "spokój wywodzi się z wewnętrznej dyscypliny",
            "życie godne nie polega na przyjemnościach, lecz na cnocie",
          ],
        },
        {
          name: "Epiktet",
          paragraphs: [
            "Epiktet nauczał, że człowiek ma wpływ tylko na własne myśli, wybory i postawy, a nie na to, co dzieje się na zewnątrz. To przesłanie stoickie w czystej formie: doskonałość zaczyna się od wewnętrznej panowania nad sobą.",
            "Jego myśl była niezwykle praktyczna — nie tyle o abstrakcyjnych ideach, ile o codziennym życiu, cierpieniu i emocjach. Twierdził, że prawdziwa wolność polega na rozróżnieniu między tym, co jest w naszej mocy, a tym, co nie jest.",
            "Dzięki temu można zachować spokój nawet w sytuacjach, które wydają się nie do zniesienia. To bardzo żywa filozofia, użyteczna w każdym życiu codziennym.",
          ],
          ideas: [
            "wewnętrzna wolność jest ważniejsza niż zewnętrzne okoliczności",
            "kontrola emocji jest kluczem do mądrości",
            "życie wymaga dyscypliny, a nie jedynie przyjemności",
          ],
        },
        {
          name: "Marek Aureliusz",
          paragraphs: [
            "Marek Aureliusz był cesarzem i filozofem stoickim, który widział ograniczenia ludzkiego życia w świetle natury i śmierci. Jego myśl była jednocześnie polityczna i duchowa: trzeba żyć zgodnie z porządkiem świata, nie zapominając o własnej drodze moralnej.",
            "W 'Rozmyślaniach' podkreślał, że człowiek powinien przyjmować to, co nieodwołalnie należy do ludzkiej kondycji — zmienność, cierpienie, śmierć — i nie pozwalać, by te rzeczy odebrały mu spokój i godność.",
            "To filozofia codzienności i samokontroli. Marek Aureliusz pokazywał, że nawet w trudnych czasach można zachować wewnętrzny porządek i kierować się rozumem zamiast złością czy strachem.",
          ],
          ideas: [
            "żyj zgodnie z naturą i rozumem",
            "cierpienie nie musi niszczyć wewnętrznej równowagi",
            "mądrość wymaga pogody ducha wobec losu",
          ],
        },
        {
          name: "Kartezjusz",
          paragraphs: [
            "Kartezjusz przyjął podejście, które miało zrewolucjonizować filozofię nowożytną: zaczął od wątpienia we wszystko, co tylko może być wątpliwe. Jego celem było znalezienie czegoś niepodważalnego, czego nie da się zakwestionować.",
            "W tym sensie jego słynne 'Cogito, ergo sum' oznaczało, że nawet jeśli wszystko inne jest wątpliwe, sama świadomość myślenia jest pewna. To był fundament nowoczesnego rozumu, który nie ufa bezwzględnie doświadczeniu, ale bada je krytycznie.",
            "Kartezjusz rozdzielał ciało i umysł, a jego filozofia miała ogromny wpływ na naukę, psychologię i teorię poznania. Był jednym z twórców nowożytnej myśli, która stawiała rozum ponad tradycję.",
          ],
          ideas: [
            "wątpienie jest początkiem prawdziwego poznania",
            "myślenie jest najpewniejszym fundamentem wiedzy",
            "rozum ma prawo badać fundamenty wszelkiej prawdy",
          ],
        },
        {
          name: "Freud",
          paragraphs: [
            "Freud dokonał przełomu w rozumieniu ludzkiej psychiki, pokazując, że wielka część tego, co kieruje człowiekiem, nie jest świadoma. Przeżycia, pragnienia i konflikty tkwią często w nieświadomości, a ich wpływ można rozpoznać w snach, marzeniach i zachowaniach.",
            "Jego teoria psyche dzieliła ją na id, ego i superego, a więc na sfery pragnienia, realizmu i moralnych zasad. To było niezwykle ważne, bo pokazało, że człowiek nie jest w pełni rationalnym i kontrolowanym bytem.",
            "Freud otworzył nowy obszar refleksji nad lękiem, traumą, relacjami i kulturą. Jego wpływ w filozofii, psychologii i literaturze jest ogromny, choć jego teorie były wielokrotnie krytykowane i reinterpretowane.",
          ],
          ideas: [
            "nieświadomość kieruje częścią ludzkiego życia",
            "psychika jest złożonym systemem konfliktów i mechanizmów obronnych",
            "człowiek potrzebuje refleksji nad własnymi motywacjami",
          ],
        },
      ],
    },
    {
      region: "Wschodni",
      philosophers: [
        {
          name: "Konfucjusz",
          paragraphs: [
            "Konfucjusz nauczał, że fundamentem dobrego życia jest etyka relacji, czyli właściwy sposób bycia wobec innych ludzi. Jego filozofia koncentruje się na cnocie, szacunku, wdzięczności i harmonii społeczeństwa.",
            "Dla Konfucjusza człowiek nie powinien działać wyłącznie w imię własnych interesów, ale w zgodzie z zasadą ren — ludzkiej życzliwości i troski o innych. To właśnie poprzez relacje między ludźmi tworzy się wartość moralna życia.",
            "Jego nauki stały się fundamentem chińskiej kultury i polityki przez wieki, a jego myślenie nadal jest aktualne tam, gdzie chodzi o odpowiedzialność, wychowanie i praktykę moralną.",
          ],
          ideas: [
            "etyka relacji jest najważniejsza",
            "szacunek i obowiązek tworzą porządek moralny",
            "dobrze żyje się w harmonii z innymi i własnym sumieniem",
          ],
        },
        {
          name: "Laozi",
          paragraphs: [
            "Laozi jest najbardziej znanym przedstawicielem taoizmu. Jego kluczową myślą jest, że prawidłowe życie nie polega na przyspieszaniu, walce i kontroli, lecz na harmonii z naturalnym rytmem świata, czyli Tao.",
            "Tao to nie tylko pojęcie metafizyczne, ale sposób bycia — odpuszczanie, prostota, spokój i mądrzejsze niż przymus nieprzełamania własnej potrzeby dominacji. Laozi przekonuje, że wiele problemów wynika z nadmiernej kontroli i egoistycznego dążenia do władzy.",
            "Jego myślenie ma ogromny wpływ na wschodnie podejście do życia, ale także na współczesne rozumienie minimalizmu, działania bez przymusu i naturalnej równowagi.",
          ],
          ideas: [
            "natura jest lepszym nauczycielem niż przemoc",
            "prostota prowadzi do harmonii",
            "działanie bez bezpośredniej kontroli jest mądrzejsze",
          ],
        },
        {
          name: "Zhuangzi",
          paragraphs: [
            "Zhuangzi rozwijał taoizm w bardziej paradoksalny i poetycki sposób. Jego myślenie polega na rozbiciu sztywności myślenia, kategoryzacji i przekonania, że istnieje jedna poprawna perspektywa na świat.",
            "W swoich opowieściach pokazuje, że prawda nie jest stała, a człowiek powinien umieć pozostawać elastyczny, otwarty i wolny od narzucającego mu się myślenia. To myślenie jest bliskie filozofii relatywności i elastyczności poznawczej.",
            "Zhuangzi obrał metodę metafory i paradoksu, by pokazać, że ludzie często są uwięzieni w własnych założeniach. Prawdziwa mądrość polega na przejściu ponad sztywność i przyjęciu zmienności świata.",
          ],
          ideas: [
            "natura jest zmienna i niejednoznaczna",
            "sztywność myślenia jest źródłem cierpienia",
            "mądrość wymaga wolności od kategorii i dogmatów",
          ],
        },
        {
          name: "Bodhidharma",
          paragraphs: [
            "Bodhidharma jest legendarnym mistrzem buddyzmu chan, który wprowadził myśl o bezpośrednim doświadczeniu prawdy, a nie o zewnętrznej doktrynie. Jego słynne przesłanie mówiło, że prawdziwe oświecenie nie przychodzi z nauki, lecz z bezpośredniego przejścia przez doświadczenie.",
            "Jego postawa była surowa i trudna do zrozumienia dla ludzi kierujących się intelektualną pewnością. Pokazywał, że medytacja i wyciszenie nie są dodatkiem do życia, ale jego rdzeniem.",
            "Bodhidharma był ważny nie tylko jako nauczyciel duchowy, ale jako symbol przejścia od myślenia o religii do praktyki transcendentnej i wewnętrznej transformacji.",
          ],
          ideas: [
            "prawda jest doświadczeniem, nie tylko teorią",
            "medytacja prowadzi do wewnętrznej jasności",
            "wiedza duchowa wykracza poza intelekt",
          ],
        },
        {
          name: "Sun Zi",
          paragraphs: [
            "Sun Zi, twórca 'Sztuki wojny', rozwinął myślenie o strategii, przewadze, zdolności dostosowania i przewidywania. Choć jego tekst bywa odczytywany militarystycznie, w praktyce dotyczy on szerzej psychologii konfliktu, zarządzania i decyzji.",
            "Jego wielki wkład polega na rozpoznaniu, że zwycięstwo nie zależy od siły brutto, ale od inteligencji, kontroli emocji i rozumienia sytuacji. Właściwa strategia opiera się na znajomości własnych możliwości oraz słabości przeciwnika.",
            "Sun Zi jest bardzo ważnym myślicielem dla polityki i zarządzania, ponieważ pokazuje, że mądrą decyzję wyróżnia nie agresja, lecz umiar, przewidywanie i elastyczność.",
          ],
          ideas: [
            "strategia jest ważniejsza niż siła samą w sobie",
            "przewaga pojawia się dzięki inteligencji i dostosowaniu",
            "jednym z największych atutów jest panowanie nad własnymi emocjami",
          ],
        },
        {
          name: "Mozi",
          paragraphs: [
            "Mozi był filozofem, który przeciwstawił się elitarnej i często wyrafinowanej kulturze arystokracji i propagował praktykę powszechnej dobroci. W jego myśleniu ważne było, by działać w interesie ogółu, a nie tylko własnej grupy.",
            "Jego idea 'ludzkości' czy universalnej troski o innych miała ogromny wpływ na etykę i politykę. Mówił o tym, że dobra polityka i moralność powinny kierować się korzyścią wspólnoty i troską o wszystkich ludzi, nie tylko o elity.",
            "Mozi nie był filozofem spokojnym i dyskursywnym w stylu Platona; jego myśl była bardziej praktyczna, nacisk kładł na działania, które mają realne znaczenie dla życia wspólnoty.",
          ],
          ideas: [
            "dobro wspólne jest ważniejsze niż prywatna korzyść",
            "universalna troska jest fundamentem moralności",
            "mądrość powinna przełożyć się na działanie",
          ],
        },
      ],
    },
  ];

  const renderWorkItem = (w) => {
    if (w.isSeries && w.children) {
      const key = w.title + (w.media || "");
      return (
        <div className="philosophy-series-wrapper" key={key}>
          <div
            className="philosophy-series-title clickable"
            onClick={() => toggleSeries(key)}
          >
            {openSeries === key ? "▼" : "▶"} {w.title}
            {w.media && <span className="philosophy-media"> ({w.media})</span>}
          </div>

          {openSeries === key && (
            <ul className="philosophy-list">
              {w.children.map((child, i) => (
                <li key={i} className="philosophy-item">
                  {child.title}
                  {child.media && (
                    <span className="philosophy-media"> ({child.media})</span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    }

    return (
      <div className="philosophy-item">
        {w.title}
        {w.media && <span className="philosophy-media"> ({w.media})</span>}
      </div>
    );
  };

  return (
    <div className="philosophy-wrapper">
      <div className="philosophy-container">
        <h2 className="philosophy-title">Filozofia</h2>
        <div className="philosophy-main-buttons">
          <button
            onClick={() =>
              setOpenMainSection(
                openMainSection === "podcasty" ? null : "podcasty",
              )
            }
          >
            Podcasty
          </button>
          <button
            onClick={() =>
              setOpenMainSection(
                openMainSection === "ksiazki" ? null : "ksiazki",
              )
            }
          >
            Książki
          </button>
          <button
            onClick={() =>
              setOpenMainSection(
                openMainSection === "filozofowie" ? null : "filozofowie",
              )
            }
          >
            Ważni filozofowie
          </button>
          <button
            onClick={() =>
              setOpenMainSection(
                openMainSection === "mojaFilozofia" ? null : "mojaFilozofia",
              )
            }
          >
            Moja filozofia
          </button>
        </div>

        {/* PODCASTY */}
        {openMainSection === "podcasty" && (
          <div className="philosophy-section">
            <ul className="philosophy-book-list">
              {[
                {
                  title: "Filozofia po prostu",
                  episodes: filozofiaPoProstuEpisodes,
                },
                { title: "Philosophize This!", episodes: podcastEpisodes },
              ].map((podcast) => {
                const isSelected = selectedPodcast?.title === podcast.title;

                return (
                  <li
                    key={podcast.title}
                    className={`philosophy-book-item clickable ${
                      isSelected ? "selected" : ""
                    }`}
                    onClick={() =>
                      setSelectedPodcast(isSelected ? null : podcast)
                    }
                  >
                    {podcast.title}
                  </li>
                );
              })}
            </ul>

            {selectedPodcast && (
              <div className="philosophy-book-detail">
                <h3 className="philosophy-book-detail-title">
                  {selectedPodcast.title}
                </h3>
                <ul className="philosophy-list">
                  {selectedPodcast.episodes.map((ep, i) => (
                    <li key={ep + i} className="philosophy-item">
                      {ep}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* KSIĄŻKI */}
        {openMainSection === "ksiazki" && (
          <div className="philosophy-section">
            <ul className="philosophy-book-list">
              {philosophyBooks.map((book) => {
                const isSelected = selectedPhilosophyBook?.title === book.title;

                return (
                  <li
                    key={book.title}
                    className={`philosophy-book-item clickable ${
                      isSelected ? "selected" : ""
                    }`}
                    onClick={() =>
                      setSelectedPhilosophyBook(isSelected ? null : book)
                    }
                  >
                    {book.title}
                  </li>
                );
              })}
            </ul>

            {selectedPhilosophyBook && (
              <div className="philosophy-book-detail">
                <h3 className="philosophy-book-detail-title">
                  {selectedPhilosophyBook.title}
                </h3>
                <p>{selectedPhilosophyBook.description}</p>
              </div>
            )}
          </div>
        )}

        {/* FILOZOFOWIE */}
        {openMainSection === "filozofowie" && (
          <div className="philosophy-section">
            <ul className="philosophy-book-list">
              {philosopherGroups.map((group) => {
                const isSelected =
                  selectedPhilosophyRegion?.region === group.region;

                return (
                  <li
                    key={group.region}
                    className={`philosophy-book-item clickable ${
                      isSelected ? "selected" : ""
                    }`}
                    onClick={() => {
                      setSelectedPhilosophyRegion(isSelected ? null : group);
                      setSelectedPhilosopher(null);
                    }}
                  >
                    {group.region}
                  </li>
                );
              })}
            </ul>

            {selectedPhilosophyRegion && (
              <div className="philosophy-book-detail">
                <h3 className="philosophy-book-detail-title">
                  {selectedPhilosophyRegion.region}
                </h3>
                <ul className="philosophy-book-list">
                  {selectedPhilosophyRegion.philosophers.map((philosopher) => {
                    const isSelected =
                      selectedPhilosopher?.name === philosopher.name;

                    return (
                      <li
                        key={philosopher.name}
                        className={`philosophy-book-item clickable ${
                          isSelected ? "selected" : ""
                        }`}
                        onClick={() =>
                          setSelectedPhilosopher(
                            isSelected ? null : philosopher,
                          )
                        }
                      >
                        {philosopher.name}
                      </li>
                    );
                  })}
                </ul>

                {selectedPhilosopher && (
                  <div className="philosophy-book-detail">
                    <h4 className="philosophy-book-detail-title">
                      {selectedPhilosopher.name}
                    </h4>
                    {selectedPhilosopher.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {selectedPhilosopher.ideas && (
                      <ul className="philosophy-list">
                        {selectedPhilosopher.ideas.map((idea) => (
                          <li key={idea} className="philosophy-item">
                            {idea}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* MOJA FILOZOFIA */}
        {openMainSection === "mojaFilozofia" && (
          <div className="philosophy-section">
            <ul className="philosophy-book-list">
              {[
                {
                  title: "Bycie puppygirl / doggirl",
                  content: [
                    "Dla mnie to nie jest tylko estetyka ani zabawa w role, ale sposób myślenia o własnym ciele, emocjach i relacji z własną naturą. To połączenie intymności, zmysłowości, lojalności i świadomego przyjęcia tego, co w nas jest silne, delikatne i nieujarzmione.",
                    "W praktyce oznacza to akceptację tego, że człowiek może być jednocześnie świadomy, niezależny i gotowy do uległości wobec czegoś, co daje mu bezpieczeństwo, rytm i poczucie przynależności. 'Puppy' i 'dog' nie są tu maską, lecz językiem emocjonalnym: prostym, bezpośrednim, czułym i bardzo żywym.",
                    "To także filozofia przeciwko nadmiernej kontroli. Nie chodzi o podporządkowanie bez granic, lecz o znalezienie równowagi między wolnością a opieką, między dominacją a zaufaniem, między potrzebą bycia sobą a pragnieniem bycia kochanym. To pytanie o to, czy można przyjąć własną cielesność i emocjonalność bez wstydu i bez rozdarcia.",
                    "W moim rozumieniu to jedna z tych tożsamości, które pokazują, że człowiek nie musi być sztywny, aby być autentyczny. Może być wielowarstwowy, niejednoznaczny i pełen sprzeczności — i właśnie w tej różnorodności tkwi jego prawdziwa głębia.",
                  ],
                  themes: [
                    "akceptacja własnej natury",
                    "lojalność i czułość",
                    "równowaga między wolnością a uległością",
                    "autentyzm bez sztywności",
                  ],
                },
              ].map((entry) => {
                const isSelected = selectedPersonalEntry?.title === entry.title;

                return (
                  <li
                    key={entry.title}
                    className={`philosophy-book-item clickable ${
                      isSelected ? "selected" : ""
                    }`}
                    onClick={() =>
                      setSelectedPersonalEntry(isSelected ? null : entry)
                    }
                  >
                    {entry.title}
                  </li>
                );
              })}
            </ul>

            {selectedPersonalEntry && (
              <div className="philosophy-book-detail">
                <h3 className="philosophy-book-detail-title">
                  {selectedPersonalEntry.title}
                </h3>
                {selectedPersonalEntry.content.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {selectedPersonalEntry.themes && (
                  <ul className="philosophy-list">
                    {selectedPersonalEntry.themes.map((theme) => (
                      <li key={theme} className="philosophy-item">
                        {theme}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Philosophy;
