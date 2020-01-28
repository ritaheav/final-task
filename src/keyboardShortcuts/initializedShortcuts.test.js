import { initKeyboard } from './initializedShortcuts';

test('initKeyboard function exists', () => {
  expect(initKeyboard).toBeDefined();
});

test('Should return get initKeyboard  function', () => {
  expect(initKeyboard).toBeInstanceOf(Function);
});
