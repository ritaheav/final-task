export function showKeyboardShortcuts() {
  const shortcuts = document.querySelector('.shortcuts-menu');
  const keyboard = document.querySelector('.keyboard-shortcuts');
  keyboard.addEventListener('click', () => {
    shortcuts.classList.toggle('show');
  });
}
