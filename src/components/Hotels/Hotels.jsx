import {Component} from 'react';
import Hotel from './Hotel/Hotel.jsx';
import style from './hotels.module.scss';

const arr = [1, 2, 3, 4, 5];

class Hotels extends Component {
  render() {
    return (
      <div className={style.hotels}>
        <h1 className={style.title}>Oferty:</h1>
        {arr.map((x) => (
          <Hotel key={x} id={x}/>
        ))}
      </div>
    );
  }
}

export default Hotels;
