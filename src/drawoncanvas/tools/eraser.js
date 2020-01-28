import Tool from './tool';

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

class Eraser extends Tool {
  constructor() {
    super();

    this.mouseDownListener = (e) => {
      this.isDrawing = true;
      this.pixelSize = this.getPixelSize();
      this.color = this.getColor();

      const x = this.calculateCoordinate(e.offsetX);
      const y = this.calculateCoordinate(e.offsetY);

      ctx.clearRect(x, y, 4, 4);
      localStorage.setItem(canvas, canvas.toDataURL());
    };

    this.mouseMoveListener = (e) => {
      const x = this.calculateCoordinate(e.offsetX);
      const y = this.calculateCoordinate(e.offsetY);

      if (!this.isDrawing) return;

      ctx.clearRect(x, y, 4, 4);
      localStorage.setItem(canvas, canvas.toDataURL());
    };
  }
}

const eraser = new Eraser();

export { eraser };
