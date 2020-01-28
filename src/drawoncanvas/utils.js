const canvas = document.querySelector('#canvas');

const updateColor = function (color) {
  colorInputWrapper.style.backgroundColor = color;
  prevColor.style.backgroundColor = canvas.dataset.currentColor || '#FFFFFF';

  canvas.dataset.previousColor = canvas.dataset.currentColor || '#FFFFFF';
  canvas.dataset.currentColor = color;
};

const colorInput = document.querySelector('#current-color');
const colorInputWrapper = document.querySelector('#current-color-wrapper');
const prevColor = document.querySelector('#previous-color');
updateColor('#000000');

colorInput.addEventListener('input', ({ target }) => {
  updateColor(target.value);
});

prevColor.addEventListener('click', () => {
  updateColor(canvas.dataset.previousColor);
});

export { updateColor };
