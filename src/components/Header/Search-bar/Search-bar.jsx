import style from './search-bar.module.scss';

const SearchBar = () => {
  return (
    <div className={style.box}>
      <input className={style.text} type="text" placeholder="Szukaj..."/>
      <input className={style.btn} type="button" value="Szukaj"/>
    </div>
  );
};

export default SearchBar;
