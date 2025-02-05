import { ReactNode } from 'react';
import style from './Cards.module.scss';

export const Cards = ({ children, label }: { children: ReactNode; label: string }) => {
  return (
    <>
      <div className={style.cards}>
        <div className={style.cards_label}>{label}</div>
        <div>{children}</div>
      </div>
    </>
  );
};
