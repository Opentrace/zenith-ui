import { darken } from '../utils/colorManipulator';

export const baseOrange = "rgba(238, 99, 82, 1)";
export const baseGreen = "rgba(89, 205, 144, 1)";
export const baseBlue = "rgba(63, 167, 214, 1)";
export const baseYellow = "rgba(250, 192, 94, 1)";
export const baseGray = "rgba(104, 105, 99, 1)";
export const white = "#fff"
export const palette = {
  primaryColor: baseOrange,
  accentColor1: baseBlue,
  accentColor2: baseYellow,
  accentColor3: baseGreen,
  primaryTextColor: darken(baseGray, 0.5),
  secondaryTextColor: baseGray,
};
