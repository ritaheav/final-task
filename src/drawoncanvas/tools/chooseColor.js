import Tool from './tool';
import { updateColor } from '../utils';

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

class ColorPicker extends Tool {
  constructor() {
    super();

    this.mouseDownListener = (e) => {
      this.pixelSize = this.getPixelSize();
      const x = this.calculateCoordinate(e.offsetX);
      const y = this.calculateCoordinate(e.offsetY);
      const imageData = ctx.getImageData(x, y, 1, 1);
      const rgb = [imageData.data[0], imageData.data[1], imageData.data[2]];
      const color = this.rgbToHex(rgb);
      updateColor(color);
    };
  }

  rgbToHex(rgb) {
    const hexColor = rgb
      .map((i) => {
        const hex = i.toString(16);
        return hex.length === 1 ? `0${hex}` : hex;
      })
      .join('');

    console.log(`#${hexColor}`);
    return `#${hexColor}`;
  }
}

const colorPicker = new ColorPicker();

export { colorPicker };
