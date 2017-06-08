import warning from 'warning';

const baseFontSize = 16;
const sizingFactors = {
  tiny: 0.7,
  small: 0.8,
  medium: 1,
  large: 1.5,
  huge: 2,
  jumbo: 3,
};

let fontSizes = {};
for (let factor in sizingFactors) {
  fontSizes[factor] = Math.round(baseFontSize * sizingFactors[factor]);
}

const fontSizeKeys = Object.keys(sizingFactors);

function getFontSize(size='medium', unit='') {
  const validUnit = (unit === '' ||unit === 'px' || unit === 'em');
  warning(validUnit, 'Units must be either "px", "em" or empty');
  if (unit === 'em') {
    return `${ fontSizes[size] / baseFontSize }${ unit }`;
  }
  return `${ fontSizes[size] }${ unit }`;
}

export {
  fontSizes as default,
  baseFontSize,
  getFontSize,
  fontSizeKeys,
};
