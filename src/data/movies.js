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
          title: "Pół Wieku Poezji Później",
          description:
            "Niezależny film fanowski osadzony w uniwersum Wiedźmina, skupiający się na losach Jaskra po wydarzeniach znanych z sagi. Historia opowiada o próbie odbicia porwanej czarodziejki oraz o tym, jak legenda Geralta z Rivii wciąż wpływa na świat i ludzi wiele lat później. Produkcja łączy przygodę, humor i melancholię, będąc jednocześnie hołdem dla twórczości Andrzeja Sapkowskiego.",
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
      title: "Assassin's Creed",
      parts: [
        {
          title: "Assassin's Creed (2016)",
          description:
            "Film aktorski osadzony w uniwersum Assassin’s Creed, w którym Callum Lynch zostaje zmuszony do korzystania z technologii Animusa, by przeżyć wspomnienia swojego przodka, Aguilara de Nerhy. Akcja przenosi widza do XV-wiecznej Hiszpanii, gdzie Asasyni walczą z Templariuszami o kontrolę nad Jabłkiem Edenu. Produkcja łączy współczesny wątek sci-fi z historycznym konfliktem o wolność i kontrolę nad ludzkością.",
        },
        {
          title: "Assassin's Creed: Embers",
          description:
            "Krótkometrażowa animacja będąca epilogiem historii Ezio Auditore. Ukazuje jego spokojne życie na wsi we Włoszech po zakończeniu wieloletniej walki jako Mistrz Asasynów. Gdy pojawia się tajemnicza chińska asasynka Shao Jun, Ezio musi po raz ostatni zmierzyć się z cieniem swojej przeszłości. To melancholijna opowieść o przemijaniu, dziedzictwie i tym, że nawet legendy są tylko ludźmi.",
        },
      ],
    },
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
      title: "Wizarding World",
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
        {
          title: "Fantastyczne zwierzęta i jak je znaleźć",
          description:
            "Historia magizoologa Newta Scamandera, który przybywa do Nowego Jorku z walizką pełną magicznych stworzeń. Gdy część z nich ucieka, wydarzenia te splatają się z narastającym konfliktem w świecie czarodziejów oraz działalnością mrocznego czarnoksiężnika Grindelwalda. Film ukazuje amerykańską społeczność magiczną i początki większego zagrożenia dla równowagi między światem magii a niemagicznym.",
        },
        {
          title: "Fantastyczne zwierzęta: Zbrodnie Grindelwalda",
          description:
            "Grindelwald ucieka z niewoli i zaczyna otwarcie gromadzić zwolenników, głosząc ideę dominacji czarodziejów nad niemagicznymi. Albus Dumbledore, nie mogąc bezpośrednio wystąpić przeciw dawnemu przyjacielowi, powierza Newtowi misję powstrzymania jego planów. Film pogłębia polityczne napięcia w świecie magii oraz odsłania tajemnice związane z rodem Lestrange i przeszłością Dumbledore’a.",
        },
        {
          title: "Fantastyczne zwierzęta: Tajemnice Dumbledore’a",
          description:
            "Dumbledore organizuje grupę czarodziejów i czarownic, by przeciwstawić się rosnącej potędze Grindelwalda. W obliczu manipulacji politycznych i walki o władzę nad międzynarodową społecznością magiczną bohaterowie muszą podjąć decyzje, które zaważą na przyszłości świata czarodziejów. Film skupia się na relacji Dumbledore’a i Grindelwalda oraz konsekwencjach ich przeszłości.",
        },
      ],
    },
    {
      title: "Jak Wytresować Smoka",
      parts: [
        {
          title: "Jak Wytresować Smoka",
          description:
            "Pierwsza część serii, opowiadająca o przyjaźni młodego Wikinga Hiccup’a z niebezpiecznym smokiem Bezzębkiem.",
        },
        {
          title: "Prezent Nocnej Furii",
          description:
            "Krótkometrażowa świąteczna opowieść osadzona po wydarzeniach pierwszego filmu. Podczas wikińskiego święta smoków wszystkie stworzenia niespodziewanie odlatują, a Czkawka i Astrid próbują odkryć powód ich tajemniczego zniknięcia. To ciepła historia o więzi między ludźmi i smokami oraz o tym, że czasem trzeba pozwolić komuś odejść.",
        },
        {
          title: "Legenda o Smoku Gnatochrupie",
          description:
            "Humorystyczna krótka animacja skupiająca się na Pyskaczu i jego obsesji na punkcie legendarnego Smoka Gnatochrupa. Gdy tajemnicze wydarzenia zaczynają przypominać starą opowieść, bohaterowie muszą zmierzyć się z własnymi lękami i wyobraźnią. Lekka, komediowa historia bawiąca się smokowymi mitami.",
        },
        {
          title: "Księga Smoków",
          description:
            "Specjalny odcinek stylizowany na dokument, w którym Czkawka, Astrid i ich przyjaciele prezentują znane gatunki smoków z Berk. To rozszerzenie wiedzy o świecie serii – pełne ciekawostek, humoru i charakterystycznych komentarzy bohaterów.",
        },
        {
          title: "Świt Jeźdźców Smoków",
          description:
            "Krótki film będący pomostem między pierwszą a drugą częścią serii. Pokazuje początki organizacji Jeźdźców Smoków i pierwsze wspólne misje Czkawki oraz jego przyjaciół, gdy uczą się współpracować ze swoimi smokami w nowych, niebezpiecznych sytuacjach.",
        },
        {
          title: "Jak Wytresować Smoka 2",
          description:
            "Hiccup i Bezzębny kontynuują swoje przygody, odkrywając nowe krainy i wyzwania w świecie smoków.",
        },
        {
          title: "Jak Wytresować Smoka 3",
          description:
            "Finałowa część serii animowanej, w której Hiccup staje przed ostatecznym wyborem dotyczącym świata ludzi i smoków.",
        },

        {
          title: "Święta w Domu",
          description:
            "Świąteczna krótkometrażowa animacja rozgrywająca się po wydarzeniach trzeciego filmu. Mieszkańcy Berk próbują odnaleźć ducha dawnych tradycji, a Czkawka zastanawia się, jak podtrzymać pamięć o smokach w świecie, w którym już ich nie ma. Ciepła i nostalgiczna historia o rodzinie i tęsknocie.",
        },
        {
          title: "Jak Wytresować Smoka Remake",
          description:
            "Nowa wersja pierwszego filmu, zaktualizowana pod względem animacji i efektów wizualnych.",
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
          title: "Wojny klonów",
          description:
            "Animowany film kinowy będący wprowadzeniem do serialu „Wojny klonów”. Akcja rozgrywa się podczas konfliktu między Republiką a Separatystami. Obi-Wan Kenobi i Anakin Skywalker otrzymują misję uratowania porwanego syna Jabby Hutta, co ma kluczowe znaczenie dla strategicznych szlaków w galaktyce. Film przedstawia także Ahsokę Tano, młodą padawankę Anakina, i ukazuje jego rolę jako mentora w czasie trwającej wojny.",
        },

        {
          title: "Zemsta Sithów",
          description:
            "Trzeci epizod prequeli, ukazujący upadek Anakina i przejście na ciemną stronę jako Darth Vader.",
        },
        {
          title: "Han Solo",
          description:
            "Film przedstawiający młodość Hana Solo i jego drogę od ulicznego kombinatora do jednego z najbardziej znanych przemytników galaktyki. Historia ukazuje jego pierwsze spotkanie z Chewbaccą, zdobycie Sokoła Millennium oraz relację z Lando Calrissianem. To przygodowa opowieść o ryzyku, lojalności i narodzinach legendy.",
        },
        {
          title: "Łotr 1",
          description:
            "Samodzielna historia osadzona tuż przed wydarzeniami „Nowej Nadziei”. Grupa rebeliantów pod dowództwem Jyn Erso podejmuje desperacką misję wykradzenia planów Gwiazdy Śmierci, potężnej broni Imperium. Film pokazuje bardziej wojenny i dramatyczny ton uniwersum, skupiając się na poświęceniu i cenie nadziei w walce z tyranią.",
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
          title: "Sherlock Holmes Gra Cieni",
          description:
            "Kontynuacja przygód Holmesa, w której staje do walki z arcywrogiem, profesor Moriartym, w serii inteligentnych zagadek i intryg.",
        },
        {
          title: "Holmes i Watson",
          description:
            "Komediowa interpretacja przygód Sherlocka Holmesa i doktora Watsona, pełna humoru i absurdalnych sytuacji.",
        },
        {
          title: "Enola Holmes",
          description:
            "Film skupiający się na młodszej siostrze Sherlocka, Enoli, która wyrusza na własną przygodę detektywistyczną, odkrywając tajemnice rodziny i Londynu.",
        },
        {
          title: "Enola Holmes 2",
          description:
            "Kontynuacja przygód Enoli, w której młoda detektyw staje przed nowymi wyzwaniami i zagadkami, rozwijając swoje umiejętności i odkrywając kolejne sekrety Londynu.",
        },
        {
          title: "Enola Holmes 3",
          description:
            "Trzecia część przygód Enoli, w której młoda detektyw mierzy się z jeszcze bardziej skomplikowanymi zagadkami i niebezpieczeństwami, rozwijając swoją niezależność i zdolności detektywistyczne.",
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
          title: "Epoka Lodowcowa",
          description:
            "Pierwsza część serii, w której Manny, Sid i Diego wyruszają w podróż, by zwrócić małe dziecko jego rodzinie.",
        },
        {
          title: "Epoka Lodowcowa 2 Odwilż",
          description:
            "Druga część serii, przedstawiająca przygody bohaterów w nowym, cieplejszym klimacie oraz nowe wyzwania.",
        },
        {
          title: "Epoka Lodowcowa 3 Era Dinozaurów",
          description:
            "Trzecia część, w której bohaterowie odkrywają tajemniczą krainę pełną prehistorycznych stworzeń.",
        },
        {
          title: "Epoka Lodowcowa: Mamucia Gwiazdka",
          description:
            "Świąteczny film krótkometrażowy, w którym Sid przypadkowo niszczy ulubiony kamień Manny’ego i trafia na listę niegrzecznych Mikołaja. Chcąc naprawić sytuację, wyrusza na Biegun Północny, gdzie jego dobre intencje szybko zamieniają się w kolejną lawinę chaosu. Ciepła, humorystyczna opowieść o przyjaźni i odpowiedzialności.",
        },
        {
          title: "Epoka Lodowcowa 4 Wędrówka Kontynentów",
          description:
            "Czwarta część serii, ukazująca zmagania bohaterów z przesuwającymi się kontynentami i katastrofami naturalnymi.",
        },
        {
          title: "Epoka Lodowcowa: Wielkanocne Niespodzianki",
          description:
            "Krótkometrażowy specjal świąteczny skupiający się na Squincie, który przejmuje rolę Zajączka Wielkanocnego. Próba kontrolowania dostaw jajek szybko wymyka się spod kontroli, a Manny, Sid i Diego muszą uratować święta przed totalnym bałaganem.",
        },
        {
          title: "Epoka Lodowcowa 5 Mocne Uderzenie",
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
          title: "Pingwiny z Madagaskaru: Misja świąteczna",
          description:
            "Krótkometrażowa animacja, w której pingwiny odkrywają, że jeden z niedźwiedzi polarnych w zoo nie otrzymał prezentu. Postanawiają wyruszyć na tajną misję ratunkową do centrum handlowego, co kończy się typowym dla nich chaosem i komedią sytuacyjną.",
        },
        {
          title: "Część 1",
          description:
            "Pierwsza część serii, w której grupa zwierząt z nowojorskiego zoo przypadkowo trafia na wyspę Madagaskar i próbuje odnaleźć się w dzikiej przyrodzie.",
        },
        {
          title: "Madagwiazdka",
          description:
            "Świąteczny specjal, w którym zwierzęta z Madagaskaru próbują przywrócić Mikołajowi pamięć po wypadku sani. Alex, Marty, Gloria i Melman przejmują obowiązki świątecznej dostawy prezentów, zamieniając Wigilię w serię absurdalnych przygód.",
        },
        {
          title: "Część 2",
          description:
            "Kontynuacja przygód zwierząt, które próbują wrócić do domu, napotykając nowe wyzwania i wrogów.",
        },
        {
          title: "Zakochany Madagaskar",
          description:
            "Walentynkowy odcinek specjalny, w którym bohaterowie mierzą się z tematyką miłości. Od romantycznych nieporozumień po zabawne próby zdobycia serca wybranki – każdy z bohaterów przeżywa własną, komiczną historię uczuciową.",
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
          title: "Kung Fu Panda",
          description:
            "Połączenie komedii i akcji, w którym niezdarny panda Po staje się wybranym wojownikiem kung fu.",
        },
        {
          title: "Sekrety Potężnej Piątki",
          description:
            "Krótkometrażowy film animowany, w którym Mistrz Shifu opowiada Po historie o młodości Tygrysicy, Małpy, Żurawia, Modliszki i Żmii. Każde z nich musiało pokonać własne słabości, zanim stało się legendarnym wojownikiem kung fu. Opowieść podkreśla, że prawdziwa siła rodzi się z charakteru, nie z talentu.",
        },
        {
          title: "Święta, święta i Po",
          description:
            "Świąteczny specjal, w którym Po musi pogodzić obowiązki Smoczego Wojownika z rodzinną tradycją przygotowywania świątecznej uczty w restauracji pana Pinga. Ciepła historia o równowadze między obowiązkiem a rodziną.",
        },
        {
          title: "Kung Fu Panda 2",
          description:
            "Po kontynuuje swoją podróż jako wojownik, stawiając czoła nowemu zagrożeniu dla Doliny Pokoju.",
        },
        {
          title: "Kung Fu Panda: Sekrety Mistrzów",
          description:
            "Krótka animacja przedstawiająca historię trzech legendarnych mistrzów kung fu: Thundering Rhino, Storming Ox i Croc. Młody Shifu uczy się od nich, czym jest prawdziwe bohaterstwo i odpowiedzialność wojownika.",
        },
        {
          title: "Kung Fu Panda: Tajemnice zwoju",
          description:
            "Specjalny odcinek ukazujący alternatywną wersję wydarzeń, w której to nie Po zostaje Smoczym Wojownikiem. Historia w humorystyczny sposób pokazuje, że przeznaczenie może wyglądać inaczej, ale odwaga i determinacja są kluczowe.",
        },
        {
          title: "Kung Fu Panda 3",
          description:
            "Po odkrywa swoją prawdziwą tożsamość i łączy siły z ojcem oraz nowymi przyjaciółmi, aby pokonać wroga.",
        },
        {
          title: "Panda Paws",
          description:
            "Krótkometrażowa animacja skupiająca się na Po i jego codziennych, często komicznych zmaganiach jako Smoczy Wojownik. Pokazuje lżejszą stronę jego treningu i życia w Dolinie Pokoju.",
        },
        {
          title: "Kung Fu Panda 4",
          description:
            "Najnowsza część serii, w której Po staje przed nowymi wyzwaniami, w tym potężnym przeciwnikiem z przeszłości kung fu.",
        },
        {
          title: "Dueling Dumplings",
          description:
            "Krótki film przedstawiający młodego Po i jego relację z panem Pingiem. Historia skupia się na ich przyjacielskiej rywalizacji przy gotowaniu klusek, ukazując początki marzeń Po i jego miłość do jedzenia oraz kung fu.",
        },
      ],
    },
    { title: "Herkules" },
    { title: "Aladyn" },
    {
      title: "Król Lew",
      parts: [
        {
          title: "Król Lew (2019)",
          description:
            "Przemieniona wersja klasycznej opowieści o Simbie, która zachowuje emocjonalny ciężar pierwowzoru, ale przenosi go w nowoczesną, rozbudowaną oprawę wizualną i muzyczną.",
        },
        {
          title: "Mufasa: Król Lew",
          description:
            "Prequel pokazujący pochodzenie Mufasy i historię jego drogi do mocy, przyjaźni i odpowiedzialności, z emocjonalnym spojrzeniem na legendę Królestwa Zwierząt.",
        },
      ],
    },
    {
      title: "Super Mario Bros",
      parts: [
        {
          title: "Super Mario Bros. (2023)",
          description:
            "Pierwsza kinowa przygoda Mario i Luigiego, która wprowadza widza do świata pełnego przygód, wyzwań i niespodziewanych sojuszy.",
        },
        {
          title: "Super Mario Bros. 2",
          description:
            "Kontynuacja przygód przyjaciół z Krainy Grzyw, w której nowi sojusznicy, niebezpieczeństwa i emocje prowadzą do kolejnej wielkiej przygody.",
        },
      ],
    },
    { title: "Minecraft: Film" },
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
      title: "Marvel Cinematic Universe",
      parts: [
        {
          title: "Iron Man",
          description:
            "Film wprowadzający Tony'ego Starka i świat Marvela, który rozpoczyna epokę superbohaterskich przygód w MCU.",
        },
        {
          title: "The Incredible Hulk",
          description:
            "Historia Bruce'a Bannera, który próbuje kontrolować swoje mutacyjne moce i uciekać przed wojskowym i naukowym zagrożeniem.",
        },
        {
          title: "Iron Man 2",
          description:
            "Tony Stark mierzy się z konsekwencjami swojej sławy, rosnącą presją oraz nowym zagrożeniem dla świata technologii.",
        },
        {
          title: "Thor",
          description:
            "Prywatna historia boga piorunów, który musi zmierzyć się z własnym ego, losem i wyzwaniem poza Asgardem.",
        },
        {
          title: "Captain America: The First Avenger",
          description:
            "Przygoda Steve'a Rogersa, który przechodzi przez niezwykły program wojskowy i staje się bohaterem wojny światowej.",
        },
        {
          title: "The Avengers",
          description:
            "Połączenie największych bohaterów Marvela w jedną drużynę, która musi powstrzymać kosmiczne zagrożenie.",
        },
        {
          title: "Iron Man 3",
          description:
            "Po traumatycznych doświadczeniach Tony Stark musi stawić czoła własnym lękom i nowemu niebezpieczeństwu, które grozi światu.",
        },
        {
          title: "Thor: The Dark World",
          description:
            "Thor wraca do walki z ciemną mocą, która zagraża zarówno Asgardowi, jak i światu ludzi.",
        },
        {
          title: "Captain America: The Winter Soldier",
          description:
            "Steve Rogers odkrywa spisek w strukturach bezpieczeństwa i musi bronić swoich ideałów przed zdradą z wewnątrz.",
        },
        {
          title: "Guardians of the Galaxy",
          description:
            "Kosmiczna przygoda pełna humoru, muzyki i niezwykłych postaci, które zyskują wspólne przeznaczenie.",
        },
        {
          title: "Avengers: Age of Ultron",
          description:
            "Nadorganizacja pojawia się nowy, groźniejszy wróg, a bohaterowie muszą stawić czoła konsekwencjom własnej wielkiej siły.",
        },
        {
          title: "Ant-Man",
          description:
            "Złodziej dzięki eksperymentowi z kurczeniem się staje się bohaterem, który musi ratować świat w niezwykle nietypowy sposób.",
        },
        {
          title: "Captain America: Civil War",
          description:
            "Drużyna Avengers dzieli się na dwa obozy, a konflikt ideologii, lojalności i odpowiedzialności staje się fundamentem przyszłej ery MCU.",
        },
        {
          title: "Doctor Strange",
          description:
            "Neurochirurg po wypadku odkrywa tajemnicze moce mistyczne i staje się obrońcą rzeczywistości przed złem z innych wymiarów.",
        },
        {
          title: "Guardians of the Galaxy Vol. 2",
          description:
            "Nowa przygoda kosmiczna, w której rodzina, współczucie i prawdziwe więzi okazują się równie ważne co moc.",
        },
        {
          title: "Spider-Man: Homecoming",
          description:
            "Młody Peter Parker musi pogodzić szkolne życie z obowiązkami nadchodzącego bohatera, próbując dojrzewać pod presją.",
        },
        {
          title: "Thor: Ragnarok",
          description:
            "Thor staje przed śmiertelną zagrożeniem, która zmusza go do walki o własny świat i własną tożsamość.",
        },
        {
          title: "Black Panther",
          description:
            "Królestwo Wakandy ujawnia swoją moc i kulturę, a T'Challa musi podjąć wyzwanie polityczne i militarne dla całego świata.",
        },
        {
          title: "Avengers: Infinity War",
          description:
            "Największy konflikt w MCU, w którym bohaterowie stają wobec Thanos i tragedii, która zmienia całe uniwersum.",
        },
        {
          title: "Ant-Man and the Wasp",
          description:
            "Po wydarzeniach wielkiej wojny bohaterowie wracają do swojej historii, by stawić czoła nowym wyzwaniom i niebezpieczeństwom.",
        },
        {
          title: "Captain Marvel",
          description:
            "Kryptonimowa wojowniczka z kosmosu zyskuje swoje miejsce w historii MCU, w trakcie wielkiego przełomu galaktycznej skali.",
        },
        {
          title: "Avengers: Endgame",
          description:
            "Finale wielkiej epoki MCU, w którym bohaterowie stawiają ostatnią walkę o przyszłość świata i całego uniwersum.",
        },
        {
          title: "Spider-Man: Far From Home",
          description:
            "Po wielkich wydarzeniach bohaterowie wracają do codzienności, ale nowa tajemnicza niebezpieczeństwo zmusza Petera do kolejnej wielkiej próby.",
        },
      ],
    },
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
          title: "Pół Wieku Poezji Później",
          description:
            "Niezależny film fanowski osadzony w uniwersum Wiedźmina, skupiający się na losach Jaskra po wydarzeniach znanych z sagi. Historia opowiada o próbie odbicia porwanej czarodziejki oraz o tym, jak legenda Geralta z Rivii wciąż wpływa na świat i ludzi wiele lat później. Produkcja łączy przygodę, humor i melancholię, będąc jednocześnie hołdem dla twórczości Andrzeja Sapkowskiego.",
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
      title: "Assassin's Creed",
      parts: [
        {
          title: "Assassin's Creed (2016)",
          description:
            "Film aktorski osadzony w uniwersum Assassin’s Creed, w którym Callum Lynch zostaje zmuszony do korzystania z technologii Animusa, by przeżyć wspomnienia swojego przodka, Aguilara de Nerhy. Akcja przenosi widza do XV-wiecznej Hiszpanii, gdzie Asasyni walczą z Templariuszami o kontrolę nad Jabłkiem Edenu. Produkcja łączy współczesny wątek sci-fi z historycznym konfliktem o wolność i kontrolę nad ludzkością.",
        },
        {
          title: "Assassin's Creed: Embers",
          description:
            "Krótkometrażowa animacja będąca epilogiem historii Ezio Auditore. Ukazuje jego spokojne życie na wsi we Włoszech po zakończeniu wieloletniej walki jako Mistrz Asasynów. Gdy pojawia się tajemnicza chińska asasynka Shao Jun, Ezio musi po raz ostatni zmierzyć się z cieniem swojej przeszłości. To melancholijna opowieść o przemijaniu, dziedzictwie i tym, że nawet legendy są tylko ludźmi.",
        },
      ],
    },
    {
      title: "Jak Wytresować Smoka",
      parts: [
        {
          title: "Jak Wytresować Smoka",
          description:
            "Pierwsza część serii, opowiadająca o przyjaźni młodego Wikinga Hiccup’a z niebezpiecznym smokiem Bezzębkiem.",
        },
        {
          title: "Prezent Nocnej Furii",
          description:
            "Krótkometrażowa świąteczna opowieść osadzona po wydarzeniach pierwszego filmu. Podczas wikińskiego święta smoków wszystkie stworzenia niespodziewanie odlatują, a Czkawka i Astrid próbują odkryć powód ich tajemniczego zniknięcia. To ciepła historia o więzi między ludźmi i smokami oraz o tym, że czasem trzeba pozwolić komuś odejść.",
        },
        {
          title: "Legenda o Smoku Gnatochrupie",
          description:
            "Humorystyczna krótka animacja skupiająca się na Pyskaczu i jego obsesji na punkcie legendarnego Smoka Gnatochrupa. Gdy tajemnicze wydarzenia zaczynają przypominać starą opowieść, bohaterowie muszą zmierzyć się z własnymi lękami i wyobraźnią. Lekka, komediowa historia bawiąca się smokowymi mitami.",
        },
        {
          title: "Księga Smoków",
          description:
            "Specjalny odcinek stylizowany na dokument, w którym Czkawka, Astrid i ich przyjaciele prezentują znane gatunki smoków z Berk. To rozszerzenie wiedzy o świecie serii – pełne ciekawostek, humoru i charakterystycznych komentarzy bohaterów.",
        },
        {
          title: "Świt Jeźdźców Smoków",
          description:
            "Krótki film będący pomostem między pierwszą a drugą częścią serii. Pokazuje początki organizacji Jeźdźców Smoków i pierwsze wspólne misje Czkawki oraz jego przyjaciół, gdy uczą się współpracować ze swoimi smokami w nowych, niebezpiecznych sytuacjach.",
        },
        {
          title: "Jak Wytresować Smoka 2",
          description:
            "Hiccup i Bezzębny kontynuują swoje przygody, odkrywając nowe krainy i wyzwania w świecie smoków.",
        },
        {
          title: "Jak Wytresować Smoka 3",
          description:
            "Finałowa część serii animowanej, w której Hiccup staje przed ostatecznym wyborem dotyczącym świata ludzi i smoków.",
        },

        {
          title: "Święta w Domu",
          description:
            "Świąteczna krótkometrażowa animacja rozgrywająca się po wydarzeniach trzeciego filmu. Mieszkańcy Berk próbują odnaleźć ducha dawnych tradycji, a Czkawka zastanawia się, jak podtrzymać pamięć o smokach w świecie, w którym już ich nie ma. Ciepła i nostalgiczna historia o rodzinie i tęsknocie.",
        },
        {
          title: "Jak Wytresować Smoka Remake",
          description:
            "Nowa wersja pierwszego filmu, zaktualizowana pod względem animacji i efektów wizualnych.",
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
          title: "Sherlock Holmes Gra Cieni",
          description:
            "Kontynuacja przygód Holmesa, w której staje do walki z arcywrogiem, profesor Moriartym, w serii inteligentnych zagadek i intryg.",
        },
        {
          title: "Holmes i Watson",
          description:
            "Komediowa interpretacja przygód Sherlocka Holmesa i doktora Watsona, pełna humoru i absurdalnych sytuacji.",
        },
        {
          title: "Enola Holmes",
          description:
            "Film skupiający się na młodszej siostrze Sherlocka, Enoli, która wyrusza na własną przygodę detektywistyczną, odkrywając tajemnice rodziny i Londynu.",
        },
        {
          title: "Enola Holmes 2",
          description:
            "Kontynuacja przygód Enoli, w której młoda detektyw staje przed nowymi wyzwaniami i zagadkami, rozwijając swoje umiejętności i odkrywając kolejne sekrety Londynu.",
        },
        {
          title: "Enola Holmes 3",
          description:
            "Trzecia część przygód Enoli, w której młoda detektyw mierzy się z jeszcze bardziej skomplikowanymi zagadkami i niebezpieczeństwami, rozwijając swoją niezależność i zdolności detektywistyczne.",
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
          title: "Pingwiny z Madagaskaru: Misja świąteczna",
          description:
            "Krótkometrażowa animacja, w której pingwiny odkrywają, że jeden z niedźwiedzi polarnych w zoo nie otrzymał prezentu. Postanawiają wyruszyć na tajną misję ratunkową do centrum handlowego, co kończy się typowym dla nich chaosem i komedią sytuacyjną.",
        },
        {
          title: "Część 1",
          description:
            "Pierwsza część serii, w której grupa zwierząt z nowojorskiego zoo przypadkowo trafia na wyspę Madagaskar i próbuje odnaleźć się w dzikiej przyrodzie.",
        },
        {
          title: "Madagwiazdka",
          description:
            "Świąteczny specjal, w którym zwierzęta z Madagaskaru próbują przywrócić Mikołajowi pamięć po wypadku sani. Alex, Marty, Gloria i Melman przejmują obowiązki świątecznej dostawy prezentów, zamieniając Wigilię w serię absurdalnych przygód.",
        },
        {
          title: "Część 2",
          description:
            "Kontynuacja przygód zwierząt, które próbują wrócić do domu, napotykając nowe wyzwania i wrogów.",
        },
        {
          title: "Zakochany Madagaskar",
          description:
            "Walentynkowy odcinek specjalny, w którym bohaterowie mierzą się z tematyką miłości. Od romantycznych nieporozumień po zabawne próby zdobycia serca wybranki – każdy z bohaterów przeżywa własną, komiczną historię uczuciową.",
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
          title: "Kung Fu Panda",
          description:
            "Połączenie komedii i akcji, w którym niezdarny panda Po staje się wybranym wojownikiem kung fu.",
        },
        {
          title: "Sekrety Potężnej Piątki",
          description:
            "Krótkometrażowy film animowany, w którym Mistrz Shifu opowiada Po historie o młodości Tygrysicy, Małpy, Żurawia, Modliszki i Żmii. Każde z nich musiało pokonać własne słabości, zanim stało się legendarnym wojownikiem kung fu. Opowieść podkreśla, że prawdziwa siła rodzi się z charakteru, nie z talentu.",
        },
        {
          title: "Święta, święta i Po",
          description:
            "Świąteczny specjal, w którym Po musi pogodzić obowiązki Smoczego Wojownika z rodzinną tradycją przygotowywania świątecznej uczty w restauracji pana Pinga. Ciepła historia o równowadze między obowiązkiem a rodziną.",
        },
        {
          title: "Kung Fu Panda 2",
          description:
            "Po kontynuuje swoją podróż jako wojownik, stawiając czoła nowemu zagrożeniu dla Doliny Pokoju.",
        },
        {
          title: "Kung Fu Panda: Sekrety Mistrzów",
          description:
            "Krótka animacja przedstawiająca historię trzech legendarnych mistrzów kung fu: Thundering Rhino, Storming Ox i Croc. Młody Shifu uczy się od nich, czym jest prawdziwe bohaterstwo i odpowiedzialność wojownika.",
        },
        {
          title: "Kung Fu Panda: Tajemnice zwoju",
          description:
            "Specjalny odcinek ukazujący alternatywną wersję wydarzeń, w której to nie Po zostaje Smoczym Wojownikiem. Historia w humorystyczny sposób pokazuje, że przeznaczenie może wyglądać inaczej, ale odwaga i determinacja są kluczowe.",
        },
        {
          title: "Kung Fu Panda 3",
          description:
            "Po odkrywa swoją prawdziwą tożsamość i łączy siły z ojcem oraz nowymi przyjaciółmi, aby pokonać wroga.",
        },
        {
          title: "Panda Paws",
          description:
            "Krótkometrażowa animacja skupiająca się na Po i jego codziennych, często komicznych zmaganiach jako Smoczy Wojownik. Pokazuje lżejszą stronę jego treningu i życia w Dolinie Pokoju.",
        },
        {
          title: "Kung Fu Panda 4",
          description:
            "Najnowsza część serii, w której Po staje przed nowymi wyzwaniami, w tym potężnym przeciwnikiem z przeszłości kung fu.",
        },
        {
          title: "Dueling Dumplings",
          description:
            "Krótki film przedstawiający młodego Po i jego relację z panem Pingiem. Historia skupia się na ich przyjacielskiej rywalizacji przy gotowaniu klusek, ukazując początki marzeń Po i jego miłość do jedzenia oraz kung fu.",
        },
      ],
    },
    { title: "LEGO Ninjago Film (2017)" },
    {
      title: "Death Note",
      parts: [
        {
          title: "Death Note (2006)",
          description:
            "Pierwszy japoński film live-action, w którym Light Yagami znajduje notes śmierci i zaczyna igrać z ideą sprawiedliwości.",
        },
        {
          title: "Death Note: The Last Name (2006)",
          description:
            "Kontynuacja, która rozwija konflikt między Lightem a L i pokazuje konsekwencje działania notatnika śmierci.",
        },
        {
          title: "L: Change the WorLd (2008)",
          description:
            "Spin-off skupiający się na L i jego ostatniej misji, w której pojawiają się dylematy moralne i emocjonalne.",
        },
        {
          title: "Death Note (2017)",
          description:
            "Amerykańska adaptacja, która przenosi historię do nowej, bardziej zachodniej interpretacji motywu prawa do sądu nad ludźmi.",
        },
        {
          title: "Death Note: Light Up the New World (2017)",
          description:
            "Następca, w którym nowa generacja użytkowników noteśnika śmierci stara się przejąć władzę nad losem innych.",
        },
        {
          title: "Death Note: Relight 1: Visions of a God",
          description:
            "Anime-recap przedstawiający pierwszą część historii i jej najważniejsze momenty w mocniejszym, emocjonalnym skrócie.",
        },
        {
          title: "Death Note: Relight 2: L's Successors",
          description:
            "Drugi anime-recap skupiający się na dalszym rozwoju spisku i losach następców L.",
        },
      ],
    },
    { title: "Avatar: Ostatni Władca Wiatru" },
    { title: "Herkules" },
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
          title: "Wojny klonów",
          description:
            "Animowany film kinowy będący wprowadzeniem do serialu „Wojny klonów”. Akcja rozgrywa się podczas konfliktu między Republiką a Separatystami. Obi-Wan Kenobi i Anakin Skywalker otrzymują misję uratowania porwanego syna Jabby Hutta, co ma kluczowe znaczenie dla strategicznych szlaków w galaktyce. Film przedstawia także Ahsokę Tano, młodą padawankę Anakina, i ukazuje jego rolę jako mentora w czasie trwającej wojny.",
        },
        {
          title: "Zemsta Sithów",
          description:
            "Trzeci epizod prequeli, ukazujący upadek Anakina i przejście na ciemną stronę jako Darth Vader.",
        },
        {
          title: "Han Solo",
          description:
            "Film przedstawiający młodość Hana Solo i jego drogę od ulicznego kombinatora do jednego z najbardziej znanych przemytników galaktyki. Historia ukazuje jego pierwsze spotkanie z Chewbaccą, zdobycie Sokoła Millennium oraz relację z Lando Calrissianem. To przygodowa opowieść o ryzyku, lojalności i narodzinach legendy.",
        },
        {
          title: "Łotr 1",
          description:
            "Samodzielna historia osadzona tuż przed wydarzeniami „Nowej Nadziei”. Grupa rebeliantów pod dowództwem Jyn Erso podejmuje desperacką misję wykradzenia planów Gwiazdy Śmierci, potężnej broni Imperium. Film pokazuje bardziej wojenny i dramatyczny ton uniwersum, skupiając się na poświęceniu i cenie nadziei w walce z tyranią.",
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
          title: "Kung Fu Panda",
          description:
            "Połączenie komedii i akcji, w którym niezdarny panda Po staje się wybranym wojownikiem kung fu.",
        },
        {
          title: "Sekrety Potężnej Piątki",
          description:
            "Krótkometrażowy film animowany, w którym Mistrz Shifu opowiada Po historie o młodości Tygrysicy, Małpy, Żurawia, Modliszki i Żmii. Każde z nich musiało pokonać własne słabości, zanim stało się legendarnym wojownikiem kung fu. Opowieść podkreśla, że prawdziwa siła rodzi się z charakteru, nie z talentu.",
        },
        {
          title: "Święta, święta i Po",
          description:
            "Świąteczny specjal, w którym Po musi pogodzić obowiązki Smoczego Wojownika z rodzinną tradycją przygotowywania świątecznej uczty w restauracji pana Pinga. Ciepła historia o równowadze między obowiązkiem a rodziną.",
        },
        {
          title: "Kung Fu Panda 2",
          description:
            "Po kontynuuje swoją podróż jako wojownik, stawiając czoła nowemu zagrożeniu dla Doliny Pokoju.",
        },
        {
          title: "Kung Fu Panda: Sekrety Mistrzów",
          description:
            "Krótka animacja przedstawiająca historię trzech legendarnych mistrzów kung fu: Thundering Rhino, Storming Ox i Croc. Młody Shifu uczy się od nich, czym jest prawdziwe bohaterstwo i odpowiedzialność wojownika.",
        },
        {
          title: "Kung Fu Panda: Tajemnice zwoju",
          description:
            "Specjalny odcinek ukazujący alternatywną wersję wydarzeń, w której to nie Po zostaje Smoczym Wojownikiem. Historia w humorystyczny sposób pokazuje, że przeznaczenie może wyglądać inaczej, ale odwaga i determinacja są kluczowe.",
        },
        {
          title: "Kung Fu Panda 3",
          description:
            "Po odkrywa swoją prawdziwą tożsamość i łączy siły z ojcem oraz nowymi przyjaciółmi, aby pokonać wroga.",
        },
        {
          title: "Panda Paws",
          description:
            "Krótkometrażowa animacja skupiająca się na Po i jego codziennych, często komicznych zmaganiach jako Smoczy Wojownik. Pokazuje lżejszą stronę jego treningu i życia w Dolinie Pokoju.",
        },
        {
          title: "Kung Fu Panda 4",
          description:
            "Najnowsza część serii, w której Po staje przed nowymi wyzwaniami, w tym potężnym przeciwnikiem z przeszłości kung fu.",
        },
        {
          title: "Dueling Dumplings",
          description:
            "Krótki film przedstawiający młodego Po i jego relację z panem Pingiem. Historia skupia się na ich przyjacielskiej rywalizacji przy gotowaniu klusek, ukazując początki marzeń Po i jego miłość do jedzenia oraz kung fu.",
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
    {
      title: "Death Note",
      parts: [
        {
          title: "Death Note (2006)",
          description:
            "Pierwszy japoński film live-action, w którym Light Yagami znajduje notes śmierci i zaczyna igrać z ideą sprawiedliwości.",
        },
        {
          title: "Death Note: The Last Name (2006)",
          description:
            "Kontynuacja, która rozwija konflikt między Lightem a L i pokazuje konsekwencje działania notatnika śmierci.",
        },
        {
          title: "L: Change the WorLd (2008)",
          description:
            "Spin-off skupiający się na L i jego ostatniej misji, w której pojawiają się dylematy moralne i emocjonalne.",
        },
        {
          title: "Death Note (2017)",
          description:
            "Amerykańska adaptacja, która przenosi historię do nowej, bardziej zachodniej interpretacji motywu prawa do sądu nad ludźmi.",
        },
        {
          title: "Death Note: Light Up the New World (2017)",
          description:
            "Następca, w którym nowa generacja użytkowników noteśnika śmierci stara się przejąć władzę nad losem innych.",
        },
        {
          title: "Death Note: Relight 1: Visions of a God",
          description:
            "Anime-recap przedstawiający pierwszą część historii i jej najważniejsze momenty w mocniejszym, emocjonalnym skrócie.",
        },
        {
          title: "Death Note: Relight 2: L's Successors",
          description:
            "Drugi anime-recap skupiający się na dalszym rozwoju spisku i losach następców L.",
        },
      ],
    },
    { title: "Avatar: Ostatni Władca Wiatru" },
    {
      title: "White Snake",
      description: "",
      parts: [{ title: "White Snake" }, { title: "Green Snake" }],
    },
    { title: "Creation of the Gods I: Kingdom of Storms" },
    { title: "Painted Skin" },
    {
      title: "The Wandering Earth",
      parts: [
        {
          title: "The Wandering Earth",
          description:
            "Film science-fiction opowiadający o ludzkości próbującej uratować Ziemię przed zbliżającą się katastrofą kosmiczną poprzez wstrząsający plan wykonania niezbędnej podróży po układzie słonecznym.",
        },
        {
          title: "The Wandering Earth 2",
          description:
            "Kontynuacja opowieści o globalnym wysiłku ludzkości, która stawia nowych bohaterów i większe zagrożenia przed decyzjami o przetrwaniu planety i przyszłości całej cywilizacji.",
        },
      ],
    },
  ],

  "Boska Komedia": {
    "Piekło Lista A": [
      { title: "L'Inferno" },
      { title: "Dante's Inferno: An Animated Epic" },
      { title: "Behemoth" },
      { title: "Heretyk" },
      { title: "Trylogia Dana Browna" },
      { title: "Norymberga" },
      { title: "Czas Apokalipsy" },
      { title: "Ręką Dantego" },
      { title: "Constantine" },
    ],

    "Piekło Lista B": [
      { title: "L'Inferno" },
      { title: "Dante's Inferno: An Animated Epic" },
      { title: "Backrooms: Bez wyjścia" },
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
      {
        title: "Death Note",
        parts: [
          { title: "Death Note (2006)" },
          { title: "Death Note: The Last Name (2006)" },
          { title: "L: Change the WorLd (2008)" },
          { title: "Death Note (2017)" },
          { title: "Death Note: Light Up the New World (2017)" },
          { title: "Death Note: Relight 1: Visions of a God" },
          { title: "Death Note: Relight 2: L's Successors" },
        ],
      },
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
            title: "Pół Wieku Poezji Później",
            description:
              "Niezależny film fanowski osadzony w uniwersum Wiedźmina, skupiający się na losach Jaskra po wydarzeniach znanych z sagi. Historia opowiada o próbie odbicia porwanej czarodziejki oraz o tym, jak legenda Geralta z Rivii wciąż wpływa na świat i ludzi wiele lat później. Produkcja łączy przygodę, humor i melancholię, będąc jednocześnie hołdem dla twórczości Andrzeja Sapkowskiego.",
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
            title: "Prezent Nocnej Furii",
            description:
              "Krótkometrażowa świąteczna opowieść osadzona po wydarzeniach pierwszego filmu. Podczas wikińskiego święta smoków wszystkie stworzenia niespodziewanie odlatują, a Czkawka i Astrid próbują odkryć powód ich tajemniczego zniknięcia. To ciepła historia o więzi między ludźmi i smokami oraz o tym, że czasem trzeba pozwolić komuś odejść.",
          },
          {
            title: "Legenda o Smoku Gnatochrupie",
            description:
              "Humorystyczna krótka animacja skupiająca się na Pyskaczu i jego obsesji na punkcie legendarnego Smoka Gnatochrupa. Gdy tajemnicze wydarzenia zaczynają przypominać starą opowieść, bohaterowie muszą zmierzyć się z własnymi lękami i wyobraźnią. Lekka, komediowa historia bawiąca się smokowymi mitami.",
          },
          {
            title: "Księga Smoków",
            description:
              "Specjalny odcinek stylizowany na dokument, w którym Czkawka, Astrid i ich przyjaciele prezentują znane gatunki smoków z Berk. To rozszerzenie wiedzy o świecie serii – pełne ciekawostek, humoru i charakterystycznych komentarzy bohaterów.",
          },
          {
            title: "Świt Jeźdźców Smoków",
            description:
              "Krótki film będący pomostem między pierwszą a drugą częścią serii. Pokazuje początki organizacji Jeźdźców Smoków i pierwsze wspólne misje Czkawki oraz jego przyjaciół, gdy uczą się współpracować ze swoimi smokami w nowych, niebezpiecznych sytuacjach.",
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
            title: "Święta w Domu",
            description:
              "Świąteczna krótkometrażowa animacja rozgrywająca się po wydarzeniach trzeciego filmu. Mieszkańcy Berk próbują odnaleźć ducha dawnych tradycji, a Czkawka zastanawia się, jak podtrzymać pamięć o smokach w świecie, w którym już ich nie ma. Ciepła i nostalgiczna historia o rodzinie i tęsknocie.",
          },
          {
            title: "Remake",
            description:
              "Nowa wersja pierwszego filmu, zaktualizowana pod względem animacji i efektów wizualnych.",
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
            title: "Sherlock Holmes Gra Cieni",
            description:
              "Kontynuacja przygód Holmesa, w której staje do walki z arcywrogiem, profesor Moriartym, w serii inteligentnych zagadek i intryg.",
          },
          {
            title: "Holmes i Watson",
            description:
              "Komediowa interpretacja przygód Sherlocka Holmesa i doktora Watsona, pełna humoru i absurdalnych sytuacji.",
          },
          {
            title: "Enola Holmes",
            description:
              "Film skupiający się na młodszej siostrze Sherlocka, Enoli, która wyrusza na własną przygodę detektywistyczną, odkrywając tajemnice rodziny i Londynu.",
          },
          {
            title: "Enola Holmes 2",
            description:
              "Kontynuacja przygód Enoli, w której młoda detektyw staje przed nowymi wyzwaniami i zagadkami, rozwijając swoje umiejętności i odkrywając kolejne sekrety Londynu.",
          },
          {
            title: "Enola Holmes 3",
            description:
              "Trzecia część przygód Enoli, w której młoda detektyw mierzy się z jeszcze bardziej skomplikowanymi zagadkami i niebezpieczeństwami, rozwijając swoją niezależność i zdolności detektywistyczne.",
          },
        ],
      },
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
        title: "Wizarding World",
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
          {
            title: "Fantastyczne zwierzęta i jak je znaleźć",
            description:
              "Historia magizoologa Newta Scamandera, który przybywa do Nowego Jorku z walizką pełną magicznych stworzeń.",
          },
          {
            title: "Fantastyczne zwierzęta: Zbrodnie Grindelwalda",
            description:
              "Grindelwald ucieka z niewoli i zaczyna otwarcie gromadzić zwolenników, głosząc ideę dominacji czarodziejów nad niemagicznymi.",
          },
          {
            title: "Fantastyczne zwierzęta: Tajemnice Dumbledore’a",
            description:
              "Dumbledore organizuje grupę czarodziejów i czarownic, by przeciwstawić się rosnącej potędze Grindelwalda.",
          },
        ],
      },
      { title: "Wiking" },
      {
        title: "Assassin's Creed",
        parts: [
          {
            title: "Assassin's Creed (2016)",
            description:
              "Film aktorski osadzony w uniwersum Assassin’s Creed, w którym Callum Lynch zostaje zmuszony do korzystania z technologii Animusa, by przeżyć wspomnienia swojego przodka, Aguilara de Nerhy. Akcja przenosi widza do XV-wiecznej Hiszpanii, gdzie Asasyni walczą z Templariuszami o kontrolę nad Jabłkiem Edenu. Produkcja łączy współczesny wątek sci-fi z historycznym konfliktem o wolność i kontrolę nad ludzkością.",
          },
          {
            title: "Assassin's Creed: Embers",
            description:
              "Krótkometrażowa animacja będąca epilogiem historii Ezio Auditore. Ukazuje jego spokojne życie na wsi we Włoszech po zakończeniu wieloletniej walki jako Mistrz Asasynów. Gdy pojawia się tajemnicza chińska asasynka Shao Jun, Ezio musi po raz ostatni zmierzyć się z cieniem swojej przeszłości. To melancholijna opowieść o przemijaniu, dziedzictwie i tym, że nawet legendy są tylko ludźmi.",
          },
        ],
      },
    ],

    Niebo: [
      { title: "Między piekłem a niebem" },
      { title: "Małpi Król" },
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
      { title: "Odyseja" },
      { title: "Sokrates" },
      { title: "Pasja" },

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
      {
        title: "Marvel Cinematic Universe",
        parts: [
          {
            title: "Iron Man",
            description:
              "Film wprowadzający Tony'ego Starka i świat Marvela, który rozpoczyna epokę superbohaterskich przygód w MCU.",
          },
          {
            title: "The Incredible Hulk",
            description:
              "Historia Bruce'a Bannera, który próbuje kontrolować swoje mutacyjne moce i uciekać przed wojskowym i naukowym zagrożeniem.",
          },
          {
            title: "Iron Man 2",
            description:
              "Tony Stark mierzy się z konsekwencjami swojej sławy, rosnącą presją oraz nowym zagrożeniem dla świata technologii.",
          },
          {
            title: "Thor",
            description:
              "Prywatna historia boga piorunów, który musi zmierzyć się z własnym ego, losem i wyzwaniem poza Asgardem.",
          },
          {
            title: "Captain America: The First Avenger",
            description:
              "Przygoda Steve'a Rogersa, który przechodzi przez niezwykły program wojskowy i staje się bohaterem wojny światowej.",
          },
          {
            title: "The Avengers",
            description:
              "Połączenie największych bohaterów Marvela w jedną drużynę, która musi powstrzymać kosmiczne zagrożenie.",
          },
          {
            title: "Iron Man 3",
            description:
              "Po traumatycznych doświadczeniach Tony Stark musi stawić czoła własnym lękom i nowemu niebezpieczeństwu, które grozi światu.",
          },
          {
            title: "Thor: The Dark World",
            description:
              "Thor wraca do walki z ciemną mocą, która zagraża zarówno Asgardowi, jak i światu ludzi.",
          },
          {
            title: "Captain America: The Winter Soldier",
            description:
              "Steve Rogers odkrywa spisek w strukturach bezpieczeństwa i musi bronić swoich ideałów przed zdradą z wewnątrz.",
          },
          {
            title: "Guardians of the Galaxy",
            description:
              "Kosmiczna przygoda pełna humoru, muzyki i niezwykłych postaci, które zyskują wspólne przeznaczenie.",
          },
          {
            title: "Avengers: Age of Ultron",
            description:
              "Nadorganizacja pojawia się nowy, groźniejszy wróg, a bohaterowie muszą stawić czoła konsekwencjom własnej wielkiej siły.",
          },
          {
            title: "Ant-Man",
            description:
              "Złodziej dzięki eksperymentowi z kurczeniem się staje się bohaterem, który musi ratować świat w niezwykle nietypowy sposób.",
          },
          {
            title: "Captain America: Civil War",
            description:
              "Drużyna Avengers dzieli się na dwa obozy, a konflikt ideologii, lojalności i odpowiedzialności staje się fundamentem przyszłej ery MCU.",
          },
          {
            title: "Doctor Strange",
            description:
              "Neurochirurg po wypadku odkrywa tajemnicze moce mistyczne i staje się obrońcą rzeczywistości przed złem z innych wymiarów.",
          },
          {
            title: "Guardians of the Galaxy Vol. 2",
            description:
              "Nowa przygoda kosmiczna, w której rodzina, współczucie i prawdziwe więzi okazują się równie ważne co moc.",
          },
          {
            title: "Spider-Man: Homecoming",
            description:
              "Młody Peter Parker musi pogodzić szkolne życie z obowiązkami nadchodzącego bohatera, próbując dojrzewać pod presją.",
          },
          {
            title: "Thor: Ragnarok",
            description:
              "Thor staje przed śmiertelną zagrożenią, która zmusza go do walki o własny świat i własną tożsamość.",
          },
          {
            title: "Black Panther",
            description:
              "Królestwo Wakandy ujawnia swoją moc i kulturę, a T'Challa musi podjąć wyzwanie polityczne i militarne dla całego świata.",
          },
          {
            title: "Avengers: Infinity War",
            description:
              "Największy konflikt w MCU, w którym bohaterowie stają wobec Thanos i tragedii, która zmienia całe uniwersum.",
          },
          {
            title: "Ant-Man and the Wasp",
            description:
              "Po wydarzeniach wielkiej wojny bohaterowie wracają do swojej historii, by stawić czoła nowym wyzwaniom i niebezpieczeństwom.",
          },
          {
            title: "Captain Marvel",
            description:
              "Kryptonimowa wojowniczka z kosmosu zyskuje swoje miejsce w historii MCU, w trakcie wielkiego przełomu galaktycznej skali.",
          },
          {
            title: "Avengers: Endgame",
            description:
              "Finale wielkiej epoki MCU, w którym bohaterowie stawiają ostatnią walkę o przyszłość świata i całego uniwersum.",
          },
          {
            title: "Spider-Man: Far From Home",
            description:
              "Po wielkich wydarzeniach bohaterowie wracają do codzienności, ale nowa tajemnicza niebezpieczeństwo zmusza Petera do kolejnej wielkiej próby.",
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
            title: "Wojny klonów",
            description:
              "Animowany film kinowy będący wprowadzeniem do serialu „Wojny klonów”. Akcja rozgrywa się podczas konfliktu między Republiką a Separatystami. Obi-Wan Kenobi i Anakin Skywalker otrzymują misję uratowania porwanego syna Jabby Hutta, co ma kluczowe znaczenie dla strategicznych szlaków w galaktyce. Film przedstawia także Ahsokę Tano, młodą padawankę Anakina, i ukazuje jego rolę jako mentora w czasie trwającej wojny.",
          },
          {
            title: "Zemsta Sithów",
            description:
              "Trzeci epizod prequeli, ukazujący upadek Anakina i przejście na ciemną stronę jako Darth Vader.",
          },
          {
            title: "Han Solo",
            description:
              "Film przedstawiający młodość Hana Solo i jego drogę od ulicznego kombinatora do jednego z najbardziej znanych przemytników galaktyki. Historia ukazuje jego pierwsze spotkanie z Chewbaccą, zdobycie Sokoła Millennium oraz relację z Lando Calrissianem. To przygodowa opowieść o ryzyku, lojalności i narodzinach legendy.",
          },
          {
            title: "Łotr 1",
            description:
              "Samodzielna historia osadzona tuż przed wydarzeniami „Nowej Nadziei”. Grupa rebeliantów pod dowództwem Jyn Erso podejmuje desperacką misję wykradzenia planów Gwiazdy Śmierci, potężnej broni Imperium. Film pokazuje bardziej wojenny i dramatyczny ton uniwersum, skupiając się na poświęceniu i cenie nadziei w walce z tyranią.",
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
          title: "Pół Wieku Poezji Później",
          description:
            "Niezależny film fanowski osadzony w uniwersum Wiedźmina, skupiający się na losach Jaskra po wydarzeniach znanych z sagi. Historia opowiada o próbie odbicia porwanej czarodziejki oraz o tym, jak legenda Geralta z Rivii wciąż wpływa na świat i ludzi wiele lat później. Produkcja łączy przygodę, humor i melancholię, będąc jednocześnie hołdem dla twórczości Andrzeja Sapkowskiego.",
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
      title: "Assassin's Creed",
      parts: [
        {
          title: "Assassin's Creed (2016)",
          description:
            "Film aktorski osadzony w uniwersum Assassin’s Creed, w którym Callum Lynch zostaje zmuszony do korzystania z technologii Animusa, by przeżyć wspomnienia swojego przodka, Aguilara de Nerhy. Akcja przenosi widza do XV-wiecznej Hiszpanii, gdzie Asasyni walczą z Templariuszami o kontrolę nad Jabłkiem Edenu. Produkcja łączy współczesny wątek sci-fi z historycznym konfliktem o wolność i kontrolę nad ludzkością.",
        },
        {
          title: "Assassin's Creed: Embers",
          description:
            "Krótkometrażowa animacja będąca epilogiem historii Ezio Auditore. Ukazuje jego spokojne życie na wsi we Włoszech po zakończeniu wieloletniej walki jako Mistrz Asasynów. Gdy pojawia się tajemnicza chińska asasynka Shao Jun, Ezio musi po raz ostatni zmierzyć się z cieniem swojej przeszłości. To melancholijna opowieść o przemijaniu, dziedzictwie i tym, że nawet legendy są tylko ludźmi.",
        },
      ],
    },
    { title: "El Camino" },
    {
      title: "Death Note",
      parts: [
        { title: "Death Note (2006)" },
        { title: "Death Note: The Last Name (2006)" },
        { title: "L: Change the WorLd (2008)" },
        { title: "Death Note (2017)" },
        { title: "Death Note: Light Up the New World (2017)" },
        { title: "Death Note: Relight 1: Visions of a God" },
        { title: "Death Note: Relight 2: L's Successors" },
      ],
    },
    { title: "Constantine" },
    { title: "Pasja" },
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
          title: "Wojny klonów",
          description:
            "Animowany film kinowy będący wprowadzeniem do serialu „Wojny klonów”. Akcja rozgrywa się podczas konfliktu między Republiką a Separatystami. Obi-Wan Kenobi i Anakin Skywalker otrzymują misję uratowania porwanego syna Jabby Hutta, co ma kluczowe znaczenie dla strategicznych szlaków w galaktyce. Film przedstawia także Ahsokę Tano, młodą padawankę Anakina, i ukazuje jego rolę jako mentora w czasie trwającej wojny.",
        },
        {
          title: "Zemsta Sithów",
          description:
            "Trzeci epizod prequeli, ukazujący upadek Anakina i przejście na ciemną stronę jako Darth Vader.",
        },
        {
          title: "Han Solo",
          description:
            "Film przedstawiający młodość Hana Solo i jego drogę od ulicznego kombinatora do jednego z najbardziej znanych przemytników galaktyki. Historia ukazuje jego pierwsze spotkanie z Chewbaccą, zdobycie Sokoła Millennium oraz relację z Lando Calrissianem. To przygodowa opowieść o ryzyku, lojalności i narodzinach legendy.",
        },
        {
          title: "Łotr 1",
          description:
            "Samodzielna historia osadzona tuż przed wydarzeniami „Nowej Nadziei”. Grupa rebeliantów pod dowództwem Jyn Erso podejmuje desperacką misję wykradzenia planów Gwiazdy Śmierci, potężnej broni Imperium. Film pokazuje bardziej wojenny i dramatyczny ton uniwersum, skupiając się na poświęceniu i cenie nadziei w walce z tyranią.",
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
    { title: "Między piekłem a niebem" },
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
    {
      title: "Adam Miauczyński",
      parts: [
        {
          title: "Dzień Świra",
          description:
            "Nauczyciel zmagający się z frustracją, samotnością i absurdami dnia codziennego stopniowo popada w coraz większą irytację.",
        },
        {
          title: "Wszyscy jesteśmy Chrystusami",
          description:
            "Historia walki z alkoholizmem i prób naprawy relacji między ojcem a synem.",
        },
      ],
    },
    { title: "Menu" },
    { title: "Kot w butach: Ostatnie życzenie" },
    { title: "Coco" },
    { title: "Idiokracja" },
    { title: "Backrooms: Bez wyjścia" },
  ],
  IPiN: [
    {
      title: "Jak Wytresować Smoka",
      parts: [
        {
          title: "Jak Wytresować Smoka",
          description:
            "Pierwsza część serii, opowiadająca o przyjaźni młodego Wikinga Hiccup’a z niebezpiecznym smokiem Bezzębkiem.",
        },
        {
          title: "Jak Wytresować Smoka 2",
          description:
            "Hiccup i Bezzębny kontynuują swoje przygody, odkrywając nowe krainy i wyzwania w świecie smoków.",
        },
      ],
    },
    {
      title: "Kung Fu Panda",
      parts: [
        {
          title: "Kung Fu Panda",
          description:
            "Połączenie komedii i akcji, w którym niezdarny panda Po staje się wybranym wojownikiem kung fu.",
        },
        {
          title: "Kung Fu Panda 2",
          description:
            "Po kontynuuje swoją podróż jako wojownik, stawiając czoła nowemu zagrożeniu dla Doliny Pokoju.",
        },
        {
          title: "Kung Fu Panda 3",
          description:
            "Po odkrywa swoją prawdziwą tożsamość i łączy siły z ojcem oraz nowymi przyjaciółmi, aby pokonać wroga.",
        },
      ],
    },
    { title: "Spirited Away: W Krainie Bogów" },
    {
      title: "Adam Miauczyński",
      parts: [
        {
          title: "Dzień Świra",
          description:
            "Nauczyciel zmagający się z frustracją, samotnością i absurdami dnia codziennego stopniowo popada w coraz większą irytację.",
        },
        {
          title: "Wszyscy jesteśmy Chrystusami",
          description:
            "Historia walki z alkoholizmem i prób naprawy relacji między ojcem a synem.",
        },
      ],
    },
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
    {
      title: "TED",
      parts: [
        {
          title: "TED ",
          description:
            "Ted walczy w sądzie o uznanie go za osobę, udowadniając, że nawet pluszowy miś może mieć prawa.",
        },
        {
          title: "TED 2",
          description:
            "Ted walczy w sądzie o uznanie go za osobę, udowadniając, że nawet pluszowy miś może mieć prawa.",
        },
      ],
    },
    { title: "Milion sposobów, jak zginąć na Zachodzie" },
    { title: "Mustang z Dzikiej Doliny" },
    { title: "Egzorcyzmy Siostry Ann" },
  ],
  "Maraton 1": {
    "Wizard City": [
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
    ],
    "Krokotopia - Dragonspyre": [
      { title: "Norymberga" },
      { title: "Behemoth" },
    ],
    Marleybone: [
      {
        title: "Sherlock Holmes",
        parts: [
          {
            title: "Sherlock Holmes",
            description:
              "Film wprowadzający genialnego detektywa Sherlocka Holmesa i jego pierwsze konfrontacje z przestępczym światem Londynu.",
          },
          {
            title: "Sherlock Holmes Gra Cieni",
            description:
              "Kontynuacja przygód Holmesa, w której staje do walki z arcywrogiem, profesor Moriartym, w serii inteligentnych zagadek i intryg.",
          },
        ],
      },
    ],
    Mooshu: [{ title: "Raya i Ostatni Smok" }, { title: "Małpi Król" }],
    "Dragonspyre - Celestia": [
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
  },
  "Maraton 2": {
    Marleybone: [{ title: "Lalka" }, { title: "Pan Wilk i Spółka" }],
    Mooshu: [
      {
        title: "Kung Fu Panda",
        parts: [
          {
            title: "Kung Fu Panda",
            description:
              "Połączenie komedii i akcji, w którym niezdarny panda Po staje się wybranym wojownikiem kung fu.",
          },
          {
            title: "Sekrety Potężnej Piątki",
            description:
              "Krótkometrażowy film animowany, w którym Mistrz Shifu opowiada Po historie o młodości Tygrysicy, Małpy, Żurawia, Modliszki i Żmii. Każde z nich musiało pokonać własne słabości, zanim stało się legendarnym wojownikiem kung fu. Opowieść podkreśla, że prawdziwa siła rodzi się z charakteru, nie z talentu.",
          },
          {
            title: "Święta, święta i Po",
            description:
              "Świąteczny specjal, w którym Po musi pogodzić obowiązki Smoczego Wojownika z rodzinną tradycją przygotowywania świątecznej uczty w restauracji pana Pinga. Ciepła historia o równowadze między obowiązkiem a rodziną.",
          },
          {
            title: "Kung Fu Panda 2",
            description:
              "Po kontynuuje swoją podróż jako wojownik, stawiając czoła nowemu zagrożeniu dla Doliny Pokoju.",
          },
          {
            title: "Kung Fu Panda: Sekrety Mistrzów",
            description:
              "Krótka animacja przedstawiająca historię trzech legendarnych mistrzów kung fu: Thundering Rhino, Storming Ox i Croc. Młody Shifu uczy się od nich, czym jest prawdziwe bohaterstwo i odpowiedzialność wojownika.",
          },
          {
            title: "Kung Fu Panda: Tajemnice zwoju",
            description:
              "Specjalny odcinek ukazujący alternatywną wersję wydarzeń, w której to nie Po zostaje Smoczym Wojownikiem. Historia w humorystyczny sposób pokazuje, że przeznaczenie może wyglądać inaczej, ale odwaga i determinacja są kluczowe.",
          },
          {
            title: "Kung Fu Panda 3",
            description:
              "Po odkrywa swoją prawdziwą tożsamość i łączy siły z ojcem oraz nowymi przyjaciółmi, aby pokonać wroga.",
          },
          {
            title: "Panda Paws",
            description:
              "Krótkometrażowa animacja skupiająca się na Po i jego codziennych, często komicznych zmaganiach jako Smoczy Wojownik. Pokazuje lżejszą stronę jego treningu i życia w Dolinie Pokoju.",
          },
          {
            title: "Kung Fu Panda 4",
            description:
              "Najnowsza część serii, w której Po staje przed nowymi wyzwaniami, w tym potężnym przeciwnikiem z przeszłości kung fu.",
          },
          {
            title: "Dueling Dumplings",
            description:
              "Krótki film przedstawiający młodego Po i jego relację z panem Pingiem. Historia skupia się na ich przyjacielskiej rywalizacji przy gotowaniu klusek, ukazując początki marzeń Po i jego miłość do jedzenia oraz kung fu.",
          },
        ],
      },
      { title: "Rower z Pekinu" },
    ],
    Dragonspyre: [{ title: "Ręką Dantego" }, { title: "Constantine" }],
    Grizzleheim: [
      { title: "Wiking" },
      {
        title: "Jak Wytresować Smoka",
        parts: [
          {
            title: "Jak Wytresować Smoka",
            description:
              "Pierwsza część serii, opowiadająca o przyjaźni młodego Wikinga Hiccup’a z niebezpiecznym smokiem Bezzębkiem.",
          },
          {
            title: "Prezent Nocnej Furii",
            description:
              "Krótkometrażowa świąteczna opowieść osadzona po wydarzeniach pierwszego filmu. Podczas wikińskiego święta smoków wszystkie stworzenia niespodziewanie odlatują, a Czkawka i Astrid próbują odkryć powód ich tajemniczego zniknięcia. To ciepła historia o więzi między ludźmi i smokami oraz o tym, że czasem trzeba pozwolić komuś odejść.",
          },
          {
            title: "Legenda o Smoku Gnatochrupie",
            description:
              "Humorystyczna krótka animacja skupiająca się na Pyskaczu i jego obsesji na punkcie legendarnego Smoka Gnatochrupa. Gdy tajemnicze wydarzenia zaczynają przypominać starą opowieść, bohaterowie muszą zmierzyć się z własnymi lękami i wyobraźnią. Lekka, komediowa historia bawiąca się smokowymi mitami.",
          },
          {
            title: "Księga Smoków",
            description:
              "Specjalny odcinek stylizowany na dokument, w którym Czkawka, Astrid i ich przyjaciele prezentują znane gatunki smoków z Berk. To rozszerzenie wiedzy o świecie serii – pełne ciekawostek, humoru i charakterystycznych komentarzy bohaterów.",
          },
          {
            title: "Świt Jeźdźców Smoków",
            description:
              "Krótki film będący pomostem między pierwszą a drugą częścią serii. Pokazuje początki organizacji Jeźdźców Smoków i pierwsze wspólne misje Czkawki oraz jego przyjaciół, gdy uczą się współpracować ze swoimi smokami w nowych, niebezpiecznych sytuacjach.",
          },
          {
            title: "Jak Wytresować Smoka 2",
            description:
              "Hiccup i Bezzębny kontynuują swoje przygody, odkrywając nowe krainy i wyzwania w świecie smoków.",
          },
          {
            title: "Jak Wytresować Smoka 3",
            description:
              "Finałowa część serii animowanej, w której Hiccup staje przed ostatecznym wyborem dotyczącym świata ludzi i smoków.",
          },
          {
            title: "Święta w Domu",
            description:
              "Świąteczna krótkometrażowa animacja rozgrywająca się po wydarzeniach trzeciego filmu. Mieszkańcy Berk próbują odnaleźć ducha dawnych tradycji, a Czkawka zastanawia się, jak podtrzymać pamięć o smokach w świecie, w którym już ich nie ma. Ciepła i nostalgiczna historia o rodzinie i tęsknocie.",
          },
          {
            title: "Jak Wytresować Smoka Remake",
            description:
              "Nowa wersja pierwszego filmu, zaktualizowana pod względem animacji i efektów wizualnych.",
          },
        ],
      },
    ],
    Aquila: [
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
      { title: "Sokrates" },
    ],
    Celestia: [
      {
        title: "The Wandering Earth",
        parts: [
          {
            title: "The Wandering Earth",
            description:
              "Film science-fiction opowiadający o ludzkości próbującej uratować Ziemię przed zbliżającą się katastrofą kosmiczną poprzez wstrząsający plan wykonania niezbędnej podróży po układzie słonecznym.",
          },
          {
            title: "The Wandering Earth 2",
            description:
              "Kontynuacja opowieści o globalnym wysiłku ludzkości, która stawia nowych bohaterów i większe zagrożenia przed decyzjami o przetrwaniu planety i przyszłości całej cywilizacji.",
          },
        ],
      },
      { title: "Project Hail Mary" },
    ],
    Zafaria: [{ title: "Pasja" }, { title: "Mowgli: Legenda Dżungli" }],
    Avalon: [
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
      { title: "Jack Pogromca Olbrzymów" },
    ],
  },
  HTTYD: [
    {
      title: "Jak Wytresować Smoka",
      parts: [
        {
          title: "Jak Wytresować Smoka",
          description:
            "Pierwsza część serii, opowiadająca o przyjaźni młodego Wikinga Hiccup’a z niebezpiecznym smokiem Bezzębkiem.",
        },
        {
          title: "Prezent Nocnej Furii",
          description:
            "Krótkometrażowa świąteczna opowieść osadzona po wydarzeniach pierwszego filmu. Podczas wikińskiego święta smoków wszystkie stworzenia niespodziewanie odlatują, a Czkawka i Astrid próbują odkryć powód ich tajemniczego zniknięcia. To ciepła historia o więzi między ludźmi i smokami oraz o tym, że czasem trzeba pozwolić komuś odejść.",
        },
        {
          title: "Legenda o Smoku Gnatochrupie",
          description:
            "Humorystyczna krótka animacja skupiająca się na Pyskaczu i jego obsesji na punkcie legendarnego Smoka Gnatochrupa. Gdy tajemnicze wydarzenia zaczynają przypominać starą opowieść, bohaterowie muszą zmierzyć się z własnymi lękami i wyobraźnią. Lekka, komediowa historia bawiąca się smokowymi mitami.",
        },
        {
          title: "Księga Smoków",
          description:
            "Specjalny odcinek stylizowany na dokument, w którym Czkawka, Astrid i ich przyjaciele prezentują znane gatunki smoków z Berk. To rozszerzenie wiedzy o świecie serii – pełne ciekawostek, humoru i charakterystycznych komentarzy bohaterów.",
        },
        {
          title: "Świt Jeźdźców Smoków",
          description:
            "Krótki film będący pomostem między pierwszą a drugą częścią serii. Pokazuje początki organizacji Jeźdźców Smoków i pierwsze wspólne misje Czkawki oraz jego przyjaciół, gdy uczą się współpracować ze swoimi smokami w nowych, niebezpiecznych sytuacjach.",
        },
        {
          title: "Jak Wytresować Smoka 2",
          description:
            "Hiccup i Bezzębny kontynuują swoje przygody, odkrywając nowe krainy i wyzwania w świecie smoków.",
        },
        {
          title: "Jak Wytresować Smoka 3",
          description:
            "Finałowa część serii animowanej, w której Hiccup staje przed ostatecznym wyborem dotyczącym świata ludzi i smoków.",
        },

        {
          title: "Święta w Domu",
          description:
            "Świąteczna krótkometrażowa animacja rozgrywająca się po wydarzeniach trzeciego filmu. Mieszkańcy Berk próbują odnaleźć ducha dawnych tradycji, a Czkawka zastanawia się, jak podtrzymać pamięć o smokach w świecie, w którym już ich nie ma. Ciepła i nostalgiczna historia o rodzinie i tęsknocie.",
        },
        {
          title: "Jak Wytresować Smoka Remake",
          description:
            "Nowa wersja pierwszego filmu, zaktualizowana pod względem animacji i efektów wizualnych.",
        },
      ],
    },
  ],
  Polskie: [
    {
      title: "Wiedźmin",
      parts: [
        {
          title: "Wiedźmin (2001)",
          description:
            "Pierwszy film adaptujący sagę o Geralcie z Rivii, przedstawiający jego przygody w świecie pełnym potworów i intryg.",
        },
      ],
    },
    {
      title: "Lalka",
    },
    {
      title: "Sala Samobójców",
      parts: [
        {
          title: "Sala Samobójców",
          description:
            "Polski film o młodych ludziach zmagających się z agresją, pustką i własnymi demonami w współczesnym świecie.",
        },
        {
          title: "Sala Samobójców: Hejter",
          description:
            "Kontynuacja, która pogłębia wątki buntu, tożsamości i destrukcyjnych wzorców współczesnej kultury.",
        },
      ],
    },
    {
      title: "Zemsta",
      parts: [
        {
          title: "Zemsta",
          description:
            "Polski film o konsekwencjach odwetu, honorze i emocjonalnym rozdarciu po wywołanym konflikcie.",
        },
      ],
    },
    {
      title: "Adam Miauczyński",
      parts: [
        {
          title: "Dzień Świra",
          description:
            "Nauczyciel zmagający się z frustracją, samotnością i absurdami dnia codziennego stopniowo popada w coraz większą irytację.",
        },
        {
          title: "Wszyscy jesteśmy Chrystusami",
          description:
            "Historia walki z alkoholizmem i prób naprawy relacji między ojcem a synem.",
        },
      ],
    },
    {
      title: "Pieprzyć Mickiewicza",
      parts: [
        { title: "Część 1", description: "" },
        { title: "Część 2", description: "" },
        { title: "Część 3", description: "" },
      ],
    },
    {
      title: "U Pana Boga",
      parts: [
        { title: "U Pana Boga za piecem ", description: "" },
        { title: "U Pana Boga w ogródku", description: "" },
        { title: "U Pana Boga za miedzą", description: "" },
        { title: "U Pana Boga w Królowym Moście", description: "" },
      ],
    },
  ],
};

const alphabeticalMovieCategories = [
  "Gry",
  "Seriale",
  "Chiny",
  "Filosofia",
  "IPiN",
  "Polskie",
  "Maraton 2",
];

const normalizeGenericMovieParts = (entryMap) => {
  Object.values(entryMap).forEach((categoryItems) => {
    if (!Array.isArray(categoryItems)) return;

    categoryItems.forEach((series) => {
      if (!series || !Array.isArray(series.parts)) return;

      series.parts = series.parts.map((part) => {
        if (!part || typeof part.title !== "string") return part;

        const genericMatch = part.title.match(
          /^(?:Część|Part|Chapter|Episode|#)\s*(\d+)(?:\s*[:\-–]?\s*(.*))?$/i,
        );
        if (!genericMatch) return part;

        const partNumber = Number(genericMatch[1]);
        const subtitle = (genericMatch[2] || "").trim();
        const seriesTitle = series.title?.trim();

        if (!seriesTitle) return part;

        if (subtitle) {
          return {
            ...part,
            title:
              partNumber === 1
                ? `${seriesTitle}: ${subtitle}`
                : `${seriesTitle} ${partNumber}: ${subtitle}`,
          };
        }

        return {
          ...part,
          title:
            partNumber === 1 ? seriesTitle : `${seriesTitle} ${partNumber}`,
        };
      });
    });
  });
};

normalizeGenericMovieParts(movies);

alphabeticalMovieCategories.forEach((category) => {
  if (Array.isArray(movies[category])) {
    movies[category].sort((a, b) => {
      const aTitle = a?.title ?? "";
      const bTitle = b?.title ?? "";
      return aTitle.localeCompare(bTitle, "pl", { sensitivity: "base" });
    });
  }
});

export default movies;
