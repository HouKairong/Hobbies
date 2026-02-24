import "./Header.css";

const Header = ({
  onClickBooks,
  onClickMovies,
  onClickGames,
  onClickSeries,
  onClickChina,
}) => {
  return (
    <div>
      <header>MyHobbies</header>
      <nav>
        <ul>
          <li onClick={onClickGames} style={{ cursor: "pointer" }}>
            Gry
          </li>
          <li onClick={onClickSeries} style={{ cursor: "pointer" }}>
            Seriale
          </li>
          <li onClick={onClickMovies} style={{ cursor: "pointer" }}>
            Filmy
          </li>
          <li onClick={onClickBooks} style={{ cursor: "pointer" }}>
            Książki
          </li>
          <li onClick={onClickChina} style={{ cursor: "pointer" }}>
            Chiny
          </li>
          <li>Filozofia</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
