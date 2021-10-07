import { removeDuplicateElements } from './removeDuplicateElements';

test('testing function removeDuplicateElements', () => {
  const array: Array<string> = ['1', '1', '2', '3', '4', '4'];
  expect(removeDuplicateElements(array)).toStrictEqual(['1', '2', '3', '4']);
  expect(removeDuplicateElements([])).toBeNull();
});