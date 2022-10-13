import Hotel from './Hotel/Hotel.jsx';
import style from './hotels.module.scss';

const Hotels = ({hotels}) => {
  console.log('witam');

  return (
    <div className={style.hotels}>
      <h1 className={style.title}>Oferty:</h1>
      {hotels.map((x) => (
        <Hotel key={x.id} {...x}/>
      ))}
    </div>
  );
};

export default Hotels;
