import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Wizard101 from "../../public/images/Wizard.jpg";
import Minecraft from "../../public/images/Minecraft.jpg";
import HTTYD from "../../public/images/HTTYD.jpg";
import BoskaKomedia from "../../public/images/komedia.jpg";
import HangingTemple from "../../public/images/hanging-temple.jpg";
import Socrates from "../../public/images/socrates.jpg";

export default function Gallery() {
  const images = [
    { src: Wizard101, title: "Wizard101" },
    { src: Minecraft, title: "Minecraft" },
    { src: HTTYD, title: "HTTYD" },
    { src: BoskaKomedia, title: "Boska Komedia" },
    { src: HangingTemple, title: "Hanging Temple" },
    { src: Socrates, title: "Socrates" },
  ];

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
