import style from './header.module.scss';
import SearchBar from './Search-bar/Search-bar.jsx';

const Header = () => {
  return (
    <div className={style.header}>
      <SearchBar/>
    </div>
  );
};

export default Header;
