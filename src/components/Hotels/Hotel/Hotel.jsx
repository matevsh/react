import style from './hotel.module.scss';

const Hotel = ({name, rating, location, desc}) => {
  return (
    <div className={style.hotel}>
      <div className={style.imgbox}/>
      <p className={style.type}>{name}</p>
      <p className={style.rating}>Ocena: {rating}</p>
      <p className={style.location}>{location}</p>
      <input className={style.show} type="button" value="Pokaż"/>
      <p className={style.desc}>{desc}</p>
    </div>
  );
};

export default Hotel;
