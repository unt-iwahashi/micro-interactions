'use client';

import style from './PageHeader.module.scss';
import { GlobalMenu } from './GlobalMenu';

export const PageHeader = ({ title }: { title: string }) => {
  return (
    <>
      <header className={style.pageHeader}>
        <div className={style.pageHeader_inner}>
          <h1 className={style.pageHeader_title}>{title}</h1>
        </div>
        <GlobalMenu />
      </header>
    </>
  );
};
