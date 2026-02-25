import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="headerAndNav">
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
        </ul>
      </nav>
    </div>
  );
};

export default Header;
