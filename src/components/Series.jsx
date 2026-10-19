import "./Series.css";
import { useState, useMemo, useEffect, useRef } from "react";
import seriesData from "../data/seriesData";
import seriesDescriptions from "../data/seriesDescriptions";
import GalleryModal from "../elements/GalleryModal";

const dimensionsList = ["Wszystkie", "Overworld", "Nether", "End"];

const seriesTitleYears = {
  Czarnobyl: 2019,
  "Gambit królowej": 2020,
  Lucyfer: 2016,
  "Wiedźmin Netflix": 2019,
  "Gra o Tron": 2011,
  "Ród Smoka": 2022,
  "Assassin's Creed: Rodowód": 2009,
  "Jeźdźcy smoków": 2019,
  Centaurworld: 2021,
  "Death Note": 2006,
  "Death Note 2015": 2015,
  "Murder Drones": 2021,
  "Obłędny Cyfrowy Cyrk": 2023,
  "Cyberpunk Edgerunners": 2022,
  "Dragon's Dogma": 2020,
  "The passage": 2019,
  "All of us are dead": 2022,
  "The last of us": 2023,
  "Squid game": 2021,
  "Breaking bad": 2008,
  "Better call Saul": 2015,
  Sherlock: 2010,
  "Moriarty the Patriot": 2020,
  "Sherlock Holmes": 1984,
  Arcane: 2021,
  Ragnarok: 2020,
  "Stranger Things": 2016,
  Ninjago: 2011,
  Herkules: 1997,
  "One Punch Man": 2015,
  Hannibal: 2013,
  "Wheel of time": 2021,
  Supernatural: 2005,
  Wikingowie: 2013,
  Kakegurui: 2017,
  "Death Parade": 2015,
  "Sweet Home": 2020,
  "Devil May Cry": 2007,
  From: 2022,
  "Dziesięć mil kwitnących brzoskwiń (Eternal Love)": 2017,
  "Eternal Love of Dream": 2020,
  "The Untamed": 2019,
  "Wu Xin the Monster Killer": 2015,
  "Nirvana in Fire": 2015,
  "Young Sherlock": 2014,
  "The Long Ballad": 2021,
  "Oh My Emperor": 2018,
  "Arsenal Military Academy": 2017,
  Reset: 2022,
  "Under the Skin": 2022,
  "Love in the Desert": 2024,
  "Towards the Republic": 2003,
  "Ice Fantasy": 2016,
  "Attack on Titan": 2013,
  "How NOT to Summon a Demon Lord": 2018,
  "Gwiezdne Wojny: The Mandalorian": 2019,
  "The end of the fucking world": 2018,
  "Wiedźmin Rodowód Krwi": 2022,
  "Wiedźmin (polski serial)": 2002,
  "Rycerz Siedmiu Królestw": 2026,
  "Jeźdźcy smoków 9 światów": 2021,
  "Persona Trinity Soul": 2008,
  "Persona 4 The Animation": 2011,
  "Persona 4 Golden The Animation": 2014,
  "Persona 5 The Animation": 2018,
  Rzym: 2005,
  "Most nad Sundem": 2011,
  "13 powodów": 2017,
  "Egzorcysta Bogdan Boner": 2017,
  "Alice in Borderland": 2020,
  "Seven Deadly Sins": 2014,
  Kalifat: 2020,
  "Pingwiny z Madagaskaru": 2008,
  "Niech żyje król julian": 2014,
  "Kung Fu Panda: Legenda o niezwykłości": 2011,
  "Kung Fu Panda: Łapy przeznaczenia": 2018,
  "Kung Fu Panda: Smoczy rycerz": 2022,
  "Gakkou Gurashi": 2015,
  Marianne: 2019,
  Folklor: 2018,
  "Dom grozy": 2014,
  Revolution: 2012,
  "30 srebrników": 2022,
  "Chilling adventures of Sabrina": 2018,
  "Po drugiej stronie muru": 2017,
  1670: 2023,
  "Hazbin Hotel": 2024,
  "Helluva Boss": 2019,
  "Wikingowie Walhalla": 2022,
  "Kakegurui Twin": 2019,
  Cuphead: 2022,
  "High-Rise Invasion": 2021,
  "Spongebob Kanciastoporty (fragmenty)": 2000,
  "Życie na planecie Ziemia": 2023,
  "Devilman Crybaby": 2018,
  "Devil May Cry Netflix": 2025,
  "Shiboyugi: Playing Death Games to Put Food on the Table": 2023,
  "Zapiski Zielarki": 2023,
  "Gwiezdne Wojny: Andor": 2022,
  "Gwiezdne Wojny: Ahsoka": 2023,
  "Gwiezdne Wojny: Obi-Wan Kenobi": 2022,
  "Gwiezdne Wojny: Księga Boby Fetta": 2022,
  "Gwiezdne Wojny: Akolita": 2022,
  "Gwiezdne Wojny: Wojny Klonów": 2008,
  "Gwiezdne Wojny: Rebelianci": 2014,
  "Gwiezdne Wojny: Parszywa Zgraja": 2024,
  "Gwiezdne Wojny: Opowieści z Imperium": 2024,
  "Gwiezdne Wojny: Opowieści Jedi": 2024,
};

const formatSeriesTitle = (title) => {
  const year = seriesTitleYears[title];
  if (!year) return title;

  const normalizedTitle = title
    .replace(/\s+\((19|20)\d{2}\)$/, "")
    .replace(/\s+(19|20)\d{2}$/, "");

  return `${normalizedTitle} (${year})`;
};

const enrichSeriesDescription = (text) => {
  if (!text) return "";

  const trimmed = text.trim();
  if (trimmed.length > 220) return trimmed;

  return `${trimmed} To historia, która nie tylko pokazuje wydarzenia, ale też rozwija relacje, wybory i konsekwencje, dzięki którym cała opowieść nabiera większej głębi i emocjonalnej ciężkości.`;
};

const enrichSeasonDescription = (text) => {
  if (!text) return "";

  const trimmed = text.trim();
  if (trimmed.length > 180) return trimmed;

  return `${trimmed} To ważny rozdział w całej narracji, który pokazuje, jak każdy wybór, konflikt i zwrot akcji oddziałuje na dalszy bieg wydarzeń oraz na psychologiczny rozwój bohaterów.`;
};

const seriesSeasons = {
  Lucyfer: [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon wprowadza Lucifera, jego życie w Los Angeles i konflikt z piekielnym porządkiem, który zaczyna wywoływać niebezpieczne konsekwencje.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon rozwija jego emocjonalne i polityczne napięcie, gdy do gry wchodzą coraz większe zagrożenia i relacje z innymi bohaterami.",
    },
    {
      title: "Sezon 3",
      description:
        "Trzeci sezon podwaja dramat i ambicję, a świat demonów i aniołów staje się coraz bardziej nieprzewidywalny.",
    },
    {
      title: "Sezon 4",
      description:
        "Czwarty sezon mocniej skupia się na osobistej cenie, jaką ponosi Lucifer i jego bliscy, gdy konflikt staje się nie do zatrzymania.",
    },
    {
      title: "Sezon 5",
      description:
        "Piąty sezon rozbudowuje konflikt i przenosi bohaterów w miejsce, gdzie wybory mają polityczne i metafizyczne konsekwencje.",
    },
    {
      title: "Sezon 6",
      description:
        "Ostatni sezon zamyka linię rozwoju postaci, stawiając ją wobec ostatecznego wyboru między wolnością, lojalnością i własną naturą.",
    },
  ],
  "Wiedźmin Netflix": [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon wprowadza Geralta, wątki polityczne, odrębne plemiona i dystopijną krainę, która ma wielki potencjał na dalszą przygodę.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon rozszerza świat i wprowadza większe zagrożenia, które przesuwają losy bohaterów ku bardziej tragicznej równowadze.",
    },
    {
      title: "Sezon 3",
      description:
        "Trzeci sezon podnosi napięcie, gdy polityczne i osobiste intrygi zderzają się z ostrymi konsekwencjami zaprzysiężonych wyborów.",
    },
    {
      title: "Sezon 4",
      description:
        "Czwarty sezon zamyka zasadniczy cykl przemian, intensyfikując dramat i ostateczny konflikt z prawdziwą siłą zła.",
    },
  ],
  "Gra o Tron": [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon wprowadza wojnę o tron, dynastie i ogromny zasięg politycznego chaosu, który z czasem zamienia się w prawdziwą tragedię.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon tworzy więź pomiędzy intrygami, zdradą i walką o władzę, rozciągając napięcie na cały kontynent.",
    },
    {
      title: "Sezon 3",
      description:
        "Trzeci sezon rozwija dramat i koszty każdej decyzji, pokazując, że wojna jest bardziej destrukcyjna niż wydaje się na początku.",
    },
    {
      title: "Sezon 4",
      description:
        "Czwarty sezon podnosi stawkę i pozwala widzowi poczuć, jak brutalna i nieprzewidywalna staje się walka o przeżycie.",
    },
    {
      title: "Sezon 5",
      description:
        "Piąty sezon zamyka wielkie rozdziały politycznej gry i mocniej koncentruje się na konsekwencjach wcześniejszych wyborów.",
    },
    {
      title: "Sezon 6",
      description:
        "Szósty sezon przyspiesza nieubłagany upadek dawnych porządków i przekształca krainę w miejsce pełne chaosu.",
    },
    {
      title: "Sezon 7",
      description:
        "Siódmy sezon przewraca dotychczasowy porządek, a każdy ruch na szachownicy ma coraz tragiczniejsze konsekwencje.",
    },
    {
      title: "Sezon 8",
      description:
        "Ostatni sezon zamyka wielką sagę z tragicznie epickim finałem, w którym każda dynastia płaci cenę za swoją ambicję.",
    },
  ],
  "Ród Smoka": [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon wprowadza świat królewskich ambicji, dynastii i legend, z których rodzi się wielka gra o władzę.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon poszerza konflikt i uświadamia widzowi, że rodowa sprawa jest nie tylko polityczna, lecz także emocjonalna i brutalna.",
    },
  ],
  "Breaking bad": [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon pokazuje początki przemiany Walta, gdy jego decyzje prowadzą do coraz większej spirali przemocy i kłamstw.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon podnosi napięcie i pokazuje, że każdy kolejny krok Walta ma coraz większe konsekwencje.",
    },
    {
      title: "Sezon 3",
      description:
        "Trzeci sezon zwiększa skalę ryzyka i destrukcyjnych wyborów, prowadząc bohaterów ku jeszcze większemu chaosowi.",
    },
    {
      title: "Sezon 4",
      description:
        "Czwarty sezon wchodzi w najcięższy etap odchodzenia od moralności i zanurzenia w przestępczym świecie.",
    },
    {
      title: "Sezon 5",
      description:
        "Piąty sezon jest finałem tragicznego cyklu, w którym wszystko, co zostało zbudowane, staje się zgubne.",
    },
  ],
  "Better call Saul": [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon przekazuje świat Jimmy'ego McGilla i jego wstęp do podziemnego świata prawnych i przestępczych pozorów.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon buduje psychologiczne i codzienne napięcie, w którym jego ambicje coraz mocniej zderzają się z rzeczywistością.",
    },
    {
      title: "Sezon 3",
      description:
        "Trzeci sezon rozwija dramat i sprawia, że każdy wybór staje się trudniejszy i bardziej niebezpieczny.",
    },
    {
      title: "Sezon 4",
      description:
        "Czwarty sezon zwiększa presję i uwidacznia cenę, jaką trzeba zapłacić za wejście do świata przestępczości.",
    },
    {
      title: "Sezon 5",
      description:
        "Piąty sezon mocno skraca dystans między człowiekiem a jego złudnym ideałem sukcesu.",
    },
    {
      title: "Sezon 6",
      description:
        "Ostatni sezon zamyka drogę ku przemianie Jimmy'ego, prowadząc go do nieodwracalnych skutków jego wyborów.",
    },
  ],
  Sherlock: [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon pokazuje Holmesa i Watsona w ich klasycznym, genialnym, lecz rzadko bezpiecznym duetowym rytmie.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon rozbudowuje psychologiczny aspekt spraw, dźwigając napięcie ponad poziom klasycznego detektywistycznego thrillera.",
    },
    {
      title: "Sezon 3",
      description:
        "Trzeci sezon skupia się na coraz głębszych konsekwencjach przeszłości, własnego geniuszu i moralnych kompromisów.",
    },
    {
      title: "Sezon 4",
      description:
        "Ostatni sezon wchodzi w fazę emocjonalnej i tragicznej odpowiedzi na pytanie, ile rzeczywistości można utrzymać pod kontrolą.",
    },
  ],
  "Sherlock Holmes": [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon odtwarza klasyczne śledztwa z młodym Holmesem i miejscami, które tworzą nostalgię za XIX-wiecznym Londynem.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon przynosi dalsze zawiłe sprawy i odrobinę większą głębię w relacjach głównych bohaterów.",
    },
    {
      title: "Sezon 3",
      description:
        "Trzeci sezon rozwija bardziej złożone intrygi i przydraża atmosferę klasycznej detektywistycznej tajemnicy.",
    },
    {
      title: "Sezon 4",
      description:
        "Czwarty sezon podnosi poziom dramatyczny, gdy sprawy stają się bardziej osobiste i trudne do rozwiązania.",
    },
    {
      title: "Sezon 5",
      description:
        "Piąty sezon kontynuuje tożsamość serialu, wydłużając świat Holmesa w coraz bardziej zawiłe śledztwa.",
    },
    {
      title: "Sezon 6",
      description:
        "Szósty sezon rozwija wyraźnie wzrost napięcia, w którym każde rozwiązanie ma swoje konsekwencje.",
    },
    {
      title: "Sezon 7",
      description:
        "Siódmy sezon zamyka cykl przygód w stylu klasycznego, rozbudowanego serialowego kryminału.",
    },
  ],
  "The last of us": [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon wprowadza bohaterów w świat po pandemii i skupia się na ich relacji, przetrwaniu oraz traumie codziennej tułaczki.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon rozbudowuje konflikt i emocjonalne konsekwencje zmiany, kiedy przeszłość przechodzi w codzienną rzeczywistość.",
    },
  ],
  "Squid game": [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon wprowadza zasadę gry, presję i brutalną logikę, która od razu porusza całe społeczne napięcie.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon podnosi skalę presji i pokazuje, że uczestnicy nie są już tylko graczami, lecz ludźmi z własną brutalną historią.",
    },
    {
      title: "Sezon 3",
      description:
        "Trzeci sezon potęguje napięcie, rozchodząc się ku coraz bardziej przerażającym konsekwencjom gry.",
    },
  ],
  "Alice in Borderland": [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon pokazuje wejście bohaterów do świata gry, w którym przetrwanie zależy od logiki, odwagi i zawrotnych decyzji.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon rozszerza kryteria gry i pokazuje, jak przerażająca może stać się władza w sytuacji bez wyjścia.",
    },
    {
      title: "Sezon 3",
      description:
        "Trzeci sezon zamyka wielką część historii, gdy główni bohaterowie stają wobec ostatecznego pytania o cenę przeżycia.",
    },
  ],
  "13 powodów": [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon buduje dramaturgię tajemnicy, klasowych napięć i trudnej psychologicznej podróży przez wspomnienia i winę.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon rozwija problematykę odpowiedzialności, cierpienia i konsekwencji codziennych relacji z dawnych czasów.",
    },
    {
      title: "Sezon 3",
      description:
        "Trzeci sezon skupia się na przemianie tragedii w długotrwały proces leczenia i odkupienia.",
    },
    {
      title: "Sezon 4",
      description:
        "Ostatni sezon zamyka ścieżkę wyjaśnień, w której przeszłość nieustannie wraca do teraźniejszości.",
    },
  ],
  "Stranger Things": [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon pokazuje zniknięcie Willi i pierwsze objawy tajemniczej inwazji na małe miasteczko.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon rozwija konflikty, które teraz dobiegają do świata dzieci i dorosłych pod wpływem strachu i przeznaczenia.",
    },
    {
      title: "Sezon 3",
      description:
        "Trzeci sezon zamienia codzienny świat w obszar zagrożenia, gdy w miasteczku pojawiają się nowe i większe źródła niepokoju.",
    },
    {
      title: "Sezon 4",
      description:
        "Czwarty sezon rozciąga ogromny nacisk na wszystkie pokolenia i wrzuca je do konfliktu o nieznanej skali.",
    },
    {
      title: "Sezon 5",
      description:
        "Piąty sezon zamknie wielką opowieść o zniknięciu, strachu i przemianie bohaterów.",
    },
  ],
  Ragnarok: [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon rozgrywa się w małym norweskim miasteczku i wprowadza mitologiczne ujawnienie, które zaczyna przekształcać świat.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon rozwija konflikt i mocno podnosi dramat wydarzeń, kiedy prawda o przeszłości stanie się nie do ukrycia.",
    },
    {
      title: "Sezon 3",
      description:
        "Trzeci sezon zamyka wielkie odwołania do mitologii i przeznaczenia, przyspieszając ostateczny finał.",
    },
  ],
  Rzym: [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon pokazuje przejście od politycznej intrygi ku brutalnej, realnej walce o władzę i przetrwanie.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon zwiększa skalę wojny, zdrady i przemocy, nadając całej historii ostatecznie epicki, tragicznierający ton.",
    },
  ],
  "Most nad Sundem": [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon rozgrywa się w świecie wielkiej politycznej i emocjonalnej konstrukcji, z którą bohaterowie muszą się zmierzyć.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon rozwija więzi, zdrady i znaczenie władzy, wprowadzając coraz większe konsekwencje.",
    },
    {
      title: "Sezon 3",
      description:
        "Trzeci sezon wzmacnia dramat zmieniając świat w miejsce, gdzie każdy gest ma przełomowy wpływ na dalsze losy.",
    },
    {
      title: "Sezon 4",
      description:
        "Czwarty sezon zamyka wielki ton dramatyczny i przyspiesza rozwój konfliktu do finałowego rozrachunku.",
    },
  ],
  Hannibal: [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon rozbudowuje psychologiczną grę między Hannibalem a Will Graham.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon pogłębia grozę i destrukcję relacji z nieprzewidywalnym, cierpiącym bohaterem.",
    },
    {
      title: "Sezon 3",
      description:
        "Trzeci sezon zamyka cykl tanato-psychologicznej historii i prowadzi do nieodwracalnego finału.",
    },
  ],
  Revolution: [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon wprowadza świat po ciemności i stopniowo ujawnia zagadkę zniknięcia energii i odzyskania wolności.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon rozwija konflikt polityczny i społeczne napięcia, gdy świat stopniowo zmienia się w miejsce chaosu.",
    },
  ],
  "Wheel of time": [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon wprowadza pojawienie się przepowiedni i młodych bohaterów, których przyszłość jest już wpisana w historię świata.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon podnosi wokół nich presję, budując większą skalę konfliktu i coraz bardziej tragiczne duchowe wyzwania.",
    },
    {
      title: "Sezon 3",
      description:
        "Trzeci sezon wprowadza wielkie, widmowe rozstrzygnięcia, które zmieniają rozumienie przeznaczenia, sił i wybory bohaterów.",
    },
  ],
  "30 srebrników": [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon wprowadza świat walki o przetrwanie i tajemnicę, która skrywa odpowiedzi na wielkie pytania o wolność i przeznaczenie.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon pogłębia konflikt i wprowadza nieprzewidywalne konsekwencje tych, którzy zostali zmuszeni do wyboru.",
    },
  ],
  Supernatural: [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon wprowadza Sam i Deana i od razu pokazuje, jak groźne są ich łowy na demony i zjawiska nadprzyrodzone.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon rozwija metafizyczny konflikt i zwiększa skalę niebezpieczeństw, z jakimi muszą się mierzyć bracia.",
    },
    {
      title: "Sezon 3",
      description:
        "Trzeci sezon ciągnie sprawy w stronę większych zagrożeń i bardziej brutalnych konsekwencji środowiska, w którym działają.",
    },
  ],
  "Chilling adventures of Sabrina": [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon zadaje podstawy mrocznej, czarnej i niebezpiecznej historii o magii, rodzinie i całkowitym rozpadzie codzienności.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon zwiększa wielką, niebezpieczną skalę relacji z siłami ciemności i rozwarstwiającą naturalność zła.",
    },
    {
      title: "Sezon 3",
      description:
        "Trzeci sezon rozwija bardziej introspekcyjne i tragedystyczne ścieżki, prowadząc bohaterkę ku konsekwencjom swoich decyzji.",
    },
    {
      title: "Sezon 4",
      description:
        "Czwarty sezon zamyka rozdział with a broad, uncanny, final destination shaped by guilt, loss, and magical reckoning.",
    },
  ],
  1670: [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon wprowadza zasady świata światła i ciemności, w którym każda decyzja ma znaczenie dla przyszłych pokoleń.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon wzmacnia polityczne i społeczne napięcia, rosnące na tle rozpadłego porządku i przeznaczenia.",
    },
  ],
  Wikingowie: [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon wprowadza początki epickiej drogi wikingów i ich potrzebę zemsty, władzy i przetrwania.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon skupia się na zamianie ambicji w konflikt, gdy wielkie rodowe losy zostają wystawione na próbę.",
    },
    {
      title: "Sezon 3",
      description:
        "Trzeci sezon pogłębia wojenne i polityczne rozrachunki, rozszerzając strukturę walki i pamięci o przodkach.",
    },
    {
      title: "Sezon 4",
      description:
        "Czwarty sezon prowadzi do roztrząsania konsekwencji, kiedy życie bohaterów jest bardziej narażone niż kiedykolwiek.",
    },
    {
      title: "Sezon 5",
      description:
        "Piąty sezon podnosi skalę konfliktów i trawiący ciężar odkupienia oraz odzyskiwania miejsca w świecie.",
    },
    {
      title: "Sezon 6",
      description:
        "Szósty sezon zamyka wielką epicką drogę wikingów w konfrontacji z historią, śmiercią i nieodwracalnym przeznaczeniem.",
    },
  ],
  "Wikingowie Walhalla": [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon wprowadza nowe pokolenie bohaterów, których ścieżka prowadzi przez konflikt, przygodę i odległe konsekwencje rodzinnej przeszłości.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon rozbudowuje źródła napięcia oraz wprowadza większą skalę wojennej i politycznej mocy.",
    },
    {
      title: "Sezon 3",
      description:
        "Trzeci sezon dąży do finalnego, apokaliptycznego kresu, w którym wybory bohaterów decydują o ich miejscu w historii.",
    },
  ],
  From: [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon pokazuje niesamowitą zamkniętą społeczność, w której każdy dzień zaczyna i kończy się przed znakiem nieznanego zagrożenia.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon pogłębia senses of dread and exposes more of the town's hidden logic.",
    },
    {
      title: "Sezon 3",
      description:
        "Trzeci sezon rozszerza mroczną logikę miasta, gdzie niepewność zamienia się w tajemniczy, niszczący porządek chaos.",
    },
    {
      title: "Sezon 4",
      description:
        "Czwarty sezon wzmacnia wewnętrzny terror i ujawnia, że sama wspólnota jest częścią większej, nieprzewidywalnej machiny.",
    },
  ],
  "Gwiezdne Wojny: The Mandalorian": [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon przedstawia samotną wyprawę Mandalorianina i jego relację z małym dzieckiem, które zmienia jego dalszą przygodę.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon rozszerza historię i zwiększa napięcie między wolnością a obowiązkiem wobec dziecka i własnej przeszłości.",
    },
    {
      title: "Sezon 3",
      description:
        "Trzeci sezon wyprowadza bohatera w szersze konfliktu politycznego i moralnego, gdzie każda decyzja odciska silny ślad na jego przyszłości.",
    },
  ],
  Arcane: [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon wprowadza konflikt Piltover i Zaun oraz dzieje się w nim wielki rytm tragedii i ambicji bohaterów.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon rozwija konsekwencje przygód i rozsadza przeszłe relacje, doprowadzając do dramatycznego finału.",
    },
  ],
  "Jeźdźcy smoków": [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon wprowadza świat bohaterskich zmagania i odkrywania wolności, gdzie przygoda i ciężar odpowiedzialności są ze sobą splecione.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon robi większą, bardziej odważną eksplorację świata i bohaterów, gdy odwaga i przyjaźń zaczynają naprawdę działać.",
    },
    {
      title: "Sezon 3",
      description:
        "Trzeci sezon rozszerza przygody, wzmacnia relacje między bohaterami i pokazuje, jak świat Berk staje się coraz większym, bardziej nieprzewidywalnym miejscem dla nowych wyzwań.",
    },
    {
      title: "Sezon 4",
      description:
        "Czwarty sezon otwiera nowe ścieżki rozwoju postaci, gdy przyjaźń z smokami, ambicje i ryzyko tworzą coraz bardziej złożoną opowieść o dorastaniu i odpowiedzialności.",
    },
    {
      title: "Sezon 5",
      description:
        "Piąty sezon pogłębia całą historię o współpracę, wyzwania i walkę z nowymi zagrożeniami, które pokazują, że świat nieustannie zmienia się i domaga się od bohaterów coraz większej odwagi.",
    },
    {
      title: "Sezon 6",
      description:
        "Szósty sezon wzmacnia epickość opowieści, gdy przygody nabierają większej skali, a bohaterowie zaczynają mierzyć się z konsekwencjami swojej własnej drogi i wyborów.",
    },
    {
      title: "Sezon 7",
      description:
        "Siódmy sezon stawia nowych bohaterów i ich smoki przed większymi wyzwaniami, pokazując, że mimo humorystycznego tonu cała historia wciąż opowiada o przejściu od dzieciństwa do dojrzałości.",
    },
    {
      title: "Sezon 8",
      description:
        "Ostatni sezon zamyka wielką przygodową podróż w duchu wspólnoty, przyjaźni i odkrywania, że nawet największa odwaga zaczyna się od małych, odważnych wyborów.",
    },
  ],
  "Jeźdźcy smoków 9 światów": [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon wprowadza nowe obszary, przygody i większy zakres śmiałych decyzji dla bohaterów w ogromnym świecie.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon rozszerza czarującą skalę i przygodę w kierunku wielkiej, epickiej ekspansji światu.",
    },
    {
      title: "Sezon 3",
      description:
        "Trzeci sezon zaczyna wywoływać większy emocjonalny i przygodowy nacisk na bohaterów oraz ich związek z wyzwaniami świata.",
    },
    {
      title: "Sezon 4",
      description:
        "Czwarty sezon wprowadza kolejny poziom napięcia i rozwoju, gdy bohaterowie muszą zmierzyć się z większymi, bardziej wymagającymi konfliktami.",
    },
    {
      title: "Sezon 5",
      description:
        "Piąty sezon poszerza rozpiętość przygody i ukazuje, jak trudna jest rzeczywista odpowiedzialność za wielkie sprawy.",
    },
    {
      title: "Sezon 6",
      description:
        "Szósty sezon zdecydowanie wzmacnia emocjonalne i przygodowe ciężary, gdy historia zyskuje jeszcze większy wymiar.",
    },
    {
      title: "Sezon 7",
      description:
        "Siódmy sezon intensyfikuje rolę bohaterów i ich dalsze przejście przez kolejne niebezpieczne wyzwania.",
    },
    {
      title: "Sezon 8",
      description:
        "Ostatni sezon zamyka wielką, rozległą kampanię i ukazuje kluczowe konsekwencje całej drogi bohaterów.",
    },
  ],
  Centaurworld: [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon wprowadza świat, w którym bohaterowie znajdują własny rytm, tożsamość i emocjonalny sens podróży.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon rozwija tę podróż w kierunku większej samowiedzy i bardziej złożonych relacji między postaciami.",
    },
  ],
  "Pingwiny z Madagaskaru": [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon wprowadza wybuchowe poczucie humoru i przygody w świecie zwierząt i absurdalnych sytuacji.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon przechodzi od niewinnej zabawy do bardziej złożonych, szybkich i śmiesznych konfliktów.",
    },
    {
      title: "Sezon 3",
      description:
        "Trzeci sezon rozwija energię całej serii, dodając jeszcze więcej absurdalnego charakteru i większą skłonność do chaosu.",
    },
  ],
  "Niech żyje król julian": [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon wprowadza świat króla Juliana i jego zwierzęce przygody oparte na zabawie, chaosie i małych wielkich przygodach.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon rozwija przygodową energię, gdy towarzysze muszą mierzyć się z coraz większym chaosu i absurdalnym wyzwaniom.",
    },
    {
      title: "Sezon 3",
      description:
        "Trzeci sezon dodaje jeszcze więcej błyskotliwych sytuacji, gdy świat wydaje się coraz bardziej rozbiegany i złożony.",
    },
    {
      title: "Sezon 4",
      description:
        "Czwarty sezon rozbudowuje atmosferę przygód, przechodząc dalej w absurd i nową skalę błazeńskich sytuacji.",
    },
    {
      title: "Sezon Exiled",
      description:
        "Seria Exiled to wcześniejszy, odrębny rozdział przygód króla Juliana i jego towarzyszy, który rozgrywa się przed głównym biegiem sezonu 5 i pokazuje, jak chaos, absurd i odwaga kształtują ich przygody jeszcze zanim pojawia się kolejny, większy etap nieprzewidywalnych sytuacji.",
    },
    {
      title: "Sezon 5",
      description:
        "Piąty sezon zamyka wielką część przygód z charakterystycznym humorem i zaskakującą, lekką energią serii.",
    },
  ],
  "Kung Fu Panda: Legenda o niezwykłości": [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon wprowadza Po i jego przygody z nauką, przyjaźnią i przezwyciężaniem strachu przed własnymi możliwościami.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon rozszerza przygodę, gdy Po staje się coraz bardziej dojrzałym bojownikiem i nauczycielem.",
    },
    {
      title: "Sezon 3",
      description:
        "Trzeci sezon podnosi poziom walki, ambicji i rozwoju bohaterów, tworząc bardziej epicką narrację.",
    },
  ],
  "Kung Fu Panda: Łapy przeznaczenia": [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon wprowadza nowe wyzwania dla Po, jego relacje z uczniami i rozwój światowo-buddyjskiej mocy.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon pojmuje dalsze wyzwania, w których Po musi zasłużyć na swoją pozycję i rozwijać duchową jakość bohaterów.",
    },
  ],
  "Kung Fu Panda: Smoczy rycerz": [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon wprowadza nową przygodę Po z walką, nauką i przyjaźnią w świecie pełnym legend i wyzwań.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon wzmacnia przygodę i rozwija wielką skalę bohaterów w nowym, bardziej rozwiniętym konflikcie.",
    },
    {
      title: "Sezon 3",
      description:
        "Trzeci sezon rozszerza historię, tworząc silniejszy akcent na wielką, bardziej epicką walkę po stronie przyjaciół i wrogów.",
    },
  ],
  Ninjago: [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon wprowadza świat ninja i ich pierwsze wielkie konflikty z wrogami, nowymi technikami i budową przyjaźni.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon rozwija ich przygodę i pogłębia się w obszarze wyzwań, doświadczeń i złośliwych konfliktów.",
    },
    {
      title: "Sezon 3",
      description:
        "Kolejne sezony pokazują, że świat ninja ma wiele warstw, a każdy rozdział rozciąga wyzwania i wartości przyjaźni.",
    },
  ],
  "Koniec pieprzonego świata": [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon przekazuje niezwykle mroczny, ale zarazem przejmujący świat dorosłych i ich poczucia nieprzydatności.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon rozwija psychologiczne i społeczne konsekwencje, kiedy przebudzenie życia i własnej tożsamości nabiera coraz bardziej nieprzyjaznej formy.",
    },
  ],
  "One Punch Man": [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon pokazuje Saitamę w świecie satyrycznej klasyki, gdzie absurdalna moc i komizm splatają się z wielkim napięciem.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon rozluźnia scenę, ale jednocześnie zwiększa skalę konfliktu i wzmacnia bardziej epickie starcia.",
    },
    {
      title: "Sezon 3",
      description:
        "Trzeci sezon podnosi dramat i konsekwencje, gdy Saitama musi stawić czoła coraz większym, bardziej szerokim zagrożeniom.",
    },
  ],
  Folklor: [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon skupia się na intrygującej, mrocznej i emocjonalnej narracji, która prowadzi przez ścieżkę tajemnicy i niepewności.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon intensyfikuje konflikt i prowadzi do większego chaosu, udramatyzowując tajemnicze zjawiska i emocjonalne konsekwencje.",
    },
  ],
  "Hazbin Hotel": [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon wprowadza hotel, jego mieszkańców i ich przejście od piekła do możliwości zmiany i nadziei.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon rozwija już większy, bardziej złożony kart wielkiego konfliktu, w którym świat piekła staje się bardziej nieprzewidywalny.",
    },
  ],
  "Helluva Boss": [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon wprowadza przerażającego, ale zarazem absurdalnego świat, gdzie codzienność i chaos splatają się z wielkim, własnym rytmem.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon rozszerza świat, daje mocniejsze, bardziej złośliwe i komiczne napięcia, które pokazują, jak daleko może pójść chaos.",
    },
  ],
  Cuphead: [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon rozwija stylową, złośliwą przygodę z bossami, która bazuje na rytmie, zręczności i niespodziankach.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon wprowadza większą, bardziej nieprzewidywalną skalę chaosu i nowych wyzwań dla bohaterów.",
    },
    {
      title: "Sezon 3",
      description:
        "Trzeci sezon zamyka wielki, przygodowy zjazd w stronę dalszej skali wyzwań i jeszcze bardziej złożonych bossów.",
    },
  ],
  "Moriarty the Patriot": [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon wprowadza świat Oskara i jego dążenia do zwalczania własnej przeszłości poprzez mroczną grę z wyznaniem i inteligencją.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon rozbudowuje konflikt, aż do samego źródła moralnego bezładu i sekretnych tożsamości, które ukrywają własne cierpienie.",
    },
  ],
  "Seven Deadly Sins": [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon wprowadza siedmiu grzeszników i ich wielką wyprawę przeciwko tyranii oraz własnym słabościom.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon rozszerza konflikt, gdy bohaterowie zmuszeni są stawić czoła coraz większej skali zagrożenia.",
    },
    {
      title: "Sezon 3",
      description:
        "Trzeci sezon wprowadza bardziej epickie i emocjonalne wydarzenia, gdy przyjaźń i lojalność są wystawione na próbę.",
    },
    {
      title: "Sezon 4",
      description:
        "Czwarty sezon rozwija odpowiedzi na wcześniejsze wybory oraz temat grzechu i odkupienia w większej skali.",
    },
    {
      title: "Sezon 5",
      description:
        "Piąty sezon zamyka większy cykl, gdy kluczowe decyzje bohaterów przynoszą konsekwencje, które zmieniają wszystko.",
    },
  ],
  Kakegurui: [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon wprowadza szkołę, w której bogactwo, odwaga i ryzyko są nieodłącznym elementem każdej gry.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon przesuwa nacisk ku jeszcze większej psychologicznej presji i bardziej szalonemu poziomowi ryzyka.",
    },
  ],
  "Attack on Titan": [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon wprowadza świat po ataku gigantów i pokazuje, jak szybko upadek bezpieczeństwa zmienia codzienność.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon rozbudowuje wątki polityczne i emocjonalne, gdy bohaterowie zaczynają rozumieć, jak wielkim stali się zagrożeniem.",
    },
    {
      title: "Sezon 3",
      description:
        "Trzeci sezon zwiększa skalę i wprowadza ważne obliczenia między wolnością, zemstą i przetrwaniem.",
    },
    {
      title: "Sezon 4",
      description:
        "Ostatni sezon zamyka ogniwo wielkiej historii i składa ją w apokaliptyczną, tragicznie epicką całość.",
    },
  ],
  "How NOT to Summon a Demon Lord": [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon wprowadza świat, w którym niewiedza i przypadek prowadzą do najbardziej absurdalnych, zabawnych i niebezpiecznych konsekwencji.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon rozwija ten chaos i zaostrza relacje, ukazując, jak absurdalna przygoda może stać się emocjonalnie prawdziwa.",
    },
  ],
  "Zapiski Zielarki": [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon pokazuje świat zielarki, codzienność, pracę i przygody w rytmie, który łączy magiczny sen z realną trudnością życia.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon szerzej rozkłada czas i przestrzeń, prowadząc bohaterów dalej w bardziej złożony świat trosk i przeżyć.",
    },
  ],
  "Devil May Cry Netflix": [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon wprowadza Dantego w świat demonów, wiedzy i działań, z których wyłania się nowa, wyraźna tożsamość bohatera.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon poszerza ten świat i wzmacnia charakterystyki walki oraz relacji społecznych, gdy nadchodzą nowe wyzwania.",
    },
  ],
  "Wu Xin the Monster Killer": [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon wprowadza walkę, mroczne przygody i ścieżkę ku odkryciu, że tożsamość wynika też z przeznaczenia.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon rozwija napięcie między przygodą, odpowiedzialnością i historią, która zaczyna obejmować ludzi i potwory.",
    },
    {
      title: "Sezon 3",
      description:
        "Trzeci sezon zamyka wielki etap rozwoju, gdy bohaterowie wchodzą w przełomowe starcia i trudne relacje międzyludzkie.",
    },
  ],
  "Nirvana in Fire": [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon wprowadza intrygę, ambicję i zamęt polityczny, w którym główny bohater musi przejść przez wiele zasad i zdrad.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon rozwija napięcie, zamianę sojuszy i odkupienie, gdy wielka gra o władzę zaczyna narastać do kryzysu.",
    },
  ],
  "Oh My Emperor": [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon wprowadza świat cesarski, polityczny i emocjonalny, z silnym motywem przekształcenia i wyższej władzy.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon rozwija tę drogę i mocniej pokazuje działania, które prowadzą bohaterów w stronę większego zamieszania.",
    },
  ],
  "Under the Skin": [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon buduje mroczną, egzystencjalną narrację z silnym akcentem na nieprzewidywalność świata i tożsamości.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon rozwija to wewnętrzne napięcie, wskazując, jak bardzo przeszłość i obecność mogą zmieniać trajektorię bohaterów.",
    },
  ],
  "Dziesięć mil kwitnących brzoskwiń (Eternal Love)": [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon wprowadza kwitnące, pełne pożądania i ambicji historie, z których wyłania się wielka konstrukcja polityczna i emocjonalna.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon rozwija głębsze relacje i zobowiązania, określając, jak silne są uczucia w świecie przygody i ambicji.",
    },
    {
      title: "Sezon 3",
      description:
        "Trzeci sezon zamyka najważniejszy etap twórczej konstrukcji, skupiając się na sprawach, które wyznaczają los bohaterów.",
    },
  ],
  "Dom grozy": [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon wprowadza mroczny świat, pełen tajemnicy i przejmującego klimatu, który od razu rzuca widza w klimat grozy i obsesji.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon podnosi poziom ciemności i psychologicznej presji, rozszerzając mroczną panoramę świata i tragedii.",
    },
    {
      title: "Sezon 3",
      description:
        "Trzeci sezon zamyka cykl i toczy światem coraz bardziej nieprzewidywalnych konsekwencji, będących skutkiem wcześniejszych wyborów.",
    },
  ],
  "The Mandalorian": [
    {
      title: "Sezon 1",
      description:
        "Pierwszy sezon buduje nieprzewidywalną, samotną routę do walki, lojalności i przetrwania w przestworzach kosmicznej przygody.",
    },
    {
      title: "Sezon 2",
      description:
        "Drugi sezon podnosi wymiar politycznego i moralnego niepokoju, gdy podstawowe wartości bohatera są wystawione na próbę.",
    },
    {
      title: "Sezon 3",
      description:
        "Trzeci sezon zamyka ważny rozdział w jego życiu, kiedy ścieżka lojalności staje się drastycznie trudna do utrzymania.",
    },
  ],
};

const Series = () => {
  const [selectedDimension, setSelectedDimension] = useState("Wszystkie");
  const [selectedStatus, setSelectedStatus] = useState("Wszystkie");
  const [search, setSearch] = useState("");
  const [selectedSeries, setSelectedSeries] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [itemStatuses, setItemStatuses] = useState(() => {
    if (typeof window === "undefined") return {};

    try {
      return JSON.parse(
        localStorage.getItem("hobbies-series-statuses") || "{}",
      );
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

  const descriptionRef = useRef(null);
  const seasonRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(
        "hobbies-series-statuses",
        JSON.stringify(itemStatuses),
      );
    }
  }, [itemStatuses]);

  const updateStatus = (itemKey, nextStatus) => {
    setItemStatuses((current) => ({
      ...current,
      [itemKey]: nextStatus,
    }));
  };

  const filteredSeries = useMemo(() => {
    return seriesData
      .filter((serie) =>
        selectedDimension === "Wszystkie"
          ? true
          : serie.dimensions.includes(selectedDimension),
      )
      .filter((serie) =>
        serie.title.toLowerCase().includes(search.toLowerCase()),
      )
      .filter((serie) => {
        const itemKey = `series:${serie.title}`;
        const currentStatus = itemStatuses[itemKey] ?? "seen";

        if (selectedStatus === "Wszystkie") return true;
        return (
          currentStatus ===
          statusOptions.find((option) => option.label === selectedStatus)?.value
        );
      });
  }, [selectedDimension, search, selectedStatus, itemStatuses]);

  const scrollToSection = (element) => {
    if (!element || typeof window === "undefined") return;
    requestAnimationFrame(() => {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  const scrollToRelatedSeries = () => {
    if (typeof window === "undefined") return;

    setTimeout(() => {
      if (descriptionRef.current) {
        scrollToSection(descriptionRef.current);
      }
    }, 40);
  };

  const handleSeriesClick = (serieTitle) => {
    if (selectedSeries === serieTitle) {
      setSelectedSeries(null);
      setSelectedSeason(null);
      return;
    }

    setSelectedSeries(serieTitle);
    setSelectedSeason(null);
    requestAnimationFrame(() => {
      scrollToSection(descriptionRef.current);
    });
  };

  const handleSeasonClick = (season) => {
    const nextSeason = selectedSeason?.title === season.title ? null : season;
    setSelectedSeason(nextSeason);

    if (nextSeason) {
      requestAnimationFrame(() => {
        scrollToSection(seasonRef.current);
      });
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const target = sessionStorage.getItem("hobbies-related-target");
    if (!target) return;

    try {
      const parsed = JSON.parse(target);
      if (parsed.page !== "series") return;

      const normalizedTitle = String(parsed.title || "").trim();
      if (!normalizedTitle) return;

      setSelectedSeries(normalizedTitle);
      scrollToRelatedSeries();
    } finally {
      sessionStorage.removeItem("hobbies-related-target");
    }
  }, []);

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

          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="series-filter"
          >
            {statusFilterOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <p className="series-count">Liczba seriali: {filteredSeries.length}</p>
        <ul className="series-list">
          {filteredSeries.map((serie, index) => {
            const itemKey = `series:${serie.title}`;
            const currentStatus = itemStatuses[itemKey] ?? "seen";

            return (
              <li
                key={index}
                className={`series-item ${selectedSeries === serie.title ? "active" : ""} ${currentStatus ? `item-status-${currentStatus}` : ""}`}
                onClick={() => handleSeriesClick(serie.title)}
              >
                <div className="series-item-content">
                  <span>{formatSeriesTitle(serie.title)}</span>

                  <div className="status-control">
                    {statusOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        className={`status-button status-${option.value} ${
                          currentStatus === option.value ? "active" : ""
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
        {selectedSeries && seriesDescriptions[selectedSeries] && (
          <div className="series-description" ref={descriptionRef}>
            <h3>{formatSeriesTitle(selectedSeries)}</h3>

            <p>
              <strong>Do jakiego wymiaru nawiązuje: </strong>
              {seriesDescriptions[selectedSeries].dimension}
            </p>
            <p>
              <strong>Dlaczego akurat do tego: </strong>
              {seriesDescriptions[selectedSeries].why}
            </p>
            <p>
              <strong>Główni Protagoniści: </strong>
              {seriesDescriptions[selectedSeries].protagonist}
            </p>

            <p>
              <strong>Główni Antagoniści: </strong>
              {seriesDescriptions[selectedSeries].antagonist}
            </p>

            <p>
              <strong>Miejsce Akcji: </strong>
              {seriesDescriptions[selectedSeries].location}
            </p>

            <p>
              <strong>Krótki opis: </strong>
              {enrichSeriesDescription(
                seriesDescriptions[selectedSeries].description,
              )}
            </p>

            {seriesSeasons[selectedSeries] &&
              seriesSeasons[selectedSeries].length > 1 && (
                <ul className="series-sublist">
                  {seriesSeasons[selectedSeries].map((season) => (
                    <li
                      key={season.title}
                      className="series-subitem clickable"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSeasonClick(season);
                      }}
                    >
                      {season.title}
                    </li>
                  ))}
                </ul>
              )}

            {selectedSeason && (
              <div className="series-season-details" ref={seasonRef}>
                <h4>{selectedSeason.title}</h4>
                <p>{enrichSeasonDescription(selectedSeason.description)}</p>
              </div>
            )}
          </div>
        )}
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
            galleryType="series"
            onClose={() => setIsGalleryOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Series;
