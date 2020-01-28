import Tool from './tool';

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

class PaintBucket extends Tool {
  constructor() {
    super();

    this.mouseDownListener = (e) => {
      this.isDrawing = true;
      this.pixelSize = this.getPixelSize();
      this.color = this.getColor();

      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.fillRect(0, 0, 512, 512);
    };
  }
}

const paintBucket = new PaintBucket();

export { paintBucket };
