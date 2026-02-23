import "./Header.css";

const Header = ({ onClickBooks, onClickMovies }) => {
  return (
    <div>
      <header>MyHobbies</header>
      <nav>
        <ul>
          <li>Gry</li>
          <li>Seriale</li>
          <li onClick={onClickMovies} style={{ cursor: "pointer" }}>
            Filmy
          </li>
          <li onClick={onClickBooks} style={{ cursor: "pointer" }}>
            Książki
          </li>
          <li>Chiny</li>
          <li>Filozofia</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
