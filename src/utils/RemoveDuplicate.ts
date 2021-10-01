export const removeDuplicate = (arr: Array<string>) => {
  return arr.filter((item, index) => arr.indexOf(item) === index);
};
