import style from './Header.module.scss';
import { GlobalMenu } from './GlobalMenu';

export const Header = () => {
  return (
    <>
      <header className={style.header}>
        <h1 className={style.title}>Micro_Interactions</h1>
        <GlobalMenu />
      </header>
    </>
  );
};
