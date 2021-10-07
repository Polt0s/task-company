export const removeDuplicateElements = (arr: Array<string>) => {
  if (arr.length === 0) {
    return null;
  };
  return arr.filter((item, index) => arr.indexOf(item) === index);
};
