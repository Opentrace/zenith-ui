const baseSpacingUnit = 24;
const spacingFactors = {
  none: 0,
  micro: 0.25,
  tiny: 0.5,
  small: 0.75,
  medium: 1,
  large: 1.5,
  huge: 2,
  jumbo: 4
};

let spacingUnits = {};
for (let factor in spacingFactors) {
  spacingUnits[factor] = Math.round(baseSpacingUnit * spacingFactors[factor]);
}

export default spacingUnits;
export const spacingKeys = Object.keys(spacingFactors);
