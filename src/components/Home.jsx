import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // <-- importujemy
import "./Home.css";
import Wizard from "../../public/images/Wizard.jpg";
import Minecraft from "../../public/images/Minecraft.jpg";
import HTTYD from "../../public/images/HTTYD.jpg";
import Komedia from "../../public/images/komedia.jpg";
import HangingTemple from "../../public/images/hanging-temple.jpg";
import Socrates from "../../public/images/socrates.jpg";

const images = [Wizard, Minecraft, HTTYD, Komedia, HangingTemple, Socrates];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate(); // <-- hook do przekierowań

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // handler kliknięcia
  const goTo = (path) => {
    navigate(path);
  };

  return (
    <div
      className="home-background"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      <div className="home-overlay">
        <h1>
          ✨ Witaj w <span className="title">MyHobbies</span> ✨
        </h1>
        <p className="home-intro">
          To moja osobista przestrzeń, w której zbieram wszystko, co mnie
          inspiruje i sprawia że ja to ja – gry, seriale, filmy, książki, Chiny
          i filozofię.
        </p>
        <div className="home-sections">
          <div className="home-card" onClick={() => goTo("/games")}>
            <h2>🎮 Gry</h2>
            <p>Światy, kojarzące mi się z różnymi światami z Wizard101</p>
          </div>
          <div className="home-card" onClick={() => goTo("/series")}>
            <h2>📺 Seriale</h2>
            <p>Historie, kojarzące mi się z różnymi wymiarami z Minecrafta</p>
          </div>
          <div className="home-card" onClick={() => goTo("/movies")}>
            <h2>🎬 Filmy</h2>
            <p>
              Historie, które poznałam w różnych etapach życia i które mnie
              ukształtowały
            </p>
          </div>
          <div className="home-card" onClick={() => goTo("/books")}>
            <h2>📚 Książki</h2>
            <p>
              Niewiele czytam, ale czasami mniej znaczy więcej. Również
              kojarzące się z Wizard101
            </p>
          </div>
          <div className="home-card" onClick={() => goTo("/china")}>
            <h2>🀄 Chiny</h2>
            <p>
              Kultura, język, moje studia i wszystko, co związane z Krajem
              Środka, czyli 中國.
            </p>
          </div>
          <div className="home-card" onClick={() => goTo("/philosophy")}>
            <h2>🧠 Filozofia</h2>
            <p>
              Wiedzę zdobywam dla samej wiedzy. A ja wiem że w gruncie rzeczy
              nic nie wiem
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
