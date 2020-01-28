import { showKeyboardShortcuts } from './shortcuts';

test('showKeyboardShortcuts function exists', () => {
  expect(showKeyboardShortcuts).toBeDefined();
});

test('Should return get showKeyboardShortcuts function', () => {
  expect(showKeyboardShortcuts).toBeInstanceOf(Function);
});
