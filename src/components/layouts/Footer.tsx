import style from './Footer.module.scss';

export const Footer = () => {
  return (
    <>
      <footer className={style.footer}>
        <small className={style.copyright}>&copy; 2025 un-T Iwahashi. </small>
      </footer>
    </>
  );
};
