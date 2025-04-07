
import React, { useRef, useState, useEffect } from 'react';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

export default function Confettii({ Colors = ['#6c757d'] }){
  let { width, height } = useWindowSize();
  const drawShape = (ctx) => {
    ctx.beginPath();
    ctx.rect(2, 2, 2, 10);
    ctx.rect(2, 2, 2, -10);
    ctx.fill();
  };

  let [Gravity, setGravity] = useState(0);
  let [Wind, setWind] = useState(0);

  useEffect(() => {
    const updateGravity = () => {
      const randomGravity = (Math.random() - 0.5)/4;
      setGravity(randomGravity);
    };
    const updateWind = () => {
      const randomWind = (Math.random() - 0.5)/4;
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
      numberOfPieces={window.innerWidth < 1000 ? 10 : 20}
      wind={Wind}
      gravity={Gravity}
      opacity={window.innerWidth < 1000 ? 0.75 : 0.9}
      colors={Colors}
      drawShape={drawShape}
      initialVelocityY={-20}
    />
  )
}