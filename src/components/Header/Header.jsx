import style from './header.module.scss';
import SearchBar from './Search-bar/Search-bar.jsx';

const Header = ({onSearch}) => {
  return (
    <div className={style.header}>
      <SearchBar onSearch={onSearch}/>
    </div>
  );
};

export default Header;
