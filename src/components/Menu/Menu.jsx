import style from './menu.module.scss';

const Header = () => {
  return (
    <div className={style.menu}>
      <a className={style.link} href="#"> Home</a>
    </div>
  );
};

export default Header;
