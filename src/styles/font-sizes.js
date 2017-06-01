const baseFontSize = 16;
const sizingFactors = {
  tiny: 0.7,
  small: 0.8,
  medium: 1,
  large: 2,
  huge: 3,
  jumbo: 4,
};

let fontSizes = {};
for (let factor in sizingFactors) {
  fontSizes[factor] = Math.round(baseFontSize * sizingFactors[factor]);
}

export default fontSizes;
export const fontSizeKeys = Object.keys(sizingFactors);
