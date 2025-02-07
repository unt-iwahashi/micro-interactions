'use client';
import style from './page.module.scss';
import { Loading01 } from '@/components/loading/Loading01';

export default function Home() {
  return (
    <>
      <div className={style.container}>
        <Loading01 />
      </div>
    </>
  );
}
