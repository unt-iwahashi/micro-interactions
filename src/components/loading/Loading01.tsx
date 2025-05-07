'use client';
import style from './Loading01.module.scss';

export const Loading01 = () => {
  const text = 'Loading...';
  const letters = text.split('').map((char, index) => <span key={index}>{char}</span>);

  return (
    <>
      <div className={style.loading}>{letters}</div>
    </>
  );
};
