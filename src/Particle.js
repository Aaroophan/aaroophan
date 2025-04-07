import React from 'react';
import { Particles } from 'react-tsparticles'; // Correctly import Particles
import useWindowSize from 'react-use/lib/useWindowSize';

export default function ParticlesComponent() {
  let { width, height } = useWindowSize();

  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: {
          enable: true,
          zIndex: 1,
        },
        particles: {
          number: {
            value: window.innerWidth < 1000 ? 10 : 20,
          },
          size: {
            value: 10,
          },
          move: {
            enable: true,
            speed: window.innerWidth < 1000 ? 1 : 2,
            direction: 'bottom', // Move particles downward
            straight: false,
            outModes: {
              default: 'out',
            },
          },
          shape: {
            type: 'rectangle', // Use rectangle shapes
          },
          opacity: {
            value: 0.75,
          },
          color: {
            value: '#6c757d', // Color of particles
          },
          roll: {
            vertical: true,
            random: {
              enable: true,
              minimumValue: 5,
            },
          },
        },
        interactivity: {
          detectsOn: 'canvas',
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 2,
            },
          },
        },
        retina_detect: true,
      }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
    />
  );
}
