export function randomNumberInterval(start: number, end: number) {
  return Math.floor(Math.random() * (end - start + 1)) + start;
}
