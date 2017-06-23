import { darken, fade, convertRGBToHex } from '../utils/colorManipulator';
import { defaultPalette } from './colors';

class Palette {
  constructor(palette) {
    this.palette = palette || defaultPalette;
  }

  getRawColor(name) {
    return this.palette.find( x => x.name.toLowerCase() === name.toLowerCase());
  }

  getColor(name) {
    const color = this.getRawColor(name);
    if (color) {
      return {
        name: color.name,
        rgb: this.getRGB(name),
        hex: this.getHex(name)
      }
    }
  }

  getRGB(name) {
    const color = this.getRawColor(name);
    if (color) {
      return `rgb(${ color.r }, ${ color.g }, ${ color.b })`
    }
  }

  getHex(name) {
    const color = this.getRawColor(name);
    if (color) {
      return convertRGBToHex(color.r, color.g, color.b);
    }
  }

  getAllColors() {
    return this.colorNames().map(x => this.getColor(x))
  }

  colorNames() {
    return this.palette.map(x => x.name);
  }

  fade(name, value) {
    const color = this.getColor(name);
    return color && fade(color.rgb, 1-value);
  }
}

export default Palette;