import { signWithGoogle } from './signIn.js';

test('signWithGoogle function exists', () => {
  expect(signWithGoogle).toBeDefined();
});

test('Should return get signWithGoogle function', () => {
  expect(signWithGoogle).toBeInstanceOf(Function);
});
