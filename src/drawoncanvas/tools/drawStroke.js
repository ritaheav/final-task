import Tool from './tool';

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

class Stroke extends Tool {
  constructor() {
    super();

    this.isDragging = false;
    this.dragStartLocation = { x: 0, y: 0 };
    this.snapshot = undefined;

    this.mouseDownListener = (e) => {
      this.pixelSize = this.getPixelSize();
      this.color = this.getColor();
      this.isDragging = true;
      this.dragStartLocation = this.getCanvasCoordinates(e);
      this.takeSnapshot();
    };

    this.mouseMoveListener = (e) => {
      if (!this.isDragging) return;
      this.restoreSnapshot();
      this.drawLine(this.getCanvasCoordinates(e));
    };

    this.mouseUpListener = (e) => {
      this.isDragging = false;
      this.restoreSnapshot();
      this.drawLine(this.getCanvasCoordinates(e));
    };
  }

  takeSnapshot() {
    this.snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
  }

  restoreSnapshot() {
    ctx.putImageData(this.snapshot, 0, 0);
  }

  getCanvasCoordinates(e) {
    const x = this.calculateCoordinate(e.offsetX);
    const y = this.calculateCoordinate(e.offsetY);
    return { x, y };
  }

  drawLine(position) {
    ctx.strokeStyle = this.getColor();
    ctx.beginPath();
    ctx.moveTo(this.dragStartLocation.x, this.dragStartLocation.y);
    ctx.lineTo(position.x, position.y);
    ctx.stroke();
  }
}

const stroke = new Stroke();

export { stroke };
