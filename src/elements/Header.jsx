import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import GalleryModal from "./GalleryModal";
import "./Header.css";

const Header = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const handleResetAllData = () => {
    const confirmed = window.confirm(
      "Usunąć wszystkie zapisane dane na stronie?",
    );

    if (!confirmed) return;

    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <div className="headerAndNav">
        <button
          className="resetDataButton"
          type="button"
          onClick={handleResetAllData}
          aria-label="Resetuj wszystkie dane"
        >
          Reset
        </button>

        <button
          className="galleryButton"
          onClick={() => setIsGalleryOpen(true)}
        >
          📸
        </button>

        <header>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            MyHobbies
          </Link>
        </header>

        <nav>
          <ul>
            <li>
              <NavLink
                to="/games"
                className={({ isActive }) =>
                  isActive ? "active-link" : undefined
                }
              >
                Gry
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/series"
                className={({ isActive }) =>
                  isActive ? "active-link" : undefined
                }
              >
                Seriale
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/movies"
                className={({ isActive }) =>
                  isActive ? "active-link" : undefined
                }
              >
                Filmy
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/books"
                className={({ isActive }) =>
                  isActive ? "active-link" : undefined
                }
              >
                Książki
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/china"
                className={({ isActive }) =>
                  isActive ? "active-link" : undefined
                }
              >
                Chiny
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/philosophy"
                className={({ isActive }) =>
                  isActive ? "active-link" : undefined
                }
              >
                Filozofia
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/warhammer"
                className={({ isActive }) =>
                  isActive ? "active-link" : undefined
                }
              >
                Warhammer 40,000
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {isGalleryOpen && (
        <GalleryModal onClose={() => setIsGalleryOpen(false)} />
      )}
    </>
  );
};

export default Header;
