import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import GalleryModal from "./GalleryModal";
import "./Header.css";
import {
  clearCurrentAccountData,
  getAccountNickname,
  isAccountLoggedIn,
  loginToAccount,
  logoutFromAccount,
  subscribeToAccountState,
} from "../data/accountStore";

const Header = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [nicknameInput, setNicknameInput] = useState("");
  const [accountNickname, setAccountNickname] = useState(() =>
    getAccountNickname(),
  );
  const [isAccountLoading, setIsAccountLoading] = useState(false);
  const [accountError, setAccountError] = useState("");

  useEffect(() => {
    const unsubscribe = subscribeToAccountState((snapshot) => {
      setAccountNickname(snapshot.nickname || "");
      setIsAccountLoading(Boolean(snapshot.loading));
      setAccountError(snapshot.error || "");
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!isAccountModalOpen) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsAccountModalOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isAccountModalOpen]);

  const handleResetAllData = () => {
    if (!isAccountLoggedIn()) {
      window.alert("Najpierw zaloguj się do konta.");
      return;
    }

    const confirmed = window.confirm(
      "Usunąć wszystkie zapisane dane dla tego konta?",
    );

    if (!confirmed) return;

    clearCurrentAccountData().catch((error) => {
      window.alert(error?.message || "Nie udało się zresetować danych konta.");
    });
  };

  const openAccountModal = () => {
    setNicknameInput(accountNickname || "");
    setAccountError("");
    setIsAccountModalOpen(true);
  };

  const handleAccountLogout = () => {
    logoutFromAccount();
    setNicknameInput("");
    setIsAccountModalOpen(false);
  };

  const handleAccountLogin = async (event) => {
    event.preventDefault();

    const normalizedNickname = nicknameInput.trim();
    if (!normalizedNickname) return;

    setAccountError("");

    try {
      await loginToAccount(normalizedNickname);
      setIsAccountModalOpen(false);
    } catch (error) {
      setAccountError(error?.message || "Logowanie nieudane.");
    }
  };

  return (
    <>
      <div className="headerAndNav">
        <div className="headerTopLeftPanel">
          <div className="headerTopLeftActions">
            <button
              type="button"
              className="accountButton"
              onClick={openAccountModal}
            >
              Konto
            </button>

            <Link to="/progress" className="progressButton">
              Postępy
            </Link>

            <button
              className="resetDataButton"
              type="button"
              onClick={handleResetAllData}
              aria-label="Resetuj wszystkie dane"
            >
              Reset
            </button>
          </div>

          <div className="accountNameLabel">
            {accountNickname ? `Konto: ${accountNickname}` : "Konto: gość"}
          </div>
        </div>

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

      {isAccountModalOpen && (
        <div
          className="accountModalOverlay"
          onClick={() => setIsAccountModalOpen(false)}
        >
          <div
            className="accountModalCard"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="accountModalClose"
              onClick={() => setIsAccountModalOpen(false)}
              aria-label="Zamknij logowanie"
            >
              ×
            </button>

            <h3>Konto</h3>
            {accountNickname ? (
              <>
                <p>Jesteś zalogowany jako {accountNickname}.</p>
                <button
                  type="button"
                  className="accountLogoutButton"
                  onClick={handleAccountLogout}
                  disabled={isAccountLoading}
                >
                  Wyloguj
                </button>
              </>
            ) : (
              <>
                <p>Wpisz nickname i zaloguj się.</p>
                <form
                  onSubmit={handleAccountLogin}
                  className="accountLoginForm"
                >
                  <input
                    type="text"
                    value={nicknameInput}
                    onChange={(event) => setNicknameInput(event.target.value)}
                    placeholder="Twój nickname"
                    autoFocus
                    required
                    disabled={isAccountLoading}
                  />
                  <button type="submit" disabled={isAccountLoading}>
                    {isAccountLoading ? "Logowanie..." : "Zaloguj"}
                  </button>
                </form>
              </>
            )}

            {accountError && (
              <div className="accountErrorMessage">{accountError}</div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
