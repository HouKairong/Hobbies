import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const basePath = import.meta.env.BASE_URL || "/";

// ===============================
// MAPA WSZYSTKICH GALERII
// ===============================
const galleryImages = {
  default: [
    { src: `${basePath}images/Wizard.jpg`, title: "Wizard101" },
    { src: `${basePath}images/Minecraft.jpg`, title: "Minecraft" },
    { src: `${basePath}images/HTTYD.jpg`, title: "HTTYD" },
    { src: `${basePath}images/komedia.jpg`, title: "Boska Komedia" },
    { src: `${basePath}images/hanging-temple.jpg`, title: "Hanging Temple" },
    { src: `${basePath}images/socrates.jpg`, title: "Socrates" },
  ],

  games: [
    "purpose/wizard101/wizardcity.png",
    "purpose/wizard101/krokotopia.png",
    "purpose/wizard101/marleybone.png",
    "purpose/wizard101/mooshu.png",
    "purpose/wizard101/dragonspyre.png",
    "purpose/wizard101/grizzleheim.png",
    "purpose/wizard101/wysteria.png",
    "purpose/wizard101/celestia.png",
    "purpose/wizard101/zafaria.png",
    "purpose/wizard101/avalon.png",
    "purpose/wizard101/azteca.png",
    "purpose/wizard101/khrysalis.png",
    "purpose/wizard101/darkmoor.png",
    "purpose/wizard101/polaris.png",
    "purpose/purpose.png",
  ].map((path, i) => ({
    src: `${basePath}images/${path}`,
    title: `Games ${i + 1}`,
  })),

  series: [
    "purpose/minecraft/overworld.png",
    "purpose/minecraft/nether.png",
    "purpose/minecraft/end.png",
    "purpose/purpose.png",
  ].map((path, i) => ({
    src: `${basePath}images/${path}`,
    title: `Series ${i + 1}`,
  })),

  books: [
    "purpose/books/geralt.png",
    "purpose/books/ciri.png",
    "purpose/books/shaojun.png",
    "purpose/books/nightking.png",
    "purpose/books/cersei.png",
    "purpose/books/sherlock.png",
    "purpose/books/L.png",
    "purpose/books/cesarzowa.png",
    "purpose/books/chiny.png",
    "purpose/books/pieklo.png",
    "purpose/books/dante.png",
    "purpose/books/thor.png",
    "purpose/books/helheim.png",
    "purpose/books/szczerbatek.png",
    "purpose/books/smoki.png",
    "purpose/books/sokrates.png",
    "purpose/books/shinigami.png",
    "purpose/purpose.png",
  ].map((path, i) => ({
    src: `${basePath}images/${path}`,
    title: `Books ${i + 1}`,
  })),

  manga: [
    "purpose/manga/alice.png",
    "purpose/manga/demon.png",
    "purpose/manga/demonlord.png",
    "purpose/manga/muttgf.png",
    "purpose/manga/persona.png",
    "purpose/manga/L.png",
    "purpose/manga/shaojun.png",
    "purpose/manga/shinigami.png",
    "purpose/purpose.png",
  ].map((path, i) => ({
    src: `${basePath}images/${path}`,
    title: `Manga ${i + 1}`,
  })),
};

// ===============================

export default function Gallery({ galleryType }) {
  const images = galleryImages[galleryType] || galleryImages.default;

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      {images.map((img, i) => (
        <img
          key={i}
          src={img.src}
          alt={img.title}
          onClick={() => {
            setIndex(i);
            setOpen(true);
          }}
          style={{ cursor: "pointer" }}
        />
      ))}

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images}
        index={index}
      />
    </>
  );
}
