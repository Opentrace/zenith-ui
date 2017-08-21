/* Colour Definitions */
const palx = require('palx');

export const palette = palx('#07c');

export const border = () => (`
  border-radius: 4px;
`);

export const boxShadow = () => (`
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
`);

export const fontFamily = () => (
  "font-family: 'Source Sans Pro', sans-serif;"
);

export default { border, boxShadow, fontFamily, palette };
