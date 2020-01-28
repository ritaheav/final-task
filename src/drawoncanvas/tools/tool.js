const canvas = document.querySelector('#canvas');

export default class Tool {
  constructor() {
    this.color = '#000000';
    this.pixelSize = 0;
    this.isDrawing = false;

    this.mouseDownListener = (e) => {
      this.isDrawing = true;
      this.pixelSize = this.getPixelSize();
      this.color = this.getColor();
    };

    this.mouseMoveListener = (e) => {
      if (!this.isDrawing) return;
    };

    this.mouseUpListener = () => {
      this.isDrawing = false;
    };

    this.mouseLeaveListener = () => {
      this.isDrawing = false;
    };
  }

  on() {
    this.setListeners();
  }

  getColor() {
    return canvas.dataset.currentColor;
  }

  getPixelSize() {
    return Number(canvas.dataset.pixelSize);
  }

  calculateCoordinate(coord) {
    return Math.floor(coord / this.pixelSize);
  }

  setListeners() {
    canvas.onmousedown = this.mouseDownListener;
    canvas.onmousemove = this.mouseMoveListener;
    canvas.onmouseleave = this.mouseLeaveListener;
    canvas.onmouseup = this.mouseUpListener;
  }

  removeListeners() {
    canvas.onmousedown = null;
    canvas.onmousemove = null;
    canvas.onmouseleave = null;
    canvas.onmouseup = null;
  }
}
