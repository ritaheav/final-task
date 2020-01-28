import Tool from './tool';

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

class Pencil extends Tool {
  constructor() {
    super();

    this.mouseDownListener = (e) => {
      this.isDrawing = true;
      this.pixelSize = this.getPixelSize();
      this.color = this.getColor();

      const x = this.calculateCoordinate(e.offsetX);
      const y = this.calculateCoordinate(e.offsetY);

      ctx.fillStyle = this.color;
      ctx.fillRect(x, y, 1, 1);
      localStorage.setItem(canvas, canvas.toDataURL());
    };

    this.mouseMoveListener = (e) => {
      if (!this.isDrawing) return;

      const x = this.calculateCoordinate(e.offsetX);
      const y = this.calculateCoordinate(e.offsetY);

      ctx.fillStyle = this.color;
      ctx.fillRect(x, y, 1, 1);
      localStorage.setItem(canvas, canvas.toDataURL());
    };
  }
}

const pencil = new Pencil();

export { pencil };
