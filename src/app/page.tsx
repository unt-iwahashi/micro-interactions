import style from './page.module.scss';
import { Button01 } from '@/components/button/Button01';
import { Loading01 } from '@/components/loading/Loading01';

export default function Home() {
  return (
    <>
      <div className={style.container}>
        <Button01 />
        <Loading01 />
      </div>
    </>
  );
}
