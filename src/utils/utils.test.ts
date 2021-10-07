import { removeDuplicateElements } from './helpers/removeDuplicateElements';
import { parityCheckNumber } from './helpers/parityCheckNumber';

describe('test helpers function', () => {

  it('testing function removeDuplicateElements', () => {
    const array: Array<string> = ['1', '1', '2', '3', '4', '4'];
    expect(removeDuplicateElements(array)).toStrictEqual(['1', '2', '3', '4']);
    expect(removeDuplicateElements([])).toBeNull();
  });

  it('testing function parityCheckNumber', () => {
    expect(parityCheckNumber(2)).toBeFalsy();
    expect(parityCheckNumber(16)).toBeFalsy();
    expect(parityCheckNumber(3)).toBeTruthy();
    expect(parityCheckNumber(27)).toBeTruthy();
  });
});
