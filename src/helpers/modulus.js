export default (num, frac) => {
  const diff = num % frac === 0 ? 1 : 0;
  return Math.floor(num / 6) - diff;
};
