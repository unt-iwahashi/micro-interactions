import style from './Cards.module.scss';

export const Cards = ({ children, label }: { children: React.ReactNode; label: string }) => {
  return (
    <>
      <div className={style.cards}>
        <div className={style.cards_label}>{label}</div>
        <div className={style.cards_contents}>{children}</div>
      </div>
    </>
  );
};
