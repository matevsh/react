import {Component} from 'react';
import style from './hotel.module.scss';

const Hotel = () => {
  return (
    <div className={style.hotel}>
      <div className={style.imgbox}/>
      <p className={style.type}>Pensjonat</p>
      <p className={style.rating}>Ocena: 8.1</p>
      <p className={style.location}>Warszawa</p>
      <input className={style.show} type="button" value="Pokaż"/>
      <p className={style.desc}>Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Ab autem consectetur, eveniet facere facilis
        illum inventore laborum magni, nisi quae quo quos rat</p>
    </div>
  );
};

export default Hotel;
