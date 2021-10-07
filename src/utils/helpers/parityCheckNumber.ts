export const parityCheckNumber = (num: number | undefined) => {
  if (num === undefined) return null;
  return num % 2 !== 0;
};
