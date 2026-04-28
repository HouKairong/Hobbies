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
    {
      title: "Opowieści ze świata Wiedźmina",
      description:
        "Antologia opowiadań autorstwa pisarzy rosyjskich i ukraińskich osadzonych w świecie Wiedźmina albo nim inspirowanych",
      stories: [
        {
          title: "Ballada o smoku",
          description:
            "Historia podróżującego po świecie Jaskra. W poszukiwaniu natchnienia trafia do miasta, które podpisało umowę ze smokiem, dzięki czemu rozwija się turystyka. Zgodnie ze swą łatwo pakującą się w kłopoty osobowością, trubadur w którymś momencie podróży naraża się pewnemu lokajowi wysoko urodzonej damy. Przed zemstą kamerdynera broni go jednak niedawno poznany znajomy, czeladnik rusznikarza o imieniu Raido, który wkrótce zaoferuje swą pomoc w dotarciu do smoka. Okazuje się bowiem, że pilnująca przejścia smocza straż nie ma zamiaru dopuścić Jaskra do wizytacji ze względu na podejrzane dla nich motywacje minstrela. Potrzeba napisania ballady jest zbyt paląca aby odpuścić, dlatego Raido proponuje zrobić okrążenie i dojść do leża od strony zbocza. Na miejscu wychodzi na jaw, że w Dżaksie wcale nie ma smoka, a dochodzące do uszu odległe porykiwania są jedynie imitacją produkowaną przez prowizorycznie skonstruowaną maszynę. Przyglądając się sprytnej mistyfikacji, dwójka intruzów zostaje przyłapana przez samozwańczych rycerzy smoka, będących w istocie zwykłymi bandziorami żerującymi na śmiałkach pragnących zmierzyć się z majestatycznym gadem. Wtedy właśnie Raido zdradza swą prawdziwą tożsamość i przyznaje, że jako zaklinacz zwierząt szuka idealnego legowiska dla prawdziwego smoka, którego ma akurat pod opieką. Bez względu na to jak nieprawdopodobnie to brzmi, rzecz okazuje się prawdziwa, kiedy agresywni bandyci zostają spaleni żywcem przez zjawiającego się znikąd skrzydlatego stwora. W ten oto sposób smok znajduje nowy dom, Jaskier inspirację do ballady, a Raido sposobność do tego, aby dać ludności Dżaksu możliwość ożywienia miejskiej legendy zanim ten ruszy w dalszą drogę w poszukiwaniu kolejnych stworzeń do odprowadzenia.",
        },
        {
          title: "Barwy braterstwa (z cyklu Wiedźmin z Wielkiego Kijowa)",
          description:
            "Geraltowi ostatnimi czasy nie wiedzie się najlepiej. Już od miesiąca włóczy się po Wielkim Kijowie nie mogąc znaleźć dla siebie odpowiedniego zajęcia. Po kolejnej spędzonej nocy pod mostem, praca nieoczekiwanie przychodzi do niego sama: bajkerzy z klanu „Gacka” szukają wiedźmina do ochrony organizowanego przez nich festiwalu motocyklowego. Skuszony atrakcyjnymi warunkami oraz perspektywą łatwej pracy, Geralt podpisuje kontrakt i już wkrótce melduje się na obiekcie. Przez pierwsze dwa dni impreza przebiega bez większych przeszkód. Geralt spędza całe dnie na patrolowaniu terenu oraz biesiadowaniu z pozostałymi uczestnikami, w tym przede wszystkim starymi znajomymi z kompanii Volvo, którzy zostali najęci do polowania na zdziczałe maszyny. Dobra passa skończyła się ostatniego dnia zlotu, kiedy wreszcie pojawił się trup. Znana w środowisku bajkerów persona, niejaki Technik z Humania, został znaleziony we własnym namiocie z poderżniętym gardłem. Wiedźmin zostaje zaangażowany w śledztwo. Po krótkich oględzinach materiałów dowodowych oraz miejsca zdarzenia okazuje się, że narzędziem zbrodni jest programowany zdalnie robot bojowy „Hajdamak 7”. Ze względu na rozładowaną baterię modułu, nie sposób jednak określić kto nadawał sygnał. Czekając aż robot ponownie zacznie działać, Geralt wychodzi z powrotem na pole z nadzieją określenia potencjalnego kręgu podejrzanych, albowiem wieści o zabójstwie już całkiem zdążyły się rozejść. Jeden z członków grupy Volvo wprowadza go w reguły jakimi rządzą się motocyklowe gangi i na podstawie tej wiedzy staje się jasne, że podejrzenie w pierwszej kolejności pada na „Kruki” - bajkerów z konkurencyjnego klanu. Motyw wydaje się oczywisty: dopuszczenie do rozlewu krwi podczas festiwalu oznacza pogwałcenie międzyklanowych zasad, a w konsekwencji kompromitację organizatora. Kiedy Geralt nagle zostaje wezwany do kwatery dowiaduje się jednak, że to on jest głównym podejrzanym, ponieważ nadajnik sterujący robotem został znaleziony w jego plecaku. Gdyby nie przezorność wiedźmina, łatwe wydawałoby się zlecenie mogłoby się skończyć dla niego więzieniem. Na szczęście zamontowana przez niego w pokoju ukryta kamera pozwala zdemaskować prawdziwych sprawców morderstwa. Winnymi zbrodni okazuje się Gaston, a także jego dwaj siepacze, Tramp i Kudłaty. Razem z ostatnim dniem imprezy kończy się wiedźmiński kontrakt. Dzięki odkryciu Geralta relacje między klanami „Gacków” oraz „Kruków” ocieplają się, a za szczególnie dobrze wykonaną pracę wiedźmin zostaje honorowym członkiem obu klanów, dostając od nich nie tylko barwy, ale i motocykl.",
        },
        {
          title: "Jednooki Orfeusz",
          description:
            "W Novigradzie organizowany jest właśnie konkurs poetycki, którego główna nagroda wynosi trzy tysiące dukatów. Nie śmierdząc groszem, Geralt i Jaskier postanawiają zarobkowo upiec dwie pieczenie na jednym ogniu, ponieważ w jednej ze wsi pod miastem pojawiło się także zlecenie na potwora. Rychło okazało się jednak, że z opłatą za przekroczenie bram miejskich będzie problem. Biały Wilk jeszcze nigdy wcześniej nie miał okazji walczyć z iżycą, dlatego nie mógł podejrzewać, że dziwaczny stwór ma tendencję dosłownie utylizować samego siebie. Po bestii z Marchwiowego Lasu nie pozostało niemal ani śladu. Nie mogąc przedstawić dowodów na zabicie potwora, przewrotny sołtys nie zgadza się zapłacić za zlecenie. Cała praca idzie na marne, a głód i chłód zagląda w oczy bohaterom. Zdesperowany Jaskier postanawia popytać po karczmach zamurza o możliwość zarobku. Okazja trafia się szybko, aczkolwiek miejsce rozgrzewkowego koncertu nie należy ani do przyjemnych, ani do bezpiecznych. Geraltowi z kolei nie uchodzi uwadze osobliwy widok powozów i furmanek licznie zaparkowanych pod karczmą tak niskiej renomy. Ich przeznaczenie miało wyjawić się zaraz po ostatnim koncercie konkursu poetyckiego, na którym wystąpi nieznany do niedawna trubadur, szybko pnący się jednak po drabinie popularności. Iście zagadkowy fenomen Jednookiego Orfeusza dotarł także do Jaskra zmartwionego wówczas obserwacją, że grafomański ponoć przybłęda zdołał zawładnąć sercem nawet Essi Daven. Podczas wystąpienia szybko wychodzi na jaw, że niezwykłość Orfeusza wcale nie wynikała z jego talentu, lecz będącego częścią instrumentarium magicznej piszczałki zdolnej hipnotyzować całe tłumy. W ten sposób Pompejusz Smyk okazuje się być zwykłym oszustem planującym - niczym szczurołap - wyprowadzić mieszkańców Novigradu poza miasto, podczas gdy jego banda urzędująca w karczmie bez skrępowania plądrować będzie opuszczone przybytki. Nieszczęściu zapobiega posiadający zwiększoną odporność na uroki wiedźmin. Wyrwawszy z rąk szczurołapa magiczny instrument, masowa hipnoza wiodącą ludność Wolnego Miasta na zatracenie zostaje przerwana. Chociaż złoczyńców szybko udaje się pojmać i ukarać, to niestety skąpstwo miejscowych władz nie zna granic. Miast pieniężnej nagrody, Geraltowi zaoferowano możliwość wzięcia bezprocentowego kredytu. Zrezygnowany wiedźmin oraz Jaskier opuszczają bogaty Novigrad, nie zarobiwszy  tam żadnego realnego grosza.",
        },
        {
          title: "Lutnia, i to wszystko",
          description:
            "Essi Daven wychodzi za mąż. Nie z miłości, lecz z rozsądku. Nie chcąc prowadzić dłużej wędrowniczego trybu życia, postanawia wyjść za nie młodego już mistrza cechowego, niejakiego Holma. Czekając na cintryjskiej plaży z Jaskrem na przypływ swego oblubieńca, bohaterowie nie zdają sobie sprawy, że nilfgaardzki holk wiezie ze sobą śmiertelny ładunek - straszliwą chorobę dżumy. Przygotowania do ślubu trwają. Tymczasem Jaskier, który zobowiązał się wzbogacić uroczystość swym występem, spotyka w „Niebieskim Kogucie” dawną znajomą w osobie Toruviel. Trubadur postanawia podjąć początkującego minstrela porządną gościną i rozmową. Nazajutrz Jaskier odprowadza elfkę do portu, a podczas załatwiania spraw na mieście staje się jednym z pierwszych, którzy zdają sobie sprawę z rozprzestrzeniającej się epidemii. Powziąwszy zamiar ucieczki z miasta, wpada po Essi Daven. Poetka nie ma pojęcia co się dzieje i opiera się, tracąc cenny czas na ucieczkę. Dopiero narastający na zewnątrz chaos oraz błyskawicznie postępująca choroba jej narzeczonego dają jej do zrozumienia, że pora uciekać. Na mieście jest czarno od dymu wskutek przypadkowych pożarów oraz rozpaczliwych prób powstrzymania ognisk zarazy. Zaczyna się desperacka gonitwa w kierunku bram miejskich, podczas której bohaterowie doświadczają moralnych dylematów, uciekają przed maruderami, czy trawiącą miasto pożogą. W końcu Essi opada z sił i staje się jasne, że ona również jest zarażona. Jaskier zabiera ją do szpitala, lecz obecna tam Iola ani Rusty nie są w stanie nic zdziałać. Oczko staje się kolejną ofiarą Catriony. Spełniając jej ostatnią wolę, trubadur chowa przyjaciółkę w lesie za miastem. Podczas pogrzebu niespodziewanie dołącza do niego Toruviel, której nie udało się ewakuować z Cintry. Snując plany na dalszą przyszłość, Jaskier wspomina ostatni koncert na straceńczym balecie pijanej młodzieży, jaki spontanicznie dał razem z Essi, tuż przed tym jak zasłabła. Przekonany tym doświadczeniem, minstrele postanawiają założyć elficko-ludzki duet i od tego momentu występować przed publicznością w nowej formie.",
        },
        {
          title: "Zawsze jesteśmy odpowiedzialni za tych, którzy...",
          description:
            "Cała akcja dzieje się między wyjściem z mieszkania, a powrotem. Poproszony o wyrzucenie śmieci, pogrążony w rozmyślaniach Geralt zostaje zaczepiony przez potwora. Jeden z ostatnich na świecie przedstawicieli szmaroglotów nie kryje przed byłym wiedźminem żalu i pretensji o to, że z powodu dawnej popularności Geralta namnożyło się na świecie mnóstwo jego amatorskich naśladowców. Widząc natarczywość stwora, Geralt za pomocą samego pojemnika obciążonego cegłą unieszkodliwia szmaroglota, dzwoni na służby aby zabrali ciało, po czym wraca do domu, do Yennefer.",
        },
        {
          title: "Wesoły, niewinny i bez serca",
          description:
            "Od zakończenia II Wojny Północnej mija kilkaset lat. Ludzkość wkracza w erę wielkich odkryć geograficznych, ujawniają się nowe kraje, powstają nowe frakcje. Odbywa się nawet druga Koniunkcja Sfer, która ze względu na zaburzony przebieg, zostawia pewną część świata niestabilną, nieprzewidywalną i kompletnie niezdatną do funkcjonowania dla ludzi. Oprócz tego życie toczy się normalnie, ale świat nadal potrzebuje wiedźminów. Tak właśnie w którymś punkcie czasowym tej nowej ery, jeden z nich o imieniu Stefan zarabia na życie eskortując statki Kompanii Fabiolskiej. Ostatniego rejsu jednak nie dane mu dokończyć, albowiem wiedźmin staje się obiektem zainteresowania piratów słynnego „Ślepego Brendana”, którzy szantażem zmuszają Żurawia do zmiany pracodawcy. Piraci mają zamiar przeprawić się się bowiem przez Morze Szalone, aby rozprawić się z tajemniczym zagrożeniem mieszkającym na konkretnej wyspie. Ten plan jednak na długo pozostaje utajony przed wiedźminem, ponieważ - jak sam odkrywa podczas rejsu - duża część załogi odnosi się do niego z nieufnością. Sytuacji nie poprawia również fakt, że ktoś dopuścił się sabotażu niszcząc uzbrojenie statku. Wszyscy obawiają się bowiem nieuchwytnego Kukułka - przebiegłego agenta siejącego prawdziwe spustoszenie wśród pirackiej braci. W końcu Żuraw łączy poszlaki: chłopiec widziany między starciem z morskimi potworami, a uszkodzeniem dział nie należy do załogi Brendana. Odsuwając od siebie podejrzenia bycia Kukułkiem, Żuraw zyskuje zaufanie kapitana Ahavela i skłania go do odkrycia kart. Okazuje się, że załoga Brendana, zwąca samych siebie rycerzami, od jakiegoś czasu jest na tropie niezwykle tajemniczych zaginięć, których od czterdziestu lat padają przede wszystkim nieletni chłopcy. Wśród rycerzy Brendana nie ma bez mała nikogo, kto by nie został dotknięty tą tragedią osobiście, co tłumaczy determinację piratów w zapuszczaniu się na tak niebezpieczną wyprawę. Wiedźmin zaś jest im tak naprawdę potrzebny do unicestwienia stwora porywającego te wszystkie dzieci, a który ponoć potrafi latać i ma być nieczuły na żadną znaną człowiekowi broń. Wielorybnik jest jednak zdania, że posiadany przez niego legendarny Manuskrypt Krakena dostarczy odpowiedzi na pytanie jak unieszkodliwić potwora. Niestety, jedyny członek załogi zdolny do końca odszyfrować tajemniczy dokument przepadł jak kamień w wodę. Utrata lingwistki nie unieważnia w żaden sposób postawionego celu, tak jakby Ahavel przeczuwał, że elementy układanki jeszcze zdążą się ułożyć. Ślepy Brendan dobija do brzegu poszukiwanej wyspy, po czym załoga jest dzielona na trzy części. Jedna grupa zostaje w obozie na plaży, druga pilnuje statku, a z trzeciej uformowana zostaje ekspedycja mająca zbadać wyspę. W jej skład wchodzi m.in. kapitan Ahavel, wiedźmin oraz stary czerdiański sędzia, od którego wzięła się nazwa statku. Udając się w głąb wyspy piraci odkrywają opuszczony prowizoryczny fort, pełny jednak rozmaitych dziecięcych „skarbów” i przedmiotów codziennego użytku. Oglądając stosy zabawek załoganci uświadamiają sobie, że wszystkie ich pociechy rzeczywiście sprowadzane zostają na tę jedną wyspę. Tymczasem ujawniają się losy Mojry, która również znajduje się na tej samej wyspie. Uczona poznaje, że latającym potworem jest około trzynastoletni chłopiec o imieniu Peter, którym kierują na przemian tylko dwa pragnienia: przeżywanie coraz to nowych przygód oraz chęć wyrównania rachunków ze swoim starszym bratem. Uczyniona wbrew woli mamą Wolnych Chłopaków, Mojra próbuje wpłynąć na Petera, jednocześnie odkrywając mroczną stronę jego natury. Nie zgadzając się na okrutny los tych zabiedzonych dzieci, Mojra postanawia uciec. Nieobecny w tym czasie Peter zajęty jest zwalczaniem intruzów. Dzięki jego nadnaturalnym umiejętnościom piraci z Brendana oraz z obozu na wybrzeżu zostają wybici do nogi. Dopiero wtedy Wielorybnik decyduje się odkryć przed Stefanem oraz resztą ostateczną prawdę: Peter jest jego młodszym bratem, który z powodu zaburzonego rytuału Manuskryptu stał się wampirem pożywiającym się cieniami innych. Kiedy tajemnica zostaje ujawniona, wreszcie dochodzi do ostatecznej konfrontacji. Pałający zemstą Peter wyzywa swego brata na pojedynek, obwiniając go o kradzież wspomnień. Wiedząc, że taki stan rzeczy związany jest z brakiem cienia, Stefanowi pod otoczką sprawiedliwości udaje się namówić wampira na ponowienie rytuału Manuskryptu, na którym poświęcone zostają cząstki cieni Mojry, pirata Roderigo oraz samego Stefana. Nakarmienie Petera sprawia, że ten nie jest już więcej nieśmiertelny, dzięki czemu walka staje się wyrównana. Mimo swej postury Peter zwycięża Ahavela, lecz zanim zadaje bratu ostateczny cios, nagle coś się w nim zmienia. Chłopiec wpada w rozpacz, lecz od popełnienia samobójstwa powstrzymuje go wiedźmin. Okazuje się, że w propozycji Stefana był ukryty motyw. Poznając się zawczasu, że słynnym Kukułkiem jest również Peter, wiedźmin wpadł na pomysł nakarmienia chłopca wspomnieniami popełnionych przez niego zbrodni, ale widzianych z perspektywy innych osób. Tak oto również ujawnia się mistrzowski plan Żurawia, którego głównym celem pływania na kompanijnych statkach było właśnie dopaść Kukułka. Sprawa zostaje ostatecznie doprowadzona do końca. Peter odzyskuje swoje człowieczeństwo i zostaje ułaskawiony przez rycerzy Brendana, a Mojra, pozostałe przy życiu dzieci oraz reszta załogi zabierają się do przygotowań opuszczenia wyspy. ",
        },
        {
          title: "Okupanci",
          description:
            "Polska, rok 1981. Czas głębokiego kryzysu społeczno-politycznego, związanego z narastającym niezadowoleniem społecznym, trudną sytuacją gospodarczą i napięciami między władzą komunistyczną a ruchem opozycyjnym, zwłaszcza „Solidarnością”. Na około pół roku przed wprowadzeniem przez Jaruzelskiego stanu wojennego, z Charkowa do Legnicy zostaje przysłany młody rekrut, mający odbyć na okupowanej ziemi swą obowiązkową, zasadniczą służbę wojskową. Półtora roku służby mija bez większych przygód, chociaż w koszarach ciągle żywe są opowieści o częstych spotkaniach z przedziwnymi legendarnymi stworzeniami. Chłopak z Charkowa, czyli bohater tej opowieści, który w tym czasie zdążył awansować na młodszego sierżanta, sam widział niejedno. W końcu, w listopadzie 1982 roku, sierżant razem ze swą drużyną w ramach przydzielonego mu zadania ląduje w podlegnickim lesie. Kolejny dzień spędzony na realizowaniu kaprysów przełożonych kończy się jednak inaczej niż zaplanowano - po żołnierzy czekających na odbiór w umówionym punkcie nikt się nie zjawia. Pozostawieni samym sobie w szczerym polu, uzbrojeni jedynie w łopaty, głodni i zziębnięci, zastanawiają się co robić dalej. Kiedy jeden z żołdaków z przerażeniem melduje o widzianych w lesie potworach staje się jasne, że rozkładanie obozu nie wchodzi w grę. Sierżant daje rozkaz do wymarszu. Mając w planach dojść piechotą do jakichkolwiek opłotków cywilizacji, zbłąkani żołnierze nieoczekiwanie wpadają w niewolę polskich bojowników, po czym zostają odprowadzeni do ukrytego na bagnach zamku, okupowanego przez pewnego właściciela ziemskiego oraz łowcy potworów zwanego Drwalem. Tam, zanim radziecki żołnierz zostaje wypuszczony na wolność, staje się świadkiem awantury wprost nie z tego świata. Okazuje się bowiem, że w piwnicach zamku trzymane są istoty zwane Leśnymi, a w obrębie samej konstrukcji znajduje się portal do krainy, z której pochodzą te wszystkie widziane wokół Legnicy stworzenia. Co więcej, każda nowa władza od dziesiątek lat pertraktuje z Leśnymi, umożliwiając im egzystencję po ziemskiej stronie wymiaru w zamian za różne korzyści, nierzadko prześcigając się w swych propozycjach. Tak dzieje się i tym razem: polskie władze komunistyczne, działając za plecami moskiewskiego nadzoru, postanawiają przebić ofertę konkurentów i chcą zaoferować przybyszom terytoria ziem śląskich. Drwal z kolei oraz jego poplecznicy od lat starają się zwalczać obce rasy, nie kryjąc wrogości również do Leśnych, których podejrzewają o ukryte motywacje wobec świata ludzi. Dlatego kiedy łowcy dowiadują się o zamiarach władzy, postanawiają udaremnić negocjacje. Dochodzi do burzliwej dyskusji, która kończy się jednak bezowocnie - każda ze stron musi zrezygnować ze swych planów co do Wrót, ponieważ i tak wszystko się wydało: do akcji wkracza zawsze dobrze poinformowana Armia Czerwona, dokonując szturmu Diabelskiej Krainy.",
        },
        {
          title: "Gry na serio",
          description:
            "Czwórka użytkowników sieci po raz kolejny loguje się do wirtualnego świata „Sapkowia”, obejmującego wiedźmińskie uniwersum, i tworzy drużynę składającą się z jednostek o różnorodnej profesji. Tym razem rozgrywka toczy się dwadzieścia lat po Wielkiej Wojnie, a głównym celem bohaterów jest odnalezienie zaginionych graczy, którzy zbyt mocno zatracili się w wirtualnym świecie. Mają również nadzieję skonfrontować się z tajemniczym artefaktem, który ponoć ma zdolność tworzenia nowych podsystemów — czegoś w rodzaju gry w grze, a nawet oddziaływać na świat rzeczywisty. Pod postacią przyjętych awatarów drużyna przemierza Sodden, zanurzając się coraz głębiej w otaczającą ich kreację. W końcu czwórka natrafia w karczmie na ślad jednego z zaginionych, w osobie soddeńskiego barona Kroach as-Sotera, będącego w trakcie sporu z dwoma rycerzami Białej Róży. Zaimponowany popisem upokorzenia, jakie bohaterowie zafundowali natarczywym zakonnikom, baron zabiera ich do siebie na zamek. Tam, podczas hulanki, elficki mag Angus ep Erdill wyciąga od barona intrygującą informację o jego tajemniczym znalezisku na zamku Kaer Loc, które przywiózł ze sobą do domu. Poznaje także specyficznego doktora nauk, usiłującego udowodnić swoją tezę o pierwszeństwie ludzi jako gatunku, który zaistniał na Kontynencie podczas Koniunkcji Sfer. Pomimo początkowego zamiaru wyjścia z gry, jak tylko odnajdą ślad zaginionych, bohaterowie sami coraz bardziej wsiąkają w fabułę i odczuwają ogromny opór przed wycofaniem się. Wykorzystując późną porę oraz czas biesiady, grupa wślizguje się do podziemi zamku celem rozejrzenia się za osobą, którą z Toussaint przywiózł ze sobą baron. Tam wkraczają w sam środek walki między bobołakami, zakonnikami Borlachów oraz świtą Kroacha. Wzięty żywcem, jeden z napastników zdradza, że głównym motywem ataku było porwanie dziewczyny posiadającej zdolność zmiany całego świata. Zaintrygowana drużyna zgadza się pomóc i przyłącza się do świty barona zmierzającej do zajętego ostatnio przez Nilfgaardczyków, zrujnowanego fortu Vidort, aby odbić dziewczynę z rąk najeźdźców. Na miejscu okazuje się, że razem z Czarnymi obecni są także bracia Borlach. Jeszcze na krótko przed interwencją Redańczyków, w wyniku zdrady doktora Arnolda dochodzi do starcia, podczas którego dzieją się rzeczy niezwykłe, nawet jak na możliwości systemu. Przerażeni gracze chcą się wycofać, ale coś jest nie tak. Pomimo wrażenia bycia prawdziwym sobą, okazuje się, że drużyna nadal jest w grze. Na podstawie zaobserwowanych gliczy Stryj uzmysławia sobie, że tajemnicza dziewczyna, będąca obiektem zainteresowania wszystkich stronnictw „Sapkowii”, jest w istocie tym legendarnym artefaktem — przyczyną kompletnego zatracania się graczy w wirtualnym świecie. Bitwa dobiega końca. Pojmana przez Redańczyków, trójka z graczy budzi się w pogrążonych w ciemności lochach, starając się zrozumieć co się właściwie z nimi dzieje. Po chwili do piwnicy wkracza odsiecz prowadzona przez Dzwoneczka oraz nieznanego starca i uwalnia pojmanych. Wyswobodzeni z jarzma oprawców, ni stąd ni zowąd gracze zmieniają swoje awatary i stają się kimś innym, niż byli do tej pory. Będąc już na zewnątrz, Stryj zaczyna rozumieć, że artefakt odpowiedzialny za te wszystkie nagłe zmiany oraz uwięzienie graczy jest obiektem pożądania również Trojana, który za jego pomocą pragnie uzyskać władzę nad światem.",
        },
      ],
    },

    {
      title: "Szpony i Kły",
      description:
        "Antologia opowiadań autorstwa różnych pisarzy amatorów osadzonych w świecie Wiedźmina",
      stories: [],
    },

    {
      title: "Komiksy Macieja Parowskiego i Bogusława Polcha",
      description: "Pierwsze komiksy osadzone w świecie Wiedźmina",
      stories: [
        { title: "Droga Bez Powrotu", description: "" },
        { title: "Zdrada", description: "" },
        { title: "Geralt", description: "" },
        { title: "Mniejsze Zło", description: "" },
        { title: "Ostatnie Życzenie", description: "" },
        { title: "Granica Możliwości", description: "" },
      ],
    },

    {
      title: "Oryginalne komiksy CD Projekt RED",
      description: "Komiksy w świecie gier Wiedźmin",
      stories: [
        { title: "Racja Stanu", description: "" },
        { title: "Dom ze szkła", description: "" },
        { title: "Dzieci lisicy", description: "" },
        { title: "Jak zabijać potwory", description: "" },
        { title: "Klątwa kruków", description: "" },
        { title: "Córka płomienia", description: "" },
        { title: "Zatarte wspomnienia", description: "" },
        { title: "Once Upon a Time in the Woods", description: "" },
        { title: "Wiedźmi Lament", description: "" },
        { title: "Frog Kiss", description: "" },
        { title: "Ballada o dwóch wilkach", description: "" },
        { title: "Dzikie zwierzęta", description: "" },
        { title: "Corvo Bianco", description: "" },
      ],
    },

    {
      title: "Komiksowe adaptacje opowiadań CD Projekt RED",
      description: "Jak w tytule",
      stories: [
        { title: "Ziarno prawdy", description: "" },
        { title: "Mniejsze zło", description: "" },
        { title: "Kraniec świata[", description: "" },
        { title: "Kwestia ceny", description: "" },
        { title: "Wiedźmin", description: "" },
        { title: "Ostatnie życzenie", description: "" },
      ],
    },

    { title: "Komiks Wiedźmin Ronin", description: "" },
    { title: "Komiks Wiedźmineczka", description: "" },
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
    {
      title: "Studium w szmaragdzie",
      description:
        "Narrator, weteran z wojny w Afganistanie opowiada o dochodzeniu, które prowadzi jego współlokator, detektyw doradca z Baker Street, wspomagający pracę inspektora Lestrade ze Scotland Yardu. Przedmiotem jest brutalne morderstwo dokonane na członku jednego z rodów panujących Europy w slumsach londyńskiej dzielnicy Whitechapel. Ofiara nie jest jednak człowiekiem, a obcym, na co wskazuje jego nieludzki wygląd, liczba kończyn i zielona krew na ścianach. Detektyw i narrator zostają przyjęci w pałacu przez Królową Wiktorię, jedną z Wielkich Przedwiecznych, którzy pokonali ludzkość 700 lat temu, a teraz rządzą światem. Detektyw odkrywa, że za morderstwem stoi grupa restauracjonistów, osób, które sprzeciwiają się rządom obcych. Nowela łączy w sobie realia dwóch cykli literackich: powieści i opowiadań kryminalnych o Sherlocku Holmesie Arthura Conana Doyle’a i opowiadań o mitologii Cthulhu H.P. Lovecrafta. Oryginalność tekstu polega na odwróceniu schematu, znanego z opowiadań Doyle’a. Czytelnik na początku, śledząc fabułę podobną do akcji Studium w szkarłacie, uznaje, że narratorem jest doktor Watson, zaś detektywem Sherlock Holmes. W trakcie utworu okazuje się, że Holmes (występujący tu pod fałszywym nazwiskiem Sherry Vernet i pseudonimem Rache) i Watson są ściganymi restauracjonistami, którzy mordują obcych uzurpatorów. Tropy pozostawione przez autora wskazują, że detektywem jest tu profesor Moriarty, zaś narrator to jego współpracownik, pułkownik Sebastian Moran, najwięksi wrogowie Holmesa w cyklu Conan Doyle’a.",
    },
    {
      title: "Sherlock Holmes and The Servants of Hell",
      description:
        "Sherlock Holmes and The Servants of Hell to mroczna, utrzymana w klimacie grozy opowieść łącząca klasyczny styl przygód Sherlocka Holmesa z elementami horroru inspirowanego światem Clive’a Barkera, w której słynny detektyw oraz dr Watson mierzą się z przerażającą, nadprzyrodzoną zagadką związaną z tajemniczą konfiguracją i piekielnymi istotami z innego wymiaru, prowadząc śledztwo pełne niepokoju, brutalności i stopniowego odkrywania, że granica między racjonalnym światem a koszmarem jest znacznie cieńsza, niż kiedykolwiek przypuszczali.",
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
      title: "Japonia, Chiny i Korea: O ludziach skłóconych na śmierć i życie",
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

  "Jak Wytresować Smoka": [
    {
      title: "Jak wytresować smoka",
      description:
        "Hiccup próbuje zdać test inicjacyjny w plemieniu Wikingów, łapiąc i szkoląc smoka – choć jego własny smok jest najmniej imponujący ze wszystkich.",
    },
    {
      title: "Jak zostać piratem",
      description:
        "Hiccup uczy się życia pirata i odkrywa tajemniczy skarb, mierząc się z rywalami i niebezpiecznymi smokami.",
    },
    {
      title: "Jak mówić po smoczemu",
      description:
        "Bohater trafia do niewoli i musi użyć swojej zdolności rozumienia smoków, by przetrwać i pomóc przyjaciołom.",
    },
    {
      title: "Jak złamać smoczą klątwę",
      description:
        "Hiccup zostaje otruty i musi znaleźć rzadkie lekarstwo, zanim będzie za późno.",
    },
    {
      title: "Jak odwrócić smoka ogonem",
      description:
        "Podczas wyprawy ratunkowej Hiccup mierzy się z mroźną dziczą i potężnymi przeciwnikami.",
    },
    {
      title: "Drapieżne smoki dla początkujących",
      description:
        "Bohater poznaje sekrety smoków i staje naprzeciw niebezpieczeństw, które testują jego odwagę.",
    },
    {
      title: "How to Ride a Dragon's Storm",
      description:
        "Wikingowie zostają uwięzieni na wyspie pełnej pułapek, a Hiccup musi ich ocalić.",
    },
    {
      title: "How to Break a Dragon's Heart",
      description:
        "Hiccup szuka zaginionego skarbu i odkrywa ważne tajemnice swojej przeszłości.",
    },
    {
      title: "How to Steal a Dragon's Sword ",
      description:
        "Historia przenosi się w przeszłość, ujawniając wydarzenia, które wpłynęły na losy bohatera.",
    },
    {
      title: "How to Seize a Dragon's Jewel",
      description:
        "Hiccup zostaje oskarżony o kradzież i musi oczyścić swoje imię.",
    },
    {
      title: "How to Betray a Dragon's Hero",
      description:
        "Bohater staje przed zdradą i trudnymi wyborami, które zadecydują o losie świata.",
    },
    {
      title: "How to Fight a Dragon's Fury",
      description:
        "Epicki finał serii – ostateczna walka ludzi i smoków oraz spełnienie przeznaczenia Hiccupa.",
    },
    {
      title: "How to Train Your Viking",
      description:
        "Krótki, humorystyczny poradnik o tym, jak wygląda życie młodego Wikinga i jego szkolenie.",
    },
    {
      title: "Hiccup: The Viking Who Was Seasick",
      description:
        "Opowieść o dzieciństwie Hiccupa i jego problemach z chorobą morską – nietypową cechą jak na Wikinga.",
    },
    {
      title: "The Day of the Dreader",
      description:
        "Historia o straszliwym potworze morskim i próbie odwagi Hiccupa w obliczu zagrożenia.",
    },
    {
      title: "The Serpent's Heir",
      description:
        "Hiccup i jego przyjaciele mierzą się z nowym wrogiem oraz starożytną tajemnicą związaną ze smokami.",
    },
    {
      title: "Dragonvine",
      description:
        "Bohaterowie odkrywają niebezpieczną roślinę powiązaną ze smokami, która może zagrozić całemu światu.",
    },
  ],
  "Obrona Sokratesa": [
    {
      title: "Część pierwsza",
      description:
        "Na początku swojej obrony, ironicznie wyrażając podziw dla kunsztu słownego mowy oskarżycieli, Sokrates prosi sąd o zrozumienie, że będzie się bronił prostymi słowami, takimi, jakich zawsze używał w dysputach na rynku i ulicach Aten. I takim stylizowanym na mowę potoczną, a jednocześnie barwnym językiem jest rzeczywiście napisana Obrona Sokratesa. Sokrates odrzuca oskarżenia, stwierdzając, że nie ma w nich nic prawdziwego. Przypomina, że takie nieprawdziwe oskarżenia wysuwało wobec niego w przeszłości już wielu, (m.in. Arystofanes w Chmurach), i najpierw chce bronić się przeciwko tym od dawna kursującym po Atenach potwarzom skierowanym przeciwko niemu. Nie jest prawdą, że popełnia zbrodnię i dopuszcza się występku, badając rzeczy ukryte pod ziemią i na niebie (19b), jak to ukazał Arystofanes, ponieważ nie interesuje się naukami przyrodniczymi i nie zna się na nich. Nie prowadzi też żadnych formalnych lekcji i nie bierze za to pieniędzy, jak filozofowie sofiści. Wyjaśnia, że za jego kłopoty częściowo odpowiedzialna jest wyrocznia delficka, do której kiedyś udał się jego przyjaciel Chajrefont i któremu wyrocznia powiedziała, że Sokrates jest najmądrzejszym człowiekiem na ziemi. Sokrates nie uważał się za mądrego, czuł się ignorantem, potem jednak zrozumiał, że wyrocznia może mieć rację. Jest najmądrzejszy, ponieważ w przeciwieństwie do innych zdaje sobie sprawę ze swojej niewiedzy (słowa te stały się później słynne jako Wiem, że nic nie wiem, chociaż dosłownie w takiej formie nie padają w Obronie Sokratesa). Kiedy zaczął o tym rozmawiać z ludźmi, okazało się, że politycy są zarozumiali, poeci nie rozumieją własnych utworów, rzemieślnicy uważali się za mądrych we wszystkim, chociaż dobrze wykonywali tylko swoje rzemiosło. Kiedy Sokrates wykazywał ich niewiedzę, stał się powszechnie znienawidzony, chociaż chciał tylko udowodnić, że ludzka mądrość jest mało warta i że prawdziwa mądrość przynależy tylko bogom. Po tym wyjaśnieniu przyczyn wrogości wobec niego Sokrates przechodzi do meritum sprawy – oskarżeń o psucie młodzieży i bezbożność. Meletosa (którego imię można by dosłownie przetłumaczyć jako Dbający, Troskliwy) oskarża o to, że w rzeczywistości nie dba o rzeczy, na których mu rzekomo zależy. W rozmowie z Meletosem (jedynej partii dialogowej w Obronie Sokratesa), używając charakterystycznej dla siebie metody elenktycznej, dowodzi, że żaden człowiek nie może świadomie dążyć do deprawowania innej osoby ze swojego najbliższego otoczenia, ponieważ ta zwróciłaby się w końcu przeciwko niemu. Może tu więc w grę wchodzić jedynie nieumyślne psucie, a takie należy zwalczać nie sądem, lecz za pomocą własnych argumentów i nauczania. Następnie Sokrates przechodzi do drugiego zarzutu – bezbożności. Oskarża się go o szerzenie materializmu (że słońce to kamień, a księżyc to ziemia) (16d), ale przecież są to powszechnie znane twierdzenia Anaksagorasa, o których młodzi ludzie mogą dowiedzieć się z lektur i przedstawień tragedii Eurypidesa, którymi zresztą Sokrates się nie zajmuje. Dalej w rozmowie z Meletosem znowu wykazuje wewnętrzną sprzeczność jego argumentów. Sokratesowi zarzuca się bezbożność, ale jednocześnie i to, że wprowadza i wierzy w jakieś nowe duchy. Ironicznie zarzuca Meletosowi, że ten specjalnie stawia mu takie zarzuty, aby wypróbować jego inteligencję. Sokrates powtarza to, co powiedział na początku mowy, mianowicie że prawdziwą przyczyną procesu nie są zarzuty sformułowane przez oskarżycieli, lecz powszechna nienawiść tłumu, która w końcu go zgubi. Widać tu już przeczucie śmierci Sokratesa, który domyśla się, że jego obrona będzie nieskuteczna. Sokrates nie boi się jednak śmierci, o której (nie wiedząc, co stanie się z nami po śmierci) nie może powiedzieć, czy jest dobrem czy złem. O wiele ważniejsza dla niego jest kwestia dobrego życia, które dla niego oznacza potrzebę nauczania i kierowania myśli ludzi od codziennego zabiegania ku kwestiom moralnym. Sokrates twierdzi, że nawet gdyby sąd go uwolnił pod warunkiem zaprzestania dalszego filozofowania, nie zaprzestanie swojej działalności. Mówi: Ja was obywatele, kocham całym sercem, ale posłucham boga raczej, aniżeli was i póki mi tchu starczy, póki sił, nie przestanę filozofować i was pobudzać i pokazywać drogę każdemu, kogo tylko spotkam (29d). Widać tu jak Sokrates zinterpretował osąd wyroczni delfickiej – jako przeznaczający go do wielkiej misji: Tak rozkazuje bóg, dobrze sobie to pamiętacie, a mnie się zdaje, że wy w ogóle nie macie w państwie nic cenniejszego, niż ta moja służba boża. Bo przecież ja nic innego nie robię, tylko chodzę i namawiam młodych spośród was i starych, żeby się o ciało, ani o pieniądze nie troszczył jeden z drugim przede wszystkim, ani tak bardzo, jak o duszę, aby była jak najlepsza; i mówię im, że nie z pieniędzy dzielność rośnie, ale z dzielności pieniądze i wszelkie inne dobra ludzkie i prywatne, i publiczne (30b). Sokrates porównuje się wreszcie do bąka, puszczonego z ręki boga, aby siadał miastu na kark; ono niby koń wielki i rasowy, ale taki duży, że gnuśnieje i potrzebuje jakiegoś żądła, żeby go budziło (30e). Następnie Sokrates ponownie przypomina, jak Meletos oskarża go o wprowadzanie nowych duchów, i przyznaje, że rzeczywiście od lat chłopięcych słyszy w sobie głos wewnętrzny, który uznaje za bóstwo i który zakazuje mu zajmowania się polityką. Dlatego też nigdy nie pełnił urzędów w Atenach. Starał się żyć uczciwie w całym swoim życiu, inaczej szybko doprowadziłby się do upadku i śmierci. Dalej Sokrates twierdzi, że nigdy nie był niczyim nauczycielem w sensie celowego przekazywania wiedzy. Pozwala jedynie innym słuchać tego, co mówi, i dlatego nie może odpowiadać za to, czy inni staną się dzięki temu lepsi czy gorsi. Ale jeśli rzeczywiście kogoś popsuł, osoba ta musiałaby stawić się dzisiaj przed sądem i zeznawać jako świadek przeciwko niemu, mógłby to zrobić też jej krewny, tymczasem takich świadków nie ma, na rozprawie jest natomiast mnóstwo wymienionych z imienia jego zwolenników, którzy są gotowi go poprzeć. Na zakończenie mowy Sokrates zwraca uwagę, że nie zamierza grać na emocjach sądu, zalewając się łzami, ani przyprowadzając swoich trzech synów, krewnych i przyjaciół, którzy błagaliby o łaskę dla niego (były to dość powszechne praktyki w sądach ateńskich tego czasu). Nie przystoi mu to z racji jego wieku i imienia. Obowiązkiem sądu jest wydanie słusznego wyroku opartego na argumentach i faktach, a nie emocjach, a postępowanie inaczej byłoby działaniem bezbożnym. Sokrates zostaje uznany za winnego niewielką przewagą głosów. Z dialogu dowiadujemy się, że gdyby 30 skorupek padło w drugą stronę, byłby uwolniony, przy 500 sędziach stosunek głosów wynosił więc prawdopodobnie 280 za uznaniem za winnego do 220 za uniewinnieniem.",
    },
    {
      title: "Część druga",
      description:
        "Sokrates twierdzi, że spodziewał się jeszcze gorszego wyniku głosowania, tymczasem uznano go winnym większością zaledwie 30 głosów. Żartuje, że przeciwko Meletosowi i tak wygrał i gdyby do jego skarg nie przyłączył się Anytos i Lykon, ten musiałby zapłacić karę 1000 drachm, ponieważ nie uzyskałby piątej części głosów (Sokrates dzieli tu 280 na 3). Zgodnie z prawem ateńskim Sokrates ma teraz sam zaproponować karę dla siebie, jeśli nie zgadza się z wyrokiem śmierci. Zamiast tego drwi z sądu i jako karę proponuje, aby jako zasłużonemu obywatelowi dać mu honorowy wikt w Prytanejon, świętym gmachu miasta, gdzie palił się wieczny ogień Hestii i gdzie na koszt Aten jadali mężowie najbardziej zasłużeni, posłowie obcych państw i zwycięzcy igrzysk olimpijskich. Mówi, że zdaje sobie sprawę, że jest teraz postrzegany jako ogarnięty jeszcze większą pychą, ma jednak za złe sądowi, że w tak poważnej, gardłowej, sprawie sądzili go tylko jeden dzień. Gdyby proces trwał dłużej, sędziowie daliby się przekonać o jego niewinności. Sokratesowi nie odpowiada też żadna kara. Powtarza, że nie boi się śmierci, bo nie wie, czy to coś dobrego czy złego. Nie chce iść do więzienia i być tam zależny od zmieniającej się władzy, nie chce też iść na wygnanie, bo jest za stary, poza tym z innego miasta też zostałby pewnie wypędzony, ponieważ i tam nie mógłby nie zaprzestać swojego nauczania i działalności. Nie ma też pieniędzy, aby zapłacić grzywnę. W końcu proponuje grzywnę w wysokości jednej miny srebrem. Jego przyjaciele (m.in. Platon i Kriton) natychmiast podwyższają tę sumę do 30 min i ręczą za jej spłatę. Ława przysięgłych nie wyraża jednak zgody na tę alternatywę i skazuje Sokratesa na karę śmierci przez wypicie cykuty. Diogenes Laertios zanotował, że tym razem przeciwko Sokratesowi głosowało 80 sędziów więcej niż w pierwszym głosowaniu (prawdopodobnie więc łącznie 360) – zapewne wielu odwróciło się od niego urażonych drugą mową.",
    },
    {
      title: "Część trzecia",
      description:
        "Sokrates zwraca się teraz tylko do tych sędziów, którzy skazali go na śmierć i zapowiada, że skazanie jego, starca, któremu i tak niewiele pozostało lat życia, na śmierć już niedługo ściągnie na miasto hańbę. Twierdzi, że przegrał nie dlatego, że zabrakło mu argumentów, lecz dlatego, że nie chciał zniżać się do sztuczek i grania na emocjach sądu, płaczów i jęków, do których zwykle uciekali się podsądni. Powtarza, że ani w sądzie, ani na wojnie, ani ja, ani ktokolwiek inny nie powinien o tym przemyśliwać, aby śmierci ujść (39a). Jeszcze raz zapowiada swoim sędziom, że kara jaka ich spotka po śmierci Sokratesa, będzie znacznie cięższa niż śmierć – potępienie innych, młodszych od niego. Następnie kieruje słowa pocieszenia do tych sędziów, którzy głosowali za jego uniewinnieniem. Twierdzi, że jego dobry duch, który zwykle zawsze przestrzegał go przed niebezpieczeństwem, tym razem nie sprzeciwiał się, kiedy wychodził z domu i szedł do sądu. Można to uznać za znak, że śmierć jest czymś dobrym dla niego. Śmierć jest albo całkowitym unicestwieniem ciała i duszy, w którym człowiek nie odczuwa już żadnych wrażeń, i tym samym uwolnieniem od wszelkich trosk, albo jakimś przeobrażeniem i przeniesieniem się duszy w inne miejsce – do Hadesu, gdzie Sokrates będzie mógł spotkać dawnych bohaterów i poetów i dalej prowadzić z nimi swoje dysputy. Na koniec Sokrates mówi, że nie chowa wielkiej urazy do oskarżycieli i sędziów, którzy go skazali, i prosi o opiekę nad swoimi synami, aby ci wartości moralne przedkładali nad dobra materialne i egoizm.",
    },
  ],
  "Death Note": [
    {
      title: "Death Note All in One Collection",
      description:
        "Jedna książka zawierająca wszystkie 12 tomów Death Note'a oraz bonusowy epilog",
    },
    {
      title: "Death Note Short Stories",
      description:
        "Książka zawierająca prolog, chaptera a-kira, c-kira i inne bonusy",
    },
    {
      title: "Death Note Another Note: The Los Angeles BB Murder Cases",
      description:
        "Powieść będąca prequelem Death Note'a opisująca sprawę L w Los Angeles",
    },
    {
      title: "Death Note L Save The World",
      description:
        "Powieść będąca adaptacją filmu o tym samym tytule. Dzieje się w uniwersum filmowym, nie mangowym",
    },
  ],
};

export default books;
