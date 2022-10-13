import style from './search-bar.module.scss';
import {useState} from 'react';

const SearchBar = ({onSearch}) => {
  const [term, setTerm] = useState('');

  const handleKeyDown = (e) => {
    if (e.key !== 'Enter') return;

    onSearch(term);
  };

  return (
    <div className={style.box}>
      <input
        className={style.text}
        onChange={(e) => setTerm(e.target.value)}
        onKeyDown={handleKeyDown}
        type="text"
        placeholder="Szukaj..."
      />
      <input className={style.btn} type="button" value="Szukaj"/>
    </div>
  );
};

export default SearchBar;
