'use client';
import style from './Loading01.module.scss';
import { Cards } from '../common/Cards';

export const Loading01 = () => {
  return (
    <>
      <Cards label='Loading_01'>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          className={style.loading}
        >
          <circle
            cx='12'
            cy='12'
            r='9.5'
          ></circle>
        </svg>
      </Cards>
    </>
  );
};
