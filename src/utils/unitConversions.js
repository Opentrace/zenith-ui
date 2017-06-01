import warning from 'warning';
import fontSizes, { baseFontSize } from './font-sizes';

export function getFontSize(size='medium', unit='px') {
  if (unit === 'px') {
    return `${ fontSizes[size] }px`;
  }
  console.log(fontSizes[size] / baseFontSize);
}
