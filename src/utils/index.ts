export const createRange = (length: number, start: number = 0): number[] =>
  Array.from({ length }).map((_, index) => index + start);
