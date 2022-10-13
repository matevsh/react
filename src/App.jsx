import Header from './components/Header/Header.jsx';
import Menu from './components/Menu/Menu.jsx';
import Hotels from './components/Hotels/Hotels.jsx';
import {hotelsDB} from './dbxd.js';
import {useState} from 'react';

const App = () => {
  const [hotels, setHotels] = useState([...hotelsDB]);

  const filterHotels = (term) => {
    const normalizeTerm = term.trim().toLowerCase();

    setHotels(hotelsDB.filter((x) => (
      x.name.toLowerCase().includes(normalizeTerm)
    )));
  };

  return (
    <>
      <Header onSearch={filterHotels}/>
      <Menu />
      <Hotels hotels={hotels}/>
    </>
  );
};

export default App;
