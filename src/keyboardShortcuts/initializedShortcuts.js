export function initKeyboard() {
  document.addEventListener('keydown', (event) => {
    switch (event.code) {
      case ('KeyB'):
        document.querySelector('#paint-bucket').click();
        break;

      case ('KeyP'):
        document.querySelector('#pencil').click();
        break;

      case ('KeyC'):
        document.querySelector('#choose-color').click();
        break;

      case ('KeyE'):
        document.querySelector('#eraser').click();
        break;

      case ('KeyL'):
        document.querySelector('#stroke').click();
        break;
    }
  });
}
