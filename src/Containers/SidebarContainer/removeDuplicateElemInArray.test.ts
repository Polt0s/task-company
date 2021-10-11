import { removeDuplicateElemInArray } from './removeDuplicateElemInArray';

describe('test helpers function', () => {

  it('testing function removeDuplicateElemInArray', () => {
    const array: Array<string> = ['1', '1', '2', '3', '4', '4'];
    expect(removeDuplicateElemInArray(array)).toStrictEqual(['1', '2', '3', '4']);
    expect(removeDuplicateElemInArray([])).toBeNull();
  });

});
