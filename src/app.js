import './style.css';
import { drawCanvas } from './drawoncanvas/drawCanvas.js';
import { initKeyboard } from './keyboardShortcuts/initializedShortcuts.js';
import { showKeyboardShortcuts } from './keyboardShortcuts/shortcuts.js';
import { signWithGoogle } from './authentication/signIn.js';

const createSprite = document.querySelector('.create-sprite');
const logo = document.querySelector('.logo');
const drawingArea = document.querySelector('.drawing-area');
const landingPage = document.querySelector('.landing-page');

drawingArea.classList.add('hidden');

createSprite.addEventListener('click', () => {
  drawingArea.classList.remove('hidden');
  landingPage.classList.add('hidden');
});

logo.addEventListener('click', () => {
  drawingArea.classList.add('hidden');
  landingPage.classList.remove('hidden');
});

const size = document.querySelector('.choose-size');

size.addEventListener('click', (ev) => {
  const activeSize = size.querySelector('.active');
  if (activeSize) {activeSize.classList.remove('active')};

  ev.target.closest('button').classList.add('active');
});

size.addEventListener('click', ({ target: { dataset } }) => {
  drawCanvas(Number(dataset.canvasSize), Number(dataset.pixelSize));
});

initKeyboard();
showKeyboardShortcuts();
signWithGoogle();
