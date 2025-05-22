import style from './Rating01.module.scss';
import { useEffect, useState } from 'react';
import { useRive } from '@rive-app/react-canvas';

export const Rating01 = () => {
  const [ratingValue, setRatingValue] = useState(0);
  const { rive, RiveComponent } = useRive({
    src: '/assets/rive/rating/rating01.riv',
    autoplay: true,
    stateMachines: 'State Machine 1',
  });

  // Riveの状態マシンから入力値を取得するためのuseEffect
  useEffect(() => {
    if (!rive) return;

    const inputs = rive.stateMachineInputs('State Machine 1');
    const ratingInput = inputs.find((input) => input.name === 'rating');

    let animationId: number;

    // ratingの値をReactに同期
    const update = () => {
      if (ratingInput) {
        if (typeof ratingInput.value === 'number') {
          setRatingValue(ratingInput.value);
        }
      }
      animationId = requestAnimationFrame(update);
    };

    update();

    return () => cancelAnimationFrame(animationId);
  }, [rive]);

  return (
    <div>
      <RiveComponent className={style.rating01} />
      <p>現在の評価: {ratingValue}</p>
    </div>
  );
};
