import { removeDuplicate } from './RemoveDuplicate';

test('testing function removeDuplicate', () => {
  const array: Array<string> = ['1', '1', '2', '3', '4', '4'];
  expect(removeDuplicate(array)).toStrictEqual(['1', '2', '3', '4']);
  expect(removeDuplicate([])).toBeNull();
});