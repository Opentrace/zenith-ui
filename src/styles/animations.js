import Radium from 'radium';

export const fadeIn = Radium.keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
}, 'fadeIn');
