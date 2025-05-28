import React, { useRef, useState, useEffect } from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import type { ConfettiProps } from 'react-confetti/types/types';

interface ConfettiiProps {
  Colors?: string[];
}

const Confettii: React.FC<ConfettiiProps> = ({ Colors = ['#6c757d'] }) => {
  const { width, height } = useWindowSize();
  const [gravity, setGravity] = useState<number>(0);
  const [wind, setWind] = useState<number>(0);

  const drawShape: ConfettiProps['drawShape'] = (ctx) => {
    ctx.beginPath();
    ctx.rect(2, 2, 2, 10);
    ctx.rect(2, 2, 2, -10);
    ctx.fill();
  };

  useEffect(() => {
    const updateGravity = () => {
      const randomGravity = (Math.random() - 0.5) / 4;
      setGravity(randomGravity);
    };

    const updateWind = () => {
      const randomWind = (Math.random() - 0.5) / 4;
      setWind(randomWind);
    };

    updateGravity();
    updateWind();

    const gravityIntervalId = setInterval(updateGravity, 2000);
    const windIntervalId = setInterval(updateWind, 1000);

    return () => {
      clearInterval(gravityIntervalId);
      clearInterval(windIntervalId);
    };
  }, []);

  return (
    <Confetti
      width={width}
      height={height}
      numberOfPieces={width < 1000 ? 10 : 20}
      wind={wind}
      gravity={gravity}
      opacity={width < 1000 ? 0.75 : 0.9}
      colors={Colors}
      drawShape={drawShape}
      initialVelocityY={-20}
    />
  );
};

export default Confettii;