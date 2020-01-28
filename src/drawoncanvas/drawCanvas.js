import { pencil } from './tools/drawPencil';
import { paintBucket } from './tools/PaintBucket';
import { colorPicker } from './tools/chooseColor';
import { eraser } from './tools/eraser';
import { stroke } from './tools/drawStroke';

function drawCanvas(canvasSize, pixelSize) {
  const canvas = document.querySelector('#canvas');
  const ctx = canvas.getContext('2d');
  const tools = document.querySelector('.tools');
  let lastTool;

  canvas.width = canvasSize;
  canvas.height = canvasSize;
  canvas.dataset.pixelSize = pixelSize;

  ctx.fillStyle = '#FFFFFF';
  ctx.fill();
  ctx.fillRect(0, 0, 512, 512);

  tools.onclick = ({ target }) => {
    const tool = target.closest('button');
    const activeTool = tools.querySelector('.active');
    if (activeTool) {activeTool.classList.remove('active')};
    tool.classList.add('active');

    if (lastTool) {lastTool.removeListeners()};

    if (tool.id === 'pencil') {
      pencil.on();
      lastTool = pencil;
    } else if (tool.id === 'paint-bucket') {
      paintBucket.on();
      lastTool = paintBucket;
    } else if (tool.id === 'choose-color') {
      colorPicker.on();
      lastTool = colorPicker;
    } else if (tool.id === 'eraser') {
      eraser.on();
      lastTool = eraser;
    } else if (tool.id === 'stroke') {
      stroke.on();
      lastTool = stroke;
    }
  };
}

export { drawCanvas };
