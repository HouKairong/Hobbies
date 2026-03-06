import { useState } from "react";
import "./Philosophy.css";
import works from "../data/works";
import filozofiaPoProstuEpisodes from "../data/filozofiaPoProstuEpisodes";
import podcastEpisodes from "../data/podcastEpisodes";

const Philosophy = () => {
  const mediaOptions = ["Gry", "Seriale", "Filmy", "Książki"];

  const [openMainSection, setOpenMainSection] = useState(null);
  const [openSection, setOpenSection] = useState(null);
  const [selectedMedia, setSelectedMedia] = useState([...mediaOptions]);
  const [openSeries, setOpenSeries] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const toggleMediaOption = (media) => {
    if (selectedMedia.includes(media)) {
      setSelectedMedia(selectedMedia.filter((m) => m !== media));
    } else {
      setSelectedMedia([...selectedMedia, media]);
    }
  };

  const toggleSeries = (key) => {
    setOpenSeries(openSeries === key ? null : key);
  };

  const allThemes = [...new Set(works.flatMap((w) => w.themes || []))].sort();

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
              setOpenMainSection(openMainSection === "media" ? null : "media")
            }
          >
            Media
          </button>
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

        {/* MEDIA */}
        {openMainSection === "media" && (
          <>
            <div className="philosophy-filters">
              {mediaOptions.map((media) => (
                <label key={media}>
                  <input
                    type="checkbox"
                    checked={selectedMedia.includes(media)}
                    onChange={() => toggleMediaOption(media)}
                  />
                  {media}
                </label>
              ))}
            </div>

            {allThemes.map((theme) => {
              const filteredWorks = works.filter(
                (w) =>
                  w.themes?.includes(theme) && selectedMedia.includes(w.media),
              );

              if (!filteredWorks.length) return null;

              return (
                <div key={theme} className="philosophy-section">
                  <h3
                    className="philosophy-section-title clickable"
                    onClick={() => toggleSection(theme)}
                  >
                    {theme}
                  </h3>

                  {openSection === theme && (
                    <ul className="philosophy-list">
                      {filteredWorks.map((w) => (
                        <li key={w.title + w.media}>{renderWorkItem(w)}</li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </>
        )}

        {/* PODCASTY */}
        {openMainSection === "podcasty" && (
          <div className="philosophy-section">
            {[
              {
                title: "Filozofia po prostu",
                episodes: filozofiaPoProstuEpisodes,
              },
              { title: "Philosophize This!", episodes: podcastEpisodes },
            ].map((podcast) => {
              const key = podcast.title;
              const isOpen = openSeries === key;
              return (
                <div key={key}>
                  <h3
                    className="philosophy-section-title clickable"
                    onClick={() => toggleSeries(key)}
                  >
                    {isOpen ? "▼" : "▶"} {podcast.title}
                  </h3>
                  {isOpen && (
                    <ul className="philosophy-list">
                      {podcast.episodes.map((ep, i) => (
                        <li key={ep + i}>{renderWorkItem({ title: ep })}</li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* FILOZOFOWIE */}
        {openMainSection === "filozofowie" && (
          <div>
            {["Zachodni", "Wschodni"].map((region) => {
              const philosophers =
                region === "Zachodni"
                  ? [
                      "Sokrates",
                      "Platon",
                      "Arystoteles",
                      "Machiavelli",
                      "Nietzsche",
                      "Kant",
                      "Camus",
                      "Sartre",
                      "Seneka",
                      "Epiktet",
                      "Marek Aureliusz",
                      "Kartezjusz",
                      "Freud",
                    ]
                  : [
                      "Konfucjusz",
                      "Laozi",
                      "Zhuangzi",
                      "Bodhidharma",
                      "Sun Zi",
                      "Mozi",
                    ];

              const isOpen = openSection === region;

              return (
                <div key={region}>
                  <h3
                    className="philosophy-section-title clickable"
                    onClick={() => toggleSection(region)}
                  >
                    {isOpen ? "▼" : "▶"} {region}
                  </h3>
                  {isOpen && (
                    <ul className="philosophy-list">
                      {philosophers.map((p) => (
                        <li key={p} className="philosophy-item">
                          {p}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* MOJA FILOZOFIA */}
        {openMainSection === "mojaFilozofia" && (
          <div>
            {[
              {
                title: "Refleksje z Taizé",
                content:
                  "Moje doświadczenia duchowe i filozoficzne podczas pobytu w Taizé.",
              },
              {
                title: "Bycie puppygirl / doggirl",
                content:
                  "Rozważania nad tożsamością, rolami i akceptacją samej siebie.",
              },
              {
                title: "Inspiracje z Boskiej Komedii",
                content:
                  "Analiza symboliki, metafizyki i egzystencjalnych motywów z Dantego.",
              },
              {
                title: "Moje ulubione cytaty",
                content:
                  "Cytaty z Nietzschego, Camusa, Sartre’a, które rezonują z moim spojrzeniem na życie.",
              },
            ].map((entry, i) => {
              const key = "mojaFilozofia_" + i;
              const isOpen = openSection === key;
              return (
                <div key={key}>
                  <h3
                    className="philosophy-section-title clickable"
                    onClick={() => toggleSection(key)}
                  >
                    {isOpen ? "▼" : "▶"} {entry.title}
                  </h3>
                  {isOpen && (
                    <ul className="philosophy-list">
                      <li className="philosophy-item">{entry.content}</li>
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Philosophy;
