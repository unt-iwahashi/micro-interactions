import style from './Button01.module.scss';
import { useRive } from '@rive-app/react-canvas';

export const Button01 = () => {
  const { RiveComponent } = useRive({
    src: '/assets/rive/button/button01.riv',
    autoplay: true,
    stateMachines: 'State Machine 1',
  });

  return (
    <div>
      <RiveComponent className={style.button01} />
    </div>
  );
};
