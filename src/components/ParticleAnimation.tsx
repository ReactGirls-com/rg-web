import { useEffect, useState } from 'react';
import clsx from 'clsx';

import style from './ParticleAnimation.module.scss';

type ParticleData = {
  id: number;
  angle: number;
  distance: number;
  size: number;
};

const randomNumber = (min: number, max: number) =>
  Math.random() * (max - min) + min;

const generateParticle = (id: number): ParticleData => {
  const angle = randomNumber(0, 360);
  const distance = randomNumber(15, 50);
  const size = randomNumber(5, 35);

  return { id, angle, distance, size };
};

const polarToCartesian = (angle: number, distance: number) => {
  const angleInRadians = (angle * Math.PI) / 180;
  const angleX = distance * Math.cos(angleInRadians);
  const angleY = distance * Math.sin(angleInRadians);

  return { angleX, angleY };
};

type ParticleAnimationProps = {
  isActive: boolean;
  onComplete: () => void;
  iconClassName: string;
};

export const ParticleAnimation: React.FC<ParticleAnimationProps> = ({
  isActive,
  onComplete,
  iconClassName,
}) => {
  const [particles, setParticles] = useState<ParticleData[]>([]);

  useEffect(() => {
    if (!isActive) {
      return;
    }

    const newParticles = Array.from({ length: 6 }, (_, index) =>
      generateParticle(index),
    );

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setParticles(newParticles);

    const timer = setTimeout(() => {
      setParticles([]);
      onComplete();
    }, 1200);

    return () => clearTimeout(timer);
  }, [isActive, onComplete]);

  if (!isActive || particles.length === 0) {
    return null;
  }

  return (
    <div className={style.particleContainer}>
      {particles.map((particle) => {
        const { angleX, angleY } = polarToCartesian(
          particle.angle,
          particle.distance,
        );

        return (
          <div
            key={particle.id}
            className={style.particle}
            style={
              {
                '--angleX': `${angleX}px`,
                '--angleY': `${angleY}px`,
                '--particleSize': particle.size / 10,
              } as React.CSSProperties
            }
          >
            <span
              className={clsx(style.icon, iconClassName)}
              aria-hidden="true"
            />
          </div>
        );
      })}
    </div>
  );
};
